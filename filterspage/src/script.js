var image;
function clearCanvas() {
  var canvas = document.getElementById('can');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function upload()
{
  clearCanvas();
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function makeGray()
{
  clearCanvas();
  var copyim = new SimpleImage(image);
  for(var pixel of copyim.values())
    {
      var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  var imgcanvas=document.getElementById("can");
  copyim.drawTo(imgcanvas);
}
function makeRed()
{
  clearCanvas();
  var copyim = new SimpleImage(image);
  for(var pixel of copyim.values())
    {
      pixel.setRed(255);
    }
  var imgcanvas=document.getElementById("can");
  copyim.drawTo(imgcanvas);
}
function restore()
{
  clearCanvas();
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}
function makeFrench()
{
  clearCanvas();
var im = new SimpleImage(image);
var wid=im.getWidth();
for(var pix of im.values())
{
    if((pix.getX())<(wid/3))
    {
        pix.setBlue(255);
    }
    else if((pix.getX())>(wid/3)&&(pix.getX())<((2*wid)/3))
    {
      var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
        pix.setGreen(3*avg);
      pix.setRed(3*avg);
      pix.setBlue(3*avg);
    }
    else
    {
        pix.setRed(255);
    }
}
  var imgcanvas=document.getElementById("can");
  im.drawTo(imgcanvas);
}
function makeRainbow()
{
  clearCanvas();
var im = new SimpleImage(image);
var ht=im.getHeight();
for(var pix of im.values())
{
  var yval = pix.getY();
  var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    if(yval<(ht/7))
    {
      if(avg<128)
        {
          pix.setRed(2*avg);
          pix.setGreen(0);
          pix.setBlue(0);
        }
      else
        {
          pix.setRed(255);
          pix.setGreen(2*avg-255);
          pix.setBlue(2*avg-255);
        }
    }
    else if(yval>((1*ht)/7)&&yval<((2*ht)/7))
    {
      if(avg<128)
        {
          pix.setRed(2*avg);
          pix.setGreen(0.8*avg);
          pix.setBlue(0);
        }
      else
        {
          pix.setRed(255);
          pix.setGreen(1.2*avg-51);
          pix.setBlue(2*avg-255);
        }
    }
  else if(yval>((2*ht)/7)&&yval<((3*ht)/7))
    {
      if(avg<128)
        {
          pix.setRed(2*avg);
          pix.setGreen(2*avg);
          pix.setBlue(0);
        }
      else
        {
          pix.setRed(255);
          pix.setGreen(255);
          pix.setBlue(2*avg-255);
        }
    }
  else if(yval>((3*ht)/7)&&yval<((4*ht)/7))
    {
      if(avg<128)
        {
          pix.setRed(0);
          pix.setGreen(2*avg);
          pix.setBlue(0);
        }
      else
        {
          pix.setRed(2*avg-255);
          pix.setGreen(255);
          pix.setBlue(2*avg-255);
        }
    }
  else if(yval>((4*ht)/7)&&yval<((5*ht)/7))
    {
      if(avg<128)
        {
          pix.setRed(0);
          pix.setGreen(0);
          pix.setBlue(2*avg);
        }
      else
        {
          pix.setRed(2*avg-255);
          pix.setGreen(2*avg-255);
          pix.setBlue(255);
        }
    }
  else if(yval>((5*ht)/7)&&yval<((6*ht)/7))
    {
      if(avg<128)
        {
          pix.setRed(0.8*avg);
          pix.setGreen(0);
          pix.setBlue(2*avg);
        }
      else
        {
          pix.setRed(1.2*avg-51);
          pix.setGreen(2*avg-255);
          pix.setBlue(255);
        }
    }
    else
    {
      if(avg<128)
        {
          pix.setRed(1.6*avg);
          pix.setGreen(0);
          pix.setBlue(1.6*avg);
        }
      else
        {
          pix.setRed(0.4*avg+153);
          pix.setGreen(2*avg-255);
          pix.setBlue(0.4*avg+153);
        }
    }
}
  var imgcanvas=document.getElementById("can");
  im.drawTo(imgcanvas);
}