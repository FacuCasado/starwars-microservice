const {Router} = require("express");
const controllers = require("../controllers/index")
const middlewares = require("../middlewares")

const router=Router()

router.get("/",controllers.getCharacters)
router.get("/:id", controllers.getIdCharacter)
router.post("/", middlewares.characterValidation, controllers.postCharacters)

module.exports = router