import React from "react";

export default function About() {
  return (

    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1 /2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {/* About Title */}
            <span className="hidden lg:inline-block">Hi, I'm Bryan A Quero </span>
          </h1>
            <p class="mb-8 leading-relaxed">
              I love working with technology, create new innovate tools and applications, and
              learn more every day as can be found a oportunity to improve my skills.
            </p>

          
          <p className="mb-8 leading-relaxed">
            {/* This about description about me */}
            A highly skilled and experienced professional who has spent more than 30 years in the construction industry, with over 20 years as a technical artist and 7 years in XR and MERN development. With a diverse background spanning several industries, Bryan has developed a unique set of skills that make him a valuable asset in any project.

            Bryan's construction experience has given him a deep understanding of the building process and the technical skills needed to bring projects to life. He has worked on a wide variety of construction projects, from large-scale commercial developments to small residential renovations, and has honed his skills in project management, site coordination, and technical drafting.

            As a technical artist, Bryan has applied his expertise to the field of computer graphics and animation. He has worked on a range of projects, including video games, animated films, and architectural visualizations. His attention to detail and understanding of complex software make him a highly sought-after technical artist, and he has received numerous accolades for his work in this field.

            Bryan's experience in XR and MERN development has allowed him to bring his technical skills to the forefront of cutting-edge technologies. XR, or extended reality, encompasses virtual reality, augmented reality, and mixed reality, and used my expertise to develop immersive experiences for a range of applications. MERN is a technology stack consisting of MongoDB, Express, React, and Node.js, and is used to build dynamic web applications. I has been involved in developing a wide variety of projects using these technologies, including games, e-commerce platforms, and enterprise software.

            Overall, I'm a highly skilled and experienced professional who has honed his technical skills over more than three decades of work in the construction, technical art, and XR/MERN development fields. I have a unique background and diverse skill set make me a valuable asset to any team or project, and I'm continues to innovate and push the boundaries of what is possible in my work.
          </p>
        </div>
      </div>

    </section>

  );
 }
