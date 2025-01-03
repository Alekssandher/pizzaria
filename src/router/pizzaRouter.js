const router= require("express").Router()
const pizzaController= require("../controller/pizzaController")
const authMiddleware= require("../middleware/usuarioMiddleware")
const {validaPizza,validaIdParams,valida_IdBody}= require("../middleware/validacaoMiddleware")
const paginacao= require("../middleware/paginacaoMiddleware")

router.get("/find/:id",validaIdParams,authMiddleware,pizzaController.findByIdPizzaController)
router.get("/findAll",paginacao,authMiddleware,pizzaController.findAllPizzasController)

router.post("/create",authMiddleware,validaPizza,pizzaController.createPizzaController)
router.post("/addCategoria/:id",authMiddleware,validaIdParams,valida_IdBody,pizzaController.addCategoriaPizzaController)

router.put("/update/:id",validaIdParams,authMiddleware,validaPizza,pizzaController.updatePizzaController)

router.delete("/delete/:id",validaIdParams,authMiddleware,pizzaController.deletePizzaController)
router.delete("/removeCategoria/:id",validaIdParams,authMiddleware,pizzaController.removeCategoriaPizzaController)

module.exports= router