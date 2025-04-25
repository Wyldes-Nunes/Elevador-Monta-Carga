import React from 'react';

export default function TestPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Teste de Responsividade</h1>
        
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-900">Componentes da Interface</h2>
          
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900">Cards</h3>
              <p className="mt-2 text-sm text-gray-500">
                Este componente deve se adaptar a diferentes tamanhos de tela, 
                ocupando toda a largura em dispositivos móveis e organizando-se 
                em colunas em telas maiores.
              </p>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900">Tabelas</h3>
              <p className="mt-2 text-sm text-gray-500">
                As tabelas devem permitir rolagem horizontal em dispositivos 
                móveis para visualizar todas as colunas.
              </p>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900">Formulários</h3>
              <p className="mt-2 text-sm text-gray-500">
                Os formulários devem se adaptar a diferentes tamanhos de tela,
                com campos empilhados em dispositivos móveis.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Teste de Tabela Responsiva</h2>
          
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      AC-001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Acionamento
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Projeto do circuito elétrico
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Em desenvolvimento
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      José Silva
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CB-001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Cabine
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Projeto estrutural da cabine
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Concluído
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Roberto Mendes
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Teste de Formulário Responsivo</h2>
          
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="space-y-6">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="component" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Componente
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id="component"
                    name="component"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Acionamento</option>
                    <option>Cabine</option>
                    <option>Torre</option>
                    <option>Automação</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Descrição
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Status
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id="status"
                    name="status"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Planejado</option>
                    <option>Em desenvolvimento</option>
                    <option>Risco de atraso</option>
                    <option>Travado</option>
                    <option>Concluído</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
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
    </div>
  );
}
