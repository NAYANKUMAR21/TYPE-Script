const { Router } = require('express');
const mongoose = require('mongoose');
const argon2 = require('argon2');
const userModel = require('./auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = Router();
app.post('/login', async (req, res) => {
  const { email, password, name, age } = req.body;
  if (!email || !password) {
    return res.status(500).send({ message: 'Cred Missing' });
  }
  try {
    const exists = await userModel.findOne({ email: email });

    if (exists && (await argon2.verify(exists.password, password))) {
      const token = jwt.sign(
        { id: exists._id, email: exists.email, role: exists.role },
        'ECOM',
        {
          expiresIn: '1 day',
        }
      );

      return res
        .status(200)
        .send({ token, message: 'LOGGED IN SUCCESSFULLTY' });
    }
    return res
      .status(400)
      .send({ message: 'Wrong Cred Account doesnt exists' });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

app.post('/signup', async (req, res) => {
  const { email, password, name, age } = req.body;
  if (!email || !password) {
    return res.status(500).send({ message: 'Cred Missing' });
  }

  try {
    const exists = await userModel.findOne({ email: email });
    console.log(exists, 'this');
    if (!exists) {
      const hash = await argon2.hash(password);
      if (email.includes('ecom')) {
        const createAdmin = await userModel.create({
          email,
          password: hash ? hash : password,
          name,
          age,
          role: 'Admin',
        });
        return res.status(200).send({
          message: 'Adim Account created Successfully',
          Account: createAdmin,
        });
      }

      const create = await userModel.create({
        email,
        password: hash ? hash : password,
        name,
        age,
        role: 'User',
      });
      return res
        .status(200)
        .send({ message: 'User created Successfully', Account: create });
    }
    return res.status(400).send({ message: 'Account Already exists' });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});
module.exports = app;
