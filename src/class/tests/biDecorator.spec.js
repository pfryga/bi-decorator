const BiDecorator = require('../biDecorator');
const {expect} = require('chai');

describe('biDecorator class', () => {
    it('should decorate link with given tags', () => {
        // given
        const params = {
            bi_s: 'internal',
            bi_c: 123,
            bi_m: 'automotive_txt',
            bi_term: 'some_tags'
        };
        const link = 'http://allegro.pl/dzial/motoryzacja';
        const linkWithArgs = 'http://allegro.pl/dzial/motoryzacja?arg=1';

        const biDecorator = new BiDecorator(params);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);
        const decoratedLinkWithArgs = biDecorator.decorateWithTags(linkWithArgs);

        // then
        expect(decoratedLink)
            .to.equal(`${link}?bi_c=123&bi_m=automotive_txt&bi_s=internal&bi_term=some_tags`);
        expect(decoratedLinkWithArgs)
            .to.equal(`${link}?arg=1&bi_c=123&bi_m=automotive_txt&bi_s=internal&bi_term=some_tags`);
    });

    it('should not decorate link with undefined tags', () => {
        // given
        const params = {
            bi_s: 'internal',
            bi_c: undefined
        };
        const link = 'http://allegro.pl/dzial/motoryzacja';
        const biDecorator = new BiDecorator(params);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        expect(decoratedLink).to.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal');
    });

    it('should not decorate link for empty params object', () => {
        // given
        const params = {};
        const link = 'http://allegro.pl/dzial/motoryzacja';

        const biDecorator = new BiDecorator(params);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        expect(decoratedLink).to.equal('http://allegro.pl/dzial/motoryzacja');
    });

    it('should decorate link with multi-value query params', () => {
        // given
        const params = { bi_s: 'internal' };
        const link = 'http://allegro.pl/dzial/motoryzacja?department=1&department=2&space=1';
        const biDecorator = new BiDecorator(params);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        expect(decoratedLink)
            .to.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal&department=1&department=2&space=1');
    });

    it('should decorate link with multiple values of defined tag', () => {
        // given
        const params = { bi_s: ['internal', 'external'] };
        const link = 'http://allegro.pl/dzial/motoryzacja?department=1';
        const biDecorator = new BiDecorator(params);

        // when
        const decoratedLink = biDecorator.decorateWithTags(link);

        // then
        expect(decoratedLink)
            .to.equal('http://allegro.pl/dzial/motoryzacja?bi_s=internal&bi_s=external&department=1');
    });

  it('should not decorate link with empty parameters', () => {
    // given
    const params = { bi_s: '', bi_m: '', bi_c: [] };
    const link = 'http://allegro.pl/dzial/motoryzacja?department=1';
    const biDecorator = new BiDecorator(params);

    // when
    const decoratedLink = biDecorator.decorateWithTags(link);

    // then
    expect(decoratedLink)
      .to.equal('http://allegro.pl/dzial/motoryzacja?department=1');
  });

  it('should not override parameter with empty value', () => {
    // given
    const params = { bi_s: '', bi_m: '', bi_c: [] };
    const link = 'http://allegro.pl/dzial/motoryzacja?department=1&bi_s=true';
    const biDecorator = new BiDecorator(params);

    // when
    const decoratedLink = biDecorator.decorateWithTags(link);

    // then
    expect(decoratedLink)
      .to.equal('http://allegro.pl/dzial/motoryzacja?bi_s=true&department=1');
  });
});
