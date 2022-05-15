//#include<vector>
//#include<iostream>
//using namespace std;
//
//struct TreeNode {
//    int val;
//    TreeNode* left;
//    TreeNode* right;
//    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
//
//
//int maxDepth(TreeNode* root) {
//    if (root == NULL) {
//        return 0;
//    }
//    int l = 1 + maxDepth(root->left);
//    int r = 1 + maxDepth(root->right);
//    return l > r ? l : r;
//}
//
//int main() {
//
//}