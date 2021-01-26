import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../images/nyc1.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name, 
            bio,
            'authorImage': image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="text-7xl font-bold cursive flex py-96 text-blue-500 justify-center">
        Loading Me...
      </div>
    );

  return (
    <main className="relative">
      {/* <img src={image} alt={"nyc photo"} className="absolute w-full"/> */}
      <div
        className="absolute bg-cover w-full bg-center bg-local"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="p-10 lg-pt-48 container mx-auto relative">
          <section className="flex-shrink bg-gray-600 bg-opacity-90 rounded-lg shadow-2xl lg:flex p-20">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded w-64 h-full mr-8"
              alt={author.name}
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-7xl text-gray-200 mb-4">
                Sean Brasse
              </h1>
              <div className="prose lg:prose-xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="s0jrn46i"
                  dataset="production"
                />
              </div>
              <div className="grid justify-items-auto p1">
                <h1 className="text-4xl text-center mt-12 font-bold cursive">
                  {" "}
                  Scroll for more about me!
                </h1>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="p-10 lg-pt-48 container mx-auto relative">
          <section className="bg-gray-600 rounded-lg shadow-2xl lg:flex p-20">
            <p></p>
          </section>
        </div> */}
      </div>
    </main>
  );
}
