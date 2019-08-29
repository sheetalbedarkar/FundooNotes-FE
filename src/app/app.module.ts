import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VerifyUserComponent } from './component/verify-user/verify-user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { GetNoteComponent } from './component/get-note/get-note.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { TrashNoteComponent } from './component/trash-note/trash-note.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddLabelComponent } from './component/add-label/add-label.component';
import { DialogBoxLabelComponent } from './component/dialog-box-label/dialog-box-label.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LabelsComponent } from './component/labels/labels.component';
import { MatNativeDateModule } from '@angular/material';
import { RemainderComponent } from './component/remainder/remainder.component';
import {AuthguardService } from './core/service/authguard.service';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyUserComponent,
    DashboardComponent,
    AddNoteComponent,
    GetNoteComponent,
    ArchiveNoteComponent,
    TrashNoteComponent,
    DialogBoxComponent,
    AddLabelComponent,
    DialogBoxLabelComponent,
    LabelsComponent,
    RemainderComponent,
    ProfilePicComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  providers: [AuthguardService],
  entryComponents: [DialogBoxComponent,DialogBoxLabelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
