---
sidebar_position: 1
slug: /method
---

# 메소드

메소드란?
> 자바의 클래스 내에 위치한 함수를 메소드라고 합니다.
> 입력값을 가지고 특정한 문장을 수행한 후에 결과값을 리턴 리턴하는 형태입니다.

## 메소드 정의
```java
접근제어자 반환타입 메소드이름(매개변수 목록) {
    수행할 명령문
}
```

**① 접근제어자**   
: 해당 메소드에 **접근할 수 있는 범위**  
public / default / protected / private

**② 반환타입**  
: 메소드의 명령문을 모두 수행하고 **반환할 값의 데이터 타입**  
void → 어떠한 값도 반환하지 않음

**③ 메소드이름**  
: 메소드를 호출할 때 필요한 **이름**

**④ 매개변수(파라미터) 목록**  
: 메소드를 호출할 때 **전달할 값**을 저장할 **0개 이상의 변수 목록**

**⑤ 수행할 명령문**  
: 메소드에서 **수행할 명령문**


****

메소드를 정의할 때 매개변수의 갯수나 리턴값의 자료형을 지정할 수 있고,  
입력값(매개변수)과 출력값(리턴값)의 유무에 따라 4가지로 분류할 수 있습니다. 

메소드는 접근제어자와 static 여부 없이 `리턴자료형 메소드명() {}` 구문으로만 만들 수도 있지만,  
`public static void 메소드명() {}` 형태가 자주 사용되므로 이를 이용해 예시를 작성하겠습니다.


## 메소드 호출

메소드를 생성했다면, 원하는 곳에서 호출하여 사용하면 됩니다.
메소드를 바로 실행하기 위해 main 메소드 내에서 호출해보겠습니다.

### 1) 입력과 출력 모두 존재X
`void` 형태로 메소드를 정의하면 리턴값이 없는 메소드를 만들 수 있고,  
파라미터 목록을 비우고 `()`로만 작성하면 파라미터가 없는 메소드를 만들 수 있습니다.

```java
public static void sayHi() {
    System.out.println("Hi");
}
```

메소드를 호출할 땐 `메소드이름()`을 그대로 작성하면 됩니다.

```java
public static void main(String[] args) {
    sayHi();    
}

/* 실행 결과
Hi        
*/
```

### 2) 출력만 존재
원하는 자료형으로 리턴 자료형을 지정합니다.
수행할 명령문을 작성하고, 반환할 값을 `return` 뒤에 작성합니다.  
이때, 리턴자료형과 리턴값의 자료형은 동일해야합니다.

```java
public static String sayHi() {
    String result = "Hi";
    return result;
}
```

리턴값이 있는 메소드를 출력할 땐 두가지 방법이 있습니다.

① 출력문 내에 바로 메소드를 호출하는 방법  
② 리턴값을 변수에 저장하고, 저장한 변수를 출력하는 방법

```java
public static void main(String[] args) {
    System.out.println(sayHi()); // 첫번째 방법
        
    String Temp = sayHi();   
    System.out.println(Temp); // 두번째 방법
}

/* 실행 결과
Hi        
Hi
*/
 ```

### 3) 입력만 존재
`void` 형으로 리턴 자료형을 지정하고,  
매개변수 목록에 전달받을 값을 작성합니다.  
매개변수를 작성할 때엔 자료형과 변수명을 함께 적습니다.

```java
public static void power(int num) {
    int result = num * num;
    System.out.println(result);
}

public static void sum (int num1, int num2) {
    int result = num1 + num2;
    System.out.println(result);
}
```

파라미터가 있는 메소드를 호출할 땐 파라미터에 값을 전달할 인수를 함께 작성해 호출해야 합니다.  
매개변수와 인수를 헷갈리지 않도록 주의해야합니다.  

**매개변수** : 메소드에 전달된 값을 저장하는 변수  
**인수** : 메소드에 전달할 값

```java
public static void main(String[] args) {
    power(3);
    sum(13 + 7);
}

/* 실행 결과
9
20        
*/
 ```


### 4) 입력과 출력 모두 존재
원하는 자료형으로 리턴 자료형을 지정하고,  
매개변수 목록에 전달받을 값을 작성합니다. 이때, 리턴자료형과 리턴값의 자료형은 동일해야합니다.

```java
public static int power(int num) {
    int result = num * num;
    return result;
}
```
```java
public static void main(String[] args) {
   int powerResult = power(10);
   System.out.println(powerResult);
}

/* 실행 결과
25 
*/
 ```

## 메소드 내에서 선언된 변수의 범위
메소드 내에서 변수를 선언하면, 이는 해당 메소드의 범위(`{}`) 내에서만 이용 가능한 **지역변수**로 선언됩니다.

```java
public static void method1() {
    System.out.println(number);
}

public static void method2() {
    int result = 1;
}

public static void main(String[] args) {
    int number = 1;
    
    System.out.println(result);
    
    for(int i = 0; i < 4; i++) {
        i++;
    }
    System.out.println(i)
}

```

다음과 같이 main 메소드와 두개의 메소드를 정의했을 때,
각 메소드 내에서 선언된 변수는 자신의 메소드 내에서만 이용할 수 있습니다.  
따라서 위 예시에 있는 `System.out.println`문장부는 모두 오류가 발생합니다.

method1에서는 main 메소드의 변수 number를 사용할 수 없고,  
main에서는 method2 메소드의 변수 result를 사용할 수 없습니다.  
이와 동일하게 main 메소드 내부에서 사용된 반복문 for 내의 변수 i는, for문 밖인 main에서 사용할 수 없습니다.

## 메소드 내에 메소드 호출
메소드 내의 변수는 해당 메소드에서만 사용할 수 있지만,
클래스에 생성한 메소드는 **클래스 내부 모든 곳**에서 사용할 수 있습니다.

즉, **메소드 내에 또 다른 메소드를 호출**할 수도 있다는 것입니다.

```java
public static int getPower(int number, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= result;
    }
    return result;
}
```
다음과 같이 number, exponent 두 정수를 받아 거듭제곱 연산하는 getPower 메소드가 있습니다.  
두 정수가 아닌 하나의 정수만 입력하면 제곱을 연산하는 메소드를 만들고자 하면,
이와 같이 getPower 메소드를 **새로 만들 메소드 내에 호출**하여 편리하게 메소드를 정의할 수 있습니다.
```java
public static int getPower(int number) {
    return getPower(number, 2);
}
```
