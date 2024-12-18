import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "./components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            staleTime: 10*1000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider defaultTheme={"dark"}>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools />
            </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
