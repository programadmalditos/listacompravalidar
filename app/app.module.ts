import { NgModule } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DefaultComponent } from './Component/default-component/default.component';
import { LoginComponent } from './Component/login-component/login.component';
import { AppComponent } from './Component/main/app.component';
import { FormularioProductoComponent } from './Component/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Component/listado-productos/listado-productos.component';
import { ListadoTiendasComponent } from './Component/listado-tiendas/listadoTiendas.component';
import { FormularioEditTiendaComponent } from './Component/formularioEditar-tienda/formulario-edittienda.component';
import { ListaComraFileService } from './Services/listaCompraFile-service/listaCompraFile-service';
import { ListaCompraApiService } from './Services/listaCompraApi-service/listaCompraApi-service';
import { ListaTiendaApiService } from './Services/listaTiendasApi-service/listaTiendasApi-service';
import { AuthService } from './Services/auth-service/Auth-service';
import { routing } from './Routes/app.routing';
import { AuthGuard } from './guards/auth-guard';
import { MonedaPipe } from './Pipes/FormatoMoneda.Pipe';
import { UnidadesDirective } from './Directives/UnidadesPendientes.Directive';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, Ng2Bs3ModalModule, routing],
  declarations: [AppComponent, FormularioProductoComponent, ListadoProductosComponent, DefaultComponent, LoginComponent,
    ListadoTiendasComponent, FormularioEditTiendaComponent, MonedaPipe, UnidadesDirective],
  bootstrap: [DefaultComponent],
  providers: [ListaComraFileService, ListaCompraApiService, ListaTiendaApiService, AuthService, AuthGuard]
})
export class AppModule { }
