// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

let main = prompt('문장을 입력하세요');
let word = prompt('찾고자 하는 단어를 입력하세요');

console.log(main.indexOf(word));


//indexOf: 특정값이 포함된 위치를 알려준다.