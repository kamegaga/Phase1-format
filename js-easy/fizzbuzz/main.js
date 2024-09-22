//for(let i=1;i<=20;i++){
    //if(i % 3===0 && i % 5===0){
        //console.log('fizzbuzz');
    //}else if(i % 3=== 0){
        //console.log('fizz');
    //}else if(i % 5 === 0){
        //console.log('buzz');
    //}else{
        //console.log(i);
   // }
//}

let v = 0;
const rewiteNum=
document.getElementById('rewriteNum');
rewiteNum.innerHTML = v;

const rewriteCntUp=function(){
    v+= 1;
    if(v % 3 ===0 && v % 5 ===0){
        rewiteNum.innerHTML='fizzbuzz';
    }else if (v % 3=== 0){
        rewiteNum.innerHTML ='fizz'
    }else if (v % 5=== 0){
        rewiteNum.innerHTML ='buzz';
    }else{
        rewiteNum.innerHTML = v;
    }
};



