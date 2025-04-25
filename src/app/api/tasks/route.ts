import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@/lib/data';
import { 
  createTask, 
  updateTask, 
  getTaskById, 
  getTasks, 
  getTasksByComponent,
  getCriticalTasks
} from '@/lib/db';
import { updateTaskStatus } from '@/lib/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const component = searchParams.get('component');
  const critical = searchParams.get('critical');
  
  const { DB } = await getCloudflareContext();
  
  try {
    if (id) {
      // Obter tarefa específica por ID
      const task = await getTaskById(DB, id);
      
      if (!task) {
        return NextResponse.json({ error: 'Tarefa não encontrada' }, { status: 404 });
      }
      
      return NextResponse.json(task);
    } else if (component) {
      // Obter tarefas por componente
      const tasks = await getTasksByComponent(DB, component);
      return NextResponse.json(tasks);
    } else if (critical === 'true') {
      // Obter tarefas críticas
      const tasks = await getCriticalTasks(DB);
      return NextResponse.json(tasks);
    } else {
      // Obter todas as tarefas
      const tasks = await getTasks(DB);
      return NextResponse.json(tasks);
    }
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    return NextResponse.json({ error: 'Erro ao buscar tarefas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const task = await request.json();
    
    // Verificar se já existe uma tarefa com o mesmo ID
    if (task.id) {
      const existingTask = await getTaskById(DB, task.id);
      
      if (existingTask) {
        return NextResponse.json({ error: 'Já existe uma tarefa com este ID' }, { status: 400 });
      }
    }
    
    await createTask(DB, task);
    return NextResponse.json({ message: 'Tarefa criada com sucesso', id: task.id });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return NextResponse.json({ error: 'Erro ao criar tarefa' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const task = await request.json();
    
    // Verificar se a tarefa existe
    const existingTask = await getTaskById(DB, task.id);
    
    if (!existingTask) {
      return NextResponse.json({ error: 'Tarefa não encontrada' }, { status: 404 });
    }
    
    await updateTask(DB, task);
    return NextResponse.json({ message: 'Tarefa atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    return NextResponse.json({ error: 'Erro ao atualizar tarefa' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const { DB } = await getCloudflareContext();
  
  try {
    const { id, status, completion_percentage, blocking_reason } = await request.json();
    
    // Atualizar apenas o status e percentual de conclusão
    const updatedTask = await updateTaskStatus(
      DB, 
      id, 
      status, 
      completion_percentage, 
      blocking_reason
    );
    
    if (!updatedTask) {
      return NextResponse.json({ error: 'Tarefa não encontrada' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'Status da tarefa atualizado com sucesso',
      task: updatedTask
    });
  } catch (error) {
    console.error('Erro ao atualizar status da tarefa:', error);
    return NextResponse.json({ error: 'Erro ao atualizar status da tarefa' }, { status: 500 });
  }
}
