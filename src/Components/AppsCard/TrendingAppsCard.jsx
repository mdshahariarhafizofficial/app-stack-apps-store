import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const TrendingAppsCard = ({ app }) => {
  const { name, thumbnail, downloads, rating, isTrending } = app;
  return (
    <div>
      <div className="relative overflow-hidden card bg-base-100 shadow-sm border-1 border-gray-200">
        <figure className="px-10 pt-10">
            <div className="w-24 mx-auto">
                <img
                    src={thumbnail}
                    alt="App"
                    className="rounded-xl w-full"
                />
            </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-extrabold text-xl">{name}</h2>

            <div className="space-y-4">
                <p className="flex gap-2 justify-center text-base font-semibold items-center text-[#fa8b16]">{<FaStar size={20} color="#fa8b16"></FaStar>} {rating}</p>

                <p className="flex gap-2 justify-center text-base font-semibold items-center text-accent"> { <FaDownload size={20}></FaDownload> } {downloads}</p>
            </div>
          
        </div>
        {
          isTrending ?  <p className="absolute top-4 -left-10 bg-red-600 text-white font-bold w-40 text-sm text-center py-1 rotate-[-35deg]">Trending</p> : ""
        }
        {
          name === 'Programming Hero' && <p className="absolute top-4 -left-10 bg-green-500 text-white font-bold w-40 text-sm text-center py-1 rotate-[-35deg]">Popular</p>
        }
      </div>
    </div>
  );
};

export default TrendingAppsCard;
