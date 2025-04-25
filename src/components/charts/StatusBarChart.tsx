import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type BarChartData = {
  name: string;
  [key: string]: string | number;
};

type StatusBarChartProps = {
  data: BarChartData[];
  title: string;
  dataKeys: {
    key: string;
    color: string;
  }[];
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export default function StatusBarChart({ 
  data, 
  title, 
  dataKeys,
  xAxisLabel,
  yAxisLabel
}: StatusBarChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -5 } : undefined} />
            <YAxis label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined} />
            <Tooltip />
            <Legend />
            {dataKeys.map((item) => (
              <Bar key={item.key} dataKey={item.key} fill={item.color} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
