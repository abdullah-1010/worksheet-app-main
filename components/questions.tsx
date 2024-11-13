// questions.tsx

export const predefinedQuestions = {
  "A-Level": {
    Algebra: [
      {
        questionText: "Solve for x:",
        questionMath: "2x + 3 = 11",
        answer: "4",
      },
      {
        questionText: "What is the derivative of",
        questionMath: "x^2",
        answer: "2x",
      },
      {
        questionText: "Factorize",
        questionMath: "x^2 - 9",
        answer: "(x-3)(x+3)",
      },
      {
        questionText: "Solve for y:",
        questionMath: "y^2 = 16",
        answer: "4 or -4",
      },
      {
        questionText: "Expand",
        questionMath: "(x + 2)(x - 2)",
        answer: "x^2 - 4",
      },
      {
        questionText: "Solve for x:",
        questionMath: "x^2 - 4x = 0",
        answer: "0 or 4",
      },
      {
        questionText: "Find the roots of",
        questionMath: "x^2 - 5x + 6",
        answer: "2 and 3",
      },
      {
        questionText: "Solve for y:",
        questionMath: "3y - 2 = 10",
        answer: "4",
      },
      {
        questionText: "What is x if",
        questionMath: "3x + 6 = 0",
        answer: "-2",
      },
      {
        questionText: "Simplify",
        questionMath: "x^2 / x",
        answer: "x",
      },
      {
        questionText: "Evaluate",
        questionMath: "2^3",
        answer: "8",
      },
      {
        questionText: "Factorize:",
        questionMath: "x^2 - 16",
        answer: "(x-4)(x+4)",
      },
      {
        questionText: "Solve for x:",
        questionMath: "x + 5 = 10",
        answer: "5",
      },
      {
        questionText: "Simplify:",
        questionMath: "2(x + 3)",
        answer: "2x + 6",
      },
      {
        questionText: "Solve for y:",
        questionMath: "4y = 20",
        answer: "5",
      },
      {
        questionText: "What is the cube of",
        questionMath: "3",
        answer: "27",
      },
      {
        questionText: "Expand",
        questionMath: "(a + b)^2",
        answer: "a^2 + 2ab + b^2",
      },
      {
        questionText: "What is the value of x if",
        questionMath: "x^2 = 49",
        answer: "7 or -7",
      },
      {
        questionText: "Simplify:",
        questionMath: "(x^2 - 4)/(x - 2)",
        answer: "x + 2",
      },
      {
        questionText: "Solve for z:",
        questionMath: "z/3 = 15",
        answer: "45",
      },
    ],
    Calculus: [
      { question: "Differentiate e^(2x)", answer: "2e^(2x)" },
      { question: "Find the integral of sin(x) dx", answer: "-cos(x) + C" },
      {
        question: "What is the limit of (1 + 1/n)^n as n approaches infinity?",
        answer: "e",
      },
      { question: "Differentiate x^3", answer: "3x^2" },
      { question: "Find the derivative of ln(x)", answer: "1/x" },
      { question: "What is the derivative of cos(x)?", answer: "-sin(x)" },
      { question: "Evaluate the integral of x dx", answer: "x^2 / 2 + C" },
      { question: "Find the critical points of x^2 - 4x", answer: "x = 2" },
      { question: "Differentiate tan(x)", answer: "sec^2(x)" },
      { question: "What is the second derivative of x^3?", answer: "6x" },
      { question: "Differentiate log(x)", answer: "1/(xln(10))" },
      { question: "Find the local minimum of x^2 + 3x", answer: "x = -1.5" },
      {
        question: "Evaluate the definite integral of x from 0 to 2",
        answer: "2",
      },
      { question: "Differentiate sin^2(x)", answer: "2sin(x)cos(x)" },
      { question: "Find the derivative of e^(-x)", answer: "-e^(-x)" },
      { question: "What is the antiderivative of 1/x?", answer: "ln|x| + C" },
      { question: "Differentiate x^4", answer: "4x^3" },
      { question: "What is the integral of 2x?", answer: "x^2 + C" },
      {
        question: "Find the slope of the tangent at x = 1 for y = x^2",
        answer: "2",
      },
      { question: "Differentiate sqrt(x)", answer: "1/(2sqrt(x))" },
    ],
    Geometry: [
      {
        question: "What is the area of a circle with radius r?",
        answer: "πr^2",
      },
      {
        question: "What is the sum of interior angles of a triangle?",
        answer: "180 degrees",
      },
      {
        question: "Calculate the perimeter of a square with side length 4",
        answer: "16",
      },
      {
        question: "What is the volume of a sphere with radius r?",
        answer: "(4/3)πr^3",
      },
      {
        question: "Find the area of a rectangle with length 5 and width 2",
        answer: "10",
      },
      {
        question:
          "What is the length of the hypotenuse in a right triangle with sides 3 and 4?",
        answer: "5",
      },
      {
        question: "Calculate the area of a triangle with base 4 and height 5",
        answer: "10",
      },
      {
        question:
          "What is the measure of each angle in an equilateral triangle?",
        answer: "60 degrees",
      },
      {
        question: "Find the circumference of a circle with diameter 10",
        answer: "10π",
      },
      {
        question: "What is the surface area of a cube with side length 3?",
        answer: "54",
      },
      {
        question: "Find the diagonal of a rectangle with sides 6 and 8",
        answer: "10",
      },
      {
        question:
          "Calculate the volume of a cylinder with radius 3 and height 5",
        answer: "45π",
      },
      {
        question:
          "What is the area of a sector with radius 4 and angle 90 degrees?",
        answer: "2π",
      },
      {
        question:
          "Find the area of a trapezoid with bases 5 and 7 and height 4",
        answer: "24",
      },
      {
        question: "What is the perimeter of a pentagon with side length 6?",
        answer: "30",
      },
      {
        question: "Calculate the area of an ellipse with axes 4 and 3",
        answer: "12π",
      },
      {
        question: "Find the volume of a cone with radius 2 and height 6",
        answer: "8π",
      },
      {
        question: "What is the sum of exterior angles of any polygon?",
        answer: "360 degrees",
      },
      {
        question:
          "Calculate the area of a parallelogram with base 8 and height 5",
        answer: "40",
      },
      {
        question:
          "Find the length of the arc of a circle with radius 5 and angle 60 degrees",
        answer: "5π/3",
      },
    ],
  },
  GCSE: {
    Algebra: [
      { question: "Solve for x: 2x + 5 = 15", answer: "5" },
      { question: "Factorize: x^2 - 16", answer: "(x - 4)(x + 4)" },
      { question: "Expand (x - 3)(x + 7)", answer: "x^2 + 4x - 21" },
      {
        question: "Solve the quadratic equation: x^2 - 4x - 12 = 0",
        answer: "6 and -2",
      },
      { question: "Simplify: (3x^2y) / (6xy)", answer: "x / 2" },
      { question: "Solve for y: 2y + 3 = 7", answer: "2" },
      {
        question: "What are the roots of x^2 - 9x + 20 = 0?",
        answer: "4 and 5",
      },
      { question: "Expand (2x + 5)^2", answer: "4x^2 + 20x + 25" },
      { question: "Simplify: 5x - 3(x - 4)", answer: "2x + 12" },
      { question: "Solve for x: 4x^2 = 64", answer: "4 or -4" },
      { question: "Factorize: x^2 - 10x + 25", answer: "(x - 5)^2" },
      { question: "What is the value of x if 3(x - 2) = 12?", answer: "6" },
      { question: "Solve for x: x^2 - 49 = 0", answer: "7 or -7" },
      { question: "Simplify: (2x^3)/(4x)", answer: "x^2 / 2" },
      { question: "Solve for y: 5y - 3 = 2y + 12", answer: "5" },
      { question: "Factorize: x^2 - 25", answer: "(x - 5)(x + 5)" },
      { question: "Expand (x + 2)(x - 2)", answer: "x^2 - 4" },
      { question: "Solve for x: 2(x - 3) = 14", answer: "10" },
      { question: "Simplify: x^2 - 4x + 4", answer: "(x - 2)^2" },
      { question: "Solve for x: (x + 3)(x - 5) = 0", answer: "-3 or 5" },
    ],
    Calculus: [
      { question: "Differentiate y = 3x^2 + 2x - 5", answer: "6x + 2" },
      { question: "Find the integral of 2x dx", answer: "x^2 + C" },
      { question: "What is the derivative of y = x^3?", answer: "3x^2" },
      {
        question: "Evaluate the definite integral of x from 0 to 3",
        answer: "4.5",
      },
      { question: "Find the derivative of y = sin(x)", answer: "cos(x)" },
      {
        question: "What is the limit of (2x + 1) as x approaches 2?",
        answer: "5",
      },
      { question: "Differentiate y = e^(2x)", answer: "2e^(2x)" },
      { question: "Find the antiderivative of y = 1/x", answer: "ln|x| + C" },
      {
        question: "What is the second derivative of y = x^4?",
        answer: "12x^2",
      },
      { question: "Differentiate y = ln(x)", answer: "1/x" },
      { question: "Evaluate the integral of y = 3x^2 dx", answer: "x^3 + C" },
      { question: "What is the derivative of y = cos(x)?", answer: "-sin(x)" },
      { question: "Find the local maximum of y = -x^2 + 4x", answer: "x = 2" },
      { question: "Differentiate y = tan(x)", answer: "sec^2(x)" },
      {
        question: "Evaluate the definite integral of y = 2x from 1 to 4",
        answer: "15",
      },
      { question: "What is the derivative of y = x^5?", answer: "5x^4" },
      {
        question: "Find the slope of the tangent line for y = x^2 at x = 3",
        answer: "6",
      },
      { question: "What is the integral of y = 4?", answer: "4x + C" },
      { question: "Differentiate y = 7x - 3", answer: "7" },
      {
        question: "Find the critical points of y = x^3 - 3x",
        answer: "x = 0, ±√3",
      },
    ],
    Geometry: [
      {
        question: "What is the area of a triangle with base 10 and height 5?",
        answer: "25",
      },
      {
        question: "Find the volume of a cube with side length 4",
        answer: "64",
      },
      {
        question: "What is the sum of angles in a hexagon?",
        answer: "720 degrees",
      },
      {
        question: "Calculate the circumference of a circle with radius 7",
        answer: "14π",
      },
      {
        question: "Find the diagonal length of a square with side length 6",
        answer: "6√2",
      },
      {
        question:
          "What is the area of a parallelogram with base 8 and height 3?",
        answer: "24",
      },
      {
        question:
          "Calculate the volume of a cylinder with radius 3 and height 5",
        answer: "45π",
      },
      {
        question: "Find the surface area of a sphere with radius 4",
        answer: "64π",
      },
      {
        question:
          "What is the perimeter of a regular pentagon with side length 7?",
        answer: "35",
      },
      {
        question:
          "Calculate the area of a sector with radius 5 and angle 60 degrees",
        answer: "25π/6",
      },
      {
        question: "Find the volume of a cone with base radius 4 and height 9",
        answer: "48π",
      },
      {
        question:
          "What is the length of the hypotenuse in a right triangle with sides 9 and 12?",
        answer: "15",
      },
      {
        question: "Calculate the area of an ellipse with axes 6 and 4",
        answer: "24π",
      },
      {
        question: "Find the sum of exterior angles of any polygon",
        answer: "360 degrees",
      },
      {
        question:
          "What is the volume of a rectangular prism with dimensions 3, 4, and 5?",
        answer: "60",
      },
      {
        question:
          "Calculate the area of a trapezoid with bases 7 and 10 and height 6",
        answer: "51",
      },
      {
        question: "What is the measure of each angle in a regular octagon?",
        answer: "135 degrees",
      },
      {
        question:
          "Find the arc length of a circle with radius 6 and central angle 45 degrees",
        answer: "3π/2",
      },
      {
        question: "Calculate the area of a rhombus with diagonals 8 and 6",
        answer: "24",
      },
      {
        question:
          "What is the surface area of a cylinder with radius 5 and height 7?",
        answer: "120π",
      },
    ],
  },
};
