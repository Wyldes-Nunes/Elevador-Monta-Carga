import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/data';
import { 
  createMaterial, 
  updateMaterial, 
  getMaterialById, 
  getMaterials, 
  getMaterialsByComponent,
  getCriticalMaterials
} from '@/lib/db';
import { updateMaterialAvailability } from '@/lib/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const component = searchParams.get('component');
  const critical = searchParams.get('critical');
  
  const { DB } = await getCloudflareContext();
  
  try {
    if (id) {
      const material = await getMaterialById(DB, id);
      if (!material) {
        return NextResponse.json({ error: 'Material não encontrado' }, { status: 404 });
      }
      return NextResponse.json(material);
    } else if (component) {
      const materials = await getMaterialsByComponent(DB, component);
      return NextResponse.json(materials);
    } else if (critical === 'true') {
      const materials = await getCriticalMaterials(DB);
      return NextResponse.json(materials);
    } else {
      const materials = await getMaterials(DB);
      return NextResponse.json(materials);
    }
  } catch (error) {
    console.error('Erro ao buscar materiais:', error);
    return NextResponse.json({ error: 'Erro ao buscar materiais' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const material = await request.json();
    
    if (material.id) {
      const existingMaterial = await getMaterialById(DB, material.id);
      if (existingMaterial) {
        return NextResponse.json({ error: 'Já existe um material com este ID' }, { status: 400 });
      }
    }
    
    await createMaterial(DB, material);
    return NextResponse.json({ message: 'Material criado com sucesso', id: material.id });
  } catch (error) {
    console.error('Erro ao criar material:', error);
    return NextResponse.json({ error: 'Erro ao criar material' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const material = await request.json();
    const existingMaterial = await getMaterialById(DB, material.id);
    
    if (!existingMaterial) {
      return NextResponse.json({ error: 'Material não encontrado' }, { status: 404 });
    }
    
    await updateMaterial(DB, material);
    return NextResponse.json({ message: 'Material atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar material:', error);
    return NextResponse.json({ error: 'Erro ao atualizar material' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const { id, available_quantity } = await request.json();
    
    if (!DB) {
      throw new Error("Database connection is not defined");
    }

    const updatedMaterial = await updateMaterialAvailability(DB, {
      id,
      available_quantity
    });
    
    return NextResponse.json(updatedMaterial);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
