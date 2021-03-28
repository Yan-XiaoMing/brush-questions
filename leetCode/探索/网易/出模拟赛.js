const input = readline().split(' ')
let left = 0,mid
let [E,EM,M,MH,H] = input
let right = E + EM + M + MH + H
let ans = Math.min(E,Math.(M,H))
while(left < right){
    mid = left + (left + right)/2
    if(judge(E, EM, M, MH, H, mid)){
        ans = max(ans, mid);
        left = mid + 1;
    }
    else{
        right = mid-1;
    }
    console.log(ans)
    return 0
}


function judge(E,EM,M,H,mid){
    if(H < mid){
        EH -= (mid - H)
        if(EH < 0){
            return 0
        }
        
    }
    if(E <mid){
        EM -=  (mid - E)
        if(EM < 0){
            return 0
        }
    }
    if(EM + EH + M <mid){
        return 0
    }
    return 1
}