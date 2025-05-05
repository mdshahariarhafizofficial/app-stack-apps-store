import React from 'react';
import TrendingAppsCard from '../AppsCard/TrendingAppsCard';

const TrendingApps = ({trending}) => {
    console.log(trending);
    
    return (
        <div className='my-10 px-5 lg:px-0'>
            <h2 className='text-3xl font-bold mb-5'>Trending Apps</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    trending.map(app => <TrendingAppsCard
                        key={app.id} 
                        app={app}
                        ></TrendingAppsCard>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;