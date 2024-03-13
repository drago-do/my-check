import React, { useState } from "react";
import Typography from "../../general/Typography";
import MaterialIcon from "../../general/MaterialIcon";
import ButtonFunction from "../../general/ButtonFunction";
import Badge from "../../general/Badge";
import ProductItem from "./../ActualOrder/ProductItem";

//TODO delete this import mockup
import ActualOrderExample from "../../../utils/actualOrderExample";

export default function ActualOrder({ order = ActualOrderExample }) {
  return (
    <div className="w-full flex flex-col flex-nowrap px-1 md:px-8">
      <HeaderOrder
        name={order.orderName}
        madeBy={order.madeBy.username}
        location={order.location}
        orderTotal={order.total}
      />
      <OrderList products={order.products} />
    </div>
  );
}

const HeaderOrder = ({
  name = "Mesa",
  madeBy = "Mesero",
  location = {
    mapTable: {
      _id: "1",
      name: "Terraza",
    },
    position: [0, 0],
  },
  orderTotal = 1,
}) => {
  const handleClickMap = () => {
    console.log("click map");
  };

  return (
    <>
      <div className="flex flex-nowrap justify-between">
        <div className="flex flex-col flex-nowrap">
          <Typography variant="subtitle">{name}</Typography>
          <Typography variant="caption" className="flex">
            Realizada por:{" "}
            <Badge color="alternative" className="mx-2">
              {madeBy}
            </Badge>
          </Typography>
        </div>
        <div className="flex flex-col flex-nowrap h-full justify-between shrink">
          <ButtonFunction onClick={handleClickMap}>
            <MaterialIcon iconName="edit_location_alt" />
          </ButtonFunction>
        </div>
      </div>
      <div className="w-full flex flex-nowrap justify-between my-2">
        <div className="flex flex-nowrap">
          <Typography variant="caption">Area: </Typography>
          <Badge color="yellow" className="mx-2">
            {location?.mapTable?.name}
          </Badge>
        </div>
        <Badge color="green" className="mx-2">
          Total: ${orderTotal}
        </Badge>
      </div>
    </>
  );
};

const OrderList = ({ products }) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-2">
      {products.map((product) => (
        <ProductItem key={product?.addedAT} product={product} />
      ))}
    </div>
  );
};
