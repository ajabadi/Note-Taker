const express = require("express");
const html_routes = require('./Develop/routes/html.routes')
const api_routes = require('./Develop/routes/api-routes')
const PORT = process.env.PORT || 8080;

const app = express();


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("Develop/public"));
app.use(html_routes);
app.use(api_routes);

//Start listen
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


