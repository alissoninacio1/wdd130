sendEmail = () => {
        /* this is the email section */
        let email = document.querySelector("#email");   
        let em = String(document.getElementById("em").value); //email
        
    
    
        //The setAttribute() method adds the specified attribute to an element, and gives it the specified value.
        //If the specified attribute already exists, only the value is set/changed.
        //NOTE: arguments are strings, for personalized strings, I'm using strings templates
        email.setAttribute("href", `mailto:${em}`);
        //alert(email.getAttribute("href"));     //this line was only to see if the hrf is correct
}

changePlaceholderFont = () =>  {
    
}