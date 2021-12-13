/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
switch (browser) {
      case 'Edge':
        alert( "You've got the Edge!" );
        break;
    
      case 'Chrome':
      case 'Firefox':
      case 'Safari':
      case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;
    
      default:
        alert( 'We hope that this page looks ok!' );
    }