import "./Card.css";

import React, { useEffect, useState } from "react";
import { db } from "../../config/Firebase";
import { getDocs, collection } from "firebase/firestore";

const Card = () => {
  const addToCartButtonHandler = () => {};

  const [productsList, setProductsList] = useState([]);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      // read data
      //set product list
      try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log(filteredData);
        setProductsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getProductList();
  }, []);

  return (
    <>
      {productsList.map((product) => (
        <div className="card-div">
          <div>
            <p>{product.MARCA}</p>
            <p>{product.PRODUCTO}</p>
            <p>${product.PRECIO}</p>
          </div>
          <button onClick={addToCartButtonHandler}>Añadir al carrito</button>
        </div>
      ))}
    </>
  );
};

export default Card;
