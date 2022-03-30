(function() {
    "use strict";
    // var circle = {
    //     radius: 2,
    //     circumference: function() {
    //         return Math.PI * 2 * this.radius;
    //     },
    //     area: function() {
    //         return Math.PI * this.radius * this.radius;
    //     }
    // };
    // console.log(circle.radius);; // 2
    // console.log(circle.area);;   // function () { ... }
    // console.log(circle.area());; // 12.566370614359172
    // console.log(circle.circumference());

    // create a circle object

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area;
            if(doRounding) {
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();