//#include<iostream>
//#include<stack>
//#include<vector>
//#include<algorithm>
//#include<unordered_map>
//#include<queue>
//using namespace std;
//typedef struct 
//{
//	string id;
//	int k;
//	vector<string>childNode;
//}TreeNode;
//int main() {
//	int n, m,maxLevel,space = 0;
//	unordered_map<string,TreeNode>mymap;
//	queue<TreeNode>queue;
//	cin >> n >> m;
//	if (n == 0) {
//		return 0;
//	}
//	for (int i = 0; i < m; i++) {
//
//		TreeNode treeNode;
//		cin >> treeNode.id >> treeNode.k;
//		//printf("%s\n", treeNode.id);
//		for (int j = 0; j < treeNode.k; j++) {
//			string tempStr;
//			cin >> tempStr;
//			treeNode.childNode.push_back(tempStr);
//		}
//		mymap[treeNode.id] = treeNode;
//	}
//	TreeNode node = mymap["01"];
//	mymap.erase("01");
//	queue.push(node);
//	while (!queue.empty())
//	{
//		int len = queue.size();
//		int level = 0;
//		for (int i = 0; i < len; i++) {
//			TreeNode node = queue.front();
//			queue.pop();
//			if (node.k == 0) {
//				level++;
//			}
//			else {
//				for (int i = 0; i < node.childNode.size(); i++) {
//					TreeNode value = mymap[node.childNode[i]];
//					mymap.erase(node.childNode[i]);
//					queue.push(value);
//				}
//			}
//		}
//		if (!space) {
//			//printf("%d", level);
//			cout << level;
//			space = 1;
//		}
//		else{
//			cout <<" "<< level;
//			//printf(" %d", level);
//		}
//	}
//}