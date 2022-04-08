/**
 * @typedef Dimension
 * @property {number} axisX
 * @property {number} axisY
 * @property {number} axisZ
 */

/**
 * @typedef Vector
 * @property {string} face - The face the force originates from.
 * @property {number} magnitude - The strength of the force.
 */

/**
 * @class Quadrilateral
 * Class representing a quadrilateral
 */
export default class Quadrilateral {
  dimensions;
  vectors;
   
  /**
   * @constructor
   * @param {Object} options - Options for the quadrilaterial.
   * @param {Dimension} options.dimensions - Dimensions of the object.
   * @param {Vector[]} options.vectors - Vectors for the object.
   */
  constructor(options) {
    this.dimensions = options.dimensions || {};
    this.vectors = options.vectors || [];
  }
  
  addVector(face, magnitude) {
    this.vectors.push({ face, magnitude });
    return this;
  }
  
  balanceVectors() {
    const faces = {
      N: "S",
      S: "N",
      E: "W",
      W: "E"
    }
    
    const calculated = [];
    for (const [key, vector] of this.vectors.entries()) {
      if (calculated.includes(key)) continue;
      const normal = this.vectors.filter(x => x.face == vector.face);
      const opposite = this.vectors.filter(x => x.face == Array.from(vector.face).map((l) => faces[l]).join(""));
      
      let vectors = { normal: 0, opposite: 0 };
      let result = null;
      
      for (const [i, v] of normal.entries()) {
        vectors.normal += v.magnitude;
        this.vectors.splice(this.vectors.indexOf(v), 1);
        calculated.push(i);
      }
      
      for (const [i, v] of opposite.entries()) {
        vectors.opposite += v.magnitude;
        this.vectors.splice(this.vectors.indexOf(v), 1);
        calculated.push(i);
      }
      
      if (opposite) {
        if (vectors.normal > vectors.opposite) result = { magnitude: vectors.normal - vectors.opposite, face: vector.face };
        else if (vectors.opposite > vectors.normal) result = { magnitude: vectors.opposite - vectors.normal, face: opposite[0].face };
        else result = { magnitude: 0, face: null };
        
        this.vectors.push(result);
      }
    }

    return this;
  }
}