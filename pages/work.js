import Head from "next/head";
import { useRef } from "react";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";

const Work = () => {
  const text = useRef();

  return (
    <>
      <Cursor />
      <Head>
        <title>Work</title>
      </Head>
      <div className="container mx-auto mb-10">
        <Header isBlog={true}></Header>
        <div className="mt-10">
          <h1
            ref={text}
            className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
          >
            Work.
          </h1>
          <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
            {data.projects.map((project) => (
              <div
                className="cursor-pointer relative"
                key={project.id}
                // onClick={() => Router.push(`/blog/${project.slug}`)}
              >
                <img
                  className="w-full h-60 rounded-lg shadow-lg object-cover"
                  src={project.imageSrc}
                  alt={project.description}
                ></img>
                <h2 className="mt-5 text-4xl">{project.title}</h2>
                <p className="mt-2 opacity-50 text-lg">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
