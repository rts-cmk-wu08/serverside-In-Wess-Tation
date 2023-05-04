
const getData = async (blogId) => {
    const result = await fetch(`https://swanky-api.onrender.com/posts/${blogId}`, {next: { revalidate: 0 }})
    if(!result.ok) { throw new Error("Failed to fetch album")}
    return result.json()
}

const BlogDetail = async ({params: { blogId }}) => {

    const blog = await getData(blogId)


    return ( 
        <main>
            <div className="w-[100%] bg-slate-200 h-[10rem] text-center pt-10">
                <p className="text-[3rem]">Blog Detail</p>
            </div>
            <section className="max-w-[60rem] mx-auto py-[5rem]">
                <h1 className="text-[2rem] p-2 font-bold">{blog.title}</h1>
                <div className="h-[30rem] w-[100%] bg-slate-600 "></div>
                <h2 className="font-bold py-5">{blog.subtitle}</h2>
                <p className="">{blog.text}</p>
            </section>
        </main>
     );
}
 
export default BlogDetail;