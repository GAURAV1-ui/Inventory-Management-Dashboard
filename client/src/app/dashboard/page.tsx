"use client"

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
// import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
// import CardPurchaseSummary from "./CardPurchaseSummary";
// import CardSalesSummary from "./CardSalesSummary";

const DashBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      {/* <CardSalesSummary /> */}
    </div>
  )
}

export default DashBoard
