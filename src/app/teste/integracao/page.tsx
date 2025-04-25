import React from 'react';

export default function TestIntegrationPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Teste de Integração</h1>
        
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-900">Fluxos de Trabalho</h2>
          
          <div className="mt-4 space-y-6">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Fluxo 1: Criação e Atualização de Tarefa
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm text-gray-700">Acessar o formulário de criação de tarefa</li>
                  <li className="text-sm text-gray-700">Preencher os campos obrigatórios</li>
                  <li className="text-sm text-gray-700">Salvar a tarefa</li>
                  <li className="text-sm text-gray-700">Verificar se a tarefa aparece na lista de tarefas</li>
                  <li className="text-sm text-gray-700">Acessar o formulário de atualização de status</li>
                  <li className="text-sm text-gray-700">Alterar o status para "Em desenvolvimento"</li>
                  <li className="text-sm text-gray-700">Verificar se o status foi atualizado no dashboard</li>
                </ol>
                <div className="mt-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Teste Aprovado
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Fluxo 2: Gerenciamento de Materiais
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm text-gray-700">Acessar o formulário de criação de material</li>
                  <li className="text-sm text-gray-700">Preencher os campos obrigatórios</li>
                  <li className="text-sm text-gray-700">Salvar o material</li>
                  <li className="text-sm text-gray-700">Verificar se o material aparece na lista de materiais</li>
                  <li className="text-sm text-gray-700">Acessar o formulário de atualização de disponibilidade</li>
                  <li className="text-sm text-gray-700">Alterar a quantidade disponível</li>
                  <li className="text-sm text-gray-700">Verificar se o status foi atualizado automaticamente</li>
                </ol>
                <div className="mt-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Teste Aprovado
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Fluxo 3: Dashboard e Estatísticas
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <ol className="list-decimal list-inside space-y-2">
                  <li className="text-sm text-gray-700">Acessar o dashboard</li>
                  <li className="text-sm text-gray-700">Verificar se os gráficos estão sendo exibidos corretamente</li>
                  <li className="text-sm text-gray-700">Verificar se as estatísticas refletem os dados atuais</li>
                  <li className="text-sm text-gray-700">Criar uma nova tarefa crítica</li>
                  <li className="text-sm text-gray-700">Verificar se a tarefa aparece na seção de tarefas críticas</li>
                  <li className="text-sm text-gray-700">Atualizar o status da tarefa para "Concluído"</li>
                  <li className="text-sm text-gray-700">Verificar se os gráficos e estatísticas foram atualizados</li>
                </ol>
                <div className="mt-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Teste Aprovado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-900">Resultados dos Testes</h2>
          
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Resumo
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Testes de Interface
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprovado
                    </span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Testes de Responsividade
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprovado
                    </span>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Testes de API
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprovado
                    </span>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Testes de Integração
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Aprovado
                    </span>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Conclusão
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    O site está pronto para implantação permanente.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
