import BasePage from "./Base.page";

class LoginPage extends BasePage{
    static url(){
        return "http://localhost:3000/#/login";
    }
    // Scenario - Login
    // Click Account button
    // Click Login button
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section

    static get Accountbutton(){
        return cy.get("#navbarAccount");
    }
    static get LoginButton(){
        return cy.get("#navbarLoginButton");
    }

    static get Email(){
        return cy.get("#email");
    }

    static get Password(){
        return cy.get("#password");
    }
    static get LogIn(){
        return cy.get("#loginButton");
    }

    static get Close(){
        return cy.get(".close-dialog");
    }
    static get Close1(){
        return cy.get(".cc-btn");
    }

    static get Validate(){
        return cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span');
    }

    static get Notacustommer(){

        return cy.get("#newCustomerLink > .primary-link");
    }


}
export default LoginPage;