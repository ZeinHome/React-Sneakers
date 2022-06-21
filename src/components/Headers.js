import {Link} from 'react-router-dom'

function Headers({onOpenCartClick}) {
    return (
        <header className="header">

        <div className="header-container">
       <Link to="/" className='link-logo'>
       <div className="logo">
           <img src="./img/logo.svg" alt="logo"></img>
             <div className="header__title">
               <h1 className="project__title">REACT SNEAKERS</h1>
                 <p className="header__text">
                   Магазин лучших кроссовок
                 </p>
             </div>
         </div>
       </Link>
   
           <ul className="users">
             <li onClick={onOpenCartClick}  className="users__item">
                <div className="basket">
                  <img width={18} height={18} src="img/basket.svg" alt="basket" />
                  <p className="basket__text"> 1205 грн.</p>
           </div>
             </li>

             <li className="users__item">
              <Link to="/favorite">
                <img width={20} height={20} src="img/heart.svg"  alt="heart" />
              </Link>
             </li>
         
             <li className="users__item">
             <img width={20} height={20} src="img/user.svg"  alt="user" />
             </li>
           </ul>
        </div>
        </header>     
    );
}

export default Headers;