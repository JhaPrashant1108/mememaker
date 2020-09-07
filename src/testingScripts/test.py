# def swordMaster(h,p):
#     if (p>=h):
#         print(1)
#         return 1
#     h = h-p
#     p = p//2
#     if (p<=0 and h>0):
#         print(0)
#         return 0
#     swordMaster(h,p)
    
# def factors(x,divisors):
#     number = -1
#     value = 1000000000
#     tester = 0
#     for i in divisors:
#         if (x%i == 0):
#             tester = x/i
#             if(tester<= value):
#                 value = tester
#                 number = i
#     return number

# position = list(map(int,input().split(" ")))
#     divisors = factors(k,position)

# def pointCalculator(Pc,Pr):
#     if((Pc-1)//9>=(Pr-1)//9):
#         return f"{1} {(Pr-1)//9+1}"
#     else:
#         return f"{0} {(Pc-1)//9+1}"
# Pc,Pr = map(int,input().split(" "))
#     print(pointCalculator(Pc,Pr))

# def AnagramFinder(s,p):
#     s = list(s)
#     p = list(p)
#     for i in p:
#         s.remove(i)
#     s.append("".join(p))
#     s.sort()
#     return "".join(s)
def MaxDiffFinder(N,arrayList):
    for i in range(N):
        print(arrayList[i])




testCase = int(input())

for i in range(testCase):
    N = int(input())
    arrayList = input().split(" ")
    MaxDiffFinder(N,arrayList)

