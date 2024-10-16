//#include<iostream>
//#include<vector>
//#include<algorithm>
//using namespace std;
//
//typedef struct 
//{
//	int key;
//	vector<int>value;
//	int sex;//0代表男,1代表女;
//}Node;
//
//bool cmp(Node& node1, Node& node2) {
//	return node1.key < node2.key;
//}
//
//int main() {
//	int N, M, K,countNode = 0;
//	Node node[301];
//	cin >> N >> M;
//	for (int i = 0; i < N; i++) {
//		node[i].key = 0;
//	}
//	//cout << node[0].key;
//	for (int i = 0; i < M; i++) {
//		int a, b;
//		cin >> a >> b;
//		for (int j = 0; j <= countNode; j++) {
//			//cout << "infor" << endl;
//			if (abs(node[j].key) == abs(a)) {
//				node[j].value.push_back(abs(b));
//				break;
//			}
//			if (node[j].key == 0) {
//				if (a < 0) {
//					node[j].sex = 1;
//				}
//				else {
//					node[j].sex = 0;
//				}
//				node[j].key = abs(a);
//				node[j].value.push_back(abs(b));
//				countNode++;
//				break;
//			}
//		}
//	}
//	sort(node, node + countNode, cmp);
//	for (int i = 0; i < countNode; i++) {
//		cout << node[i].key << " : { ";
//		sort(node[i].value.begin(),node[i].value.end(),less<int>());
//		for (int j = 0; j < node[i].value.size(); j++) {
//			cout << node[i].value[j] << " ";
//		}
//		cout <<" }"<< endl;
//	}
//	cin >> K;
//	for (int i = 0; i < K; i++) {
//		int a, b;
//		cin >> a >> b;
//	}
//}
/*
#include<iostream>
#include<string>
#include<vector>
#include<algorithm>
#include<unordered_map>
using namespace std;

unordered_map<int, bool>arr;

int main() {
	int n, m, k;
	scanf("%d%d", &n, &m);
	vector<int> v[10000];
	for (int i = 0; i < m; i++) {
		string a, b;
		cin >> a >> b;
		if (a.length() == b.length()) {
			v[abs(stoi(a))].push_back(abs(stoi(b)));
		}
		arr[abs(stoi(a)) * 10000 + abs(stoi(b))] = arr[abs(stoi(b)) * 10000 + abs(stoi(a))] = true;
	}
}
*/