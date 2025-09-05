let boy_name = document.querySelector(".boy_name"); // Abdulloh
let girl_name = document.querySelector(".girl_name"); // Malikaxon
let boy_name_start_letter = document.querySelector(".main-page-boy"); // A
let girl_name_start_letter = document.querySelector(".main-page-girl"); // B
let address_invitation = document.querySelector(".address_invitation"); // 12-oktyabr, 2024 Farg'ona, Quva tumani
let contact_address = document.querySelector(".contact_address"); // Farg'ona viloyati, Quva tumani, Muhammadjon ota to'yxonasi.
let contact_moljal = document.querySelector(".contact_moljal"); // 24-maktab yonida
let contact_phone = document.querySelector(".contact_phone"); // +998944446050
let naxor_date = document.querySelector(".naxor_date"); // 06:00
let bazm_date = document.querySelector(".bazm_date"); // 14:00
let wedding_start_date = document.querySelector(".wedding_start_date"); // 2025-yil 12-oktyabr
let map_iframe = document.querySelector(".map_iframe"); // <iframe>......

const start_date = "2025-10-12";

var d = new Date(new Date(start_date).getTime());
simplyCountdown(".simply-countdown-one", {
  year: d.getFullYear(),
  month: d.getMonth() + 1,
  day: d.getDate(),
});

var currentDate;
let date = new Date(start_date);

function SetDate(date) {
  currentDate = date;
}
var c = new Cal("divCal");
c.showcurr();

boy_name.innerHTML = "Husanboy";
girl_name.innerHTML = "Hilolaxon";
boy_name_start_letter.innerHTML = "H";
girl_name_start_letter.innerHTML = "H";
address_invitation.innerHTML = "12-oktyabr, 2025 Farg'ona, Quva tumani";
contact_address.innerHTML =
  "Farg'ona viloyati, Quva tumani, Shodlik to'yxonasi.";
contact_moljal.innerHTML = "Qorashox shaxarchasi, 7-maktab yonida";
contact_phone.innerHTML = "+99850 6666 456";
contact_phone.setAttribute("href", "tel:+99850 6666 456");
naxor_date.innerHTML = "09:00";
bazm_date.innerHTML = "14:00";
wedding_start_date.innerHTML = "2025-yil 12-oktyabr";

map_iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379.0249711813067!2d72.01639050445164!3d40.53717542778157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1757048800517!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
