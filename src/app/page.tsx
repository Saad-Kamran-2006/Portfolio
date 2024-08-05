import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300vh] mt-20">
      <section className="flex items-center justify-center bg-gray-text h-[100vh] text-center self-center font-bold text-2xl">
        Home page
      </section>
      <section
        id="expertise"
        className="flex items-center justify-center h-[100vh] text-center self-center font-bold text-2xl"
      >
        expertise
      </section>
      <section
        id="projects"
        className="flex items-center justify-center h-[100vh] bg-gray-text text-center self-center font-bold text-2xl"
      >
        projects
      </section>
      <section
        id="testimonials"
        className="flex items-center justify-center h-[100vh] text-center self-center font-bold text-2xl"
      >
        testimonials
      </section>
    </div>
  );
}

export default Home
