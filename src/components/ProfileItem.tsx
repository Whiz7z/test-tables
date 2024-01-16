import React from "react";
import { Profile } from "../types/types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  profile: Profile;
};

function ProfileItem({ profile }: Props) {
  const navigate = useNavigate();
  const { accountId } = useParams();
  const onRowClick = (accountId: number, profileId: Profile["profileId"]) => {
    navigate(`/campaigns/${accountId}/${profileId}`);
  };
  return (
    <tr
      key={profile.profileId}
      onClick={() => onRowClick(Number(accountId), profile.profileId)}
      style={{ cursor: "pointer" }}
    >
      <td>{profile.profileId}</td>
      <td>{profile.country}</td>
      <td>{profile.marketplace}</td>
    </tr>
  );
}

export default ProfileItem;
