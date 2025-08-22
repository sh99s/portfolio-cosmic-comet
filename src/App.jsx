import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
