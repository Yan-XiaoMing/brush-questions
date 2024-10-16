//#include<iostream>
//#include<vector>
//#include<stack>
//using namespace std;
//
//struct TreeNode {
//    int val;
//    TreeNode *left;
//    TreeNode *right;
//    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
// 
//class BSTIterator {
//public:
//    vector<TreeNode*>vec;
//    BSTIterator(TreeNode* root) {
//        while (root) {
//            vec.push_back(root);
//            root = root->left;
//        }
//    }
//
//    /** @return the next smallest number */
//    int next() {
//        TreeNode* p = vec.back();
//        vec.pop_back();
//        int ans = p->val;
//        p = p->right;
//        while (p) {
//            vec.push_back(p);
//            p = p->left;
//        }
//        return ans;
//    }
//
//    /** @return whether we have a next smallest number */
//    bool hasNext() {
//        return vec.size() > 0;
//    }
//};
//
///**
// * Your BSTIterator object will be instantiated and called as such:
// * BSTIterator* obj = new BSTIterator(root);
// * int param_1 = obj->next();
// * bool param_2 = obj->hasNext();
// */