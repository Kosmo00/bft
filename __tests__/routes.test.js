const test = require('ava');
const axios = require('axios');

//const { sellings } = require('../endpoints/biswap');

test('should pass', t => {
    t.pass();
});

test('should obtain the first pagination at biswap', async t => {
    const data = await axios.post('https://marketplace.biswap.org/back/offers/sellings?sortBy=newest&userAddress=no-address&page=1&partner=all');
    
    t.deepEqual(data.status, 200);
});

test('should obtain all the pagination at biswap', async t => {
    let res = await axios.post('https://marketplace.biswap.org/back/offers/sellings?sortBy=newest&userAddress=no-address&page=1&partner=all');
    let counter = res.data.counter;
    for (let i = 2; i <= counter; i++){
        res = await axios.post(`https://marketplace.biswap.org/back/offers/sellings?sortBy=newest&userAddress=no-address&page=${i}&partner=all`);
        if (res.status !== 200) {
            console.log(res);
            t.fail();
        }
        console.log(`Pagination - ${i}`);
    }
    t.pass();
});
