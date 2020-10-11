#include<iostream>
using namespace std;

int pre[] = { 1,2,3,4,5,6 };
int in[] = { 3,2,4,1,6,5 };

//void post(int root, int start, int end) {
//	if (start > end) {
//		return;
//	}
//	int i = start;
//	while (i < end && in[i] != pre[root]) i++;
//	post(root+1,start,i-1);
//	post(root-start+i+1,i+1,end);
//	printf("%d ", pre[root]);
//}

void post(int root, int start, int end) {
	if (start > end) {
		return;
	}
	int i = start;
	while (i < end && in[i] != pre[root]) i++;
	post(root+1,0,i-1); //×ó
	post(root - start + i + 1,i+1,end); //ÓÒ
	printf("%d", pre[root]);
}

int main() {
	post(0, 0, 5);
	return 0;
}