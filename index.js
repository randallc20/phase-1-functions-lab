// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42){
        return blockNumber - 42;
    }
    else{
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, destBlock){
    if (startBlock < destBlock){
        return ((destBlock - startBlock)*264);
    }
    else {
        return ((startBlock - destBlock) * 264);
    }
}

function calculatesFarePrice(startBlock, destBlock){
    const dist = distanceTravelledInFeet(startBlock, destBlock);
    if(dist <= 400){
        return 0;
    }
    else if(dist > 400 && dist <= 2000){
        return .02 * (dist - 400);
    }
    else if(dist > 2000 && dist <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}
