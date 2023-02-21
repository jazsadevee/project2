import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'


fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then(response => response.json())
  .then(data => fsPromises.writeFile('./data.json', JSON.stringify(data)))