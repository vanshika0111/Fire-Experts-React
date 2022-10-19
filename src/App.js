import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/explore" exact element={<ExplorePage />} />
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  );
};

export default App;
