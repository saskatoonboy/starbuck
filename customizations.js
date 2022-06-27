
class Customization {

    constructor(name) {
        let words = name.split(' ');
        let capName = '';
        for (let word of words) {
            capName = capName + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + ' ';
        }
        capName = capName.substring(0, capName.length - 1);
        this.name = capName;
    }

    display() {

        return this.name;

    }

    isValid() {
        return this.source.isValid(this.value);
    }

}

class QuantityCustomization extends Customization {

    constructor(name, value) {
        super(name);
        if (value == undefined) {
            value = Amounts.NONE;
        }
        this.value = value;
    }

    display() {
        let text = Amounts.display(this.value);
        if (text == '') {
            return super.display();
        } else {
            return text + ' ' + super.display();
        }
    }

}

class CountCustomization extends Customization {

    constructor(name, value) {
        super(name);
        if (value == undefined) {
            value = 0;
        }
        this.value = value;
    }

    display() {
        return String(this.value) + ' ' + super.display();
    }

}

class DataCustomization extends Customization {

    constructor(name, value) {
        super(name);

        this.value = value;
    }

    display() {
        return this.value;
    }

}

class EspressoDataCustomization extends DataCustomization {

    constructor(value) {
        super('espresso data');
        if (value == undefined) {
            value = EspressoData.NORMAL;
        }
        this.value = value;
        this.source = EspressoData;
    }

    display() {
        return EspressoData.displayMethod(this.value);
    }

}

class EspressoCustomization extends DataCustomization {

    constructor(value) {
        super('espresso');
        if (value == undefined) {
            value = EspressoData.SIGNATURE;
        }
        this.value = value;
        this.source = EspressoData;
    }

    display() {
        return EspressoData.displayType(this.value);
    }

}

class ShotCustomization extends CountCustomization {

    constructor(value) {
        super('shots', value)
        this.source = EspressoData;
    }

    display() {
        if (this.value == 0) {
            return '';
        }
        let text = String(this.value) + ' shots';
        if (this.value < 5) {
            text = EspressoData.shotAmounts[this.value];
        }
        return text
    }

}

class IceCustomization extends QuantityCustomization {

    constructor(value) {
        super('ice', value);
        this.source = Amounts;
    }

}

class MilkCustomization extends DataCustomization {

    constructor(value) {
        super('milk', value);
        this.source = Milk;
    }

    display() {
        return Milk.display(this.value);
    }

}

class CupCustomization extends DataCustomization {

    constructor(value, isSecondary) {
        let name = 'size';
        if (isSecondary) {
            name = 'cup';
        }
        super(name, value);
        this.isSecondary = isSecondary;
        this.source = Cup;
    }

    display() {
        if (this.isSecondary) {
            return 'In a ' + Cup.display(this.value) + ' Cup';
        }
        return Cup.display(this.value);
    }

}

class WaterCustomization extends QuantityCustomization {

    constructor(value) {
        super('water', value);
        this.source = Amounts;
    }

    display() {
        return Amounts.display(this.value) + ' Water';
    }

}

class SyrupCustomization extends CountCustomization {

    constructor(id, value) {
        super(Syrup.NAMES[id], value);
        this.source = Syrup;
    }

    display(normal) {

        if (normal) {
            return this.name;
        } else {
            return String(this.value) + ' pumps ' + this.name;
        }

    }

}

class ToppingCustomization extends QuantityCustomization {

    constructor(id, value) {
        super(Topping.NAMES[id], value);
        this.source = Topping;
    }

}

class WhipCustomization extends QuantityCustomization {

    constructor(value) {
        super('whip', value);
        this.source = Amounts;
    }

}

class FoamCustomization extends QuantityCustomization {

    constructor(value) {
        super('foam', value);
        this.source = Amounts;
    }

}

class ColdFoamCustomization extends QuantityCustomization {

    constructor(id, value) {
        super(ColdFoam.NAMES[id], value);
        this.source = ColdFoam;
    }

}

class SweetnerCustomization extends CountCustomization {

    constructor(id, value) {
        super(Sweetner.NAMES[id], value);
        this.source = Sweetner;
    }

}

class RoomCustomization extends QuantityCustomization {

    constructor(value) {
        super('room', value);
        this.source = Amounts;
    }

}

class MilkSplashCustomization extends QuantityCustomization {

    constructor(id, value) {
        if (id == Milk.HALF) {
            super('splash of cream', value);
        } else {
            super('splash of ' + Milk.NAMES[id], value);
        }
        this.source = Milk;
    }

}

class TempCustomization extends DataCustomization {

    constructor(value) {
        super('Temp', Temp.NAMES[value]);
        this.source = Temp;
    }

}

class TeaCustomization extends QuantityCustomization {

    constructor(id, value) {
        super(Tea.NAMES[id], value);
        this.source = Tea;
    }

}

class JuiceCustomization extends QuantityCustomization {

    constructor(id, value) {
        super(Juice.NAMES[id], value);
        this.source = Juice;
    }

}

class InclusionCustomization extends QuantityCustomization {

    constructor(id, value) {
        super(Inclusion.NAMES[id], value);
        this.source = Inclusion;
    }

}
