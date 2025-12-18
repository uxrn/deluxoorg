function validAddress() {
    let x1 = document.forms["addForm"]["ethAdd"].value;

    if (localStorage.getItem("addAlready") != null) {
      document.getElementById("addStatus").style.color = "firebrick";
      document.getElementById("addStatus").innerHTML = "Only one address may be entered.";
      return false;
    }

    if (x1 == "") {
      document.getElementById("addStatus").style.color = "firebrick";
      document.getElementById("addStatus").innerHTML = "No address entered.";
      return false;
    }

    if (x1.length != 42) {
      document.getElementById("addStatus").style.color = "firebrick";
      document.getElementById("addStatus").innerHTML = "Address entered is not 42 characters.";
      return false;
    }

    if (x1.slice(0,2) != "0x") {
      document.getElementById("addStatus").style.color = "firebrick";
      document.getElementById("addStatus").innerHTML = "Address entered does not begin with 0x.";
      return false;
    }

    else {
      localStorage.setItem('addAlready', "yes");
      document.getElementById("addStatus").style.color = "gold";
      document.getElementById("addStatus").innerHTML = "Loading... do not close window.";
      return true;
    }
}

if (localStorage.getItem("addAlready") == "yes") {
    document.getElementById("addStatus").style.color = "forestgreen";
    document.getElementById("addStatus").innerHTML = "Successfully added to the list.";
  }

if (window.history.replaceState) {
    window.history.replaceState (null, null, window.location.href);
}