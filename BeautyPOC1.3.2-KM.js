//Project PhodKLOM Beauty Store Spark Hack-a-thon Contest Entry
//obviously, these are NOT our real phone numbers, and you'd want to put yours in.
//ideally, those numbers should be pulled from a flatfile per site, or a db for all sites.
//that's a stretch goal.
//v1.3.2 from 2016-03-25
result = ask("Welcome to the Beauty store directory. Who are you trying to reach? Press 1 for the salon, 2 for all other employees", {
		choices: "1,2,3",
		attempts:3,
		mode:"dtmf"
});

if (result.value == "1")
	{
	say("Connecting you to the salon to schedule your next appointment");
	transfer(+1847-555-1000, {
		timeout:13,
		playvalue: "http://www.phono.com/audio/holdmusic.mp3",
		terminator:"*",
		onTimeout: function(event){
			result.value = "3";
			log("Salon Timed Out:");
		}
	}
	)}
if (result.value == "2")
	{
		say("Connecting you to a store employee to help meet your beauty needs");
		transfer(["+18475551001","+18475551000"], {
			timeout:13,
			playvalue: "http://www.phono.com/audio/holdmusic.mp3",
			terminator: "*",
			onTimeout: function(event){
				result.value = "3";
				log ("Reach Any Employee Timed Out");
			}
		}
)}
if (result.value == "3")
{
	say ("Connecting you to a store manager, please standby.");
	transfer("+18475551003", {
		timeout:13,
		playvalue: "http://www.phono.com/audio/holdmusic.mp3",
		terminator: "*",
		onTimeout: function(event) {
			message("An unanswered call was escalated to Manager.", {
				to:"+18475551005",
				network:"SMS"
			});
		}
	});
}





