//크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
//하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 


let level = 5;

for(let i = 1; i <= level; i++){
  // tree 계속 초기화
    let tree = "";
  //공백 넣기
    for (let k =1; k<=level-i; k++){
        tree += " ";
    }
    for(let j =1; j <=2*i-1; j++){
        tree += "*";
    }
    console.log(tree);
}

