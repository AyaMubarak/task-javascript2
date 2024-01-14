var submit = document.querySelector(".registerForm");
submit.onsubmit= function amount(e) {
    e.preventDefault();
    var amount = 0;
    var dollar = "dollar";
    var dinar = "dinar";
    var number = document.querySelector(".amount").value;
    var select = document.querySelector(".exchange").value;
    var result = document.querySelector(".result");

    if (select === dollar) {
        amount = number * 3.73;
    } else if (select === dinar) {
        amount = number * 5.26;
    } else {
        amount = number;
    }

    result.textContent = amount + " nis";
}