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
      // Obter material específico por ID
      const material = await getMaterialById(DB, id);
      
      if (!material) {
        return NextResponse.json({ error: 'Material não encontrado' }, { status: 404 });
      }
      
      return NextResponse.json(material);
    } else if (component) {
      // Obter materiais por componente
      const materials = await getMaterialsByComponent(DB, component);
      return NextResponse.json(materials);
    } else if (critical === 'true') {
      // Obter materiais críticos
      const materials = await getCriticalMaterials(DB);
      return NextResponse.json(materials);
    } else {
      // Obter todos os materiais
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
    
    // Verificar se já existe um material com o mesmo ID
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
    
    // Verificar se o material existe
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
    
    // Atualizar apenas a quantidade disponível
    const updatedMaterial = await updateMaterialAvailability(
      if (!DB) {
  throw new Error("Database connection is not defined. Please check .env configuration.");
}
const updatedMaterial = await updateMaterialAvailability(
  DB,
  { id, available_quantity }
);
    
    if (!updatedMaterial) {
      return NextResponse.json({ error: 'Material não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'Disponibilidade do material atualizada com sucesso',
      material: updatedMaterial
    });
  } catch (error) {
    console.error('Erro ao atualizar disponibilidade do material:', error);
    return NextResponse.json({ error: 'Erro ao atualizar disponibilidade do material' }, { status: 500 });
  }
}
