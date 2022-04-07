/**
 * @typedef Side
 * @property {number} length - Length of the side
 * @property {boolean} hypotenuse - Whether the side is the hypotenuse.
 */

/**
 * @class Triangle
 * Class that represents a triangle.
 */
class Triangle {
  sides;
   
  /**
   * @constructor
   * @param {Object} options - Options for triangle.
   * @param {Side[]} options.sides - The sides of the triangle.
   */ 
  constructor(options) {
    this.sides = options.sides;
  }
  
  pythagoras() {
    let operand = 0;
    let hasHyp = this.sides.some((s) => s.hypotenuse);
    
    for (let [key, side] of this.sides.entries()) {
      if (hasHyp) {
        let placeholder;
        let num1 = side.length ** 2;
        let num2 = this.sides[key + 1].length ** 2;
        
        if (num2 > num1) {
          placeholder = num1;
          num1 = num2;
          num2 = placeholder;
        }
        
        return Math.sqrt(num1 - num2);
      } else {
       operand += side.length ** 2;
      }
    }
    
    this.sides.push(Math.sqrt(operand));
    return this;
  }
}