import React from 'react';
import { Link, useLocation } from 'react-router';
import errorImg from '../../assets/error404.jpg'

const NotFound = () => {
    const location = useLocation();
	console.log(location);
	
    return (
<section className="min-h-[100vh] flex items-center h-full md:p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8" bis_skin_checked="1">
		<div className="max-w-5xl text-center" bis_skin_checked="1">
			<img className='w-[600px] mx-auto' src={errorImg} alt="" />
			<p className="text-xl text-accent mb-4 font-semibold">{location.pathname}</p>
			<p className="text-5xl font-semibold">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to='/'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-md text-sm px-10 py-3 text-center me-2 mb-2 ">Back to homepage</button>  
            </Link>
		</div>
	</div>
</section>
    );
};

export default NotFound;