import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import "./App.css";

interface CartItem {
  name: string;
  price: number;
  imageUrl: string;
}

function App() {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6a17b9bb1878294b597bc7d5.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj: CartItem) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <>
      <div className="wrapper">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
          <div className="contentInfo">
            <h1>Все кроссовки</h1>
            <div className="searchBlock">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="sneakers">
            {items.map((obj) => (
              <Card
                name={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={onAddToCart}
                onClose={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
