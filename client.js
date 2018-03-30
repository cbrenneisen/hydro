/**
 * Created by carlos.brenneisen on 5/22/17.
 */

const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);