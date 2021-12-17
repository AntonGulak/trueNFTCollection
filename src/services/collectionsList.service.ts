import { globals } from '../config/globals';
import fs from 'fs';
import path from 'path';


export class GetCollectionsList {

    async getCollectionsList(): Promise<string[]> {

        let collectionDirList = fs.readdirSync(globals.TEMP_PATH, {withFileTypes: true}).filter((fileOrDir) => {
            return fileOrDir.isDirectory()
          })
        let collectionsInfoList : string[] = []
        for (const Dir of collectionDirList) {
                const inputRootParamsFile = path.resolve(globals.TEMP_PATH, Dir.name,  'inputRootParameters.json');
                let collectionInfoJson = await JSON.parse(inputRootParamsFile).toString();
                collectionsInfoList.push(collectionInfoJson);
        }
        return collectionsInfoList;
    }
}