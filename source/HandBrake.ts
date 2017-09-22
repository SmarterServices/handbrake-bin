import { join } from 'path';
import { Installer } from './Installer';
import { spawnSync } from 'child_process';

let path: string;

switch (process.env.HANDBRAKE_ENV || process.platform) {
    case 'darwin':
        path = join(__dirname, '..', 'bin', 'HandbrakeCLI')
        break
    case 'win32':
        path = join(__dirname, '..', 'bin', 'HandbrakeCLI.exe')
        break
    case 'linux':
        path = spawnSync('which', ['HandBrakeCLI']).stdout.toString().trim()
        break
}

export default path
export { path }
export const HandbrakeCLIPath = path
export function install() {
    return new Installer().setup(process.env.HANDBRAKE_ENV || process.platform);
}
