let counter = {
    value: 0,

    up() {
        this.value++;
        return this;
    },
    down() {
        this.value--;
        return this;
    },
    get() {
        console.log(thi.value);
        return this;
    },
    reset() {
        this.value = 0;
        return this;
    },
};

counter.up().down().get().down().down().down().get().down().reset().get();

