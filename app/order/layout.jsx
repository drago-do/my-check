"use client";
import React from "react";
import SwipeDrawer from "@/components/general/SwipeDrawer";
import MaterialIcon from "@/components/general/MaterialIcon";
import ActualOrder from "@/components/order/ActualOrder/ActualOrder";

import useActualOrder from "@/hooks/useActualOrder";

export default function Layout({ children }) {
  const { actualOrder } = useActualOrder();
  return (
    <>
      {children}
      <SwipeDrawer
        title={
          <>
            <MaterialIcon iconName="order_approve" /> Orden actual
          </>
        }
      >
        <ActualOrder order={actualOrder} />
      </SwipeDrawer>
    </>
  );
}
