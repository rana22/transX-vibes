import { User } from "../model/User";
import md5 = require("md5");
import UserService = require("../service/UserService");
import { inject } from "inversify";
import TYPES from "./properties/Types";
import IUserService = require("../service/IUserService");
import sequelize from "../dbconfig";
let jwt = require('jsonwebtoken');
let config = require('../config');



export class HandlerGenerator {
  
  constructor() { }
  login(req, res) {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;

    // For the given username fetch user from DB

    if (username && password) {
      const userRepository = sequelize.getRepository(User);
      userRepository.findOne({where: {username: username, password: md5(password)}})
        .then((user: User) => {
          console.log(user.username);
          if (user) {
            let token = jwt.sign({ username: username },
              config.secret,
              {
                expiresIn: '24h' // expires in 24 hours
              }
            );
            res.json({
              success: true,
              message: 'Authentication successful!',
              token: token
            });
          } else {
              res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
              });
            }
          }
        )
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }

  index(req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}
