
let seasons = new Map();

class Season {

    constructor(name) {
        seasons.push(name, this);
        this.name = name;
    }

    static isValid(season) {

        season = seasons.get(season);

        return season === currentSeason || season === anySeason;

    }

} 

new Season('winter');
new Season('spring');
new Season('summer');
const currentSeason = new Season('fall');
new Season('holiday');
const anySeason = new Season('any');
