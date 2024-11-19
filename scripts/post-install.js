const { exec } = require('child_process');
const fs = require('fs');

// Controlla se React Native è installato
const isReactNative = fs.existsSync('node_modules/react-native');

// Esegui il comando solo in ambienti React Native Bare
if (isReactNative) {
  console.log('Configurazione react-native-svg per React Native...');
  exec('npx react-native link react-native-svg', (error, stdout, stderr) => {
    if (error) {
      console.warn(
        'react-native-setup-svg fallito. Ignorato per ambienti non compatibili o già configurati.'
      );
      return;
    }
    console.log(stdout);
  });
} else {
  console.log('Ambiente non React Native rilevato. Nessuna configurazione necessaria.');
}
