import { Account } from '@tonclient/appkit';
import { TonClient, signerKeys, ResultOfDecodeTvc } from '@tonclient/core';
import { libNode } from '@tonclient/lib-node';
import fs from 'fs';
import path from 'path';
import { walletSettings } from '../config/walletKey';
import { DeployContractService } from './deployContract.service';
import { globals } from '../config/globals';

TonClient.useBinaryLibrary(libNode);

export class DeployDebotService {

    private readonly deployContractService: DeployContractService;
    constructor() {

        this.deployContractService = new DeployContractService;

    }


    async deployDebot() : Promise<string> {
        let nftDebotAccount = await this.deployContractService.createAccount("NftDebot", globals.DEBOT);
        console.log("NftDebot account created");
        let address = await this.deployDebotAccount(nftDebotAccount);
        await this.setAbi(nftDebotAccount);
        return address;
    }
    

    private async deployDebotAccount(
        nftDebotAccount: Account, 
        ) : Promise<string> {

        let address: string = '';

         try {
            await this.deployContractService.deployContract({
                account: nftDebotAccount, 
                initInput: {},
                useGiver: true,
            });
            address = await nftDebotAccount.getAddress();
            console.log("NftDebot contract was deployed at address: " + address);
        } catch(err) {
            console.log(err);
        }
        return address;
    }


    private async setAbi(
        debotAccount: Account, 
        ) : Promise<void> {

        let debotAddress = await debotAccount.getAddress();
        let abiDebot = fs.readFileSync(path.resolve(globals.DEBOT, 'NftDebot.abi.json'), "utf8");
      
        const buf = Buffer.from(abiDebot, "ascii");
        const abi = buf.toString("hex");

        console.log(abiDebot);
        console.log(abi);
        const localGiverContract = {
            abi: await JSON.parse(walletSettings.ABI),
            tvc: walletSettings.TVC,
        };

        const client = debotAccount.client;
        const signer = signerKeys(walletSettings.KEYS); 

        const localGiverAccount = new Account(localGiverContract, {
            address: walletSettings.ADDRESS, 
            signer,
            client });
 
        try {
            const payload = (await client.abi.encode_message_body({
                abi: debotAccount.abi,
                signer: debotAccount.signer,
                is_internal: true,
                call_set: {
                    function_name: "setABI",
                    input: {
                        dabi: abi
                    },
                }
            })).body;

            await localGiverAccount.run("sendTransaction", {
                dest: debotAddress,
                value: 600_000_000,
                flags: 3,
                bounce: true,
                payload: payload,
            });

            console.log("Abi was setted.");
        } catch(err) {
            console.log(err);
        }
    }
}