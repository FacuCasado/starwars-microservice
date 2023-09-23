import getModel from "./getModel";
import utils from "../utils";
import getModelId from "./getModelId";
import postModel from "./postModel";
const {catchAsync}=utils

export default {
    getModel:catchAsync(getModel),
    getModelId:catchAsync(getModelId),
    postModel:catchAsync(postModel)
}