MYAPP.util = (function () {
    function inheritPrototype(child, parent) { // eslint-disable-line
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomColor() {
        var r = getRandomArbitrary(0, 256).toFixed(0);
        var g = getRandomArbitrary(0, 256).toFixed(0);
        var b = getRandomArbitrary(0, 256).toFixed(0);

        return 'RGB(' + r + ',' + g + ',' + b + ')';
    }

    return {
        getRandomColor: getRandomColor,
        inheritPrototype: inheritPrototype
}

})();
