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
      const member = {
         name: $("#name").val(),
         email: $("#email").val()
      };
      console.log(member);
      //Set data into Book Table 
      $.post("/api/members", member)
         .then(() => {
            window.location.pathname = "/members";
         }); 
   }

});

 