import express, { Router } from "express";

const app = express();

const router = Router();

router.get("/", (req, res) => {
  res.send(
    `
        <html>
            <head>
                <title>Ma première application Nodejs</title>
            </head>
            <body>
                <h1>Hello World !</h1>
            </body>
        </html>
    `
  );
});

app.use(router);

const defaultPort = 3000;

app.listen(defaultPort, () => {
  console.log(`Serveur lancé sur le port ${defaultPort}`);
});
