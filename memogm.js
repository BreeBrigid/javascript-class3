var card_array = ['Cat','Cat','Dog','Dog','Cow','Cow','Bat','Bat','Rat','Rat','Bee','Bee','Ant','Ant','Fox','Fox','Kob','Kob','Owl','Owl','Hen','Hen','Cub','Cub'];
var card_clicked = 0;
var card_id = [];
var card_value = [];
Array.prototype.card_shuffle = function(){
    var i = this.length, b, temp;
    while(--i > 0){
        b = Math.floor(Math.random() * (i+1));
        temp = this[b];
        this[b] = this[i];
        this[i] = temp;
    }
}
function cardBoard(){
  card_clicked = 0;
  var output = '';
    card_array.card_shuffle();
  for(var i = 0; i < card_array.length; i++){
    output += '<div id="card_'+i+'" onclick="cardFlip(this,\''+card_array[i]+'\')"></div>';
  }
  document.getElementById('card_board').innerHTML = output;
}
function cardFlip(card,val){
  if(card.innerHTML == "" && card_value.length < 2){
    card.style.background = '#DAF7A6';
    card.innerHTML = val;
    if(card_value.length == 0){
      card_value.push(val);
      card_id.push(card.id);
    } else if(card_value.length == 1){
      card_value.push(val);
      card_id.push(card.id);
      if(card_value[0] == card_value[1]){
        card_clicked += 2;
        card_value = [];
              card_id = [];
        if(card_clicked == card_array.length){
          alert("You win! Start new game");
          document.getElementById('card_board').innerHTML = "";
          cardBoard();
        }
      } else {
        function flipAgain(){
            var card_1 = document.getElementById(card_id[0]);
            var card_2 = document.getElementById(card_id[1]);
                  card_1.innerHTML = "";
                  card_2.innerHTML = "";
            card_value = [];
                  card_id = [];
        }
        setTimeout(flipAgain, 300);
      }
    }
  }
}