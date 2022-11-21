// Base
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// Models
import { User } from 'src/app/models/user';
// Service
import { AuthServiceService } from 'src/app/services/auth-service.service';
// Rutas
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Form inputs
  @ViewChild('cajaNombre') cajaNombre!: ElementRef;
  @ViewChild('cajaEmail') cajaEmail!: ElementRef;
  @ViewChild('cajaPass') cajaPass!: ElementRef;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  login(): void {
    const nombre = this.cajaNombre.nativeElement.value;
    const email = this.cajaEmail.nativeElement.value;
    const pass = this.cajaPass.nativeElement.value;

    if (email && pass) {
      const newUser = new User(0, nombre, email, pass);

      this.authService.register(newUser).then(() => {
        this.router.navigate(['/login']);
      });
    }
  }

  ngOnInit(): void {
    this.authService.checkUser().then((user) => {
      if (user) {
        this.router.navigate(['/perfil']);
      }
    });
  }
}
