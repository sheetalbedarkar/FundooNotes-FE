import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyUserComponent } from './component/verify-user/verify-user.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { GetNoteComponent } from './component/get-note/get-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { AddLabelComponent } from './component/add-label/add-label.component';
import { LabelsComponent } from './component/labels/labels.component';
import { RemainderComponent } from './component/remainder/remainder.component'
import {AuthguardService } from './core/service/authguard.service';
import{ProfilePicComponent} from './component/profile-pic/profile-pic.component'
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'user/resetPassword/:token', component: ResetPasswordComponent },
  { path: 'user/isVerified/:token', component: VerifyUserComponent },
  {
    path: 'u', component: DashboardComponent,
    canActivate: [AuthguardService],
    children: [
      { path: 'notes', component: GetNoteComponent },
      { path: 'trash', component: TrashNoteComponent },
      { path: 'archive', component: ArchiveNoteComponent },
      { path : 'remainder', component : RemainderComponent},
    ]
  },
  { path: 'label' , component: LabelsComponent},  
  { path: 'label', component: AddLabelComponent },
  { path : 'profile', component : ProfilePicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
