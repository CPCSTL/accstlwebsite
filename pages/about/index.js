import Base from '@layouts/Baseof'
import { Box } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Base>
    <div className="flex-col my-10 w-full justify-center  text-center lg:px-10  ">
   <section className=" py-10 rounded body-font w-full md:px-10 ">
   <h3 className="text-3xl font-bold  text-center">About Us</h3>
   <p className="text-center text-lg font-bold font-sans  text-stone-960 md:text-start pt-2"> Arab Cultural Center Mission</p>
   <p className="font-sans px-4 lg:px-20 text-stone-960 pt-1 text-left" >
At Arab Cultural Center, we are dedicated to fostering a vibrant and inclusive community that celebrates diversity, creativity, and intellectual curiosity. Our mission is to serve as a dynamic hub for Arab cultural exchange, artistic expression, and lifelong learning for our communities. Through engaging programs, exhibitions, and events, we aim to inspire and connect individuals from all levels of society, fostering a deeper understanding and appreciation for the rich tapestry of human expression. At the heart of our mission is the belief that Arab culture is a powerful force for positive change, capable of transcending boundaries and building bridges between people. By providing a welcoming space for exploration, dialogue, and collaboration, Arab Cultural centers strive to be a catalyst for Arab personal growth, social harmony among our communities, and the advancement of a more enlightened and interconnected society.
   
   </p>
   </section>
   <section className=" py-10 bg-green-100 rounded body-font w-full md:px-10 ">
    <h3 className="text-xl font-bold   text-center lg:text-3xl mb-10">Our Vision</h3>
    <p className="font-sans px-4 lg:px-20 text-stone-960 pt-3 text-left" > 
    for an Arab cultural center is to promote and preserve Arab culture, history, and heritage.

This may involve providing a space for community members to come together and engage in cultural events and activities, such as music and dance performances, art exhibits, film screenings, and language classes. It may also involve offering resources and support to members of the Arab community, such as assistance with navigating social services, job training, or legal services.

Ultimately, the vision for an Arab cultural center is to create a welcoming and inclusive environment where members of the Arab community can connect with one another, share their cultural traditions, and celebrate their heritage.


    </p>
 

   </section>
   </div>
   </Base>
  )
}

export default index