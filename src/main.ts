import { Application } from "pixi.js";
import './style.css'

(async () => {
  const app = new Application()

  
  await app.init({ resizeTo: window })
  app.canvas.style.position = 'absolute'
  
  document.body.appendChild(app.canvas)
})() 