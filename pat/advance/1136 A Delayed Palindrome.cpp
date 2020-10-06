//#include<iostream>
//#include<string>
//#include<algorithm>
//using namespace std;
//
//string reverseNum(string num) {
//	reverse(num.begin(), num.end());
//	return num;
//}
//
//string add(string num) {
//	string end,revNum = reverseNum(num);
//	int len = num.length(), carry = 0;
//	for (int i = 0; i < len; i++) {
//		int number = (num[i] - '0' + revNum[i] - '0') + carry;
//		carry = 0;
//		if (number >= 10) {
//			carry = 1;
//			number -= 10;
//		}
//		end += char(number + '0');
//	}
//	if (carry == 1) end += "1";
//	end = reverseNum(end);
//	return end;
//}
//
//bool judge(string num) {
//	string s;
//	s = reverseNum(num);
//	if (s == num) {
//		return true;
//	}
//	return false;
//}
//
//
//
//int main() {
//	int count = 0;
//	string a, b, c;
//	cin >> a;
//	while (count<10)
//	{
//		b = reverseNum(a);
//		bool out = judge(b);
//		//printf("%d\n", out);
//		if (out) {
//			cout << b << " is a palindromic number."<<endl;
//			break;
//		}
//		else {
//			cout << a << " + " << b << " = " << add(a) << endl;
//			a = add(a);
//			count++;
//		}
//	}
//	if (count >= 10) {
//		cout<<"Not found in 10 iterations."<<endl;
//	}
//}