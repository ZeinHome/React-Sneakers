

function Headers({onOpenCartClick}) {
    return (
        <header className="header">

        <div className="header-container">
     
       <div className="logo">
           <img src="" alt="logo" />
             <div className="header__title">
               <h1 className="project__title">REACT SNEAKERS</h1>
                 <p className="header__text">
                   Магазин лучших кроссовок
                 </p>
             </div>
         </div>
  
   
           <ul className="users">
             <li onClick={onOpenCartClick}  className="users__item">
                <div className="basket">
                  <img width={18} height={18} src="img/basket.svg" alt="basket" />
                  <p className="basket__text"> 1205 грн.</p>
           </div>
             </li>

             <li className="users__item">
       
                <img width={20} height={20} src=""  alt="heart" />
           
             </li>
         
             <li className="users__item">
             <img width={20} height={20} src=""  alt="user" />
             </li>
           </ul>
        </div>
        </header>     
    );
}

export default Headers;