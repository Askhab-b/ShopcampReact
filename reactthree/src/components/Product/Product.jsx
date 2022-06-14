import React from 'react'
import styles from './product.module.css'



export default function Product(props) {
  return (
    <>
    <div className={styles.product}>
      <img src={props.item.image} alt=""/>
      <h1>{props.item.price} ₽</h1>
      <p>{props.item.name}</p>
      <button className={styles.button}>Купить</button>

</div>  

    
    </>
  )
}
