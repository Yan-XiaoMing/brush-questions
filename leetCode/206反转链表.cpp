struct ListNode {
  int val;
  ListNode * next;
  ListNode(int x): val(x), next(NULL) {}
};
class Solution {
  public:
    ListNode * reverseList(ListNode * head) {
     ListNode * temp;
     ListNode * cur = head;
     ListNode * pre = NULL;
     while (cur){
       temp =  cur->next;
       cur -> next = pre;
       pre = cur;
       cur = temp;
     }
     return pre;
    }
};