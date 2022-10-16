# THREEJS-starter-project-vite
 
This **Threejs + Vite Vanilla** js for starter pack who don't want to worry about how to setup things module and install plugin
 
### Install Package
```nodejs
npm install   // to install the package
```

### Start Development
```nodejs
npm run dev   // to open your local host server
```

### For WSL2 Ubuntu HotLoad Problems 2 ways to fix

#### 1. Transfer you project from Window Filsystem" to "Linux FileSystem" and then try to run `npm run dev` it again
#### 2. Create file call `vite.config.js` and then save and `npm run dev` it again reason it's because of https://vitejs.dev/config/server-options.html#server-watch
```javascript
import { defineConfig } from 'vite'
import path from 'path'

// const dirname = path.resolve()

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
