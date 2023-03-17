import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gaming from "../Gaming";
import Home from "../Home/Home";
import IndividualVideo from "../IndividualVideo";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Protected from "../ProtectedRoutes/ProtectedRoute";
import Savedvideo from "../SavedVideo";
import Trending from "../Trending";
const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/trending"
          element={
            <Protected>
              <Trending />
            </Protected>
          }
        />
        <Route
          path="/saveVideo"
          element={
            <Protected>
              <Savedvideo />
            </Protected>
          }
        />
        <Route
          path="/gaming"
          element={
            <Protected>
              <Gaming />
            </Protected>
          }
        />
        <Route
          path="/videos/:id"
          element={
            <Protected>
              <IndividualVideo />
            </Protected>
          }
        />
        <Route
          path="*"
          element={
            <Protected>
              <NotFound />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesPath;
