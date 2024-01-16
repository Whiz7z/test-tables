import React, { useState } from "react";
import ProfileItem from "./ProfileItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterData } from "../utils/sorting/sorting";

import SortingBtn from "./SortingBtn";
import PaginationBtns from "./PaginationBtns";

const ProfilesTable = () => {
  const [idFilter, setIdFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFlter] = useState<string | null>(null);
  const [marketFilter, setMarketFilter] = useState<string | null>(null);

  const [paging, setPaging] = useState({
    indexOfLastItem: 3,
    indexOfFirstItem: 0,
  });

  const paginateHandler = (paging: any) => {
    setPaging(paging);
  };

  const { accountId } = useParams();

  const profiles = useSelector(
    (state: any) =>
      state.data.data.find(
        (account: any) => account.accountId === Number(accountId)
      )?.profiles
  );

  const changeIdFilter = () => {
    setIdFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setCountryFlter(null);
    setMarketFilter(null);
  };

  const changeMarketFilter = () => {
    setMarketFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setCountryFlter(null);
    setIdFilter(null);
  };

  const changeCountryFilter = () => {
    setCountryFlter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setMarketFilter(null);
    setIdFilter(null);
  };

  let content;

  if (
    profiles &&
    idFilter === null &&
    marketFilter === null &&
    countryFilter === null
  ) {
    content = [...profiles];
  } else if (profiles && idFilter !== null) {
    content = filterData("profileId", idFilter, false, profiles);
  } else if (profiles && marketFilter !== null) {
    content = filterData("marketplace", marketFilter, true, profiles);
  } else if (profiles && countryFilter !== null) {
    content = filterData("country", countryFilter, true, profiles);
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-bordered table-hover table-responsive">
            <thead>
              <tr>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Profile ID</div>
                    <SortingBtn
                      numeric
                      state={idFilter}
                      onClick={() => changeIdFilter()}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Country</div>
                    <SortingBtn
                      numeric={false}
                      state={countryFilter}
                      onClick={() => changeCountryFilter()}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Marketplace</div>
                    <SortingBtn
                      numeric={false}
                      state={marketFilter}
                      onClick={() => changeMarketFilter()}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {content
                .slice(paging.indexOfFirstItem, paging.indexOfLastItem)
                .map((profile: any) => (
                  <ProfileItem profile={profile} key={profile.profileId} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <PaginationBtns
        itemsPerPage={3}
        length={content.length}
        onPaginate={paginateHandler}
      />
    </div>
  );
};

export default ProfilesTable;
