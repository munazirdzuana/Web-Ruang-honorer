import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updatetimesaldo
} from "../controllers/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser,  getUsers);
router.get('/users/:id', verifyUser,  getUserById);
router.post('/users', createUser);
router.patch('/users/:id', verifyUser, updateUser);
router.delete('/users/:id', verifyUser, deleteUser);
router.patch('/timesaldo/:id', verifyUser, updatetimesaldo);

export default router;