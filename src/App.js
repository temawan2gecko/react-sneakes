import React from "react";
import { Drawer } from "./components/Drawer";
import axios from "axios";
import { Header } from "./components/Header";
import { Card } from "./components/Card";



function App() {
  const [items,setItems] = React.useState([])
  const [cardOpened,setCardOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue,setSearchValue] = React.useState('')
  const [favourites, setFavourites] = React.useState([])
  let price = 0
  React.useEffect(( ) => {
  //   fetch('https://65de2ac6dccfcd562f566f0b.mockapi.io/items').then(res => {
  //   return res.json()
  // }).then(json => {
  //   setItems(json)
  // })
  axios.get('https://65de2ac6dccfcd562f566f0b.mockapi.io/items').then(res => {
    setItems(res.data)
  axios.get('https://65de2ac6dccfcd562f566f0b.mockapi.io/cart').then(res => {
    setCartItems(res.data)
  })
  })
  }, [])
  
  const onAddToCart = (obj) => {
    axios.post('https://65de2ac6dccfcd562f566f0b.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://65de2ac6dccfcd562f566f0b.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  return (
    <div className="wrapper">
      {cardOpened && <Drawer onClose = {() => setCardOpened(false)} items={cartItems} onRemove={onRemoveItem}/>}
      <Header onClickCard = {() => setCardOpened(true)} price={price}/>
      <div className="content">
        <div className="content__action">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search">
            <button><img src='./image/search.svg'></img></button>
            <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue}/>
          </div>
        </div>

        <div className="content__inner">
          {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((el, index)=>{
            return <Card key={index} sneakers={el.img} name={el.name} price={el.price} onClickPlus={(obj) => onAddToCart(obj)} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
