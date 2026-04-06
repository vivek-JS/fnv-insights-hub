import { ShoppingCart, IndianRupee, TrendingUp, Package } from "lucide-react";
import { kpiData } from "@/data/fnvMockData";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICard from "@/components/dashboard/KPICard";
import PurchaseTrendChart from "@/components/dashboard/PurchaseTrendChart";
import DailyPurchaseChart from "@/components/dashboard/DailyPurchaseChart";
import ProductVolumeChart from "@/components/dashboard/ProductVolumeChart";
import ProductSellPieChart from "@/components/dashboard/ProductSellPieChart";
import SellTrendChart from "@/components/dashboard/SellTrendChart";
import OrdersTable from "@/components/dashboard/OrdersTable";
import MerchantProductsChart from "@/components/dashboard/MerchantProductsChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <DashboardHeader />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            title="Purchase Orders"
            value={kpiData.totalPurchaseOrders.toLocaleString()}
            icon={ShoppingCart}
            colorClass="text-kpi-purchase"
            bgClass="bg-kpi-purchase-bg"
            trend={{ value: 12.5, label: "vs last month" }}
          />
          <KPICard
            title="Purchase Amount"
            value={`₹${kpiData.totalPurchaseAmount.toFixed(2)}L`}
            subtitle="In Lakhs"
            icon={IndianRupee}
            colorClass="text-kpi-sell"
            bgClass="bg-kpi-sell-bg"
            trend={{ value: 8.3, label: "vs last month" }}
          />
          <KPICard
            title="Sell Orders"
            value={kpiData.totalSellOrders.toLocaleString()}
            icon={Package}
            colorClass="text-kpi-orders"
            bgClass="bg-kpi-orders-bg"
            trend={{ value: -2.1, label: "vs last month" }}
          />
          <KPICard
            title="Sell Amount"
            value={`₹${kpiData.totalSellAmount.toFixed(2)} Cr`}
            subtitle="In Crores"
            icon={TrendingUp}
            colorClass="text-kpi-margin"
            bgClass="bg-kpi-margin-bg"
            trend={{ value: 15.7, label: "vs last month" }}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PurchaseTrendChart />
          <DailyPurchaseChart />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ProductVolumeChart />
          <ProductSellPieChart />
          <MerchantProductsChart />
        </div>

        {/* Sell Trend */}
        <SellTrendChart />

        {/* Orders Table */}
        <OrdersTable />
      </div>
    </div>
  );
};

export default Index;
