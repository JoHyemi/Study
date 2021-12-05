# Javascript 100제

Day1 (1~3)
---
 array 속 요소 제거
* splice
    
    이렇게만 하면 그냥 제거되기만 한다. 위치 3부터 2개의 요소 제거.

    splice(start, deleteCount, item1, item2, itemN)
    
    요소를 삭제하는 것 외에도 추가하거나, 삭제하고 그 자리에 추가하는 것도 가능하다.

<br>

* pop

    pop은 끝 요소를 지운다.

    다만 여기에서 nums.pop()을 출력하면 내가 지운 요소가 출력된다.
    * 반대되는 것으로 shift가 있다. 얘는 제일 앞 요소를 지운다.

    <br>

* length

    nums의 길이를 3으로 정해서 그 뒤에 것을 잘라버릴 수 있다.

<br>

array의 tata type은 object이다.

<br>

Day2 (4~6)
---
data type

숫자의 data type은 number

문자의 data type은 string

배열의 data type은 object

true, false의 data type은 boolean이다.

<br>

```var i=1; i<5; i+=2```

i는 5 미만의 숫자이고, 1에서 2씩 커진다(홀수)
즉, 1, 3

<br>

false

NaN, 0, "", undefined

<br>

Day3 (7~9)
---
변수명

변수명으로는 숫자로 시작할 수 없고, 이미 javascript 내에 있는 이름은 올 수 없다.

<br>

concat

두개 이상의 배열, 배열안에 값을 추가할 때, 문자열에 문자열을 합칠 때 등 사용이 가능하다.

원본은 건드리지 않는다.
