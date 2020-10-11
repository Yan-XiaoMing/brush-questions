//#include<iostream>
//using namespace std;
//
//int post[] = { 3, 4, 2, 6, 5, 1 };
//int in[] = { 3, 2, 4, 1, 6, 5 };
//
////void pre(int root, int start, int end) {
////	printf("%d", post[root]);
////	if (start > end) {
////		return;
////	}
////	int i = start;
////	while (i < end && in[i] != post[root]) i++;
////	pre(root - 1 - end + i, start, i - 1);
////	pre(root - 1, i + 1, end);
////}
//
//void pre(int root, int start, int end) {
//	if (start > end) {
//		return;
//	}
//	printf("%d ", post[root]);
//	int i = start;
//	while (i < end && in[i] != post[root]) i++;
//	pre(root - end + i - 1, start, i - 1);
//	pre(root - 1,i+1,end);
//}
//
//int main() {
//	pre(5, 0, 5);
//	return 0;
//}
//
