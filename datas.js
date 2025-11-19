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

const start_date = "2025-11-28";

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

boy_name.innerHTML = "Muslimbek";
girl_name.innerHTML = "Azizaxon";
boy_name_start_letter.innerHTML = "M";
girl_name_start_letter.innerHTML = "A";
address_invitation.innerHTML = "28-noyabr, 2025-yil. Shaxrisabz shaxri";
contact_address.innerHTML =
  "Shaxrisabz shaxri, Shukrona to'yxonasi.";
contact_moljal.innerHTML = "Shukrona to'yxonasi";
contact_phone.innerHTML = "+998946 1111 00";
contact_phone.setAttribute("href", "tel:+998946 1111 00");
naxor_date.innerHTML = "15:00";
bazm_date.innerHTML = "15:00";
wedding_start_date.innerHTML = "2025-yil 28-noyabr";

map_iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.6811375824827!2d66.8310369696303!3d39.06315413953398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9bb3fca5cfc3%3A0x5d8be061134b6c8f!2sSHUKRONA!5e1!3m2!1sen!2s!4v1763557128686!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
