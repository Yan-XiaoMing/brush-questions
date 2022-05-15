//#include<iostream>
//#include<algorithm>
//#include<vector>
//using namespace std;
//
//int coinChange1(vector<int>& coins, int amount) {
//	vector<int> dp(amount + 1, amount + 1);
//	dp[0] = 0;
//	for (int i = 0; i <= amount; i++) {
//		for (int coin : coins) {
//			if (i < coin) {
//				continue;
//			}
//			else {
//				dp[i] = min(dp[i], dp[i - coin] + 1);
//			}
//		}
//	}
//	if (dp[amount] == amount + 1) {
//		return -1;
//	}
//	else {
//		return dp[amount];
//	}
//}
//
//int coinChange2(vector<int>& coins, int amount) {
//	vector<int> dp(amount + 1, amount + 1);
//	dp[0] = 0;
//	return fun(coins, amount, dp);
//}
//
//int fun(vector<int>& coins,int amount,vector<int>&dp) {
//	if (dp[amount] != amount + 1) {
//		return dp[amount];
//	}
//	if (amount == 0)
//	{
//		return 0;
//	}
//	if (amount < 0) {
//		return -1;
//	}
//	int res = amount + 1;
//	for (int coin : coins) {
//		if (amount - coin < 0) {
//			continue;
//		}
//		else {
//			res = min(res,1+dp[amount-coin])
//		}
//	}
//	if (res != amount + 1) {
//		dp[amount] = res;
//		return dp[amount];
//	}
//	else {
//		return - 1;
//	}
//}
//
//int main() {
//
//}