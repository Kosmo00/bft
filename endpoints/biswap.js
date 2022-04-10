const BASE_URL = 'https://marketplace.biswap.org/back/offers/sellings';

class Endpoints {
    static sellings (page) {
        return `${BASE_URL}?sortBy=newest&userAddress=no-address&page=${page}&partner=all`;
    }
}


module.exports = Endpoints;