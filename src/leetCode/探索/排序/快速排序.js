function quickSort(nums){
    //递归基数左右的序列
    function recursive(arr,left,right){
        if(left >= right){
            return
        }
        let index = partition(arr,left,right)
        recursive(arr,left,index-1)
        recursive(arr,index+1,right)
        return arr
    }
    //将小于基数的放左边大于基数的放右边,return 基数的位置
    function partition(arr,left,right){
        //取得第一个数作为基数
        let temp = arr[left]
        while(left<right){
            while(left < right && arr[right] >= temp){
                right--
            }
            arr[left] = arr[right]
            while(left < right && arr[left] < temp){
                left++
            }
            arr[right] = arr[left]
        }
        arr[left] = temp
        return left
    }
    recursive(nums,0,nums.length-1)
}