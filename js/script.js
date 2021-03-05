
// ! APP STATE

const state = {
  player1: 0,
  player2: 0,
  currentQuestion: {}, //empty object
  which: true
}
let questions = []

// ! Main DOM Elements

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1Score = $("#player1 h4")
const $p2Score = $("#player2 h4")
console.log($p1Score, $p2Score)

// ! Functions

const chooseAnswer = (event, question) => {
  if (event.target.innerText === question.answer){
      if (state.which) {
          state.player1++
          state.which = !state.which
          console.log("correct")
      }else{
          state.player2++
          state.which = !state.which
      }
      setBoard(questions)
  } else {
      setBoard(questions)
      state.which = !state.which
      console.log("incorrect")
}
}

const setBoard = (q) => {
  //Getting a random question
  const randomIndex = Math.floor(Math.random() * q.length)
  const randomQuestion = q[randomIndex]
  //Update question
  $question.text(randomQuestion.question)
  $a.text(randomQuestion.a)
  $b.text(randomQuestion.b)
  $c.text(randomQuestion.c)
  $d.text(randomQuestion.d)
  
  //update players scores
  $p1Score.text(state.player1)
  $p2Score.text(state.player2)
  // remove the event listener before adding a new one

  $("li").off();
  $("li").on("click", (event) => {
      chooseAnswer(event, randomQuestion)
  });
}

//App logic

const url = "https://cdn.contentful.com/spaces/6snrh18ago17/environments/master/entries?access_token=SN8hehCRubh8DraZQsdjYFI7ZsHCsGfr5JrTRNwvrjc&content_type=triviaQ"
$.ajax(url)
.then((data)=> {
 questions = data.items.map((q) => q.fields)
 console.log(data)
 console.log(questions)
 setBoard(questions)
})

