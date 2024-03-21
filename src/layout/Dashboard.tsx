import { Outlet } from "react-router-dom";
import SearchInput from "../components/searchInput/SearchInput";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";
import SearchResult from "../components/searchResult/SearchResult";

function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-main md:grid-cols-1 gap-9 md:gap-0 pl-8 pt-8 pr-9 md:p-6">
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
