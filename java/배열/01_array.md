---
sidebar_position: 1
slug: /array
---

# 배열

배열이란?
> 같은 자료형의 값 여러 개를 저장하는 연속된 공간

String과 마찬가지로 기본 자료형이 아닌 자주쓰이는 참조 자료형으로 new 연산자 없이 선언할 수 있습니다.

## 배열 생성 방법

배열을 생성하는 방법에는 여러가지가 있는데 
String, char, int, boolean, double 등 다양한 기본 자료형의 배열을 만들 수 있습니다.

아래 예시에서는 String 자료형 배열로 예시를 설명하겠습니다.
### 첫번째 방법
```java
String[] 배열명 = new String[배열크기];
```
자료형 뒤에 `[]`가 붙은 모습이 배열의 기본적인 형태입니다.  
new 연산자를 이용하여 크기가 `[배열크기]` 인 String 배열을 생성합니다.

```java
String[] grades = new String[5];
```

### 두번째 방법
```java
String 배열명[] = new String[배열크기];
```
자료형 뒤가 아닌 배열명 뒤에 `[]`를 붙이는 방식으로 생성합니다.

```java
String grades[] = new String[5];
```
  


### 세번째 방법
```java
String[] 배열명 = new String[배열크기] {"값1", "값2", ..., "값n"};
```
배열을 생성함과 동시에 배열 내에 값을 담습니다.

```java
String[] grades = new String[5] {"A", "B", "C", "D", "F"};
```

위 예시는 크기가 5인 문자열 배열 grades의 각 인덱스 0 ~ 4 위치에 "A", "B", "C", "D", "F"를 담았습니다.

### 네번째 방법
```java
String[] 배열명 = {"값1", "값2", ..., "값n"};
```
new 생성자 없이 배열을 생성함과 동시에 배열 내에 값을 담습니다. 이때, 배열의 크기는 미리 정하지 않습니다.

```java
String[] grades = {"A", "B", "F"};
```

****

## 값 저장 방법
위에서 본 세번째와 네번째 방식으로 배열 선언과 동시에 값을 지정할 수도 있지만,
만약 동시에 하지 않는다면 인덱스에 각각 값을 저장해야 합니다.

이때, 인덱스는 0부터 시작되는 점을 주의해야 합니다.

```java
배열명[인덱스값] = 저장할 값;
```

```java
String[] grades = new String[3];

grades[0] = "A";
grades[1] = "B";
grades[2] = "F";
```



String 배열을 예시로 들었지만 다른 자료형 배열도 동일하게 생성할 수 있습니다.

```java
int[] i = new int[2];
i[0] = 5;
i[1] = 0;

double[] d = new double[] {10.0, 13.2};

boolean[] b = {true, false, true};
```