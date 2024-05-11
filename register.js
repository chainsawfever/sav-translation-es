Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
      module: 'sav-translation-es',
      lang: 'es',
      dir: 'compendium/es',
		});
	}
});


