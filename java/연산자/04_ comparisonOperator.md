---
sidebar_position: 4
slug: /comparison
---

# 비교 연산자

비교 연산자란?

> 피연산자 사이의 상대적인 크기를 비교하여 `true` 혹은 `false` 로 판단할 수 있는 연산자입니다.

연산을 수행하면 결과값이 boolean 타입으로 반환됩니다.

```java
int a = 1;
int b = 10;
int c = 10;
```
위와 같이 정수형 변수 a, b를 설정하였습니다.

① `==` : 오른쪽 피연산자와 왼쪽 피연산자의 **값이 같다.**
> `[피연산자] == [피연산자]`
> ```java
> boolean result = (b == c); // 10 == 10
> System.out.println(result); // true
> 
> boolean result_2 = (a == b); // 1 == 10
> System.out.println(result_2); // false
>```

② `!=` : 오른쪽 피연산자와 왼쪽 피연산자의 **값이 같지 않다.**
> `[피연산자] != [피연산자]`
> ```java
> boolean result = (a != b); // 1 != 10
> System.out.println(result); // true
>```

③ `>` : 오른쪽 피연산자가 왼쪽 피연산자의 **값보다 작다.**

>`[피연산자] > [피연산자]`
> ```java
> boolean result = (b > a); // 10 > 1
> System.out.println(result); // true
>```


④ `<` : 오른쪽 피연산자가 왼쪽 피연산자의 **값보다 크다.**

> `[피연산자] < [피연산자]`
> ```java
> boolean result = (a < b); // 1 < 10
> System.out.println(result); // true
>```

⑤ `>=` : 오른쪽 피연산자가 왼쪽 피연산자의 **값보다 작거나 같다.**

>`[피연산자] >= [피연산자]`
> ```java
> boolean result = (b >= a); // 10 >= 1
> System.out.println(result); // true
> 
> boolean reusult_2 = (b >= c); // 10 >= 10
> System.out.println(result_2); // true
>```

⑥ `<=` : 오른쪽 피연산자가 왼쪽 피연산자의 값보다 **크거나 같다.**

> `[피연산자] <= [피연산자]`
> ```java
> boolean result = (a <= b); // 1 <= 10
> System.out.println(result); // true
> 
> boolean result_2 = (c <= b); // 10 <= 10
> System.out.println(result_2); // true
>```


!!!tip String의 비교 연산자
문자열을 비교할 땐 `==` 를 사용하지 않고, `equals()` 메소드를 이용하여 비교한다.
이후 문자열 챕터에서 다룰 예정
!!!