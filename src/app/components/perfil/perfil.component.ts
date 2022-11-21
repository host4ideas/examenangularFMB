// Angular
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// Services
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CubosServiceService } from 'src/app/services/cubos-service.service';
// Models
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public perfil!: User;

  constructor(
    private authService: AuthServiceService,
    private cubosService: CubosServiceService
  ) {}

  /**
   * Carga los empleados del servidor. Actualiza la variable public plantilla para mostrar los empleados al usuario.
   */
  async loadPerfil(): Promise<void> {
    /*
      LLamamos al metodo auth para recoger la funcion copia provista del header.
      Para no perder el contexto de la peticion original, le damos el contexto del service al que pertenece.
    */
    const validatedCall = await this.authService.authInterceptor(
      this.cubosService.getPerfilUsuario.bind(this.cubosService)
    );

    /*
      La funcion copia de auth es la misma que una peticion http.
      Si hay un código existente en localStorage, pero no es válido, devolverá un error 401 y se reseteara el token.
    */
    validatedCall().subscribe(
      (res: User) => {
        this.perfil = res;
      },
      (err: HttpErrorResponse) => {
        if (err.status == 401) {
          this.authService.logout();
        }
      }
    );
  }

  ngOnInit(): void {
    this.loadPerfil();
  }
}
