import Link from "next/link";


const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/posts", { next: { revalidate: 30 } })
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
  }

const Blog = async () => {

    const posts = await getData();

    return ( 
      <>
        <div className="w-[100%] bg-slate-900 h-[10rem]"></div>
        <section className="grid grid-cols-3 place-content-center p-20">

            {posts.map(post => (
                <article>
                    <Link href={`/blog/${post.id}`}>
                    <div className="w-[25rem] h-[22rem] bg-slate-400 mt-10"></div>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Link>
                </article>
            ))}
        </section>
        </>
     );
}
export default Blog;