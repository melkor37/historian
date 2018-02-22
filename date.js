//Defines me as the almighty
var almighty = "melkor"
    gddaytext = ['Sunday','Moonday','Toilday','Wealday','Oathsday','Fireday','Starday']
    gdmonthtext = ['Abadius','Calistril','Pharast','Gozran','Desnus','Sarenith','Erastus','Arodus','Rova','Lamashan','Neth','Kuthona']
    gdday = 0
    gdmonth = 0
    gddate = 0
    gdCurdate = findObjs({
        type: 'character',
        name: 'Golarian.Dates'
    })[0];

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
createDate= function(golarianDate) {
    // SNARF: Create variable
    var golarianDate;
 
    //function to find Golarian.Dates
    golarianDate = findObjs({
        type: 'character',
        name: 'Golarian.Dates'
    })[0];
 
    //if fail, create..
    if(!golarianDate) {
        // SNARF: Create and set the 'golarianDate' variable right away if it can't be found
        golarianDate = createObj('character', {
            name: 'Golarian.Dates'
        });
    }
    //This is where I want to create the attributes
    // SNARF: I expect you to have full access to 'golarianDate' variable here...
 
    //should automatically be true
    if(golarianDate) {
        sendChat("God Almighty", "Success!")
        //Ideally, attribute creation should go here..
        createObj("attribute", {
            name: "gmonth",
            current: 0,
            characterid: golarianDate.id
            });
        createObj("attribute", {
            name: "gmonthtext",
            current: 'Abadius',
            characterid: golarianDate.id
            });
        createObj("attribute", {
            name: "gday",
            current: 0,
            characterid: golarianDate.id
            });
        createObj("attribute", {
            name: "gdaytext",
            current: "Moonday",
            characterid: golarianDate.id
            });
        createObj("attribute", {
            name: "gdate",
            current: 1,
            characterid: golarianDate.id
            });
        createObj("attribute", {
            name: "gyear",
            current: 4718,
            characterid: golarianDate.id
            });
        }
        
        
        
    return golarianDate.id;
};
//Successful return of char id


//Check to see if attributes exist
checkAtt = function(mm,dd,yy){
    var gdatt;
    var golarianDate;
 
    //function to find Golarian.Dates
    golarianDate = createDate();
    
    gdatt = findObjs({
        type: 'attribute',
        name: 'gmonth',
        characterid: golarianDate
    })[0];
    /*
    if(!gdatt) {
        sendChat(almighty, "gmonth doesn't exist");
    }
    if(gdatt) {
        sendChat(almighty, "gdatt" + gdatt + "gmonth does exist.");
        sendChat(almighty,"gdatt: " + gdatt);
        sendChat(almighty,"golarianDate: " + golarianDate);
    };
    */
    return gdatt;
};

//Lets me know in chat log that APIs are finished loading
on("ready", function(dd,mm,yy) {
    sendChat(almighty,"<hr><b>Loaded.<b>");
    var golarianDate = createDate();
    sendChat(almighty,"Ran check.  character id = "+ golarianDate)
});    

//Listens for '!gd --create' in chat, runs createDate
on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!gd --create") !== -1){
        createDate();
        sendChat(almighty,"Ran check");
        }
    });

//Listens for '!gd --check' to see if script is running
	on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!gd --check") !== -1){
        createDate();
        sendChat(almighty,"Script Running");
        
        //  **Currently trying to change attributes.. too tired to continue
        //obj.get('')
        
        
        }
    });

//Checks Golarian.Date to see if first attribute exists
//For some reason, it keeps coming up positive
	on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!gd --gdatt") !== -1){
        checkAtt();
        sendChat(almighty,"checking if att exists");
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
    
    
