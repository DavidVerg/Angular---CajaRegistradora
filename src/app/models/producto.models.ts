export class Producto {

  nombre: string;
  imgUrls: string;
  precio: number;
  cantidad: number;

  constructor(pNombre: string, pImgUrl: string, pPrecio: number) {
    this.nombre = pNombre;
    this.imgUrls = pImgUrl;
    this.precio = pPrecio;
    this.cantidad = 0;
  }

}
