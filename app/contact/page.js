"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";


const Contact = () => {

  const validate = (values) => {
    const errors = {} 

    if (!values.name) {
        errors.name = "Required!"
    }else if (values.name.length > 15) {
        errors.name = "Name is too long!"
    }

    if (!values.email) {
        errors.email = "Reduired!"
    }

    return errors;
}

    return ( 
        <>
        <main>
          <div className="w-[100%] bg-slate-500 h-[10rem] text-center pt-10">
            <p className="text-[3rem] text-white">Contact</p>
          </div>

        <section className="w-screen px-[6rem]">
          <section className="flex justify-center gap-10 py-[10rem]">
            <article>
              <h1 className="font-bold text-4xl">contact info</h1>
              <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <article className="flex gap-5 text-slate-400 leading-7">
                 <div>
                <h2 className="text-black font-bold text-xl">Office</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              <div>
                <h2 className="text-black font-bold text-xl">Management</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              </article>
            </article>
            <Formik 
            initialValues={{
              name: "",
              email: "",
          }}
          validate={validate}
          onSubmit={(values, {resetForm}) => {
              //your axios post could be here... 
              console.log(values)
              resetForm();
          }}
            >
            <Form className="flex flex-col leading-10">
              <h1 className="font-bold text-4xl">Any Questions?</h1>
              <p className="pb-5 pt-2">Use the form below to get in touch with us.</p>
              <article className="flex gap-5">
                <div>
                    <Field className="border-b-2 border-black" type="text" name="name" id="name" placeholder="Name"/>
                    <ErrorMessage name="name" />
                </div>
                <div>
                    <Field className="border-b-2 border-black" type="email" name="email" id="email" placeholder="Write Your Email Here *"/>
                    <ErrorMessage name="email" />
                </div>
              </article>
              <div>
                        <Field className="border-b-2 border-black w-[29rem]" type="text" name="number" id="number" placeholder="Phone Number"/>
                        <ErrorMessage name="number" />
                    </div>
                    <div>
                        <Field className="border-b-2 border-black w-[29rem]" type="text" name="subject" id="subject" placeholder="Write Your Subject Here"/>
                        <ErrorMessage name="subject" />
                    </div>
                    <div>
                        <Field className="border-b-2 border-black w-[29rem]" type="text" name="message" id="message" placeholder="Write Your Message Here *"/>
                        <ErrorMessage name="message" />
                    </div>

              <button className="bg-black text-white w-[7rem] mt-5 text-sm py-1" type="submit">Submit</button>
            </Form>
            </Formik>
          </section>
    
          <section className="flex justify-center gap-10 pb-[10rem] leading-7">
            <div className="w-[35rem] h-[30rem] bg-slate-400"></div>
            <article className="flex flex-col justify-center">
              <h1 className="font-bold text-4xl">Our Stores</h1>
              <p className="text-slate-400 py-3">You an also directly buy products from our stores.</p>
              <article className="flex gap-5 pt-5">
                <div className="text-slate-400">
                <h2 className="underline font-bold text-xl text-black">USA</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              <div className="text-slate-400">
                <h2 className="underline font-bold text-xl text-black">France</h2>
                <p>730 Glenstone Ave 65802, Springfireld, US</p>
                <p>+123 222 333 44</p>
                <p>+123 666 777 88</p>
                <p>Swanky@yourinfo.com</p>
              </div>
              </article>
              
            </article>
          </section>
    
          </section>
    
        </main>
        </>
     );
}
 
export default Contact;