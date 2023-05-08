---
sidebar_position: 1
slug: /for
---

# For

이번 포스트에서는 반복문에서 가장 많이 사용되는 For문에 대해 알아보겠습니다.

## For문

> 초기식, 조건식, 증감식을 포함하고 있는 반복문
> 
> 조건식의 결과가 **참일 동안** 명령문을 반복한다.
>
> ```java
> for (초기식; 조건식; 증감식) {
>   (조건식의 결과가 참일 동안 반복 수행할 명령문)
> }
> ```

EX ① 1부터 5까지의 수 출력
 ```java
 for (int i=1; i<=5; i++) {
   System.out.print(i) // 12345 
 }
```
EX ② 0부터 9까지의 짝수 출력

```java
 for (int i=0; i<10; i+=2) {
   System.out.print(i) // 02468
 }
```
EX ③ 1부터 5까지 수들의 합
```java
 int sum = 0;
   for (int i = 1; i <= 5; i++) {
       sum += i;
   }
   System.out.println(sum); // 15
```

## 이중 For문

이중 for 문이란?  
for 문 내부에 for 문이 중첩되어 있는 구조를 뜻합니다.   
대표적인 예시 두 가지로 별 찍기와 구구단이 있습니다.

### 별 찍기

```java
    *
   **
  ***
 ****
*****
```

```java
for (int i = 0; i < 5; i++) {
    for (int j = 4; j > i; j--) {
        System.out.print(" ");
    }
    for (int j = 0; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

### 구구단

```java
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18

3 * 1 = 3
3 * 2 = 6 
...
9 * 9 = 81
```

```java
 for (int i = 2; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        System.out.println(i + " * " + j + " = " + (i * j)); // 2 * 1 = 2
    }
    System.out.println();
}
```