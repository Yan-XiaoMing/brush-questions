#include<iostream>
#include<stack>
#include<vector>
#include<queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

//ตÝน้
bool hasPathSum1(TreeNode* root, int sum) {
    if (root == NULL) {
        return false;
    }
    if (root->left == NULL && root->right == NULL)
    {
        return root->val == sum;
    }
    return hasPathSum1(root->left, sum - root->val) || hasPathSum1(root->right, sum - root->val);
}

//BFS
bool hasPathSum(TreeNode* root, int sum) {
    if (root == nullptr) {
        return false;
    }
    queue<TreeNode*> que_node;
    queue<int> que_val;
    que_node.push(root);
    que_val.push(root->val);
    while (!que_node.empty()) {
        TreeNode* now = que_node.front();
        int temp = que_val.front();
        que_node.pop();
        que_val.pop();
        if (now->left == nullptr && now->right == nullptr) {
            if (temp == sum) return true;
            continue;
        }
        if (now->left != nullptr) {
            que_node.push(now->left);
            que_val.push(now->left->val + temp);
        }
        if (now->right != nullptr) {
            que_node.push(now->right);
            que_val.push(now->right->val + temp);
        }
    }
    return false;
}


int main() {

}