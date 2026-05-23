import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" />
            <div className="headerInfo">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="headerRight">
            <li>
              <img width={18} height={18} src="/img/cart.svg" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/profile.svg" />
            </li>
          </ul>
        </header>
        <div className="content">
          <h1>Все кроссовки</h1>
          <div className="sneakers">
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/1.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/5.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/6.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/7.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img width={133} height={112} src="/img/sneakers/8.svg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardButtom">
                <div className="cardSpan">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
