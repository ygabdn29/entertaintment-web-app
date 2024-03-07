import { ShowsProvider } from "./context/ShowsContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="grid place-content-center">
      <main className="max-w-[90rem]">
        <ShowsProvider>
          <Dashboard></Dashboard>
        </ShowsProvider>
      </main>
    </div>
  );
}

export default App;
