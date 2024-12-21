import { VscArrowLeft } from "react-icons/vsc";

interface NavFormsProps {
  titleForm: string;
}

const NavForms: React.FC<NavFormsProps> = ({ titleForm }) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 p-4 w-full generic-flex mb-10">
      <a href="/" className="text-xs generic-flex">
        <VscArrowLeft/> Back
      </a>
      <p className="text-lg font-semibold ml-5">{titleForm}</p>
    </div>
  );
};

export default NavForms;
