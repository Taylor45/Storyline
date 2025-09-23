function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oeLFMIC5b4":
        Script1();
        break;
      case "5udLkmpEf8m":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6FmmXRouumQ');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6mIWJYJOuI9';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6JbX7Gx0ao8');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6gEThkUeEyU';
const growAmount = 1.2;
player.addForTriggers(
id,
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', duration, easing }
)
);
}

};
