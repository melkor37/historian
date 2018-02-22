//Defines me as the almighty
var almighty = "melkor"

/*Initially checks to see if the character Golarian.Dates exists
  if not, creates.  SHOULD create the attributes I need on the character,
  but I need the character.id to do so..

  I took the creation code out before I gave up last night, but it should
  look like this:
  
  1 function(obj) {
  2          createObj("attribute", {
  3              name: "gmonth",
  4              current: 0,
  5              characterid: obj.id
  6             });
  7         }
  
  
 */ 
createDate = function(dd,mm,yy){
    //function to find Golarian.Dates
	golarianDate = findObjs({
        type: 'character',
        name: 'Golarian.Dates'
    })[0];
    
    //if fail, create..
	if (!golarianDate){
        GolarianDate = createObj('character', {
            name: 'Golarian.Dates'
		    });
        };
    //This is where I want to create the attributes
	
	//should automatically be true
	if(golarianDate){
        sendChat("God Almighty","Success!")
        //Ideally, attribute creation should go here..
    };
};

//Lets me know in chat log that APIs are finished loading
on("ready", function(dd,mm,yy) {
    sendChat(almighty,"<b>Loaded.<b>");
    createDate();
    sendChat(almighty,"Ran check")
});    

//Listens for '!gd' in chat, runs createDate
on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!gd") !== -1){
        createDate();
        sendChat(almighty,"Ran check");
        }
    });



/*on("chat:message", function(obj) {
    if(msg.type == "api" && msg.content.indexOf("!gd") !== -1){
    createObj("attribute", {
        name: "gmonth",
        current: 0,
        characterid: obj.id
    });
});
*/
    
    
