import Quadrilateral from "./Math/quadrilateral.js";
import Triangle from "./Math/triangle.js";

const quad = new Quadrilateral({
  dimensions: {
    axisX: 50,
    axisY: 70
  }
});

const triangle = new Triangle({
  sides: [
    { length: 22, hypotenuse: true },
    { length: 18, hypotenuse: false }
  ]
});

//console.log(triangle.pythagoras());

quad.addVector("N", 10)
quad.addVector("S", 10)
quad.addVector("E", 7)
quad.addVector("W", 3)

console.log(quad.balanceVectors())