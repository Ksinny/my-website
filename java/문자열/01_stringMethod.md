---
sidebar_position: 1
slug: /stringMethod
---

# 문자열 주요 메소드

String은 기본 자료형이 아닌 java.lang 패키지에 속한 클래스입니다.
이 클래스를 이용하여 String을 문자열로 이용할 수 있습니다.

String 클래스에 내장된 여러 메소드로 문자열을 여러 방면으로 활용할 수 있는데, 
그 중 가장 많이 이용되는 메소드 몇가지를 살펴보겠습니다.

```java
String s = "Hello? I like strawberry and pineapple and tomato."
```
## 문자열 길이
### length()
> 문자열의 길이(총 문자의 수)를 반환하는 메소드입니다. 공백을 포함합니다.
> 
> **문법**
> 
> `length()` 
> 
> **반환**
> 
> `int`
> 
> **사용예제**
> 
> ```java
> System.out.println(s.length()); // 50
> ```

## 대소문자 변환

### toUpperCase()
> 문자열의 알파벳을 모두 대문자로 변환한 새로운 문자열을 리턴합니다.
>
> **문법**
>
> `toUpperCase()`
>
> **반환**
>
> `String`
>
> **사용예제**
>
> ```java
> System.out.println(s.toUpperCase());
> // HELLO? I LIKE STRAWBERRY AND PINEAPPLE AND TOMATO.
> ```

### toLowerCase()
> 문자열의 알파벳을 모두 소문자로 변환한 새로운 문자열을 리턴합니다.
>
> **문법**
>
> `toLowerCase()`
>
> **반환**
>
> `String`
>
> **사용예제**
>
> ```java
> System.out.println(s.toLowerCase());
> // hello? i like strawberry and pineapple and tomato.
> ```

## 포함 관계 

### contains()
> 문자열내에서 주어진 문자열 포함 여부를 확인합니다.
>
> **문법**
>
> `contains(String str)`
>
> **매개변수**
> 
> `String str` : 포함되어 있는지 확인 할 문자열
> 
> **반환**
> 
> boolean `true` : 문자열이 포함되어 있다면 참
> 
> boolean `false` : 문자열이 포함되어 있지 않다면 거짓
>
> **사용예제**
>
> ```java
> System.out.println(s.contains("tomato")); // true
> System.out.println(s.contains("apple")); // false
> ```


### indexOf()
> 문자열에서 주어진 문자열의 첫번째 위치를 확인합니다.
>
> **문법**
>
> `indexOf(String str)`
>
> **매개변수**
>
> `String str` : 포함되어 있는지 확인 할 문자열.
>
> **반환**
> 
> `int` : 해당 문자열의 첫번째 위치 인덱스 값 리턴 (첫번째 문자 기준)
> 
> int `-1` : 포함되어 있지 않다면 -1 리턴
>
> **사용예제**
>
> ```java
> System.out.println(s.contains("tomato")); // 43
> System.out.println(s.contains("apple")); // -1
> System.out.println(s.contains("and")); // 25 → Hello? I like pineapple and 의 a위치
> ```


### lastIndexOf()
> 문자열에서 주어진 문자열의 마지막 위치를 확인합니다.
>
> **문법**
>
> `lastIndexOf(String str)`
>
> **매개변수**
>
> `String str` : 포함되어 있는지 확인 할 문자열
>
> **반환**
>
> `int` : 해당 문자열의 마지막 위치 인덱스 값 리턴 (첫번째 문자 기준)
>
> int `-1` : 포함되어 있지 않다면 -1 리턴
> 
> **사용예제**
>
> ```java
> System.out.println(s.contains("and"));
> // 39 → Hello? I like strawberry and pineapple and 의 a 위치
> ```

### startsWith()
> 문자열이 주어진 문자열로 시작하는지 확인합니다. 
>
> **문법**
>
> `startsWith(String str)` : str로 문장이 시작된다면 true
> 
> `startsWith(String str, int index)` : 지정한 index부터 문장이 시작되도록 하고, 해당 문장이 str로 시작된다면 true
>
> **매개변수**
>
> `String str` : 포함되어 있는지 확인 할 문자열
> 
> `int index` : 문자열의 시작을 지정할 인덱스
>
> **반환**
>
> boolean `true` : 해당 문자열로 시작하면 참
>
> boolean `false` : 해당 문자열로 시작하지 않으면 거짓
>
> **사용예제**
>
> ```java
> System.out.println(s.startsWith("Hello?")); // true
> System.out.println(s.startsWith("hello?")); // false
> System.out.println(s.startsWith("I", 7)); // true → 7번 인덱스인 I로 문장 시작
> ```

### endsWith()
> 문자열이 주어진 문자열로 끝나는지 확인합니다.
>
> **문법**
>
> `endsWith(String str)`
>
> **매개변수**
>
> `String str` : 포함되어 있는지 확인 할 문자열
>
> **반환**
>
> boolean `true` : 해당 문자열로 끝나면 참
>
> boolean `false` : 해당 문자열로 끝나지 않으면 거짓
>
> **사용예제**
>
> ```java
> System.out.println(s.endsWith(".")); // true
> System.out.println(s.ends("!")); // false
> ```


## 문자열 반환

### replace()
> 변환할 문자열을 지정해 원하는 문자열로 대체한 새로운 문자열을 리턴합니다.
>
> **문법**
>
> `replace(String target, String replacement)`
>
> **매개변수**
>
> `String target` : 문자열에서 변환할 기존의 문자열
>
> `String replacement` : target을 대체할 문자열
>
> **반환**
>
> `String` : target이 replacement로 변환 완료된 새로운 문자열 리턴
>
> **사용예제**
>
> ```java
> System.out.println(s.replace("and", ",")); // "and"를 ","로 변환
> // Hello? I like strawberry , pineapple , tomato.
> ```


### substring()
> 지정 인덱스부터 문장의 끝까지 혹은 끝낼 인덱스까지 잘라낸 새로운 문자열을 리턴합니다.
>
> **문법**
>
> `substring(int beginIndex)` : beginIndex부터 문장의 끝까지 잘라낸 문자열 리턴
> 
> `substring(int beginIndex, int endIndex)` : beginIndex부터 endIndex 사이의 문자열 리턴
>
> **매개변수**
>
> `int beginIndex` : 잘라내기를 시작 할 인덱스 지정
>
> `int endIndex` : 잘라내기를 끝낼 인덱스 지정 (endIndex 앞까지, endIndex 미포함)
>
> **반환**
>
> `String` : target이 replacement로 변환 완료된 새로운 문자열 리턴
>
> **사용예제**
>
> ```java
> System.out.println(s.substring(7)); // 인덱스 기준 7(I)부터 시작하는 문자열 반환
> // I like strawberry and pineapple and tomato.
> System.out.println(s.substring(7, 25)) // 인덱스 7(I)부터 25(a(nd))사이를 잘라낸 문자열 반환
> // I like strawberry
> System.out.println(s.substring(s.indexOf("and"))); 
> // "and"가 시작하는 위치부터 문장의 끝까지 잘라낸 문자열 반환
> //  pineapple and tomato.
> System.out.println(s.substring(s.indexOf("and"), s.indexOf("."))); 
> // "and"가시작하는 위치부터 "." 직전까지 잘라낸 문자열 반환
> //  pineapple and tomato
> ```


## 공백 제거

### trim()
> 문자열의 앞 뒤 공백을 제거한 새로운 문자열을 리턴합니다.
>
> **문법**
>
> `trim()`
>
> **반환**
>
> `String` : 앞 뒤 공백이 제거된 새로운 문자열
>
> **사용예제**
>
> ```java
> s = "          Hi? nice to meet you :)       ";
> System.out.println(s.trim());
> // Hi? nice to meet you :)
> ```

## 문자열 결합
### concat()
> 문자열을 연결합니다.
>
> **문법**
>
> `concat(String str)`
>
> **매개변수**
>
> `String str` : 문자열 뒤에 결합할 새로운 문자열 지정
>
> **반환**
>
> `String` : 결합된 문자열 리턴
>
> **사용예제**
>
> ```java
> String s1 = "Black";
> String s2 = "Pink";
> System.out.println(s1.concat(",")); // Black,
> System.out.println(s1.concat(",").concat(s2)); // Black, Pink
> System.out.println(s1.concat(s2)); // BlackPink
> System.out.println(s1 + ", " + "s2") // Black, Pink
> ```

이 밖에도 charAt(), getBytes(), equals() 등 많은 메소드가 있다.

특히 equals() 메소드는 ![다음 포스트](02_stringEqulas.md)에서 자세히 다룰 예정이다.

