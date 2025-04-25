import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/data';
import { getTaskStats, getMaterialStats } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    // Obter estatísticas de tarefas
    const taskStats = await getTaskStats(DB);
    
    // Obter estatísticas de materiais
    const materialStats = await getMaterialStats(DB);
    
    // Combinar estatísticas
    const stats = {
      tasks: taskStats,
      materials: materialStats
    };
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return NextResponse.json({ error: 'Erro ao buscar estatísticas' }, { status: 500 });
  }
}
