let annualProfit = ( 30000 - 5000);
let fixedSales = (6/100 * 5000) + (8/100 * 5000);
annualProfit -= fixedSales;
let sales = (10/100 * 10000);
let salesCount = 2;
while (annualProfit > 0) {
annualProfit -= sales
salesCount++;
}
console.log("We need to make "+ salesCount + " sales");


