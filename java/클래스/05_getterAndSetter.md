---
sidebar_position: 5
slug: /AccessModifier
---


# 접근제어자

접근제어자란? 
> 같은 클래스나 패지지에서 접근을 제한하거나 허용하는 범위를 지정할 수 있는 제어자입니다.

자바의 객체 지향 특성인 캡슐화는 객체를 캡슐로 싸서 내부를 볼 수 없게 하는 것으로,
이를 위해 외부의 접근으로부터 보호할 목적으로 접근제어자가 이용됩니다. 

## 접근제어자의 종류

1. public  
: 모든 클래스에게 접근 허용

2. protected  
: 같은 패키지 내의 다른 모든 클래스에게 접근 허용  
: 다른 클래스인 경우 자식 패키지에게도 접근 허용  
  
3. default  
: 같은 패키지 내의 모든 클래스에게 접근 허용  
: 아무것도 적지 않았을 때 default로 적용

4. private  
: 해당 클래스 내에서만 접근 허용

   
# Getter 와 Setter

getter와 setter 메소드를 통해 데이터를 안전하게 변경할 수 있습니다.  
getter 메소드로 값을 가져올 수 있고, setter 메소드 유효한 값을 저장할 수 있습니다.
또, private 변수는 다른 클래스에서 접근이 불가능하지만 Getter와 Setter를 이용하면 접근, 초기화, 변경 모두 가능합니다.

Test 클래스의 name과 score 값을 초기화하고 변경해보겠습니다.
```java
Public class Test{
    String name;
    int score;
}
```

name은 초기화시키지 않고, score 값은 -100으로 초기화한 후 값을 출력해보면   
객체에 유효한 값이 저장되지 않고, 무결성이 깨질 수 있습니다.
```java
Test test1 = new Test();
test1.score = -100;

System.out.println("이름 : " + test1.name);
System.out.println("점수 : " + test1.score);
```
```java
이름 : null
점수 : -100
```

이를 방지하고 알맞은 값을 저장하기 위해 Getter와 Setter를 사용합니다.


## Setter
```java
접근제어문 void set변수명(변수자료형 변수명) {
    // 구현
    this.변수명 = 변수명;    
}
```
값을 그대로 저장하거나, 유효한 값을 저장할 수 있도록 명령문을 추가하여 구현할 수 있습니다.
```java
public void setName(String name) {
    if (name == null || name.isEmpty()){
        this.name = name;
    }
}

public void setScore(int score) {
    if (score < 0) {
        this.score  = 0;
    } else {
        this.score = score;
    }
}

```

## Getter

```java
접근제어문 자료형 get변수명() {
    // 구현
    return 변수명;    
}
```

```java
public String getName() {
    return name;
}
public int getScore() {
    return score;
}
```

## Getter와 Setter 호출

Getter와 Setter 호출은 클래스의 메소드를 호출하는 방식과 동일합니다.
```java
Test test = new Test();

test.setName("이름");
System.out.println("이름 : " + test.getName());

test.setScore(-100);
System.out.println("점수 : " + test.getScore());

test.setScore(100);
System.out.println("점수 : " + test.getScore());
```

```java
이름 : 이름
점수 : 0
점수 : 100
```