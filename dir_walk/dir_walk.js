const fs = require('fs');
const { file_size, dir_size } = require('./f_size');

const dir_walk = (top, filefn, dirfn) => {
    const cfile = fs.statSync(top);
    if (cfile.isFile()) {
        return filefn(top);
    } else if (cfile.isDirectory()) {
        // Function to get current filenames
        // in directory
        const files = fs.readdirSync(top);
        const results = [];
        for (const file of files) {
            const f = `${top}/${file}`.replace(/\/\//g, '/');
            results.push(dir_walk(f, filefn, dirfn));
        }
        return dirfn(top, results);
        //     console.log(files);
    }
}
const get_size = (path) => fs.statSync(path).size;

// dir_walk('/Users/williamwilson/Downloads', file_size, dir_size);