import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";
import Homepage from "./homepage/Homepage";

function Dashboard() {
  return (
    <div className="grid grid-cols-main gap-9 pl-8 pt-8 pr-9">
      <Sidebar></Sidebar>

      <div>
        <Search></Search>
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default Dashboard;
