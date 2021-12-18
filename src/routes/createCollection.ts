import express from 'express';
import { NFTCollectionJSON } from '../services/deployForm.service';

const router = express.Router();

router.get("/", function(req, res, next) {
    res.render("createCollectionForm")
})

router.post("/", async function(req, res, next) {
    const {settings} = await require('../config/settings')
    console.log(settings);
    NFTCollectionJSON.deploy(req.body);
})
  
export {router as createCollectionRouter};
  