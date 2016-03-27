//Project PhodKLOM Beauty Store Spark Hack-a-thon Contest Entry
//obviously, these are NOT our real phone numbers, and you'd want to put yours in.
//ideally, those numbers should be pulled from a flatfile per site, or a db for all sites.
//that's a stretch goal.
//v1.3.1 from 2016-03-23
result = ask("Welcome to the Beauty store directory. Who are you trying to reach? Press 1 for the salon, 2 for all other employees ", {
   choices:"1, 2",
   attempts:3,
   mode:"dtmf"
});

if (result.value == "1")
   {
           say("Connecting you to the salon to schedule your next appointment");
           transfer("+1847-555-1000", {
              timeout:15,
               onTimeout: function(event) {

       say("calling Manager");
       transfer("+1847-555-1001");
       log("transferring");
      }
      
                 
    }
    );
   }
    
if (result.value == "2")
    
           say("Connecting you to a store employee that can help meet your beauty needs");
           transfer("+1847-555-1001", {
           timeout:15,
           onTimeout: function(event) {
           message("Received office text", {

           to:"+17085551212",

           network:"SMS"
          }

           );       
           }
           });     
         


  
