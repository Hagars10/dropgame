/**
 * The Item class is a blueprint for each game element we generate
 * @author  John Doe
 * @version 1.0, Nov 2015
 *
 * @param cl    string - which class to use to style it
 * @param xpos  int - horizontal starting position
 * @param ypos  int - vertical starting position
 */
function Item(cl, xpos, ypos, w, h){
	//properties to let each item store its own x/y position
	this.x = xpos; 
	this.y = ypos;
	//its widht and height
	this.width = w;
	this.height = h;
	//property that keeps track of the item's visual
	this.item_on_page;
	/**
	 * The create method puts a visual of the item on the screen
	 */ 
	 this.create = function(){
		 this.item_on_page = document.createElement("div");
		 this.item_on_page.className = cl;
		 //use this object's x & y var's to position it in CSS
		 this.item_on_page.style.left = this.x + "px";
		 this.item_on_page.style.top = this.y + "px";
		 //put the div on the page as a child of the body
		 document.body.appendChild(this.item_on_page);
	 }//end function create()
	 /**
	 * The destroy method removes the item from the game
	 */ 
	 this.destroy = function(){
		 //begin "if it's a raindrop, add a splash & remove it from the array"
         //assign an animating GIF where the drop is
		 if(this.item_on_page.className == "raindrop"){
         var newsplash = document.createElement("img");
         newsplash.src = "img/splash.gif?"+Math.random();
         newsplash.style.position = "absolute";
         newsplash.style.left = this.x + "px";
         newsplash.style.top = this.y + "px";
         document.body.appendChild(newsplash);
         //figure out this drop's index number
         var index_num = drop_array.indexOf(this);
         //to remove an item from array: splice(index,howMany);
         drop_array.splice(index_num,1);
		 //remove div as a child of the body
	 }//end "if it's a raindrop, add a splash & remove it from the array"
		 document.body.removeChild(this.item_on_page);
}//end function destroy()

}//end the Item class