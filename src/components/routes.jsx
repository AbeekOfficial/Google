import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./results";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/search"} />} />
        <Route path="/news" element={<Results />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/musics" element={<Results />} />
      </Routes>
    </div>
  );
}
