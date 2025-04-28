import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Função utilitária para classes CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tipos de dados
export type FormData = {
  [key: string]: string | number | boolean | null;
};

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

// Processamento de formulários
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

// Operações de banco de dados
export async function updateTaskStatus(
  db: any,
  params: TaskUpdateParams
) {
  if (!db) throw new Error("Database connection not established");
  
  console.log(`Atualizando tarefa ${params.id}`, params);
  
  return {
    ...params,
    updated_at: new Date().toISOString()
  };
}

export async function updateMaterialAvailability(
  db: any,
  params: MaterialUpdateParams
) {
  if (!db) throw new Error("Database connection not established");
  
  console.log(`Atualizando material ${params.id}`, params);
  
  return {
    ...params,
    updated_at: new Date().toISOString()
  };
}

// Funções auxiliares (geração de IDs, formatação, etc.)
// ... [mantenha as outras funções conforme no arquivo original]
