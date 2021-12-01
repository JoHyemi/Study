//array 속 요소 제거

//1. splice
let nums = [100, 200, 300, 400, 500];
nums.splice(3, 2); //이렇게만 하면 그냥 제거되기만 한다. 위치 3부터 2개의 요소 제거.
nums

//[100, 200, 300]

//splice(start)
//splice(start, deleteCount)
//splice(start, deleteCount, item1) 
//splice(start, deleteCount, item1, item2, itemN)

//2. pop
let nums = [100, 200, 300, 400, 500];
nums.pop();
nums = nums;
nums.pop();
nums

//pop은 끝 요소를 지운다.
//그래서 pop()으로 두번! 지워줬다. 
//다만 여기에서 nums.pop()을 출력하면 내가 지운 요소가 출력된다.
//* 반대되는 것으로 shift가 있다. 얘는 제일 앞 요소를 지운다.


//3. length
let nums = [100, 200, 300, 400, 500];
nums.length = 3;
nums
// nums의 길이를 3으로 정해서 그 뒤에 것을 잘라버리기.

