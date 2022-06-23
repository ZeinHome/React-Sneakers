import { Link } from "react-router-dom";
import Card from "../components/Card";
function Favorites({item, onAddToFavorite}) {
    return(
        <section>
         <div className="nav">
        <h2 className="section-title favorites__title"> <Link to="/"><img className="favorites__back" src="img/back.svg" alt="back"/></Link> Мои закладки</h2>
        </div> 

        <ul className="gallery">
       {item.map((items, index) => {
       return <Card
       key={index}
       favoried = {true}
       onFavorite = {onAddToFavorite}
       {...items}
       />
       })}
   
       </ul>

   </section>
    );
}

export default Favorites;