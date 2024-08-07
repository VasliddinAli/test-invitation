var Cal = function (divId) {
  // Store div id
  this.divId = divId;

  this.DaysOfWeek = ["Dush", "Sesh", "Chor", "Pay", "Juma", "Shan", "Yak"];

  this.Months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  this.d = currentDate || new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();
};

Cal.prototype.nextMonth = function () {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  } else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

Cal.prototype.previousMonth = function () {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  } else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

Cal.prototype.showcurr = function () {
  this.showMonth(this.currYear, this.currMonth);
};

Cal.prototype.showMonth = function (y, m) {
  var firstDayOfMonth = new Date(y, m, 1).getDay();
  firstDayOfMonth = (firstDayOfMonth + 6) % 7; // Adjust for Monday start
  var lastDateOfMonth = new Date(y, m + 1, 0).getDate();
  var lastDayOfLastMonth =
    m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  var html = "<table>";

  html += "<thead><tr>";
  html += '<td colspan="7">' + this.Months[m] + " " + y + "</td>";
  html += "</tr></thead>";

  html += '<tr class="days">';
  for (var i = 0; i < this.DaysOfWeek.length; i++) {
    html += "<td>" + this.DaysOfWeek[i] + "</td>";
  }
  html += "</tr>";

  var i = 1;
  do {
    var dow = new Date(y, m, i).getDay();
    dow = (dow + 6) % 7; // Adjust for Monday start

    if (dow == 0) {
      html += "<tr>";
    } else if (i == 1) {
      html += "<tr>";
      var k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (var j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    var chk = new Date(this.currYear, this.currMonth, this.currDay);
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + "</td>";
    } else {
      html += '<td class="normal">' + i + "</td>";
    }
    if (dow == 6) {
      html += "</tr>";
    } else if (i == lastDateOfMonth) {
      var k = 1;
      for (dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + "</td>";
        k++;
      }
    }

    i++;
  } while (i <= lastDateOfMonth);

  html += "</table>";

  document.getElementById(this.divId).innerHTML = html;
};

window.onload = function () {
  var c = new Cal("divCal");
  c.showcurr();

//   getId("btnNext").onclick = function () {
//     c.nextMonth();
//   };
//   getId("btnPrev").onclick = function () {
//     c.previousMonth();
//   };
};

function getId(id) {
  return document.getElementById(id);
}
