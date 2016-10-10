'use strict';

const BiDecorator = require('../biDecorator');

require('should');

describe('biDecorator class', function () {
    it('should decorate link with given tags', function () {
        // given
        let props = {
            bi_s: 'internal',
            bi_c: 123,
            bi_m: 'automotive_txt'
        };
        let link = 'http://allegro.pl/dzial/motoryzacja';
        let linkWithArgs = 'http://allegro.pl/dzial/motoryzacja?arg=1';

        let biDecorator = new BiDecorator(props);

        // when
        let decoratedLink = biDecorator.decorateWithTags(link);
        let decoratedLinkWithArgs = biDecorator.decorateWithTags(linkWithArgs);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal&bi_c=123&bi_m=automotive_txt');
        decoratedLinkWithArgs.should.be.equal('http://allegro.pl/dzial/motoryzacja?arg=1&bi_s=internal&bi_c=123&bi_m=automotive_txt');
    });

    it('should do not decorate link with undefined tags', function () {
        // given
        let props = {
            bi_s: 'internal',
            bi_c: undefined
        };
        let link = 'http://allegro.pl/dzial/motoryzacja';
        let biDecorator = new BiDecorator(props);

        // when
        let decoratedLink = biDecorator.decorateWithTags(link);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal');
    });

    it('should do not decorate link if there are empty parameters', function () {
        // given
        let props = {};
        let link = 'http://allegro.pl/dzial/motoryzacja';

        let biDecorator = new BiDecorator(props);

        // when
        let decoratedLink = biDecorator.decorateWithTags(link);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja');
    });
});
