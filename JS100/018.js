// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.


let score = prompt('국어, 수학, 영어 점수를 입력하세요')
let sum = 0;
let average = 0;

for(let i=0; i < 3; i++){
    sum += parseInt(score.split(' ')[i], 10);
}

average = Math.floor(sum/3);

//띄어쓰기로 구분 된 점수를 배열로 바꿔준다. (score.split(' '))
//연산을 위해 배열의 각 값을 숫자(십진법)로 바꿔준다.(parseInt(score.split(' ')[i], 10))
//소숫점 이하는 버리기 위해 구한 평균값에 Math.floor를 적용시켜준다.
