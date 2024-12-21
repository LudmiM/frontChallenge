import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
    <nav className="px-10 py-4 bg-neutral-50">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-lg font-semibold">
            Logo
          </a>
        </li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
   </>
  );
};

export default Navbar;
