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
    unordered_map<int, int>inPosition;
    vector<int>preValue;
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        int len = inorder.size();
        for (int i = 0; i < len; i++) {
            inPosition[inorder[i]] = i;
        }
        preValue = preorder;
        TreeNode* root = buildTree(0, len - 1, 0, len - 1);
        return root;
    }
    TreeNode* buildTree(int preLeft, int preRight, int inLeft, int inRight) {
        if (preLeft > preRight || inLeft > inRight) {
            return NULL;
        }
        int rootValue = preValue[preLeft];
        int rootPosition = inPosition[rootValue];
        TreeNode* node = new TreeNode(rootValue);
        node->left = buildTree(preLeft + 1, preLeft + rootPosition - inLeft, inLeft, rootPosition - 1);
        node->right = buildTree(preLeft + rootPosition - inLeft + 1, preRight, rootPosition + 1, inRight);
        return node;
    }
};