import { merchantTop3Products } from "@/data/fnvMockData";

const COLORS = [
  'bg-chart-1', 'bg-chart-2', 'bg-chart-4',
];

const MerchantProductsChart = () => {
  const merchants = [...new Set(merchantTop3Products.map(m => m.merchant_name))];
  const maxQty = Math.max(...merchantTop3Products.map(m => m.total_quantity));

  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-foreground">Merchant Top 3 Products</h3>
      <p className="mb-4 text-xs text-muted-foreground">By quantity volume</p>
      <div className="space-y-5">
        {merchants.map((merchant) => {
          const products = merchantTop3Products.filter(m => m.merchant_name === merchant);
          return (
            <div key={merchant}>
              <p className="mb-2 text-xs font-semibold text-foreground">{merchant}</p>
              <div className="space-y-1.5">
                {products.map((p, idx) => (
                  <div key={p.product_label} className="flex items-center gap-2">
                    <span className="w-24 truncate text-[10px] text-muted-foreground">{p.product_label}</span>
                    <div className="flex-1">
                      <div
                        className={`h-4 rounded-sm ${COLORS[idx]} transition-all`}
                        style={{ width: `${(p.total_quantity / maxQty) * 100}%`, opacity: 0.8 }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-foreground">{(p.total_quantity / 1000).toFixed(1)}K</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MerchantProductsChart;
