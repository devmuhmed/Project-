import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //After run it in terminal npm install ng2-validation --save
import { CustomFormsModule } from 'ng2-validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PasswordModule} from 'primeng/password'; //add input password from primeng
import {RatingModule} from 'primeng/rating';
import {ChipsModule} from 'primeng/chips';


import { ProfileComponent } from './profile/profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { LeftinfoComponent } from './setting/leftinfo/leftinfo.component';
import { RightinfoComponent } from './setting/rightinfo/rightinfo.component';
import { LeftComponent } from './profile/left/left.component';
import { LeftdocumentaionComponent } from './profile/leftdocumentaion/leftdocumentaion.component';
import { RightComponent } from './profile/right/right.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditprofileComponent } from './editprofile/editprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LeftComponent,
    LeftdocumentaionComponent,
    RightComponent,
    EditprofileComponent,
    SettingComponent,
    LeftinfoComponent,
    RightinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PasswordModule,
    RatingModule,
    ChipsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
