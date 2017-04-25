import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../../rxjs/index';
import { Tienda } from '../../Classes/Tienda';

@Injectable()
export class ListaTiendaApiService {

    private apiUrl = 'http://apiproductos.azurewebsites.net/api/';

    constructor(private http: Http) { }

    getTiendas(): Observable<Tienda[]> {

        return this.http.get(this.getUrl('tienda'), this.getOptions()).map(this.getDatos).catch(this.error);
    }
    getTiendaById(id:number):Observable<Tienda>{
        return this.http.get(this.getUrl('tienda')+'/'+id, this.getOptions()).map(this.getDatos).catch(this.error);
    }

    addTienda(model: Tienda): Observable<Tienda> {
        return this.http.post(this.getUrl('tienda'), model, this.getOptions()).map(this.getDatos).catch(this.error);
    }
    removeTienda(model: Tienda) {
        return this.http.delete(this.getUrl('tienda') + '/' + model.id, this.getOptions()).catch(this.error);
    }
    updateTienda(model: Tienda) {
        return this.http.put(this.getUrl('tienda'), model, this.getOptions()).catch(this.error);
    }

    private error(error: any) {
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        return Observable.throw(msg);
    }

    private getDatos(data: Response) {
        let datos = data.json();
        return datos || [];
    }
    private getUrl(modelo: String) {
        return this.apiUrl + modelo;
    }
    private getOptions(): RequestOptions {
        let auth = new Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') });
        let options = new RequestOptions({ headers: auth });
        return options;

    }
}