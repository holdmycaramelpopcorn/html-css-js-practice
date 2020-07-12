var fgImage = null;
var bgImage = null
function loadForegroundImage()
{
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("fgfile");
  fgImage = new SimpleImage(fileinput);
  fgImage.drawTo(imgcanvas);
}
function loadBackgroundImage()
{
  var imgcanvas=document.getElementById("can1");
  var fileinput=document.getElementById("bgfile");
  bgImage = new SimpleImage(fileinput);
  bgImage.drawTo(imgcanvas);
}
function greenScreen()
{
  if(fgImage==null||!fgImage.complete())
    alert("Foreground not loaded");
  if(bgImage==null||!bgImage.complete())
    alert("Background not loaded");
  var op = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
for(var pix of fgImage.values())
{
    var x = pix.getX();
    var y = pix.getY();
    if(pix.getGreen()>(pix.getRed()+pix.getBlue()))
    {
        var pix1 = bgImage.getPixel(x,y);
        op.setPixel(x,y,pix1);
    }
    else
    {
        op.setPixel(x,y,fgImage.getPixel(x,y));
    }
}
  var imgcanvas=document.getElementById("can2");
  op.drawTo(imgcanvas);
}