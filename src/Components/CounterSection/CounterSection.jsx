import React from 'react';
import CountUp from 'react-countup';
import { BiSolidCommentDots } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { GrAppsRounded } from 'react-icons/gr';

const CounterSection = () => {
    return (
<section className="p-6 my-6 dark:bg-gray dark:text-gray-800 border-y-2 border-gray-200">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4" bis_skin_checked="1">

		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800" bis_skin_checked="1">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4" bis_skin_checked="1">
            <GrAppsRounded color='#007aff' size={50} />
			</div>
			<div className="flex flex-col justify-center align-middle" bis_skin_checked="1">
				<p className="text-4xl font-bold leading-none">
                    {<CountUp end={1999} duration={10} />} +
                </p>
				<p className="capitalize font-bold text-accent">Apps</p>
			</div>
		</div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800" bis_skin_checked="1">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4" bis_skin_checked="1">
            <BiSolidCommentDots color='#007aff' size={50} />
			</div>
			<div className="flex flex-col justify-center align-middle" bis_skin_checked="1">
				<p className="text-4xl font-bold leading-none">
                    {<CountUp end={4999} duration={10} />} +
                </p>
				<p className="capitalize font-bold text-accent">Reviews</p>
			</div>
		</div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800" bis_skin_checked="1">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4" bis_skin_checked="1">
            <FaDownload color='#007aff' size={50} />
			</div>
			<div className="flex flex-col justify-center align-middle" bis_skin_checked="1">
				<p className="text-4xl font-bold leading-none">
                    {<CountUp end={9999} duration={10} />} +
                </p>
				<p className="capitalize font-bold text-accent">Downloads</p>
			</div>
		</div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white dark:text-gray-800" bis_skin_checked="1">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4" bis_skin_checked="1">
            <FaArrowsRotate color='#007aff' size={50} />
			</div>
			<div className="flex flex-col justify-center align-middle" bis_skin_checked="1">
				<p className="text-4xl font-bold leading-none">
                    {<CountUp end={8999} duration={10} />} +
                </p>
				<p className="capitalize font-bold text-accent">Program Version Listed</p>
			</div>
		</div>

	</div>
</section>
    );
};

export default CounterSection;