struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution {
public:
    //·ÇµÝ¹é
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        TreeNode* node = new TreeNode(val);
        if (root == NULL) {
            return node;
        }
        TreeNode* cur = root;
        while (true) {
            if (cur->val > val) {
                if (cur->left == NULL) {
                    cur->left = node;
                    break;
                }
                cur = cur->left;
            }
            else {
                if (cur->right == NULL) {
                    cur->right = node;
                    break;
                }
                cur = cur->right;
            }
        }
        return root;
    }
    //µÝ¹é
    TreeNode* insertIntoBST1(TreeNode* root, int val) {
        if (root == NULL) {
            root = new TreeNode(val);
            return root;
        }
        if (root->val < val) {
            root->right = insertIntoBST1(root->right, val);
        }
        if (root->val > val) {
            root->left = insertIntoBST1(root->left, val);
        }
        return root;
    }
};