class Solution {
public:
    int strStr(string haystack, string needle) {
        if(needle.empty())return 0;
        int i=0,m=haystack.size();//文本指针i用来指示文本串
        int j=0,n=needle.size();//模式指针j用来指示模式串
        vector<int> nextVal=get_nextVal(needle);
        while(i<m&&j<n){
            if(j==-1||needle[j]==haystack[i])i++,j++;
            else j=nextVal[j];
        }
        return j==n?i-j:-1;
    }

    //普通：get_next
    vector<int> get_next(const string& pat){
        int n=pat.size();
        vector<int> next(n+1,-1);//这里数组大小为n+1，要算上pat[n-1]
        int k=-1,j=0;
        while(j<n){
            if(k==-1||pat[k]==pat[j])next[++j]=++k;//k，j指针都右移一位
            else k=next[k];//后缀指针k回退到next[k]（下标）的位置
        }
        return next;
    }

    //优化：get_nextVal
    vector<int> get_nextVal(const string& pat){
        int n=pat.size();
        vector<int> nextVal(n,-1);//这里next数组大小为n，已经算上pat[n-1]了
        int k=-1,j=0;
        while(j<n-1){
            if(k==-1||pat[k]==pat[j]){
                k++,j++;
                if(pat[j]!=pat[k])nextVal[j]=k;
                else nextVal[j]=nextVal[k];
            }
            else k=nextVal[k];
        }
        return nextVal;
    }

};