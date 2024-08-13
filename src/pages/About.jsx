import React from "react";
import NewNavbar from "../components/NewNavbar";

function About() {
  return (
    <>
      <NewNavbar />
      <section className="bg-white py-20">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
              <img
                src="your-image.jpg"
                alt="Your Image"
                className="rounded-lg shadow-lg w-full h-64 object-cover object-center mb-4"
              />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
              <ul className="flex flex-wrap mb-4">
                <li className="w-1/2 xl:w-1/3 p-2">
                  <span className="bg-orange-100 text-orange-800 py-1 px-2 rounded-full text-sm">
                    HTML/CSS
                  </span>
                </li>
                <li className="w-1/2 xl:w-1/3 p-2">
                  <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-sm">
                    JavaScript
                  </span>
                </li>
                <li className="w-1/2 xl:w-1/3 p-2">
                  <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-sm">
                    React
                  </span>
                </li>
                <li className="w-1/2 xl:w-1/3 p-2">
                  <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full text-sm">
                    Node.js
                  </span>
                </li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
