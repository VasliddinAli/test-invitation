let boy_name = document.querySelector(".boy_name"); // Abdulloh
let girl_name = document.querySelector(".girl_name"); // Malikaxon
let boy_name_start_letter = document.querySelector(".main-page-boy"); // A
let girl_name_start_letter = document.querySelector(".main-page-girl"); // B
let address_invitation = document.querySelector(".address_invitation"); // 18-avgust, 2024 Farg'ona, Quva tumani
let contact_address = document.querySelector(".contact_address"); // Farg'ona viloyati, Quva tumani, Muhammadjon ota to'yxonasi.
let contact_moljal = document.querySelector(".contact_moljal"); // 24-maktab yonida
let contact_phone = document.querySelector(".contact_phone"); // +998944446050
let naxor_date = document.querySelector(".naxor_date"); // 06:00
let bazm_date = document.querySelector(".bazm_date"); // 14:00
let wedding_start_date = document.querySelector(".wedding_start_date"); // 2024-yil 18-avgust
let map_iframe = document.querySelector(".map_iframe"); // <iframe>......

const start_date = "2024-08-18";

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

boy_name.innerHTML = "Bahodir";
girl_name.innerHTML = "Malikaxon";
boy_name_start_letter.innerHTML = "B";
girl_name_start_letter.innerHTML = "M";
address_invitation.innerHTML = "18-avgust, 2024 Farg'ona, Quva tumani";
contact_address.innerHTML =
  "Farg'ona viloyati, Quva tumani, Muhammadjon ota to'yxonasi.";
contact_moljal.innerHTML = "24-maktab yonida";
contact_phone.innerHTML = "+998944446050";
contact_phone.setAttribute("href", "tel:+998944446050");
naxor_date.innerHTML = "06:00";
bazm_date.innerHTML = "14:00";
wedding_start_date.innerHTML = "2024-yil 18-avgust";


console.log(boy_name.outerText);

map_iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.3052331558433!2d72.05217777583462!3d40.55725097141735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc87b01458e155%3A0xb5707269aba420b2!2s24-umumiy%20o%CA%BBrta%20ta%CA%BClim%20maktabi!5e1!3m2!1sen!2s!4v1722152216566!5m2!1sen!2s" style="border:0; width: 100%; height: 450px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;