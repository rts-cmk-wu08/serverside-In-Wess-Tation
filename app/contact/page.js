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
            <Form className="flex flex-col">
              <h1>Any Questions?</h1>
              <p>Use the form below to get in touch with us.</p>
              <article className="flex">
                <div className="formgroup">
                    <Field className="border-b-2" type="text" name="name" id="name" placeholder="Name"/>
                    <ErrorMessage name="name" />
                </div>
                <div className="formgroupe">
                    <Field className="border-b-2" type="email" name="email" id="email" placeholder="Write Your Email Here *"/>
                    <ErrorMessage name="email" />
                </div>
              </article>
              <div className="formgroup">
                        <Field className="border-b-2" type="text" name="number" id="number" placeholder="Phone Number"/>
                        <ErrorMessage name="number" />
                    </div>
                    <div className="formgroupe">
                        <Field className="border-b-2" type="text" name="subject" id="subject" placeholder="Write Your Subject Here"/>
                        <ErrorMessage name="subject" />
                    </div>
                    <div className="formgroupe">
                        <Field className="border-b-2" type="text" name="message" id="message" placeholder="Write Your Message Here *"/>
                        <ErrorMessage name="message" />
                    </div>

              <button type="submit">Submit</button>
            </Form>
            </Formik>
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