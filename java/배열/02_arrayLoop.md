---
sidebar_position: 2
slug: /arrayLoop
---

# 배열순회

앞서 배열을 생성하고 값을 저장하는 방법을 알아봤고,
이번에는 생성한 배열의 요소를 순회하는 방법을 알아보겠습니다.

## for문 이용

배열은 각각 인덱스의 위치에 값을 저장할 수 있습니다.
```java
String[] names = {"철수", "영희", "미애"};
```
 names의 요소를 출력하려면 다음과 같이 각 배열의 인덱스를 하나씩 출력해야합니다.
```java
System.out.println(name[0]);
System.out.println(name[1]);
System.out.println(name[2]);

/* 출력 결과
철수
영희
미애
 */
```

배열의 크기가 작은 경우엔 어렵지 않지만 
이보다 훨신 큰 배열이 있을 때엔 요소를 하나씩 출력하기엔 어려움이 있습니다.

이를 위해 for문을 이용하여 배열을 순회하여 모든 요소를 출력할 수 있습니다.
```java
for (int i = 0; i < 3; i++) {
    System.out.println(names[i]);
}

/* 출력결과
철수
영희
미애        
 */
```
다음과 같이 인덱스 0부터 2까지 반복하는 for문을 통해 배열 내부를 순회합니다.
배열의 크기를 직접 알 수 없는 경우 조건식에 `배열명.length`를 이용해 편리하게 사용 가능합니다.

```java
for (int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}
```

## for each문 이용
for each를 이용한 순회는 배열의 처음부터 끝까지 순회하지만,
for문을 이용한 순회는 원하는 위치까지 순회를 지정할 수 있어서 필요에 따라 둘 중 편리한 방법을 이용할 수 있습니다.

```java
for (String name : names) {
    System.out.println(name);
}
```
`String coffee` : naem라는 문자열 임시 변수에 배열 순회에 따라 names의 요소를 저장합니다.

즉, for-each문으로 순회되는 모든 값이 임시적으로 name에 저장되는데  
**0번 인덱스**를 순회할 땐 names[0]의 값인 "철수"  
**1번 인덱스**를 순회할 땐 names[1]의 값인 "영희"  
**2번 인덱스**를 순회할 땐 names[2]의 값인 "미애"  
가 저장되어, 순회가 진행될 때 마다 반복문의 name의 값이 바뀌므로 배열을 전체 순회할 수 있습니다.

