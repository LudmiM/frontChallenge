import {Router} from 'express';
import project from './project.routes';

const router = Router();

router
    .use('/project', project)
    
export default router;