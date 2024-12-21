import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import getSearchProjectApi from "../utils/fetch/searchNameProject";
import { ProjectData } from "../../enums/project";

const NavList = ({ setProjects }: { setProjects: React.Dispatch<React.SetStateAction<ProjectData[]>> }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error("Por favor ingresa un término de búsqueda.");
      return;
    }

    try {
      const response = await getSearchProjectApi(searchTerm); 
      setProjects(response.data);  
      toast.success("Proyectos encontrados.");
    } catch (error) {
      toast.error("Error al buscar proyectos.");
      console.error("Error de búsqueda:", error);
    }
  };

  return (
    <div className="w-full flex justify-between px-10 py-4 mb-10 bg-neutral-50 border border-neutral-200">
      <p className="text-2xl font-semibold">My projects</p>
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Busco…"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border px-4 py-2 rounded"
        />
        <button onClick={handleSearch} className="ml-2 button-custom">
          Search
        </button>
      </div>

      <Link to="/project/create">
        <button type="submit" className="button-custom">
          + Add project
        </button>
      </Link>
    </div>
  );
};

export default NavList;
