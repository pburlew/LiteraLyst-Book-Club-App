$(document).ready(() => {
    
    // creating a click event for "searchBook"
    $("#addMember").on("click",()=> {
 
            
       //  validates if the search text was filled 
        if ($("input[name='name']").val() == "") {
            alert("Please fill in the name field");
        }
        else if ($("input[name='email']").val() == "") {
            alert("Please fill in the email field");
        }
        else {
            addMember();
        }

    });

    function addMember(){

        const name = $("input[name='name']").val();
        const email = $("input[name='email']").val();

        $.post("/api/members", '')
        .then(() => {
           window.location.pathname = "/members";
        });

    }
}
 