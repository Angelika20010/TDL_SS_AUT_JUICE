import LoginPage from "../pageObjects/LoginPage";

import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchPage from "../pageObjects/SearchPage";

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/#/')
  })

  context("Elements Page", () => {
    context("Text box scenarios", () => {
      beforeEach(() => {
        LoginPage.visit();
        LoginPage.Close.click();
        LoginPage.Close1.click();
        RegistrationPage.visit();
        
      });
      it("Filling in Text Boxes", () => {
        
        LoginPage.Accountbutton.click();

        LoginPage.LoginButton.click();
        LoginPage.Email.type("demo");
        LoginPage.Password.type("demo");
        LoginPage.LogIn.click();
        LoginPage.Accountbutton.click();
        LoginPage.Validate.contains("demo").and("be.visible");


      });

      it("Registration", () => {
        
        LoginPage.Accountbutton.click();

        LoginPage.LoginButton.click();
        LoginPage.Notacustommer.click( {force: true} ); 
        let a= Math.round(Math.random() * 1000);
        RegistrationPage.Email.type(`abc${a}@gmail.com`);
        RegistrationPage.password.type("1234567890");
        RegistrationPage.repeatpassword.type("1234567890");
        RegistrationPage.securityQ.click();
        RegistrationPage.FavoritePet.click();

        RegistrationPage.Answer.type("Rome")
        RegistrationPage.RegistButton.click();
        LoginPage.Accountbutton.click();

        LoginPage.LoginButton.click();
        LoginPage.Email.type(`abc${a}@gmail.com`);
        LoginPage.Password.type("1234567890");
        LoginPage.LogIn.click();
        LoginPage.Accountbutton.click();
        


        


      })
  
      
      });

      context("Search", () => {
        beforeEach(() => {
          SearchPage.visit();
          LoginPage.Close.click();
          LoginPage.Close1.click();
          
          
        });
        it("Scenario2", () => {
          SearchPage.searchbutton.click();
          SearchPage.lemonsearch.type("lemon{enter}");
          SearchPage.selectlemon.click();
          SearchPage.Vitamincard.should("have.text","Sour but full of vitamins.")
  
  
        });

        it("Scenario4", () => {
          SearchPage.searchbutton.click();
          SearchPage.lemonsearch.type("500ml{enter}");
          SearchPage.selectlemon2.click();
          SearchPage.Vitamincard.should("have.text","Sour but full of vitamins.")

  
        });

        it("Scenario5", () => {
          SearchPage.searchbutton.click();
          SearchPage.lemonsearch.type("500ml{enter}");
          SearchPage.Egg.click();
          SearchPage.Vitamincard.should("have.text", "Now with even more exotic flavour.")
          SearchPage.Buttonclose.click();
          SearchPage.selectlemon2.click();
          SearchPage.Vitamincard.should("have.text","Sour but full of vitamins.");
          SearchPage.Buttonclose.click();
          SearchPage.Strawberry.click();
          SearchPage.Vitamincard.should("have.text","Sweet & tasty!");
          SearchPage.Buttonclose.click();


  
        });

        it("Scenario6", () => {
          LoginPage.Accountbutton.click();

          LoginPage.LoginButton.click();
          LoginPage.Email.type("demo");
          LoginPage.Password.type("demo");
          LoginPage.LogIn.click();
          SearchPage.searchbutton.click();
          SearchPage.lemonsearch.type("Raspberry{enter}");
          SearchPage.Raspberry.click();
          SearchPage.Review.click();
          SearchPage.Review.type("Tastes like metal"); 
          SearchPage.Submit.click(); 
          SearchPage.open.click();
          SearchPage.validate.contains("Tastes like metal")

  
        });

        it.only("Scenario7", () => {
          SearchPage.NumberVal.should("have.text", "12")
          SearchPage.NumberValChange.click({force: true})
          SearchPage.NumberValChange2.click({force: true})
          SearchPage.NumberVal.should("have.text", "24")
          SearchPage.NumberValChange.click({force : true})
          SearchPage.NumberValChange3.click({force: true})
          SearchPage.NumberVal.should("have.text", "36")

          

  
        });
        




    });
   
  
        
  
  
      });
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

})