import NavForms from '../Layout/navForms'
import FormCreateEditProject from '../components/Form/projectCreateEdit'
import editProjectApi from '../utils/fetch/editProject'
import getProjectApi from '../utils/fetch/getProject'
import { toast, ToastContainer } from 'react-toastify';
import {ProjectData, ProjectDataForm} from '../../enums/project';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function EditProjects() {
  const { id } = useParams<{ id: string }>();
  const [projectData, setProjectData] = useState<ProjectData | undefined>(undefined);


  useEffect(() => {
    const fetchProjectData = async () => {
      if (id) {
        try {
          const data = await getProjectApi(parseInt(id))
          setProjectData(data.data);
        } catch (error) {
          console.error("Error al obtener los datos del proyecto:", error);
        }
      }
    };

    fetchProjectData();
  }, [id]);
  const handleSubmit = async (data: ProjectDataForm) => {
    if (!id) {
      toast.error("Proyecto no disponible.");
      return;
    }
    try {
      await editProjectApi(parseInt(id),data);
      toast.success("¡Se actualizo con exito el proyecto!");
    } catch (error) {
      toast.error("¡Ocurrió un error!");
      console.log('error '+error)
    }
  };
  return (
    <div className='w-full flex flex-col items-center'>
      <NavForms titleForm='Edit Project' />
      <div className="w-full max-w-5xl">
        <FormCreateEditProject onSubmit={handleSubmit} initialData={projectData}/>
      </div>
      <ToastContainer />
    </div>
  )
}
