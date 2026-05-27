import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <>
      <div style={{ display: "none" }} className="overlay">
        <div className={styles.drawer}>
          <h2>
            Корзина
            <img className={styles.removeBtn} src="/img/closeCart.svg" alt="Remove" />
          </h2>

          <div className={styles.items}>
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.svg)" }}
                className={styles.cartItemImg}
              ></div>
              <div className={styles.cartInfo}>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/closeCart.svg"
                alt="Remove"
              />
            </div>
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.svg)" }}
                className={styles.cartItemImg}
              ></div>
              <div className={styles.cartInfo}>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/closeCart.svg"
                alt="Remove"
              />
            </div>
            <div className={styles.cartItem}>
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.svg)" }}
                className={styles.cartItemImg}
              ></div>
              <div className={styles.cartInfo}>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className={styles.removeBtn}
                src="/img/closeCart.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="styles.cartTotalBlock">
            <ul>
              <li className="styles.finalCart">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="styles.finalCart">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="styles.greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
