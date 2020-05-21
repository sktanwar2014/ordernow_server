const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { mailUser, mailPass, mailService } = require("../lib/database");

 const mailAccountUser = mailUser;
 const mailAccountPass = mailPass;

 const trans = nodemailer.createTransport(smtpTransport({
  service: mailService,
  secure : true,  
  tls: { rejectUnauthorized: true },
  auth: {
    user: mailAccountUser,
    pass: mailAccountPass
  }
}))


module.exports = { trans: trans };
