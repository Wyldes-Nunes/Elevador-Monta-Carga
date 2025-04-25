import { D1Database } from '@cloudflare/workers-types';

export type Task = {
  id: string;
  component: string;
  subcomponent: string;
  responsible: string;
  description: string;
  planned_start_date?: string;
  actual_start_date?: string;
  planned_end_date?: string;
  actual_end_date?: string;
  observations?: string;
  status: string;
  blocking_reason?: string;
  completion_percentage: number;
  priority: string;
  created_at?: string;
  updated_at?: string;
};

export type Material = {
  id: string;
  component: string;
  description: string;
  required_quantity: number;
  available_quantity: number;
  supplier?: string;
  delivery_date?: string;
  unit_cost: number;
  total_cost: number;
  status: string;
  observations?: string;
  created_at?: string;
  updated_at?: string;
};

export type MaterialTaskRelation = {
  id?: number;
  material_id: string;
  task_id: string;
  created_at?: string;
};

export async function getTasks(db: D1Database): Promise<Task[]> {
  const { results } = await db.prepare('SELECT * FROM tasks ORDER BY component, id').all();
  return results as Task[];
}

export async function getTasksByComponent(db: D1Database, component: string): Promise<Task[]> {
  const { results } = await db.prepare('SELECT * FROM tasks WHERE component = ? ORDER BY id')
    .bind(component)
    .all();
  return results as Task[];
}

export async function getTaskById(db: D1Database, id: string): Promise<Task | null> {
  const result = await db.prepare('SELECT * FROM tasks WHERE id = ?')
    .bind(id)
    .first();
  return result as Task | null;
}

export async function getCriticalTasks(db: D1Database): Promise<Task[]> {
  const { results } = await db.prepare(
    "SELECT * FROM tasks WHERE status = 'Travado' OR status = 'Risco de atraso' ORDER BY priority DESC, id"
  ).all();
  return results as Task[];
}

export async function createTask(db: D1Database, task: Task): Promise<void> {
  await db.prepare(`
    INSERT INTO tasks (
      id, component, subcomponent, responsible, description, 
      planned_start_date, actual_start_date, planned_end_date, actual_end_date, 
      observations, status, blocking_reason, completion_percentage, priority
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    task.id,
    task.component,
    task.subcomponent,
    task.responsible,
    task.description,
    task.planned_start_date || null,
    task.actual_start_date || null,
    task.planned_end_date || null,
    task.actual_end_date || null,
    task.observations || null,
    task.status,
    task.blocking_reason || null,
    task.completion_percentage,
    task.priority
  ).run();
}

export async function updateTask(db: D1Database, task: Task): Promise<void> {
  await db.prepare(`
    UPDATE tasks SET 
      component = ?, 
      subcomponent = ?, 
      responsible = ?, 
      description = ?, 
      planned_start_date = ?, 
      actual_start_date = ?, 
      planned_end_date = ?, 
      actual_end_date = ?, 
      observations = ?, 
      status = ?, 
      blocking_reason = ?, 
      completion_percentage = ?, 
      priority = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(
    task.component,
    task.subcomponent,
    task.responsible,
    task.description,
    task.planned_start_date || null,
    task.actual_start_date || null,
    task.planned_end_date || null,
    task.actual_end_date || null,
    task.observations || null,
    task.status,
    task.blocking_reason || null,
    task.completion_percentage,
    task.priority,
    task.id
  ).run();
}

export async function getMaterials(db: D1Database): Promise<Material[]> {
  const { results } = await db.prepare('SELECT * FROM materials ORDER BY component, id').all();
  return results as Material[];
}

export async function getMaterialsByComponent(db: D1Database, component: string): Promise<Material[]> {
  const { results } = await db.prepare('SELECT * FROM materials WHERE component = ? ORDER BY id')
    .bind(component)
    .all();
  return results as Material[];
}

export async function getMaterialById(db: D1Database, id: string): Promise<Material | null> {
  const result = await db.prepare('SELECT * FROM materials WHERE id = ?')
    .bind(id)
    .first();
  return result as Material | null;
}

export async function getCriticalMaterials(db: D1Database): Promise<Material[]> {
  const { results } = await db.prepare(
    "SELECT * FROM materials WHERE status = 'Indisponível' OR status = 'Parcial' ORDER BY component, id"
  ).all();
  return results as Material[];
}

export async function createMaterial(db: D1Database, material: Material): Promise<void> {
  await db.prepare(`
    INSERT INTO materials (
      id, component, description, required_quantity, available_quantity,
      supplier, delivery_date, unit_cost, total_cost, status, observations
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    material.id,
    material.component,
    material.description,
    material.required_quantity,
    material.available_quantity,
    material.supplier || null,
    material.delivery_date || null,
    material.unit_cost,
    material.total_cost,
    material.status,
    material.observations || null
  ).run();
}

export async function updateMaterial(db: D1Database, material: Material): Promise<void> {
  await db.prepare(`
    UPDATE materials SET 
      component = ?, 
      description = ?, 
      required_quantity = ?, 
      available_quantity = ?, 
      supplier = ?, 
      delivery_date = ?, 
      unit_cost = ?, 
      total_cost = ?, 
      status = ?, 
      observations = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(
    material.component,
    material.description,
    material.required_quantity,
    material.available_quantity,
    material.supplier || null,
    material.delivery_date || null,
    material.unit_cost,
    material.total_cost,
    material.status,
    material.observations || null,
    material.id
  ).run();
}

export async function getMaterialTaskRelations(db: D1Database, materialId: string): Promise<string[]> {
  const { results } = await db.prepare(`
    SELECT task_id FROM material_task_relations WHERE material_id = ?
  `).bind(materialId).all();
  
  return results.map((row: any) => row.task_id);
}

export async function getTaskMaterialRelations(db: D1Database, taskId: string): Promise<string[]> {
  const { results } = await db.prepare(`
    SELECT material_id FROM material_task_relations WHERE task_id = ?
  `).bind(taskId).all();
  
  return results.map((row: any) => row.material_id);
}

export async function createMaterialTaskRelation(db: D1Database, relation: MaterialTaskRelation): Promise<void> {
  await db.prepare(`
    INSERT INTO material_task_relations (material_id, task_id) VALUES (?, ?)
  `).bind(relation.material_id, relation.task_id).run();
}

export async function deleteMaterialTaskRelation(db: D1Database, materialId: string, taskId: string): Promise<void> {
  await db.prepare(`
    DELETE FROM material_task_relations WHERE material_id = ? AND task_id = ?
  `).bind(materialId, taskId).run();
}

export async function getTaskStats(db: D1Database): Promise<any> {
  // Status counts
  const statusCounts = await db.prepare(`
    SELECT status, COUNT(*) as count FROM tasks GROUP BY status
  `).all();
  
  // Component progress
  const componentProgress = await db.prepare(`
    SELECT component, AVG(completion_percentage) as avg_completion 
    FROM tasks 
    GROUP BY component
  `).all();
  
  // Status by component
  const statusByComponent = await db.prepare(`
    SELECT component, status, COUNT(*) as count 
    FROM tasks 
    GROUP BY component, status
  `).all();
  
  return {
    statusCounts: statusCounts.results,
    componentProgress: componentProgress.results,
    statusByComponent: statusByComponent.results
  };
}

export async function getMaterialStats(db: D1Database): Promise<any> {
  // Status counts
  const statusCounts = await db.prepare(`
    SELECT status, COUNT(*) as count FROM materials GROUP BY status
  `).all();
  
  // Component costs
  const componentCosts = await db.prepare(`
    SELECT component, SUM(total_cost) as total_cost 
    FROM materials 
    GROUP BY component
  `).all();
  
  return {
    statusCounts: statusCounts.results,
    componentCosts: componentCosts.results
  };
}
