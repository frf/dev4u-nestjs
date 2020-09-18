FROM node:12

# diretório alvo
WORKDIR /usr/src/app

COPY . .

# copiar o projeto e instalar os pacotes com o npm
RUN yarn install

RUN yarn build

# abrindo a porta 3000
EXPOSE 3000

# inicializando a API
CMD [ "yarn","run", "start" ]