import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./App.css";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.svg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/2.svg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.svg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.svg",
  },
  {
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    imageUrl: "/img/sneakers/5.svg",
  },
];

function App() {
  return (
    <>
      <div className="wrapper">
        <Drawer />
        <Header />
        <div className="content">
          <div className="contentInfo">
            <h1>Все кроссовки</h1>
            <div className="searchBlock">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="sneakers">
            {arr.map((obj) => (
              <Card
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
