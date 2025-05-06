import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const findApp = data.find((res) => res.id == id);
  const {
    name,
    reviews,
    features,
    description,
    rating,
    isTrending,
    category,
    downloads,
    banner,
    developer,
    thumbnail,
  } = findApp;

  return (
    <div>

    {/* Title */}
    <div className="card mt-5 mx-5 lg:mx-0 p-5 bg-base-100 shadow-sm border-1 border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-primary">App Details</h2>
      </div>

    {/* Top Card */}
      <div className="relative mx-5 lg:mx-0 p-6 flex flex-col gap-5 md:flex-row items-center justify-between overflow-hidden card my-10 bg-base-100 shadow-sm border-1 border-gray-200">
        <div className="flex flex-col md:flex-row">
            <figure className="">
            <div className="w-[200px] mx-auto">
                <img src={thumbnail} alt="App" className="rounded-xl w-full" />
            </div>
            </figure>
            <div className="card-body">
            <h2 className="card-title font-extrabold text-3xl">{name}</h2>
            <p className="text-lg font-semibold text-accent">{developer}</p>

            <div className="space-y-4">
                <p className="flex gap-2 text-base font-semibold items-center text-[#fa8b16]">
                {<FaStar size={20} color="#fa8b16"></FaStar>} {rating}
                </p>

                <p className="flex gap-2 text-base font-semibold items-center text-accent">
                {" "}
                {<FaDownload size={20}></FaDownload>} {downloads}
                </p>
            </div>
            </div>
        </div>
        <div>
            <button className="btn btn-primary px-10 py-5 mr-10">Install</button>
        </div>
        {isTrending ? (
          <p className="absolute top-6 -right-8 bg-red-600 text-white font-bold w-42 text-sm text-center py-1 rotate-[35deg]">
            Trending
          </p>
        ) : (
          ""
        )}
        {/* {name === "Programming Hero" && (
          <p className="absolute top-4 -left-10 bg-green-500 text-white font-bold w-40 text-sm text-center py-1 rotate-[-35deg]">
            Popular
          </p>
        )} */}
      </div>

      {/* Banner */}
      <div className="card p-10 my-10 mx-5 lg:mx-0 bg-base-100 shadow-sm border-1 border-gray-200">
            <img className="w-full h-[450px] object-cover rounded-2xl" src={banner} alt="" />
      </div>

      {/* Description */}
      <div className="card p-10 my-10 mx-5 lg:mx-0 bg-base-100 space-y-4 shadow-sm border-1 border-gray-200">
            <h2 className="text-3xl font-extrabold border-b-2 border-gray-200 pb-4">Description</h2>
            <div>
                <p className="text-accent text-lg font-medium">{description}</p>
            </div>
            <h2 className="text-xl font-extrabold">Specification</h2>
            <div className="flex">
                <div className="space-y-4 w-[50%]">
                    <p>
                        <span className="text-lg font-bold">Name : </span>
                        <span className="text-md font-medium text-accent">{name}</span>
                    </p>
                    <p>
                        <span className="text-lg font-bold">Developer : </span>
                        <span className="text-md font-medium text-accent">{developer}</span>
                    </p>

                    <p>
                        <span className="text-lg font-bold">Features :<br></br> </span>
                        {
                            features.map(f =>                         <span key={f} className="text-md font-medium text-accent">{f} <br></br></span>)
                        }
                    </p>

                </div>

                <div className="space-y-4 w-[50%]">
                    <p>
                        <span className="text-lg font-bold">Category : </span>
                        <span className="text-md font-medium text-accent">{category}</span>
                    </p>

                    <p>
                        <span className="text-lg font-bold">Download : </span>
                        <span className="text-md font-medium text-accent">{downloads}</span>
                    </p>
                    <p className="flex gap-3">
                        <span className="text-lg font-bold">Rating : </span>
                        <span className="flex gap-2 text-base font-semibold items-center text-[#fa8b16]">
                        {<FaStar size={20} color="#fa8b16"></FaStar>} {rating}
                        </span>
                    </p>
                </div>

            </div>
      </div>


      
    </div>
  );
};

export default AppDetails;
