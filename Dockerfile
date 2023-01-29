FROM node:16-alpine

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock

RUN cd /tmp && yarn --pure-lockfile

ADD ./ /src

RUN cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run-script build
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "build/app.js"]