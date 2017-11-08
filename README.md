# bi-params-decorator

## Requirements
```
Node.js v8.0.0 or greater
```

## Use

Installation
```
npm i bi-params-decorator --save
```

Init object and decorate url with parameters
```
import BiDecorator from 'bi-decorator';

const biDecorator = new BiDecorator({
    bi_s: 'internal',
    bi_c: 111,
    bi_m: 'automotive_txt',
    bi_term: 'some_tags'
});

const url = 'http://allegro.pl/dzial/motoryzacja';
const resultUrl = biDecorator.decorateWithTags(url);
// resultUrl equals 'http://allegro.pl/dzial/motoryzacja?bi_s=internal&bi_c=123&bi_m=automotive_txt'
```

Run unit tests
```
npm run test
```

