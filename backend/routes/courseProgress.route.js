
import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCourseProgress, markAsCompleted, markAsInCompleted, updateLectureProgress } from "../controllers/courseProgress.controller.js";

const router = express.Router()

router.route("/:courseId").get(isAuthenticated, getCourseProgress);
router.route("/:courseId/lecture/:lectureId/view").post(isAuthenticated, updateLectureProgress) // postman se error cannot post;
router.route("/:courseId/complete").post(isAuthenticated, markAsCompleted) // postman se error cannot post;
router.route("/:courseId/incomplete").post(isAuthenticated, markAsInCompleted) // postman se error cannot post;

export default router;
