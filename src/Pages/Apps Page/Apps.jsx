import React, { useEffect, useState } from "react";
import TrendingApps from "../../Components/AllApps/TrendingApps";
import { useLoaderData } from "react-router";
import ProductivityApps from "../../Components/AllApps/ProductivityApps";

const Apps = () => {
  const [trending, setTrending] = useState([]);
  const [productivity, setProductivity] = useState([]);
  const data = useLoaderData();

  useEffect(()=> {
    const filterTrendingApps = data.filter( app => app.isTrending === true);
    setTrending(filterTrendingApps);
    
    const filterProductivityApps = data.filter( app => app.category.includes("Productivity"));
    setProductivity(filterProductivityApps);
    

  }, [data]);

  
  return (
    <div>
      <TrendingApps trending = {trending}></TrendingApps>
      <ProductivityApps productivity = {productivity}></ProductivityApps>
    </div>
  );
};

export default Apps;
