import { QueryClient, QueryClientProvider } from "react-query";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Welcome />
    </QueryClientProvider>
  );
}

export default App;
