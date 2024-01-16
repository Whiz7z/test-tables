import React from "react";
import CampaignTable from "../components/CampaignTable";
import BackBtn from "../components/BackBtn";

const CampaignsPage = () => {
  return (
    <div className="container">
      <div className="header container-fluid">
        <BackBtn />

        <h1 className="text-center">Campaigns</h1>
      </div>
      <CampaignTable />
    </div>
  );
};

export default CampaignsPage;
