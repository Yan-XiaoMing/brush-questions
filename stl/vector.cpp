//#include<iostream>
//#include<vector>
//using namespace std;
//
//int main() {
//	vector<int>a;
//	cout << "print a.empty() : " << a.empty() << endl;
//	int t;
//	for (int i = 0; i < 10; i++) {
//		cin >> t;
//		a.push_back(t);
//	}
//	vector<int>b;
//	b = a;
//	cout << "print b: 直接赋值" << endl;
//	for (int i = 0; i < b.size(); i++) {
//		cout << b[i] << " ";
//	}
//	cout << endl;
//	cout << "a.size() = " << a.size() << endl;
//	cout << "print1:" << endl;
//	for (int i = 0; i < a.size(); i++) {
//		cout << a[i] << " ";
//	}
//	cout << endl;
//	a.resize(11);
//	cout << "a.size() = after resize(11) : " << a.size() << endl;
//	cout << "print2 after resize(11):" << endl;
//	for (int i = 0; i < a.size(); i++) {
//		cout << a[i] << " ";
//	}
//	cout << endl;
//	a.push_back(22);
//	cout << "print3 after push_back(22):" << endl;
//	for (int i = 0; i < a.size(); i++) {
//		cout << a[i] << " ";
//	}
//	cout << endl;
//
//	a.pop_back();
//	cout << "a.size() = after pop_back() : " << a.size() << endl;
//	cout << "print4 after pop_back():" << endl;
//	for (int i = 0; i < a.size(); i++) {
//		cout << a[i] << " ";
//	}
//	cout << endl;
//	cout << "a.empty()?:" << a.empty() << endl;
//	a.clear();
//	cout << "a.size() = after a.clear() :" << a.size() << endl;
//	cout << "print5 after a.clear():" << endl;
//	for (int i = 0; i < a.size(); i++) {
//		cout << a[i] << " ";
//	}
//	cout << endl;
//
//	vector<int>v(10);
//	cout << v.size();// 0
//
//	vector<int>v1;
//	v1.resize(8);
//
//	vector<int>v3(100, 9); // 把长度为100的数组的所有的值全部初始化为9
//
//	v[1] = 2; //可以直接类似于数组[]的方式进行访问
//
//	//auto相当于vector<int>::iterator的简写
//	for (auto it = v.begin(); it != v.end(); it++) {//使用迭代器访问 v.begin()是一个指针 v.end()是容器最后一个元素的后一个位置！后一个！
//		cout << *it << " ";
//	}
//
//	return 0;
//}