//#include<iostream>
//#include<vector>
//#include<stack>
//#include<algorithm>
//using namespace std;
//class Solution {
//public:
//    //����һ���������飬���㳤��Ϊ 'k' �����������������ܺ�
//    /*���룺arr [] = {100,200,300,400}
//        k = 2
//        �����700
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
//    //����һ���ַ��� S ��һ���ַ��� T������ S ���ҳ����� T ������ĸ����С�Ӵ���(minimum-window-substring)
//    /*
//        ����: S = "ADOBECODEBANC", T = "ABC"
//        ���: "BANC"
//    */
//};