import React from 'react';

export default function TestMobilePage() {
  return (
    <div className="py-4 px-4">
      <h1 className="text-xl font-semibold text-gray-900">Teste Mobile</h1>
      
      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-900">Menu Responsivo</h2>
        
        <div className="mt-2 bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="font-bold">Elevador Montacarga</span>
            <button className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-500">
              Este menu deve colapsar em dispositivos móveis e exibir um ícone de hambúrguer.
              Em telas maiores, os links devem ser exibidos horizontalmente.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">Cards em Tela Pequena</h2>
        
        <div className="mt-2 space-y-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium">Total de Tarefas</h3>
            <p className="text-2xl font-bold mt-1">20</p>
            <p className="text-sm text-gray-500 mt-1">5 concluídas, 15 em andamento</p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium">Progresso Geral</h3>
            <p className="text-2xl font-bold mt-1">40%</p>
            <p className="text-sm text-gray-500 mt-1">Percentual médio de conclusão</p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium">Tarefas Críticas</h3>
            <p className="text-2xl font-bold mt-1">3</p>
            <p className="text-sm text-gray-500 mt-1">1 travada, 2 em risco de atraso</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">Tabela em Tela Pequena</h2>
        
        <div className="mt-2 bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    AC-001
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    Projeto do circuito elétrico
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Em desenvolvimento
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Editar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    CB-001
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    Projeto estrutural da cabine
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Concluído
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">Formulário em Tela Pequena</h2>
        
        <div className="mt-2 bg-white shadow rounded-lg p-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="mobile-component" className="block text-sm font-medium text-gray-700 mb-1">
                Componente
              </label>
              <select
                id="mobile-component"
                name="component"
                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              >
                <option>Acionamento</option>
                <option>Cabine</option>
                <option>Torre</option>
                <option>Automação</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="mobile-description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                id="mobile-description"
                name="description"
                rows={3}
                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="mobile-status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="mobile-status"
                name="status"
                className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              >
                <option>Planejado</option>
                <option>Em desenvolvimento</option>
                <option>Risco de atraso</option>
                <option>Travado</option>
                <option>Concluído</option>
              </select>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
