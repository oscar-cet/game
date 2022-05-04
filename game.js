//Iniuciamos Jquery
$(document).ready(function(){

//Comienzo Game Sin animacion
var stop = $('#animatedBackground');
var enemy = $('#enemy');
stop.css('AnimationPlayState', 'paused');
enemy.css('AnimationPlayState', 'paused');


//Quitar boton inicio y comenzar el juego
var inicio = $('#inicio');

inicio.click(function(){
    var mario = $('#mario');
    mario.attr('src', 'mario.gif');
    inicio.css('display', 'none');
    stop.css('AnimationPlayState', 'running');
    enemy.css('AnimationPlayState', 'running');
    //puntaje;
    timer;



//Evento SALTAR
var dino = $('#dino');

$(document).keyup(function(){
    dino.animate({
        marginTop: '-140px',

    },'slow')

    dino.animate({
        marginTop: '0px',

    },'slow')
});




//Score
var timer = null
    var value = 0;
    var subida = $('#i');

    if(timer!== null)return;
    timer = setInterval(function(){
        subida.text(++value);

    //Anuncion Ganador
    if(value == 30){
        win.css('display', 'block');
        stop.css('AnimationPlayState', 'paused');
        clearInterval(timer);
        button.hide();
        play.hide();
        mario.attr('src', 'estatica.png');
        enemy.css('AnimationPlayState', 'paused');

    }
}, 1000);





//Pausar Juego y Score
var button = $('#stop');
var song = $('#song');

button.click(function(){
    button.hide();
    play.show();
    mario.attr('src', 'estatica.png');
    stop.css('AnimationPlayState', 'paused');
    //clearInterval(puntaje);
    enemy.css('AnimationPlayState', 'paused');
    //song.attr('src', '');
    clearInterval(timer);
    timer = null;
    
});



//Continuar Juego y Score
var play = $('#play');

play.click(function(){
    button.show();
    play.hide();
    mario.attr('src', 'mario.gif');
    stop.css('AnimationPlayState', 'running');
    enemy.css('AnimationPlayState', 'running');
    //puntaje;
    //song.attr('src', 'Sad.wav');
    if(timer!== null)return;
    timer = setInterval(function(){
        $('#i').text(++value);
    }, 1000)
});




//Coordenadas
var enemigo_top = 0;
var enemigo_bot = 0;
var enemigo_left = 0;
var enemigo_rigth = 0;

var x = setInterval(function(){

    var coordenadas_enemy = enemy[0].getBoundingClientRect();

    enemigo_top = coordenadas_enemy.top;
    enemigo_bot = coordenadas_enemy.bottom;
    enemigo_left = coordenadas_enemy.left;
    enemigo_right = coordenadas_enemy.right;
    console.log('Enemigo top ' +enemigo_top + 'enemigo left ' + enemigo_left + 'enemigo rigth ' + enemigo_right);


    //Coordenadas avatar
    var avatar_top = 0;
    var avatar_bot = 0;
    var avatar_left = 0;
    var avatar_right = 0;


    var coordenadas_dino = dino[0].getBoundingClientRect();
    avatar_top = coordenadas_dino.top;
    avatar_bot = coordenadas_dino.bottom;
    avatar_left = coordenadas_dino.left;
    avatar_right = coordenadas_dino.right;

    console.log('avatar bot' + avatar_bot +
                'avatar right ' + avatar_right);
   
/*    if(enemigo_left <= 88 &&  avatar_bot >= 330){
        mario.attr('src', 'estatica.png');
        stop.css('AnimationPlayState', 'paused');
        clearInterval(puntaje);
        enemy.css('AnimationPlayState', 'paused');
        
    };*/


    if(enemigo_left <= 59 && avatar_bot >= 322 && enemigo_left > 37){
        mario.attr('src', 'estatica.png');
        stop.css('AnimationPlayState', 'paused');
        clearInterval(timer);
        enemy.css('AnimationPlayState', 'paused');
        lose.css('display', 'block');
        button.css('display', 'none');

    };
    
    
}, 1);

var lose = $('#lose');

//Reiniciar juego
lose.click(function(){
    inicio.css('display', 'block');
    button.css('display', 'block');    
    location.reload();

})

//Reiniciar juego
var win = $('#Win');
win.click(function(){
    inicio.css('display', 'block');
    button.css('display', 'block');    
    location.reload(); 
});


//Agregr boton de reiniciar juego
//Musica
//mobile



//Fin
})})