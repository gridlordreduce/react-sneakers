import React from "react";
import styles from "./Card.module.scss";

interface cardProps {
  onClose: () => void;
  onPlus: (item: { name: string; imageUrl: string; price: number }) => void;
  onFavorite: () => void;
  name: string;
  imageUrl: string;
  price: number;
}

function Card({ onFavorite, name, imageUrl, price, onPlus }: cardProps) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ name, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/favoriteCard.svg" alt="Unliked" onClick={onFavorite} />
        </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5>{name}</h5>
        <div className={styles.cardButtom}>
          <div className={styles.cardSpan}>
            <span>Цена:</span>
            <b>{price}</b>
          </div>

          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/addLiket.svg" : "/img/notLiket.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
