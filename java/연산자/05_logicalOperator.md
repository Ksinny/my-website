---
sidebar_position: 5
slug: /logical
---

# 논리 연산자
논리 연산자란?
> 논리식을 판단하여 참과 거짓을 결정하는 연산자입니다.

피연산자는 boolean 타입만 이용할 수 있습니다.

```java
boolean a = true
boolean b = false
```

**① 논리곱 AND 연산** : 피연산자 모두 true일 경우 true
> `[피연산자] && [피연산자]`
>```java
> System.out.println(true && true); // true
> System.out.println(true && false); // false
> System.out.println(false && false); // false
> System.out.println((10 > 5) && (2 == 20)) // false (true || false)
>```


**② 논리합 OR 연산** : 피연산자 중 하나라도 true일 경우 true
> `[피연산자] || [피연산자]`
>```java
> System.out.println(true || true); // true
> System.out.println(true || false); // true
> System.out.println(false || false); // false
> System.out.println((10 > 5) || (2 == 20)) // true (true || false)
>```

**③ 베타적 논리합 XOR 연산** : 피연산자의 논리 값이 다를 경우 true
> `[피연산자] ^ [피연산자]`
>```java
> System.out.println(true ^ true); // false
> System.out.println(true ^ false); // true
> System.out.println(false ^ false); // false
> System.out.println((10 > 5) ^ (2 == 20)) // true (true || false)
>```

**④ 논리 부정 NOT 연산** : 피연산자의 논리값을 반대로 바꿈 (true → false / false → true)
> `![피연산자]`
>```java
> System.out.println(!true); // false
> System.out.println(!false); // true
> System.out.println(!(true && false)); // true
> System.out.println(!((10 > 5) ^ (2 == 20))) // false
>```