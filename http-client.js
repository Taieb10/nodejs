const http = require(`http`);

const url = process.argv[2];

http.get(url, (Response) => {
    Response.on(`error`, (err) => console.error(err));
    Response.setEncoding(`utf8`);
    Response.on(`data`, (data) => {
        console.log(data);
    });
    Response.on(`end`, () => console.log(``));
});
