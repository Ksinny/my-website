---
sidebar_position: 3
slug: /doWhile
---

# Do While

While 문은 반복을 수행하기 이전에 조건을 검사하지만, 
지금 배울 Do While 문은 반복을 1회 실행한 후 조건을 검사합니다.  
즉, 조건식의 결과값(참/거짓)과 관계 없이 최소 1회는 반복문을 실행합니다.

## Do While 문
> do 내부의 명령문을 1회 실행 한 후,  
> while의 조건식을 검사하여 거짓이라면 반복 종료, 참이라면 do의 명령문을 반복한다.
> ```java
> do {
>   (조건식의 결과값이 참인 동안 반복 수행할 명령문)
> } while (조건식)
> ``` 

****

예제를 통해 While 문과 Do While 문의 차이를 살펴보겠습니다.

### Do While문 예제 

① 먼저 do 내의 명령문을 수행  
`count += 1`로 count = 1, `현재 반복 횟수 : 1`을 출력  

② while 조건식 검사  
`count = 1`으로 조건식 `count < 0`을 만족하지 못해 **거짓**이므로 반복을 멈춤

③ do while문 종료  
Do While 문 밖의 `DoWhile문 종료 count : 1` 출력

```java
int count = 0;
do {
    count += 1;
    System.out.println("현재 반복 횟수 : " + count);
} while (count < 0);
System.out.println("DoWhile문 종료 count : " + count);

/* 출력결과
현재 반복 횟수 : 1
DoWhile문 종료 count : 1
 */
```

### While문 예제

① while 조건식 검사  
`count = 0`으로 조건식 `count < 0`을 만족하지 못해 **거짓**이므로 반복을 멈춤

③ while문 종료  
while 문 내부의 명령문을 수행하지 못하고 빠져나와, while 문 바깥의 `While문 종료 count : 0`을 출력

```java
int count = 0;
while (count < 0) {
    count += 1;
    System.out.println("현재 반복 횟수 : " + count);
} 
System.out.println("While문 종료 count : " + count);

/* 출력결과
While문 종료 count : 0
 */
```
