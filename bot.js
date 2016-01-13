// :: CONFIG :: //
var startValue = 0.1; // First bet value :)
// :: CONFIG :: //
// :: CREATED BY WRONA96 make some money and have some fun :):: //


function bet() {
    setBetAmount();
    setTimeout(placeBet, 50);
}

function setBetAmount() {
	ilemasz=checkilemasz();
	if(ilemasz<ilemiales)
	{
		currentValue = currentValue*2
	}
	else
	{
		currentValue = startValue;
	}
	ilemiales=checkilemiales();
	$betAmountInput.val(currentValue);
	placeBet()
}

function placeBet() {
       $Play.click()
	   setTimeout(placeBet2, 3000);
}
function placeBet2() {
       $Play.click()
	setTimeout(czek, 3000);
}
function czek() {
	count++
	setTimeout(setBetAmount, 2000);
}

function checkilemasz(){
	return $balance.text()
}

function checkilemiales() {
    return $balance.text()
}

var currentValue = startValue
var count = 0
    $balance = $("#goCoins")
	$Play = $("#roll")
    $betAmountInput = $("#bet")
	setBetAmount();
var ilemiales = 0;
var ilemasz = 0;
