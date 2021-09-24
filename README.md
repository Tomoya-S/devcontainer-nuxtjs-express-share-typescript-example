# devcontainer-nuxtjs-express-share-typescript-example

# Overview
This project uses the devcontainer feature to implement frontend and backend typescript sharing, declare merging, and typescript nodejs debugging.  
This repository is a simple implementation of the parts that are easy to trip over when building a typescript environment.  
I will leave this for my own development in the future.

# Demo
The typescript placed in the shared folder can be referenced from both frontend and backend.  
By combining devcontainer and code-workspace, you can develop shared folders without feeling uncomfortable.  
![image](https://user-images.githubusercontent.com/25850838/134662328-b3037635-a9bc-4065-827d-04809ec660bc.png) ![image](https://user-images.githubusercontent.com/25850838/134662373-85d335c5-1405-4c4b-ac03-c57c4469ddf0.png)  
You can debug nodejs implemented in Typescript.  
![image](https://user-images.githubusercontent.com/25850838/134662805-dfeef1e8-cce6-45b1-9637-078e0b9cc650.png)  
There is an example of declare merging that works fine.  
![image](https://user-images.githubusercontent.com/25850838/134662932-9859e0f2-aaff-454c-ac94-badefcb16e59.png)  

# Requirement
Docker  
Visual Studio Code  
Remote Container Extension  

# Installation
Use the devcontainer feature of visual studio code to access the Docker container.
1. Press the green button on the bottom left  
![image](https://user-images.githubusercontent.com/25850838/134660891-76aa6c0c-6ab4-4cd6-89d3-60d71766211f.png)  
2. Click `Open Folder in Container...` Click on  
![image](https://user-images.githubusercontent.com/25850838/134660855-0285663e-19f3-411e-8c81-b0aae6bdce3c.png)  
3. select the `vscode/frontend` or `vscode/backend` folder.   
4. After automatically creating a Docker container for the specified environment, vscode will start with access to the container.  

# Usage
frontend
```javascript
npm run dev
```

backend
```javascript
npm run dev // or F5 key
```

# Note
Points to note in Typescript  
1. If you want to do Declare Merging, you need to write it as a module.  
   If you create a type definition with `d.ts`, it will overwrite all the specified libraries and destroy the type.  
   Therefore, `import` or `export {}` should be described as a module, and interface merging can be done.
2. That you need to use `tsconfig-paths/register` to use typescript paths in nodejs.
3. When importing type definitions in nuxtjs, consider using `import type`  

I'll make a note of any others I find.

# Author
* Tomoya-S

# License
[MIT license](https://en.wikipedia.org/wiki/MIT_License).
