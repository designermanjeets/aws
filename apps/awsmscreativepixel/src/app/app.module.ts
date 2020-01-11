import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './routing/app-routing.module';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Material
import { AppMaterialModule } from './material/app.material.module';
// AwsloginModule || lib
import { AwsloginModule } from '@awsworkspace/awslogin';
// AwsheaderModule || lib
import { AwsheaderModule } from '@awsworkspace/awsheader';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    AwsloginModule,
    AwsheaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
