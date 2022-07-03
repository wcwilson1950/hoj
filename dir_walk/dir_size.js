const dir_walk = require('./dir_walk');
const { file_size, dir_size } = require('./f_size');

dir_walk('.', file_size, dir_size);