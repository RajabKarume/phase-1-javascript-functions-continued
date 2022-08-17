// code your solution here
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!` ;
}
saturdayFun();
saturdayFun('bathe my dog');

const mondayWork = function(task = `go to the office`){
    return `This Monday, I will ${task}.`;
}
function wrapAdjective( adj = "*"){
    return function(answer = "special"){
        return `You are ${adj}${answer}${adj}!`;
    }
}