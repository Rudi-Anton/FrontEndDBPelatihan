import { Component, OnInit } from '@angular/core'; 
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './loginmodel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    dataLogin: Data;
    constructor(private http: Http) {

     }

    ngOnInit() {
        this.dataLogin = new Data();
    }

    Login(dataLogin) {
        debugger;
        let header = new Headers({ 'Content-Type': 'application/json' });
        let opsi = new RequestOptions({ headers: header });
        //let dataLogin = JSON.stringify({NamaPengguna:namapengguna, KunciPengguna:kuncipengguna});
        this.http.post('http://rumahsakitsakit.herokuapp.com/api/login/authenticate', JSON.stringify(dataLogin), opsi)
        .subscribe((res:Response) => {
            debugger;
                // login successful if there's a jwt token in the response
                // let token = res.json();
                // if (token) {
                //     // set token property
                //     this.token = token;

                //     // store username and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify({ dataLogin, token: token }));

                //     // return true to indicate successful login
                //     return true;
                // } else {
                //     // return false to indicate failed login
                //     return false;
                // }
                document.cookie="token="+res.json().token;
                window.location.href='/';
            });
    }
}
