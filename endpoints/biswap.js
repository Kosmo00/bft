const BASE_URL = 'https://marketplace.biswap.org/back/offers/sellings';

export const sellings = (page) => {
    return `${BASE_URL}?sortBy=newest&userAddress=no-address&page=${page}&partner=all`;
}