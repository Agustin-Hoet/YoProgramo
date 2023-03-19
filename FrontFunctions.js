// HABILIDADES
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.95,
    fill: {gradient: ['#a445b2', '#fa4299']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".01 .bar").circleProgress({
    value: 0.90
});
$(".02 .bar").circleProgress({
    value: 0.90
});
$(".03 .bar").circleProgress({
    value: 0.85
});
$(".04 .bar").circleProgress({
    value: 0.80
});
$(".05 .bar").circleProgress({
    value: 0.90
});
// FIN HABILIDADES