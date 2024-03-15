import { Outlet } from "react-router-dom";
import SearchInput from "../components/searchInput/SearchInput";
import Sidebar from "../components/sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="grid grid-cols-main gap-9 pl-8 pt-8 pr-9">
      <Sidebar></Sidebar>

      <main>
        <SearchInput></SearchInput>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Dashboard;
