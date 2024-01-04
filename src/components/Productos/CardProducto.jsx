import React from "react";
import { CardProductoWrapper } from "./CardProductosStyles";

function CardProducto({ img, title, category }) {
  return (
    <CardProductoWrapper>
      <img src={img} alt={category} />
      <h2>{title}</h2>
    </CardProductoWrapper>
  );
}

export default CardProducto;
