import styles from "./Card.module.scss";

interface cardProps{title: string, imageUrl: string, onClick: () => void, price: number}

function Card(props: cardProps) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/favoriteCard.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className={styles.cardButtom}>
          <div className={styles.cardSpan}>
            <span>Цена:</span>
            <b>{props.price}</b>
          </div>
          <button className={styles.button} onClick={props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
