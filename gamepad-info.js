const renderArea = document.querySelector('main');
let gamepad = null;

setInterval(() => {
  if (navigator.getGamepads()[0]) {
    gamepad = navigator.getGamepads()[0];
  }
}, 10);



const gamepadInfo = {
  id: '',
  connected: false,
  index: null,
  buttons: [],
  axes: []
};

const gamepadHTMLTable = {
  id: document.querySelector('td#id')
};



const updateGamepadInfo = () => {
  if (gamepad) {
    gamepadInfo.id = gamepad.id;
    gamepadInfo.connected = gamepad.connected;
    gamepadInfo.index = gamepad.index;
    gamepadInfo.buttons = gamepad.buttons;
    gamepadInfo.axes = gamepad.axes;
  }
};

const updateGamepadHTMLTable = () => {
  if (gamepad) {
    gamepadHTMLTable.id.innerHTML = gamepadInfo.id;
  }
};

const mainLoop = () => {
  updateGamepadInfo();
  updateGamepadHTMLTable();
};

setInterval(mainLoop, 1000);
