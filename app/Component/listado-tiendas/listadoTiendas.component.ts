import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../Classes/Tienda';
import { Router } from '@angular/router';
import { ListaTiendaApiService } from '../../Services/listaTiendasApi-service/listaTiendasApi-service';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'listadoTiendas.html'

})

export class ListadoTiendasComponent implements OnInit {
    tiendas: Array<Tienda>;

    constructor(private servicio: ListaTiendaApiService, private router: Router) {

    }
    ngOnInit() {
        this.servicio.getTiendas().subscribe(data => {
            this.tiendas = data;
        }, e => {
            sessionStorage.removeItem('token');
            this.router.navigate(['/login']);
        });
    }

}