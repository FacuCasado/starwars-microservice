const {Router} = require("express")
const controller = require("../controllers/index")
const middleware = require("../middlewares")

const router=Router();

router.get("/", controller.getFilms)
router.post("/",middleware.filmValidation, controller.postFilms)

module.exports = router