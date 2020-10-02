document.addEventListener('input', function (event) {
    // Table item 1
    var img1 = document.querySelector('.img1');
    var price1 = document.querySelector('p.price1');
    var item1 = document.querySelector('p.item1');
    if (event.target.id !== 'tbl1') {
        return;
    }
    if (event.target.value === 'tbl1-item2') {
        img1.src = "assets/img/b2.png";
        price1.innerText = "$79.95/Bottle";
        item1.innerText = "45 servings";
    } else {
        img1.src = "assets/img/b1.png";
        price1.innerText = "$34.95/Bottle"
        item1.innerText = "15 servings"
    }

}, false);

document.addEventListener('input', function (event) {

    // Table item 2
    var img2 = document.querySelector('.img2');
    var price2 = document.querySelector('p.price2');
    var item2 = document.querySelector('p.item2');
    var savings2 = document.querySelector('p.savings2');
    if (event.target.id !== 'tbl2') {
        return;
    }
    if (event.target.value === 'tbl2-item2') {
        img2.src = "assets/img/b4.png";
        price2.innerText = "$59.97/BOTTLE";
        item2.innerText = "90 servings";
        savings2.innerText = "YOU SAVE $39.97"
    } else {
        img2.src = "assets/img/b3.png";
        price2.innerText = "$26.22/BOTTLE"
        item2.innerText = "30 servings"
        savings2.innerText = "YOU SAVE $17.48"
    }

}, false);

document.addEventListener('input', function (event) {
    // Table item 3
    var img3 = document.querySelector('.img3');
    var price3 = document.querySelector('p.price3');
    var item3 = document.querySelector('p.item3');
    var savings3 = document.querySelector('p.savings3');
    if (event.target.id !== 'tbl3') {
        return;
    }
    if (event.target.value === 'tbl3-item2') {
        img3.src = "assets/img/b6.png";
        price3.innerText = "$55.97/BOTTLE";
        item3.innerText = "135 servings";
        savings3.innerText = "YOU SAVE $71.95"
    } else {
        img3.src = "assets/img/b5.png";
        price3.innerText = "$24.47/BOTTLE"
        item3.innerText = "45 servings"
        savings3.innerText = "YOU SAVE $31.46"
    }

}, false);