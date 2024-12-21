import React from 'react';
import DropdownMenu from './menuOpen';
import {ProjectData} from '../../enums/project';

interface ListProjectProps {
  datesProject: ProjectData[];
}

const ListProject: React.FC<ListProjectProps> = (datesProject) => {

  return (
    <>
      <div className='hidden sm:flex flex-col items-center'>
        <table className="bg-neutral-50 shadow-xl border-collapse border border-gray-200 w-11/12 rounded-lg">
          <thead>
            <tr className='hidden lg:table-row'>
              <th className="table-th pl-5">Project Info</th>
              <th className="table-th">Project Manager</th>
              <th className="table-th">Assigned to</th>
              <th className="table-th">Status</th>
              <th className="table-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {datesProject.datesProject.map((date) => (
              <tr key={date.id}>
                <td className="table-td pl-5">
                  <div className="block">{date.name}</div>
                  <div className="text-neutral-400">{date.date}</div>
                </td>
                <td className="hidden-movil-table table-td"><div className='generic-flex'><img src={`/${date.managerImg || 'sinImage.png'}`}  className='imagen-generic' alt="Manager img" /> {date.manager}</div></td>
                <td className="table-td"><div className='generic-flex'><img  src={`/${date.assignedToImg || 'imagenPerfil.jpeg'}`}  className="imagen-generic" alt="Assigned To img" />{date.assignedTo}</div></td>
                <td className="hidden-movil-table table-td"><p className='text-neutral-600 border border-neutral-300 px-1 inline-block'>{date.status}</p></td>
                <td className="table-td"><DropdownMenu  id={date.id}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {datesProject.datesProject.map((date) => (
      <div className="sm:hidden space-y-4">
        <div className="bg-white p-4 border rounded-lg shadow-sm">
          <p className="font-medium">{date.name}</p>
          <p className="text-sm text-gray-500">09/09/2020 10:30 am</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <img className="h-8 w-8 rounded-full" src={`/${date.assignedToImg || 'imagenPerfil.jpeg'}`}  alt="Walt Cosani" />
              <span className="ml-2 text-sm">{date.assignedTo}</span>
            </div>
            <button><DropdownMenu id={date.id}/></button>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default ListProject;
