import React from "react";
import { Account } from "../types/types";
import { useNavigate } from "react-router-dom";

type Props = {
  account: Account;
};

const AccountItem = ({ account }: Props) => {
  const navigate = useNavigate();
  const onRowClick = (id: Account["accountId"]) => {
    navigate(`/profiles/${id}`);
  };
  return (
    <tr
      key={account.accountId}
      onClick={() => onRowClick(account.accountId)}
      style={{ cursor: "pointer" }}
    >
      <td>{account.accountId}</td>
      <td>{account.email}</td>
      <td>{account.authToken}</td>
      <td>{account.creationDate}</td>
    </tr>
  );
};

export default AccountItem;
