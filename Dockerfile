FROM node:18

WORKDIR /app

RUN npm install -g @angular/cli
RUN ng new wisercat

WORKDIR /app/wisercat

COPY . .
RUN npm install --force
RUN npm run build

WORKDIR /app/wisercat/server
RUN npm install

CMD ["npm", "start"]
