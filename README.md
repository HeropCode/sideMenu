# 생성자(Constructor)

'생성자'는 객체를 만드는 역할을 하는 함수를 말합니다.<br>
명령의 재활용과 그에 따른 객체의 초기화를 위해서 사용합니다.<br>
**`new` 키워드**로 사용합니다.

## 연습 준비하기

'생성자'의 이해를 돕기 위해 'Side Menu' 예제를 작업합니다.<br>
작업을 위해 초기 설정 단계의 저장소로 이동하여 프로젝트 구조를 준비하십시오.

[초기 설정 단계 저장소로 이동](https://github.com/HeropCode/sideMenu/tree/initialization)

## 기본 구조

```js
function 생성자(매개변수) {
  this.속성1 = 매개변수;
  this.속성2 = 값;
}

생성자.prototype = {
  메소드1: function () {  },
  메소드2: function () {  }
}

var 인스턴스1 = new 생성자(인자1);
var 인스턴스2 = new 생성자(인자2);
```

## 코드

```js
var $sideMenu = $('.side_menu'),
    $showBtn = $('.side_menu_btn'),
    $hideBtn = $('.side_menu').find('.close_btn'),
    $list = $sideMenu.find('.main_menu > li > a'),
    $shadow = $('.side_shadow');
```