import { FaRegFileCode } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="w-full flex justify-between px-10 py-4 bg-neutral-50 mt-10">
            <p className="generic-flex">
                <a href="https://www.linkedin.com/in/ludmilaml/" className="generic-flex mr-2"><FaLinkedinIn /></a>
                <a href="https://drive.google.com/file/d/1jQkkfvBUHGkADIKRf6XgZQtBfWEma-9e/view?usp=sharing" className="generic-flex"><TbFileCv /></a>
            </p>
            <a href="https://github.com/LudmiM/frontChallenge" className="generic-flex">Code <FaRegFileCode /></a>
        </footer>
    );
};

export default Footer;
