var wikilink = "";
var wikilinkText = "";

var title = "";
var body = "";

//REGELN! Monat kleingeschrieben, März mit ae geschrieben, Trennzeichen {, positionen wie unten
//0 Monat, 1 Tag, 2 Titel, 3 Body, 4 Link
var massacres = [
		//JANUAR
		"januar{8{Attentat von Tucson{Beim Attentat von Tucson wurden am 8. Januar 2011 kurz nach zehn Uhr morgens Ortszeit Besucher einer öffentlichen Bürgerfragestunde der demokratischen Kongressabgeordneten Gabrielle Giffords attackiert.{https://de.wikipedia.org/wiki/Attentat_von_Tucson",
        "januar{22{Massaker auf der Avenida Roosevelt{Das Massaker auf Avenida Roosevelt in Managua am 22. Januar 1967 war eine blutige Episode in der Geschichte Nicaraguas. {https://de.wikipedia.org/wiki/Massaker_auf_der_Avenida_Roosevelt",
        //FEBRUAR
        "februar{28{Zwischenfall vom 28. Februar 1947{Der Zwischenfall vom 28. Februar (chinesisch 二二八事件, Pinyin èrèrbā shìjiàn), auch 228-Zwischenfall oder 228-Massaker, war ein im Jahr 1947 die ganze taiwanische Insel erfassender Aufstand gegen den KMT-Militärgouverneur Chen Yi (陳儀, Chén Yí). Heute ist der 28. Februar in Taiwan im Gedenken daran als Friedenstag ein staatlicher Feiertag.{https://de.wikipedia.org/wiki/Zwischenfall_vom_28._Februar_1947",
        //MÄRZ
        "maerz{2{Aschuramassaker{Das Aschuramassaker am 2. März 2004 in Kerbela und Bagdad war eine Serie von Bombenexplosionen, Mörser-, Granaten- und Raketenangriffen, die mindestens 178 schiitische Muslime tötete und mindestens 500 verletzte.{https://de.wikipedia.org/wiki/Aschuramassaker",
        "maerz{7{Massaker von Açıkyol{Das Massaker von Açıkyol fand am 7. März 1987 im kurdischen Dorf Açıkyol (ursprünglicher Name: Haferi[1]) im Landkreis Nusaybin in der Provinz Mardin statt. Täter waren Kämpfer der PKK, Opfer waren kurdische Dorfbewohner. Das Dorf hatte damals ca. 200 Einwohner. Es liegt ca. 15 km nördlich von Nusaybin nahe der syrischen Grenze.{https://de.wikipedia.org/wiki/Massaker_von_A%C3%A7%C4%B1kyol",
        //APRIL
        "april{{Massaker von Adana{Das Massaker von Adana (auf türkisch/osmanisch: Adana İğtişaşı = Adana-Unruhen, Adana Vakası = Adana-Vorfall) ereignete sich im April 1909 im türkischen Vilâyet Adana und wurde an der armenischen Bevölkerung von Adana verübt. Das Massaker, dem 20.000 bis 30.000 Armenier zum Opfer fielen, wurde von der konservativ-islamischen Regierung des Osmanischen Reiches veranlasst und zielte darauf ab, die Präsenz einer nicht-islamischen Bevölkerung in dem Vilâyet Adana zu beseitigen.{https://de.wikipedia.org/wiki/Massaker_von_Adana",
        "april{13{Massaker von Amritsar{Das Massaker von Amritsar, seltener auch Jallianwala-Bagh-Massaker, wurde am 13. April 1919 in der nordindischen Stadt Amritsar von britischen Soldaten und Gurkhas an Sikhs, Muslimen und Hindus verübt, die gegen die Inhaftierung von zwei nationalindischen Führungspersönlichkeiten protestierten. Betroffen waren Männer, Frauen und Kinder gleichermaßen.{https://de.wikipedia.org/wiki/Massaker_von_Amritsar",
        //MAI
        "mai{4{Angriff auf Cassinga{Der Angriff auf Cassinga (auch bekannt als Cassinga-Massaker[1]) am 4. Mai 1978 auf einen Stützpunkt der SWAPO bei Cassinga im südlichen Angola durch südafrikanische Streitkräfte (SADF), bei dem etwa 600 Menschen ums Leben kamen, war ein Ereignis im Namibischen Befreiungskampf. Der Angriff wird in Namibia als Cassinga-Massaker und in Südafrika überwiegend als Schlacht um Cassinga bezeichnet.{https://de.wikipedia.org/wiki/Angriff_auf_Cassinga",
        "mai{7{Angriff auf die Kirchen von Imbaba{Der Angriff auf die Kirchen von Imbaba am 7. Mai 2011 war eine Serie von Angriffen, die gegen koptisch-christliche Kirchen im Arbeiterviertel Imbaba der ägyptischen Hauptstadt Kairo gerichtet waren. {https://de.wikipedia.org/wiki/Angriff_auf_die_Kirchen_von_Imbaba",
        //JUNI
        //JULI
        "juli{17{Altonaer Blutsonntag{Als Altonaer Blutsonntag wird der 17. Juli 1932 bezeichnet, an dem es bei einem Werbemarsch der SA durch die damals zur preußischen Provinz Schleswig-Holstein gehörende Großstadt Altona (1937 durch das Groß-Hamburg-Gesetz nach Hamburg eingemeindet) zu gewalttätigen Auseinandersetzungen kam, bei denen 18 Personen erschossen wurden.{https://de.wikipedia.org/wiki/Altonaer_Blutsonntag",
        "juli{29{Massaker von Altamira 2019{Das Massaker von Altamira fand am 29. Juli 2019 im brasilianischen Gefängnis von Altamira, dem Centro de Recuperação Regional de Altamira, statt. Es befindet sich an der Avenida Tancredo Neves südlich der Stadt im Bundesstaat Pará.{https://de.wikipedia.org/wiki/Massaker_von_Altamira_2019",
        "juli{31{Massaker von Aussig{Das Massaker von Aussig (auch Aussig-Massaker genannt) war ein gegen die deutsche Zivilbevölkerung gerichteter Pogrom am 31. Juli 1945 in Ústí nad Labem (Aussig) in der Tschechoslowakei. {https://de.wikipedia.org/wiki/Massaker_von_Aussig",
        //AUGUST
        "august{{Massaker von Abschwangen{Abschwangen (heute: Tischino, im Rajon Bagrationowsk) war ein kleines Dorf bei Preußisch Eylau in Ostpreußen ca. 30 km südlich von Königsberg (Oblast Kaliningrad, Russland). Dort wurde im August 1914 ein Massaker an deutschen Zivilisten verübt.{https://de.wikipedia.org/wiki/Massaker_von_Abschwangen",
        "august{14{Massaker von Awa’uq{Das Massaker von Awa’uq (englisch Awa’uq Massacre) war ein Massenmord von Russen an 500–2000[1] oder 2500–3000[2] Sugpiaq (Die Konjagen[3] oder Kodiak-Insel Yupik), der Zivilbevölkerung in Russisch-Amerika, der sich am 14. August 1784 ereignete.{https://de.wikipedia.org/wiki/Massaker_von_Awa%E2%80%99uq",
        "august{24{Angriff auf das Hotel Mona (Mogadischu){Bei dem Angriff auf das Hotel Mona in Mogadischu wurden am 24. August 2010 mindestens 32 Menschen[1] getötet, darunter sechs Abgeordnete, vier Regierungsmitarbeiter und der stellvertretende Regierungschef, Abdirahman Hadschi Adab Ibbi. Die Angreifer waren Angehörige der al-Shabaab-Milizen. Diese bekannten sich auch zu dem Anschlag.{https://de.wikipedia.org/wiki/Angriff_auf_das_Hotel_Mona_(Mogadischu)",
        //SEPTEMBER
        "september{{Armenierpogrom in Baku 1918{Das Armenierpogrom in Baku 1918 war ein Ausbruch von Massengewalt, der während des Russischen Bürgerkriegs in der Hauptstadt der Demokratischen Republik Aserbaidschan stattfand. Enver Paschas osmanische „Armee des Islam“ und ihre lokalen aserbaidschanischen Verbündeten töteten Armenier und andere Nichtmuslime, nachdem sie am 15. September 1918 Baku erobert hatten.{https://de.wikipedia.org/wiki/Armenierpogrom_in_Baku_1918",
        //OKTOBER
        "oktober{{Massaker von Asaba{Das Massaker von Asaba ereignete sich im Oktober 1967 während des Biafra-Krieges, bei dem nigerianische Regierungstruppen gegen die Abspaltung Biafras (ehemalige Südost-Region von Nigeria) kämpften.{https://de.wikipedia.org/wiki/Massaker_von_Asaba",
        //NOVEMBER
        //DEZEMBER
		];

window.onload = function init(){
	document.getElementById("title").innerHTML = "<br>";
	document.getElementById("body").innerHTML = "<br><br>";
	document.getElementById("wikipedia").innerHTML = "<br>";
}	
function submiting(){
	
	var mnth = document.getElementById("month").value;
	var dy = document.getElementById("day").value;
	
	var currentMassacre = "";
	
	
	for (const massacre of massacres){

		currentMassacre = massacre.split("{");

		var result1 = mnth.localeCompare(currentMassacre[0]) == 0;
		var result2 = dy.localeCompare(currentMassacre[1]) == 0;
		var result3 = currentMassacre[1].localeCompare("") == 0;
		
		if(result1 && result2){	
			doMagic(currentMassacre);
			return;
		}

		if(result1 && result3){
			doMagic(currentMassacre);
			return;
		}
	}
	
	doMagic([]);
}

function doMagic(currentMassacre){

	var result1 = currentMassacre.length > 0;
	
	if(result1){
		wikilink = currentMassacre[4];
		wikilinkText = currentMassacre[2];

		title = currentMassacre[2];
		body = currentMassacre[3];
	}
	else{
		var wikilink = "https://de.wikipedia.org/w/index.php?title=Kategorie:Massaker&pageuntil=Racak%0AMassaker+von+Ra%C4%8Dak#mw-pages";
		var wikilinkText = "Massakrieren";

		var title = "Huch? Da war (noch) kein Massaker an deinem Geburtstag!"
		var body = "Wie <i>schade</i>... du kannst dich aber auch einfach mit dem Link unten mit anderen Massakern beschäftigen!"
	}
	document.getElementById("title").innerHTML = "<h3>" + title + "</h3>";
	document.getElementById("body").innerHTML = body;
	document.getElementById("wikipedia").innerHTML = "<a href=\"" + wikilink + "\" target=\"_blank\">Weiteres zum " + wikilinkText + "<\a> gibt es auf Wikipedia!";
}
