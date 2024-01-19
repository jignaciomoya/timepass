// horaMiddleware.js

const obtenerHora = (req, res, next) => {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    req.horaActual = horaActual;
    next();
};

module.exports = obtenerHora;
