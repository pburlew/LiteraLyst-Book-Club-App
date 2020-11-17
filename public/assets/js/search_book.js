
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
$(document).ready(() => {
   $("#viewList").hide(400);
   $("#viewList").empty();
   $("#showbook").hide(400);
   $("#message" ).text("");
   
  
   // creating a click event for "searchBook"
   $("#searchBtn").on("click",()=> {

      //Clean fields
      $("textarea[name='synopsis']").val("");
      $("#message").val("");
           
      //  validates if the search text was filled 
      if ($("input[type='text']").val() == "") {
         alert("Please fill in the search field");
      }
      else {
         searchBook();
      }

   });

   //Get information from External API = New York Times
   function searchBook(){

      const choose = $("input[type='radio']:checked").val();
      const searchtext = $("input[type='text']").val();
    
      let queryURL = "https://api.nytimes.com/svc/books/v3/reviews.json?";

      // Check if search by title or author
      if(choose === "title") {
         queryURL += "title=" + searchtext;
      }
      else { 
         queryURL += "author=" + searchtext;
      }

      queryURL += "&api-key=EoAuYsESNQyKmYqZaVo0CKM7dSB6MRn5";

      $.ajax({
         url: queryURL,
         method: "GET"
      }).then((response) => {

         // if the result is 1 then show in the fields
         if(response.num_results == 1) {
            $("#showbook").show(400);
            $("#viewList").empty();
            $("#message").hide(400);
          
            // assign data from NYT_API
            $("input[name='title']").val(response.results[0].book_title); 
            $("input[name='author']").val(response.results[0].book_author); 
            $("textarea[name='synopsis']").val(response.results[0].summary);
            $("#copyright").text("Source: " + response.copyright); 
         }
         // if the result is more than 1 then show in list and hide the fields
         else if (response.num_results > 1) {

            $("#viewList").empty();
            $("#viewList").show(400);
           
            $("#subtitle").show(400);
            $("#message" ).text("");
            $("#showbook").hide(400);

            // Create row to show Sub title
            const divRowSubTitle = $("<div>");
            divRowSubTitle.addClass("col-lg-12 col-md-offset-3");
            
            const Subtitle = $("<h3>").text("List of books by searching");

            $(divRowSubTitle).append(Subtitle);
            $("#viewList").append(divRowSubTitle);

            //Create titles in each columns 
            const divRow_0 = $("<div>");
            divRow_0.addClass("row");

            const divCol_0 = $("<div>");
            divCol_0.addClass("col-lg-2");
            const title = $("<h4>").text("Title: ");
            $(divCol_0).append(title);

            const divCol_1 = $("<div>");
            divCol_1.addClass("col-lg-2");
            const author = $("<h4>").text("Author: ");
            $(divCol_1).append(author);

            const divCol_2 = $("<div>");
            divCol_2.addClass("col-lg-3");
            const synopsis = $("<h4>").text("Synopsis: ");
            $(divCol_2).append(synopsis);

            const divCol_3 = $("<div>");
            divCol_3.addClass("col-lg-4");
            const status = $("<h4>").text("Status: ");
            $(divCol_3).append(status);

            const divCol_4 = $("<div>");
            divCol_4.addClass("col-md-1");
            const action = $("<h4>").text("Action: ");
            $(divCol_4).append(action);

            $(divRow_0).append(divCol_0,divCol_1,divCol_2,divCol_3,divCol_4);
            $("#viewList").append(divRow_0);

            // Get datas of API ans show in list
            for(let i = 0; i < response.num_results; i++){
               //Create a row in each loop
               const divRow = $("<div>");
               divRow.addClass("row");

               // create 4 columns in each loop
               const divCol_0 = $("<div>");
               divCol_0.addClass("col-lg-2");
               const titleAPI = $("<span>").text(response.results[i].book_title); 
               $(divCol_0).append(titleAPI);

               const divCol_1 = $("<div>");
               divCol_1.addClass("col-lg-2");
               const authorAPI = $("<span>").text(response.results[i].book_author);
               $(divCol_1).append(authorAPI);

               const divCol_2 = $("<div>");
               divCol_2.addClass("col-lg-3");
               const synopsisAPI = $("<span>").text(response.results[i].summary);
               $(divCol_2).append(synopsisAPI);

               const divCol_3 = $("<div>");
               divCol_3.addClass("col-lg-4");

               $(divCol_3).append(
                  $("<input>").prop({
                     type: "radio",
                     id: "status",
                     name: "status",
                     value: "Finished"
                  })
               ).append(
                  $("<label>").prop({
                     for: "Finished"
                  }).html("&nbsp;Finished&nbsp;&nbsp;")
               ).append(
                  $("<input>").prop({
                     type: "radio",
                     id: "status",
                     name: "status",
                     value: "Reading"
                  })
               ).append(
                  $("<label>").prop({
                     for: "Reading"
                  }).html("&nbsp;Reading&nbsp;&nbsp;")
               ).append(
                  $("<input>").prop({
                     type: "radio",
                     id: "status",
                     name: "status",
                     value: "To be read"
                  })
               ).append(
                  $("<label>").prop({
                     for: "To be read"
                  }).html("&nbsp;To be read&nbsp;&nbsp;")
               );
              

               const divCol_4 = $("<div>");
               divCol_4.addClass("col-sm-1");

               const button = $("<button>");
               // Adding a class of each Add Book
               button.addClass("btn btn-gray mb-2");
               // Adding a data-attribute
               button.attr("id", "addbookList")
               button.attr("data-name", response.results[i].book_title),
               button.attr("data-author", response.results[i].book_author);
               button.attr("data-synopsis",response.results[i].summary);
               button.text("Add Book");
               // Adding the button to the divCol4
               $(divCol_4).append(button);

               // Append all columns in divRow
               $(divRow).append(divCol_0, divCol_1, divCol_2, divCol_3, divCol_4);

               // Append divRow in viewlist div - html
               $("#viewList").append(divRow);
            }
            $("#copyright").text("Source: " + response.copyright); 
         }
         // if not return anything in API show the message
         else {
            $("#viewList").empty();
            $("#showbook").show(400);
            
            $("#message").show(400);
            $("#message" ).text("");

            $("#copyright").text(""); 

            let message = "";
          
            message = $("<h4>").text("***Book not found. Please fill in all fields to add a book***");
            $("#message").append(message);
   
         }
      });

      //Clean up the all text fields 
      $("input[type='text']").val("");

   }
});


$("#addBook_1").on("click", createNewBook); 

$(document).on("click", ".btn", createNewBook);

function createNewBook() {

   let newBook = [];
   if($(this).get(0).id == "addbookBtn"){
      newBook = {
         "title": $("#title").val(),
         "author": $("#author").val(),
         "synopsis": $("#synopsis").val(),
         "status": $("#status").val()  
      };
   }
   else if($(this).get(0).id == "addbookList"){
      newBook = {
         "title": $(this).attr("data-name"),
         "author": $(this).attr("data-author"),
         "synopsis": $(this).attr("data-synopsis"),
         "status": $("input[name=status]:checked").val()
      };
   }
   console.log(newBook);

   //Set data into Book Table 
   $.post("/api/books", newBook)
      .then(() => {
         window.location.pathname = "/books";
          });
}
