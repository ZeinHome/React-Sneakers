import Headers from "./components/Headers";
import Draver from "./components/Drawer";
import Home from "./pages/Home";
// import Favorites from "./pages/Favorites";
import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

const [item, setItem] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [cartItem, setCartItem] = useState([]);
const [searchInput, setSearchInput]  = useState('')
const [favorites, setFavorites] = useState([])

const onChangeSearchInput = (e) =>{
  setSearchInput(e.target.value)
}

 React.useEffect(() =>{
  axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/item').then((res) => {
    setItem(res.data)
  });

  axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart').then((res) => {
    setCartItem (res.data)
  });
  axios.get('https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite').then((res) => {
    setFavorites (res.data)
  });
 }, [])



const onAddCart = (obj)  => {
  axios.post('https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart', obj)
  setCartItem((prev) => [...prev, obj])
}
const onRemoveCart = (id)  => {
  axios.delete(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/${id}`)
  setCartItem((prev) => prev.filter((item) => item.id !== id))
} 
const onAddToFavorite = async (obj)  => {
 try {
  if (favorites.find(item => obj.id === item.id)) {
    axios.delete(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite/${obj.id}`)
  }else{
    const {data} = await axios.post(`https://62b034b1b0a980a2ef4d39ed.mockapi.io/favorite`, obj)
    setFavorites((prev) => [...prev, data]) 
  }
 } catch (error) {
  alert("Не удалось добавить фавориты")
 }
  
} 
  return (
    <div className="wrapper">

    {cartOpen && <Draver  
    onClose={()=> setCartOpen(false)}
    item = {cartItem}
    onRemove = {onRemoveCart}
    />}

    <Headers
     onOpenCartClick={()=> setCartOpen(true)}
      />

    <main className="main">

     {/* <Route element={}> */}
     <Home
     searchInput = {searchInput}
     item = {item}
     onAddCart = {onAddCart}
     onChangeSearchInput = {onChangeSearchInput}
     onAddToFavorite = {onAddToFavorite}
     setSearchInput = {setSearchInput}
      />
     {/* </Route> */}

     {/* <Route path="/favorite">
  <Favorites
  item = {favorites}
  onAddToFavorite = {onAddToFavorite}

  />
     </Route> */}

    </main>


    </div>
  );
}

export default App;
