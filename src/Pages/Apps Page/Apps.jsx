import React, { useEffect, useState } from "react";
import TrendingApps from "../../Components/AllApps/TrendingApps";
import { useLoaderData } from "react-router";
import ProductivityApps from "../../Components/AllApps/ProductivityApps";
import HealthcareApps from "../../Components/AllApps/HealthcareApps";
import EducationalApps from "../../Components/AllApps/EducationalApps";
import SliderSection from "../../Components/Header/Slider/SliderSection";
import CounterSection from "../../Components/CounterSection/CounterSection";
import CallToAuction from "../../Components/CallToAction/CallToAuction";
import { Helmet } from "react-helmet";

const Apps = () => {
  const [trending, setTrending] = useState([]);
  const [productivity, setProductivity] = useState([]);
  const [healthcare, setHealthcare] = useState([]);
  const [educational, setEducational] = useState([]);
  const data = useLoaderData();

  useEffect(()=> {
    const filterTrendingApps = data.filter( app => app.isTrending === true);
    setTrending(filterTrendingApps);
    
    const filterProductivityApps = data.filter( app => app.category.includes("Productivity"));
    setProductivity(filterProductivityApps);

    const filterHealthcareApps = data.filter(app => app.category.includes("Health"));
    setHealthcare(filterHealthcareApps);

    const filterEducationalApps = data.filter(app => app.category.includes("Education"));
    setEducational(filterEducationalApps);

  }, [data]);

  
  return (
    <div>
      <Helmet>
        <title>App Store - Apps</title>
      </Helmet>
      <SliderSection></SliderSection>
      <TrendingApps trending = {trending}></TrendingApps>
      <CounterSection></CounterSection>
      <ProductivityApps productivity = {productivity}></ProductivityApps>
      <HealthcareApps healthcare={healthcare}></HealthcareApps>
      <EducationalApps educational={educational}></EducationalApps>
      <CallToAuction></CallToAuction>
    </div>
  );
};

export default Apps;
