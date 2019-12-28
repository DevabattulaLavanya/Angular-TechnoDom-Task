import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = sessionStorage.getItem('token');

  constructor(private http:HttpClient) { }

  login(userdetails) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('https://shop-auth-ms.herokuapp.com/api/login'  , userdetails, {headers});
    }
    
    getusers() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      });
      return this.http.get('https://shop-auth-ms.herokuapp.com/api/users', {headers});
      }

      getuserbyId(id) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        });
        return this.http.get('https://shop-auth-ms.herokuapp.com/api/show_user/'+id,{headers});
        }
      getproducts() {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        });
        return this.http.get('https://shop-auth-ms.herokuapp.com/api/list', {headers});
        }
}
