//#include<queue>
//#include<vector>
//using namespace std;
//// Definition for a Node.
//class Node {
//public:
//    int val;
//    Node* left;
//    Node* right;
//    Node* next;
//
//    Node() : val(0), left(NULL), right(NULL), next(NULL) {}
//
//    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}
//
//    Node(int _val, Node* _left, Node* _right, Node* _next)
//        : val(_val), left(_left), right(_right), next(_next) {}
//};
//
//
//class Solution {
//public:
//    Node* connect(Node* root) {
//        if (root == NULL) {
//            return NULL;
//        }
//        queue<Node*>nodeQue;
//        vector<char>result;
//        nodeQue.push(root);
//        while (!nodeQue.empty())
//        {
//            int len = nodeQue.size();
//            for (int i = 0; i < len; i++) {
//                Node* node = nodeQue.front();
//                nodeQue.pop();
//                result.push_back((char)node->val);
//                if (i != len - 1) {
//                    node->next = nodeQue.front();
//                }
//                else {
//                    node->next = NULL;
//                }
//                if (node->left != NULL) {
//                    nodeQue.push(node->left);
//                }
//                if (node->right != NULL) {
//                    nodeQue.push(node->right);
//                }
//            }
//        }
//        return root;
//    }
//};