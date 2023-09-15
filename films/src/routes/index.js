const {Router} = require("express")
const controller = require("../controllers/index")
const middleware = require("../middlewares")

const router=Router();

router.get("/", controller.getFilms)
router.get("/:id",controller.getIdFilm)
router.post("/",middleware.filmValidation, controller.postFilms)

module.exports = router