#include <stack>
using namespace std;

struct TreeNode {
	int val;
	TreeNode * left, * right;
};

TreeNode * Convert(TreeNode * root) {
	if (root == NULL)
		return root;
	TreeNode * listHead = NULL;
	TreeNode * listLastNode = NULL;
	stack<TreeNode*> s;
	while (root) {
		while (root) {
			root = root->left;
			s.push(root);
		}
		root = s.top();
		s.pop();
		if (listHead == NULL) {
			listHead = root;
		}
		else {
			listLastNode->right = root;		
		}
		listLastNode = root;
		root = root->right;	
	}
	return listHead;
}