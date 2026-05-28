import styles from "./Drawer.module.scss";

interface drawerProps {
  onClose: () => void;
  items?: any[];
}

function Drawer({ onClose, items = [] }: drawerProps) {
  return (
    <>
      <div className="overlay">
        <div className={styles.drawer}>
          <h2>
            Корзина
            <img
              onClick={onClose}
              className={styles.removeBtn}
              src="/img/closeCart.svg"
              alt="Remove"
            />
          </h2>

          <div className={styles.items}>
            {items.map((obj, index) => (
              <div className={styles.cartItem} key={index}>
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className={styles.cartItemImg}
                ></div>
                <div className={styles.cartInfo}>
                  <p>{obj.name}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  className={styles.removeBtn}
                  src="/img/closeCart.svg"
                  alt="Remove"
                />
              </div>
            ))}
          </div>
          <div className={styles.cartTotalBlock}>
            <ul>
              <li className={styles.finalCart}>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className={styles.finalCart}>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className={styles.greenButton}>
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
