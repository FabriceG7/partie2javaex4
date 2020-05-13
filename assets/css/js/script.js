// déclaration de la function pageload qui masque les blocks au chargement de la page
window.onload = function pageLoad() {
  document.getElementById('blockLine').style.visibility = 'hidden';
}
// déclaration de la function onScroll qui permet de faire réapparaitre les blocks au scroll de la fenêtre
window.onscroll = function onScroll() {
  // récupération de la valeur correspondant au nombre de pixels scrollés verticalement
  var scrollTopValue = window.scrollY;
  // Condition permettant de faire réapparaitre les blocks lorsque l'on a scrollé 300px
  if (scrollTopValue > 200) {
    document.getElementById('blockLine').style.visibility = 'visible';
  }
}
