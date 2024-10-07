window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Aug 8, 2024 16:00:00", 'countup1'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);

    if (days == 1) {  // vypisovani dnu
        idEl.getElementsByClassName('days')[0].innerHTML = days + "den";
    } else if (days > 1 && days < 5) {
        idEl.getElementsByClassName('days')[0].innerHTML = days + "dny";
    } else {
        idEl.getElementsByClassName('days')[0].innerHTML = days + "dnů";
    }

    if (hours == 1) {  // vypisovani hodin
        idEl.getElementsByClassName('hours')[0].innerHTML = hours + "hodinu";
    } else if (hours > 1 && hours < 5) {
        idEl.getElementsByClassName('hours')[0].innerHTML = hours + "hodiny";
    } else {
        idEl.getElementsByClassName('hours')[0].innerHTML = hours + "hodin";
    }

    if (mins == 1) {  // vypisovani minut
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins + "minutu";
    } else if (mins > 1 && mins < 5) {
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins + "minuty";
    } else {
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins + "minut";
    }

    if (secs == 1) {  // vypisovani sekund
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs + "sekundu";
    } else if (secs > 1 && secs < 5) {
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs + "sekundy";
    } else {
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs + "sekund";
    }

  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }