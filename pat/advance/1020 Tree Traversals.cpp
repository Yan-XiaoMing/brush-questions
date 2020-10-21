//#include<iostream>
//#include<vector>
//#include<queue>
//#include<stack>
//#include<unordered_map>
//using namespace std;
//
//typedef struct TreeNode {
//	int val;
//	TreeNode* left;
//	TreeNode* right;
//	TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//}TreeNode;
//
//vector<int>inorder, postorder;
//unordered_map<int, int>inPosition;
//
//TreeNode* buildTree(int inLeft, int inRight, int postLeft, int postRight) {
//	if (inLeft > inRight || postLeft > postRight) {
//		return NULL;
//	}
//	int rootVal = postorder[postRight];
//	int rootPosition = inPosition[rootVal];
//	TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
//	node->left = NULL;
//	node->right = NULL;
//	node->val = rootVal;
//	//TreeNode* node = new TreeNode(rootVal);
//	node->left = buildTree(inLeft, rootPosition - 1, postLeft, postLeft + rootPosition - inLeft - 1);
//	node->right = buildTree(rootPosition + 1, inRight, postLeft + rootPosition - inLeft, postRight - 1);
//	return node;
//};
//
//int main() {
//	int n;
//	scanf("%d", &n);
//	for (int i = 0; i < n; i++) {
//		int temp;
//		scanf("%d", &temp);
//		postorder.push_back(temp);
//	}
//	for (int i = 0; i < n; i++) {
//		int temp;
//		scanf("%d", &temp);
//		inorder.push_back(temp);
//		inPosition[inorder[i]] = i;
//	}
//	int len = inorder.size();
//	TreeNode* root = buildTree(0, len - 1, 0, len - 1);
//	queue<TreeNode*>queue;
//	vector<int>result;
//	queue.push(root);
//	while (!queue.empty())
//	{
//		int size = queue.size();
//		for (int i = 0; i < size; i++) {
//			TreeNode* node = queue.front();
//			queue.pop();
//			result.push_back(node->val);
//			if (node->left != NULL) {
//				queue.push(node->left);
//			}
//			if(node->right!=NULL){
//				queue.push(node->right);
//			}
//		}
//	}
//	for (int i = 0; i < result.size(); i++) {
//		if (i == 0) {
//			printf("%d", result[i]);
//		}
//		else {
//			printf(" %d", result[i]);
//		}
//	}
//}