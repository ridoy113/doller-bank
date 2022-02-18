
document.getElementById('calculate').addEventListener('click', function () {
    const incomevalue = document.getElementById('income');
    const incomevalueNumber = parseInt(incomevalue.value);
    const foodvalue = document.getElementById('food');
    const foodvalueNumber = parseInt(foodvalue.value);
    const rentvalue = document.getElementById('rent');
    const rentvalueNumber = parseInt(rentvalue.value);
    const clothesvalue = document.getElementById('clothes');
    const clothesvalueNumber = parseInt(clothesvalue.value);

    const newvalue = foodvalueNumber + rentvalueNumber + clothesvalueNumber;


    const totalbalance = incomevalueNumber - newvalue;
    console.log('totalbalance', totalbalance, 'newvalue', newvalue)
    document.getElementById("my_expense").innerHTML = newvalue;
    document.getElementById("my_balance").innerHTML = totalbalance;
})
