import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  constructor() { }
  @ViewChild('email')private email;
  @ViewChild('errMail')private errMail;
  
  @ViewChild('pwd')private pwd;
  @ViewChild('errPwd')private errPwd;

  ngOnInit() {
  }

  testMail(){
    let regex = /\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    this.errMail.nativeElement.style.borderColor = 'tomato'
    if(this.email.nativeElement.value.length < 1){
        this.errMail.nativeElement.innerHTML = 'Email is required'
    }
    else if(!regex.test(this.email.nativeElement.value)){
      this.errMail.nativeElement.innerHTML = 'Email is not valid'
    }
    else{
      this.errMail.nativeElement.innerHTML = '';
      this.errMail.nativeElement.style.borderColor = 'green'
    }
  }

  testPwd(){
    let regex = /(?=.{6,})(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*/
    this.errPwd.nativeElement.style.borderColor = 'tomato'
    if(this.pwd.nativeElement.value.length < 1){
      this.errPwd.nativeElement.innerHTML = 'Password is required'
    }
    else if(!regex.test(this.pwd.nativeElement.value)){
      this.errPwd.nativeElement.innerHTML = 'Password is not valid'
    }
    else{
      this.errPwd.nativeElement.innerHTML = '';
      this.errPwd.nativeElement.style.borderColor = 'green'
    }
  }

}
