// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.


let n = prompt("문장을 입력하세요");
reverseSentence = n.split('').reverse().join('')

// 문자열을 일단 배열로 바꾸고(split(''))
// 그걸 뒤집어 준다(reverse())
// 그리고 다시 하나의 문자열로 변경시켜 준다.(join('')



//function, if, slice 사용방법
let text = prompt('문장을 입력하세요');
function reverse(text) {
    text += ''
    if(text.length <=1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}
reverse(text);
