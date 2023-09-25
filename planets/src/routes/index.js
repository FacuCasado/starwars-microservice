const { Router } = require("express");
const controllers = require("../controllers/index")
const middleware = require("../middlewares")
const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id",controllers.getIdPlanet)
router.post("/",middleware.planetValidation, controllers.postPlanets);
router.delete("/:id", controllers.deletePlanet)

module.exports = router;