// Custom middleware
const clog = (req, res, next) => {
    const fsCyan = '\x1b[36m';
    switch(req.method) {
        case 'GET': {
            console.info(`${fsCyan}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${fsCyan}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`${fsCyan}${req.method} request to ${req.path}`);
    }

    next();
};

module.exports = clog;
