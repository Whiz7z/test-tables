import React from "react";
import { Campaign } from "../types/types";

type Props = { campaign: Campaign };

const CampaignItem = ({ campaign }: Props) => {
  return (
    <tr key={campaign.campaignId} style={{ cursor: "pointer" }}>
      <td>{campaign.campaignId}</td>
      <td>{campaign.clicks}</td>
      <td>{campaign.cost}</td>
      <td>{campaign.date}</td>
    </tr>
  );
};

export default CampaignItem;
