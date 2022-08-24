import BasePage from "./Base.page";

class SearchPage extends BasePage{
    static url(){
        return "http://localhost:3000/#/search";
    }
    static get searchbutton(){
        return cy.get("#searchQuery")
    }
    static get lemonsearch(){
        return cy.get('#mat-input-0')
    }
    static get selectlemon(){
        return cy.get(".mat-card > .mat-tooltip-trigger")
    }
    static get Vitamincard(){
        return cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
    }
    static get selectlemon2(){
        return cy.get("[style='left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);'] > .mat-grid-tile-content > .mat-card")
    }
    static get Egg(){
        return cy.get('[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > .mat-tooltip-trigger')
    }
    static get Buttonclose(){
        return cy.get(".close-dialog")
    }
    static get Strawberry(){
        return cy.get('[style="left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 1); padding-top: calc((50% - 15px) * 1 + 0px);"] > .mat-grid-tile-content > .mat-card > .mat-tooltip-trigger')
    }
    static get Raspberry(){
        return cy.get('.mat-card')
    }
    static get Review(){
        return cy.get('#mat-input-3')
    }
    static get Submit(){
        return cy.get('#submitButton')
    }
    static get open(){
        return cy.get('.mat-expansion-indicator')
    }
    static get validate(){
        return cy.get('.mat-expansion-panel-body')
    }

    static get NumberVal(){
        return cy.get('#mat-select-value-1')
    }
    static get NumberValChange(){
        return cy.get('.mat-select-arrow-wrapper')
    }

    static get NumberValChange2(){
        return cy.get('#mat-option-1 > .mat-option-text')
    }
    static get NumberValChange3(){
        return cy.get('#mat-option-2 > .mat-option-text')
    }

    

    

    



   
    
     // Search for Lemon
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."

  

   


}
export default SearchPage;