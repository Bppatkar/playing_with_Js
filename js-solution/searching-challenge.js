/* 
## **Searching Challenge**

Have the function `searching_challenge(str)` take the `str` parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string.

**For example:** if `str` is "Hello6World 2, Nic8e D7ay!" the output should be **2**.

First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2.

**Only single digit numbers separated by spaces will be used throughout the whole string** (So this won't ever be the case: Hello44444 word). Each string will also have at least one letter.

---

### **Examples**

**Input:** `"Hello6 9World 2, Nic8e D7ay!"`  
**Output:** `4`

**Input:** `"One Number*1*"`  
**Output:** `0`

---

Note: There's a slight discrepancy in the problem statement - it mentions adding 6+9+2+8+7=32 but the actual example "Hello6 9World 2, Nic8e D7ay!" should only count space-separated single digits (9, 2, 7), which would be 18, divided by 17 letters = 1.06 ≈ 1. The first example output shows 4, suggesting the numbers might be 6, 9, 2, 8, 7 after all.

*/
