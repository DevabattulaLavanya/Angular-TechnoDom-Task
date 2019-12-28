import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  details;
  statusCode =false;
  constructor(private router: Router,private loginservice: LoginService) { }

  loginfun(){
    const userdetails={
      employee_id:this.model.employee_id,
      password:this.model.password,
    }
    this.loginservice.login(userdetails).subscribe(res=>{
    this.details = res;
    sessionStorage.setItem('token',this.details.token);
      this.router.navigateByUrl('dashboard');
    },
    err=>{
      if(err.status==401){
        this.statusCode=true;
        this.details="Incorrect Employee Id or Password";
      }
    })     
  }

  ngOnInit() {
  }

}
