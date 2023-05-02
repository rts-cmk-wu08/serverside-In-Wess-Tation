import Cards from "./components/landingPage/Cards";
import Hero from "./components/landingPage/Hero";
import Video from "./components/landingPage/Video";


const getData = async () => {
  const result = await fetch("https://swanky-api.onrender.com/offers")
  if( !result.ok ) { throw new Error("Failed to fetch data");}
  return result.json()
}

const Home = async () => {

  const data = await getData();

  return (
    <main>
      <Hero/>

      <section>
        <article className="text-center pt-[10rem]">
          <h1 className="text-2xl">Our Products </h1>
          <div className="flex justify-center gap-5">
            <p>Trending Now</p>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
          </div>
        </article>

        <Cards />

      </section>

        <Video />

    </main>
  )
}

export default Home;
