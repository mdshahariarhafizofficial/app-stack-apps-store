import React from "react";
import AppsCard from "../AppsCard/AppsCard";

const HealthcareApps = ({healthcare}) => {
  return (
    <div>
      <div className="mb-20 px-5 lg:px-0">
        <h2 className="text-3xl font-bold mb-5">Healthcare Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                healthcare.
                sort((a, b)=> a.rating < b.rating ? 1 : -1)
                .map(app => <AppsCard 
                    app={app}
                    key={app.id}
                    ></AppsCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default HealthcareApps;
