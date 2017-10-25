import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-provinsidetail',
  templateUrl: './provinsidetail.component.html',
  styleUrls: ['./provinsidetail.component.css']
})
export class ProvinsidetailComponent implements OnInit {

  dataProvinsiDetail: Object;
  idProvinsi: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idProvinsi = params['id'];
     })
   }
    
  ngOnInit() {
    this.idProvinsi;
   
      this.http.get('http://rumahsakitsakit.herokuapp.com/api/provinsi/' + this.idProvinsi + '?' + document.cookie)
        .subscribe((res: Response) => {
          this.dataProvinsiDetail = res.json();
          
        })
    }
}
