import ListProject from '../components/listProjects'
import NavList from '../Layout/navList'
import getAllProjectApi from '../utils/fetch/listProjects'
import { useEffect, useState } from 'react';
import {ProjectData} from '../../enums/project';

export default function PageListProjects (){
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjectApi();
        setProjects(data.data); 
      } catch (err) {
        console.log(err)
      }
    };

    fetchProjects();
  }, []); 
  
    return (
      <div>
        <NavList setProjects={setProjects} />
        <ListProject datesProject={projects}/>
      </div>
    )
}
