function addComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayLocalStorageWithCommas() {
    document.getElementById('transfers_count').textContent = addComma(localStorage.getItem("tr_co"));
    document.getElementById('holders_count').textContent = addComma(localStorage.getItem("ho_co"));
    document.getElementById('circulating_supply').textContent = addComma(localStorage.getItem("ci_su"));
    document.getElementById('transfered_amount').textContent = addComma(localStorage.getItem("tr_am"));
}