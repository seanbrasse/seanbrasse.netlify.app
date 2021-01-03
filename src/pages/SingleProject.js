import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams, NavLink } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../images/nyc1.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleProject() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title, 
            _id,
            slug, 
            mainImage{
                asset->{
                    _id, 
                    url
                }
            },
            body,
            date,
            link, 
            tags,
            projectType, 
            "name": author->name,
            "authorImage":author->image,
            place,
        }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject)
    return (
      <div className="text-7xl font-bold cursive flex py-96 text-blue-500 justify-center">
        Loading Project Details...
      </div>
    );

  return (
    <main className="bg-gray-200 min-h-screen">
      {/* <img src={image} alt={"nyc photo"} className="absolute w-full opacity-60 bg-scroll"/> */}
      <div
        className="absolute min-w-full min-h-full bg-top
        bg-cover bg-local opacity-75"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <section className="p-12">
        <article className="relative containter shadow-lg mx-auto bg-gray-100 rounded-lg">
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              <div className="bg-white bg-opacity-75 rounded-lg border-2 border-gray-600 p-12">
                <h1 className="cursive font-bold text-5xl lf:text-8xl mb-4">
                  {singleProject.title}
                </h1>
                <NavLink to="/about">
                  <div className="flex justify-center text-gray-800">
                    <img
                      src={urlFor(singleProject.authorImage).url()}
                      alt={singleProject.name}
                      className="w-40 h-40 border-2 border-gray-600 rounded-full flex justify-center"
                    />
                  </div>
                  <p className="cursive flex justify-center pl-2 text-4xl">
                    {singleProject.name}
                  </p>
                </NavLink>
              </div>
            </div>
            <img
              src={singleProject.mainImage.asset.url}
              alt={singleProject.title}
              className="w-full object-cover rounded-t"
              style={{ height: "400px" }}
            />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full p-20">
            <h3 className="text-1xl">Project Description: </h3>
            <BlockContent
              blocks={singleProject.body}
              projectId="s0jrn46i"
              dataset="production"
            />
            <div className="flex justify-center">
              <span className="p-10 text-left">
                <strong className="font-bold">Finished On</strong>:{" "}
                {new Date(singleProject.date).toLocaleDateString()}
              </span>
              <span className="p-10 text-center">
                <strong className="font-bold">Project Type</strong>:{" "}
                {singleProject.projectType}
              </span>
              <a
                href={singleProject.link}
                rel="noopener norefferer"
                target="_blank"
                className="p-10 text-right text-gray-800 font-bold hover:underline hover:text-blue-400"
              >
                View the Project{" "}
                <span role="img" aria-label="right pointer">
                  👉
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
