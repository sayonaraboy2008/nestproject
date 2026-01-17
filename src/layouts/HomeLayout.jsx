import Header from "../components/Header";
import TopMiniSection from "../components/MiniSection";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <TopMiniSection />
      <Header />
      <Outlet />
    </>
  );
}

export default HomeLayout;
