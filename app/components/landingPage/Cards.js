


const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/products")
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
  }


const Cards = async () => {

    const cards = await getData();

    return ( 
        <section className="flex justify-center gap-5">
            {cards.map(card => (
                <article className="text-center">
                    <div className="w-[15rem] h-[20rem] bg-slate-200"></div>
                    <h3>{card.name}</h3>
                    <p className="text-orange-600">${card.price}.00</p>
                </article>
            ))}
        </section>
     );
}
 
export default Cards;