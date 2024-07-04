document.getElementById("myform").addEventListener("submit", function(event){
    event .preventDefault();
   
    let formdatta = new formdatta(this);
    let result = ("Name") +
    formdatta.get("Name")+"<br>"+"Email :" +
    formdatta.get("Email")+"<br>"+"age :" +
    formdatta.get("age")+"<br>"+"gender :" +
    formdatta.get("gender")+"<br>"+" comants:" +
    formdatta.get("comants");
    document.getElementById("result").rnneHTML = "<h1> my data <h1> + reuslt"; 

})
