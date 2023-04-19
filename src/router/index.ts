import { Application, Router } from "express";

const createRouter = (app: Application) => {
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
};

export default createRouter;
