import React from 'react';

const CallToAuction = () => {
    return (
    <div className="w-full md:py-10">
        <div className="flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10" bis_skin_checked="1">
            <h1 className="lg:text-5xl md:text-4xl text-3xl antialiased font-bold leading-none text-center text-primary"> Subscribe To get Latest Updates</h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news</p>
            <div className="lg:w-3/5 md:w-4/5 mx-auto flex flex-row" bis_skin_checked="1">
                <input type="text" placeholder="example@email.com" className="w-4/5 md:w-full p-3 rounded-l-lg sm:w-2/3 border-2 border-gray-200" />
                <button type="button" className="w-2/5 md:w-1/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-primary dark:text-gray-50">Subscribe</button>
            </div>
        </div>
    </div>
    );
};

export default CallToAuction;