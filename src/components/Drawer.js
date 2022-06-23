import HoleBasket from "./HoleBasket";

function Draver({onClose, onRemove,  item = []}) {
    return (
        <div className="overlay"> 
  <div className="drawer"> 
  
   <h2 className="drawer-title">Корзина <img onClick={onClose}  src="/img/btn-remove.svg" alt="close"/> </h2>
{item.length > 0
 ? 
 <div className="box">
<ul className="cart">

{item.map(({title, price, imageUrl, id}) => {
 return(
  <li className="cart__item">
  <img width={70} height={70} src={imageUrl}  alt={title} />
      <div className="cart__price">
          <p className="cart__title">{title}</p>
          <b className="cart__total">{price} грн.</b>
      </div>
              <img onClick={() => onRemove(id)} src="/img/btn-remove.svg" alt="remove" />
</li>
 )
})}

</ul>

<div className="box-order">
<ul className="order"> 
    <li className="order__item"><p className="order__title">Итого:</p>  <span>21 498 грн. </span></li>
    <li className="order__item"><p className="order__title">Налог 5%:</p>  <span>1074 грн.</span></li>
  </ul>

<button button type="submit" className="btn-order">
   <p> Оформить заказ</p>
   <img src="/img/arrow-order.svg"  alt="Arrow" />
</button>
  </div>
  

</div> 
: 
<HoleBasket
onClose = {onClose}
/>
}


  </div>
</div>
    );
}

export default Draver;