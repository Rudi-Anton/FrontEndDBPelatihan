import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexsidebarComponent } from './indexsidebar/indexsidebar.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { LoginComponent } from './login/login.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { ProvinsidetailComponent } from './provinsi/provinsidetail/provinsidetail.component';
import { ProvinsieditComponent } from './provinsi/provinsiedit/provinsiedit.component';
import { ProvinsicreateComponent } from './provinsi/provinsicreate/provinsicreate.component';
import { KategoriobatComponent } from './kategoriobat/kategoriobat.component';
import { JenisobatComponent } from './jenisobat/jenisobat.component';
import { JenisobatcreateComponent } from './jenisobat/jenisobatcreate/jenisobatcreate.component';
import { JenisobateditComponent } from './jenisobat/jenisobatedit/jenisobatedit.component';
import { JenisobatdetailComponent } from './jenisobat/jenisobatdetail/jenisobatdetail.component';
import { KategoriobateditComponent } from './kategoriobat/kategoriobatedit/kategoriobatedit.component';
import { KategoriobatcreateComponent } from './kategoriobat/kategoriobatcreate/kategoriobatcreate.component';
import { KategoriobatdetailComponent } from './kategoriobat/kategoriobatdetail/kategoriobatdetail.component';
import { VariasiobatComponent } from './variasiobat/variasiobat.component';
import { VariasiobatcreateComponent } from './variasiobat/variasiobatcreate/variasiobatcreate.component';
import { VariasiobateditComponent } from './variasiobat/variasiobatedit/variasiobatedit.component';
import { VariasiobatdetailComponent } from './variasiobat/variasiobatdetail/variasiobatdetail.component';


let routes : Routes = [
  {path:"login",component:LoginComponent},
  {path:"provinsi",component:ProvinsiComponent},
  {path:"provinsicreate",component:ProvinsicreateComponent},
  {path:"provinsiedit/:id",component:ProvinsieditComponent},
  {path:"provinsidetail/:id",component:ProvinsidetailComponent},
  {path:"jenisobat",component:JenisobatComponent},
  {path:"jenisobatcreate",component:JenisobatcreateComponent},
  {path:"jenisobatedit/:id",component:JenisobateditComponent},
  {path:"jenisobatdetail/:id",component:JenisobatdetailComponent},
  {path:"kategoriobat",component:KategoriobatComponent},
  {path:"kategoriobatcreate",component:KategoriobatcreateComponent},
  {path:"kategoriobatedit/:id",component:KategoriobateditComponent},
  {path:"kategoriobatdetail/:id",component:KategoriobatdetailComponent},
  {path:"variasiobat",component:VariasiobatComponent},
  {path:"variasiobatcreate",component:VariasiobatcreateComponent},
  {path:"variasiobatedit/:id",component:VariasiobateditComponent},
  {path:"variasiobatdetail/:id",component:VariasiobatdetailComponent},
];

@NgModule({
  declarations: [
    IndexheaderComponent,
    IndexsidebarComponent,
    IndexfooterComponent,
    AppComponent,
    LoginComponent,
    ProvinsiComponent,
    ProvinsicreateComponent,
    ProvinsieditComponent,
    ProvinsidetailComponent,
    KategoriobatComponent,
    JenisobatComponent,
    JenisobatcreateComponent,
    JenisobateditComponent,
    JenisobatdetailComponent,
    KategoriobateditComponent,
    KategoriobatcreateComponent,
    KategoriobatdetailComponent,
    VariasiobatComponent,
    VariasiobatcreateComponent,
    VariasiobateditComponent,
    VariasiobatdetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
