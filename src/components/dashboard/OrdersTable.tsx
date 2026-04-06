import { useState } from "react";
import { purchaseOrderListing, sellOrderListing } from "@/data/fnvMockData";

const OrdersTable = () => {
  const [activeTab, setActiveTab] = useState<'purchase' | 'sell'>('purchase');

  return (
    <div className="glass-card rounded-xl p-5">
      <div className="mb-4 flex items-center gap-1 rounded-lg bg-muted p-1">
        <button
          onClick={() => setActiveTab('purchase')}
          className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            activeTab === 'purchase'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Purchase Orders
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            activeTab === 'sell'
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Sell Orders
        </button>
      </div>

      <div className="overflow-x-auto">
        {activeTab === 'purchase' ? (
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 text-left font-semibold text-muted-foreground">Order ID</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Date</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Seller</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Product</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">WH</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Qty</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Price/Unit</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrderListing.map((row) => (
                <tr key={row.order_id} className="border-b border-border/50 transition-colors hover:bg-muted/50">
                  <td className="py-2.5 font-medium text-foreground">#{row.order_id}</td>
                  <td className="py-2.5 text-muted-foreground">{row.order_creation_date}</td>
                  <td className="py-2.5 text-foreground">{row.seller_name}</td>
                  <td className="py-2.5">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {row.product_name}
                    </span>
                  </td>
                  <td className="py-2.5 text-muted-foreground">{row.warehouse_name}</td>
                  <td className="py-2.5 text-right text-foreground">{row.purchased_quantity} {row.measurement_unit}</td>
                  <td className="py-2.5 text-right text-foreground">₹{row.buying_price_including_gst}</td>
                  <td className="py-2.5 text-right font-semibold text-foreground">₹{row.Total_buying_price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 text-left font-semibold text-muted-foreground">Order ID</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Date</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Merchant</th>
                <th className="pb-2 text-left font-semibold text-muted-foreground">Product</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Qty</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Sell ₹</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Buy ₹</th>
                <th className="pb-2 text-right font-semibold text-muted-foreground">Margin</th>
              </tr>
            </thead>
            <tbody>
              {sellOrderListing.map((row) => (
                <tr key={row.order_id} className="border-b border-border/50 transition-colors hover:bg-muted/50">
                  <td className="py-2.5 font-medium text-foreground">#{row.order_id}</td>
                  <td className="py-2.5 text-muted-foreground">{row.order_creation_date}</td>
                  <td className="py-2.5 text-foreground">{row.merchant_name}</td>
                  <td className="py-2.5">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {row.product_name}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-foreground">{row.sold_quantity} {row.measurement_unit}</td>
                  <td className="py-2.5 text-right text-foreground">₹{row.Total_selling_price.toLocaleString()}</td>
                  <td className="py-2.5 text-right text-muted-foreground">₹{row.Total_buying_price.toLocaleString()}</td>
                  <td className="py-2.5 text-right font-semibold text-kpi-sell">+₹{row.margin_amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;
