//  Create json response object for any date

const getDate = (input=null) => {
    if (input !== null) {
        const date = new Date(input);
        return getObject(date);
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