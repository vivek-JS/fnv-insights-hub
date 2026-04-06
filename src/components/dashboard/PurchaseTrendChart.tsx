import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { warehousePurchaseTrend } from "@/data/fnvMockData";

const PurchaseTrendChart = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-foreground">Warehouse Purchase Trend (MoM)</h3>
      <p className="mb-4 text-xs text-muted-foreground">Amount in Lakhs (₹)</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={warehousePurchaseTrend} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="order_month" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: 12 }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="WH1" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="WH2" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="WH3" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PurchaseTrendChart;
