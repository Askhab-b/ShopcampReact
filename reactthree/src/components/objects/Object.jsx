import React from "react";
import product from "../../data";
import Product from "../Product/Product";
import styles from "./object.module.css";

function Object() {
  return (
    <>
      <div className={styles.object}>
        {product.map((item) => {
          return (
            <Product item={item}/>
          );
        })}
      </div>
    </>
  );
}

export default Object;
