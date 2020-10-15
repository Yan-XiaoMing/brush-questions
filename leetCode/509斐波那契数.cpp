//#include<iostream>
//#include<vector>
//#include<queue>
//using namespace std;
//
//struct TreeNode {
//	int val;
//	TreeNode* left;
//	TreeNode* right;
//	TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//};
//
//int fib(int N) {
//	if (N < 1) {
//		return 0;
//	}
//	if (N == 1 || N == 2) {
//		return 1;
//	}
//	int curr, pre ;
//	pre = curr = 1;
//	int sum = 1;
//	for (int i = 3; i <= N; i++) {
//		sum = pre + curr;
//		pre = curr;
//		curr = sum;
//	}
//	return sum;
//}
//
//vector<vector<int>> levelOrder(TreeNode* root) {
//	vector<vector<int>>result;
//	queue<TreeNode*>queue;
//	if (root == NULL) {
//		return result;
//	}
//	queue.push(root);
//	while (!queue.empty())
//	{
//		int len = queue.size();
//		vector<int>level;
//		for (int i = 0; i < len; i++) {
//			TreeNode* node = queue.front();
//			queue.pop();
//			level.push_back(node->val);
//			if (node->left!= NULL) {
//				queue.push(node->left);
//			}
//			if (node->right != NULL) {
//				queue.push(node->right);
//			}
//		}
//		result.push_back(level);
//	}
//	return result;
//}
//
//int main() {
//	int n;
//	scanf("%d", &n);
//}