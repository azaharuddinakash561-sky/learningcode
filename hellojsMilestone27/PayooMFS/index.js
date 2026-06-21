document.getElementById("button-loging").addEventListener("click", function (event) {
     event.preventDefault();
     // console.log("login button clicked")

     const phoneNumber = document.getElementById("phone_number").value;

     const pin_number = document.getElementById('pinNumber').value;
     console.log(phoneNumber)
     console.log(pin_number)

     if (phoneNumber === "5" && pin_number === "1234") {
          console.log("you are loging ")
          window.location.href = '/home.html';
     } else {
          alert("wrong phone number of pin")

     }
})
