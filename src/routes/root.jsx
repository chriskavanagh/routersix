import { useLocation, Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
