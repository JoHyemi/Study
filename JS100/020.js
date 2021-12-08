// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.


let Num = prompt('두 숫자를 입력하세요').split(' ');
let a = parseInt(parseInt(Num[0], 10) / parseInt(Num[1], 10);
let b = parseInt(Num[0], 10) % parseInt(Num[1], 10);

console.log(a, b);


//입력받은 숫자를 배열로 바꾸고, split(' ')
//parseInt를 사용해서 숫자로 바꿔주고 계산한 다음, 다시 parseInt를 사용해서 정수로 변환

