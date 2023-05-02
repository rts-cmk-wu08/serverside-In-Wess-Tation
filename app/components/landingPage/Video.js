
const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/started")
    if( !result.ok ) { throw new Error("Failed to fetch data");}
    return result.json()
  }

const Video =  async () => {

    const videos = await getData();

    return ( 
        <section>
            <div className="flex justify-center gap-10 pt-[15rem] pb-[10rem]">
                <div className="bg-slate-500 w-[30rem] h-[30rem]"></div>
                <div className="w-[30rem]">
                   <h1 className="font-bold text-[2rem]">{videos.headline}</h1>
                    <p className="text-slate-600 text-sm pb-[5rem]">{videos.text}</p>
                    {videos.bullets.map(video => (
                         <div>
                            <h3 className="font-bold text-xl">{video.name}</h3>
                            <p>{video.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        
           
       
        </section>
     );
}
 
export default Video;