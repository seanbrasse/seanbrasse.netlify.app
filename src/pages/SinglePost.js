import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../images/nyc1.jpg";
import { NavLink } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function CurrentJob(props) {
  if (!props.dateExists) {
    return <h4>Current Job</h4>;
  } else {
    return <h4>Date Ended: {props.dateExists}</h4>;
  }
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
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
            dateStarted,
            dateEnded,
            place,
            "name": author->name,
            "authorImage":author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="text-7xl font-bold cursive flex py-96 text-blue-500 justify-center">
        Loading Job Details...
      </div>
    );
  var dateExists = singlePost.dateEnded;
  return (
    <main
      className="bg-gray-200 min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* <img src={image} alt={"nyc photo"} className="absolute w-full opacity-60 bg-scroll"/> */}
      <div
        className="absolute min-w-full min-h-full bg-top
        bg-contain bg-fixed opacity-75"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <section className="p-12">
        <article className="containter relative shadow-lg mx-auto bg-gray-100 rounded-lg">
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              <div className="bg-white pt-4 bg-opacity-75 border-2 border-gray-600 rounded p-12">
                <h1 className="cursive text-5xl lg:text-6xl mb-4">
                  {singlePost.title}
                </h1>
                <NavLink to="/about">
                  <div className="flex justify-center text-5xl text-gray-800">
                    <img
                      src={urlFor(singlePost.authorImage).url()}
                      alt={singlePost.name}
                      className="w-40 h-40 rounded-full border-2 border-gray-600 flex justify-center"
                    />
                  </div>
                  <p className="cursive flex justify-center pl-2 text-4xl">
                    {singlePost.name}
                  </p>
                </NavLink>
              </div>
            </div>
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover rounded-t"
              style={{ height: "400px" }}
            />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            <div className="text-right">
              <h4 className="">
                Company: <strong>{singlePost.place}</strong>
              </h4>
              <h4 className="">Date Started: {singlePost.dateStarted} </h4>
              <CurrentJob dateExists={dateExists} />
              {/* {dateExists ? <h4>Date Ended: {singlePost.dateEnded}</h4>:<h4>Current Job</h4>} */}
            </div>
            <h3 className="text-1xl">Job Description: </h3>
            <BlockContent
              blocks={singlePost.body}
              projectId="s0jrn46i"
              dataset="production"
            />
          </div>
        </article>
      </section>
    </main>
  );
}
