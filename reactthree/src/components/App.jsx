import styles from "./app.module.css";
import React from "react";
import Header from "./Header/Header";
import Object from "./objects/Object";
import Product from "./Product/Product";

function App() {
  return (
    <>
    

    <div className={styles.app}>
    <Header />
    <Object />
    </div>
    </>
  );
}

export default App;
