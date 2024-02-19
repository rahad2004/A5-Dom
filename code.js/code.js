let seat = 40;
let booking = 0
const buttons = document.querySelectorAll('.button')
for (let button of buttons)

    button.addEventListener("click", function (event) {
        let already_in_cart = false
        let limitup = false
        const details = document.getElementById("details")
        let all_td = details.querySelectorAll('td');
        if (all_td.length >= 12) {
            limitup = true;
        }
        for (let td of all_td) {
            if (td.innerText == event.target.innerText) {
                already_in_cart = true;
            }
        }
        if (already_in_cart) {
            alert("Already in cart");
        } else if (limitup) {
            alert("Limit is up")
        }
        else {
            event.target.style.backgroundColor = "#1DD100"
            seat = seat - 1;
            document.getElementById('a-seat').innerText = seat;
            booking = booking + 1
            document.getElementById('booking-seat').innerText = booking;
            // detail add 
            const info = event.target.innerText;
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
        }


        // total couent

        const totalPrice = booking * 550;
        document.getElementById('Total').innerText = totalPrice;

        const grandTotal = document.getElementById('G-Total')
        grandTotal.innerText = totalPrice;





    })

const inputfieldCheck = document.getElementById('coupon');
inputfieldCheck.addEventListener('keyup', function (event) {
    const value = event.target.value;

    if (value.length > 0) {
        const activeButton = document.getElementById('apply-btn');
        activeButton.removeAttribute('disabled')
    }

})


const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    const couponcode = document.getElementById('coupon').value;
    const woDiscount = document.getElementById('Total');
    const grandTotal = document.getElementById('G-Total');
    const couponBox = document.getElementById('coupon-box');
    const pushDiscount = document.getElementById('disound-add-box')

    if (booking >= 4) {
        if (couponcode === 'NEW15') {

            const discount = (woDiscount.innerText * 0.15);
            grandTotal.innerText = (parseInt(woDiscount.innerText) - discount);
            couponBox.classList.add('hidden')
            const tr = document.createElement('tr');
            const td = document.createElement('th')
            const td1 = document.createElement('th')
            const td2 = document.createElement('th')
            td.innerText="Discount";
            td1.innerText="";
            td2.innerText="BDT "+ discount;
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            pushDiscount.appendChild(tr)
        }
        else if (couponcode === 'Couple 20') {
            const discount = (woDiscount.innerText * 0.20);
            grandTotal.innerText = (parseInt(woDiscount.innerText) - discount);

            couponBox.classList.add('hidden')
            const tr = document.createElement('tr');
            const td = document.createElement('th')
            const td1 = document.createElement('th')
            const td2 = document.createElement('th')
            td.innerText="Discount";
            td1.innerText="";
            td2.innerText="BDT "+ discount;
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            pushDiscount.appendChild(tr)
        }
        else {
            alert('invaild coupon')
        }



    }
    else {
        alert("please buy 4 ticket")
    }


})