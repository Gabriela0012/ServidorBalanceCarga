import express from 'express';
import randomsRouter from './routes/randoms.router.js'
import visitasRouter from './routes/visitas.router.js'
import os from 'os';
import cluster from 'cluster';


const CPUs = os.cpus().length
const app = express();
const PORT = process.env.PORT || 8080



if(cluster.isPrimary){
  console.log(`Primary process with ${process.pid} is running `);
  
  for(let i=0;i<CPUs;i++){
    cluster.fork();

  }
  cluster.on('exit',worker=>{
    console.log(`Exit El proceso wordkler con pid ${worker.process.pid}`)
    
  })
  
}
else{
  
  app.listen(8080,()=>{})
  console.log(`worker process with ${process.pid} started`)
}


app.get('/', (req, res) => {
  res.send(`Petición tomada por ${process.pid} en el puerto ${PORT}`)
})


app.listen(PORT, ()=>console.log(`listening ${PORT}`))


app.use('/api/randoms',randomsRouter);
app.use('/api/visitas',visitasRouter);
//systemctl status nginx
//nginx -t    test ok