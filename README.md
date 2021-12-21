# Javascript 100제

Day1 (1~3)
---
 **array 속 요소 제거**
* ```splice```
    
    이렇게만 하면 그냥 제거되기만 한다. 위치 3부터 2개의 요소 제거.

    splice(start, deleteCount, item1, item2, itemN)
    
    요소를 삭제하는 것 외에도 추가하거나, 삭제하고 그 자리에 추가하는 것도 가능하다.

<br>

* ```pop```

    pop은 끝 요소를 지운다.

    다만 여기에서 nums.pop()을 출력하면 내가 지운 요소가 출력된다.
    * 반대되는 것으로 shift가 있다. 얘는 제일 앞 요소를 지운다.

    <br>

* ```length```

    nums의 길이를 3으로 정해서 그 뒤에 것을 잘라버릴 수 있다.

<br>

array의 tata type은 object이다.

<br>

Day2 (4~6)
---
**data type**

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
**변수명**

변수명으로는 숫자로 시작할 수 없고, 이미 javascript 내에 있는 이름은 올 수 없다.

<br>

**concat**

두개 이상의 배열, 배열안에 값을 추가할 때, 문자열에 문자열을 합칠 때 등 사용이 가능하다.

원본은 건드리지 않는다.

<br>

Day4 (10~12)
---

**for문**

트리 만들기.
공백은 하나씩 감소하고, * 은 하나씩 증가.
```
let level = prompt('숫자를 입력하세요');

for(let i = 1; i <= level; i++){
  // tree 계속 초기화
    let tree = "";
  //공백 넣기
    for (let k =1; k<=level-i; k++){
        tree += " ";
    }
    for(let j =1; j <=2*i-1; j++){
        tree += "*";
    }
    console.log(tree);
}
```

<br>

1부터 100까지 모두 더하기
```
for(let i = 1; i <101; i++){
  s += i;
}
```
<br>

Day5 (13~15)
---
**배수**
```
if (n % 3 === 0) {
    document.write("짝");
} else {
    document.write(n);
}
```
<br>

**문자열과 변수**

""와 + 사용
```document.write("안녕하세요. 저는 " + myName + "입니다.");```

`` 사용
```document.write(`안녕하세요. 저는 ${myName}입니다.`);```

<br>

Day6 (16~18)
---
**문장뒤집기**

```
let text = prompt('문장을 입력하세요');
function reverse(text) {
    text += ''
    if(text.length <=1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}
reverse(text);
```
<br>

**split, parseInt**

```parseInt(score.split(' ')[i], 10);```

띄어쓰기로 구분 된 점수를 배열로 바꿔준다. (score.split(' '))
연산을 위해 배열의 각 값을 숫자(십진법)로 바꿔준다.(parseInt(score.split(' ')[i], 10))

<br>

Day7 (19~21)
---
**parseInt**

parseInt를 사용해서 숫자로 바꿔주고 계산한 다음, 다시 parseInt를 사용해서 정수로 변환
```parseInt(parseInt(Num[0], 10) / parseInt(Num[1], 10)```

<br>

**Set**

```new Set([iterable])```

<br>

Day8 (22~24)
---
**배수**

%(나머지)를 사용했을 때 0이 나와야 한다.

<br>

**floor, round**

```console.log(10/3) === 3.333333333333333...```

3이 되려면 floor(내림)이나, round(반올림)를 쓰면 된다.

<br>

**대문자, 소문자**


대문자로 변환: toUpperCase()
소문자로 변환: toLowerCase()

<br>

Day9 (25~27)
---
**객체의 value값**

객체[key값] === value값

<br>


Day10 (28~30)
---
**2문자씩 출력**

문자의 0번째부터, 1번째 그리고 1번째부터 2번째 이런식으로 계속 반복하기 위해
n[i] n[i+1], n의 길이보다 하나가 작게 반복해야 마지막 문자와 undefined가 나오지 않는다.
```
for(let i = 0; i<n.length-1;i++){
  console.log(n[i] + ' ' + n[i+1]);
}
```

<br>

**indexOf**

특정값이 포함된 위치를 알려준다.

```console.log(main.indexOf(word));```
main안에 word의 위치

<br>

Day11 (31~33)
---
**시간 복잡도**

O(1)이 아닌 것. 
```arr.slice()```
```arr.includes(5)```

O(1)?
- 입력값의 크기와 상관없이, 즉시 출력값을 얻어낼 수 있다.

<br>
