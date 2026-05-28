import styles from "./Drawer.module.scss";

interface drawerProps {
  onClose: () => void;
  onRemove: (id: number | string) => void;
  items?: any[];
}

function Drawer({ onRemove, onClose, items = [] }: drawerProps) {
  // Подсчёт суммы (добавим для динамики)
  const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);
  const tax = Math.round(totalPrice * 0.05);

  return (
    <div className="overlay">
      {" "}
      {/* Убираем фрагмент, оставляем div */}
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src="/img/closeCart.svg" // Проверьте путь!
            alt="Закрыть корзину"
          />
        </h2>

        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Корзина пуста</p>
            </div>
          ) : (
            items.map((obj) => (
              <div className={styles.cartItem} key={obj.id}>
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className={styles.cartItemImg}
                ></div>
                <div className={styles.cartInfo}>
                  <p>{obj.name}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  className={styles.removeBtn}
                  onClick={() => onRemove(obj.id)}
                  src="/img/closeCart.svg" // Тот же файл, но для удаления товара
                  alt="Удалить товар"
                />
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.cartTotalBlock}>
            <ul>
              <li className={styles.finalCart}>
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice.toLocaleString()} руб.</b>
              </li>
              <li className={styles.finalCart}>
                <span>Налог 5%:</span>
                <div></div>
                <b>{tax.toLocaleString()} руб.</b>
              </li>
            </ul>
            <button className={styles.greenButton}>
              Оформить заказ
              <img src="/img/arrow.svg" alt="Стрелка" /> {/* Проверьте путь! */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
