import path from "path"

const APP_ROOT = __dirname + '/../..';

export const globals = {
    APP_PORT: process.env.PORT || 8081,
    APP_ROOT,
    DATA_SAMPLES_PATH: path.join(APP_ROOT, 'data_samples'),
    PUBLIC_ROOT: APP_ROOT + '/public',
    CONTRACTS_ROOT: APP_ROOT +'/src/contracts',
    DEBOTMINTING: APP_ROOT +'/src/debot/NftDebot',
    DEB: APP_ROOT +'/src/debot',
    BASE_PATH: process.env.BASE_PATH || '',
    SETTINGS_PATH: path.join(APP_ROOT, 'src', 'config'),
    TEMP_PATH:  path.join(APP_ROOT, 'temp'),
    CONTRACTS_PATH: path.join(APP_ROOT, 'src', 'contracts'),
    IMAGE_PATH:  path.join(APP_ROOT, 'image_generator')
};
