"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./pipe/validation.pipe");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Nest Project")
        .setDescription("Документация REST API")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    app.enableCors();
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.use(session({
        secret: "asiodasjoddjdoasddasoidjasiodasdjaiodd",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    await app.listen(PORT, () => console.log(`Server startet on = ${PORT} port`));
}
start();
//# sourceMappingURL=main.js.map