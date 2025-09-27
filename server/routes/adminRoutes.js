import express from 'express'
import { adminLogin, approveCommnetById, deleteCommnetById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js'
import auth from '../middleware/auth.js'

const adminRouter=express.Router()

adminRouter.post('/login',adminLogin)
adminRouter.get('/comments',auth,getAllComments)
adminRouter.get('/blogs',auth,getAllBlogsAdmin)
adminRouter.post('/delete-comment',auth,deleteCommnetById)
adminRouter.post('/aprove-comment',auth,approveCommnetById)
adminRouter.post('/dashboard',auth,getDashboard)

export default adminRouter