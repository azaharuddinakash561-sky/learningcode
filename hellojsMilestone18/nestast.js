let ownScore = 80;
let friScore = 60;

if(ownScore > 80){
    console.log('inside your friend score.');

    if(friScore > 80 ){
        console.log('go for a lunch');
    }else if(friScore >= 60){
        console.log('good luck next time');
    }else if( friScore >=40){
        console.log('keep your friends message unseen');
    }
    else {
        console.log("block this friend");

    }
}else{
    console.log('got to home and sleep and act sad');
}