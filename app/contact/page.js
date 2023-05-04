"use client";


const getData = async () => {
  const result = await fetch("https://swanky-api.onrender.com/")
  if( !result.ok ) { throw new Error("Failed to fetch data");}
  return result.json()
}

const Contact = () => {
    return ( 
        <>
        <main className="">
          <div className="w-[100%] bg-slate-500 h-[10rem] text-center pt-10">
            <p className="text-[3rem] text-white">Contact</p>
          </div>

          <section className="flex justify-center gap-10 py-[10rem]">
            <article>
              <h1>contact info</h1>
              <p className="w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus quis animi modi culpa fugiat quaerat itaque provident odit eaque!</p>
              <div>
                <h2>Office</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              <div>
                <h2>Management</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
            </article>
            <article className="flex flex-col">
              <h1>Any Questions?</h1>
              <p>Use the form below to get in touch with us.</p>
              <div className="flex">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="White Your Email Here *"/>
              </div>
              <input type="text" placeholder="Phone Number"/>
              <input type="text" placeholder="Write Your Subject Here"/>
              <input type="text" placeholder="Write Your Message Here *"/>
              <button type="submit">Submit</button>
            </article>
          </section>
    
          <section className="flex justify-center gap-10 pb-[10rem]">
            <div className="w-[20rem] h-[20rem] bg-slate-400"></div>
            <article>
              <h1>Our Stores</h1>
              <p>You an also directly buy products from our stores.</p>
              <div>
                <h2>USA</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              <div>
                <h2>France</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
            </article>
          </section>
    
    
    
        </main>
        </>
     );
}
 
export default Contact;