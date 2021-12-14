import express from 'express';
import { DeployDebotService } from '../services/deployDebot.service';

const router = express.Router();

router.get("/", (req, res) => {
    let debotService = new DeployDebotService();
    debotService.deployDebot();
    res.render("debot")
})
 
export { router as debotRouter }