'use strict';

let appendQuery = require('append-query');

class BiDecorator {
    constructor(props) {
        this.tags = {
            bi_s: props.bi_s,
            bi_c: props.bi_c,
            bi_m: props.bi_m,
            bi_term: props.bi_term
        };
    }

    getBiParameters() {
        const biParamsKeys = Object.keys(this.tags);
        const biParams = {};

        biParamsKeys.forEach(paramKey => {
            if (!this.tags[paramKey]) {
                return;
            }

            const simpleBiTag = {};
            simpleBiTag[paramKey] = this.tags[paramKey];

            Object.assign(biParams, simpleBiTag);
        });

        return biParams;
    }

    decorateWithTags(link) {
        const biParameters = this.getBiParameters();

        if (!Object.keys(biParameters).length) {
            return link;
        }

        return appendQuery(link, biParameters);
    }
}

module.exports = BiDecorator;
