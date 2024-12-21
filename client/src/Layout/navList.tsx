import { Link } from "react-router";

const NavList = () => {
  return (
    <div className="w-full flex justify-between px-10 py-4 mb-10 bg-neutral-50 border border-neutral-200">
      <p className="text-2xl font-semibold">My projects</p>
      <Link to="/project/create">
        <button type="submit" className='button-custom'>
          + Add project
        </button>
      </Link>
    </div>
  );
};

export default NavList;
