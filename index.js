const data = [
    {   
        Principal: 2500,
        time: 1.8
    },
    {
        Principal: 1000,
        time: 5
    },
    {
        Principal: 3000,
        time: 1
    },
    {
        Principal: 2000,
        time: 3
    }
]

const interestCalculator = array => {
    let rate;
    const interestData = data;
    for(let i = 0;i<array.length;i++){
        if(array[i].Principal >= 2500 && (array[i].time > 1 && array[i].time < 3)){
            rate = 3;
        }else if(array[i].Principal >= 2500 && array[i].time >= 3){
            rate = 4;
        }else if(array[i].Principal < 2500 && array[i].time <= 1){
            rate = 2;
        }else {
            rate = 1;
        }
        
        const interest = (array[i].Principal*rate*array[i].time)/100;
        interestData[i].rate = rate;
        interestData[i].interest = interest;
        
    }
    console.log(interestData);

    return interestData;
}

interestCalculator(data);