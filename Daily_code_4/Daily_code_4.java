package Daily_code_4;
import java.util.Arrays;

public class Daily_code_4 {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
    public static void next(int[] arr){
        int n = arr.length-1;
        int j=0;
        for (int i = 0; i < n; i++) {
            if(arr[i]>=0){
                if(arr[i]!=arr[i-1]){
                    if(arr[i]!=j){
                    System.out.println(j);
                    i = arr.length-1;
                    }
                    j++;
                }  
            }
        } 

    }

    public static void main(String[] args) {
        int[] array = { -1,-1,-2,4,3,7,0,1,2,-3,4,2,-2,3,6};
        System.out.println("Original array: " + Arrays.toString(array));
        
        insertionSort(array);
        System.out.println("Sorted array: " + Arrays.toString(array));
        next(array);
        
    }
}
