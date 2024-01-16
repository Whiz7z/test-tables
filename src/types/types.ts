export type Campaign = {
  campaignId: number;
  clicks: number;
  cost: number;
  date: string;
};

export type Profile = {
  profileId: number;
  country: string;
  marketplace: string;
  campaigns?: Campaign[];
};

export type Account = {
  accountId: number;
  email: string;
  authToken: string;
  creationDate: string;
  profiles?: Profile[];
};
