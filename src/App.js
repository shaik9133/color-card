import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="flex justify-center max-w-4xl shadow-2xl">
        <div className="flex-1 bg-violet-500 border-4 border-violet-500 border-solid rounded-l-lg w-72">
          <div class="bg-clip-content px-8 py-12 text-white">
            <section className="h-44">
              <article className="text-slate-300">featured</article>
              <h1 className="text-xl font-bold pb-4"> Challenge </h1>
              <p className="text-base pb-8">Design an icon set with your favorite hobbies</p>  
            </section>

            <section className="flex justify-start items-center">
            <a className="text-sm font-mono">
                View Details{' > '}
              </a>
              </section>   
                </div>
              </div>


              <div className="flex-1 bg-purple-500 border-4 border-purple-500 border-solid  w-72 ">
          <div class="bg-clip-content px-8 py-12 text-white">
            <section className="h-44">
              <article className="text-slate-300">Blog</article>
              <h3 className="text-xl font-bold pb-4">Interview</h3>
              <p className=" text-base pb-8">
                8 example of interviews with people who traveled trough Europe.
              </p>
            </section>
            <section className="flex justify-start items-center">
              <a className="text-sm font-mono" href="">
                Read Post{' > '}
              </a>
            </section>
          </div>
        </div>
        <div className="flex-1 bg-fuchsia-400 border-4 border-fuchsia-400 border-solid rounded-r-lg w-72 ">
          <div class="bg-clip-content px-8 py-12 text-white">
            <section className="h-44">
              <article className="text-slate-300">Daily</article>
              <h3 className="text-xl font-bold pb-4">Practice</h3>
              <p className=" text-base pb-8">
                Generate daily exercices to improve your skills.
              </p>
            </section>
            <section className="flex justify-start items-center">
              <a className="text-sm font-mono" href="">
                Generate exercise{' > '}
              </a>
            </section>
          </div>
        </div>
          </div>
        </div>
); 
}

