//#include<iostream>
//#include<vector>
//#include<stack>
//#include<set>
//using namespace std;
//class KthLargest {
//public:
//    int K;
//    multiset<int> st;
//    KthLargest(int k, vector<int>& nums) {
//        for (int n : nums) {
//            st.insert(n);
//            if (st.size() > k) {
//                st.erase(st.begin());
//            }
//        }
//        K = k;
//    }
//
//    int add(int val) {
//        st.insert(val);
//        if (st.size() > K) {
//            st.erase(st.begin());
//        }
//        return *st.begin();
//    }
//};
