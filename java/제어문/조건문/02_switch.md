---
sidebar_position: 2
slug: /switch
---
# Switch

Switch문은 **변수의 값에 따라 수행**할 명령문을 지정할 수 있습니다.
주로 조건문에 대해 명확한 케이스가 있는 경우에 사용됩니다.

## Switch문

> 변수의 값이 `case`에 해당하는 값과 일치할 때, 그 `case`에 지정된 명령문을 실행한다.
> 
> `case` 블럭 내에서 `break`를 만나면 switch문에서 벗어난다.
> 변수의 값이 모든 `case`에 속하지 않는다면 `default`내의 명령문을 실행하고 switch문을 종료한다(벗어난다).
> 
> ```java
> switch(value) {
>   case 조건값1:
>       (value == 조건값1일 때 실행할 명령문)
>       break;
>   case 조건값2:
>       (value == 조건값2일 때 실행할 명령문)
>       break;
>   default:
>       (아무 조건에 해당하지 않을 때 실행할 명령문)
> }
>```
> ```java
> String color = "red"; // 조건을 나눌 변수
> switch (color) { 
>     case "red":
>         System.out.println("빨간색");
>         break;
>     case "pink":
>         System.out.println("분홍색");
>         break;
>     case "black":
>         System.out.println("검정색");
>         break;
>     default:
>         System.out.println("알 수 없는 색");
> }
> System.out.println("switch문 종료")
> ```
> 
> 위 switch문에서 나올 수 있는 4가지 
> 
> **① color = "red"** \n
> **첫번째 조건**인 case **"red"를 만족**하므로 \n
> `  빨간색 `을 출력한 후 break 되어 switch문에서 벗어나 \n
>  ` switch문 종료`가 출력된다.
> 
> **② color = "pink"** \n
> 첫번째 조건은 지나친 후, **두번째 조건** **"pink"를 만족**하므로 \n
> `  분홍색 `을 출력한 후 break 되어 switch문에서 벗어나 \n
>  ` switch문 종료`가 출력된다.
> 
> **③ color = "black"** \n
> 첫번째, 두번째 조건은 지나친 후, **세번째 조건** **"black"을 만족**하므로 \n
> `  검정색 `을 출력한 후 break 되어 switch문에서 벗어나 \n
>  ` switch문 종료`가 출력된다.
> 
> **④ color = "blue"** \n
> 첫번째, 두번째, 세번째 조건 모두 만족하지 못하므로 \n
> default 내의 `알 수 없는 색`을 출력한 후 switch문에서 벗어나 \n
>  ` switch문 종료`가 출력된다.


## break 활용
각각의 case에는 break를 통해 switch문을 종료시킬 수 있지만,
만약 break하지 않는다면 switch문 내의 원치 않는 명령문이 실행될 수 있습니다.
이러한 break의 특징을 이용해 더 복잡한 조건의 구문을 만들 수 있습니다.

> 
> ```java
> String grade = A; // 등급
> int price = 0; // 기본 가격
> 
> switch (grade) {
>   case A:
>       price += 500;
>   case B:
>       price += 300;
>   case F:
>       price += 200;
>       break;
> }
> System.out.println(grade + "등급 : " + price + "원");
>```
> 
> 위 switch문에서 나올 수 있는 3가지
>
> **① grade = "A"** \n
> **첫번째 조건 "A"** 를 만족하므로 `price += 500`을 수행하고, \n
> break문이 없으므로 switch문이 종료되지 않아 다음 수행문 `price += 300`을 수행한다. \n
> 또 다음 수행문 `price += 200`도 마찬가지로 수행한 후 **break를 만나** switch문에서 벗어나 \n
>  ` A등급 : 1000원 `이 출력된다.
>
> **② grade = "B"** \n
> **두번째 조건 "B"** 를 만족하므로 `price += 300`을 수행하고, \n
> break문이 없으므로 switch문이 종료되지 않아 다음 수행문 `price += 200`을 수행한 후 \n
> **break를 만나** switch문에서 벗어나 \n
> ` B등급 : 500원 `이 출력된다.
>
> **③ grade = "F"** \n
> **세번째 조건 "F"** 를 만족하므로 `price += 200`을 수행하고, \
> **break를 만나** switch문에서 벗어나 \n
> ` F등급 : 200원 `이 출력된다.
>
> **④ grade = "C"** \n
> **모든 조건을 만족하지 못하므로** 
> **바로** switch문에서 **벗어나** \n
> ` C등급 : 0원 `이 출력된다.