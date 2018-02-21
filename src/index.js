module.exports = function solveEquation(equation) {
    var base=equation.split(" ");
    base[1].split("x");

    var a=Number(base[0]);
    var b=Number(base[3]+base[4]);
    var c=Number(base[7]+base[8]);

    var d=b*b-4*a*c;

    var firstSolution=((-b+Math.sqrt(d))/(2*a));
    var secondSolution=((-b-Math.sqrt(d))/(2*a));

    var solution=[Math.round(firstSolution), Math.round(secondSolution)];
    return solution.sort((a,b)=>a-b);
}
