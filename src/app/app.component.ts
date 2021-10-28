import { Producto } from './models/producto.models';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaComida: Producto[];
  listaBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor() {

    this.productosSeleccionados = [];

    this.listaComida = [
      new Producto('Papa rellena', 'https://recetasdecocinafaciles.net/wp-content/uploads/2018/01/papa-rellena.jpg', 1200),
      new Producto('Empanada', 'https://cdn.colombia.com/gastronomia/2011/08/05/empanadas-criollas-1633.webp', 1000),
      new Producto('Panzeroti', 'http://www.germendetrigo.com.co/wp-content/uploads/2020/05/pazerotti-600x600.jpg', 1800),
      new Producto('Palito de queso', 'https://3.bp.blogspot.com/-cfe-6hbMNxw/VS3jAi4tUZI/AAAAAAAACMI/06H6HcpjrgI/s1600/DedosQueso%2BSyS1.jpg', 800),
      new Producto('Torta de carne', 'https://panaderia-ceipa.webnode.com.co/_files/200000004-936899461d/Sin%20t%C3%ADtuloDGF.jpg', 2000),
      new Producto('Buñuelo', 'https://cdn.colombia.com/gastronomia/2011/08/05/bunuelos-1628.webp', 500),
    ];

    this.listaBebida = [
      new Producto('Jugo natural', 'https://k-listo.com/wp-content/uploads/2020/04/JUGOS_NATURALES.jpg', 2500),
      new Producto('Milo en leche', 'https://cafamfloresta.com.co/wp-content/uploads/2021/01/MILO.jpg', 2500),
      new Producto('Gaseosa', 'https://colsubsidio.vteximg.com.br/arquivos/ids/166506-1200-1200/7702535011089.jpg?v=637299797417230000', 2000),
      new Producto('Botella de agua', 'https://plazavea.vteximg.com.br/arquivos/ids/530057-1000-1000/20032267.jpg?v=637419672840930000', 1800),
    ];

  }

  onProductoSeleccionado($event) {
    /* this.productosSeleccionados.push($event); */
    const productoEncontrado = this.productosSeleccionados.find(Producto => Producto.nombre === $event.nombre);

    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }

  }

}
