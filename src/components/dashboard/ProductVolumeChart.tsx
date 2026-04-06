import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { top5ProductVolume } from "@/data/fnvMockData";

const ProductVolumeChart = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-foreground">Top 5 Products by Volume</h3>
      <p className="mb-4 text-xs text-muted-foreground">Monthly comparison</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={top5ProductVolume} layout="vertical" barGap={1}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis dataKey="product" type="category" width={110} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: 12 }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="Jan" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} barSize={8} />
            <Bar dataKey="Feb" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} barSize={8} />
            <Bar dataKey="Mar" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductVolumeChart;
