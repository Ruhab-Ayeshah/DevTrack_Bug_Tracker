import express from "express";
import {getIssues, getIssueById, createIssue, updateIssue, assignIssue, deleteIssue, getIssueHistory} from "../controllers/issueController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";


const router = express.Router();

router.get("/", authMiddleware, getIssues);

router.post("/", authMiddleware, createIssue);
 
router.get("/:id", authMiddleware, getIssueById);
 
router.patch("/:id", authMiddleware, updateIssue);
 

router.patch("/:id/assign", authMiddleware, roleMiddleware(["admin", "project_manager"]), assignIssue);
 
router.delete("/:id", authMiddleware, deleteIssue);
 
router.get("/:id/history", authMiddleware, getIssueHistory);
 
export default router;