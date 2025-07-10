const express = require("express");
const UserModel = require("./src/models/user.models");

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/', (_req, res) => {
  return res.status(200).json({ ok: 'ok' });
});

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const user = await UserModel.findByIdAndUpdate(id, body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Rodando express na porta ${PORT}`);

});