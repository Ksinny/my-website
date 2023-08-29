---
sidebar_position: 5
slug: /Inheritance
---

# 상속

상속이란?
> 자식이 부모로부터 유전자를 물려받는 것처럼, 
> 기존의 **부모 클래스**(super class)로부터 **필드와 메소드**를 물려받아 **새로운 자식 클래스**(sub class)를 정의하는 것을 뜻합니다.

### 상속의 장점
- 코드의 중복을 제거하여 클래스 간결화
- 기존 코드의 재활용성과 확장
- 클래스의 계층 분류로 클래스 관리 용이

## 자식 클래스

자식 클래스란?
> 부모 클래스의 모든 기능과 메소드를 상속받아 새롭게 재정의된 클래스

## 상속 선언

클래스의 정의와 동일한 방식으로 정의한 후, `extends` 이용하여 상속받을 부모를 지정합니다. 
```java
접근제어자 class 자식클래스명 extends 부모클래스명 {
    // 구현
}
```
****

부모 클래스가 될 Parent 클래스에 `name` 변수와 `getName() `메소드를 정의했습니다. 

```java
public class Parent {
    public String name = "부모";

    public void getName() {
        System.out.println(name)
    }
}
```

위에서 정의한 Parent 클래스를 상속받은 Child1 클래스를 정의하고, 
생성자를 이용해 Parent 로부터 상속받은 `name` 변수의 값을 "자식1"로 초기화합니다.
```java
public class Child1 extends Parent {
    Child1() {
        name = "자식1";
    }
}
```
위에서 정의한 Parent 클래스를 상속받은 Child2 클래스를 정의하고, 
생성자를 이용해 Parent 로부터 상속받은 `name` 변수의 값을 "자식2"로 초기화합니다.

```java
public class Child2 extends Parent {
    Child2() {
        name = "자식2";
    }
}
```

Inheritance 클래스를 정의하여 메인 메소드에서 Parent, Child1, Child2 **인스턴스를 생성**하고,  
`getName()` 메소드를 통해 `name` 값을 확인하면 다음과 같은 결과가 출력됩니다. 
```java
public class Inheritance {
    public static void main(String[] args) {
        Parent parent = new Parent();
        Child1 ch1 = new Child1();
        Child2 ch2 = new Child2();

        parent.getName();
        ch1.getName();
        ch2.getName();
    }
}
```

```java
부모
자식1
자식2
```


:::tip  
자식은 둘 이상의 부모에게 상속받을 수 없습니다.  
반대로 부모는 하나 이상의 자식에게 상속할 수 있습니다.  
:::

## 메소드 오버라이딩

오버라이딩이란?
> 자식 클래스에서 부모 클래스의 메소드를 덮어써서 재정의하는 것을 뜻합니다.


****

Class 부모 클래스를 다음과 같이 생성하고,
`showName()` 메소드를 자식클래스에서 오버라이딩해 이용하겠습니다.

```java
public class Class {
    public String name;
    
    public Class () {
        this.name = "1";
    }
    
    public void showName() {
        System.out.println(this.name + "반 입니다.");
    }
    
}
```

부모 클래스에서 상속받은 `showName() `메소드를 그대로 이용하지 않고 변형하여 재정의한 `showName()` 입니다.

```java
public class Student extends Class {
    public Student() {
        this.name = "철수";
    }

    @Override 
    public void showName() {
        System.out.println(this.name + "학생입니다.");
    }

}
```

`showName()`이라는 같은 함수를 부모클래스 Class, 자식클래스 Student 에서 각각 호출하면 
다음과 같이 **이름은 동일하지만 서로 다른 메소드**가 호출되는 것입니다.

```java
Class classroom = new Class();
Student student = new Student();

classroom.showName();
student.showName();
```
```java
1반 입니다.
철수 학생입니다.
```