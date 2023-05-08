---
sidebar_position: 4
slug: /breakAndContinue
---

# Break

반복문에서 Break를 이용하여 원하는 곳에서 반복문을 종료할 수 있습니다.
For 문, While 문, Do While 문 모두에서 사용 가능합니다.
if문 등을 통해 원하는 조건을 설정하고, if문 내부에 break를 작성하여 조건 만족 시 반복문을 종료시킵니다.

## For문 Break
```java
int max = 5;
for (int i = 1; i <= 10; i++) {     
    System.out.println(i + "번");
    if (i == max) {
        System.out.println("if문 내부 break");
        break;
    }
} 
System.out.println("for 종료");

/* 결과 출력
1번
2번
3번
4번
5번
if문 내부 break
for 종료        
 */
```

## While문 Break

```java
int index = 1;
int max = 5;
while (index <= 10) {     
    System.out.println(index + "번");
    if (index == max) {
        System.out.println("if문 내부 break");
        break;
    }
    index++;
}
System.out.println("while 종료");

/* 결과 출력
1번
2번
3번
4번
5번
if문 내부 break
while 종료        
 */
```
## Continue

break가 반복문을 종료시키는 역할이라면, continue로 **조건문으로 되돌아갈** 수 있습니다.
for문 내부의 명령문을 수행하던 도중 continue를 만나면 그 아래의 명령문은 무시하고 for문의 **첫 부분**으로 돌아갑니다.  
while문 또한 마찬가지로 동작합니다.
```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        System.out.println("if문 내부 continue");
        continue;
    }
    System.out.println(i + "번");
} 
System.out.println("for 종료");

/* 결과 출력
1번
2번
if문 내부 continue
4번
5번
for 종료        
 */
```