FROM cypress/included:6.5.0

RUN mkdir /app
WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm install
CMD npx cypress run
