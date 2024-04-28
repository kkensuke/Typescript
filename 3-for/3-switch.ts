// switch
let aa = 4;
switch (aa) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
  case 6:
    console.log( 'Too large' ); // multiple cases
    break;
  default:
    console.log( "I don't know such values" );
}