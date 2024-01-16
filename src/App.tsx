import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AccountsPage from "./pages/AccountsPage";
import ProfilesPage from "./pages/ProfilesPage";
import CampaignsPage from "./pages/CampaignsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/accounts" />} />

        <Route path="/accounts" element={<AccountsPage />} />

        <Route path="/profiles/:accountId?" element={<ProfilesPage />} />

        <Route
          path="/campaigns/:accountId?/:profileId?"
          element={<CampaignsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
