export default function(){
  //this.setDefault({duration: 300});
  //this.transition(
  //  this.toRoute('index'),
  //  this.use('toLeft')
  //);
  //this.transition(
  //  this.fromRoute('index'),
  //  this.toRoute('login'),
  //  this.use('toLeft'),
  //  this.reverse('toRight')
  //);
  //this.transition(
  //  this.fromRoute('index'),
  //  this.toRoute('register'),
  //  this.use('toLeft'),
  //  this.reverse('toRight')
  //);
  //this.transition(
  //  this.toRoute('dashboard'),
  //  this.use('toUp'),
  //  this.reverse('toDown')
  //);
  this.transition(
    this.toRoute('search'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
