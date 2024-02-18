let seat = 40;
let booking = 0
const buttons = document.querySelectorAll('.button')
for (let button of buttons)

    button.addEventListener("click", function (event) {
        event.target.style.backgroundColor = "#1DD100"
        seat = seat - 1;
        document.getElementById('a-seat').innerText = seat;
        booking = booking + 1
        document.getElementById('booking-seat').innerText = booking;
        // detail add 
        const info = event.target.innerText;
        const details = document.getElementById("details")
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        const td1 = document.createElement('td')
        const td2 = document.createElement("td")
        td.innerText = info
        td1.innerText = "Economoy"
        td2.innerText = 550
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        details.appendChild(tr);


        // total couent

        const totalPrice = booking * 550;
        document.getElementById('Total').innerText = totalPrice;





    })
