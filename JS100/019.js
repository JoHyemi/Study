// 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.


//방안1
let putNumber = prompt('두 숫자를 입력하세요');
let a = parseInt(putNumber.split(' ')[0], 10);
let b = parseInt(putNumber.split(' ')[1], 10);

document.write(a**b);



//방법2
let putNumber2 = prompt('두 숫자를 입력하세요').split(' ');

document.write(parseInt(putNumber2[0], 10) ** parseInt(putNumber2[1], 10));


//입력된 숫자를 공백으로 나누기 위해서 split(' ') 사용 - 배열로 변경됨
//배열의 첫번째를 꺼내서 putNumber.spit(' ')[0]
//숫자로 바꿔줌 parseInt(putNumber.spilt(' ')[0], 10)
//그리고 계산
