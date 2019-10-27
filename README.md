<h1 align="center"><b>Mabarin Backend</b></h1>



Mabarin Backend is a rest api application for mobile app application using react-native. Built with NodeJs using the ExpressJs Framework and NoSQL mongo Database.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)




## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)
[![mongoDB](https://img.shields.io/badge/mongoDB-4.2-lightgreen)](https://mongodb.com)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Crate cloud mongoDB cluster using mongoDB atlas or using local mongoDB database
5. Connect your mongoDB to **config.js**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3030/notes)
8. You can see all the end point [here](#end-point)


## End Point
**1. GET**
* `/users`
* `/games/:id`
* `/users/:id` (Get user by id)
* `/events

**2. POST**
* `/games`
    * ``` { "title": "Mobile Legends", "description": "Fly in the sky", "image": "sky.jpg", "date_released": "2019-10-08", "genre_id": "2", "availability": "1" } ```

* `/rating/:id`
    * ``` { "userrating": "req.body.rating" } ```
    
* `/events`
   * ``` { "name": "The international", "date": "31 Februari" } ```



## Contributors
<p align="center">
<table border="0">
  <tr>
    <td align="center">
      <a href="https://github.com/firmansyahfachmi">
        <img width="150" src="https://avatars1.githubusercontent.com/firmansyahfachmi" alt="M Fachmi Firmansyah"><br/>
          <sub><b>M Fachmi Firmansyah</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/areydras">
        <img width="150" src="https://avatars1.githubusercontent.com/areydras" alt="Galih Mahendra W"><br/>
          <sub><b>Areydra Desfikri</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rozy97">
        <img width="150" src="https://avatars1.githubusercontent.com/rozy97" alt="Firmansyah Rozy"><br/>
          <sub><b>Firmansyah Rozy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Gimindika">
        <img width="150" src="https://avatars1.githubusercontent.com/Oreki13" alt="Gerrit Indika Mulya"><br/>
          <sub><b>Affandy Nugraha</b></sub>
      </a>
    </td>
  </tr>
</table>
</p>
