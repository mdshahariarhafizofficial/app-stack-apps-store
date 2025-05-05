import React from 'react';
import TrendingAppsCard from '../AppsCard/TrendingAppsCard';

const TrendingApps = ({trending}) => {
    console.log(trending);
    
    return (
        <div className='my-10 px-5 lg:px-0'>
            <h2 className='text-2xl font-bold'>Trending Apps</h2>
            <div>
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