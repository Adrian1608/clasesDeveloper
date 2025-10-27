/*El router maneja un custom event en el que se va a mandar el nombre de la ruta*/
/*Este nombre debe coincidir con la key de las routes*/
export const Router = {
  navigate(view) {
    window.dispatchEvent(new CustomEvent('navigate', {
      detail: { view }
    }));
  }
}
