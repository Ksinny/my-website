---
sidebar_position: 2
slug: /increaseAndDecrease
---

# 증감 연산자

> 증감 연산자는 변수의 값을 1 증가 시키거나 1 감소 시키는 연산자를 뜻합니다.

***연산자의 위치*** 에 따라 **전위 연산**과 **후위 연산**으로 구분되며,
연산 순서에 따른 반환 값이 달라지므로 주의하여 사용해야 합니다.


증가 연산은 `++` 연산자를, 감소 연산은 `--` 연산자를 사용합니다.

## 전위 연산

**① 증가연산**
> `++[피연산자]` : `피연산자`를 1 증가하고 **증가된 값** 반환
>
> ```java
> int i = 1;
> System.out.println(i); // 1
> System.out.println(++i); // 2
> System.out.println(i); // 2
>```
> 증가 연산이 먼저 수행되고 피연산자의 값이 반환됩니다.

**② 감소연산**
> `--[피연산자]` : `피연산자`를 1 감소하고 **감소된 값** 반환
>
> ```java
> int i = 1;
> System.out.println(i); // 1
> System.out.println(++i); // 0
> System.out.println(i); // 0
>```
> 감소 연산이 먼저 수행되고 피연산자의 값이 반환됩니다.

## 후위 연산

**① 증가연산**
> `[피연산자]++` : `피연산자`를 1 증가하고 **증가 전의 값** 반환
>
> ```java
> int i = 1;
> System.out.println(i); // 1
> System.out.println(i++); // 1
> System.out.println(i); // 2
>```
> 증가 연산이 수행되고 증가되기 전의 피연산자 값이 반환됩니다.

**② 감소연산**
> `[피연산자]--` : `피연산자`를 1 감소하고 **감소 전의 값** 반환
>
> ```java
> int i = 1;
> System.out.println(i); // 1
> System.out.println(i--); // 1
> System.out.println(i) // 0
>```
> 감소 연산이 수행되고 감소되기 전의 피연산자 값이 반환됩니다.
