import React, { useEffect, useState } from "react";
import TrendingApps from "../../Components/AllApps/TrendingApps";
import { useLoaderData } from "react-router";

const Apps = () => {
  const [trending, setTrending] = useState([]);
  const data = useLoaderData();

  useEffect(()=> {
    const filterTrendingApps = data.filter( app => app.isTrending === true);
    setTrending(filterTrendingApps)
  }, [data]);

  
  return (
    <div>
      <TrendingApps trending = {trending}></TrendingApps>
    </div>
  );
};

export default Apps;
