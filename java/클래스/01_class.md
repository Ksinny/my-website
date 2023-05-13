---
sidebar_position: 1  
slug: /class
---

# 클래스

자바 프로그래밍은 여러개의 객체들이 모여 하나의 프로그램을 이루는 객체 지향적인 특징을 갖고 있습니다.
유지보수가 용이하고, 높은 재사용성을 지닌다는 장점이 있습니다.

클래스란?
> 객체의 속성과 행위가 담긴 **객체의 설계도**로 정의됩니다.  
> 클래스는 객체의 타입으로 설정되며 
> **속성은 필드**(클래스에 포함된 **변수**)로, **행위는 메소드**로 구현합니다.

## 클래스 선언

```java
접근제어자 class 클래스명 {
    필드, 메소드, 생성자
}
```
① 접근제어자  
: 해당 클래스에 접근할 수 있는 범위 지정  
: public / private / default / private

② class  
: 클래스를 선언하는 키워드

③ 클래스명  
: 클래스를 호출할 때 필요한 이름

④ 필드  
: 클래스에 포함된 변수  
: 클래스 변수 (static) / 인스턴스 변수 / 지역 변수

```java
접근제어자 자료형 변수명;
public String name;
```

⑤ 메소드  
: 특정한 문장을 수행하는 명령문
```java
접근제어자 자료형 메소드명(파라미터 목록) {
    // 구현
};

public void getName() {
    // 구현
};
```

⑥ 생성자  
: 객체의 생성과 동시에 인스턴스 변수를 초기화할 수 있는 메소드  
: 생성자와 클래스의 이름 동일
```java
class 클래스명 {
    클래스명() {
        // 구현
    }
}
```
# 인스턴스

객체란?
> 클래스의 설계도로 만들어낸 실체를 뜻합니다.
> 프로그램 실행 중에 생성되는 실체로, 메모리 공간을 갖는 구체적인 실체를 말합니다.
> 인스턴스라고도 합니다.

자바에서 클래스를 사용하기 위해 해당 클래스를 타입으로 만든 객체를 선언해야합니다.
이때 객체(인스턴스)를 선언하는 과정을 **인스턴스화**라고합니다.  

## 인스턴스 생성

우선 People 이라는 클래스를 선언하였습니다.
String 형 변수 name, phone 필드를 선언하고, phone 값을 변경하는 메소드 editPhone을 정의했습니다.
```java
public class People {
    String name;
    String phone;
    
    String editPhone(String editNumber) {
        phone = editNumber;
        
        return phone;
    }
}
```

① 참조 변수 선언  
: 객체를 참조할 참조변수 선언
```java
클래스명 객체참조변수명;
    
People myPeople;
```

② 인스턴스 생성  
: `new` 연산자를 이용하여 인스턴스의 주소를 참조 변수에 할당하여 인스턴스 생성
```java
객체참조변수명 = new 클래스이름();

myPeople = new People;
```

참조 변수의 선언과 인스턴스 생성을 동시에 진행할 수도 있습니다.
```java
People myPeople = new People();
```

## 인스턴스 접근

```java
public class People {
    String name;
    String phone;
    
    String editPhone(String editNumber) {
        phone = editNumber;
        
        return phone;
    }
}
```

멤버 변수 name 과 메소드 editPhone()에 접근하기 위해선 먼저 인스턴스를 생성해야 합니다.
```java
People myPeople = new People();
```

생성한 인스턴스를 통해 멤버에 접근할 수 있습니다.

**객체 멤버 접근**  
: `.` 연산자를 이용하여 멤버에 접근
```java
객체참조변수명.접근할필드명;
객체잠조변수명.접근할메소드명();

myPeople.name = "이름";
myPeople.phone = "010-1234-5678";

myPeople.editPhone("010-4321-8765");
```
