import express from 'express';
import { UserController } from './user.controller';

const route = express.Router();

route.post('/createUser', UserController.createUser);
route.get('/', UserController.getUser);
route.get('/:id', UserController.getUserById);

export const UserRoute = route;
