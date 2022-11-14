// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  //Code Block for Click and store and display
  $("#hour-9 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver9", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-9 button").prev().val(localStorage.getItem("daySaver9"));
  $("#hour-10 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver10", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-10 button").prev().val(localStorage.getItem("daySaver10"));
  $("#hour-11 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver11", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-11 button").prev().val(localStorage.getItem("daySaver11"));
  $("#hour-12 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver12", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-12 button").prev().val(localStorage.getItem("daySaver12"));
  $("#hour-13 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver13", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-13 button").prev().val(localStorage.getItem("daySaver13"));
  $("#hour-14 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver14", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-14 button").prev().val(localStorage.getItem("daySaver14"));
  $("#hour-15 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver15", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-15 button").prev().val(localStorage.getItem("daySaver15"));
  $("#hour-16 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver16", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-16 button").prev().val(localStorage.getItem("daySaver16"));
  $("#hour-17 button").on("click", function () {
    let value = $(this).prev().val();
    localStorage.setItem("daySaver17", [
      value,
      " Created " + dayjs().format("ddd, M/D/YY, h:mm"),
    ]);
    console.log(value, " Created " + dayjs().format("ddd, M/D/YY, h:mm"));
  });

  $("#hour-17 button").prev().val(localStorage.getItem("daySaver17"));
  //Code Block for Color Change
  if (dayjs().format("H") < 9) {
    $("#hour-9").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 9) {
    $("#hour-9").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 9) {
    $("#hour-9").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 10) {
    $("#hour-10").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 10) {
    $("#hour-10").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 10) {
    $("#hour-10").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 11) {
    $("#hour-11").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 11) {
    $("#hour-11").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 11) {
    $("#hour-11").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 12) {
    $("#hour-12").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 12) {
    $("#hour-12").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 12) {
    $("#hour-12").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 13) {
    $("#hour-13").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 13) {
    $("#hour-13").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 13) {
    $("#hour-13").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 14) {
    $("#hour-14").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 14) {
    $("#hour-14").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 14) {
    $("#hour-14").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 15) {
    $("#hour-15").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 15) {
    $("#hour-15").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 15) {
    $("#hour-15").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 16) {
    $("#hour-16").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 16) {
    $("#hour-16").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 16) {
    $("#hour-16").removeClass("present").addClass("past");
  }
  if (dayjs().format("H") < 17) {
    $("#hour-17").removeClass("past").addClass("future");
  } else if (dayjs().format("H") == 17) {
    $("#hour-17").removeClass("future").addClass("present");
  } else if (dayjs().format("H") > 17) {
    $("#hour-17").removeClass("present").addClass("past");
  }
  // Code Block for Time Display
  function currentTime() {
    var rightnow = dayjs();
    $("#currentDay").text(rightnow.format("dddd, MMMM D YYYY, h:mm:ss a"));
  }

  setInterval(currentTime, 1000);
});
