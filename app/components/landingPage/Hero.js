

const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/offers")
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
  }
  

const Hero = async () => {

    const heros = await getData();

    return ( 
        <section className="w-[100%] h-96 bg-slate-400 pl-[20rem] flex flex-col justify-center content-center">
                {heros.map((hero, index ) => (
                    index < 1 ?
                    <div className="w-[40rem] pr-5">
                        <h1 className="text-[5rem]">{hero.headline}</h1>
                        <p>{hero.text}</p>
                    </div>
                    : null
                ))}
                <button className="uppercase text-sm flex justify-start pl-2 pr-2 bg-black text-white mr-[65rem]"
                >Shop Now</button>
        </section>
     );
}
 
export default Hero;