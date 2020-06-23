import {Request, Response, Router} from 'express';

import UserController from "./controller/UserController";

const routes = Router();

routes.get('/users', UserController.index);
    
routes.post('/users/create', UserController.create);
routes.put('/users/:id', UserController.update);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);

routes.get('/', (req: Request, res: Response) => {
    return res.send('Working perfectly');
})

export default routes;