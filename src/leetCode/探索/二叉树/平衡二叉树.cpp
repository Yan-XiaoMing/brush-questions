#include<iostream>
#include<vector>
#include<stack>
#include<algorithm>
#include<set>
using namespace std;
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        bool judge = recur(root) != -1;
        return judge;
    }
    int recur(TreeNode* root) {
        if (!root) {
            return 0;
        }
        int left = recur(root->left);
        if (left == -1) {
            return -1;
        }
        int right = recur(root->right);
        if (right == -1) {
            return -1;
        }
        return abs(left - right) < 2 ? max(left, right) + 1 : -1;
    }
};