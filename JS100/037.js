// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
// 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.


// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const array = prompt('이름을 입력하세요').split(' ');
let result= {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a,b) {
  return result[a] > result[b] ? a : b ;
}
                                        
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

//입력받은 값을 배열로 만들어주고, 누가 몇표받았는지는 객체로 표현해주기 위해, 빈 객체를 선언
//for-in문을 통해 index가 0부터 array의 길이만큼 순회. val로 result 객체에 키 값을 선언해준다. 일단은 undefined.
//만약 그 값이 undefined면 value에 1이 들어가고 아니면 +1을 해준다.
//keys로 winner의 key값을 배열로 뽑아준다.
//value값을 비교해서, 더 큰 쪽의 key값을 리턴해준다. = winner(표를 가장 많이 받은 사람)
