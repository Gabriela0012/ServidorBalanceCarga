module.exports = {
  apps : [
    {
      name   : "cluster",
      script : "src/app.js",
      env:{
        PORT: 8082
      },
      exec_mode:"cluster",
      instances:4,
      watch:true,
    },
    {
      name   : "cluster",
      script : "src/app.js",
      env:{
        PORT: 8083
      },
      exec_mode:"cluster",
      instances:4,
      watch:true,
    },
    {
      name   : "cluster",
      script : "src/app.js",
      env:{
        PORT: 8084
      },
      exec_mode:"cluster",
      instances:4,
      watch:true,
    },
    {
      name   : "cluster",
      script : "src/app.js",
      env:{
        PORT: 8085
      },
      exec_mode:"cluster",
      instances:4,
      watch:true,
    },

  ]
}
