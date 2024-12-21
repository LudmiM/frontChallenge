import { useState } from 'react';
import { VscKebabVertical } from "react-icons/vsc";
import { BiTrashAlt } from "react-icons/bi";
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from 'react-router';

interface DropdownMenuProps {
  id: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="w-12 h-14">
        <VscKebabVertical size={18} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-neutral-50 shadow-lg rounded-md z-10">
          <ul className="p-2">
            <Link to={`/project/edit/${id}`}><li className="li-dropdown-menu"><RiEditBoxLine title='Edit'/><span className="ml-2" title="Edit">Edit</span></li></Link>
            <li className="li-dropdown-menu"><BiTrashAlt title='Delete'/><span className="ml-2" title="Delete">Delete</span></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
