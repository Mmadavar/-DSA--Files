/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

const stocks = (prices) => {
   let Maxprofit = 0;
   let L = 0;

   for (let R = 1; R < prices.length; R++) {
       let profit = prices[R] - prices[L];
       if (profit > 0) {
           Maxprofit = Math.max(Maxprofit,profit)
       } else {
           L = R
       }





   }
   return Maxprofit;
}


//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
