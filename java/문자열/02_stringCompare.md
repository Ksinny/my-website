---
sidebar_position: 2
slug: /stringCompare
---

# 문자열 비교

두 개의 문자열이 동일한지 확인하고 싶을 때 이용하는 방법으로는

- `[문자열1] == [문자열]`
- `equals()`

`==` 연산자를 이용하는 방법과, String 내장 메소드인 `equals`를 이용하는 방법이 있습니다.
이 중 `equals()` 반드시 메소드를 이용해야 합니다. 
왜 `==`가 아닌 `equals()`를 사용하는지에 대해 알아보겠습니다. 

## 내장 메소드를 통한 내용 비교

### equals()
> 두 개의 문자열을 비교합니다.
>
> **문법**
>
> `equals(String str)`
>
> **매개변수**
>
> `str` : 비교할 대상 문자열
>
> 
> **반환**
> 
> boolean `true` : 문자열 내용이 같으면 true
> 
> boolean `false` : 문자열 내용이 다르면 false
> 
> **사용예제**
>
> ```java
> String s1 = "Black";
> String s2 = "Pink";
> System.out.println(s1.equals(s2)); // false
> System.out.println(s1.equals("Black")); // true
> System.out.println(s2.equals("pink")); // false
> ```


### equalsIgnoreCase()
> 대소문자의 구분 없이 두 개의 문자열을 비교합니다.
>
> **문법**
>
> `equalsIgnoreCase(String str)`
>
> **매개변수**
>
> `str` : 비교할 대상 문자열
>
>
> **반환**
>
> boolean `true` : 문자열 내용이 같으면 true
>
> boolean `false` : 문자열 내용이 다르면 false
>
> **사용예제**
>
> ```java
> String s = "Black";
> System.out.println(s.equalsIgnoreCase("black")); // true
> ```

## `==` 연산자를 통한 주소 비교

`==` 연산자는 객체의 주소값을 비교한다.

```java
String s1 = "426";
String s2 = "426";

System.out.println(s1.equals(s2)); // true (내용 비교)
System.out.println(s1 == s2); //true (참조 주소 비교)
```

JAVA는 문자열의 리터럴이 동일하다면, 동일한 String 객체를 참조합니다.

예시를 보면 s1과 s2는 "426"으로 동일한 리터럴을 갖고 있습니다.
같은 객체를 참조하기 때문에 두 객체 주소가 동일합니다.
따라서 s1 == s2 를 통해 문자열을 비교하면 true로 같은 문자열로 인식됩니다.


****


## equals()를 사용해야 하는 이유

위에서 ==를 통해 문자열을 비교하는 방법과 equals()를 이용하는 방법을 살펴봤습니다.
예시들을 보면 두 가지 방법 모두 사용할 수 있을 것 같다는 생각이 들 수 있지만, 이유를 자세히 알아보겠습니다.


### 문자열 생성 방식
먼저, 문자열을 선언하는 방법에는 두 가지가 있습니다.

① `String str1 = "문자열입니다."` : ""를 이용하여 문자열을 할당하는 경우

    ""로 문자열을 할당하면 상수 저장공간에 문자열을 저장하여 생성합니다.

② `String str2 = new String("문자열입니다.)"` : new 생성자를 이용하여 문자열을 생성하는 경우

    new를 이용하여 생성하면 heap 공간에 새로운 문자열을 만듭니다.

상수 저장공간에 저장하는 방법은 만약 동일한 문자열이 존재한다면 해당 문자열을 이용하여 반환하고, 없을 경우에만 새로 생성합니다.

new를 이용하는 방법은 동일한 문자열이 있더라도 항상 새로운 문자열을 생성하여 메모리 낭비가 발생합니다. 

이러한 이유로 보편적으로 `" "`로 문자열을 할당하는 방식을 이용합니다. 

****

### new 생성자를 통한 문자열 생성

`==`를 통한 문자열 비교의 문제점은 문자열 생성 방식 중 `new` 생성자를 통해 문자열을 생성했을 때 발생합니다.

```java
String s3 = new String("426");
String s4 = new String("426");

System.out.println(s3.equals(s4)); // true
System.out.println(s3 == s4); // false
```

다음 예시와 같이, new 생성자로 생성한 두 문자열 s3, s4를 비교했을 때 
`equals()`를 이용하면 문제없이 true가 출력되지만,
`==`를 이용하면 다른 문자열로 인식되어 false가 출력됩니다.

그 이유는 앞서 말한 설명한 저장 방식의 차이 때문입니다.
`==`는 객체가 위치한 참조 주소를 비교하기 때문에
`new`로 생성된 두 s3, s4는 문자열 내용은 동일하더라도 다른 주소에 위치하는 서로 다른 객체이므로 
다른 문자로 인식하는 것입니다.

    따라서 문자열의 내용만 비교하여 판단하는 `equals`를 이용해야만 문자열 비교가 정상적으로 이루어집니다.
