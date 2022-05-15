//#include<iostream>
//#include<algorithm>
//using namespace std;
//
//typedef struct 
//{
//	int exponent;
//	double coefficient;
//}Node;
//
//bool cmp(Node a, Node b) {
//	return a.exponent > b.exponent;
//}
//
//int main() {
//	int k,testCase = 2,count = 0;
//	Node array[21];
//	Node result[21];
//	//init
//	for (int i = 0; i < 21; i++) {
//		array[i].exponent = -1;
//		array[i].coefficient = 0;
//		result[i].exponent = -1;
//		result[i].coefficient = 0;
//	}
//
//	while (testCase--)
//	{
//		scanf("%d", &k);
//		for (int i = 0; i < k; i++) {
//			int n;
//			double an;
//			scanf("%d %lf", &n, &an);
//			//printf("%d %lf ", n, an);
//			array[count].exponent = n;
//			array[count].coefficient = an;
//			count++;
//		}
//	}
//	sort(array, array + 21, cmp);
//	int i,j,endCount,resultCount;
//	i = j = endCount = resultCount = 0;
//	while (1) {
//		if (array[i].exponent < 0) {
//			break;
//		}
//		double end = 0;
//		for (; j < count; j++) {
//			if (array[j].exponent == array[i].exponent) {
//				end += array[j].coefficient;
//			}
//			if (array[i].exponent != array[j].exponent) {
//				break;
//			}
//		}
//		result[endCount].exponent = array[i].exponent;
//		result[endCount].coefficient = end;
//		if (end != 0) {
//			resultCount++;
//		}
//		endCount++;
//		end = 0;
//		i = j;
//	}
//	int printfBool = 0;
//	printf("%d", resultCount);
//	for (int i = 0; i < endCount; i++) {
//		if (result[i].exponent != -1 && result[i].coefficient != 0) {
//			if (printfBool) {
//				printf("%d %.1lf", result[i].exponent, result[i].coefficient);
//			}
//			else {
//				printf(" %d %.1lf", result[i].exponent, result[i].coefficient);
//			}
//		}
//	}
//}