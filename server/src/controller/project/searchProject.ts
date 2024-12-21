import { Op } from '@sequelize/core';
import Project from '../../database/models/Project';
import { Response, Request } from 'express';

const searchProjects = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;

        const data = await Project.findAll({
            where: {
                name: {
                    [Op.like]: `%${searchTerm}%`,
                }
            }
        });

        res.status(200).json({
            data: data || [], 
            status: 'true',
        });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error en el servidor',
            error: error,
        });
    }
};

export default searchProjects;