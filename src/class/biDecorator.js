const queryString = require('query-string');

class BiDecorator {
    constructor(params) {
        this.params = Object.keys(params).reduce((acumulator, key) => {
            if (params[key]) {
                acumulator[key] = params[key];
            }

            return acumulator;
        }, {});
    }

    decorateWithTags(link) {
        const baseUrl = link.split('?')[0];
        const linkQueryString = link.slice(baseUrl.length);

        let destinationQueryString = queryString.stringify(Object.assign(
            {},
            queryString.parse(linkQueryString),
            this.params,
        ));

        destinationQueryString = destinationQueryString.length ? `?${destinationQueryString}` : destinationQueryString;

        return baseUrl + destinationQueryString;
    }
}

module.exports = BiDecorator;
