import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import image from "../images/nyc1.jpg";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id, 
                    url
                },
                alt
            },
            place,
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData)
    return (
      <div className="text-7xl font-bold cursive flex py-96 text-blue-500 justify-center">
        Loading Work Experience...
      </div>
    );

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* <img
        src={image}
        alt={"nyc photo"}
        className="absolute w-full bg-fixed opacity-75"
      /> */}
      <div
        className="absolute min-w-full min-h-full bg-top
        bg-cover opacity-75 bg-repeat-y bg-fixed"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {" "}
      </div>
      <section className="container relative mx-auto ">
        <h1 className="text-5xl flex justify-center cursive pt-8">
          My Work Experience
        </h1>
        <h2 className="text-lg text-black flex justify-center pt-4 mb-12">
          Here are Some of the Jobs I've Worked!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white bg-white border-1 border-l-8 border-gray-600"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full pr-2 pb-2 flex justify-end items-end">
                      {/* <h3 className='text-gray-900 text-3xl font-bold p-3'>{post.place}</h3> */}
                      <h4 className="text-gray-800 p-1 bg-gray-300 bg-opacity-90 text-3xl hover:bg-blue-300 float-right hover:text-gray-700 bg-opacity-75 rounded">
                        {post.title} at {post.place}
                      </h4>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
      {/* </div> */}
    </main>
  );
}
