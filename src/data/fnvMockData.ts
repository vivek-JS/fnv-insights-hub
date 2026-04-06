// Mock data based on FNV Reports API responses

export const kpiData = {
  totalPurchaseOrders: 12345,
  totalPurchaseAmount: 987.65, // lakhs
  totalSellOrders: 4321,
  totalSellAmount: 12.35, // crores (displayed as ₹12.35 Cr)
};

export const purchaseOrderListing = [
  { order_id: 100001, order_creation_date: "2025-01-15", seller_name: "Seller Shop A", product_name: "Tomato", measurement_unit: "KG", warehouse_name: "WH1", purchased_quantity: 100, buying_price_including_gst: 50.5, Total_buying_price: 5050 },
  { order_id: 100002, order_creation_date: "2025-01-16", seller_name: "Fresh Farm B", product_name: "Onion", measurement_unit: "KG", warehouse_name: "WH2", purchased_quantity: 250, buying_price_including_gst: 35.0, Total_buying_price: 8750 },
  { order_id: 100003, order_creation_date: "2025-01-17", seller_name: "Green Agri C", product_name: "Potato", measurement_unit: "KG", warehouse_name: "WH1", purchased_quantity: 500, buying_price_including_gst: 22.0, Total_buying_price: 11000 },
  { order_id: 100004, order_creation_date: "2025-01-18", seller_name: "Veggie Hub D", product_name: "Capsicum", measurement_unit: "KG", warehouse_name: "WH3", purchased_quantity: 80, buying_price_including_gst: 120.0, Total_buying_price: 9600 },
  { order_id: 100005, order_creation_date: "2025-01-19", seller_name: "Farm Direct E", product_name: "Cauliflower", measurement_unit: "PCS", warehouse_name: "WH1", purchased_quantity: 300, buying_price_including_gst: 45.0, Total_buying_price: 13500 },
  { order_id: 100006, order_creation_date: "2025-01-20", seller_name: "Seller Shop A", product_name: "Brinjal", measurement_unit: "KG", warehouse_name: "WH2", purchased_quantity: 150, buying_price_including_gst: 40.0, Total_buying_price: 6000 },
];

export const sellOrderListing = [
  { order_id: 200001, order_creation_date: "2025-01-15", merchant_name: "Merchant X", product_name: "Onion", measurement_unit: "KG", warehouse_name: "WH1", sold_quantity: 10, selling_price_including_gst: 80, buying_price_including_gst: 60, Total_selling_price: 800, Total_buying_price: 600, margin_amount: 200 },
  { order_id: 200002, order_creation_date: "2025-01-16", merchant_name: "Merchant Y", product_name: "Tomato", measurement_unit: "KG", warehouse_name: "WH2", sold_quantity: 50, selling_price_including_gst: 65, buying_price_including_gst: 50, Total_selling_price: 3250, Total_buying_price: 2500, margin_amount: 750 },
  { order_id: 200003, order_creation_date: "2025-01-17", merchant_name: "Merchant Z", product_name: "Potato", measurement_unit: "KG", warehouse_name: "WH1", sold_quantity: 200, selling_price_including_gst: 30, buying_price_including_gst: 22, Total_selling_price: 6000, Total_buying_price: 4400, margin_amount: 1600 },
  { order_id: 200004, order_creation_date: "2025-01-18", merchant_name: "Merchant X", product_name: "Capsicum", measurement_unit: "KG", warehouse_name: "WH3", sold_quantity: 30, selling_price_including_gst: 150, buying_price_including_gst: 120, Total_selling_price: 4500, Total_buying_price: 3600, margin_amount: 900 },
  { order_id: 200005, order_creation_date: "2025-01-19", merchant_name: "Merchant W", product_name: "Cauliflower", measurement_unit: "PCS", warehouse_name: "WH1", sold_quantity: 100, selling_price_including_gst: 55, buying_price_including_gst: 45, Total_selling_price: 5500, Total_buying_price: 4500, margin_amount: 1000 },
];

export const warehousePurchaseTrend = [
  { order_month: "Oct 2024", WH1: 85.2, WH2: 62.1, WH3: 41.3 },
  { order_month: "Nov 2024", WH1: 92.4, WH2: 58.7, WH3: 45.8 },
  { order_month: "Dec 2024", WH1: 110.3, WH2: 71.5, WH3: 52.1 },
  { order_month: "Jan 2025", WH1: 123.5, WH2: 78.3, WH3: 55.9 },
  { order_month: "Feb 2025", WH1: 105.8, WH2: 82.1, WH3: 48.6 },
  { order_month: "Mar 2025", WH1: 135.2, WH2: 88.4, WH3: 61.3 },
];

export const dailyPurchaseTrend = [
  { order_date: "Mar 22", amount: 42.3, quantity: 1100 },
  { order_date: "Mar 23", amount: 38.7, quantity: 980 },
  { order_date: "Mar 24", amount: 55.2, quantity: 1350 },
  { order_date: "Mar 25", amount: 48.9, quantity: 1200 },
  { order_date: "Mar 26", amount: 61.4, quantity: 1500 },
  { order_date: "Mar 27", amount: 35.1, quantity: 890 },
  { order_date: "Mar 28", amount: 52.8, quantity: 1280 },
  { order_date: "Mar 29", amount: 67.3, quantity: 1650 },
  { order_date: "Mar 30", amount: 44.6, quantity: 1100 },
  { order_date: "Mar 31", amount: 58.2, quantity: 1420 },
  { order_date: "Apr 01", amount: 72.1, quantity: 1780 },
  { order_date: "Apr 02", amount: 49.5, quantity: 1220 },
  { order_date: "Apr 03", amount: 63.8, quantity: 1560 },
  { order_date: "Apr 04", amount: 45.7, quantity: 1130 },
  { order_date: "Apr 05", amount: 56.9, quantity: 1390 },
];

export const top5ProductVolume = [
  { product: "Tomato (KG)", Jan: 50000, Feb: 42000, Mar: 55000 },
  { product: "Onion (KG)", Jan: 45000, Feb: 48000, Mar: 41000 },
  { product: "Potato (KG)", Jan: 38000, Feb: 35000, Mar: 42000 },
  { product: "Capsicum (KG)", Jan: 12000, Feb: 15000, Mar: 18000 },
  { product: "Cauliflower (PCS)", Jan: 8000, Feb: 11000, Mar: 9500 },
];

export const warehouseSellTrend = [
  { order_month: "Oct 2024", WH1: 180.5, WH2: 120.3, WH3: 85.2 },
  { order_month: "Nov 2024", WH1: 195.2, WH2: 135.8, WH3: 92.1 },
  { order_month: "Dec 2024", WH1: 220.8, WH2: 142.5, WH3: 105.3 },
  { order_month: "Jan 2025", WH1: 200.5, WH2: 155.2, WH3: 98.7 },
  { order_month: "Feb 2025", WH1: 215.3, WH2: 148.9, WH3: 110.5 },
  { order_month: "Mar 2025", WH1: 245.8, WH2: 165.3, WH3: 118.2 },
];

export const productWiseSellAmount = [
  { product: "Tomato (KG)", amount: 150.25 },
  { product: "Onion (KG)", amount: 120.80 },
  { product: "Potato (KG)", amount: 95.50 },
  { product: "Capsicum (KG)", amount: 65.30 },
  { product: "Cauliflower (PCS)", amount: 45.20 },
  { product: "Brinjal (KG)", amount: 32.15 },
];

export const merchantTop3Products = [
  { merchant_name: "Merchant X", product_label: "Tomato (KG)", total_quantity: 5000 },
  { merchant_name: "Merchant X", product_label: "Onion (KG)", total_quantity: 3200 },
  { merchant_name: "Merchant X", product_label: "Potato (KG)", total_quantity: 2800 },
  { merchant_name: "Merchant Y", product_label: "Capsicum (KG)", total_quantity: 4500 },
  { merchant_name: "Merchant Y", product_label: "Tomato (KG)", total_quantity: 3800 },
  { merchant_name: "Merchant Y", product_label: "Cauliflower (PCS)", total_quantity: 2100 },
  { merchant_name: "Merchant Z", product_label: "Onion (KG)", total_quantity: 6200 },
  { merchant_name: "Merchant Z", product_label: "Potato (KG)", total_quantity: 4100 },
  { merchant_name: "Merchant Z", product_label: "Tomato (KG)", total_quantity: 3500 },
];

export const indentOrdersDetails = [
  { po_number: "PO-2025-001", indend_po_date: "2025-01-10", order_date: "2025-01-12", merchant_name: "Merchant X", warehouse_name: "WH1" },
  { po_number: "PO-2025-002", indend_po_date: "2025-01-11", order_date: "2025-01-13", merchant_name: "Merchant Y", warehouse_name: "WH2" },
  { po_number: "PO-2025-003", indend_po_date: "2025-01-12", order_date: "2025-01-14", merchant_name: "Merchant Z", warehouse_name: "WH1" },
  { po_number: "PO-2025-004", indend_po_date: "2025-01-14", order_date: "2025-01-16", merchant_name: "Merchant X", warehouse_name: "WH3" },
];
