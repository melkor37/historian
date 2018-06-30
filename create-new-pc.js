var almighty = "Melkor";  // I am mighty
var obj; 
var username = '';
var msg;


on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!spawn --pc") !== -1){
    // Used for debugging
	// sendChat(almighty, "Script Running");
    
    
    //var username = getMyCharacter();
    
    var PlayerID = msg.playerid;
    var DisplayID = getObj('player', msg.playerid);
    // DisplayID is attribute list; PlayerID is unique ID
    // PCname is displayname
    
    var PCname = DisplayID.get('displayname')
    log(PCname);
	
	
	var NewPC = findObjs({
		type: 'character',
		name: PCname
	})[0];
 
    //Checks for PC--creates if doesn't exist
		if(!NewPC) {
        	sendChat(almighty, "/w "+ PCname + " " + PCname + " doesn't exist yet.. Creating..")
			NewPC = createObj('character', {
				name: PCname,
				inplayerjournals: 'all',
				controlledby: msg.playerid
			});
		
		}
		else{
			sendChat(almighty, "/w "+ PCname + " " + PCname + " exists!")
		};
			
			
			
			
			
	}
}   
);   

