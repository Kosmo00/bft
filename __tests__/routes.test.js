const test = require('ava');
const axios = require('axios');
const { sellings } = require('../endpoints/biswap');

test('should pass', t => {
    t.pass();
});

test('should obtain the first pagination at biswap', async t => {
    const data = await axios.post(sellings(1));
    
    t.deepEqual(data.status, 200);
});

test('should obtain the first three paginations at biswap', async t => {
    for (let i = 1; i <= 3; i++){
        res = await axios.post(sellings(i));
        if (res.status !== 200) {
            t.fail();
        }
    }
    t.pass();
});
