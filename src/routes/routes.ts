import { Router } from "express";
import multer from "multer";
import { uploadXLSX } from "../controllers/xlsxController";
import { BuscarPorNome, BuscarPromotoresGeral, DetalhamentoPromtor } from "../controllers/promotorController";
import { authMiddleware } from "../Middlewares/auth";
import { BuscarUsuarios, buscarUsuariosFeedback, login, register } from "../controllers/authController";
import { criarFeedBack, listarFeedbacksPorPromotor } from "../controllers/feedbackController";


const upload = multer({dest: 'src/uploads'})
const router = Router()

router.post('/usuario/buscar', BuscarUsuarios)
router.get('/promotores', BuscarPromotoresGeral)
router.post('/login', login)
router.post('/upload', upload.single('file'), uploadXLSX)
router.get('/promotor', authMiddleware, BuscarPorNome)
router.post('/register', register)
router.get('/promotores/:id', DetalhamentoPromtor)
router.post('/feedbacks', criarFeedBack)
router.get('/promotores/:id/feedbacks', listarFeedbacksPorPromotor)
router.get('/usuarios', buscarUsuariosFeedback)

export default router