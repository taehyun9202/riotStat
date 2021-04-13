# riotStat

## Summary

riotStat is created using React,React Hooks, React Router and Axios. 

There are three main features of the website: 

1. fetching all champion data to default page with grid system and able to filter by categories or champion name.
3. fetching leaderboard data to /leaderboard page grid system and able to filter by type of game, tier and division
2. searching user history of league of lengend and TFT.

All the images and lists are displayed using grid system or flexbox.

## Remarks

All the features except the champion data requires api key.

Riot only provides api key last no longer than a day for personal use.

We currently asked production api key for long time use.

We will update as soon as we got the production api key from riot.



## Motivation

The project was inspired from op.gg and all other riot stat searching website.

The purpose of project was to get familiar with React Hooks, axios, javascript async and grid system.


## Getting Started

**Get a free API Key** at https://developer.riotgames.com/

**Install dependencies of bottom**

**Enter your API in stats.js in components folder**
```
const API_KEY = 'ENTER YOUR API';
```



## Installed dependencies

npx create-react-app

npm axios

npm react-router-dom

npm @material-ui/core @material-ui/icons


## Run from the client directory.

npm start
