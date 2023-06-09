'use strict';
const chalk = require('chalk');

module.exports = (tokens, req, res) => {

  let status;
  let path = res.req?.route?.path ? res.req?.route?.path : req.originalUrl
  let message = res.locals.message ? res.locals.message : 'No message' 
  let code = res.locals?.errorCode ? res.locals.errorCode : '';

  if (message == 'No message') status = chalk.yellowBright(`[ warning ] > ${path} | ` +  message);
  else if (res.statusCode >= 400 || code) status = chalk.redBright(`[ error ] > ${path} | ` + code + ' | ' + message);
  else status = chalk.greenBright(`[success] > ${path} | ` + message);

  let time = new Date(new Date().getTime());

  return [
    status,
    time, '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
};






