---
sidebar_position: 5
slug: /package
---

# 패키지

패키지란?
> 클래스와 인터페이스의 집합으로, 서로 관련 있는 클래스나 인터페이스를 함께 모아둘 수 있습니다.  
> 디렉토리와 비슷한 개념으로 볼 수 있습니다.

## 패키지 선언

```java
package 패키지명;
```

파일의 상단부분에서 패키지를 선언하면 해당 파일 내에서 패키지를 자유롭게 이용할 수 있습니다.

만약 패키지를 명시하지 않으면 이름없는 패키지에 포함되어, 
패키지를 명시하지 않은 파일들이 모두 같은 패키지 내에 위치한 것으로 취급됩니다.

## 패키지 이용

선언한 패키지 내의 클래스를 패키지 밖에서 사용하기 위해서는 `import`문을 통해 선언해야 합니다.

```java
import 패키지명.클래스명;
import 패키지명.*;
```

**① 패키지명**  
: 패키지가 위치한 경로를 포함한 전체 이름을 작성해야 합니다.  
ex) java.lang.String / java.util.random

**② 클래스명**  
: 해당 패키지에서 이용하고 싶은 클래스 이름을 작성합니다.  
: 해당 패키지 내의 모든 클래스를 이용하고싶을 때는 `*` 기호를 사용해도 됩니다.

****

## java.util.random

자바에서 제공하는 여러 패키지 중 사용빈도가 높은 random 클래스입니다.  
random 클래스 내의 주요 메소드 이용법을 살펴보겠습니다.

### nextInt()
> int 범위 내의 랜덤한 정수값을 반환합니다.
>
> **문법**
>
> `nextInt()` :int의 범위 내에서 정수형 값 반환
>
> `nextInt(int bound)` : 0이상 bound 미만의 정수형 값 반환
>
> **매개변수**
>
> `int bound` : 범위를 지정할 정수 값 
>
> **반환**
>
> int : 랜덤한 정수 값
>
> **사용예제**
>
> ```java
> System.out.println("랜덤 정수 : " + random.nextInt()); // int 범위 내의 정수값
> System.out.println("범위 랜덤 정수 : " + random.nextInt(5)); // 0 이상 5미만의 정수값
> ```
> ```java
> 랜덤 정수 : -13547
> 범위 랜덤 정수 : 3
> ```


### nextDouble()
> 랜덤한 실수값을 반환합니다.
>
> **문법**
>
> `nextDouble()` : 0.0이상 1.0 미만의 범위 내에서 실수형 값 반환
>
> **반환**
>
> double : 랜덤한 실수 값
>
> **사용예제**
>
> ```java
> System.out.println("랜덤 실수 : " + random.nextDouble());
> System.out.println("랜덤 실수 : " + 5 * random.nextDouble());
> ```
> ```java
> 랜덤 실수 : 0.8785319153229496
> 랜덤 실수 : 4.923486100928829
> ```

### nextBoolean()
> 랜덤한 논리값 반환합니다.
>
> **문법**
>
> `nextBoolean()` : true 혹은 false 를 랜덤하게 반환
>
> **반환**
>
> boolean : 랜덤한 논리값
>
> **사용예제**
>
> ```java
> System.out.println("랜덤 논리 : " + random.nextBoolean());
> ```
> ```java
> 랜덤 논리 : true
> ```

