function findMax(arr,low,high)
{
    // If there is only one element left
    if (high == low)
        return arr[low];
     
 
    // Find mid
    let mid = low + (high - low) / 2;
    // Check if mid reaches 0 ,it is greater than next element or not
    if(mid==0 && arr[mid]>arr[mid+1])
    {
        return arr[mid];
    }
 
    // Check if mid itself is maximum element
    if (mid < high && arr[mid + 1] < arr[mid] && mid>0 && arr[mid]>arr[mid-1])
    {
        return arr[mid];
    }
 
   
    // the left half or the right half
    if (arr[low] > arr[mid])
    {
        return findMax(arr, low, mid - 1);
    }
    else
    {
        return findMax(arr, mid + 1, high);
    }
}
 

    let arr = [ 5, 6, 1, 2, 3, 4 ];
    let n = arr.length;
    document.write(findMax(arr, 0, n-1 ));