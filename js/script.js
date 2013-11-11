var flag = false;

$("#num_spots").keyup(function(event) {
    $('.container>input').remove();
    $('.container>#output').remove();
    $('.container>br').remove();
    if ( !isNaN($("#num_spots").val()) ){
      	generate_spots(parseInt($("#num_spots").val()));
    }
    
});

function generate_spots(value){
	if (!flag) $(".container").append("<span>Once you enter everyone's name, hit enter.</span>");
	flag = true;
	for(i=0;i<value;i++){
		$(".container").append("<br><input id='name_input' type='text' placeholder='Enter Name'><span id='output'></span>");
	}
	// $('.container').css('height','*=value');
	// $('.container').animate({height: '*=value'}, 500);
}

$("#name_input").live("keypress",function(e){
	if (((e.keyCode || e.which) == 13)) {
		randomly_assign();
	}
});

function randomly_assign() {
	var length = $('.container>input').size();
	var rand;
	var temp;
	var list = [];
	var out = [];
	for (i=0; i<length; i++){
		list.push($('.container>input')[i].value);
	}
	out = list;
	out = shuffleArray(list);
	for(i=0;i<length;i++){
		$('.container>#output')[i].innerText = out[i];
	}
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isRandom(list,out){
	for(i=0;i<out.length;i++){
		if (list[i]===out[i]){
			return false;
		}
	}
	return true;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i); // no +1 here!
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}