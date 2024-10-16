#include<unordered_map>
#include<vector>
#include<iostream>
using namespace std;
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    unordered_map<int, int> inPosition;
    vector<int> postValue;
    //TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
    //    int in_len = inorder.size();
    //    for (int i = 0; i < in_len; ++i) {
    //        in_pos[inorder[i]] = i;
    //    }
    //    post = postorder;

    //    TreeNode* root = buildTree(0, in_len - 1, 0, post.size() - 1);
    //    return root;
    //}

    //TreeNode* buildTree(int in_left, int in_right, int post_left, int post_right) {
    //    if (in_left > in_right || post_left > post_right) return NULL;

    //    int root_val = post[post_right];
    //    int root_pos = in_pos[root_val];
    //    TreeNode* node = new TreeNode(root_val);

    //    node->left = buildTree(in_left, root_pos - 1, post_left, post_left + root_pos - in_left - 1);
    //    node->right = buildTree(root_pos + 1, in_right, post_left + root_pos - in_left, post_right - 1);
    //    return node;
    //}

    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        int len = inorder.size();
        for (int i = 0; i < len; i++) {
            inPosition[inorder[i]] = i;
        }
        postValue = postorder;
        TreeNode* root = buildTree(0, len - 1, 0, postorder.size() - 1);
        return root;
    }
    TreeNode* buildTree(int leftIn, int rightIn, int leftPost, int rightPost) {
        if (leftIn > rightIn || leftPost > rightPost) {
            return NULL;
        }
        int rootVal = postValue[rightPost];
        int rootPosition = inPosition[rootVal];
        TreeNode* node = new TreeNode(rootVal);
        node->left = buildTree(leftIn, rootPosition - 1, leftPost, leftPost + rootPosition - leftIn - 1);
        node->right = buildTree(rootPosition + 1, rightIn, leftPost + rootPosition - leftIn, rightPost - 1);
        return node;
    }
    /*TreeNode* createNode(int val) {
        TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
        node->val = val;
        node->left = NULL;
        node->right = NULL;
        return node;
    }*/
   
};