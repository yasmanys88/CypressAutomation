class LoginPage{

    loginAction =(mail,pass)=>{
        cy.fixture('loginLocator').then((login)=>{
            cy.get(login.loginLink).click();
            cy.get(login.mailInput).type(mail);
            cy.get(login.passInput).type(pass);
            cy.get(login.sigInBtn).click();
        })
    }

    logoutAction =()=>{
        cy.fixture('loginLocator').then((login)=>{
            cy.get(login.logoutLink).click();
        })
    }

}
export default new LoginPage();