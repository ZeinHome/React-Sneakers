function HoleBasket({onClose}) {
    return(
        <div className="hole-basket">

<img src="/img/hole-basket.png" alt="box" />
<h3 className="hole-b__title">Корзина пустая</h3>
<p className="hole-b__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
<button className="hole-b__btn" onClick={onClose}> <img className="hole-b__img" src="/img/arrow-order.svg" alt="arrow" />  Вернуться назад</button>

        </div>
    );
}

export default HoleBasket;