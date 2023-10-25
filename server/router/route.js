import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.createQuestions)

  router.route("/questions/:id")
  .delete(controller.dropAllQuestions);
router
  .route("/result")
  .get(controller.getAllResult)
  .post(controller.storeAllResult)
  .delete(controller.dropAllResult);

router.route("/user").post(controller.createUser)
router.route("/user").get(controller.getUser)

router.route("/user/:id").delete(controller.dropAllUser)

router.route("/register").post(controller.registeruser)
router.route('/login').post(controller.login);

export default router;
