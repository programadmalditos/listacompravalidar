import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../Classes/Tienda';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaTiendaApiService } from '../../Services/listaTiendasApi-service/listaTiendasApi-service';
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'formulario-edittienda.html'

})

export class FormularioEditTiendaComponent implements OnInit {
    model: Tienda = new Tienda(0, '');
    constructor(private route: ActivatedRoute, private router: Router, private servicio: ListaTiendaApiService) { }
    ngOnInit() {
        // Recogemos los parametros de la URL
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.servicio.getTiendaById(params['id']).subscribe(data => {
                    this.model = data;
                }, e => {
                    sessionStorage.removeItem('token');
                    this.router.navigate(['/login']);
                });
            }
            else {
                this.router.navigate(['/tiendas']);
            }
        });
    }


    public submit() {
         this.servicio.updateTienda(this.model).subscribe(data => {
             this.router.navigate(['/tiendas']);
          }, e => {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
    }
}