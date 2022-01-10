function Oppgave_3(a, b) {
    var i, j, red, kolonne;
rad=prompt("Skriv inn antall rader i tabellen");
kolonne=prompt("Skriv inn antall kolonner i tabellen");

document.write("<table border='1'>");
for(i=1; 1<=rad; i++) {
    document.write("<tr>");
    for(j=1; j<=kolonne; j++) {
        document.write("<td style=\"padding: 10px;\">Røyken VGS</tr>");
    }
    document.write("</tr>");
}
document.write("</table>");
}
