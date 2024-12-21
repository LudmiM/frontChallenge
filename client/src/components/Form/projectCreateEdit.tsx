import React from 'react';
import { TaskStatusOptions } from '../../../enums/taskStatus';
import {ProjectDataForm} from './../../../enums/project'
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormCreateEditProjectProps {
  initialData?: ProjectDataForm;
  onSubmit: (data: ProjectDataForm) => void;
}

const FormCreateEditProject: React.FC<FormCreateEditProjectProps> = ({ initialData, onSubmit}) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectDataForm>({
    defaultValues: initialData || {
      name: '',
      description: '',
      manager: '',
      assignedTo: '',
      status: '',
    },
  });

  const onSubmitHandler: SubmitHandler<ProjectDataForm> = (data) => {
    onSubmit(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='bg-neutral-50 p-5'>
      <div className='div-form-custom'>
        <label htmlFor="name">Name</label>
        <input
          {...register('name', { required: 'El nombre del proyecto es necesario' })} 
          type="text"
          id="name"
          className="input-custom-form"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="description">Description</label>
        <input
          {...register('description', { required: 'La descripcion del proyecto es necesaria' })} 
          type="text"
          id="description"
          name="description"
          className='input-custom-form'
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="manager">Manager</label>
        <input
        {...register('manager', { required: 'Debe elegit un manager' })} 
          type="text"
          id="manager"
          name="manager"
          className='input-custom-form'
        />
        {errors.manager && <p className="text-red-500">{errors.manager.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="assignedTo">Assigned To</label>
        <input
          {...register('assignedTo', { required: 'Debe asignar la tarea a una persona' })} 
          type="text"
          id="assignedTo"
          name="assignedTo"
          className='input-custom-form'
        />
        {errors.assignedTo && <p className="text-red-500">{errors.assignedTo.message}</p>}
      </div>

      <div className='div-form-custom'>
        <label htmlFor="status">Status</label>
        <select
          {...register('status', { required: 'El estatus es necesario' })} 
          id="status"
          name="status"
          className="input-custom-form"
        >

          <option value="">Select status</option>
          {TaskStatusOptions.map((status) => (
            <option key={status.label} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
      </div>

      <button type="submit" className='button-custom'>
        {initialData ? ' Save changes' : 'Create project'}
      </button>
    </form>
  );
};

export default FormCreateEditProject;
