let score = JSON.parse(localStorage.getItem('score')) || {
        win : 0,
        lose : 0,
        tie : 0
};

    updatescore();

    // if(score === null){
    //     score = {
    //         win : 0,
    //         lose : 0,
    //         tie : 0
    //     };
    // }

    // if(!score ){
    //     score = {
    //         win : 0,
    //         lose : 0,
    //         tie : 0
    //     };
    // }

function computermove(){
    const randomnum = Math.random();
    let computermv = '';

    if(randomnum >=0 && randomnum <1/3){
        computermv = 'Rock';

    }else if(randomnum >= 1/3 && randomnum < 2/3){
        computermv = 'Paper';

    } else if(randomnum >=2/3 && randomnum <1){
        computermv = 'Scissor';
    }
    return computermv;
}

function game(playermove){
    let cmv = computermove();
    let result = '';
    if(cmv === 'Rock'){
        if(playermove === 'Rock'){
            result = 'tie';
            score.tie++;

        }else if(playermove === 'Paper'){
            result = 'win';
             score.win++;

        }else if(playermove === 'Scissor'){
            result = 'lose';
             score.lose++;
        }

    } else if(cmv === 'Paper'){
        if(playermove === 'Rock'){
            result = 'lose';
             score.lose++;

        }else if(playermove === 'Paper'){
            result = 'tie';
             score.tie++;

        }else if(playermove === 'Scissor'){
            result = 'win';
             score.win++;
        }

    }else if(cmv === 'Scissor'){
        if(playermove === 'Rock'){
            result = 'win';
            score.win++;

        }else if(playermove === 'Paper'){
            result = 'lose';
            score.lose++;

        }else if(playermove === 'Scissor'){
            result = 'tie';
             score.tie++;
        }
    }

    localStorage.setItem('score' , JSON.stringify(score));

    updatescore();

     document.querySelector('.choice')
        .innerHTML = `${result}`;

    document.querySelector('.opposite')
        .innerHTML = `You <img src="${playermove}-emoji.png"
        class="move">
        <img src="${cmv}-emoji.png"
        class="move"> Computer`;
        

    // alert(`computer chose ${cmv} , player choose ${playermove} , ${result} \n win: ${score.win} , lose: ${score.lose} , tie: ${score.tie}`);
}

function updatescore(){
    document.querySelector('.rate')
        .innerHTML = `win: ${score.win} , lose: ${score.lose} , tie: ${score.tie}` ;
}


   
