let express = require('express');
let app = express();

app.use(express.static('static'));
let port=3000;

let server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
