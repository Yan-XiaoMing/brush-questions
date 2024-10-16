#include<algorithm>
#include<iostream>
#include<string>
using namespace std;

int main() {
	int count = 0;
	int a, tempMin = 10, scan = 10;
	int sum[10] = { 0 };
	while (scan--)
	{
		scanf("%d", &sum[count]);
		if (sum[count] != 0 && count != 0) {
			if (tempMin > count) {
				//printf("%d\n", count);
				tempMin = count;
			}
		}
		count++;
	}
	printf("%d", tempMin);
	sum[tempMin]--;
	for (int i = 0; i < 10; i++) {
		while (sum[i])
		{
			printf("%d", i);
			sum[i]--;
		}
	}
}