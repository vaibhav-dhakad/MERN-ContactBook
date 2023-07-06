import express from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/user-controller.js";
import { login, signup } from "../controller/auth-controller.js";


const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

router.post('/signup', signup);
router.post('/login', login);

export default router;