import {Router} from 'express';
import middlewares from '../middlewares';
import controllers from '../controllers';

const router=Router()


router.get("/:model",middlewares.modelValidation,controllers.getModel)

router.get("/:model/:id",middlewares.modelValidation,controllers.getModelId)

router.post("/:model",middlewares.modelValidation,controllers.postModel)


export default router