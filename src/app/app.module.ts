import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductService } from './product/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MessageDialogComponent } from './product/message-dialog/message-dialog';
/* import { MatToolbarModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatTableModule,
  MatDividerModule, MatProgressSpinnerModule,
  MatInputModule,  MatCardModule, MatSlideToggleModule,
  MatSelectModule, MatOptionModule
} from '@angular/material'; */
//import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
//import { ContactComponent } from './contact/contact.component';
//import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //HomeComponent,
    //NavbarComponent,
    PageNotFoundComponent,
    MessageDialogComponent
    //ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
    /* MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    AgGridModule.withComponents([]) */
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [MessageDialogComponent]
})
export class AppModule { }
