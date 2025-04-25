import { D1Database } from '@cloudflare/workers-types';
import { Task, Material, getTaskById, getMaterialById, updateTask, updateMaterial, getTasks, getMaterials } from '@/lib/db';

export async function getCloudflareContext() {
  return {
    DB: process.env.NODE_ENV === 'development' ? null : null,
  };
}

export async function getTasksData(db: D1Database | null) {
  if (!db) {
    // Dados de exemplo para desenvolvimento local
    return [
      {
        id: 'AC-001',
        component: 'Acionamento',
        subcomponent: 'Quadro de Comando',
        responsible: 'José Silva',
        description: 'Projeto do circuito elétrico',
        planned_start_date: '2025-05-01',
        actual_start_date: '2025-05-01',
        planned_end_date: '2025-05-15',
        actual_end_date: null,
        observations: 'Aguardando aprovação do cliente para especificações finais',
        status: 'Em desenvolvimento',
        blocking_reason: null,
        completion_percentage: 30,
        priority: 'Alta',
      },
      {
        id: 'AC-002',
        component: 'Acionamento',
        subcomponent: 'Quadro de Comando',
        responsible: 'Maria Oliveira',
        description: 'Montagem do painel elétrico',
        planned_start_date: '2025-05-16',
        actual_start_date: null,
        planned_end_date: '2025-05-30',
        actual_end_date: null,
        observations: null,
        status: 'Planejado',
        blocking_reason: null,
        completion_percentage: 0,
        priority: 'Alta',
      },
      {
        id: 'AC-003',
        component: 'Acionamento',
        subcomponent: 'Motor',
        responsible: 'Carlos Santos',
        description: 'Especificação do motor',
        planned_start_date: '2025-05-01',
        actual_start_date: '2025-05-01',
        planned_end_date: '2025-05-10',
        actual_end_date: '2025-05-09',
        observations: 'Motor de 10HP selecionado conforme cálculo de carga',
        status: 'Concluído',
        blocking_reason: null,
        completion_percentage: 100,
        priority: 'Alta',
      },
      {
        id: 'AC-004',
        component: 'Acionamento',
        subcomponent: 'Motor',
        responsible: 'Carlos Santos',
        description: 'Aquisição do motor',
        planned_start_date: '2025-05-11',
        actual_start_date: '2025-05-11',
        planned_end_date: '2025-05-25',
        actual_end_date: null,
        observations: 'Fornecedor com estoque limitado',
        status: 'Travado',
        blocking_reason: 'Fornecedor sem estoque disponível',
        completion_percentage: 50,
        priority: 'Alta',
      },
      {
        id: 'CB-001',
        component: 'Cabine',
        subcomponent: 'Estrutura Metálica',
        responsible: 'Roberto Mendes',
        description: 'Projeto estrutural da cabine',
        planned_start_date: '2025-05-01',
        actual_start_date: '2025-05-01',
        planned_end_date: '2025-05-15',
        actual_end_date: '2025-05-14',
        observations: 'Projeto concluído conforme especificações do cliente',
        status: 'Concluído',
        blocking_reason: null,
        completion_percentage: 100,
        priority: 'Alta',
      },
      {
        id: 'CB-002',
        component: 'Cabine',
        subcomponent: 'Estrutura Metálica',
        responsible: 'Marcos Souza',
        description: 'Fabricação da estrutura da cabine',
        planned_start_date: '2025-05-16',
        actual_start_date: '2025-05-16',
        planned_end_date: '2025-05-30',
        actual_end_date: null,
        observations: 'Em produção na serralheria',
        status: 'Em desenvolvimento',
        blocking_reason: null,
        completion_percentage: 40,
        priority: 'Alta',
      },
    ];
  }

  return await getTasks(db);
}

export async function getMaterialsData(db: D1Database | null) {
  if (!db) {
    // Dados de exemplo para desenvolvimento local
    return [
      {
        id: 'MAT-AC-001',
        component: 'Acionamento',
        description: 'Motor elétrico 10HP',
        required_quantity: 1,
        available_quantity: 0,
        supplier: 'MotorTech',
        delivery_date: '2025-06-15',
        unit_cost: 4500.00,
        total_cost: 4500.00,
        status: 'Indisponível',
        observations: 'Fornecedor sem estoque, prazo estendido',
      },
      {
        id: 'MAT-AC-002',
        component: 'Acionamento',
        description: 'Inversor de frequência',
        required_quantity: 1,
        available_quantity: 1,
        supplier: 'AutoControle',
        delivery_date: null,
        unit_cost: 2800.00,
        total_cost: 2800.00,
        status: 'Disponível',
        observations: 'Em estoque',
      },
      {
        id: 'MAT-AC-003',
        component: 'Acionamento',
        description: 'Sistema de freio eletromagnético',
        required_quantity: 1,
        available_quantity: 0,
        supplier: 'SegurTech',
        delivery_date: '2025-06-05',
        unit_cost: 1800.00,
        total_cost: 1800.00,
        status: 'Encomendado',
        observations: 'Pedido realizado em 10/05/2025',
      },
      {
        id: 'MAT-CB-001',
        component: 'Cabine',
        description: 'Estrutura metálica da cabine',
        required_quantity: 1,
        available_quantity: 0,
        supplier: 'Fabricação própria',
        delivery_date: '2025-05-30',
        unit_cost: 5200.00,
        total_cost: 5200.00,
        status: 'Em produção',
        observations: 'Em produção na serralheria',
      },
      {
        id: 'MAT-CB-002',
        component: 'Cabine',
        description: 'Portas da cabine',
        required_quantity: 1,
        available_quantity: 0,
        supplier: 'Fabricação própria',
        delivery_date: '2025-05-30',
        unit_cost: 2300.00,
        total_cost: 2300.00,
        status: 'Em produção',
        observations: 'Em produção na serralheria',
      },
    ];
  }

  return await getMaterials(db);
}

export async function getTaskStatsData(db: D1Database | null) {
  if (!db) {
    // Dados de exemplo para desenvolvimento local
    return {
      statusCounts: [
        { status: 'Concluído', count: 2 },
        { status: 'Em desenvolvimento', count: 2 },
        { status: 'Planejado', count: 1 },
        { status: 'Travado', count: 1 },
      ],
      componentProgress: [
        { component: 'Acionamento', avg_completion: 45 },
        { component: 'Cabine', avg_completion: 70 },
      ],
      statusByComponent: [
        { component: 'Acionamento', status: 'Concluído', count: 1 },
        { component: 'Acionamento', status: 'Em desenvolvimento', count: 1 },
        { component: 'Acionamento', status: 'Planejado', count: 1 },
        { component: 'Acionamento', status: 'Travado', count: 1 },
        { component: 'Cabine', status: 'Concluído', count: 1 },
        { component: 'Cabine', status: 'Em desenvolvimento', count: 1 },
      ],
    };
  }

  // Implementar a lógica para obter estatísticas do banco de dados
  const tasks = await getTasks(db);
  
  // Status counts
  const statusMap = new Map();
  tasks.forEach(task => {
    const count = statusMap.get(task.status) || 0;
    statusMap.set(task.status, count + 1);
  });
  
  const statusCounts = Array.from(statusMap.entries()).map(([status, count]) => ({
    status,
    count,
  }));
  
  // Component progress
  const componentMap = new Map();
  const componentCountMap = new Map();
  
  tasks.forEach(task => {
    const sum = componentMap.get(task.component) || 0;
    const count = componentCountMap.get(task.component) || 0;
    
    componentMap.set(task.component, sum + task.completion_percentage);
    componentCountMap.set(task.component, count + 1);
  });
  
  const componentProgress = Array.from(componentMap.entries()).map(([component, sum]) => ({
    component,
    avg_completion: Math.round(sum / componentCountMap.get(component)),
  }));
  
  // Status by component
  const statusByComponentMap = new Map();
  
  tasks.forEach(task => {
    const key = `${task.component}-${task.status}`;
    const count = statusByComponentMap.get(key) || 0;
    statusByComponentMap.set(key, count + 1);
  });
  
  const statusByComponent = Array.from(statusByComponentMap.entries()).map(([key, count]) => {
    const [component, status] = key.split('-');
    return {
      component,
      status,
      count,
    };
  });
  
  return {
    statusCounts,
    componentProgress,
    statusByComponent,
  };
}

export async function getMaterialStatsData(db: D1Database | null) {
  if (!db) {
    // Dados de exemplo para desenvolvimento local
    return {
      statusCounts: [
        { status: 'Disponível', count: 1 },
        { status: 'Indisponível', count: 1 },
        { status: 'Encomendado', count: 1 },
        { status: 'Em produção', count: 2 },
      ],
      componentCosts: [
        { component: 'Acionamento', total_cost: 9100 },
        { component: 'Cabine', total_cost: 7500 },
      ],
    };
  }

  // Implementar a lógica para obter estatísticas do banco de dados
  const materials = await getMaterials(db);
  
  // Status counts
  const statusMap = new Map();
  materials.forEach(material => {
    const count = statusMap.get(material.status) || 0;
    statusMap.set(material.status, count + 1);
  });
  
  const statusCounts = Array.from(statusMap.entries()).map(([status, count]) => ({
    status,
    count,
  }));
  
  // Component costs
  const componentCostMap = new Map();
  
  materials.forEach(material => {
    const cost = componentCostMap.get(material.component) || 0;
    componentCostMap.set(material.component, cost + material.total_cost);
  });
  
  const componentCosts = Array.from(componentCostMap.entries()).map(([component, total_cost]) => ({
    component,
    total_cost,
  }));
  
  return {
    statusCounts,
    componentCosts,
  };
}
