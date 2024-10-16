#include<stdio.h>
#include<string.h>
#include<math.h>
#include <stdlib.h>
using namespace std;

char findMax(int a, int b, int c) {
	char max;
	if (a < b) {
		max = 'C';
	}
	else {
		max = 'B';
	}
	if (a < c && b < c) {
		max = 'J';
	}
	return max;
}

//int main() {
//	int n;
//	int w, p, l;
//	int ab, ac, aj, bb, bc, bj;
//	ab = ac = aj = bb = bc = bj = w = p = l = 0;
//	scanf("%d", &n);
//	getchar();
//	while (n--) {
//		char a, b;
//		scanf("%c %c", &a, &b);
//		//printf("%c %c\n", a, b);
//		getchar();
//		if (a == 'C' && b == 'J') {
//			w++;
//			ac++;
//			//printf("cj\n");
//		}
//		else if (a == 'C' && b == 'B') {
//			l++;
//			bb++;
//		}
//		else if (a == 'B' && b == 'J') {
//			l++;
//			bj++;
//		}
//		else if (a == 'B' && b == 'C') {
//			w++;
//			ab++;
//			//printf("BC\n");
//		}
//		else if (a == 'J' && b == 'B') {
//			w++;
//			aj++;
//			//printf("JB\n");
//		}
//		else if (a == 'J' && b == 'C') {
//			l++;
//			bc++;
//		}
//		else if (a == b) {
//			p++;
//		}
//	}
//	printf("%d %d %d\n", w, p, l);
//	printf("%d %d %d\n", l, p, w);
//	char maxa = findMax(ab,ac,aj);
//	char maxb = findMax(bb, bc, bj);
//	printf("%c %c", maxa, maxb);
//}

