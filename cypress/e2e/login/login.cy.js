import LoginPage from "../../support/loginPage"
import LoginData from "../../fixtures/loginData"

const loginPage = new LoginPage()
describe('OrangeHRM Login Feature', () => {
 
    beforeEach(() => {

        cy.intercept(
            'POST',
            '**/auth/validate'
        ).as('loginAPI')
         loginPage.visit();
       
    })

    it ('TC-LOGIN-001 - Login menggunakan username dan password yang valid', () =>{
      
    
      loginPage.inputUsername( LoginData.validUsername);
      loginPage.inputPassword(LoginData.validPassword);
      loginPage.clickLogin();

       cy.wait('@loginAPI')
      
      loginPage.assertionLogin();

    })


      it ('TC-LOGIN-002 - Login menggunakan Password yang invalid', () =>{
      
      loginPage.inputUsername( LoginData.validUsername);
       loginPage.inputPassword( LoginData.invalidPassword);
       loginPage.clickLogin();

       cy.wait('@loginAPI')

       loginPage.assertionInvalidCredentials();
    })

    it ('TC-LOGIN-003 - Login menggunakan username yang invalid', () =>{
       loginPage.inputUsername( LoginData.invalidUsername);
       loginPage.inputPassword( LoginData.validPassword);
       loginPage.clickLogin();
       cy.wait('@loginAPI')

      
       loginPage.assertionInvalidCredentials();
    })

    it ('TC-LOGIN-004 - Login menggunakan Username yang kosong', () =>{
     
      loginPage.inputPassword( LoginData.validPassword);
      loginPage.clickLogin();

     

       loginPage.assertionRequiredAlert();
    })

     it ('TC-LOGIN-005 - Login menggunakan password yang kosong', () =>{
     loginPage.inputUsername( LoginData.validUsername);
      loginPage.clickLogin();
     

      
       loginPage.assertionRequiredAlert();
    })

    it('TC-LOGIN-006 - Login menggunakan Username dan Password kosong', () => {

        loginPage.clickLogin();
       
        loginPage.assertionDoubleRequiredAlert();

    })

    it('TC-LOGIN-007 - Verifikasi fitur forgot password', () => {
         cy.intercept(
        'GET',
        '**/requestPasswordResetCode'
    ).as('forgotPassword')
       loginPage.clickForgotPassword();

        cy.wait('@forgotPassword').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
    })

       loginPage.assertionForgotPasswordPage();

    })

    
    it('TC-LOGIN-008 - Login tanpa Authentikasi', () => {

       cy.intercept(
        'GET',
        '**/dashboard/**'
    ).as('dashboardRequest')

       loginPage.visitDashboard()

           cy.wait('@dashboardRequest')

       loginPage.assertionLoginNoAuth()
      

    })
})