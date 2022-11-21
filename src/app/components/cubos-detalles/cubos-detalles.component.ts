// Base
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Models
import { Cubo } from 'src/app/models/cubo';
import { Comentario } from 'src/app/models/comentario';
// Service
import { CubosServiceService } from 'src/app/services/cubos-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
// Rutas
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cubos-detalles',
  templateUrl: './cubos-detalles.component.html',
  styleUrls: ['./cubos-detalles.component.css'],
})
export class CubosDetallesComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Comentario[];

  constructor(
    private cubosService: CubosServiceService,
    private authService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async realizarCompra(): Promise<void> {
    /*
      LLamamos al metodo auth para recoger la funcion copia provista del header.
      Para no perder el contexto de la peticion original, le damos el contexto del service al que pertenece.
    */
    const validatedCall = await this.authService.authInterceptor(
      this.cubosService.realizarCompra.bind(this.cubosService),
      this.cubo.idCubo
    );

    /*
        La funcion copia de auth es la misma que una peticion http.
        Si hay un código existente en localStorage, pero no es válido, devolverá un error 401 y se reseteara el token.
      */
    validatedCall().subscribe(
      (res: any) => this.router.navigate(['/compras-usuario']),
      (err: HttpErrorResponse) => {
        if (err.status == 401) this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Parseamos a número
      const idcubo = params.get('idcubo')!;
      this.cubosService.findCubo(idcubo).subscribe((res) => {
        this.cubo = res;
        this.cubosService
          .getComentariosCubo(this.cubo.idCubo.toString())
          .subscribe((res) => {
            this.comentarios = res;
          });
      });
    });
  }
}
