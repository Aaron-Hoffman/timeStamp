const express = require('express');
const app = express();

app.get("/api/:date", function(req, res) {
    res.json(getDate(req.params.date));
})

app.get("/api", function(req, res) {
    res.json(getDate());
})

//  Create json response object for any date

app.getDate = (input=null) => {
    // Convert to number if neccessary 
    if (Number(input) !== NaN) {
        input = Number(input);
    }

    if (input !== null) {
        const date = new Date(input);
        if (date.toString() === 'Invalid Date') {
            return {error: 'Invalid Date'}
        } else { 
            return app.getObject(date);
        }    
    } else {
        const date = new Date();
        return app.getObject(date);
    }
}

app.getObject = (date) => {
    const responseObject = {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    return responseObject;
}

module.exports = app;