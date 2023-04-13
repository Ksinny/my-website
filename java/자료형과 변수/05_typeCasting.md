---
sidebar_position: 5
slug: /typeCasting
---

# 형변환 (타입캐스팅)

형변환이란, **타입(자료형)을 변환**시키는 것을 뜻합니다.

## 암시적 형변환
암시적 형변환은 묵시적 형변환이라고도 불리며, 컴파일러가 **자동으로 타입 변환**을 수행해준 것을 뜻합니다.
이는 작은 범위의 자료형에서 더 큰 범위의 자료형으로 변환할 때 이뤄집니다.

> **int → long → float → double**
> ```java
>    int score = 98;
>    float score_f = score // 98.0
> 
>    score_d = 93 + 98.8; // 자동으로 double 처리 됨
>    score_d = (double) 93 + 98.8; // double 생략 가능
>    System.out.println(score_d); // 191.8
> ```


## 명시적 형변환
명시적 형변환은, 사용자가 강제적으로 타입을 변경하는 것을 뜻합니다.
큰 범위의 타입에서 작은 범위의 타입으로 변환하면 데이터가 손실될 수 있습니다.

> **double → float → long → int**
> 
> 변환시키고자 하는 데이터 앞에 <code>(타입)</code>을 작성해 타입캐스팅합니다.
> ```java
>   float score_f = 98.8F;
>   double score_d = 98.8;
>   System.out.println((int) score_f); // 98
>   System.out.println((int) score_d); // 98
> 
>   // 정수 + 실수 연산
>   score = 93 + (int) 98.8; // 93 + 98
>   System.out.println(score); // 191
> ```



## 문자열 형변환
Wrapper 클래스에서 제공하는 메소드를 이용하여 변환합니다.

### 문자열을 숫자로
- Integer.parseInt(" ")
- Long.parseLong(" ")
- Double.parseDouble(" ")
- Float.parseFloat(" ")
- Boolean.parseBoolean(" ")
```java
    int i = Integer.parseInt("93");
    System.out.println(i); // 93
        
    double d = Double.parseDouble("98.8");
    System.out.println(d); // 98.8
```
### 숫자를 문자열로
- Integer.toString()
- Long.toString()
- Float.toString()
- Double.toString()
- Boolean.toString()
```java
    String s1 = String.valueOf(98);
    s1 = Integer.toString(98);
    System.out.println(s1); // 98

    String s2 = String.valueOf(98.8);
    s2 = Double.toString(98.8);
    System.out.println(s2); // 98.8
```