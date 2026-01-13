import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Chapter1 from "@/pages/Chapter1";
import Chapter2 from "@/pages/Chapter2";
import Chapter3 from "@/pages/Chapter3";
import Chapter4 from "@/pages/Chapter4";
import Epilogue from "@/pages/Epilogue";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { CustomCursor } from "./components/CustomCursor";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapter1" component={Chapter1} />
      <Route path="/chapter2" component={Chapter2} />
      <Route path="/chapter3" component={Chapter3} />
      <Route path="/chapter4" component={Chapter4} />
      <Route path="/epilogue" component={Epilogue} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <CustomCursor />
          <BackgroundMusic />
          <Toaster />
          <WouterRouter base={base}>
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
