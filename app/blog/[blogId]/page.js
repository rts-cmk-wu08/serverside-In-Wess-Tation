
const getData = async (blogId) => {
    const result = await fetch(`https://swanky-api.onrender.com/posts/${blogId}`)
    if(!result.ok) { throw new Error("Failed to fetch album")}
    return result.json()
}

const BlogDetail = async ({params: { blogId }}) => {

    const blog = await getData(blogId)


    return ( 
        <main>
            <h1>Here is Detailed page for blog</h1>

        </main>
     );
}
 
export default BlogDetail;