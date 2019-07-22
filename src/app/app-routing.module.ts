import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyUserComponent } from './component/verify-user/verify-user.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AddNoteComponent } from './component/add-note/add-note.component';
import { GetNoteComponent } from './component/get-note/get-note.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path : 'forgetPassword', component:ForgetPasswordComponent},
  {path : 'user/resetPassword/:token', component:ResetPasswordComponent},
  {path : 'user/isVerified/:token', component:VerifyUserComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path : 'createNote', component : AddNoteComponent},
  {path : 'getAllNotes' , component:GetNoteComponent},
  {path : 'editNote', component : DialogBoxComponent},
  {path : 'trashNote', component : TrashNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
