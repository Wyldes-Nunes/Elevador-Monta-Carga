import React from 'react';
import Form from '@/components/forms/Form';
import FormField from '@/components/forms/FormField';
import { Task } from '@/lib/db';
import { processTaskFormData } from '@/lib/utils';

type TaskFormProps = {
  initialData?: Partial<Task>;
  onSubmit: (task: Task) => void;
  existingIds?: string[];
};

export default function TaskForm({ initialData = {}, onSubmit, existingIds = [] }: TaskFormProps) {
  const handleSubmit = (formData: any) => {
    const task = processTaskFormData(formData);
    onSubmit(task);
  };
  
  const componentOptions = [
    { value: 'Acionamento', label: 'Acionamento' },
    { value: 'Cabine', label: 'Cabine' },
    { value: 'Torre', label: 'Torre' },
    { value: 'Automação', label: 'Automação' },
  ];
  
  const statusOptions = [
    { value: 'Planejado', label: 'Planejado' },
    { value: 'Em desenvolvimento', label: 'Em desenvolvimento' },
    { value: 'Risco de atraso', label: 'Risco de atraso' },
    { value: 'Travado', label: 'Travado' },
    { value: 'Concluído', label: 'Concluído' },
  ];
  
  const priorityOptions = [
    { value: 'Alta', label: 'Alta' },
    { value: 'Média', label: 'Média' },
    { value: 'Baixa', label: 'Baixa' },
  ];
  
  return (
    <Form onSubmit={handleSubmit} initialData={initialData}>
      <div className="space-y-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {initialData.id ? 'Editar Tarefa' : 'Nova Tarefa'}
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
            label="Subcomponente"
            name="subcomponent"
            value={initialData.subcomponent}
            required
          />
          
          <FormField
            label="Responsável"
            name="responsible"
            value={initialData.responsible}
            required
          />
          
          <FormField
            label="Descrição da Tarefa"
            name="description"
            type="textarea"
            value={initialData.description}
            required
          />
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <FormField
              label="Data de Início Planejada"
              name="planned_start_date"
              type="date"
              value={initialData.planned_start_date}
            />
            
            <FormField
              label="Data de Início Real"
              name="actual_start_date"
              type="date"
              value={initialData.actual_start_date}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <FormField
              label="Data de Entrega Planejada"
              name="planned_end_date"
              type="date"
              value={initialData.planned_end_date}
            />
            
            <FormField
              label="Data de Entrega Real"
              name="actual_end_date"
              type="date"
              value={initialData.actual_end_date}
            />
          </div>
          
          <FormField
            label="Status"
            name="status"
            type="select"
            options={statusOptions}
            value={initialData.status}
            required
          />
          
          <FormField
            label="Percentual de Conclusão"
            name="completion_percentage"
            type="number"
            min={0}
            max={100}
            step={5}
            value={initialData.completion_percentage || 0}
            required
          />
          
          <FormField
            label="Motivo do Travamento"
            name="blocking_reason"
            type="textarea"
            value={initialData.blocking_reason}
          />
          
          <FormField
            label="Prioridade"
            name="priority"
            type="select"
            options={priorityOptions}
            value={initialData.priority}
            required
          />
          
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
