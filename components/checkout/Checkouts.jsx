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
import ButtonFunction from "./../general/ButtonFunction";

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

  const handleMakeACut = () => {
    console.log("Cortar");
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
        <div style={{ maxHeight: "65vh", height: "65vh" }}>
          <Container className="border-solid border-2 px-2 border-black dark:border-white rounded-xl overflow-y-auto h-full">
            {selectedOrder ? (
              <SelectedOrder order={selectedOrder} />
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <Typography variant="subtitle">
                  No hay orden seleccionada
                </Typography>
                <Image
                  src="/notChecks.png"
                  width={200}
                  height={200}
                  alt="No hay nada para cobrar"
                />
              </div>
            )}
          </Container>
        </div>
        <div
          style={{ maxHeight: "10vh", height: "10vh" }}
          className="mt-2 px-4 w-full h-full flex flex-col md:flex-row justify-between items-start  md:items-center"
        >
          <ButtonFunction
            className="py-3 w-full md:w-auto"
            onClick={handleMakeACut}
          >
            <MaterialIcon iconName="order_approve" />
            <Typography variant="p">Anteriores</Typography>
          </ButtonFunction>
          <ButtonFunction
            className="py-3"
            variant="red"
            onClick={handleMakeACut}
          >
            <MaterialIcon iconName="content_cut" />
            <Typography variant="p" className="font-bold">
              Realizar corte
            </Typography>
          </ButtonFunction>
        </div>
      </div>
    </div>
  );
}

const OrderItem = ({ order, selectOrder, orderIsSelected = false }) => {
  const [showFullOrder, setShowFullOrder] = useState(false);

  const handleOpenOrder = (e) => {
    //Stop propagation button
    e.stopPropagation();

    console.log("Open Order");
  };
  return (
    <>
      <div
        className={`flex flex-col w-full flex-nowrap rounded-xl ${
          orderIsSelected ? "bg-slate-400 dark:bg-gray-900" : ""
        }`}
        onClick={() => selectOrder(order._id)}
      >
        <div className="flex flex-row flex-nowrap justify-between items-center">
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
          <ButtonFunction
            className="py-3"
            variant="green"
            onClick={handleOpenOrder}
          >
            <MaterialIcon iconName="point_of_sale" />
          </ButtonFunction>
        </div>
      </div>
    </>
  );
};

const ProductItem = ({ product }) => {
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
          <div className="flex justify-between flex-wrap md:flex-nowrap">
            <Typography variant="caption">
              {`Tamaño: ${product?.UnitMeasurementAndPrice?.size} ${product?.UnitMeasurementAndPrice?.UnitMeasurement}`}
            </Typography>
            <Typography variant="caption">
              <Badge color="green">
                ${product?.UnitMeasurementAndPrice?.price}
              </Badge>
            </Typography>
          </div>
        </div>
        <MaterialIcon iconName="request_quote" className="px-3" />
      </div>
    </>
  );
};

const SelectedOrder = ({ order }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col w-full flex-nowrap  ">
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
          <div className="flex justify-between flex-nowrap sticky top-0 bg-white dark:bg-black py-3">
            <Typography variant="p">
              Pendientes: {order?.products?.length}
            </Typography>
            <Typography variant="p">
              Total: <Badge color="green">${order?.total}</Badge>
            </Typography>
          </div>
          {order?.products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-black p-3 flex justify-end">
        <ButtonFunction variant="green">
          <MaterialIcon iconName="point_of_sale" />
          <Typography variant="p">Cobrar Todo</Typography>
        </ButtonFunction>
      </div>
    </div>
  );
};
