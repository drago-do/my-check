import React from "react";
import PendentOrder from "@/components/prepare/PendentOrder";

export default function page() {
  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
      <PendentOrder />
    </div>
  );
}
