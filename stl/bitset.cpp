//#include<iostream>
//#include<bitset>
//using namespace std;
//int main() {
//	bitset<5> b("11");
//	for (int i = 0; i < 5; i++) {
//		cout << b[i];
//	}
//	cout << endl << b.any(); // b中是否存在1的二进制位
//	cout << endl << b.none();//b中不存在1吗?
//	cout << endl << b.count();//b中1的二进制位数
//	cout << endl << b.size();//b中的二进制位数
//	cout << endl << b.test(2); //测试下标2处是否二进制位为1
//	b.set(4);//把b的下标4设为1
//	b.reset();//把所有位都归为0
//	b.reset(4);//把第4位下标归0
//	b.flip();//b的所有二进制位按位取反
//	unsigned long a = b.to_ulong();//b转换为unsigned long类型
//	return 0;
//}