function add(num){
    if(num == 1){
        return 1
    }
    else{
        return num + add(num-1)
    }
}