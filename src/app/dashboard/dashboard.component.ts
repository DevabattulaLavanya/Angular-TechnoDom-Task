import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList;
  productsList;
  userListbyId;
  employessView = true;
  productsView = false;
  userpic;
  useremail;
  userphone;
  userjoining_date;
  useraddress;
  useruser_name;
  usersalary;
  subcategoryList;
  subcategorydata;
  sublist;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
    this.loginService.getusers().subscribe(res => {
      this.userList = res['users'];
    })
  }

  getEmployees() {
    this.employessView = true;
    this.productsView = false;
    this.loginService.getusers().subscribe(res => {
      this.userList = res['users'];
    })
  }
  getEmployeesbyId(id) {
    this.loginService.getuserbyId(id).subscribe(res => {
      this.userListbyId = res['user'];
      this.userpic = this.userListbyId.photo;
      this.useremail = this.userListbyId.email;
      this.userphone = this.userListbyId.phone;
      this.userjoining_date = this.userListbyId.joining_date;
      this.useraddress = this.userListbyId.address;
      this.useruser_name = this.userListbyId.user_name;
      this.usersalary = this.userListbyId.salary;
    })
  }
  getproducts() {
    this.employessView = false;
    this.productsView = true;
    this.loginService.getproducts().subscribe(res => {
      this.productsList = res['products'];
    })
  }
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
