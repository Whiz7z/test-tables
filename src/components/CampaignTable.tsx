import React, { useState } from "react";
import CampaignItem from "./CampaignItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SortingBtn from "./SortingBtn";
import { filterData } from "../utils/sorting/sorting";
import PaginationBtns from "./PaginationBtns";

const CampaignTable = () => {
  const { accountId, profileId } = useParams();
  const [idFilter, setIdFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [clicksFilter, setClicksFilter] = useState<string | null>(null);
  const [costFilter, setCostFilter] = useState<string | null>(null);

  const [paging, setPaging] = useState({
    indexOfLastItem: 3,
    indexOfFirstItem: 0,
  });

  const paginateHandler = (paging: any) => {
    setPaging(paging);
  };

  const campaigns = useSelector(
    (state: any) =>
      state.data.data
        .find((account: any) => account.accountId === Number(accountId))
        ?.profiles.find(
          (profile: any) => profile.profileId === Number(profileId)
        )?.campaigns
  );

  const changeIdFilter = () => {
    setIdFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setDateFilter(null);
    setClicksFilter(null);
    setCostFilter(null);
  };

  const changeDateFilter = () => {
    setDateFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setIdFilter(null);
    setClicksFilter(null);
    setCostFilter(null);
  };

  const changeClicksFilter = () => {
    setClicksFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setIdFilter(null);
    setDateFilter(null);
    setCostFilter(null);
  };

  const changeCostFilter = () => {
    setCostFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setIdFilter(null);
    setDateFilter(null);
    setClicksFilter(null);
  };

  let content;

  if (
    campaigns &&
    idFilter === null &&
    dateFilter === null &&
    clicksFilter === null &&
    costFilter === null
  ) {
    content = [...campaigns];
  } else if (campaigns && idFilter !== null) {
    content = filterData("campaignId", idFilter, false, campaigns);
  } else if (campaigns && dateFilter !== null) {
    content = filterData("date", dateFilter, false, campaigns);
  } else if (campaigns && clicksFilter !== null) {
    content = filterData("clicks", clicksFilter, false, campaigns);
  } else if (campaigns && costFilter !== null) {
    content = filterData("cost", costFilter, false, campaigns);
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
                    <div>Campaign ID</div>
                    <SortingBtn
                      numeric={false}
                      state={idFilter}
                      onClick={() => changeIdFilter()}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Clicks</div>
                    <SortingBtn
                      numeric={false}
                      state={clicksFilter}
                      onClick={() => changeClicksFilter()}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Cost</div>
                    <SortingBtn
                      numeric={false}
                      state={costFilter}
                      onClick={() => changeCostFilter()}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Marketplace</div>
                    <SortingBtn
                      numeric={false}
                      state={dateFilter}
                      onClick={() => changeDateFilter()}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {content
                .slice(paging.indexOfFirstItem, paging.indexOfLastItem)
                .map((campaign: any) => (
                  <CampaignItem campaign={campaign} key={campaign.campaignId} />
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

export default CampaignTable;
