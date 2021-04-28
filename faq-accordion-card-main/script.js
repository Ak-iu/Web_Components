let a1, a2, a3, a4, a5 = false;

function flip(id){
    document.getElementById(id).style='transform: scaleY(-1);'
}
function r_flip(id){
    document.getElementById(id).style='transform: scaleY(1);'
}
function black(id){
    document.getElementById(id).style.color='black';
}
function grey(id){
    document.getElementById(id).style.color='hsl(240, 6%, 50%)';
}


function get_answer(id){
    const div = document.getElementById('a'+id);
    let text = "";

    if ('a'+id === 'a1') {
        if(a1) {
            a1=false ;
            r_flip("arrow1")
            grey("q1")
        }
        else {
            text += "<p>You can invite up to 2 additional users on the Free plan. There is no limit on\n" +
                "          team members for the Premium plan.</p>";
            a1 = true;
            flip("arrow1")
            black("q1")
        }
    }
    else if ('a'+id === 'a2'){
        if(a2) {
            a2=false;
            r_flip("arrow2")
            grey("q2")
        }
        else {
            text += "<p>No more than 2GB. All files in your account must fit your allotted storage space.</p>";
            a2 = true;
            flip("arrow2")
            black("q2")
        }
    }
    else if ('a'+id=== 'a3') {
        if (a3) {
            a3=false;
            r_flip("arrow3")
            grey("q3")
        }
        else {
            text += "<p>Click “Forgot password” from the login page or “Change password” from your profile page.\n" +
                "          A reset link will be emailed to you.</p>";
            a3 = true;
            flip("arrow3")
            black("q3")
        }
    }
    else if ('a'+id === 'a4') {
        if (a4) {
            a4=false;
            r_flip("arrow4")
            grey("q4")
        }
        else {
            text += "<p>Yes! Send us a message and we’ll process your request no questions asked.</p>";
            a4 = true;
            flip("arrow4")
            black("q4")
        }
    }
    else if ('a'+id === 'a5') {
        if (a5) {
            a5=false;
            r_flip("arrow5")
            grey("q5")
        }
        else {
            text += "<p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>";
            a5 = true;
            flip("arrow5")
            black("q5")
        }
    }

    div.innerHTML = text;
}

