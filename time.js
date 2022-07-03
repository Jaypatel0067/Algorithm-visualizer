let split = [];
let split2 = [];

function ArrayChallenge(strArr) {
  if (strArr.length <= 2) {
    console.error("Error: Array must contain 3 or more value...");
  } else {
    strArr.sort((a, b) => a.includes("PM") - b.includes("PM"));

    strArr.forEach((element) => {
      split.push(element.split("-"));
    });
    console.log(split)

    split.forEach((num) => {
      num.forEach((item) => {
        var temp = item.split(",").toString();
        removeLastChar = temp.slice(0, temp.length - 2) + ":00";
        var temp2 = `2022-06-24 ${removeLastChar} GMT`;
       
        const date1 = new Date(temp2);
         console.log(date1)
        

        split2.push(date1);
      });
    });

    
    var timestamp = split2[2] - split2[1];
    
    var timestamp2 = split2[4] - split2[3];
    console.log(timestamp)
    if (timestamp > timestamp2) {
        if(new Date(timestamp).toLocaleTimeString("en-US", {
            timeZone: "GMT",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
          }) > 12)
      console.log(
        
      );
    } else {
      console.log(
        new Date(timestamp2).toLocaleTimeString("en-US", {
          timeZone: "GMT",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        })
      );
    }
  }
}
ArrayChallenge(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]);
 