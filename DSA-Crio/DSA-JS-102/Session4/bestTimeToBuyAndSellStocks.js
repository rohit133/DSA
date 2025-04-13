/**
 * @param {number[]} prices
 * @return {number}
 */

function bestTimeToBuyAndSellStocks(prices) {
    // implement this function
    let profit = 0;
    for(let i =0; i <= prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit = profit + prices[i] - prices[i-1];
        }
    }
    return profit;
}