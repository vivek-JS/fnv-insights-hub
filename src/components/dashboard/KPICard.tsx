import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  trend?: { value: number; label: string };
}

const KPICard = ({ title, value, subtitle, icon: Icon, colorClass, bgClass, trend }: KPICardProps) => {
  return (
    <div className="glass-card rounded-xl p-5 kpi-glow transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              <span className={`text-xs font-semibold ${trend.value >= 0 ? 'text-kpi-sell' : 'text-destructive'}`}>
                {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-muted-foreground">{trend.label}</span>
            </div>
          )}
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bgClass}`}>
          <Icon className={`h-5 w-5 ${colorClass}`} />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
