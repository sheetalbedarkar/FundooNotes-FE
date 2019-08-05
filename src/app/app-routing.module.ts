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
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { DialogBoxLabelComponent } from './component/dialog-box-label/dialog-box-label.component';
import { AddLabelComponent } from './component/add-label/add-label.component';
import { LabelsComponent } from './component/labels/labels.component';
import { RemainderComponent } from './component/remainder/remainder.component'
import {AuthguardService } from './core/service/authguard.service';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'user/resetPassword/:token', component: ResetPasswordComponent },
  { path: 'user/isVerified/:token', component: VerifyUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createNote', component: AddNoteComponent },
  { path: 'getAllNotes', component: GetNoteComponent },
  { path : 'getAllRemainderNotes', component : RemainderComponent},
  { path: 'label' , component: LabelsComponent},  
  { path: 'getAllTrashNotes', component: TrashNoteComponent },
  { path: 'getAllArchiveNotes', component: ArchiveNoteComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthguardService],
    children: [
      { path: 'getAllNotes', component: GetNoteComponent },
      { path: 'getAllTrashNotes', component: TrashNoteComponent },
      { path: 'getAllArchiveNotes', component: ArchiveNoteComponent },
      { path: 'editNote', component: DialogBoxComponent },
      { path : 'getAllRemainderNotes', component : RemainderComponent},
    ]
  },
  { path: 'createLabel', component: DialogBoxLabelComponent },
  { path: 'label', component: AddLabelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
