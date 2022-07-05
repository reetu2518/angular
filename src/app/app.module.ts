import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { PracticeModule } from './practice/practice.module';
import { NoPageComponent } from './no-page/no-page.component';
import { HttpClientModule } from '@angular/common/http';
// import { AdminModule } from './admin/admin.module';

console.warn("Admin Module");


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    PracticeModule,
    HttpClientModule,
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
