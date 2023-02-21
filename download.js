import fetch from 'node-fetch'
// import { promises as fsPromises } from 'fs'

fetch('https://www.themealdb.com/api')
  .then(response => response.json())
  .then(data => console.log(data))