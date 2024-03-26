import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <h2 className="text-sm bg-red-700">Vite</h2>
    </QueryClientProvider>
  );
}

export default App;
