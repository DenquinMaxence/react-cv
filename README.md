Installer un projet react : `npx create-react-app nom-projet`
<!-- Node sass en 4.14.1 pour cause de compatibilité avec Node, vérifier ici selon votre version Node : https://www.npmjs.com/package/node-sass -->
Bibliothèques utiles : `npm i -s react-router react-router-dom node-sass@4.14.1`

<!--  -->

Reprendre le projet (Installer les packages (dépendances) : `npm i`
Compiler le projet : `npm run build`
Démarrer le projet : `npm run start`

<!-- Simulateur de base de données (API par exemple) -->

Installer json-server : `npm i -g json-server`
Lancer json-server : `Créer une exécution de script dans le package.json : "json-server --w src/assets/db.json --port 3003"`