import NavForms from '../Layout/navForms'
import FormCreateEditProject from '../components/Form/projectCreateEdit'
import editProjectApi from '../utils/fetch/editProject'
import getProjectApi from '../utils/fetch/getProject'
import { toast } from 'react-toastify';
import {ProjectDataForm} from '../../enums/project';

export default async function EditProjects(id:number) {
  const data = await getProjectApi(id)

  const handleSubmit = async (data: ProjectDataForm) => {
    try {
      await editProjectApi(id,data);
      toast.success("¡Se creo con exito el proyecto!");
    } catch (error) {
      toast.error("¡Ocurrió un error!");
      console.log('error '+error)
    }
  };
  return (
    <div className='w-full flex flex-col items-center'>
      <NavForms titleForm='Edit Project' />
      <div className="w-full max-w-5xl">
        <FormCreateEditProject onSubmit={handleSubmit} initialData={data}/>
      </div>
    </div>
  )
}
