/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core
 */
import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {UserApiService} from './services/user-api.service';

/**
 * @Component est ce qu'on appel un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /*template: `
    <h1>Bienvenue au PoleS : {{ title }}</h1>
    <p>Les apprenants crèvent de chaud !</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `],*/
  /**
   * La déclaration des styles avec
   * "StyleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant,
 * mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au Model.
 */
export class AppComponent implements OnInit {

  // -- Déclaration d'une variable
  title = 'Gestion de Contacts';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet Contact
  unContact: Contact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'hugo.liegeard@lepoles.org'
  };

  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'hugo.liegeard@lepoles.org'
    },
    {
      id: 2,
      name: 'Setti BELKACEM',
      username: 'settibelkacem',
      email: 'setti.belkacem@lepoles.org'
    },
    {
      id: 3,
      name: 'Andrée BAPTISTE',
      username: 'andreebaptiste',
      email: 'andree.baptiste@lepoles.org'
    },
    {
      id: 4,
      name: 'Akbar KHAN',
      username: 'akbarkhan',
      email: 'akbar.khan@lepoles.org'
    },
  ];

  /**
   * Ma fonction showContact, prend un contact
   * en paramètre.
   * @param {Contact} contactCliqueParMonUtilisateur
   */
  showContact(contactCliqueParMonUtilisateur: Contact) {
    this.contactActif = contactCliqueParMonUtilisateur;
  }

  addContactToArray(nouveaucontact: Contact) {
    // -- Ajout du contact dans le tableau
    this.mesContacts.push(nouveaucontact);
  }

  constructor(private userApiService: UserApiService) {}

  /**
   * La fonction ngOnInit est appelée automatiquement
   * par Angular, au chargement de l'application.
   */
  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      users => {
        // this.mesContacts = users;
      }
    );
  }
}
