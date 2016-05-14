export default function(){
  this.setDefault({duration: 500});
  this.transition(
    this.toRoute('index'),
    this.use('toLeft')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('login'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('register'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
