---
sidebar_position: 3
slug: /escapeSequence
---

# 이스케이프 문자

이스케이프 문자란?
> 문자열 내부에 역슬래시 ￦ 를 이용하여 특정 문자를 포함시키는 문자를 뜻합니다.

문자열과 명령어를 구별하기 위해 출력 문자열 사이에서 탈출 시킨다는 뜻으로 Escape Sequence라고 불립니다.
명령어라고 인식 시키기 위하여 명령어 문자 앞에 역슬래시 ￦를 함께 작성합니다.

## 이스케이프 문자 종류

① `￦n` : 줄바꿈 (개행)
```java
System.out.println("ksinny");
System.out.println("java");
System.out.println("04/26");

System.out.println("ksinny\njava\n04/26");

/* 출력
ksinny
java
04/26
/*
```

② `￦t` : 탭
```java
System.out.println("ksinny    Java Engineer");
System.out.println("ksinny\tJava Engineer");

// ksinny   JavaEngineer
```

③ `￦￦` : 역슬래시
```java
System.out.println(C"\\Program Files\\Java");
// C:\Program Files\Java
```

④ `￦"` : 큰따옴표
```java
System.out.println("고양이가 \"야옹\"하고 울었다.");
// 고양이가 "야옹"하고 울었다.
```

⑤ `￦'` : 작은따옴표
```java
char c = '\'';
System.out.println(c);
// '
```