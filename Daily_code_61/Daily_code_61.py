def implementation(x,y):
    value = 1
    if y > 0:
        for i in range(0, y):
            value = value * x
        return value
    elif y == 0 :
        return value
    else:
        for i in range(0, y,-1):
            value = value * 1/2
        return value
    
x = 10
y = 2
answer = implementation(x,y)
print(answer)