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

  //for loop을 이용한 문제들
    // Q1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
      let sum = 0;
      for(let i=1; i<=100; i++){
        sum = sum + i
      }
      console.log(sum)

    // Q2. 1부터 100까지 홀수만 출력하자.
      for(let i=1; i<=100; i+=2){
      console.log(i)
      }

    // Q3. 1부터 50까지 369결과를 프린트하자.

      for(let i=1; i<=50; i++){
        let stringValue = i.toString()
        let result = ""
        for(let j=0; j<stringValue.length; j++){ 
          //위에서 j는 인덱스값을 나타내준다
          if(stringValue[j]==="3" || stringValue[j]==="6" ||         stringValue[j]==="9"){
            result += "짝" 
            //같은표현: result = result +"짝"
          }
        }
        console.log(result.length>0 ? result : i) 
        //result값이 하나라도 있다면 ? result값을 표시해준다 : 그게 아니라면 숫자값을 표시해준다
      }

    // Q4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
      let n = 9
      let isPrime = true

      if(n == 1) {
          isPrime = false
        }
      for(let i=2; i<n; i++) {
        if(n%i == 0){
          isPrime = false
        }
      }
      console.log(isPrime)
  // end of Q //
// end of for문 //

//function//
function makeBurger(type,size,num){
  console.log("매개변수 값은?", type)
  console.log("빵두기")
  console.log("상추두기")
  if(num < 1){
    return "버거 개수가 0개 입니다." 
    //return을 만나는 순간 함수가 더이상 진행되지 않는다.
  }

  if(type == "불고기"){
    console.log("고기패티두기")
  } else if(type =="새우"){
    console.log("새우패티두기")
  }
  
  console.log("뚜껑덥기")
  console.log(type,"버거",size,"사이즈",num,"개 준비완료")

  return "완료되었습니다"
}

function serveFries(){
  console.log("감튀박스선택")
  console.log("감튀담기")
}

function serveCoke(){
  console.log("음료사이즈선택")
  console.log("얼음담기")
  console.log("뚜껑덥기")
}

let result = makeBurger("불고기","L",3) //매개변수
console.log("버거 프로세스 결과",result)

  //function 을 이용한 문제들//
    //Q1. "안녕 내 이름은 스텔라야"라는 문장을 프린트하는 함수 'greet’를 만드시오
      function greet() {
        console.log("안녕 내 이름은 스텔라야")
      } 

    //Q2. 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
      function greet(x) {
        console.log("안녕 내 이름은", x,"야")
      } 

    //Q3. 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
      function greet(x) {
        console.log("안녕 내 이름은", x,"야")
        return x
      }
      //결과 확인법
      const x = greet("스텔라")
      console.log("안녕 내 이름은", x, "야")

    //Q4. meetAt 함수를 만들어주세요.
      //  인자를 세개 받습니다.

      //  첫번째 인자는 년도에 해당하는 숫자입니다.
      //  두번째 인자는 월에 해당하는 숫자입니다.

      //  세번째 인자는 일에 해당하는 숫자입니다.

      //  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.

      //  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.

      //  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요.

      // 결과 예시
      // meetAt(2022); // 결과 --> 2022년

      // meetAt(2032, 3); // 결과 --> "2032년 3월"
      // meetAt(1987, 10, 28); // 결과 --> "1987/10/28"

      //내가 시도한 방법
      function meetAt(year, month, date) {

        if (year, month, date) {
          console.log(year,"/",month,"/",date)
        } else if (year, month) {
          console.log(year,"년 ",month,"월")
        } else if (year) {
          console.log(year,"년")
        }
      }

      console.log(meetAt(2022,5))
    
      //답
      function meetAt(year, month, date) {
      
        if (date){
          return `${year}/${month}/${date}`
        } else if(month) {
          return `${year}년 ${month}월`
        } else if(year) {
          return `${year}년`
        }
      } 
      
      console.log(meetAt(2022,1,7))

    //Q5. findSmallestElement 함수를 구현해 주세요.

      // findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

      // arr 의 값들 중 가장 작은 값을 리턴 해주세요.

      // 만일 arr 가 비어있으면 0을 리턴 해주세요.

      // 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
      // 이용되는 배열
      // [100,200,3,0,2,1]

      //내가 시도한 방법 (Math.min.apply(null, arr)을 이용함)
        function findSmallestElement(numArr) {
    
          let numMin = Math.min.apply(null, numArr); //array에서 가장 작은 수를 호출하는 식

          if (numArr.length == 0) { //array가 비어있다 -> length가 0이다.
            return 0
          } else if (numArr) {
            return numMin
          }
        }
        
        console.log(findSmallestElement([1,0,70,100]))

      //답
      function findSmallestElement(numArr) {
  
        if (numArr.length == 0) { //array가 비어있다 -> length가 0이다.
          return 0
        } 
        let numMin = numArr[0]
        for(let i=1; i<numArr.length; i++){
          if (numMin > numArr[i]){
              numMin = numArr[i]
          }
        }
        return numMin
      }
      
      console.log(findSmallestElement([]))

    //Q6. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

      // 출력예 )

      // 12300인 경우
      //  50000 X 0
      //  10000 X 1
      //  5000  X 0
      //  1000 X 2
      //  500 X 0
      //  100 X 3

      //내가 시도한 답이지만 완벽히 구현하지 못함 -> 반복문에서의 값을 다시 새로 업데이트 해주는 부분을 구현하지 못함!
        function countMoney(amount){
          let valueArr = [50000,10000,5000,1000,500,100]
          let count = amount/valueArr[0]

          for(let i=0; i<valueArr.length; i++){
            if (amount%valueArr[i]==0){
              return `${valueArr[i]} X ${count}`
            }
          }
        }

        console.log(countMoney(100000))

      //답
      let unit = [50000,10000,5000,1000,500,100]

      function countMoney(amount){

        for(let i=0; i<unit.length; i++){
          let count = Math.floor(amount/unit[i]) //Math.floor
          amount = amount - (unit[i] * count) //하고 난 후의 값을 다시 새로이 업데이트 해주는 부분
          console.log(`${unit[i]} X ${count}`)
        }
      }
      
      console.log(countMoney(106000))



   

