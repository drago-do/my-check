"use client";
import React, { useState, useEffect } from "react";
import Typography from "../general/Typography";
import Container from "@/components/general/Container";
import MaterialIcon from "../general/MaterialIcon";
import Badge from "./../general/Badge";
import useOrderList from "@/hooks/useOrderList";
import Skeleton from "../general/Skeleton";
import ImagenView from "./../general/ImageViewer";

export default function PendentOrder() {
  const { orderList } = useOrderList();

  useEffect(() => {
    console.log(orderList);
  }, [orderList]);

  return (
    <div className="w-full flex flex-col flex-nowrap ">
      <Typography variant="title">Ordenes Pendientes</Typography>
      <div style={{ maxHeight: "70vh" }}>
        <Container className="border-solid border-2 p-2 border-black dark:border-white rounded-xl overflow-y-auto">
          {orderList ? (
            orderList.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))
          ) : (
            <Skeleton variant={"list"} />
          )}
        </Container>
      </div>
    </div>
  );
}

const OrderItem = ({ order }) => {
  const [showFullOrder, setShowFullOrder] = useState(false);
  const handleOpenOrder = () => {
    console.log("Open Order");
    setShowFullOrder(!showFullOrder);
  };
  return (
    <>
      <div className="flex flex-col w-full flex-nowrap">
        <div className="flex flex-row flex-nowrap justify-between items-center ">
          <MaterialIcon iconName="drag_handle" className="px-3" />
          <div className="w-full shrink px-5">
            <Typography variant="p">{order.orderName}</Typography>
            <Badge
              color={"yellow"}
              icon={<MaterialIcon iconName="account_circle" />}
            >
              {order?.madeBy?.username}
            </Badge>
          </div>
          <div onClick={handleOpenOrder}>
            <MaterialIcon iconName="arrow_downward" className="px-3" />
          </div>
        </div>
        <div
          className={`${
            showFullOrder ? "flex" : "hidden"
          } flex-col flex-nowrap p-3 pl-10`}
        >
          <Typography variant="p">
            Pendientes: {order?.products?.length}
          </Typography>
          {order?.products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProductItem = ({ product }) => {
  const status = ["hourglass", "check_small"];
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between items-center my-2">
        <div className="w-24 ">
          <ImagenView
            fotoData={product.product.image}
            className={"w-full rounded-lg"}
          />
        </div>
        <div className="flex flex-col flex-nowrap w-full shrink px-5 ">
          <Typography variant="p">{product?.product?.name}</Typography>
          <Typography variant="caption">
            {`Tamaño: ${product?.UnitMeasurementAndPrice?.size} ${product?.UnitMeasurementAndPrice?.UnitMeasurement}`}
          </Typography>
        </div>
        <MaterialIcon iconName="check_small" className="px-3" />
      </div>
      {product.comments && (
        <Badge color="blue" icon={<MaterialIcon iconName="info" />}>
          {product?.comments}
        </Badge>
      )}
    </>
  );
};
