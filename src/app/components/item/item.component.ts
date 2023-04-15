import { ListaDeCompraService } from "./../../service/lista-de-compra.service";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Item } from "src/app/interfaces/iItem";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  @Output() limpandoLista = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor(private service: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  checkedItem() {
    this.item.comprado = !this.item.comprado;
    this.service.checkedItem(this.item, this.item.comprado);
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy() {
    console.log("deletado com sucesso")
  }

}
