const fs = require('fs');

const get_size = (path) => fs.statSync(path).size;
const file_size = (path) => {
    const size = get_size(path);
    return size;
};
const dir_size = (path, results) => {
    const size = get_size(path) + results.reduce((acc, x) => {
        if (x) acc += x;
        return acc;
    }, 0);
    console.log(`${size} -- ${path}`);

    return size;
};

module.exports = {
    file_size, dir_size
}