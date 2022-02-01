// import { nodemailer } from 'nodemailer'
// const nodemailer = require('nodemailer')

export default function sendEmail (nombre, apellido, email, telefono, mensaje) {
  console.log('enviando datos...' + nombre + ' ' + apellido + ' ' + email + ' ' + telefono + ' ' + mensaje)
  /* const mailer = nodemailer({
    transport: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'pruebasdawzayas@gmail.com',
        pass: 'IgnacioPinto'

      }
    },
    message: {
      from: '"Fred Foo 👻"',
      to: '"Fred Foo 👻"',
      subject: 'Hello ✔',
      text: 'Hello world?'
    }
  })

  mailer.send()
  console.log('mailer', mailer) */
}
