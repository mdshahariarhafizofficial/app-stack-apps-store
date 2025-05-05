import React from 'react';

const TrendingAppsCard = ({app}) => {
    const {name, thumbnail, downloads, rating} = app;
    return (
        <div>
            <img src={thumbnail} alt="" />
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{downloads}</p>
        </div>
    );
};

export default TrendingAppsCard;