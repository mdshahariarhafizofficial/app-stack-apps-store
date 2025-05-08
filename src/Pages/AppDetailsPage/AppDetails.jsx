import React, { use, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaDownload, FaStar } from "react-icons/fa";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from "../../Context/AuthContext";
import userIcon from '../../assets/userIcon.png';
import { format } from 'date-fns'


const AppDetails = () => {
  const {user} = use(AuthContext);
  const [btnDisable, setBtnDisable] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [install, setInstall] = useState(false);
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

  // Handle Review
  // const [reviewText, setReviewText] = useState('');
  const [allReview, setAllReview] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const today = new Date();
  const formattedDate = format(today, 'MMMM d, yyyy (EEEE)')

  const handleReview = (e) =>{
    e.preventDefault();
    const text = e.target.text.value;
    const reviewBox = {
      text: text,
      ratingValue: userRating,
      date: formattedDate,
    }
    setAllReview([...allReview, reviewBox]);
    e.target.text.value = '';
    setUserRating(0)
    setErrorMessage('')
  }

  const handleErrorMessage = (e) => {
    e.preventDefault();
    btnDisable && setErrorMessage('⚠️ First, install the app, and then you can submit a review')
    return
  }

  return (
    <div>

      <HelmetProvider>
        <title>App Store - App Details</title>
      </HelmetProvider>

      {/* Title */}
      <div className="card mt-5 mx-5 lg:mx-0 p-5 bg-base-100 shadow-sm border-1 border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-primary">
          App Details
        </h2>
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

          {
            install ? <button onClick={()=>setInstall(!install)} className="btn bg-red-500 text-white px-10 py-5 mr-10">Uninstall</button> :           
            <button onClick={()=> {
              setInstall(!install)
              setBtnDisable(false)
              setErrorMessage('')
            }} className="btn btn-primary px-10 py-5 mr-10">Install</button>
          }

        </div>
        {isTrending ? (
          <p className="absolute top-6 -right-8 bg-red-600 text-white font-bold w-42 text-sm text-center py-1 rotate-[35deg]">
            Trending
          </p>
        ) : (
          ""
        )}
        {name === "Programming Hero" && (
          <p className="absolute top-6 -right-8 bg-green-600 text-white font-bold w-42 text-sm text-center py-1 rotate-[35deg]">
            Popular
          </p>
        )}
      </div>

      {/* Banner */}
      <div className="card md:p-10 my-10 mx-5 lg:mx-0 bg-base-100 shadow-sm border-1 border-gray-200">
        <img
          className="w-full h-[450px] object-cover rounded-2xl"
          src={banner}
          alt=""
        />
      </div>

      {/* Description */}
      <div className="card p-10 my-10 mx-5 lg:mx-0 bg-base-100 space-y-4 shadow-sm border-1 border-gray-200">
        <h2 className="text-3xl font-extrabold border-b-2 border-gray-200 pb-4">
          Description
        </h2>
        <div>
          <p className="text-accent text-lg font-medium">{description}</p>
        </div>
        <h2 className="text-xl font-extrabold">Specification</h2>
        <div className="flex flex-col md:flex-row">
          <div className="space-y-4 md:w-[50%]">
            <p>
              <span className="text-lg font-bold">Name : </span>
              <span className="text-md font-medium text-accent">{name}</span>
            </p>
            <p>
              <span className="text-lg font-bold">Developer : </span>
              <span className="text-md font-medium text-accent">
                {developer}
              </span>
            </p>

            <p>
              <span className="text-lg font-bold">
                Features :<br></br>{" "}
              </span>
              {features.map((f) => (
                <span key={f} className="text-md font-medium text-accent">
                  {f} <br></br>
                </span>
              ))}
            </p>
          </div>

          <div className="space-y-4 md:w-[50%]">
            <p>
              <span className="text-lg font-bold">Category : </span>
              <span className="text-md font-medium text-accent">
                {category}
              </span>
            </p>

            <p>
              <span className="text-lg font-bold">Download : </span>
              <span className="text-md font-medium text-accent">
                {downloads}
              </span>
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

      {/* Review Section*/}
      <div className="card p-4 md:p-10 my-10 mx-5 lg:mx-0 bg-base-100 space-y-4 shadow-sm border-1 border-gray-200">
        <div className="flex flex-col md:flex-row gap-6">
          {/* review form */}
          <div className="md:w-[50%]">
            <form 
            onSubmit={btnDisable ? handleErrorMessage : handleReview } className="flex  flex-col bg-base-300 p-10 rounded-xl space-y-5">

              <TbMessageChatbotFilled
                size={60}
                color="rgb(250, 139, 22)"
                className="mx-auto"
              />
              <h2 className="text-3xl font-bold text-center">
                Your opinion matters!
              </h2>
              <p className="text-center text-accent font-semibold">How was your experience?</p>


              {/* Rating */}
              <div className="mx-auto">
                <Rating
                style={{maxWidth: '200px'}}
                  value={userRating}
                  onChange={setUserRating}
                ></Rating>
              </div>


              <textarea
                type="text"
                name="text"
                required
                placeholder="Write your opinion here.."
                className="textarea textarea-lg textarea-primary w-full"
              ></textarea>
              <p className="text-red-500 ">
                {errorMessage}</p>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* review */}
          <div className="md:w-[50%]">
          <h2 className="text-2xl font-bold text-center mb-4">
                Rating & Reviews
              </h2>
            <div className="space-y-4">
                {/* Default Review  */}
              <div
                className="container flex flex-col w-full max-w-lg mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-200"
                bis_skin_checked="1"
              >
                <div className="flex justify-between p-4" bis_skin_checked="1">
                  <div className="flex space-x-4" bis_skin_checked="1">
                    <div bis_skin_checked="1">
                      <img
                        src="https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div bis_skin_checked="1">
                      <h4 className="font-bold">{reviews.user}</h4>
                      <span className="text-xs dark:text-gray-600">
                        2 days ago
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-2"
                    bis_skin_checked="1"
                  >
                      <Rating
                          style={{maxWidth: '80px'}}
                          value={reviews.rating}
                      ></Rating>
                    <span className="text-xl font-bold">{reviews.rating}</span>
                  </div>
                </div>
                <div
                  className="p-4 space-y-2 text-sm dark:text-gray-600"
                  bis_skin_checked="1"
                >
                  <p>
                    {
                        reviews.comment
                    }
                  </p>
                </div>
              </div>

                {/* User Review */}
                {
                  allReview.map((review, i) => <div
                    key={i} 
                    className="container flex flex-col w-full max-w-lg p- mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-200"
                    bis_skin_checked="1"
                  >
                    <div className="flex justify-between p-4" bis_skin_checked="1">
                      <div className="flex space-x-4" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                          <img
                            src={`${user ? user.photoURL || userIcon : userIcon }`}
                            alt=""
                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div bis_skin_checked="1">
                          <h4 className="font-bold">{
                              user ? user.displayName : 'user name'
                            }</h4>
                          <span className="text-xs dark:text-gray-600">
                            {
                              review.date
                            }
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-center space-x-2"
                        bis_skin_checked="1"
                      >
                      <Rating
                          style={{maxWidth: '80px'}}
                          value={review.ratingValue}
                      ></Rating>
                        <span className="text-xl font-bold">{review.ratingValue}</span>
                      </div>
                    </div>
                    <div
                      className="p-4 space-y-2 text-sm dark:text-gray-600"
                      bis_skin_checked="1"
                    >
                      <p className="font-semibold">
                        {
                            review.text
                        }
                      </p>
                    </div>
                  </div>)
                }

            {/* ------- */}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
