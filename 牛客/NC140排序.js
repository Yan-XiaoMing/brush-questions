/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort( arr ) {
    quicklySort(arr,0,arr.length-1)
    return arr
}
function quicklySort( arr,left,right ){
    if(left < right){
        let position = partition(arr,left,right)
        quicklySort(arr,left,position-1)
        quicklySort(arr,position+1,right)
    }
}
function partition(arr,left,right){
    let first = arr[left]
    while(left < right){
        while(left < right && arr[right] >= first){
            right--
        }
        swap(arr,left,right)
        while (left < right && arr[left] <= first) {
            left++;
        }
        swap(arr,left,right)
    }
    return left
}
function swap(arr,i,j){
    let temp= arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
module.exports = {
    MySort : MySort
};