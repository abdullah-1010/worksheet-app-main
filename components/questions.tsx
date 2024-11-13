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
      {
        questionText: "Differentiate",
        questionMath: "e^(2x)",
        answer: "2e^(2x)",
      },
      {
        questionText: "Find the integral of",
        questionMath: "sin(x) dx",
        answer: "-cos(x) + C",
      },
      {
        questionText: "What is the limit of",
        questionMath: "(1 + 1/n)^n",
        questionTextSuffix: "as n approaches infinity?",
        answer: "e",
      },

      { questionText: "Differentiate", questionMath: "x^3", answer: "3x^2" },
      {
        questionText: "Find the derivative of",
        questionMath: "ln(x)",
        answer: "1/x",
      },
      {
        questionText: "What is the derivative of",
        questionMath: "cos(x)?",
        answer: "-sin(x)",
      },
      {
        questionText: "Evaluate the integral of",
        questionMath: "x \\; dx",
        answer: "x^2 / 2 + C",
      },
      {
        questionText: "Find the critical points of",
        questionMath: "x^2 - 4x",
        answer: "x = 2",
      },
      {
        questionText: "Differentiate",
        questionMath: "tan(x)",
        answer: "sec^2(x)",
      },
      {
        questionText: "What is the second derivative of",
        questionMath: "x^3?",
        answer: "6x",
      },
      {
        questionText: "Differentiate",
        questionMath: "log(x)",
        answer: "1/(x \\ln(10))",
      },
      {
        questionText: "Find the local minimum of",
        questionMath: "x^2 + 3x",
        answer: "x = -1.5",
      },
      {
        questionText: "Evaluate the definite integral of",
        questionMath: "x \\text{ from } 0 \\text{ to } 2",
        answer: "2",
      },
      {
        questionText: "Differentiate",
        questionMath: "\\sin^2(x)",
        answer: "2\\sin(x)\\cos(x)",
      },
      {
        questionText: "Find the derivative of",
        questionMath: "e^{-x}",
        answer: "-e^{-x}",
      },
      {
        questionText: "What is the antiderivative of",
        questionMath: "1/x?",
        answer: "\\ln|x| + C",
      },
      { questionText: "Differentiate", questionMath: "x^4", answer: "4x^3" },
      {
        questionText: "What is the integral of",
        questionMath: "2x?",
        answer: "x^2 + C",
      },
      {
        questionText: "Find the slope of the tangent at",
        questionMath: "x = 1 \\text{ for } y = x^2",
        answer: "2",
      },
      {
        questionText: "Differentiate",
        questionMath: "\\sqrt{x}",
        answer: "1/(2\\sqrt{x})",
      },
    ],
    Geometry: [
      {
        questionText: "What is the area of a circle with radius",
        questionMath: "r?",
        answer: "\\pi r^2",
      },
      {
        questionText: "What is the sum of interior angles of a triangle?",
        answer: "180 \\text{ degrees}",
      },
      {
        questionText: "Calculate the perimeter of a square with side length",
        questionMath: "4",
        answer: "16",
      },
      {
        questionText: "What is the volume of a sphere with radius",
        questionMath: "r?",
        answer: "\\frac{4}{3} \\pi r^3",
      },
      {
        questionText: "Find the area of a rectangle with length",
        questionMath: "5 \\text{ and width } 2",
        answer: "10",
      },
      {
        questionText:
          "What is the length of the hypotenuse in a right triangle with sides",
        questionMath: "3 \\text{ and } 4?",
        answer: "5",
      },
      {
        questionText: "Calculate the area of a triangle with base",
        questionMath: "4 \\text{ and height } 5",
        answer: "10",
      },

      {
        questionText:
          "What is the measure of each angle in an equilateral triangle?",
        questionMath: "", // Empty string to prevent KaTeX rendering issues
        answer: "60 \\text{ degrees}",
      },

      {
        questionText: "Find the circumference of a circle with diameter",
        questionMath: "10",
        answer: "10\\pi",
      },
      {
        questionText: "What is the surface area of a cube with side length",
        questionMath: "3?",
        answer: "54",
      },
      {
        questionText: "Find the diagonal of a rectangle with sides",
        questionMath: "6 \\text{ and } 8",
        answer: "10",
      },
      {
        questionText: "Calculate the volume of a cylinder with radius",
        questionMath: "3 \\text{ and height } 5",
        answer: "45\\pi",
      },
      {
        questionText: "What is the area of a sector with radius",
        questionMath: "4 \\text{ and angle } 90 \\text{ degrees}?",
        answer: "2\\pi",
      },
      {
        questionText: "Find the area of a trapezoid with bases",
        questionMath: "5 \\text{ and } 7 \\text{ and height } 4",
        answer: "24",
      },
      {
        questionText: "What is the perimeter of a pentagon with side length",
        questionMath: "6?",
        answer: "30",
      },
      {
        questionText: "Calculate the area of an ellipse with axes",
        questionMath: "4 \\text{ and } 3",
        answer: "12\\pi",
      },
      {
        questionText: "Find the volume of a cone with radius",
        questionMath: "2 \\text{ and height } 6",
        answer: "8\\pi",
      },
      {
        questionText: "What is the sum of exterior angles of any polygon?",
        questionMath: "", // Empty string to prevent KaTeX rendering issues
        answer: "360 \\text{ degrees}",
      },
      {
        questionText: "Calculate the area of a parallelogram with base",
        questionMath: "8 \\text{ and height } 5",
        answer: "40",
      },
      {
        questionText: "Find the length of the arc of a circle with radius",
        questionMath: "5 \\text{ and angle } 60 \\text{ degrees}",
        answer: "\\frac{5\\pi}{3}",
      },
    ],
  },
  GCSE: {
    Algebra: [
      {
        questionText: "Solve for x:",
        questionMath: "2x + 5 = 15",
        answer: "5",
      },
      {
        questionText: "Factorize:",
        questionMath: "x^2 - 16",
        answer: "(x - 4)(x + 4)",
      },
      {
        questionText: "Expand",
        questionMath: "(x - 3)(x + 7)",
        answer: "x^2 + 4x - 21",
      },
      {
        questionText: "Solve the quadratic equation:",
        questionMath: "x^2 - 4x - 12 = 0",
        answer: "6 \\text{ and } -2",
      },
      {
        questionText: "Simplify:",
        questionMath: "\\frac{3x^2y}{6xy}",
        answer: "\\frac{x}{2}",
      },
      { questionText: "Solve for y:", questionMath: "2y + 3 = 7", answer: "2" },
      {
        questionText: "What are the roots of",
        questionMath: "x^2 - 9x + 20 = 0?",
        answer: "4 \\text{ and } 5",
      },
      {
        questionText: "Expand",
        questionMath: "(2x + 5)^2",
        answer: "4x^2 + 20x + 25",
      },
      {
        questionText: "Simplify:",
        questionMath: "5x - 3(x - 4)",
        answer: "2x + 12",
      },
      {
        questionText: "Solve for x:",
        questionMath: "4x^2 = 64",
        answer: "4 \\text{ or } -4",
      },
      {
        questionText: "Factorize:",
        questionMath: "x^2 - 10x + 25",
        answer: "(x - 5)^2",
      },
      {
        questionText: "What is the value of x if",
        questionMath: "3(x - 2) = 12?",
        answer: "6",
      },
      {
        questionText: "Solve for x:",
        questionMath: "x^2 - 49 = 0",
        answer: "7 \\text{ or } -7",
      },
      {
        questionText: "Simplify:",
        questionMath: "\\frac{2x^3}{4x}",
        answer: "\\frac{x^2}{2}",
      },
      {
        questionText: "Solve for y:",
        questionMath: "5y - 3 = 2y + 12",
        answer: "5",
      },
      {
        questionText: "Factorize:",
        questionMath: "x^2 - 25",
        answer: "(x - 5)(x + 5)",
      },
      {
        questionText: "Expand",
        questionMath: "(x + 2)(x - 2)",
        answer: "x^2 - 4",
      },
      {
        questionText: "Solve for x:",
        questionMath: "2(x - 3) = 14",
        answer: "10",
      },
      {
        questionText: "Simplify:",
        questionMath: "x^2 - 4x + 4",
        answer: "(x - 2)^2",
      },
      {
        questionText: "Solve for x:",
        questionMath: "(x + 3)(x - 5) = 0",
        answer: "-3 \\text{ or } 5",
      },
    ],

    Calculus: [
      {
        questionText: "Differentiate",
        questionMath: "y = 3x^2 + 2x - 5",
        answer: "6x + 2",
      },
      {
        questionText: "Find the integral of",
        questionMath: "2x \\; dx",
        answer: "x^2 + C",
      },
      {
        questionText: "What is the derivative of",
        questionMath: "y = x^3?",
        answer: "3x^2",
      },
      {
        questionText: "Evaluate the definite integral of",
        questionMath: "x \\text{ from } 0 \\text{ to } 3",
        answer: "4.5",
      },
      {
        questionText: "Find the derivative of",
        questionMath: "y = \\sin(x)",
        answer: "\\cos(x)",
      },
      {
        questionText: "What is the limit of",
        questionMath: "(2x + 1) \\text{ as } x \\to 2?",
        answer: "5",
      },
      {
        questionText: "Differentiate",
        questionMath: "y = e^{2x}",
        answer: "2e^{2x}",
      },
      {
        questionText: "Find the antiderivative of",
        questionMath: "y = \\frac{1}{x}",
        answer: "\\ln|x| + C",
      },
      {
        questionText: "What is the second derivative of",
        questionMath: "y = x^4?",
        answer: "12x^2",
      },
      {
        questionText: "Differentiate",
        questionMath: "y = \\ln(x)",
        answer: "\\frac{1}{x}",
      },
      {
        questionText: "Evaluate the integral of",
        questionMath: "y = 3x^2 \\; dx",
        answer: "x^3 + C",
      },
      {
        questionText: "What is the derivative of",
        questionMath: "y = \\cos(x)?",
        answer: "-\\sin(x)",
      },
      {
        questionText: "Find the local maximum of",
        questionMath: "y = -x^2 + 4x",
        answer: "x = 2",
      },
      {
        questionText: "Differentiate",
        questionMath: "y = \\tan(x)",
        answer: "\\sec^2(x)",
      },
      {
        questionText: "Evaluate the definite integral of",
        questionMath: "y = 2x \\text{ from } 1 \\text{ to } 4",
        answer: "15",
      },
      {
        questionText: "What is the derivative of",
        questionMath: "y = x^5?",
        answer: "5x^4",
      },
      {
        questionText: "Find the slope of the tangent line for",
        questionMath: "y = x^2 \\text{ at } x = 3",
        answer: "6",
      },
      {
        questionText: "What is the integral of",
        questionMath: "y = 4?",
        answer: "4x + C",
      },
      {
        questionText: "Differentiate",
        questionMath: "y = 7x - 3",
        answer: "7",
      },
      {
        questionText: "Find the critical points of",
        questionMath: "y = x^3 - 3x",
        answer: "x = 0, \\pm \\sqrt{3}",
      },
    ],

    Geometry: [
      {
        questionText:
          "What is the area of a triangle with base 10 and height 5?",
        questionMath: "",
        answer: "25",
      },
      {
        questionText: "Find the volume of a cube with",
        questionMath: "4",
        questionTextSuffix: "side length",
        answer: "64",
      },
      {
        questionText: "What is the sum of angles in a hexagon?",
        questionMath: "",
        answer: "720 \\text{ degrees}",
      },
      {
        questionText: "Calculate the circumference of a circle with",
        questionMath: "r = 7",
        questionTextSuffix: "radius",
        answer: "14\\pi",
      },
      {
        questionText: "Find the diagonal length of a square with",
        questionMath: "6",
        questionTextSuffix: "side length",
        answer: "6\\sqrt{2}",
      },
      {
        questionText: "What is the area of a parallelogram with",
        questionMath: "b = 8, h = 3",
        questionTextSuffix: "base and height",
        answer: "24",
      },
      {
        questionText: "Calculate the volume of a cylinder with",
        questionMath: "r = 3, h = 5",
        questionTextSuffix: "radius and height",
        answer: "45\\pi",
      },
      {
        questionText: "Find the surface area of a sphere with",
        questionMath: "r = 4",
        questionTextSuffix: "radius",
        answer: "64\\pi",
      },
      {
        questionText: "What is the perimeter of a regular pentagon with",
        questionMath: "7",
        questionTextSuffix: "side length",
        answer: "35",
      },
      {
        questionText: "Calculate the area of a sector with",
        questionMath: "r = 5, \\theta = 60^\\circ",
        questionTextSuffix: "radius and angle",
        answer: "\\frac{25\\pi}{6}",
      },
      {
        questionText: "Find the volume of a cone with",
        questionMath: "r = 4, h = 9",
        questionTextSuffix: "base radius and height",
        answer: "48\\pi",
      },
      {
        questionText:
          "What is the length of the hypotenuse in a right triangle with sides",
        questionMath: "9 \\text{ and } 12?",
        answer: "15",
      },
      {
        questionText: "Calculate the area of an ellipse with",
        questionMath: "a = 6, b = 4",
        questionTextSuffix: "axes",
        answer: "24\\pi",
      },
      {
        questionText: "Find the sum of exterior angles of any polygon",
        questionMath: "",
        answer: "360 \\text{ degrees}",
      },
      {
        questionText: "What is the volume of a rectangular prism with",
        questionMath: "3, 4, 5",
        questionTextSuffix: "dimensions",
        answer: "60",
      },
      {
        questionText: "Calculate the area of a trapezoid with",
        questionMath: "b_1 = 7, b_2 = 10, h = 6",
        questionTextSuffix: "bases and height",
        answer: "51",
      },
      {
        questionText: "What is the measure of each angle in a regular octagon?",
        questionMath: "",
        answer: "135 \\text{ degrees}",
      },
      {
        questionText: "Find the arc length of a circle with",
        questionMath: "r = 6, \\theta = 45^\\circ",
        questionTextSuffix: "radius and central angle",
        answer: "\\frac{3\\pi}{2}",
      },
      {
        questionText: "Calculate the area of a rhombus with",
        questionMath: "d_1 = 8, d_2 = 6",
        questionTextSuffix: "diagonals",
        answer: "24",
      },
      {
        questionText: "What is the surface area of a cylinder with",
        questionMath: "r = 5, h = 7",
        questionTextSuffix: "radius and height",
        answer: "120\\pi",
      },
    ],
  },
};
