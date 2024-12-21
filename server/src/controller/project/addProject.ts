import Project from '../../database/models/Project';
import {Response, Request} from 'express'

const addProject = async (req:Request, res:Response) => {
  try {
    const { name, description, manager, assignedTo, status, } = req.body;

    await Project.create({
      name,
      description,
      manager,
      assignedTo,
      status,
    });

    res.status(201).json({
      message: 'Project created successfully!',
      ok:'true'
    });
    return ;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error',
      ok:'false',
      error: error
    });
  }
};

export default addProject ;
