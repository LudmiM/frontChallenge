import {ProjectDataForm} from '../../enums/project';
import NavForms from '../Layout/navForms'
import FormCreateEditProject from '../components/Form/projectCreateEdit'
import createProjectApi from '../utils/fetch/addProject'
import { toast } from 'react-toastify';

export default function CreateProjects() {
  const handleSubmit = async (data: ProjectDataForm) => {
    try {
      await createProjectApi(data);
      toast.success("¡Se creo con exito el projexto!");
    } catch (error) {
      toast.error("¡Ocurrió un error!");
      console.log('error '+error)
    }
  };
  return (
    <div className='w-full flex flex-col items-center'>
      <NavForms titleForm='Add project' />
      <div className="w-full max-w-5xl">
        <FormCreateEditProject onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
