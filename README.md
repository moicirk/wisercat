# Wisercat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1 and NodeJS 18.
Get from GIT the source:

```
git clone https://github.com/moicirk/wisercat.git .
cd wisercat/
```

To run the project you have 2 options:

### a) On a local machine
Go to the project and install `ng` library, that we are going to use further
```
npm install -g @angular/cli
```

and install all needed libraries (with `--force` option), build the project.
```
npm install --force
npm run build
```

Then go to the `server` folder, install libraries and launch.
```
npm install 
npm start
```

### b) Docker
Build an image from the file in the project
```
docker build -t moicirk/wisercat .
```

and launch.
```
docker run -p 4000:4000 -d moicirk/wisercat
```

You can change 4000 port (`-p ${port}:4000`) or container name (`moicirk/wisercat`), or run as is.
