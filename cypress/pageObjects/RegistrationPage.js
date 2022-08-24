import BasePage from "./Base.page";

class RegistrationPage extends BasePage{
    static url(){
        return "http://localhost:3000/#/register";
    }



    static get Email(){
        
        return cy.get("#emailControl");
    }
    
    static get password(){
        return cy.get("#passwordControl");
    }

    static get repeatpassword(){
        return cy.get("#repeatPasswordControl");
    }
    static get securityQ(){
        return cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
    static get FavoritePet(){
        return cy.get("#mat-option-20 > .mat-option-text")
    }

    static get Answer(){
        return cy.get('#securityAnswerControl')
    }

    static get RegistButton(){
        return cy.get('#registerButton')
    }


    
    // Click Account button
    // Login button
    // Click "Not yet a customer?"
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    // Fill in password field and repeat password field with same password
    // Click on Security Question menu
    // Select  "Name of your favorite pet?"
    // Fill in answer
    // Click Register button
    // Set email value to previously created email
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section




}
export default RegistrationPage;