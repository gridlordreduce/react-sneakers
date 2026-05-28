import styles from "./Header.module.scss";

interface headerProps {onClickCart: () => void}

function Header(props: headerProps) {
    return(
        <>
        <header>
          <div className={styles.headerLeft}>
            <img width={40} height={40} src="/img/logo.png" />
            <div className={styles.headerInfo}>
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className={styles.headerRight}>
            <li onClick={props.onClickCart} className={styles.cart}>
              <img width={18} height={18} src="/img/cart.svg" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/profile.svg" />
            </li>
          </ul>
        </header></>
    )
}

export default Header;