import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();

  constructor() {
  }

  ngOnInit() {
  }

  // -- Fonction appelée après le submit du formulaire
  submitContact() {
    /**
     * Lorsque mon formulaire est soumis, j'émet un
     * évènement qui sera écouté par mon application,
     * et qui récupèrera les données du nouveau contact.
     */
    this.unContactEstCree.emit(this.nouveauContact);

    // -- Je réinitialise le nouveau contact
    this.nouveauContact = new Contact();
  }
}
