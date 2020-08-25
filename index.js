const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// batteryBatches.reduce((amount, (totalBatteries) => amount + totalBatteries), 0);
let totalBatteries = batteryBatches.reduce((total,element)=>element+total,0);
