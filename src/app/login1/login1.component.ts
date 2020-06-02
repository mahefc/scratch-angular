import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {

  constructor() { }

  @ViewChild('email') email: ElementRef; @ViewChild('errMail') errMail: ElementRef;
  @ViewChild('pwd') pwd: ElementRef; @ViewChild('errPwd') errPwd: ElementRef;
  @ViewChild('btn') btn: ElementRef;

  ngAfterViewInit() {
    this.btn.nativeElement.disabled = true;
    ['input', 'focusout'].forEach(evt => {
      this.email.nativeElement.addEventListener(evt, (e) => {
         this.btnCheck('mail',this.testMail(e))
        })
        this.pwd.nativeElement.addEventListener(evt, (e) => {
          this.btnCheck('pwd',this.testPwd(e))
      })
    });

    this.btn.nativeElement.addEventListener('click',()=>{
      console.log('I am here')
    })

  }

  testMail(e){
    let regex = /\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    return this.valueCheck(regex,e.target.value,this.errMail.nativeElement)
  }

  testPwd(e) {
    let regex = /(?=.{6,})(?=.*[a-z])(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*/
    return this.valueCheck(regex,e.target.value,this.errPwd.nativeElement)
  }
  
  valueCheck(regex,val,el){
    el.style.borderColor = 'tomato'
    if (val.length < 1) {
      el.innerHTML = el.id === 'pwd' ? 'Password is required' : 'Email is required'
    }
    else if (!regex.test(val)) {
      el.innerHTML =  el.id === 'pwd' ? 'Password is not valid' : 'Email is not valid'
    }
    else {
      el.innerHTML = '';
      el.style.borderColor = 'green'
    }
    return el.style.borderColor == 'green' ? false : true
  }

  btnCheck(name,val){
    let a,b = true;
    name == 'mail' ?  a = val : b = val
    if(!a && !b){
      this.btn.nativeElement.disabled = false;
    }else{
      this.btn.nativeElement.disabled = true;
    }
  }


}