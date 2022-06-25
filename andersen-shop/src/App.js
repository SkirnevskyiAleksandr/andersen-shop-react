import './App.css';
import { useState, useEffect } from 'react'
import { MainWindow } from './components/MaineWindow/MainWindow';


export function App() {
  const [listItem, setListItem] = useState([]);
  const [item, setItem] = useState({});
  const [basketListItems, setBasketItems] = useState([]);
  const [counter, setCounter] = useState(1);

  const reTurnItem = (item) => {
    setItem(item)
  };

  const returnBasketListItems = (item, counter = 0) => {
    let tempArr = [];

    do {
      tempArr.push(item)
      counter--;
    } while (counter > 0)

    setBasketItems([...basketListItems, ...tempArr])
  }

  const increaseCounter = () => {
    setCounter((counter) => {
      return counter + 1
    })
  }

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((counter) => {
        return counter - 1
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12').then(res => res.json());

      setListItem(result)
    };

    fetchData();
  }, [])

  return (
    <MainWindow listItem={listItem}
      reTurnItem={reTurnItem}
      currentItem={item}
      returnBasketListItems={returnBasketListItems}
      currentBasketListItems={basketListItems}
      increaseCounter={increaseCounter}
      decreaseCounter={decreaseCounter}
      counter={counter}
    />
  );
}
