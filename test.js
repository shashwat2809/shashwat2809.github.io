fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
.then(
    response => response.json()
).then(
    response => {
        console.log(response);
        var sorted = response.sort(function(a,b){
            var x = a.points < b.points? 1:-1; 
            return x; 
            });
            for(let i=0;i<sorted.length;i++){
                if(i<3){
                    document.getElementById(`namepoint${i+1}`).innerHTML = `${sorted[i].name}-${sorted[i].points}`;
                    document.getElementsByClassName(`i${i+1}`)[0].src = sorted[i].avatar;
                }else{
                    document.getElementsByClassName(`n${i+1}`)[0].innerHTML = sorted[i].name;
                    document.getElementsByClassName(`i${i+1}`)[0].src = sorted[i].avatar;
                    document.getElementsByClassName(`m${i+1}`)[0].innerHTML = sorted[i].points;
                }
            }
        console.log(sorted)
    }
)