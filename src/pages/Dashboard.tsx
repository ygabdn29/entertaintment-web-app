import Recommended from "../components/recommended/Recommended";
import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";
import Trending from "../components/trending/Trending";

function Dashboard() {
  return (
    <div className="grid grid-cols-main gap-9 pl-8 pt-8 pr-9">
      <Sidebar></Sidebar>

      <div>
        <Search></Search>
        <Trending></Trending>
        <Recommended></Recommended>
      </div>
    </div>
  );
}

export default Dashboard;
