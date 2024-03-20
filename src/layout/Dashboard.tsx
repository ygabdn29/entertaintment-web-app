import { Outlet } from "react-router-dom";
import SearchInput from "../components/searchInput/SearchInput";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";
import SearchResult from "../components/searchResult/SearchResult";

function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-main gap-9 pl-8 pt-8 pr-9">
      <Sidebar></Sidebar>

      <main>
        <SearchInput search={search} setSearch={setSearch}></SearchInput>
        {!search.length ? (
          <Outlet></Outlet>
        ) : (
          <SearchResult searchTerms={search}></SearchResult>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
