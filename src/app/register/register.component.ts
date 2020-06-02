import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }

  @ViewChild('email') email: ElementRef; @ViewChild('errMail') errMail: ElementRef;
  @ViewChild('mob') mob: ElementRef; @ViewChild('errMob') errMob: ElementRef;
  @ViewChild('pwd') pwd: ElementRef; @ViewChild('errPwd') errPwd: ElementRef;
  @ViewChild('btn') btn: ElementRef;

  ngAfterViewInit() {
    
    this.btn.nativeElement.disabled = true;

    ['keydown', 'focusout','paste'].forEach(evt => {
      this.email.nativeElement.addEventListener(evt, (e) => {
         this.btnCheck('mail',this.testMail(e))
        })
      this.mob.nativeElement.addEventListener(evt, (e) => {
        if(e.type === 'paste'){
          e.target.value = e.clipboardData.getData('text/plain').slice(0,9)
        }
        if(e.target.value.length > 9){
          return e.target.value = e.target.value.toString().slice(0,9)
        }
        this.btnCheck('mob',this.testMob(e)) 
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

  testMob(e) {
    let regex = /^\d{9}$/
    return this.valueCheck(regex,e.target.value,this.errMob.nativeElement)
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
