const mongoose = require('mongoose');
const { hashSync, compareSync } = require('bcryptjs');
const { sign, verify } = require('jsonwebtoken');