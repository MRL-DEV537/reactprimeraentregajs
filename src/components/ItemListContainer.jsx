import { pedirDatos } from "../helpers/pedirDatos";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ texto }) => {
  const [productos, setProductos] = useState([])
  const categoria = useParams().categoria;
  console.log(categoria)

  useEffect(() => {
    pedirDatos()
    .then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria)); 
      } else {
        setProductos(res);
      }
 
    })
  }, [categoria])

  return (
    <div>
        <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
