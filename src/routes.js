import { method } from './controller/index.js'

export const route = (app) => {
    app.route('/products')
        .get(method.get);

    app.route(`/products?id=2`)
        .post(method.detail);
}