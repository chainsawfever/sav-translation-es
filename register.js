const MODULE_ID = 'sav-translation-es';

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: 'Automatically activate translation via Babele',
    hint: 'Automatically implements Babele translations without needing to point to the directory containing the translations.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  Babele.get().registerConverters({
    "effectConverter": (effects, translations) => {
      return effects.map(effect => {
        if(translations) {
          let translation = translations[effect._id];
          if(translation) {
            effect = mergeObject(effect, translation);
          }
        }
        return effect;
      });
    }
  });


  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: MODULE_ID,
      lang: 'es',
      dir: 'compendium/es',
    });
  }
}
