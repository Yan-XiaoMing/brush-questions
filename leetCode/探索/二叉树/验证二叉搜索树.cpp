//#include<iostream>
//#include<vector>
//#include<stack>
//using namespace std;
//struct TreeNode {
//    int val;
//    TreeNode *left;
//    TreeNode *right;
//    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
//
//class Solution {
//public:
//    bool isValidBST(TreeNode* root) {
//        if (root == NULL) {
//            return true;
//        }
//        vector<int>result;
//        stack<TreeNode*>s;
//        int flag = 0;
//        int temp;
//        TreeNode* node = root;
//        while(!s.empty() || node != NULL) {
//            while ( node!=NULL)
//            {
//                s.push(node);
//                node = node->left;
//            }
//            TreeNode* top = s.top();
//            s.pop();
//            if (flag == 0) {
//                temp = top->val;
//                flag = 1;
//            }
//            else if (top->val > temp) {
//                temp = top->val;
//                result.push_back(top->val);
//            }
//            else {
//                return false;
//            }
//            if (top->right != NULL) {
//                node = top->right;
//            }
//        }
//        return true;
//    }
//};