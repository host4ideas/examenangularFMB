import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CubosMarcaComponent } from './components/cubos-marca/cubos-marca.component';
import { CubosDetallesComponent } from './components/cubos-detalles/cubos-detalles.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasUsuarioComponent } from './components/compras-usuario/compras-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'compras-usuario',
    component: ComprasUsuarioComponent,
  },
  {
    path: 'cubos-marca/:marca',
    component: CubosMarcaComponent,
  },
  {
    path: 'cubos-detalles/:idcubo',
    component: CubosDetallesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
