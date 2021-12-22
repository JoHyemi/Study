// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

// 예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.


//답1
let n = prompt('숫자를 입력하세요')+'';
let s = n.split('');
result = 0;
for(let i = 0; i <s.length; i++){
result += parseInt(s[i], 10);
}


//답2
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
}

console.log(sum);

//숫자를 문자로 바꾸고 그걸 배열로 변경해준 다음 하나씩 더하기

