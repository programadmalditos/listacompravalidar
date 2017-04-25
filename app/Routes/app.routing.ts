import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Component/login-component/login.component';
import { ListadoTiendasComponent} from '../Component/listado-tiendas/listadoTiendas.component';
import { FormularioEditTiendaComponent} from '../Component/formularioEditar-tienda/formulario-edittienda.component';
import { AppComponent } from '../Component/main/app.component';
import { AuthGuard } from '../guards/auth-guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: AppComponent,canActivate: [AuthGuard] },
    { path: 'tiendas', component: ListadoTiendasComponent,canActivate: [AuthGuard] },
    { path: 'tiendas/:id', component: FormularioEditTiendaComponent,canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);