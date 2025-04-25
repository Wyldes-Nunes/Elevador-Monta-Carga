import React from 'react';

type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  let bgColor = '';
  
  switch (status) {
    case 'Concluído':
      bgColor = 'bg-green-500';
      break;
    case 'Em desenvolvimento':
      bgColor = 'bg-yellow-400';
      break;
    case 'Risco de atraso':
      bgColor = 'bg-orange-500';
      break;
    case 'Travado':
      bgColor = 'bg-red-500';
      break;
    case 'Planejado':
      bgColor = 'bg-blue-300';
      break;
    case 'Disponível':
      bgColor = 'bg-green-500';
      break;
    case 'Parcial':
      bgColor = 'bg-yellow-400';
      break;
    case 'Indisponível':
      bgColor = 'bg-red-500';
      break;
    case 'Encomendado':
    case 'Em produção':
      bgColor = 'bg-orange-500';
      break;
    default:
      bgColor = 'bg-gray-500';
  }
  
  return (
    <span className={`${bgColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}>
      {status}
    </span>
  );
}
