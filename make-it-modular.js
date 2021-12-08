const myModule = require("./myModule");

const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, (err, filtredList) => {
    if (err) return console.error(err);
    filtredList.forEach((file) => {
        console.log(file);
    });
});
