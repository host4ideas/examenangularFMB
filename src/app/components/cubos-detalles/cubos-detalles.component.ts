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
    this.cubosService
      .realizarCompra(this.cubo.idCubo.toString())
      .subscribe((res) => {
        this.router.navigate(['/compras-usuario']);
      });
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
