//영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
//입력으로 랜덤한 숫자 n이 주어집니다.
//만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.



//입력으로 숫자 받기
let n = prompt("3의 배수인가요?");

//n이 3의 배수인지 보기 위해 3으로 나누었을 때, 나머지가 0 인지 확인. '='는 같음이 아니다.
if (n % 3 === 0) {
    document.write("짝");
} else {
    document.write(n);
}
