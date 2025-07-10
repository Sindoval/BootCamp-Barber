const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
const express = require("express");

dotenv.config();

connectToDatabase();
require("./express");