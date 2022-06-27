
class Map {

    constructor(keys, values) {

        if (keys == undefined) {
            this.keys = [];
        } else {
            this.keys = keys.slice();
        }
        if (values == undefined) {
            this.values = [];
            this.length = 0;
        } else {
            this.values = values.slice();
            this.length = this.values.length;
        }


    }

    push(key, value) {

        if (this.keys.includes(key)) {

            let index = this.keys.indexOf(key);
            this.values[index] = value;

        } else {

            this.keys.push(key);
            this.values.push(value);
            this.length = this.length + 1

        }

    }

    remove(key) {

        if (this.keys.includes(key)) {

            let index = this.keys.indexOf(key);
            this.values.splice(index, 1);
            this.keys.splice(index, 1);
            this.length = this.length + 1;

        }

    }

    get(key) {

        return this.getValue(key);

    }

    getValue(key) {

        return this.values[this.keys.indexOf(key)];

    }

    getKey(value) {

        return this.keys[this.values.indexOf(value)];

    }

    getKeys() {

        return this.keys.slice();

    }

    getValues() {

        return this.values.slice();

    }

}
