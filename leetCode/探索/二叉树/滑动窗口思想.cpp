//#include<iostream>
//#include<vector>
//#include<stack>
//#include<algorithm>
//using namespace std;
//class Solution {
//public:
//    //给定一个整数数组，计算长度为 'k' 的连续子数组的最大总和
//    /*输入：arr [] = {100,200,300,400}
//        k = 2
//        输出：700
//    */
//    int maxSum(vector<int>& arr, int k) {
//        const int len = arr.size();
//        int maxNum = 0;
//        if (len < k) {
//            return -1;
//        }
//        for (int i = 0; i < k; i++) {
//            maxNum += arr[i];
//        }
//        for (int i = k; i < len; i++) {
//            maxNum = max(maxNum, maxNum + arr[i] - arr[i - k]);
//        }
//        return maxNum;
//    }
//    //给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。(minimum-window-substring)
//    /*
//        输入: S = "ADOBECODEBANC", T = "ABC"
//        输出: "BANC"
//    */
//};