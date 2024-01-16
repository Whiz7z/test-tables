import React from "react";
import ProfilesTable from "../components/ProfilesTable";
import BackBtn from "../components/BackBtn";

const ProfilesPage = () => {
  return (
    <div className="container">
      <div className="header container-fluid">
        <BackBtn />

        <h1 className="text-center">Profiles</h1>
      </div>

      <ProfilesTable />
    </div>
  );
};

export default ProfilesPage;
