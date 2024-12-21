import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./header";

const Navbar = () => {
  return (
    <>
    <Header/>
    <div>
      <Outlet />
    </div>
    <ToastContainer />
   </>
  );
};

export default Navbar;
