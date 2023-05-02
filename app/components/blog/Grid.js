// import Link from "next/link";

// const getData = async () => {
//     const result = await fetch("https://swanky-api.onrender.com/posts")
//     if( !result.ok ) { throw new Error("Failed to fetch data");}
//     return result.json()
//   }

// const Grid = async () => {

//     const posts = await getData();

//     return ( 
//         <section className="grid grid-cols-3 place-content-center p-20">
//             {posts.map(post => (
//                 <article>
//                     <Link href={`/blog/${blog.id}`}>
//                     <div className="w-[25rem] h-[22rem] bg-slate-400 mt-10"></div>
//                     <h2 className="text-xl font-bold">{post.title}</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//                     </Link>
//                 </article>
//             ))}
//         </section>
//      );
// }
// export default Grid;