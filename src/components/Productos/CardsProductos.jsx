import React from "react";
import CardProducto from "./CardProducto";
import { productos } from "../../data/productos";
import { CardProductosContainer } from "./CardProductosStyles";

function CardsProductos() {
  return (
    <CardProductosContainer>
      {productos.map((prod) => (
        <CardProducto key={prod.id} {...prod} />
      ))}
    </CardProductosContainer>
  );
}

export default CardsProductos;
