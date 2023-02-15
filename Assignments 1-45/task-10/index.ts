//this function will calculate the area of a Rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}

const width = 5; //width    
const height = 10; //height

console.log(`The area of a rectangle with width ${width} and height ${height} is ${calculateArea(width, height)}`);