import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ProgressChartData = {
  name: string;
  value: number;
};

type ProgressLineChartProps = {
  data: ProgressChartData[];
  title: string;
  color?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export default function ProgressLineChart({ 
  data, 
  title, 
  color = '#4472C4',
  xAxisLabel,
  yAxisLabel
}: ProgressLineChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -5 } : undefined} 
            />
            <YAxis 
              label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined}
              domain={[0, 100]}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Conclusão']} />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              activeDot={{ r: 8 }}
              name="Percentual de Conclusão"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
