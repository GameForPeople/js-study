alert( "끝말잇기를 시작합니다!" )
var prevWord = "ABC"

for ( var loopCount = 0; loopCount < 5; ++loopCount )
{
    var answerWord = prompt ( prevWord )

    if ( prevWord[ prevWord.length - 1 ] === answerWord[ 0 ] )
    {
        alert( "정답입니다!" )
        prevWord = answerWord
    }
    else
    {
        alert( "오답입니다!" )
    }
}

alert( "끝말잇기를 종료합니다!" )