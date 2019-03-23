var radar = Snap("#radar");
var radarMask = Snap("#mask");
var radarMask2 = Snap("#mask2");
var radarLines = Snap("#lines");
var radarDots = Snap("#dots");

var p = radar.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#FFC575",
        strokeWidth: 5
    });
// To create pattern,
// just specify dimensions in pattern method:
p = p.pattern(0, 0, 10, 10);
// Then use it as a fill on big circle
radarMask2.attr({
    fill: p
});

radarMask.attr({
    mask: radarMask2
});

radarMask.attr({fill: "r(0.5, 0.65, 0.6)#FFC575-#fff"});

var radarGroup = radar.group(radarMask, radarLines, radarDots);

var scale = 0;

var box = radar.getBBox();
var c = {x:box.cx + 9, y: box.cy}

function animate(){
  radarGroup.transform('s0,'+c.x+','+c.y)
  radarGroup.animate({ transform: 's1,'+c.x+','+c.y }, 1000, mina.bounce);
}

animate();

radar.click(animate);
