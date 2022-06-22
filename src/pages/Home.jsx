import Card from "../components/Card";

function Home({searchInput, item, onAddCart ,onChangeSearchInput, onAddToFavorite, setSearchInput}) {
    return(
        <section>
        <div className="nav">
        <h2 className="section-title">{searchInput ? `Поиск по запросу: ${(searchInput)}` : 'Все кроссовки'}</h2>
  
        <div className="search-block">
          <img src="/img/search.svg"alt="search" />
        {searchInput && <img onClick={() => setSearchInput('')} className="search__img--remove"  src="/img/btn-remove.svg" alt="remove"/>}
          <input onInput={onChangeSearchInput} value={searchInput} placeholder="Поиск..." className="search" />
        </div>
        </div> 

       <ul className="gallery">
       {item.filter((item) => {
        return item.title.toUpperCase().includes(searchInput.toUpperCase())
       }
       ).map(({title, price, imageUrl}, index) => {
       return <Card
       key={index}
       title = {title}
       price = {price}
       imageUrl = {imageUrl}
       onAdd = {(obj) => onAddCart(obj)}
       onFavorite =  {(obj) => onAddToFavorite(obj)}
       />
       })}
   
       </ul>

   </section>
    );
}

export default Home;