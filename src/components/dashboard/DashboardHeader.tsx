import { BarChart3 } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
          <BarChart3 className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">FNV Analytics</h1>
          <p className="text-xs text-muted-foreground">Fruits & Vegetables Business Intelligence</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="flex h-2 w-2 rounded-full bg-kpi-sell animate-pulse" />
        Live Dashboard
      </div>
    </div>
  );
};

export default DashboardHeader;
