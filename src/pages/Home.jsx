import React from "react";
import NewNavbar from "../components/NewNavbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NewNavbar />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              GrowHabit
              <br className="hidden lg:inline-block" />
              Never Give Up
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Never give up on the person you are becoming{" "}
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enroll
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Services
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            {/* <img className="object-cover object-center rounded" alt="hero" src=""/> */}
            <h1 className="text-7xl"> Better Mental Health For More People </h1>
          </div>
        </div>
      </section>
      <section >
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
          
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
              How it Works
            </h2>
            <ul className="flex flex-wrap mb-4">
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold leading-tight text-gray-900 mb-2">
                    Set Your Goals
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Define what you want to achieve and set specific, measurable
                    goals.
                  </p>
                </div>
              </li>
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold leading-tight text-gray-900 mb-2">
                    Track Your Progress
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Log your daily progress and track your habits over time.
                  </p>
                </div>
              </li>
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-bold leading-tight text-gray-900 mb-2">
                    Stay Motivated
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get reminders, insights, and motivation to help you stay on
                    track.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
              Success Stories
            </h2>
            <ul className="flex flex-wrap mb-4">
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <p className="text-gray-600 mb-4">
                    "I was able to quit smoking after 10 years of trying. This
                    platform helped me stay on track and motivated."
                  </p>
                  <p className="text-gray-600 mb-4">— John D.</p>
                </div>
              </li>
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <p className="text-gray-600 mb-4">
                    "I started exercising regularly and lost 20 pounds in 3
                    months. This platform helped me create a habit of regular
                    exercise."
                  </p>
                  <p className="text-gray-600 mb-4">— Emily W.</p>
                </div>
              </li>
              <li className="w-1/2 xl:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <p className="text-gray-600 mb-4">
                    "I was able to start a meditation habit and reduced my
                    stress levels significantly. This platform helped me stay
                    consistent."
                  </p>
                  <p className="text-gray-600 mb-4">— David K.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
