import Image from "next/image";
import { metadata } from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 sm: p-10">
      <h2 className="lg:text-4xl sm: text-3xl font-bold text-primary-300 mb-20">
        Next JS Test
      </h2>
      <p lang="en" className="w-3/4 text-center text-xl sm: w-full mb-20 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        libero ea saepe veritatis ratione, nulla dolore omnis laudantium impedit
        hic deserunt minima delectus, neque aspernatur ipsam soluta veniam quod
        sunt.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-screen "
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f0f0f0"
          fill-opacity="1"
          d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,80C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <section className="bg-greydark-50 w-screen relative bottom-32">
        <div className="flex-column flex-wrap justify-center text-center items-center px-40 relative top-20 sm: px-10">
          <h2 className="lg:text-4xl sm: text-3xl font-bold text-primary-300">
            Title Goes Here
          </h2>
          <p lang="en" className="text-center text-xl mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            libero ea saepe veritatis ratione, nulla dolore omnis laudantium
            impedit hic deserunt minima delectus, neque aspernatur ipsam soluta
            veniam quod sunt.
          </p>

          <div className="flex flex-wrap justify-center mt-20">
            <div className="w-full sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-1 py-1 bg-white mx-4 text-center relative	 mt-10  hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#bc8a8d"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
            <div className="w-full sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-1 py-1 bg-white mx-4 text-center relative	sm: w-full mt-10 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#bc8a8d"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
            <div className="w-full sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-1 py-1 bg-white mx-4 text-center relative	sm: w-full mt-10 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#bc8a8d"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
            <div className="w-full sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-1 py-1 bg-white mx-4 text-center relative	sm: w-full mt-10 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#bc8a8d"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-greydark-50 w-screen mt-20">
        <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col w-full lg:px-20 pb-24">
          <div className="lg:row-span-3 flex-col justify-center items-center lg:p-20 sm:p-2">
            <h1 className="lg:text-4xl text-3xl font-bold lg:w-96 sm:w-full text-center mt-10">
              Title Goes Here
            </h1>
            <p className="text-gray-700  text-xl pt-4 lg:w-96 h-fit sm:w-full text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              minima maxime aspernatur nesciunt, quae labore non atque, optio
              error temporibus exercitationem incidunt architecto placeat,
              voluptatem aliquid autem praesentium nisi ratione?
            </p>
          </div>
          <div className="lg:col-span-2 lg:row-span-1 lg:relative lg:top-16 ">
            <div className=" sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-2 py-1 bg-white mx-4 text-center relative	sm:w-full mt-10 ">
              <p className="w-6 h-6 absolute right-2  text-5xl text-greydark-50 font-black">
                1
              </p>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-2 lg:relative lg:top-16">
            <div className=" sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-2 py-1 bg-white mx-4 text-center relative	sm:w-full mt-10 ">
              <p className="w-6 h-6 absolute right-2  text-5xl text-greydark-50 font-black">
                2
              </p>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
          </div>
          <div className="row-span-1 col-span-3 ">
            <div className=" sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-2 py-1 bg-white mx-4 text-center relative	sm:w-full mt-10 ">
              <p className="w-6 h-6 absolute right-2  text-5xl text-greydark-50 font-black">
                3
              </p>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
          </div>
          <div className="row-span-2 col-span-3 ">
            <div className=" sm:w-52 h-48 shadow-2xl border-solid border-2 border-primary-50	px-2 py-1 bg-white mx-4 text-center relative	sm:w-full mt-10 ">
              <p className="w-6 h-6 absolute right-2  text-5xl text-greydark-50 font-black">
                4
              </p>
              <p className="mx-4 my-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quam necessitatibus
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
