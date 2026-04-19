"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
  statusColor: string;
  dotColor: string;
  product: {
    name: string;
    variant: string;
    qty: number;
    price: string;
    image: string;
  };
  action: string;
  actionEnabled: boolean;
}

interface OrderHistoryProps {
  orders: Order[];
}

export default function OrderHistory({ orders }: OrderHistoryProps) {
  const [filter, setFilter] = useState("All Orders");
  return (
    <>
      {/* Orders Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-2xl font-medium tracking-tight text-zinc-900">
          Order History
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">Filter by:</span>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs rounded-sm pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 cursor-pointer"
            >
              <option>All Orders</option>
              <option>Last 30 Days</option>
              <option>2023</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-500 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-zinc-200 rounded-sm overflow-hidden bg-white shadow-sm"
          >
            {/* Header */}
            <div className="bg-zinc-50 border-b border-zinc-200 p-4 sm:p-6 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Date Placed
                  </p>
                  <p className="text-sm font-medium text-zinc-900">
                    {order.date}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Total Amount
                  </p>
                  <p className="text-sm font-medium text-zinc-900">
                    {order.total}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Order Number
                  </p>
                  <p className="text-sm font-medium text-zinc-900">
                    {order.id}
                  </p>
                </div>
              </div>
              <div className="flex items-center md:items-end justify-between md:flex-col gap-2">
                <Badge
                  variant={
                    order.status === "Delivered"
                      ? "success"
                      : order.status === "Processing"
                      ? "warning"
                      : "outline"
                  }
                  className="gap-1.5"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${order.dotColor}`}
                  ></span>
                  {order.status}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 underline decoration-zinc-300 hover:decoration-zinc-900"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                <div className="w-20 h-24 sm:w-24 sm:h-32 flex-shrink-0 bg-zinc-100 rounded-sm overflow-hidden border border-zinc-200 relative">
                  <Image
                    src={order.product.image}
                    alt={order.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium text-zinc-900">
                      {order.product.name}
                    </h4>
                    <span className="text-sm font-medium text-zinc-900">
                      {order.product.price}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-2">
                    {order.product.variant}
                  </p>
                  <p className="text-sm text-zinc-500">Qty: {order.product.qty}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                  <Button
                    className="w-full sm:w-auto"
                    disabled={!order.actionEnabled}
                  >
                    {order.action}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Load More */}
        <div className="flex justify-center pt-6">
          <Button variant="outline" className="gap-2">
            Load More Orders
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
