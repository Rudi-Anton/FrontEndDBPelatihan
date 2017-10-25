import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-variasiobatdetail',
  templateUrl: './variasiobatdetail.component.html',
  styleUrls: ['./variasiobatdetail.component.css']
})
export class VariasiobatdetailComponent implements OnInit {

   dataVariasiObatDetail: Object;
  idVariasiObat: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idVariasiObat = params['id'];
     })
   }
    
  ngOnInit() {
    this.idVariasiObat;
   
      this.http.get('http://rumahsakitsakit.herokuapp.com/api/variasiobat/' + this.idVariasiObat + '?' + document.cookie)
        .subscribe((res: Response) => {
          this.dataVariasiObatDetail = res.json();
          
        })
    }
}


