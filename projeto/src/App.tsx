import { QueryClient, QueryClientProvider } from "react-query";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Label from "./components/Label";
import Locations from "./components/Locations";
import LocationContextProvider from "./contexts/LocationContext";


export const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <LocationContextProvider>
      <Header />
      <Welcome />
      <Filter/>
      <Label />
      <Locations />
      </LocationContextProvider>
    </QueryClientProvider>
  );
}

export default App;
