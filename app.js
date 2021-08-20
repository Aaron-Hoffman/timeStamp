const express = require('express');
const app = express();

app.get("/api/:date", function(req, res) {
    res.json({utc: req.params.date});
})
//  Create json response object for any date

const getDate = (input=null) => {
    if (input !== null) {
        const date = new Date(input);
        if (date.toString() === 'Invalid Date') {
            return {error: 'Invalid Date'}
        } else { 
            return getObject(date);
        }    
    } else {
        const date = new Date();
        return getObject(date);
    }
}


const getObject = (date) => {
    const responseObject = {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    return responseObject;
}

module.exports = app;