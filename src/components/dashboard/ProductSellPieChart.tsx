import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { productWiseSellAmount } from "@/data/fnvMockData";

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  'hsl(var(--chart-6))',
];

const ProductSellPieChart = () => {
  const data = productWiseSellAmount.map(item => ({
    name: item.product,
    value: item.amount,
  }));

  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-foreground">Product-wise Sell Amount</h3>
      <p className="mb-4 text-xs text-muted-foreground">In Lakhs (₹)</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: 12 }}
              formatter={(value: number) => [`₹${value.toFixed(2)}L`, '']}
            />
            <Legend wrapperStyle={{ fontSize: 10 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductSellPieChart;
