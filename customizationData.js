
class Milk {
    static NONE = 0;
    static NONFAT = 1;
    static ONE = 2;
    static TWO = 3;
    static WHOLE = 4;
    static HALF = 5;
    static HEAVY = 6;
    static OAT = 7;
    static SOY = 8;
    static ALMOND = 9;
    static COCONUT = 10;
    static LACTAID = 11;
    static SWEETCREAM = 12;
    static NAMES = ['', 'Nonfat', '1% Milk', '2% Milk', 'Whole Milk', 'Breve', 'Heavy Cream',
        'Oat Beverage', 'Soy Milk', 'Almond Milk', 'Coconut Milk', 'Lactaid Milk', 'Sweet Cream'];

    static display(value) {
        return Milk.NAMES[value];
    }

    static isValid() {
        return true;
    }
}

class Tea {

    static CHAI = 0;
    static EARLGREY = 1;
    static ROYALENGLISHBREAKFAST = 2;
    static EMPERORSCLOUDANDMIST = 3;
    static JADECITRUSMINT = 4;
    static MINTMAJESTY = 5;
    static PEACHTRANQUILITY = 6;
    static NAMES = ['Chai', 'Earl Grey', 'Royal English Breakfast', "Emperor's Cloud and Mist",
        'Jade Citrus Mint', 'Mint Majesty', 'Peach Tranquility'];

    static isValid() {
        return true;
    }

}

class Juice {

    static GREENTEA = 0;
    static BLACKTEA = 1;
    static PASSIONTEA = 2;
    static STRAWBERRYACAI = 3;
    static MANGODRAGONFRUIT = 4;
    static PINAPPLEPASSIONFRUIT = 5;
    static APPLE = 6;
    static PEACH = 7;
    static LEMONADE = 8;
    static NAMES = ['Green Tea', 'Black Tea', 'Passion Tea', 'Strawberry Acai',
        'Mango Dragonfruit', 'Pinapple Passionfruit', 'Apple Juice', 'Peach Juice', 'Lemonade'];

    static isValid() {
        return true;
    }

}

class Temp {

    static WARM = 0;
    static HOT = 1;
    static EXTRAHOT = 2;
    static NAMES = ['Warm', '', 'Extra Hot'];

    static isValid() {
        return true;
    }

}

class Inclusion {

    static VANILLABEANPOWDER = 0;
    static FRAPCHIPS = 1;
    static STRAWBERRIES = 2;
    static DRAGONFRUIT = 3;
    static PASSIONFRUIT = 4;
    static MATCHA = 4;
    static STRAWBERRYPUREE = 5;
    static NAMES = ['Vanilla Bean Powder', 'Frap Chips', 'Strawberry Incl', 'Dragonfruit Incl',
        'Passionfruit Incl', 'Matcha', 'Strawberry Puree'];

    static isValid() {
        return true;
    }

}

class Amounts {
    static NONE = 0;
    static LIGHT = 1;
    static NORMAL = 2;
    static EXTRA = 3;
    static NAMES = ['No', 'Light', '', 'Extra'];

    static display(value) {
        return Amounts.NAMES[value];
    }

    static isValid() {
        return true;
    }

}

class Topping {

    static CINNAMONDOLCE = 0;
    static CINNAMON = 1;
    static CARAMELCRUNCH = 2;
    static COOKIECRUMBLE = 3;
    static REDANDGREENSPRINKLES = 4;
    static SALTEDBROWNBUTTER = 5;
    static COCOAPOWDER = 6;
    static CARAMELBRULEE = 7;
    static CHOCOLATECURLS = 8;
    static PUMKINSPICE = 9;
    static MOCHADRIZZLE = 10;
    static CARAMELDRIZZLE = 11;
    static NAMES = ['Cinnamon Dolce Topping', 'Cinnamon Powder', 'Caramel Crunch Topping',
        'Cookie Crumble Topping', 'Red and Green Sprinkles', 'Salted Brown Butter Topping',
        'Cocoa Powder', 'Caramel Brulee', 'Cocolate Curls', 'Pumkin Spice Topping', 'Mocha Drizzle',
        'Caramel Drizzle'];

    static inVaild = [4, 5, 6, 7, 8, 9];

    static isValid(value) {
        return !this.inVaild.includes(value);
    }

}

class Sweetner {

    static SUGAR = 0;
    static RAWSUGAR = 0;
    static HONEY = 0;
    static SPLENDA = 0;
    static STEVIA = 0;
    static NAMES = ['Sugar', 'Raw Sugar', 'Honey', 'Splenda', 'Stevia'];

    static isValid() {
        return true;
    }

}

class ColdFoam {

    static VANILLASWEETCREAM = 0;
    static CHOCOLATECREAM = 1;
    static SALTEDCARAMELCREAM = 2;
    static PUMKINCREAM = 3;
    static IRISHCREAM = 4;
    static NAMES = ['Vanilla Sweet Cream Cold Foam', 'Mocha Cream Cold Foam',
        'Salted Caramel Cream Cold Foam', 'Pumkin Cream Cold Foam', 'Irish Cream Cold Foam'];

    static inVaild = [3, 4];

    static isValid(value) {
        return !this.inVaild.includes(value);
    }

}

class Syrup {

    static BROWNSUGAR = 0;
    static CARAMEL = 1;
    static CINNAMONDOLCE = 2;
    static HAZELNUT = 3;
    static PEPPERMINT = 4;
    static RASPBERRY = 5;
    static TOASTEDVANILLA = 6;
    static TOFFEENUT = 7;
    static VANILLA = 8;
    static SUGARFREEVANILLA = 9;
    static MOCHA = 10;
    static DARKCARAMEL = 11;
    static WHITEMOCHA = 12;
    static PISTACHIO = 13;
    static FRAPROAST = 14;
    static PUMPKIN = 15;
    static CARAMELBRULEE = 16;
    static IRISHCREAM = 17;
    static SUGARCOOKIE = 18;
    static CHAI = 19;
    static CLASSIC = 19;
    static LIQUDCANESUGAR = 19;
    static HONEYBLEND = 19;
    static NAMES = ['Brown Sugar', 'Caramel', 'Cinnamon Dolce', 'Hazelnut', 'Peppermint', 'Raspberry',
        'Toasted Vanilla', 'Toffeenut', 'Vanilla', 'Sugar Free Vanilla', 'Mocha', 'Dark Caramel',
        'White Mocha', 'Pistachio', 'Frap Roast', 'Pumpkin Spice', 'Caramel Brulee', 'Irish Cream',
        'Sugar Cookie', 'Chai', 'Classic', 'Liquid Cane Sugar', 'Honey Blend'];

    static inVaild = [13, 15, 16, 17, 18];

    static isValid(value) {
        return !this.inVaild.includes(value);
    }
}

class Cup {
    static SHORT = 0;
    static TALL = 1;
    static GRANDE = 2;
    static VENTI = 3;
    static TRENTA = 4;
    static NAMES = ['Short', 'Tall', 'Grande', 'Venti', 'Trenta'];

    static display(value) {
        return Amounts.NAMES[value];
    }

    static isValid() {
        return true;
    }
}

class EspressoData {
    static DECAF = 5;
    static SIGNATURE = 6;
    static BLONDE = 7;
    static RISTRETTO = 8;
    static NORMAL = 9;
    static LONG = 10;
    static NAMES = ['', 'Single', 'Double', 'Triple', 'Quad', 'Decaf', 'Signature', 'Blonde',
        'Ristretto', '', 'Long'];

    static displayShots(amount) {
        if (amount == 0) {
            return '';
        }
        let text = String(amount) + ' shots';
        if (amount < 5) {
            text = EspressoData.NAMES[amount];
        }
        return text;
    }

    static displayType(amount) {
        return EspressoData.NAMES[amount];
    }

    static displayMethod(amount) {
        return EspressoData.NAMES[amount];
    }

    static isValid() {
        return true;
    }
}