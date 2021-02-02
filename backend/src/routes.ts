import {Router} from 'express'
import { addTodo, deleteTodo, updateTodo, getTodos } from './controllers/todo/index'

const router: Router = Router()

router.get("/todos", getTodos)


router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router