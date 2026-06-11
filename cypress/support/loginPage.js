class LoginPage{
    visit(){
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    inputUsername(username){
         cy.get('input[name="username"]').type(username)

    }

    inputPassword(password){
         cy.get('input[name="password"]').type(password)

    }

    clickLogin(){
         cy.get('button[type="submit"]').click() 
    }

    assertionLogin(){
     cy.url().should('include', '/dashboard')
       cy.contains('Dashboard').should('be.visible')
    }

    assertionLoginEmptyUsernamePassword(){
     cy.get('.oxd-input-field-error-message').should('have.length', 2)

    }

    assertionInvalidCredentials(){
     cy.contains('Invalid credentials').should('be.visible')
    }

     assertionRequiredAlert(){
     cy.contains('Required').should('be.visible')
    }

    assertionDoubleRequiredAlert(){
     cy.get('.oxd-input-field-error-message').should('have.length', 2)
    }

    clickForgotPassword(){
     cy.get('.orangehrm-login-forgot-header').click()

    }

    assertionForgotPasswordPage(){
      cy.url().should('include', '/requestPasswordResetCode')
        cy.contains('Reset Password').should('be.visible')
    }

    visitDashboard(){
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

    assertionLoginNoAuth(){
      cy.url().should('include', '/auth/login')
    }


}

export default LoginPage