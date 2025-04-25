import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FormData = {
  [key: string]: string | number | boolean | null;
};

export function processTaskFormData(formData: FormData) {
  return {
    id: formData.id as string,
    component: formData.component as string,
    subcomponent: formData.subcomponent as string,
    responsible: formData.responsible as string,
    description: formData.description as string,
    planned_start_date: formData.planned_start_date as string || undefined,
    actual_start_date: formData.actual_start_date as string || undefined,
    planned_end_date: formData.planned_end_date as string || undefined,
    actual_end_date: formData.actual_end_date as string || undefined,
    observations: formData.observations as string || undefined,
    status: formData.status as string,
    blocking_reason: formData.blocking_reason as string || undefined,
    completion_percentage: Number(formData.completion_percentage),
    priority: formData.priority as string,
  };
}

export function processMaterialFormData(formData: FormData) {
  const requiredQuantity = Number(formData.required_quantity);
  const availableQuantity = Number(formData.available_quantity);
  const unitCost = Number(formData.unit_cost);
  const totalCost = unitCost * requiredQuantity;
  
  // Determinar o status com base nas quantidades
  let status = formData.status as string;
  if (!status) {
    if (availableQuantity === 0) {
      status = 'Indisponível';
    } else if (availableQuantity < requiredQuantity) {
      status = 'Parcial';
    } else {
      status = 'Disponível';
    }
  }
  
  return {
    id: formData.id as string,
    component: formData.component as string,
    description: formData.description as string,
    required_quantity: requiredQuantity,
    available_quantity: availableQuantity,
    supplier: formData.supplier as string || undefined,
    delivery_date: formData.delivery_date as string || undefined,
    unit_cost: unitCost,
    total_cost: totalCost,
    status: status,
    observations: formData.observations as string || undefined,
  };
}

export function updateTaskStatus(
  taskId: string, 
  status: string, 
  completionPercentage: number,
  blockingReason?: string
) {
  // Implementação para ambiente de desenvolvimento
  console.log(`Atualizando tarefa ${taskId} para status ${status} com ${completionPercentage}% de conclusão`);
  return true;
}

export function updateMaterialAvailability(
  materialId: string,
  availableQuantity: number
) {
  // Implementação para ambiente de desenvolvimento
  console.log(`Atualizando material ${materialId} para quantidade disponível ${availableQuantity}`);
  return true;
}

export function generateTaskId(component: string, existingIds: string[]): string {
  // Obter o prefixo com base no componente
  let prefix = '';
  switch (component) {
    case 'Acionamento':
      prefix = 'AC-';
      break;
    case 'Cabine':
      prefix = 'CB-';
      break;
    case 'Torre':
      prefix = 'TR-';
      break;
    case 'Automação':
      prefix = 'AU-';
      break;
    default:
      prefix = 'TK-';
  }
  
  // Filtrar IDs existentes para o componente atual
  const componentIds = existingIds.filter(id => id.startsWith(prefix));
  
  // Encontrar o maior número de ID
  let maxNumber = 0;
  componentIds.forEach(id => {
    const numberPart = id.substring(prefix.length);
    const number = parseInt(numberPart, 10);
    if (!isNaN(number) && number > maxNumber) {
      maxNumber = number;
    }
  });
  
  // Gerar novo ID com número incrementado
  const newNumber = maxNumber + 1;
  const paddedNumber = newNumber.toString().padStart(3, '0');
  return `${prefix}${paddedNumber}`;
}

export function generateMaterialId(component: string, existingIds: string[]): string {
  // Obter o prefixo com base no componente
  let prefix = '';
  switch (component) {
    case 'Acionamento':
      prefix = 'MAT-AC-';
      break;
    case 'Cabine':
      prefix = 'MAT-CB-';
      break;
    case 'Torre':
      prefix = 'MAT-TR-';
      break;
    case 'Automação':
      prefix = 'MAT-AU-';
      break;
    default:
      prefix = 'MAT-';
  }
  
  // Filtrar IDs existentes para o componente atual
  const componentIds = existingIds.filter(id => id.startsWith(prefix));
  
  // Encontrar o maior número de ID
  let maxNumber = 0;
  componentIds.forEach(id => {
    const numberPart = id.substring(prefix.length);
    const number = parseInt(numberPart, 10);
    if (!isNaN(number) && number > maxNumber) {
      maxNumber = number;
    }
  });
  
  // Gerar novo ID com número incrementado
  const newNumber = maxNumber + 1;
  const paddedNumber = newNumber.toString().padStart(3, '0');
  return `${prefix}${paddedNumber}`;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }).format(value);
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  
  return date.toLocaleDateString('pt-BR');
}

export function calculateTaskProgress(tasks: any[]): number {
  if (tasks.length === 0) return 0;
  
  const totalPercentage = tasks.reduce((sum, task) => sum + task.completion_percentage, 0);
  return Math.round(totalPercentage / tasks.length);
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'Concluído':
    case 'Disponível':
      return '#00FF00'; // Verde
    case 'Em desenvolvimento':
    case 'Parcial':
      return '#FFFF00'; // Amarelo
    case 'Risco de atraso':
    case 'Encomendado':
    case 'Em produção':
      return '#FFA500'; // Laranja
    case 'Travado':
    case 'Indisponível':
      return '#FF0000'; // Vermelho
    case 'Planejado':
      return '#ADD8E6'; // Azul claro
    default:
      return '#808080'; // Cinza
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'Alta':
      return '#FFCCCC'; // Vermelho claro
    case 'Média':
      return '#FFFFCC'; // Amarelo claro
    case 'Baixa':
      return '#CCFFCC'; // Verde claro
    default:
      return '#FFFFFF'; // Branco
  }
}
