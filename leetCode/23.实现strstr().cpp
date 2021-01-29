class Solution {
public:
    int strStr(string haystack, string needle) {
        if(needle.empty()){
            return 0;
        }
        vector<int>nextVal = getNextVal(needle);
        int strLen = haystack.length(),i = 0;
        int subLen = needle.length(),j = 0;
        while(i<strLen && j<subLen){
            if( j == -1 || haystack[i] == needle[j]){
                i++;
                j++;
            }
            else{
                j = nextVal[j];
            }
        }
        if(j ==  subLen){
            return i - j;
        }
        else{
            return -1;
        }
    }
   
   vector<int>getNextVal(string substr) {
	int len = substr.length();
	vector<int>nextVal(len+1, -1);
	int i = 0,j = -1;
	while (i < len) {
		if (j == -1 || substr[i] == substr[j]) {
			i++;
			j++;
			if (substr[i] != substr[j]) {
				nextVal[i] = j;
			}
			else {
				nextVal[i] = nextVal[j];
			}
		}
		else {
			j = nextVal[j];
		}
	}
	return nextVal;
    }
};