---
sidebar_position: 2  
slug: /static
---


# Static

클래스 내에서 변수를 선언하거나 메소드를 정의할 때 `static` 키워드를 붙이면,
스태틱(클래스) 변수/메소드로 만들어집니다.

## 클래스 변수
클래스의 필드에는 선언 위치에 따라 3가지로 구분됩니다.

**① 클래스 변수**  
: 클래스 영역에 위치한 변수 중 static 키워드를 갖는 변수

**② 인스턴스 변수**  
: 클래스 영역에 위치한 변수 중 static 키워드를 갖지 않는 변수

**③ 지역 변수**  
: 메소드, 생성자, 초기화 블럭 `{}` 내에 위치한 변수

클래스 변수는 공유 변수라고도 불리는데, 클래스 내에서 모든 인스턴스가 공유해야 하는 값에 사용됩니다.
즉, 클래스 변수는 생성된 모든 인스턴스가 같은 값을 갖습니다.


### 클래스 변수 선언
변수의 선언 방식과 동일하지만, static 키워드를 포함합니다.

```java
class People {
    static String name = "이름";
}
```

### 클래스 변수 호출

클래스 변수는 모든 인스턴스와 값을 공유한다는 특징이 있어,
인스턴스로부터가 아닌 클래스에서 바로 호출이 가능합니다.
```java
People myPeople1 = new People();
People myPeople2 = new People();

System.out.println(myPeople1.name);
System.out.println(myPeople2.name);

System.out.println(People.name);
```

다음 예시와 같이 두 인스턴스에서 name 클래스 변수를 받아왔을 때와,
People 클래스에서 name을 받아왔을 때 모두 동일한 값이 출력됩니다.
```java
이름
이름
이름
```

앞서 말했듯이 클래스 변수는 모든 인스턴스와 값을 공유하기 때문에,
하나의 인스턴스에서 클래스 변수를 호출해 값을 변경하면 모든 인스턴스의 클래스 변수 값도 함께 변경됩니다.

```java
myPeople1.name = "이름변경";

System.out.println(myPeople1.name);
System.out.println(myPeople2.name);
System.out.println(People.name);

```

```java
이름변경
이름변경
이름변경
```


## 클래스 메소드

메소드는 **static 키워드**를 가지는 **클래스 메소드**와  
static 키워드를 **갖지 않는 인스턴스 메소드**로 구분됩니다.

클래스 변수와 동일한 특징을 갖고 있어, 인스턴스를 생성하지 않아도 사용할 수 있습니다.  
클래스 메소드에서 주의해야 할 것은, 클래스 메소드 내부에서는 인스턴스 변수를 사용할 수 없고 **클래스 변수만을 사용**할 수 있다는 점입니다.

### 클래스 메소드 정의

클래스 메소드 sayName() 내부에는 인스턴스 변수 age는 사용할 수 없고,
**클래스 변수 nam**e은 사용할 수 있습니다.

```java
class People {
    static String name = "이름";
    int age = 20;
    
    static void sayName() {
        System.out.println(name);
    }
}
```

### 클래스 메소드 호출

클래스 메소드도 클래스 변수와 같이 **클래스에서 바로 호출**이 가능합니다.
```java
People.sayName();
```

```java
이름
```



