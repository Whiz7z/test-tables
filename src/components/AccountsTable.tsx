import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountItem from "./AccountItem";
import SortingBtn from "./SortingBtn";

import { filterData } from "../utils/sorting/sorting";
import PaginationBtns from "./PaginationBtns";
const AccountTable = () => {
  const accounts = useSelector((state: any) => state.data.data);

  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [idFilter, setIdFilter] = useState<string | null>(null);
  const [emailFilter, setEmailFilter] = useState<string | null>(null);

  const [paging, setPaging] = useState({
    indexOfLastItem: 3,
    indexOfFirstItem: 0,
  });

  const paginateHandler = (paging: any) => {
    setPaging(paging);
  };

  useEffect(() => {
    console.log(accounts);
  }, [accounts]);

  const changeDateFilter = () => {
    setDateFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setIdFilter(null);
    setEmailFilter(null);
  };

  const changeIdFilter = () => {
    setIdFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setDateFilter(null);
    setEmailFilter(null);
  };

  const changeEmailFilter = () => {
    setEmailFilter((prev) =>
      prev === "ascended"
        ? "descended"
        : prev === "descended"
        ? "ascended"
        : "descended"
    );
    setIdFilter(null);
    setDateFilter(null);
  };

  useEffect(() => {
    console.log(dateFilter);
  }, [dateFilter]);

  let content;

  if (
    accounts &&
    idFilter === null &&
    dateFilter === null &&
    emailFilter === null
  ) {
    content = [...accounts];
  } else if (accounts && idFilter !== null) {
    content = filterData("accountId", idFilter, false, accounts);
  } else if (accounts && dateFilter !== null) {
    content = filterData("creationDate", dateFilter, false, accounts);
  } else if (accounts && emailFilter !== null) {
    content = filterData("email", emailFilter, true, accounts);
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-bordered table-hover table-responsive">
            <thead>
              <tr>
                <th style={{ display: "flex" }}>
                  <span>Account ID</span>
                  <SortingBtn
                    numeric
                    state={idFilter}
                    onClick={() => changeIdFilter()}
                  />
                </th>
                <th>
                  <div style={{ display: "flex" }}>
                    <div>Email</div>
                    <SortingBtn
                      numeric={false}
                      state={emailFilter}
                      onClick={() => changeEmailFilter()}
                    />
                  </div>
                </th>
                <th>Auth Token</th>
                <th style={{ display: "flex" }}>
                  <span>Creation Date</span>
                  <SortingBtn
                    numeric
                    state={dateFilter}
                    onClick={() => changeDateFilter()}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {content
                .slice(paging.indexOfFirstItem, paging.indexOfLastItem)
                .map((account: any) => (
                  <AccountItem account={account} key={account.accountId} />
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

export default AccountTable;
