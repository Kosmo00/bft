

class Nft {
    #token_id;
    #level;
    #squid_energy;
    #image
    #name

    constructor(token_id, level, squid_energy, image, name) {
        this.#token_id = token_id;
        this.#level = level;
        this.#squid_energy = squid_energy.split('/');
        this.#image = image;
        this.#name = name;
    }

    // Getters
    getTokenId() {
        return this.#token_id;
    }

    getLevel() {
        return this.#level;
    }

    getActualSquidEnergy() {
        return this.#squid_energy[0];
    }

    getMaxSquidEnergy() {
        return this.#squid_energy[1];
    }

    getImage() {
        return this.#image;
    }

    getName() {
        return this.#name;
    }

    // Filters

    /**
     * @description Apply a filter to the character. If each metadata is just at the corresponding
     * interval returns true.
     * 
     * @param {[number | null, number | null ]} level_interval 
     * @param {[number | null, number | null ]} actual_squad_energy_interval 
     * @param {[number | null, number | null ]} max_sqad_energy_interval
     * 
     * @returns boolean
     */
    isAccordingToFilter(level_interval, actual_squad_energy_interval, max_squad_energy_interval) {

        return true;
    }

    // Individual filters

    isAccordingToLevelInterval(level_interval) {
        
        return true;
    }

    isAccordingToActualSquadEnergyInterval(actual_squad_energy_interval) {
        
        return true;
    }

    isAccordingToMaxSquadEnergyInterval(max_squad_energy_interval) {

        return true;
    }
}

module.exports = Nft;