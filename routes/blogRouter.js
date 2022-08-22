import express from 'express';
import { getAllBlog, addBlog, updateBlog, getById, deleteBlog, getBlogByUserId} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlog);
router.post('/add', addBlog);
router.patch('/update/:id', updateBlog);
router.get('/:id', getById);
router.delete('/:id', deleteBlog);
router.get('/user/:id', getBlogByUserId)

export default router;