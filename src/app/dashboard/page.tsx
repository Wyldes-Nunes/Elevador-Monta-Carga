import React from 'react';
import StatCard from '@/components/ui/StatCard';

// Dados de exemplo para o dashboard
const statusData = [
  { name: 'Concluído', value: 5, color: '#00FF00' },
  { name: 'Em desenvolvimento', value: 8, color: '#FFFF00' },
  { name: 'Risco de atraso', value: 2, color: '#FFA500' },
  { name: 'Travado', value: 1, color: '#FF0000' },
  { name: 'Planejado', value: 4, color: '#ADD8E6' },
];

const componentStatusData = [
  {
    name: 'Acionamento',
    'Concluído': 1,
    'Em desenvolvimento': 2,
    'Risco de atraso': 1,
    'Travado': 1,
    'Planejado': 2,
  },
  {
    name: 'Cabine',
    'Concluído': 2,
    'Em desenvolvimento': 1,
    'Risco de atraso': 1,
    'Travado': 0,
    'Planejado': 0,
  },
  {
    name: 'Torre',
    'Concluído': 1,
    'Em desenvolvimento': 3,
    'Risco de atraso': 0,
    'Travado': 0,
    'Planejado': 1,
  },
  {
    name: 'Automação',
    'Concluído': 1,
    'Em desenvolvimento': 2,
    'Risco de atraso': 0,
    'Travado': 0,
    'Planejado': 1,
  },
];

const componentProgressData = [
  { name: 'Acionamento', value: 40 },
  { name: 'Cabine', value: 65 },
  { name: 'Torre', value: 30 },
  { name: 'Automação', value: 25 },
];

// Dados de exemplo para tarefas críticas
const criticalTasks = [
  {
    id: 'AC-004',
    component: 'Acionamento',
    subcomponent: 'Motor',
    responsible: 'Carlos Santos',
    description: 'Aquisição do motor',
    status: 'Travado',
    completion_percentage: 50,
    blocking_reason: 'Fornecedor sem estoque disponível',
    priority: 'Alta',
  },
  {
    id: 'CB-004',
    component: 'Cabine',
    subcomponent: 'Portas',
    responsible: 'Marcos Souza',
    description: 'Fabricação das portas',
    status: 'Risco de atraso',
    completion_percentage: 20,
    blocking_reason: null,
    priority: 'Alta',
  },
];

// Dados de exemplo para materiais críticos
const criticalMaterials = [
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
];

export default function Dashboard() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        {/* Estatísticas gerais */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total de Tarefas" 
            value="20" 
            description="5 concluídas, 15 em andamento ou planejadas"
            color="blue"
          />
          <StatCard 
            title="Progresso Geral" 
            value="40%" 
            description="Percentual médio de conclusão"
            color="green"
          />
          <StatCard 
            title="Tarefas Críticas" 
            value="3" 
            description="1 travada, 2 em risco de atraso"
            color="red"
          />
          <StatCard 
            title="Materiais Pendentes" 
            value="7" 
            description="2 indisponíveis, 1 parcial, 4 encomendados"
            color="yellow"
          />
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Visão Geral do Projeto</h2>
          <p className="mt-2 text-gray-600">
            Este dashboard apresenta uma visão geral do progresso do projeto de fabricação de elevadores montacarga.
            Os gráficos e estatísticas são atualizados automaticamente conforme as tarefas e materiais são gerenciados no sistema.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Tarefas por Componente</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Acionamento</h3>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '40%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">40%</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>7 tarefas no total</p>
                  <p>1 concluída, 2 em desenvolvimento, 1 em risco, 1 travada, 2 planejadas</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Cabine</h3>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '65%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">65%</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>4 tarefas no total</p>
                  <p>2 concluídas, 1 em desenvolvimento, 1 em risco</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Torre</h3>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '30%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">30%</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>5 tarefas no total</p>
                  <p>1 concluída, 3 em desenvolvimento, 1 planejada</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Automação</h3>
                <div className="mt-2 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '25%' }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">25%</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>4 tarefas no total</p>
                  <p>1 concluída, 2 em desenvolvimento, 1 planejada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tarefas críticas */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Tarefas Críticas (Atenção Necessária)</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Componente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Responsável
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {criticalTasks.map((task) => (
                    <tr key={task.id} className={task.status === 'Travado' ? 'bg-red-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {task.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {task.component}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {task.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          task.status === 'Travado' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {task.responsible}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                          Editar
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Materiais críticos */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Materiais Críticos</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Qtd. Necessária
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Qtd. Disponível
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {criticalMaterials.map((material) => (
                    <tr key={material.id} className={material.status === 'Indisponível' ? 'bg-red-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {material.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {material.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {material.required_quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {material.available_quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          material.status === 'Indisponível' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {material.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                          Editar
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
