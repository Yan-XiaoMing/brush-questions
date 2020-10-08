#include<iostream>
#include<vector>
#include<stack>
using namespace std;
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};
vector<int> preOrderIteration(TreeNode* root) {
    vector<int>result;
    if (root == NULL) {
        return result;
    }
    stack<TreeNode*>stack;
    stack.push(root);
    while (!stack.empty())
    {
        TreeNode* node = stack.top();
        stack.pop();
        result.push_back(node->val);
        cout << (node->val + " ");
        if (node->right != NULL) {
            stack.push(node->right);
        }
        if (node->left != NULL) {
            stack.push(node->left);
        }
    }
    return result;
}

vector<int> inOrderIteration(TreeNode* root) {
    vector<int> result;
    if (root == NULL) {
        return result;
    }
    TreeNode* node = root;
    stack<TreeNode*>stack;
    while (!stack.empty() || node != NULL)
    {
        while (node != NULL) {
            stack.push(node);
            node = node->left;
        }
        TreeNode* pop = stack.top();
        stack.pop();
        result.push_back(pop->val);
        if (pop->right != NULL) {
            node = pop->right;
        }
    }
    return result;
}

vector<int> postOrderIteration(TreeNode* root) {
    vector<int> result;
    if (root == NULL) {
        return result;
    }
    stack<TreeNode*>stack1;
    stack<TreeNode*>stack2;
    stack1.push(root);
    while (!stack1.empty())
    {
        TreeNode* node = stack1.top();
        stack1.pop();
        stack2.push(node);
        if (node->left != NULL) {
            stack1.push(node->left);
        }
        if (node->right != NULL) {
            stack1.push(node->right);
        }
    }
    while (!stack2.empty()) {
        result.push_back(stack2.top()->val);
        stack2.pop();
    }
    return result;
}

int main() {

}