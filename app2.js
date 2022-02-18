// updating price
function updatePrice(inputId, cost) {
    const extraMemory = document.getElementById(inputId, cost);
    extraMemory.innerText = cost;
    gettingTotal()
}
// getting total price & final total
function gettingTotal() {
    // best price
    const bestPrice = 1299;
    // extraMemory total price
    const extraMemoryTotal = parseFloat(document.getElementById('extra-memory').innerText)
    // extrastorage total price
    const extraStorageTotal = parseFloat(document.getElementById('extra-storage').innerText);
    // delivery cost 
    const deliveryCostTotal = parseFloat(document.getElementById('delivery-cost').innerText);
    // getting total price
    document.getElementById('total-price').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
    // getting total for last total
    document.getElementById('final-total').innerText = bestPrice + extraMemoryTotal + extraStorageTotal + deliveryCostTotal;
}
// final discounted total
function discountedTotal() {
    const matchCode = document.getElementById('pomo-input');
    if (matchCode.value == 'stevekaku') {
        const TotalPriceText = document.getElementById('total-price');
        const TotalPrice = parseFloat(TotalPriceText.innerText)
        const discount = TotalPrice / 5;
        const discountedTotal = TotalPrice - discount;
        document.getElementById('final-total').innerText = discountedTotal;
        matchCode.value = '';
    }
}
// getting 8gb memory button event-handler
document.getElementById('button-8gb').addEventListener('click', function () {
    updatePrice('extra-memory', 0)
})
// getting 16gb memory button event-handler
document.getElementById('button-16gb').addEventListener('click', function () {
    updatePrice('extra-memory', 180)
})
// getting 256gb storage button event-handler
document.getElementById('button-256gb').addEventListener('click', function () {
    updatePrice('extra-storage', 0)
})
// getting 512gb storage button event-handler
document.getElementById('button-512gb').addEventListener('click', function () {
    updatePrice('extra-storage', 100)
})
// getting 1TB storage button event-handler
document.getElementById('button-1tb').addEventListener('click', function () {
    updatePrice('extra-storage', 180)
})
// getting aug21 button event-handler
document.getElementById('button-aug25').addEventListener('click', function () {
    updatePrice('delivery-cost', 0)
})
// getting aug21 button event-handler
document.getElementById('button-aug21').addEventListener('click', function () {
    updatePrice('delivery-cost', 20)
})
// apply button event-handler
document.getElementById('apply-button').addEventListener('click', function () {
    discountedTotal()
})