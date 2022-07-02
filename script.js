// Array //
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

//어레이에 마지막 아이템 "Zebra" 제거하기
animals.pop()
console.log(animals)

//주어진 어레이에 "Dog" 추가하기
animals.push("Dog")
console.log(animals)

//주어진 어레이에 "Mosquito","Mouse","Mule" 추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

//해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))

//해당 어레이에는 “Cat”이 있는가?
console.log(animals.includes("Cat"))

//"Red deer"을 "Deer"로 바꾸시오
console.log(animals.indexOf("Red deer"))
animals[77] = "Deer"
console.log(animals)
  //는 곧,
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf("Spider"))
animals.splice(81,3)
console.log(animals)
  //는 곧,
animals.splice(animals.indexOf("Spider"),3)
console.log(animals)

//"Tiger"이후의 값을 제거하시오
animals.splice(animals.indexOf("Tiger"))
console.log(animals)

//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newList)

//End of "Array"//

// Object// 
let student = {
    name: "Stella",
    age: 21,
    year: "yr2"
  }
  
  console.log(student)
  
  //특정 값만 보고 싶을때
  console.log(student.name) //또는
  console.log(student["name"])
  
  //값을 변경하고 싶을때
  student.name = "Ha" //또는
  student["name"] = "Ha"
  console.log(student)
  
  let studentLst = [{name:"Stella", age: 21 },{name:"Steve", age: 23 },{name:"Bob", age: 22 }]
  
  console.log(studentLst)
  console.log("첫번째 학생은:", studentLst[0])
  console.log("첫번째 학생의 나이는?", studentLst[0].age) //또는
  console.log("첫번째 학생의 나이는?", studentLst[0]["age"])
// end of Object //

// if문 //
//문제 1: 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
let number = -1

if(number > 0) {
  console.log("양성")
} else if (number < 0) {
  console.log("음성")
} else {
  console.log("0")
}
//레포트 점수에따라 등급을 매기는 프로그램을 만드시오
let score = 69

//나의 답
if (score >= 90 && score <= 100) {
  console.log("A")
} else if (score >= 80 && score <= 89) {
  console.log("B")
} else if (score >= 70 && score <= 79) {
  console.log("C")
} else if (score >= 60 && score <= 69) {
  console.log("D")
} else {
  console.log("F")
}

//답
let score =  90
let grade =''
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)

//한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
let skills = ["HTML","CSS","Javascript","React"]

  //Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오 //

//나의 답
if (skills=="Javascript" && "React") {
  console.log("합격!")
} else if (skills=="Javascript"||"React"){
  console.log("예비")
} else
  console.log("탈락")

let skills = ["HTML","CSS","Javascript","React"]

//답
if(skills.includes("Javascript") && skills.includes("React")){
  console.log("합격!")
}else if(skills.includes("Javascript") || skills.includes("React")){
  console.log("예비")
}else {
  console.log("탈락!")
}
// end of if문 //

//switch문//
let todo = 5

if(todo == 1) {
  console.log("장보기")
} else if (todo == 2 ){
  console.log("운동하기")
} else if (todo == 3 ){
  console.log("스케줄확인")
} else {
  console.log("물마시기")
}


switch (todo) {
  case 1:
    console.log("장보기")
    break;
  case 2:
    console.log("운동하기")
    break;
  case 3:
    console.log("스케줄확인")
       break;
  default:
    console.log("물마시기")
}
// end of switch문 //

//for문//
//i++  -> (i=i+1)를 뜻함
//i+=2 -> (i=i+2)를 뜻함
//i+=5 -> (i=i+5)를 뜻함

//for loop의 시작값; 조건값; i++
for(let i=0; i<10; i++){
  console.log("하이", i)
}

//짝수값만 호출하는 경우
//case1
for(let i=0; i<10; i+=2){
    console.log("하이", i)
} 
//case2(이지만 데이터가 case1에 비해 조금 느리게 호출된다)
for(let i=0; i<10; i++){
  if(i%2==0){
    console.log("하이", i)
  }
}

//for문과 while문
  //for문: 정확히 얼만큼 for문을 돌리고 싶은지 '범위'를 알때
  for(let i=2; i<=9; i++){
    console.log(i)
   }

 //while문: '범위'는 아니지만 정확히 어떠한 '상태'일때 실행을 시키고 싶은지 알때
 let i=2
 while(i<10) {
   console.log(i)
   i++;
 }

//따라서 while문은 주로 이렇게 사용된다.
 while(buttonclicked == true){
   console.log(i)
 }

 //for문과 Array배열
let fruit = ["apple","banana", "grape", "mango"]

//.length는 배열에서 주어지는 속성값 중 하나 -> 배열의'길이'를 뜻함 (아이템의 개수=4)
for(let i=0; i<fruit.length; i++){
  console.log(fruit[i])
}

// end of for문 //
