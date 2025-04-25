import React from 'react';
import Form from '@/components/forms/Form';
import FormField from '@/components/forms/FormField';
import { Material } from '@/lib/db';
import { processMaterialFormData } from '@/lib/utils';

type MaterialFormProps = {
  initialData?: Partial<Material>;
  onSubmit: (material: Material) => void;
  existingIds?: string[];
};

export default function MaterialForm({ initialData = {}, onSubmit, existingIds = [] }: MaterialFormProps) {
  const handleSubmit = (formData: any) => {
    const material = processMaterialFormData(formData);
    onSubmit(material);
  };
  
  const componentOptions = [
    { value: 'Acionamento', label: 'Acionamento' },
    { value: 'Cabine', label: 'Cabine' },
    { value: 'Torre', label: 'Torre' },
    { value: 'Automação', label: 'Automação' },
  ];
  
  const statusOptions = [
    { value: 'Disponível', label: 'Disponível' },
    { value: 'Parcial', label: 'Parcial' },
    { value: 'Indisponível', label: 'Indisponível' },
    { value: 'Encomendado', label: 'Encomendado' },
    { value: 'Em produção', label: 'Em produção' },
    { value: 'Planejado', label: 'Planejado' },
  ];
  
  return (
    <Form onSubmit={handleSubmit} initialData={initialData}>
      <div className="space-y-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {initialData.id ? 'Editar Material' : 'Novo Material'}
        </h3>
        
        <div className="space-y-4">
          {initialData.id && (
            <FormField
              label="ID"
              name="id"
              value={initialData.id}
              disabled={true}
            />
          )}
          
          <FormField
            label="Componente"
            name="component"
            type="select"
            options={componentOptions}
            value={initialData.component}
            required
          />
          
          <FormField
            label="Descrição"
            name="description"
            type="textarea"
            value={initialData.description}
            required
          />
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <FormField
              label="Quantidade Necessária"
              name="required_quantity"
              type="number"
              min={1}
              step={1}
              value={initialData.required_quantity || 1}
              required
            />
            
            <FormField
              label="Quantidade Disponível"
              name="available_quantity"
              type="number"
              min={0}
              step={1}
              value={initialData.available_quantity || 0}
              required
            />
          </div>
          
          <FormField
            label="Fornecedor"
            name="supplier"
            value={initialData.supplier}
          />
          
          <FormField
            label="Prazo de Entrega"
            name="delivery_date"
            type="date"
            value={initialData.delivery_date}
          />
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <FormField
              label="Custo Unitário (R$)"
              name="unit_cost"
              type="number"
              min={0}
              step={0.01}
              value={initialData.unit_cost || 0}
              required
            />
            
            <FormField
              label="Status"
              name="status"
              type="select"
              options={statusOptions}
              value={initialData.status}
              required
            />
          </div>
          
          <FormField
            label="Observações"
            name="observations"
            type="textarea"
            value={initialData.observations}
          />
        </div>
      </div>
    </Form>
  );
}
