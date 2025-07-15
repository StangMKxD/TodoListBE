import express from 'express';
import  { create, list, update, remove }  from '../controllers/todo'
const router = express.Router();



router.get('/todo', list);
router.post('/todo', create);
router.put('/todo/:id', update);
router.delete('/todo/:id', remove);

export default router;