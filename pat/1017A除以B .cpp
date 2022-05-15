#include <stdio.h>
#include <string.h>
int main()
{
	char str[1010];
	int B, Q, R, len, i;
	scanf("%s %d", str, &B);
	len = strlen(str);
	Q = (str[0] - '0') / B;
	if (len == 1 || (len > 1 && Q != 0))	printf("%d", Q);
	R = (str[0] - '0') % B;
	for (i = 1; i < len; i++)
	{
		Q = ((R * 10) + str[i] - '0') / B;
		printf("%d", Q);
		R = ((R * 10) + str[i] - '0') % B;
	}
	printf(" %d", R);
	return 0;
}