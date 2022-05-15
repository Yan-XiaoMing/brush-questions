//#include<iostream>
//#include<vector>
//using namespace std;
//
//int pivotIndex(vector<int>& nums) {
//    int sum = 0, leftsum = 0;
//    for (int x : nums) sum += x;
//    for (int i = 0; i < nums.size(); ++i) {
//        if (leftsum == sum - leftsum - nums[i]) return i;
//        leftsum += nums[i];
//    }
//    return -1;
//}
//int main() {
//	vector<int>n = { 1,2,3 };
//	cout << pivotIndex(n) << endl;
//}