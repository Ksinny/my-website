---
sidebar_position: 4 
slug: /thisAndThis()
---

# this와 this()

this 키워드와 this() 메소드는 이름은 같지만 전혀 다른 역할을 하니 주의하여 사용해야 합니다.
## this

this 키워드를 이용하면 인스턴스가 자신을 참조할 수 있습니다.

this 참조 변수는 인스턴스 메소드(생성자 포함)에서만 사용할 수 있습니다.

```java
this.인스턴스변수명
```
****
```java
public class People {
    public String name;
}
```

People 클래스의 인스턴스 변수 name의 값을 변경하는 setName 함수를 만들어보겠습니다.

```java
public void setName(String name) {
    name = name;
}
```
만약 위 예시처럼 인스턴스 변수의 이름과, 매개변수의 이름이 name으로 동일하면
setName() 메소드 내의 name은 인스턴스 변수 name이 아닌 매개변수 name으로 인식되기 때문에
변경하려고 한 인스턴스 name의 값은 변하지 않습니다.

이를 해결하기 위해 this 키워드를 이용하면 `this.name` 으로 인스턴스 변수를 이용할 수 있습니다.
```java
public void setName(String name) {
    this.name = name;
}
```
## this()

this() 메소드는 생성자 내부에서만 사용 가능합니다.

this() 메소드를 사용하면 같은 클래스의 다른 생성자를 호출할 수 있습니다.  

다음과 같이 Test 클래스 내에 3개의 생성자를 생성하였습니다.
```java
public class Test{
    public int mathScore;
    public int englishScore;
    public String name;

    Test() {
        System.out.println("기본 생성자");
    }
    
    Test(String name) {
        System.out.println("이름 추가");
        this.name = name;
    }
    
    Test(int mathScore, int englishScore) {
        System.out.println("수학점수, 영어점수 추가");
        
        this.mathScore = mathScore;
        this.englishScore = englishScore;
    }
} 
```

this() 메소드는 반드시 호출할 생성자의 **맨 첫줄**에서 호출해야합니다.

**① 인수가 없는 경우**  
this() 그대로 호출하면 인수없이 생성했던 생성자가 호출됩니다.

```java
Test(String name) {
    this();
    System.out.println("이름 추가");
    this.name = name;
}
```

`이름` 인수와 함께 인스턴스를 생성하면 String 자료형을 전달받는 생성자가 호출되는데  
이때, this()로 호출된 기본형 생성자가 포함되어 호출됩니다.

```java
Test test1 = new Test("이름");
System.out.println(name);
```
```java
기본 생성자
이름 추가
이름
```

따라서` 기본 생성자` 가 먼저 출력된 후
String 매개변수를 전달받는 생성자가 호출되어 `이름 추가`가 출력됩니다.


**② 인수가 있는 경우**  
this()에 인수를 전달하여 호출하면 this()에 작성한 인수와 동일한 매개변수를 갖는 Test() 생성자가 호출됩니다.

```java
Test() {
    this(70, 90);
    System.out.println("기본 생성자");
}
```

전달값 없이 인스턴스를 생성하면 매개변수를 가지지 않는 기본형 생성자가 호출되는데  
이때, `this(70,90)`으로 호출된 기본형 생성자가 포함되어 호출됩니다.


```java
Test test2 = new Test();
System.out.println(test2.mathScore);
System.out.println(test2.englishScore);
```
```java
수학점수, 영어점수 추가
기본 생성자
70
90
```

따라서 `수학점수, 영어점수 추가` 가 먼저 출력된 후
매개변수를 갖지 않는 기본형 생성자가 호출되어 `이름 추가`가 출력됩니다.

