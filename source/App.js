enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
//DISPLAY
		
		//PANELS
		{kind: "Panels", name:"samplePanels", fit:true, draggable: false, realtimeFit: true, components: [
		
			//PANEL 1
			{kind: "Scroller", touch: true, components: [
			{content:0, style:"background:white;", components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Afin de calculer votre taux d'alcoolémie, veuillez entrer les informations suivantes :"},
				]},
				//GENRE
				{style:"border: solid 2px lightblue;font-size:20px;font-family:Georgia;font-style:italic;padding:5px;border-radius:5px;width:160px;margin-left:16%;margin-bottom:10px", components: [
					{content: "SEXE :"},
					{kind: "onyx.PickerDecorator", onSelect:"sexeData", components: [
						{style: "min-width:130px"},
						{kind: "onyx.Picker", components: [
							{content: "Sélectionner", active:true},
							{content: "Masculin"},
							{content: "Féminin"},
						]}
					]},
				]},
				//POIDS
				{style:"border: solid 2px lightblue;font-size:20px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:160px;margin-left:16%;margin-bottom:10px", components: [
					{content: "POIDS (en kg):"},
					{kind: "onyx.Input", onchange:"poidsData", style:"width:150px", placeholder:""},
				]},
				//VALIDER
				{kind: "onyx.Button", style:"margin-left:16%;background-color:#11a477;width:68%", content: "VALIDER", ontap: "nextPanel"},
				{name: "sxmPopup", kind: "onyx.Popup", centered: true, floating: true, classes:"onyx-sample-popup", style: "padding: 10px;", content: "Valeurs manquantes : Sexe, Poids"},
				{name: "sxPopup", kind: "onyx.Popup", centered: true, floating: true, classes:"onyx-sample-popup", style: "padding: 10px;", content: "Valeurs manquantes : Sexe"},
				{name: "mPopup", kind: "onyx.Popup", centered: true, floating: true, classes:"onyx-sample-popup", style: "padding: 10px;", content: "Valeurs manquantes : Poids"},
			]},]},
			
			//PANEL 2
			{kind: "Scroller", touch: true, components: [
			{content:1, components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Entrez votre consomation d'alcool :"},
				]},
				//DATE
				{style:"border: solid 2px lightblue;font-size:20px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:160px;margin-left:16%;margin-bottom:10px", components: [
					{content:"HEURE",classes:"onyx-sample-divider"},
					{classes: "onyx-toolbar-inline", components: [
						{kind: "onyx.PickerDecorator", onSelect:"hourData", components: [
							{style: "min-width: 60px;"},
							{kind: "onyx.IntegerPicker", min: 0, max: 23, value: 0},
						]},
						{kind: "onyx.PickerDecorator", onSelect:"minData", components: [
							{style: "min-width: 60px;"},
							{kind: "onyx.IntegerPicker", min: 0, max: 59, value: 0},
						]},
					]},
				]},
				//VERRES
				{style:"border: solid 2px lightblue;font-size:20px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:220px;margin-left:16%;margin-bottom:10px", components: [
					{content: "NOMBRE DE VERRES:"},
					{classes: "onyx-toolbar-inline", components: [
						{kind: "onyx.PickerDecorator", onSelect:"verreData", components: [
							{style: "min-width: 60px;"},
							{kind: "onyx.IntegerPicker", min: 0, max: 20, value: 0}
						]},
						{kind: "onyx.Button", style:"background-color:yellow; width:130px;", content: "INFO", ontap: "info"},
					]},
				]},
				//REPAS
				{style:"border: solid 2px lightblue;font-size:20px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:160px;margin-left:16%;margin-bottom:10px", components: [
					{content: "REPAS"},
					{kind: "onyx.Checkbox", onActivate:"repasData"},
				]},
				//VALIDER
				{kind: "onyx.Button", style:"margin-left:16%;" ,content: "Précédent", ontap: "prevPanel"},
				{kind: "onyx.Button", style:"margin-left:1%; background-color:#11a477; width:51%", content: "VALIDER", ontap: "calculer"},
			]},]},
			
			//PANEL 3
			{kind: "Scroller", touch: true, components: [
			{content:2, components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Résultats du test :"},
					{content: "Ces resultats ne sont donnés qu'à titre indicatif et ne remplacent pas un éthylomètre"},
				]},
				//HEUREPIC
				{style:"border: solid 2px lightblue;font-size:26px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:280px;margin:auto;margin-bottom:10px", components: [
					{name:"tpspic", content:"HEURE DU PIC : "},
				]},
				//TAUXmax
				{style:"border: solid 2px red;font-size:26px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:500px;margin:auto;margin-bottom:10px", components: [
					{name:"tauxmax", content: "TAUX D'ALCOOL MAX : "},
				]},
				//TEMPStaux<=0.5&taux=0
				{style:"border: solid 2px #ffee55;font-size:20px;font-family:Georgia;font-style:italic;border-radius:5px;padding:5px;width:400px;margin:auto;margin-bottom:10px", components: [
					{name:"tpstauxautorisé", content: "Temps avant de pouvoir reconduire : "},
					{name:"tpstauxnul", content: "Temps avant que le taux soit nul  : "},
				]},
				//MESSAGEprev
				{style:"border: solid 2px black;font-size:23px;font-family:Georgia;border-radius:5px;padding:5px;width:400px;margin:auto;margin-bottom:10px", components: [
					{name:"msgData", content:""},
					{kind: "onyx.Button", style:"background-color:yellow;", content: "INFO", ontap: "conduite"},
				]},
			    //VALIDER
				{kind: "onyx.Button", style:"margin-left: 16%;" ,content: "Précédent", ontap: "prevPanel"},
				{kind: "onyx.Button", style:"margin-left: 1%;" ,content: "Recommencer", ontap: "reset"},
				{kind: "onyx.Button", style:"margin-left: 1%;" ,content: "Téléchargement", ontap: "goto6"},
				
			]},]},
			
			//PANEL INFO
			{kind: "Scroller", touch: true, components: [
			{content:3, components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Résultats du test :"},
				]},
				//INFOS
				{style:"border: background:white;text-align:center;font-size:70px;font-family:Georgia;margin-bottom:10px", components: [
					{kind:"Image", src:"assets/examplesverres.jpg"}
				]},
			    //VALIDER
				{kind: "onyx.Button", style:"margin-left: 45%;" ,content: "Précédent", ontap: "backto1"},
			]},]},
			
			//PANEL CONDUITE
			{kind: "Scroller", touch: true, components: [
			{content:4, components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Informations à propos des risques de la conduite en état d'ivresse :"},
				]},
				//TABLEAU
				{content:
				"<table border=1 WIDTH=100%><tr><th>Taux d'alcoolémie<th>Multiplication du risque d'accident<th>Effets</tr><tr><td>0,5g./litre<td>x 2<td>Modification significative des reflexes et du comportement</tr><tr><td>0,7g./litre<td>x 5<td>Aggravation de ces anomalies</tr><tr><td>0,8g./litre<td>x 10<td>Aggravation de ces anomalies</tr><tr><td>2g./litre<td>x 80<td>Ivresse confirmée</tr><tr><td>3g./litre<td>N.C.<td>Risque de coma</tr><tr><td>5g./litre<td>N.C.<td>Risque de mort</tr></table>",
				 allowHtml: true, style:"margin: 1%",
				},
			    //VALIDER
				{kind: "onyx.Button", style:"margin-left: 45%;" ,content: "Précédent", ontap: "backto3"},
			]},]},
			
			//PANEL TELECHARGEMENT
			{kind: "Scroller", touch: true, components: [
			{content:5, components:[
				//HEADER
				{style:"background:white;text-align:center;font-size:70px;font-family:Georgia;padding:8px;margin-bottom:10px", components: [
					{content: "ALCOOTEST"}
				]},
				{style:"background:white;text-align:center;font-size:20px;font-family:Georgia;font-style:italic;padding:8px;margin-bottom:20px", components: [
					{content: "Page de téléchargement de l'application. Pour l'utiliser, il suffit d'extraire le dossier Alcootest puis d'ouvrir Index.html avec votre navigateur internet"},
				]},
				//BOUTON DL
				{kind: "onyx.Button", style:"margin-left: 40%;" ,content: "<a href=http://alcootest.tk/Alcootest.rar>Téléchager l'application</a>", allowHtml: true,},
			    //VALIDER
				{kind: "onyx.Button", style:"margin-left: 1%;" ,content: "Précédent", ontap: "backto3"},
			]},]},
			
		]},
		
	],
//FOCNTIONS
	
	//create=====================================================
	create: function(){
		this.inherited(arguments);
		rep = false
		hr = 0
		min = 0
		vr = 0
		sx = "Sélectionner"
		m = ""
	},
	
	//fctsPANELS=================================================
	prevPanel: function() {
		this.$.samplePanels.previous();
	},
	nextPanel: function() {
		if(sx=="Sélectionner"){
			if(m==""){
				sxmPopup.show()
			} else {
				sxPopup.show()
			}
		} else {
			if(m==""){
				mPopup.show()
			}
		}
		this.$.samplePanels.next();
	},
	reset: function() {
		this.$.samplePanels.setIndex(0);
	},
	info: function(){
		this.$.samplePanels.setIndex(3);
	},
	conduite: function(){
		this.$.samplePanels.setIndex(4);
	},
	backto1: function(){
		this.$.samplePanels.setIndex(1);
	},
	backto3: function(){
		this.$.samplePanels.setIndex(2);
	},
	goto6: function(){
		this.$.samplePanels.setIndex(5);
	},
	//DATA=======================================================
	sexeData: function(inSender, inEvent) {
		sx = inEvent.selected.content;
		if(sx=="Masculin"){
			isx = 0.7;
			} else {
				isx = 0.6;
				}
		console.log(isx);
	},
	poidsData: function(inSender, inEvent) {
		m = inSender.getValue();
		console.log(m);
	},
	hourData: function(inSender, inEvent) {
		hr = inEvent.selected.content;
		console.log(hr);
	},
	minData: function(inSender, inEvent) {
		min = inEvent.selected.content;
		console.log(min);
	},
	verreData: function(inSender, inEvent) {
		vr = inEvent.selected.content;
		console.log(vr)
	},
	repasData: function(inSender, inEvent) {
		rep = inSender.getValue();
		console.log(rep);
	},
	
	//CALCULS===================================================
	calculer: function() {
		this.$.samplePanels.next();
		//siMANGER
		if(rep==true){
			hrpic = hr + 1;
			minpic = min;
		}
		if(rep==false){
			hrpic = hr;
			minpic = min+30;
		}
		//pourque23h59-->00h29
		if(minpic>=60){
			minpic = minpic - 60
			hrpic+=1
		}
		if(hrpic>=24){
			hrpic = 0;
		}
		if(minpic<10){
			minpic="0"+minpic;
		}
		//----------affHEUREPIC
		console.log("heure pic = "+hrpic+":"+minpic);
		this.$.tpspic.setContent("HEURE DU PIC : "+hrpic+"h"+minpic);
		//calcTAUX
		T = Math.round((10*vr)/(isx*m)*100)/100;
		console.log("taux alcool = "+T);
		this.$.tauxmax.setContent("TAUX D'ALCOOL MAX : "+T+" g/L de sang");
		//-----------affMSG
		if(T>=2){
			this.$.msgData.setContent("Si vous pouvez encore utiliser cette application, c'est un miracle. RESTEZ ET DORMEZ.")
		} else {
			if(T>=1&T<2){
				this.$.msgData.setContent("Vous de devriez pas prendre le volant. Laissez-vous reconduire ou passez la nuit là ou vous vous trouvez.")
			} else {
				if(T>0.5&T<1){
					this.$.msgData.setContent("Attention, même si vous vous sentez encore apte à conduire, vous n'en êtes pas en état. Gare aux contraventions.")
				} else {
					this.$.msgData.setContent("Vous pouvez conduire légalement. Faites tout de même attention !")
					}
				}
			}	
		//-----------boucleTPS0.5-0
		i = 0;
		p = 0;
		Tx = T;
		console.log(Tx);
		while(Tx>=0){
			if(Tx>0.5){
				p+=1			
			}
			Tx-=0.15;
			i+=1;
		}
		this.$.tpstauxnul.setContent("Temps avant que le taux soit nul : "+i+"h");
		this.$.tpstauxautorisé.setContent("Temps avant de pouvoir reconduire : "+p+"h");
		
	},
	
});
