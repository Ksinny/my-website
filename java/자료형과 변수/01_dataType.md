---
sidebar_position: 1
slug: /dataType
---

# 자료형

자바의 자료형은 기본 타입 8개와 레퍼런스 타입 1개로 구성되어 있습니다.

## 기본 자료형



### 논리타입
#### boolean
> true or false

### 문자타입
#### char
> 하나의 유니코드로 구성
>
> ```java
> char ch = 'A';
>```

### 정수타입
#### byte
> 1바이트 / -128 ~ 127

#### short
> 2바이트 / -32768 ~ 32767

#### int
> 4바이트 / 2^31 ~ 2^31-1
>
> **정수형에서 주로 사용되는 자료형**


#### long

> 8바이트 / 2^63 ~ 2^63-1
>
> int 범위를 벗어나는 **큰 정수**를 처리할 때 사용되는 자료형
> 
> long형을 이용하기 위해서는 숫자 뒤에 L 혹은 l을 붙여야 합니다.

### 실수타입
#### float
> 4바이트 / -3.4E38 ~ 3.4E38
> 
> float형을 이용하기 위해서는 숫자 뒤에 F 혹은 f를 붙여야 합니다.

#### double
> 8바이트 / -1.7E308 ~ 1.7E308
> 
> **실수형에서 주로 사용되는 자료형**

## 레퍼런스 자료형

레퍼런스 자료형은 **참조 자료형**이라고도 하며,
실제 값을 저장하지 않고 **실제 객체를 가르키는 주소를 저장**합니다. 
클래스, 인터페이스, 배열에 대한 레퍼런스 용도로 이용됩니다.

자세한 내용은 이후에 다룰 예정입니다.

## String 

String은 흔히 문자열이라고 부르는 타입이지만 기본 자료형이 아닙니다.
따라서 String 클래스를 이용해 문자열을 표현합니다. 
> 쌍 따옴표 이용
> ```java
> String strName = "문자열입니다.";
>``` 