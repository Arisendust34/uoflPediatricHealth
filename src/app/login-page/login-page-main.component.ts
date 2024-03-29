import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

//declare function onChange(): void; //links to js file

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page-main.component.html',
  styleUrls: ['login-page-main.component.css']
})
export class LoginPageComponent implements OnInit {
  
  //document.getElementById("div1").classList.remove("classToBeRemoved");

  divReset = document.getElementById("login-resetpw");
  divRegister = document.getElementById("login-register");

  showLoginMain = true;
  showResetPW = false;
  showRegister = false;

  clickForgotPassword() {
    //destroy the main login screen
    //const loginMain = document.getElementById("login-main");
    //loginMain?.remove();
    this.showLoginMain = false;
    this.showResetPW = true;
    return;
  }
  clickSignUp() {
    this.showLoginMain = false;
    this.showRegister = true;
    return;
  }
  showMainLogin() {
    this.showResetPW = false;
    this.showRegister = false;
    this.showLoginMain = true;
    return;
  }
  //after clicking "Submit" on the registration view
  clickSubmitRegister() {
    //TODO: logic for handling new user submissions
    if(!(<HTMLInputElement>document.getElementById('password1')).checkValidity() ) return; //return if not valid
    if(!(<HTMLInputElement>document.getElementById('password2')).checkValidity() ) return;
    this.router.navigate(['/app-login-page']); //references app-routing.module.ts for resolving the navigation
    this.showMainLogin(); //since the URL is the same, angular won't actually refresh page
  }
  //after clicking "Submit" on the email reset request view
  clickSubmitResetPW() {
    //TODO: logic for emaililng out password reset links
    if(!(<HTMLInputElement>document.getElementById('emailResetField')).checkValidity() ) return;
    this.router.navigate(['/app-login-page']);
    this.showMainLogin(); 
  }
  //after clicking "Login" on main view
  clickLogin() {
    //TODO: validating email and password
    if(!(<HTMLInputElement>document.getElementById('userEmailField')).checkValidity() ) return;
    if(!(<HTMLInputElement>document.getElementById('userPWField')).checkValidity() ) return;
    this.router.navigate(['app-uofl-health-main']);
  }

  onPassChange() {
    const password = <HTMLInputElement>document.getElementById('password1'); //cast
    const confirm = <HTMLInputElement>document.getElementById('password2');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) { //import router for this.router
    
  }

  ngOnInit(): void {
    
  }
}