import { HelmetProvider } from "react-helmet-async";
import RoutePage from "./routes/Routes";

export default function App() {
  return (
    <HelmetProvider>
      <RoutePage />
    </HelmetProvider>
  )
}

