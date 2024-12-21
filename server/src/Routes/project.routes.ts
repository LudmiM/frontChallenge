import {Router} from 'express';
import allProjects from '../controller/project/allProjects';
import getProjects from '../controller/project/getProject';
import addProject from '../controller/project/addProject';
import editProject from '../controller/project/editProject';
import deleteProject from '../controller/project/deleteProject';
import searchProjects from '../controller/project/searchProject';

const router = Router();

router
    .get('/',allProjects)
    .get('/search',searchProjects)
    .get('/:id', getProjects)
    .post('/', addProject)
    .patch('/:id',editProject)
    .delete('/:id',deleteProject)

export default router;