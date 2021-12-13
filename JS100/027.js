// 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

let name = prompt('이름을 입력해주세요').split(' ');
let score = (prompt('점수를 입력해주세요')+'').split(' ');
let obj = {};

for (let i = 0; i<name.length; i++){
obj[name[i]] = parseInt(score[i], 10);
}

console.log(obj);


//일단 공백을 기준으로 문자열을 나눠서 배열을 각각 만들어준다.
//그리고 key와 value를 넣을 빈 오브젝트를 만들어준다.

//i번째 key가 i번째 value를 가르키도록 한다. 이때 value는 숫자임으로, parseInt를 적용해준다.

