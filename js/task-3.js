class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(params) {
        this.#value = params + this.#value;
    }

    padEnd(params) {
        this.#value = this.#value + params;
    }

    padBoth(params) {
        this.#value = params + this.#value + params;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
