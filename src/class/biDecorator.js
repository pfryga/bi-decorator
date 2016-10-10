'use strict';

let appendQuery = require('append-query');

class BiDecorator {
    constructor(props) {
        this.tags = {
            bi_s: props.bi_s,
            bi_c: props.bi_c,
            bi_m: props.bi_m
        };
    }

    getBiParameters() {
        let biParamsKeys = Object.keys(this.tags);
        let biParams = {};

        biParamsKeys.forEach(paramKey => {
            if (!this.tags[paramKey]) {
                return;
            }

            let simpleBiTag = {};
            simpleBiTag[paramKey] = this.tags[paramKey];

            Object.assign(biParams, simpleBiTag);
        });

        return biParams;
    }

    decorateWithTags(link) {
        let biParameters = this.getBiParameters();

        if (!Object.keys(biParameters).length) {
            return link;
        }

        return appendQuery(link, biParameters);
    }
}

module.exports = BiDecorator;
