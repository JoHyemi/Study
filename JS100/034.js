// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)



let height = prompt('키를 입력해주세요');
let heightSort = '';

heightSort = height.split(' ').sort(function(a,b){ return a-b;}).join(' ');

if ( height === heightSort){
console.log("YES");
} else {
console.log("NO");
};

//입력받은 문자열을 받을 height를 선언해주고, 그것과 비교할 정렬된 값이 들어갈 heightSort를 선언해준다.
//heightSort는 문자열인 height를 split를 이용해 배열로 바꾸고, sort를 활용해 정렬해준 뒤, join으로 다시 문자열로 바꿔주었다.
//if문을사용해서 같으면 YES, 다르면 NO가 출력된다.
