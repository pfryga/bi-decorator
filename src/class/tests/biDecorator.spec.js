'use strict';

const BiDecorator = require('../biDecorator');

require('should');

describe('biDecorator class', function () {
    it('should decorate link with given tags', function () {
        // given
        const props = {
            bi_s: 'internal',
            bi_c: 123,
            bi_m: 'automotive_txt',
            bi_term: 'some_tags'
        };
        const link = 'http://allegro.pl/dzial/motoryzacja';
        const linkWithArgs = 'http://allegro.pl/dzial/motoryzacja?arg=1';

        const biDecorator = new BiDecorator(props);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);
        const decoratedLinkWithArgs = biDecorator.decorateWithTags(linkWithArgs);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal&bi_c=123&bi_m=automotive_txt&bi_term=some_tags');
        decoratedLinkWithArgs.should.be.equal('http://allegro.pl/dzial/motoryzacja?arg=1&bi_s=internal&bi_c=123&bi_m=automotive_txt&bi_term=some_tags');
    });

    it('should do not decorate link with undefined tags', function () {
        // given
        const props = {
            bi_s: 'internal',
            bi_c: undefined
        };
        const link = 'http://allegro.pl/dzial/motoryzacja';
        const biDecorator = new BiDecorator(props);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal');
    });

    it('should do not decorate link if there are empty parameters', function () {
        // given
        const props = {};
        const link = 'http://allegro.pl/dzial/motoryzacja';

        const biDecorator = new BiDecorator(props);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        decoratedLink.should.be.equal('http://allegro.pl/dzial/motoryzacja');
    });
});
