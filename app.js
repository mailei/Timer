var count = 0;
var timerId = null;
// play();
initializeDisplay();

$("#timerField")
  .click(function () {
    if (timerId) {
      console.log(timerId)
      stop(count);
    } else {
      play(count);
    }
  })
  .dblclick(function () {
    stop();
    count = 0;
    initializeDisplay();
  });


function play() {
  timerId = setInterval(function () {
    textDisplay(moment().hour(0).minute(0).second(count++).format('mm:ss'));
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

//残り秒数を表示させる関数   
function textDisplay(mmss) {
  $("#countDownTime").text(mmss);
};

function initializeDisplay() {
  $("#countDownTime").text('00:00');
}