import { useLocation, Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <MainNavigation />
      <h1 style={{ textAlign: "center" }}>ROOT</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}
