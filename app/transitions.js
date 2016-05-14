export default function(){
  this.setDefault({duration: 1000});
  this.transition(
    this.fromRoute('application'),
    this.toRoute('login'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
