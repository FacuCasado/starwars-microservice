import {Router} from 'express';
import middlewares from '../middlewares';
import controllers from '../controllers';

const router=Router()

router.use(middlewares.modelValidation)

router.get("/:model", controllers.getModel)

router.get("/:model/:id", controllers.getModelId)

router.post("/:model", controllers.postModel)

router.delete("/:model/:id", controllers.deleteModel)


export default router