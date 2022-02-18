import { Component, Input } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
//
@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent {
  // assim eu posso deixar de inicializar e aceitar um valor indefinido
  @Input() imovel: ImoveisApiModel | undefined;
}
