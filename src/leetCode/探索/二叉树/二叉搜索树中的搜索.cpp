//#include<iostream>
//#include<vector>
//#include<stack>
//using namespace std;
//struct TreeNode {
//    int val;
//    TreeNode* left;
//    TreeNode* right;
//    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
//class Solution {
//public:
//    TreeNode* searchBST(TreeNode* root, int val) {
//        while (root != NULL && val != root->val)
//            root = val < root->val ? root->left : root->right;
//        return root;
//    }
//};