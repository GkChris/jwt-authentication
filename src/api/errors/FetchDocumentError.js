const statusCodes = require('../data').StatusCodes;

class FetchDocumentError extends Error {
    constructor(message) {
        super(message);
        this.code = 'ERR_FETCH_DOCUMENT';
        this.statusCode = statusCodes.internal_server_error.code,
        this.statusMessage = statusCodes.internal_server_error.msg;
        this.message = message
    }
}
  
module.exports = FetchDocumentError;