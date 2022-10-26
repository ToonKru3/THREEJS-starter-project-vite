# THREEJS-starter-project-vite
 
**Threejs + Vite Vanilla js** for starter pack who don't want to worry about how to setup things module and install plugin 
### First Install Package
```javascript
npm install   // Install all package
```

### Second Start Development
```javascript
npm run dev   // Open your local host server
```

### For WSL2 Ubuntu HotLoad Problems 2 ways to fix

#### 1. Transfer you project from Window Filsystem" to "Linux FileSystem" and then try to run `npm run dev` it again
#### 2. Create file `vite.config.js` and then save and run `npm run dev` it again reason it's because of [SubSystem for Linux (WSL2) Limitation](https://vitejs.dev/config/server-options.html#server-watch)
```javascript
import { defineConfig } from 'vite'

export default defineConfig({
    root: './src',
    publicDir: '../public',
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    server: {
        watch: {
            usePolling: true     // Change it's to true 
        }
    }
})
```
### Support 
1. WSL2 Linux Subsystem
2. Windows OS
3. Mac

### Plugins
1. [Tweakpane](https://cocopon.github.io/tweakpane/)
2. [vite-plugin-glsl](https://www.npmjs.com/package/vite-plugin-glsl)
3. [Gsap](https://greensock.com/)
