---
sidebar_position: 2  
slug: /overloading
---

# 오버로딩
메소드 오버로딩이란?
> **같은 이름**의 메소드를 **여러번 중복**하여 정의하는 것을 뜻합니다.  
> **매개변수의 타입**이나 **갯수**를 다르게 하면 같은 이름의 메소드를 가질 수 있게됩니다.  
> 다만, **반환값의 타입**이 다른 경우에는 **불가능**합니다.

메소드 오버로딩을 통해 코드를 간소화 시킬 수 있고, 유지 보수가 용이하다는 장점이 있습니다.

① **기본형** 매개변수 1개  
int형 num을 전달받아 제곱하는 메소드입니다.
```java
public static int getPower(int num) {
    int result = number * number;
    return result;
}
```

② **자료형이 다른** 매개변수 1개  
String형 num을 전달받아 제곱하는 메소드입니다.  
문자열 인수를 int형으로 변환해 연산합니다.
```java
public static int getPower(int num) {
        int result = number * number;
        return result;
        }
```

③ **매개변수 2개**  
int형 num와 exponent를 전달 받아 거듭제곱하는 메소드입니다.
```java
public static int getPower(int num, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= number;
    }
    return result;
}
```

이렇게 매개변수의 갯수도 다르고 타입도 다르지만 **getPower** 라는 동일한 메소드를 정의하는 방법을 알아보았습니다.
정의한 메소드를 호출하는 방법도 동일합니다.

```java
System.out.println(getPower(3));
System.out.println(getPower("3"));
System.out.println(getPower(3, 3));

/* 실행 결과
9
9
27        
 */
```