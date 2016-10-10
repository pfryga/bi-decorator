# bi-params-decorator

## Requirements
```
Node.js v6.0.0 or greater
```

## Use

Installation
```
npm install bi-params-decorator
```

Init object and get slug
```
import BiDecorator from 'bi-decorator'

let biDecorator = new BiDecorator({
    bi_s: 'internal',
    bi_c: 111,
    bi_m: 'automotive_txt'
});

let url = 'http://allegro.pl/dzial/motoryzacja'
let resultUrl = biDecorator.decorateWithTags(url);
// resultUrl equals 'http://allegro.pl/dzial/motoryzacja?bi_s=internal&bi_c=123&bi_m=automotive_txt'
```

Run unit tests
```
npm run test
```

