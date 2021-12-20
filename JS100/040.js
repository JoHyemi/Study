// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.


let limit = prompt('제한무게');
let friends = prompt('탑승할 친구의 수');
let total = 0;
let count = 0;

for(let i = 1; i <= friends; i++) {
    total += parseInt(prompt('친구들의 몸무게'),10);
    if(total <= limit) {
        count = i;
    }
}

console.log(count);

//제한무게, 친구의 수, 제한무게와 비교할 총 친구의 무게, 몇명까지 탈 수 있을지 i를 나타낼 count를 선언해준다.
//i는 친구의 수 이기 때문에, 1부터 시작한다. 친구의 수만큼 몸무게를 입력받아야하기 때문에 친구의 수만큼 반복한다.
//반복하면서 total에 친구들의 무게가 쌓여가고 그게 리밋보다 작거나 같을 때까지만의 i를 출력한다.