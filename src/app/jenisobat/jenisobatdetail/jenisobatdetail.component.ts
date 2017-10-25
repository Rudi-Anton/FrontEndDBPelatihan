import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-jenisobatdetail',
  templateUrl: './jenisobatdetail.component.html',
  styleUrls: ['./jenisobatdetail.component.css']
})
export class JenisobatdetailComponent implements OnInit {

  dataJenisObatDetail: Object;
  idJenisObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idJenisObat = params['id'];
     })
   }
    
  ngOnInit() {
    this.idJenisObat;
   
      this.http.get('http://rumahsakitsakit.herokuapp.com/api/jenisobat/' + this.idJenisObat + '?' + document.cookie)
        .subscribe((res: Response) => {
          this.dataJenisObatDetail = res.json();
          
        })
    }
}

