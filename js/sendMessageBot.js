document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector(".formName").value;
  let phone = document.querySelector(".formPhone").value;
  let boy_name = document.querySelector(".boy_name").outerText;
  let girl_name = document.querySelector(".girl_name").outerText;
  let btn = document.querySelector(".formButton");
  btn.disabled = true;
  name.oninvalid = function (event) {
    event.target.setCustomValidity("Isminggizni kiriting.");
  };
  const botToken = "8259542240:AAHMgu2v3Tgz5UKVfhWpEzW_11CrAVjb-Lk";
  const chatIds = ["7069036789"];
  if (name && phone) {
    const message = `${boy_name} ❤️ ${girl_name}\n\nIsmi: ${name}\nTelefon: ${phone}`;
    chatIds.forEach((chatId) => {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const data = {
        chat_id: chatId,
        text: message,
      };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            alert("Ҳабаринггиз юборилди!");
          } else {
            alert("Хатолик.");
          }
        })
        .catch((error) => console.error("Error:", error));
    });
  }
});
