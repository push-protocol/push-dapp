const { spawn } = require('child_process');

// Adjust the path to your actual start script or command
const child = spawn('node', ['--preserve-symlinks', 'node_modules/react-app-rewired/scripts/start.js'], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', function (code, signal) {
  console.log('Child process exited with code ' + code + ' and signal ' + signal);
});
