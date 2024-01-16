import React from "react";
import AccountTable from "../components/AccountsTable";

const AccountsPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="text-center">Accounts</h1>
      </div>
      <AccountTable />
    </div>
  );
};

export default AccountsPage;
