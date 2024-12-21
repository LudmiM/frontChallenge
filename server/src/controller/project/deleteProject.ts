import Project from '../../database/models/Project';
import { Response, Request } from 'express'

const deleteProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(parseInt(id));
        if (!project) {
            res.status(404).json({ message: 'Proyecto no encontrado' });
            return
        }

        await project.destroy();

        res.status(201).json({
            message: 'Project created successfully!',
            status: 'true'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
            error: error
        });
    }
};

export default deleteProject;