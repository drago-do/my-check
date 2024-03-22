"use client";
import React, { useState, useRef } from "react";
import Typography from "../general/Typography";
import Container from "@/components/general/Container";
import MaterialIcon from "../general/MaterialIcon";
import Badge from "./../general/Badge";
import useOrderList from "@/hooks/useOrderList";
import Skeleton from "../general/Skeleton";
import ImagenView from "./../general/ImageViewer";
import SpeedDial from "./../general/SpeedDial";
import Image from "next/image";

export default function PendentOrder() {
  const { orderList } = useOrderList();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPosition, setCurrentPosition] = useState("start");

  const OrderListRef = useRef(null);
  const ActualOrderRef = useRef(null);

  const selectOrder = (orderId) => {
    setSelectedOrder(orderList.find((order) => order._id === orderId));
  };

  const scrollToElement = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    // Decides a qué elemento desplazarte basado en alguna condición o estado
    if (currentPosition === "start") {
      scrollToElement(ActualOrderRef);
      setCurrentPosition("end"); // Actualizas el estado para la próxima acción
    } else {
      scrollToElement(OrderListRef);
      setCurrentPosition("start"); // Vuelve al estado inicial
    }
  };

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:hidden">
        <SpeedDial
          actions={{
            icon: <MaterialIcon iconName="change_circle" />,
            text: "Cambiar de interfaz",
            onClick: handleScroll,
          }}
        />
      </div>
      <div className="w-full flex flex-col flex-nowrap" ref={OrderListRef}>
        <Typography variant="title">Ordenes Pendientes</Typography>
        <div style={{ maxHeight: "75vh", height: "75vh" }}>
          <Container className="border-solid border-2 p-2 border-black dark:border-white rounded-xl overflow-y-auto h-full">
            {orderList ? (
              orderList.map((order, index) => (
                <OrderItem
                  key={index}
                  order={order}
                  selectOrder={selectOrder}
                  orderIsSelected={selectedOrder?._id === order._id}
                />
              ))
            ) : (
              <Skeleton variant={"list"} />
            )}
          </Container>
        </div>
      </div>
      <div
        className="w-full flex flex-col flex-nowrap mb-32 md:mb-0"
        ref={ActualOrderRef}
      >
        <Typography variant="title">Orden Seleccionada</Typography>
        <div style={{ maxHeight: "75vh", height: "75vh" }}>
          <Container className="border-solid border-2 p-2 border-black dark:border-white rounded-xl overflow-y-auto h-full">
            {selectedOrder ? (
              <SelectedOrder order={selectedOrder} />
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <Typography variant="subtitle">
                  No hay orden seleccionada
                </Typography>
                <Image
                  src="/notWork.png"
                  width={200}
                  height={200}
                  alt="No hay orden"
                />
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}

const OrderItem = ({ order, selectOrder, orderIsSelected = false }) => {
  const [showFullOrder, setShowFullOrder] = useState(false);
  const handleOpenOrder = () => {
    console.log("Open Order");
    setShowFullOrder(!showFullOrder);
  };
  return (
    <>
      <div
        className={`flex flex-col w-full flex-nowrap rounded-xl ${
          orderIsSelected ? "bg-slate-400 dark:bg-gray-900" : ""
        }`}
        onClick={() => selectOrder(order._id)}
      >
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

const SelectedOrder = ({ order }) => {
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
          <div>
            <MaterialIcon iconName="arrow_downward" className="px-3" />
          </div>
        </div>
        <div className={`flex flex-col flex-nowrap p-3 pl-10`}>
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
