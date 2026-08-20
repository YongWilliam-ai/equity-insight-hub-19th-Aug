/** The Market Ledger application shell — uses a light editorial theme for the research reading experience. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ArchiveAug18 from "./pages/ArchiveAug18";
import ArchiveAug19 from "./pages/ArchiveAug19";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/archive/2026-08-19" component={ArchiveAug19} />
      <Route path="/archive/2026-08-18" component={ArchiveAug18} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
