import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <Snowfall
        color="#ffff"
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />
      <div className="absolute inset-0 -z-10 h-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_65%,#6cbde0_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
