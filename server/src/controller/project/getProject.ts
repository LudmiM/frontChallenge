import Project from '../../database/models/Project';
import {Response, Request} from 'express'

const getProjects = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const data= await Project.findByPk(parseInt(id));

    res.status(201).json({
      data:data,
      status:'true'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error',
      error: error
    });
  }
};

export default getProjects ;