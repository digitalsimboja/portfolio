import { CodeIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import { projects } from "../data";

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              My works
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are the amazing projects I have built.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project, i) => (
              <div
                
                key={i}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative h-96 ">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
                <div>
                  <span>
                    <a href={project.code}><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Source code</button></a>
                  </span>
                  &nbsp;
                  <span>
                    <a href={project.link}><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Deployed website</button></a>
                  </span>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
