function getPassword() {
    const pinCode = Math.round(Math.random() * 1000000);
    const pinTost = pinCode + "";
    if (pinTost.length === 6) {
        return pinCode;
    } else{
        return getpin();

    }

}

document.getElementById("generate-password").addEventListener("click", function () {
    const pin = getPassword();
    document.getElementById("password").value = pin;
});

