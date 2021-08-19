//  Create json response object for any date

const buildDate = (input=null) => {
    if (input !== null) {
        const date = new Date(input);
        console.log(date);
    } else {
        const date = new Date();
        console.log(date.toString());
    }
}