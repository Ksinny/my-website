---
sidebar_position: 2
slug: /variable
---

# 변수

변수란?
> 프로그램 실행 중에 값을 임시로 저장하기 위한 공간입니다.

## 변수 선언

먼저 변수를 선언해 주기 위해선 데이터 타입을 알맞게 선택해야 합니다.

<code>데이터타입 변수이름;</code>

위와 같은 형태로 변수를 선언해 주면 되는데, 

```
    String name;
    int number;
    double distance;
    boolean pass;
```
예시처럼 자료형으로 변수의 데이터 타입을 정해주고
name, number, distance, pass 라는 변수를 선언합니다.

- String(문자열)형 변수 name
- int(정수)형 변수 number
- double(실수)형 변수 distance
- boolean(논리)형 변수 pass

## 변수명 짓기

변수 이름을 정할 때 지켜야 할 규칙 몇가지가 있습니다.

1. 저장할 값에 어울리는 이름
```java
    String name = "홍길동"; // 이름
    double height = 176.6; // 키(신장)
```

2. 언더바(_), 문자(abc), 숫자(123) 사용 가능
```java
    String date_of_birth_1 = "2001-04-26" // 생년월일
```

3. 공백 사용 불가
```java
//    int my score = 98; X
      공백 사용 불가능
```
4. 밑줄 또는 문자로만 시작 가능
```java
    int _my_score = 98;
    int my_score = 98;
```
5. 한 단어 또는 2개 이상 단어의 연속
```java
    int my_score = 98;
    int score = 98;
```
6. 카멜식 이용 (소문자로 시작, 이후 단어의 시작 글자는 대문자)
```java
    int myScore = 98;
```

7. 예약어 사용 불가
```java
//    int public = 98; X
//    int boolean = 98; X
```


다음과 같은 사항을 유의하여 변수를 선언합니다.

## 변수에 값 대입

선언한 변수에 <code>변수명 = 값</code>을 통해 값을 대입할 수 있습니다.

```java
    String name;
    int number;
    double distance;
    boolean pass;

    name = "Ksinny";
    number = 426;
    distance = 276.8;
    pass = true;
```

혹은 변수를 선언하는 것과 동시에 값을 대입해줄 수도 있습니다.
```java
    String name = "Ksinny";
    int number = 426;
    double distance = 276.8;
    boolean pass = true;
```

주의할 점은 선언한 변수의 자료형과 대입하는 값의 자료형이 일치해야 합니다.
```java
//    String name = 513; X
//    int number = 435.87; X
```
