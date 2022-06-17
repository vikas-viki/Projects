setInterval(() => {
    let date =  new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let dayte = date.getDate();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amPm = hour >= 12? 'Pm' : 'Am';
        let halfHour = hour > 12 ?  hour % 12: hour; 

        let months = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
       let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
       function modDays(){
        for(i = day;i<days.length;i++){
            return days[i];
        }
       }
       function modMonth(){
            for(i = month; i<months.length;i++){
                return months[i]
            }
        };
       document.getElementById("dhour").innerHTML = halfHour<10? "0"+halfHour : halfHour;
       document.getElementById("dminutes").innerHTML = minutes<10 ? "0"+minutes : minutes;
       document.getElementById("dseconds").innerHTML = seconds<10 ? "0"+seconds : seconds; 
       document.getElementById("dampm").innerHTML = amPm;
       document.getElementById("month").innerHTML = modMonth();
       document.getElementById("day").innerHTML = modDays();
       document.getElementById("year").innerHTML = year;
       document.getElementById("dayte").innerHTML =dayte;


        
    }, 1000);