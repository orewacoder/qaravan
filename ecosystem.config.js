module.exports = {
  apps: [
    {
      name: 'qaravan',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/qaravan',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/qaravan-error.log',
      out_file: '/var/log/pm2/qaravan-out.log',
      log_file: '/var/log/pm2/qaravan-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
}; 