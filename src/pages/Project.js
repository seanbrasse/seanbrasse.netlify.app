import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import image from '../images/nyc1.jpg';
import { Link } from 'react-router-dom'

export default function Project() {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "proj"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id, 
                    url
            },
                date,
                link, 
                tags,
                alt,
                place,
            }
        }`)
            .then((data) => setProject(data))
            .catch(console.error);
    }, []);

    if (!projectData) return <div className="text-7xl font-bold cursive flex py-96 text-blue-500 justify-center">Loading Projects...</div>;

    return (
        <main className="bg-gray-100 min-h-screen">
            <img src={image} alt={"nyc photo"} className="absolute w-full opacity-60 bg-scroll"/>
            <section className='container mx-auto relative min-h-screen'>
                <h1 className='text-5xl flex justify-center cursive pt-8'>My Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center text-1xl pt-4 mb-12'>Welcome to my Projects Page!</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectData && projectData.map((project, index) => (
                        <article>
                            <Link to={'/project/' + project.slug.current} key={project.slug.current}>
                                <span className='block h-64 relative rounded-lg shadow-xl leading-snug bg-white border-1 border-l-8 border-gray-600' key={index}>
                                    <img
                                        src={project.mainImage.asset.url}
                                        alt={project.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className='block relative h-full flex justify-end items-end pr-2 pb-2'>
                                        <h4 className='text-gray-900 bg-gray-300 bg-opacity-75 p-1 rounded text-3xl hover:bg-blue-300'>{project.title}</h4>
                                        {/* <h3 className='text-gray-900'>{project.place}</h3> */}
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}