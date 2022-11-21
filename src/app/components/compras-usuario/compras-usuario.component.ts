// Angular
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// Services
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CubosServiceService } from 'src/app/services/cubos-service.service';
// Models
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-compras-usuario',
  templateUrl: './compras-usuario.component.html',
  styleUrls: ['./compras-usuario.component.css'],
})
export class ComprasUsuarioComponent implements OnInit {
  public compras!: Compra[];

  constructor(
    private cubosService: CubosServiceService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  /**
   * Carga las compras del usuario del servidor.
   */
  async loadCompras(): Promise<void> {
    /*
      LLamamos al metodo auth para recoger la funcion copia provista del header.
      Para no perder el contexto de la peticion original, le damos el contexto del service al que pertenece.
    */
    const validatedCall = await this.authService.authInterceptor(
      this.cubosService.getComprasUsuario.bind(this.cubosService)
    );

    /*
      La funcion copia de auth es la misma que una peticion http.
      Si hay un código existente en localStorage, pero no es válido, devolverá un error 401 y se reseteara el token.
    */
    validatedCall().subscribe(
      (res: Compra[]) => (this.compras = res),
      (err: HttpErrorResponse) => {
        if (err.status == 401) this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit(): void {
    this.loadCompras();
  }
}
