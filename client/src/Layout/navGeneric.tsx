import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./header";
import Footer from "./footer";

const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Navbar;
