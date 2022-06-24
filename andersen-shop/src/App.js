import './App.css';
import { useState, useEffect } from 'react'
import { MainWindow } from './components/MaineWindow/MainWindow';


export function App() {
  const [listItem, setListItem] = useState([]);
  const [item, setItem] = useState({});
  const reTurnItem = (item) => {
    setItem(item)
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12').then(res => res.json());

      setListItem(result)
    };

    fetchData();
  }, [])

  return (
    <MainWindow listItem={listItem} reTurnItem={reTurnItem} currentItem={item} />
  );
}
