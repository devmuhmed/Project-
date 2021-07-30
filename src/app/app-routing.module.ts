import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:"profile",component:ProfileComponent},
  {path:"setting",component:SettingComponent},
  {path:"editProfile",component:EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
