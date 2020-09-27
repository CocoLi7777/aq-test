# REAL-TIME AQI-Index APP

## Content

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Details](#details)
  - [Highlights](#highlights)
  - [What's still going on...](#what's-still-going-on...)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Running locally](#running-locally)
- [One highlight when running locally](#one-highlight-when-running-locally)
  ​

## Introduction

This project is to build an AQI information display board and provide the function of searching AQI information all around the world.

The tasks are:

1. Consume an API from the community and retrieve the AQI data for local and cities being searched.
2. Get the nearest station close to the user location, based on the IP adress information. Display the local monitoring station, measurement time infomration, real-time AQI and webpage associated to the the monitoring station.
3. Get the real-time AQI for the searched station, diplay the name of the city, time and AQI.
4. Diplay all names and AQI of monitoring stations associated to the the searched city.

## Live Demo

This application is deployed to Heroku, here is the [link](https://ap-visual.herokuapp.com//)
​

## Details:

​

### Highlights

- Consume 3 API for retrieving data for city feed, gelocalized feed(ip based) and all stations.
- Getting data from third-party API service and updating application automatically.
- Using [React](https://reactjs.org/) to create reusable components.
- Responsive UI using [Material-UI](https://material-ui.com/), mobile friendly.
- Spinner solution used when data loading.
- Alert solution used when improper searching.
- Setup Continuous Deployment using Github and [Heroku](https://www.heroku.com/), having continuously improvement to the application.
- Using cors-anywhere solution to enable cross-origin requests.

### What's still going on...

- I'm doing end to end testing using Cypress.
- Currently the local AQI information showed improperly, because I use cors-anywhere service. I'm searching alternative solution.

## Prerequisites

NPM - Install NPM for all dependencies both in server and client.

## Quick Start

Install dependencies for server:
npm install

## Running locally

Run the client:
npm start

## One highlight when running locally

Go to config.js and uncomment the second API_URL and comment the first API_URL. It can get local AQI information.
