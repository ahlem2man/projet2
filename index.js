const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(Example app listening on port ${port}!));


const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Effets divers en Javascript</title>
    <script type="text/javascript">
function setColor (color) {
  if (color == 'black') {
    objet = document.getElementById("para")
    objet.innerHTML =
      '<button id="rouge" onclick="setColor(\'red\');">rouge</button>' +
      '<button id="vert" onclick="setColor(\'green\');">vert</button>' +
      '<button id="bleu" onclick="setColor(\'blue\');">bleu</button>' +
      '<button id="blanc" onclick="setColor(\'white\');">blanc</button>' +
      ' <i>Nouveau contenu</i> ' +
      '<button id="gris" onclick="setColor(\'gray\');">gris</button>';
  }
  else {
    document.getElementById("body").style.backgroundColor = color;
  }
  return 0;
}
    </script>
  </head>
<body id="body">
  <p id="para">
    <button id="rouge" onclick="setColor('red');">rouge</button>
    <button id="vert" onclick="setColor('green');">vert</button>
    <button id="bleu" onclick="setColor('blue');">bleu</button>
    <button id="blanc" onclick="setColor('white');">blanc</button>
    <button id="noir" onclick="setColor('black');">remplacer par texte</button>
    <button id="gris" onclick="setColor('gray');">gris</button>
  </p>
</body>
</html>
