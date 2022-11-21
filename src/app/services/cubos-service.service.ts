// Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Environment variables
import { environment } from 'src/environments/environment';

// Para hacerlo global si necesidad de importarlo en app module
@Injectable({
  providedIn: 'root',
})
export class CubosServiceService {
  constructor(private _http: HttpClient) {}

  /**
   * Petición get para recoger todos los cubos
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getCubos(): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Cubos';
    return this._http.get(request);
  }

  /**
   * Petición get para recoger todas las marcas
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getMarcas(): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Cubos/Marcas';
    return this._http.get(request);
  }

  /**
   * Petición get para recoger todas las marcas
   * @param {string} marca Marca de la cual recoger todos sus cubos
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getCubosMarca(marca: string): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Cubos/CubosMarca/' + marca;
    return this._http.get(request);
  }

  /**
   * Petición get para recoger solo un elemento
   * @param {string} id ID del cubo para la petición
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  findCubo(id: string): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Cubos/' + id;
    return this._http.get(request);
  }

  /**
   * Petición get para recoger solo un elemento
   * @param {string} idcubo ID del cubo para la petición
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getComentariosCubo(idcubo: string): Observable<any> {
    const request =
      environment.API_TIENDAS +
      '/api/ComentariosCubo/GetComentariosCubo/' +
      idcubo;
    return this._http.get(request);
  }

  /**
   * Petición get para recoger todos los elementos
   * @param {HttpHeaders} headers Insertamos los headers en authService para securizar la peticion
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getPerfilUsuario(headers: HttpHeaders): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Manage/PerfilUsuario';
    return this._http.get(request, { headers: headers });
  }

  /**
   * Petición get para recoger todas las compras del usuario
   * @param {HttpHeaders} headers Insertamos los headers en authService para securizar la peticion
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  getComprasUsuario(headers: HttpHeaders): Observable<any> {
    const request = environment.API_TIENDAS + '/api/Compra/ComprasUsuario';
    return this._http.get(request, { headers: headers });
  }

  /**
   * Petición get para recoger todas las compras del usuario
   * @param {string} idcubo ID del cubo para la petición
   * @param {HttpHeaders}  Insertamos los headers en authService para securizar la peticion
   * @returns {Observable<any>} Observable al cual nos suscribiremos en el componente
   */
  realizarCompra(idcubo: string, headers: HttpHeaders): Observable<any> {
    headers.set('Cotent-Type', 'application/json');

    const request =
      environment.API_TIENDAS + '/api/Compra/InsertarPedido/' + idcubo;
    return this._http.post(request, null, { headers: headers });
  }
}
