//#include<iostream>
//#include<stack>
//#include<vector>
//using namespace std;
//
//struct TreeNode {
//    int val;
//    TreeNode* left;
//    TreeNode* right;
//    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
//bool isSymmetric(TreeNode* root) {
//    if (root == NULL) {
//        return true;
//    }
//    return bfs(root->left, root->right);
//}
//
//bool bfs(TreeNode* left, TreeNode* right)
//{
//    if (NULL == left && NULL == right) return true;
//    if (NULL == left || NULL == right) return false;
//    int leftVal = left->val;
//    int rightVal = right->val;
//    if (leftVal != rightVal) return false;
//    else
//    {
//        return bfs(left->left, right->right) && bfs(left->right, right->left);
//    }
//}
//
//int main() {
//   
//}