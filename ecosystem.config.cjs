module.exports = {
  apps: [
    {
      name: "caixa-dos-devs",
      cwd: "/opt/Caixa_dos_Devs/caixaDosDevs/caixa-dos-devs",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: "3017",
        HOSTNAME: "127.0.0.1"
      },
      autorestart: true,
      restart_delay: 3000
    }
  ]
};
