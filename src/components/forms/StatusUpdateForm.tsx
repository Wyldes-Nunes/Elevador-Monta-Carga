import React from 'react';
import { useRouter } from 'next/navigation';
import StatusBadge from '@/components/ui/StatusBadge';

type StatusUpdateFormProps = {
  id: string;
  currentStatus: string;
  currentPercentage: number;
  onUpdate: (id: string, status: string, percentage: number, blockingReason?: string) => void;
};

export default function StatusUpdateForm({ 
  id, 
  currentStatus, 
  currentPercentage, 
  onUpdate 
}: StatusUpdateFormProps) {
  const router = useRouter();
  const [status, setStatus] = React.useState(currentStatus);
  const [percentage, setPercentage] = React.useState(currentPercentage);
  const [blockingReason, setBlockingReason] = React.useState('');
  const [showBlockingReason, setShowBlockingReason] = React.useState(currentStatus === 'Travado');
  
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setShowBlockingReason(newStatus === 'Travado');
    
    // Ajustar percentual automaticamente com base no status
    if (newStatus === 'Concluído') {
      setPercentage(100);
    } else if (newStatus === 'Planejado') {
      setPercentage(0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(id, status, percentage, showBlockingReason ? blockingReason : undefined);
  };
  
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
        Atualizar Status da Tarefa {id}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status Atual
          </label>
          <div className="mt-1">
            <StatusBadge status={currentStatus} />
          </div>
        </div>
        
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Novo Status
          </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={handleStatusChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="Planejado">Planejado</option>
            <option value="Em desenvolvimento">Em desenvolvimento</option>
            <option value="Risco de atraso">Risco de atraso</option>
            <option value="Travado">Travado</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="percentage" className="block text-sm font-medium text-gray-700">
            Percentual de Conclusão
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="range"
              id="percentage"
              name="percentage"
              min="0"
              max="100"
              step="5"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="block w-full"
              disabled={status === 'Concluído' || status === 'Planejado'}
            />
            <span className="ml-2 text-gray-700">{percentage}%</span>
          </div>
        </div>
        
        {showBlockingReason && (
          <div>
            <label htmlFor="blockingReason" className="block text-sm font-medium text-gray-700">
              Motivo do Travamento
            </label>
            <textarea
              id="blockingReason"
              name="blockingReason"
              rows={3}
              value={blockingReason}
              onChange={(e) => setBlockingReason(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Descreva o motivo pelo qual a tarefa está travada"
              required
            />
          </div>
        )}
        
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}
