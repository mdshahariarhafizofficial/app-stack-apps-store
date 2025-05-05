import React from 'react';
import AppsCard from '../AppsCard/AppsCard';

const ProductivityApps = ({productivity}) => {    
    
    return (
        <div className='my-20 px-5 lg:px-0'>
        <h2 className='text-3xl font-bold mb-5'>Productivity Apps</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                productivity
                .sort( (a,b) => a.rating < b.rating ? 1 : -1 )
                .map(app => <AppsCard 
                    key = {app.id}
                    app={app}></AppsCard>)
            }
        </div>
    </div>
    );
};

export default ProductivityApps;