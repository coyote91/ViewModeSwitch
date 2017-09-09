/**
 * cbpViewModeSwitch.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function() {

	var container = document.getElementById( 'cbp-vm' ),
		optionSwitch = Array.prototype.slice.call( container.querySelectorAll( 'div.cbp-vm-options > a' ) );

		/*
		El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
		El array original no se modificará.   https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice

		https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=831:call-javascript-diferencia-con-apply-constructores-con-herencia-en-cadena-invocar-this-ejemplos-cu01150e&catid=78:tutorial-basico-programador-web-javascript-desde-&Itemid=206
		*/

	function init() {
		optionSwitch.forEach( function( el ) {
			el.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				_switch( this );
			}, false );
		} );
	}

	function _switch( opt ) {
		// remove other view classes and any any selected option     //Eliminar otras clases de vista y cualquier opción seleccionada
		optionSwitch.forEach(function(el) {
			container.classList.remove(  el.getAttribute( 'data-view' )  );
			el.classList.remove('cbp-vm-selected');
			//classie.remove( container, el.getAttribute( 'data-view' ) );
			//classie.remove( el, 'cbp-vm-selected' );
		});


		// add the view class for this option          //Agregue la clase de vista para esta opción
		container.classList.add( opt.getAttribute( 'data-view' ) );
		//classie.add( container, opt.getAttribute( 'data-view' ) );

		// this option stays selected            //Esta opción permanece seleccionada
    opt.classList.add('cbp-vm-selected');
		//classie.add( opt, 'cbp-vm-selected' );

	}

	init();

})();
