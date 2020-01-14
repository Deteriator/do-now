'''
P: Given an array of numbers and a target number, return the number of pairs that add to the target number

E: pair_sums([1,3,2,2],4) == 2
   pair_sums([1,3,2,2,3],5) == 1
   
D: array, integer, set, tuple

A:
    1) Create 2 sets, one to hold numbers as they our seen and one to hold our pairs
    2) Loop over the array
        a) set a Number to find from the target number subtracted by the 
        b) if the target is not in the see set
            -add it to the set
        c) else add the the smaller of the two numbers to the pairs set followed by the larger one.
        
    3)return the length of the pairs set.
C:
'''
def pair_sums(arrNum,tarNum):
    
    if len(arrNum) == 0: return None
    if len(arrNum) < 2: return arrNum
        
    seenNum = set()
    pairs =  set()
    
    for num in arrNum:
        numToFind = tarNum - num
        
        if numToFind not in seenNum:
            seenNum.add(num)
        else:
            pairs.add(( num , numToFind))
    if len(pairs) == 0: return None
        
    return pairs


print(pair_sums([],5))
print(pair_sums([1,2],4))
print(pair_sums([1,3,2,2],4))
print(pair_sums([1,3,2,2,3],5))
print(pair_sums([1],1))