# REAL-TIME AQI BOARD APP

## Content

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Details](#details)
  - [Highlights](#highlights)
  - [End to end Test](#running-test)
  - [New Improvement...](#new-improvement...)
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

## Running test

1. run npm start first and keep the program running

2. npm run test-e2e to lauch the test

[![Test Demo](https://i9.ytimg.com/vi/Br0COHopKNo/mq3.jpg?sqp=CIT5yfsF&rs=AOn4CLBNmUSb0aSoB5lWxAXLk5vSy30tQA)](https://www.youtube.com/embed/Br0COHopKNo)

### New Improvement...

- Issue: I got CORS (Cross-Origin Resource Sharing) “issues” when I deployed the application on Heroku.
- First solution: I used cors-anywhere service(https://cors-anywhere.herokuapp.com/) but found there is limited visit and the response speed is very slow.
- Improved solution: I improved it creating back-end proxy service to avoid CORS issues.


## Prerequisites

NPM - Install NPM for all dependencies.

## Quick Start

Install dependencies:
npm install

## Running locally

Run the application:
npm start

## One highlight when running locally

Go to config.js and uncomment the second API_URL and comment the first API_URL. It can get local AQI information.
