import { globals } from './globals';
import path from "path"


export const image = {
    width: 24, 
    height: 24,
    dirTraitTypes:  path.join(globals.IMAGE_PATH, 'layers/trait_types'),
    dirOutputs:  path.join(globals.IMAGE_PATH, 'outputs'),
    dirBackground:  path.join(globals.IMAGE_PATH, 'layers/background')
};
