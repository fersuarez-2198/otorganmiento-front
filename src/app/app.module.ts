import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminAdherenciaComponent } from "./admin-adherencia/admin-adherencia.component";
import { NavbarAdherenceComponent } from "./navbar-adherence/navbar-adherence.component";
import { AdminPerfilComponent } from "./perfiles/admin-perfil/admin-perfil.component";
import { EditPerfilComponent } from "./perfiles/edit-perfil/edit-perfil.component";
import { AddProfileComponent } from "./perfiles/admin-perfil/add-profile/add-profile.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddAdherenceComponent } from "./admin-adherencia/add-adherence/add-adherence.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminAdherenciaComponent,
    NavbarAdherenceComponent,
    AdminPerfilComponent,
    EditPerfilComponent,
    AddProfileComponent,
    AddAdherenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
