import React from 'react';
import { useRouter } from 'next/navigation';
import StatusBadge from '@/components/ui/StatusBadge';

type MaterialUpdateFormProps = {
  id: string;
  description: string;
  requiredQuantity: number;
  currentQuantity: number;
  currentStatus: string;
  onUpdate: (id: string, availableQuantity: number) => void;
};

export default function MaterialUpdateForm({ 
  id, 
  description,
  requiredQuantity,
  currentQuantity, 
  currentStatus, 
  onUpdate 
}: MaterialUpdateFormProps) {
  const router = useRouter();
  const [quantity, setQuantity] = React.useState(currentQuantity);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(id, quantity);
  };
  
  // Calcular o status que resultará da atualização
  const calculateNewStatus = () => {
    if (quantity === 0) {
      return 'Indisponível';
    } else if (quantity < requiredQuantity) {
      return 'Parcial';
    } else {
      return 'Disponível';
    }
  };
  
  const newStatus = calculateNewStatus();
  
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
        Atualizar Disponibilidade do Material
      </h3>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500">ID</p>
        <p className="mt-1 text-sm text-gray-900">{id}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500">Descrição</p>
        <p className="mt-1 text-sm text-gray-900">{description}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500">Quantidade Necessária</p>
        <p className="mt-1 text-sm text-gray-900">{requiredQuantity}</p>
      </div>
      
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
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantidade Disponível
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            step="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="newStatus" className="block text-sm font-medium text-gray-700">
            Novo Status (calculado automaticamente)
          </label>
          <div className="mt-1">
            <StatusBadge status={newStatus} />
          </div>
        </div>
        
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
