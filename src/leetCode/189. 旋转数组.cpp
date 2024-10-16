#include<iostream>
#include<stack>
#include<queue>
#include<vector>
#include<algorithm>
using namespace std;
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int len = nums.size();
        k = k % len;
        int count = 0;
        for (int i = 0; count < len; i++) {
            int current = i;
            int prev = nums[i];
            while (1) {
                int next = (current + k) % len;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
                if (i != current)break;
            }
        }
    }
};