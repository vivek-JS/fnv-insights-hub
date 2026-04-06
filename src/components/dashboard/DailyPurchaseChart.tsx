import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { dailyPurchaseTrend } from "@/data/fnvMockData";

const DailyPurchaseChart = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-foreground">Daily Purchase Trend (15 Days)</h3>
      <p className="mb-4 text-xs text-muted-foreground">Amount in Lakhs (₹)</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dailyPurchaseTrend}>
            <defs>
              <linearGradient id="purchaseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="order_date" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: 12 }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
            />
            <Area type="monotone" dataKey="amount" stroke="hsl(var(--chart-1))" fill="url(#purchaseGradient)" strokeWidth={2} dot={{ r: 3, fill: 'hsl(var(--chart-1))' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyPurchaseChart;
