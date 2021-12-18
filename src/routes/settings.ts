import express from 'express';
import { walletSettings } from '../config/walletKey';
import { networks } from '../config/networks';
import fs from "fs";
import path from "path";
import { globals } from '../config/globals';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("settings", {
        walletSettings: walletSettings,
        networkOptions: networks
    })
})

router.post("/", (req, res) => {
    console.log(req.body)
    let newSettings = { 
                    KEYS :{
                           public: req.body.pubkey,
                           secret: req.body.privatekey
                          },
                    WALLETADDRESS: req.body.walletAddress,
                    NETWORK: req.body.network
                    };            
   const settingsPath = path.join(globals.SETTINGS_PATH, "settings.ts");
   fs.writeFileSync(settingsPath, "export const settings = " + JSON.stringify(newSettings));

})

export { router as settingsRouter }