
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_y = 0;  
ball_x = 0;
hole_y = 400;
hole_y = 800;
   


function load_img()
{
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h1.png", function(Img) 

	
	{
       hole_obj = Img;

        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y, 
            left:hole_x    
	});
	canvas.add(hole_obj);
    });
new_image();
}


function new_image()
{// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img)

	
	{
        ball_obj = Img;
		ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y, 
            left:ball_x    
	});
	canvas.add(ball_obj);
    });	
}

 if((ball_x==hole_y)&& (ball_y==hole_y)){
	 canvas.remove(ball_obj)
	 
 }

 document.getElemendById("hd3").innerHtml= "you have Hit the Goal !!!!";
 document.getElemendById('myCanvas').style.borderColor="red";

 function down()
 {
	 if(ball_y <=450)
	 {
		 ball_y = ball_y + block_image_height;
		 console.log("block image height = " +  block_image_height);
		 console.log("when down arrow key is pressed, x= "+ball_y);
		 canvas.remove(ball_obj);
		 new_image();

	 }
 }


 function up()
 {
	 if(ball_y>=0)
	 {
		 ball_y = ball_y + block_image_height;
		 console.log("block image height = " +  block_image_height);
		 console.log("when up arrow key is pressed, x= "+ball_y);
		 canvas.remove(ball_obj);

	 }
 }

 function left()
 {
	 if(ball_x  >0)
	 {
		 ball_x = ball_x + block_image_width;
		 console.log("block image height = " +  block_image_height);
		 console.log("when left arrow key is pressed, x= "+ball_y);
		 canvas.remove(player_object);
		 canvas.remove(ball_obj);
	 }
 }



 function right()
 {
	 if(ball_x  <=850)
	 {
		 ball_x = ball_x + block_image_width;
		 console.log("block image height = " +  block_image_height);
		 console.log("when right arrow key is pressed, x= "+ball_y);
		
		 canvas.remove(ball_obj);
	 }
 }
