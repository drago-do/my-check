import React, { useState } from "react";
import Typography from "../../general/Typography";
import MaterialIcon from "../../general/MaterialIcon";
import ButtonFunction from "../../general/ButtonFunction";
import Badge from "../../general/Badge";
import ProductItem from "./../ActualOrder/ProductItem";

//TODO delete this import mockup
import ActualOrderJSON from "../../../utils/ActualOrderJSON";

export default function ActualOrder({ order = ActualOrderJSON }) {
  return (
    <div className="w-full flex flex-col flex-nowrap px-1 md:px-8">
      <HeaderOrder
        name={order.orderName}
        madeBy={order.madeBy.username}
        location={order.location}
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
}) => {
  const handleClickMap = () => {
    console.log("click map");
  };

  return (
    <div className="flex flex-nowrap justify-between">
      <div className="flex flex-col flex-nowrap">
        <Typography variant="subtitle">{name}</Typography>
        <Typography variant="caption" className="flex">
          Realizada por:{" "}
          <Badge color="alternative" className="mx-2">
            {madeBy}
          </Badge>
        </Typography>
        <Typography variant="caption" className="flex py-2">
          Area:{" "}
          <Badge color="yellow" className="mx-2">
            {location?.mapTable?.name}
          </Badge>
        </Typography>
      </div>
      <ButtonFunction onClick={handleClickMap}>
        <MaterialIcon iconName="edit_location_alt" />
      </ButtonFunction>
    </div>
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
