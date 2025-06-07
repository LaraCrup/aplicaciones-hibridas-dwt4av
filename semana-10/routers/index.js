import usersRouter from './usersRouter.js';
import productsRouter from './productsRouter.js';
import categoriaRouter from './categoriaRouter.js';

function routerAPI(app) {
    //Definimos las rutas
    app.use("/api/users", usersRouter);
    app.use("/api/products", productsRouter);
    app.use("/api/categoria", categoriaRouter);
}

export default routerAPI;