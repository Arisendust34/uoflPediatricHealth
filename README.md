# uoflPediatricHealth, AKA "UEval"
Uofl Fall 2022 Capstone Project  
_Started by:_  
Julian Lewis  
Michael Martin  
Blien Tella  

# Overview
This project aims to create a system that will keep track of schedules of employees. When a preceptor's (supervisor) and student's schedule overlap, the system should then push out a link to an evaluation form to the preceptor at the end of their shift.

As of writing, only parts of the front-end have been implmeneted, which is what is in this repository. It still needs a backend framework to maintin things like saving and retreiving employee schedules. Popular backend frameworks that are Typescript-based include NestJS, Loopback, or Sail.js. The backend would also need to integrate with Firebase, which is the service we were planning to store our data in.

For the front-end, this Angular web app was created. Notable packages added to it are: @angular/fire, @ng-bootstrap, angular-calendar (plus dependencies). Full list of packages are listed in packages.json.

# Getting Started with Development
To get started with a development environment of this project, a few things will need to be set up first: NVM + npm, Git, and Angular-CLI.

First, you'll need to get npm/node.js. [See info here,](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) but the official instructions strongly recommend getting nvm first. For Windows, I used [NVM for Windows, and ran the "setup.exe" installation file](https://github.com/coreybutler/nvm-windows/releases) as provided.

If you don't have it already, then also grab the latest version of [Git](https://git-scm.com/downloads). The standalone Windows installer worked well enough for me, using all the default options. Then, clone the project `git clone [repourlhere.git]`. Open up a terminal and change directory to the cloned project, and be sure to set your Git name and email `git config user.name "FIRSTNAME LASTNAME"` `git config user.email "EMAIL@EXAMPLE.COM"`.

Now we'll set up npm, then node.js, then everything else. Assuming you have NVM installed, get the LTS version of npm by running `nvm install lts`, then `nvm use lts`. While you're within the cloned project folder, we'll get all the dependencies for the project by running `npm install`. This will check our packages.json file for all the packages (and versions) that the project uses, and will automatically install them to the project folder as necessary. We still need angular itself, and we get that by globally installing "angular-cli". To do that, run `npm install -g @angular/cli`. After that is done, you should have access to the "ng" command in your terminal, which will be used to compile and test this project, as well as make new components.

If all of the previous steps were followed, you should be able to run `ng serve` in the terminal while inside the project folder. It should print out "√ Compiled successfully", as well as a URL you can open in your browser to view the web app. You may get a warning about your Angular-CLI version being mismatched from the project's Angular-CLI version. It likely won't result in issues, but you can either find a way to uninstall your current global Angular-CLI and reinstall the specific version used by the project, or you can update the Angular-CLI version used by the project and deal with the inevitable fallout that entails.

For actual development work on this project, I recommend using [VS Code](https://code.visualstudio.com/). Be sure to grab the "Angular Essentials" extension, and optionally the "Nx Console" extension (helpful for generating Angular components). If you are new to working with Angular, I found this [brief tutorial video by Fireship](https://www.youtube.com/watch?v=G0bBLvWXBvc) to be helpful for understanding the basics.
