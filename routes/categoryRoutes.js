import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCatgeoryController } from './../controllers/categoryController.js';
const router = express.Router()

//routes
//create Category
router.post('/create-category',
requireSignIn,
isAdmin,
createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCatgeoryController)

//getAll category
router.get('/get-category',categoryController)
export default router;

//single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)