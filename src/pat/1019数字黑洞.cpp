//#include<iostream>
//#include<algorithm>
//using namespace std;
//
//bool compareDown(int a, int b)
//{
//	return a > b;		//升序排序，如果改为return a>b,则为降序
//}
//bool compareUp(int a, int b) {
//	return a < b;
//}
//
//bool checkSame(int arr[]) {
//	if (arr[0] == arr[1] == arr[2] == arr[3]) {
//		return true;
//	}
//	else {
//		return false;
//	}
//}
//
//bool checkEnd(int arr[]) {
//	if (arr[0] == 6 && arr[1] == 1 && arr[2] == 7 && arr[3] == 4) {
//		return true;
//	}
//	else {
//		return false;
//	}
//}
//
//int main() {
//	int num,i,tempNum;
//	scanf("%d", &num);
//	tempNum = num;
//	int num1[4], num2[4], result[4];
//	i = 0;
//	while (num) {
//		num1[i] = (num % 10);
//		num /= 10;
//		i++;
//	}
//	if (checkSame(num1)) {
//		printf("%d - %d = 0000\n", tempNum);
//	}
//	sort(num1,num1+10,compareDown)
//	
//}