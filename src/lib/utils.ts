import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type FormData = {
  [key: string]: string | number | boolean | null;
};

// Tipos para melhorar a segurança
type MaterialUpdateParams = {
  id: string;
  available_quantity: number;
};

type TaskUpdateParams = {
  id: string;
  status: string;
  completionPercentage: number;
  blockingReason?: string;
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
  
  let status = formData.status as string;
  if (!status) {
    status = availableQuantity === 0 ? 'Indisponível' :
             availableQuantity < requiredQuantity ? 'Parcial' : 'Disponível';
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

export async function updateTaskStatus(
  db: any,
  params: TaskUpdateParams
) {
  if (!db) throw new Error("Database connection not established");
  
  console.log(`Atualizando tarefa ${params.id} no banco de dados`, {
    status: params.status,
    completionPercentage: params.completionPercentage,
    blockingReason: params.blockingReason
  });
  
  return {
    id: params.id,
    status: params.status,
    completion_percentage: params.completionPercentage,
    blocking_reason: params.blockingReason,
    updated_at: new Date().toISOString()
  };
}

export async function updateMaterialAvailability(
  db: any,
  params: MaterialUpdateParams
) {
  if (!db) throw new Error("Database connection not established");
  
  console.log(`Atualizando material ${params.id} no banco de dados`, {
    available_quantity: params.available_quantity
  });
  
  return {
    id: params.id,
    available_quantity: params.available_quantity,
    updated_at: new Date().toISOString()
  };
}

// Funções de geração de IDs (mantidas como estão)
export function generateTaskId(component: string, existingIds: string[]): string {
  const prefixMap: Record<string, string> = {
    'Acionamento': 'AC-',
    'Cabine': 'CB-',
    'Torre': 'TR-',
    'Automação': 'AU-'
  };
  
  const prefix = prefixMap[component] || 'TK-';
  const componentIds = existingIds.filter(id => id.startsWith(prefix));
  
  let maxNumber = 0;
  componentIds.forEach(id => {
    const number = parseInt(id.substring(prefix.length), 10) || 0;
    maxNumber = Math.max(maxNumber, number);
  });
  
  return `${prefix}${(maxNumber + 1).toString().padStart(3, '0')}`;
}

export function generateMaterialId(component: string, existingIds: string[]): string {
  const prefixMap: Record<string, string> = {
    'Acionamento': 'MAT-AC-',
    'Cabine': 'MAT-CB-',
    'Torre': 'MAT-TR-',
    'Automação': 'MAT-AU-'
  };
  
  const prefix = prefixMap[component] || 'MAT-';
  const componentIds = existingIds.filter(id => id.startsWith(prefix));
  
  let maxNumber = 0;
  componentIds.forEach(id => {
    const number = parseInt(id.substring(prefix.length), 10) || 0;
    maxNumber = Math.max(maxNumber, number);
  });
  
  return `${prefix}${(maxNumber + 1).toString().padStart(3, '0')}`;
}

// Funções de formatação (otimizadas)
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }).format(value);
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('pt-BR');
}

// Funções auxiliares (otimizadas)
export function calculateTaskProgress(tasks: any[]): number {
  return tasks.length ? Math.round(tasks.reduce((sum, task) => sum + task.completion_percentage, 0) / tasks.length) : 0;
}

export function getStatusColor(status: string): string {
  const colorMap: Record<string, string> = {
    'Concluído': '#00FF00',
    'Disponível': '#00FF00',
    'Em desenvolvimento': '#FFFF00',
    'Parcial': '#FFFF00',
    'Risco de atraso': '#FFA500',
    'Encomendado': '#FFA500',
    'Em produção': '#FFA500',
    'Travado': '#FF0000',
    'Indisponível': '#FF0000',
    'Planejado': '#ADD8E6'
  };
  
  return colorMap[status] || '#808080';
}

export function getPriorityColor(priority: string): string {
  const colorMap: Record<string, string> = {
    'Alta': '#FFCCCC',
    'Média': '#FFFFCC',
    'Baixa': '#CCFFCC'
  };
  
  return colorMap[priority] || '#FFFFFF';
}
