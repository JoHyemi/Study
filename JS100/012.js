// 데이터
// <여기에 class를 작성하세요.>

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();


// 출력
// 545 210 10
// 파이어볼


class Wizard{
    constructor(health, mana, armor){
        //이 헬스는 위자드 키워드 밑에 만들어진 인스턴스 헬스이다.(this)
        this.health = health;
        this.mana = mana;
        this.armor = armor;
        console.log("construction complete")
    }
    attack(){
    console.log("파이어볼");
    }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
