import Map from "./components/Map";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { IPProvider } from "./context/IPProvider";

function App() {
  return (
    <IPProvider>
      <SearchBar />
      <Results />
      <Map />
    </IPProvider>
  );
}

export default App;
