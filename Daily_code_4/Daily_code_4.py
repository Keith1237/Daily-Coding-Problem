def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key

def next(arr):
    n = len(arr)
    j = 0
    i = 0
    while i < n:
        if arr[i] >= 0:
            if i == 0 or arr[i] != arr[i - 1]:
                if arr[i] != j:
                    print(j)
                    i = n
                j += 1
        i += 1


array = [-1, -1, -2, 4, 3, 7, 0, 1, 2, -3, 4, 2, -2, 3, 6]
print("Original array:", array)
    
insertion_sort(array)
print("Sorted array:", array)
next(array)
