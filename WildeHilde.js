function basicsAudio()
        {
         var files = [
             'audio/expressions/abierundalimodesisaradlermass.mp3',
             'audio/expressions/afleischfplanzerlbuttschoen.mp3',
             'audio/expressions/AfleischpflanzerlundanErdaepfesalta.mp3', 
             'audio/expressions/aholbshendlbittschaen.mp3',
             'audio/expressions/anRadlerkriechi.mp3',
             'audio/expressions/Aufwiedersehen.mp3',
             'audio/expressions/Bad.mp3',
             'audio/expressions/Baum,ein.mp3',
             'audio/expressions/broadaufbackn.mp3',
             'audio/expressions/dahinten.mp3',
             'audio/expressions/dahoam.mp3',
             'audio/expressions/dahoamisamaalerschoensten.mp3',
             'audio/expressions/dahoamnorm.mp3',
             'audio/expressions/dasmagichauch.mp3',
             'audio/expressions/davorne.mp3',
             'audio/expressions/derbuergameister.mp3',
             'audio/expressions/detrambahn.mp3',
             'audio/expressions/dieBayern.mp3',
             'audio/expressions/dieEnten.mp3',
             'audio/expressions/diekochtaguadebrotsuppn.mp3',
             'audio/expressions/Dreck,ein.mp3',
             'audio/expressions/EichhoernchenschwanzErklaerung_undschnell.mp3',
             'audio/expressions/Eichoernchen.mp3',
             'audio/expressions/eikaffa.mp3',
             'audio/expressions/einBatzen.mp3',
             'audio/expressions/einOhr.mp3',
             'audio/expressions/einpaarWuersteundeineBrezen.mp3',
             'audio/expressions/einWolpertinger.mp3',
             'audio/expressions/fangamandlspuin.mp3',
             'audio/expressions/Fangenspielen.mp3',
             'audio/expressions/Fruehling,der.mp3',
             'audio/expressions/Gabel,eine.mp3',
             'audio/expressions/GehinsBad.mp3',
             'audio/expressions/geldbeitel.mp3',
             'audio/expressions/geradeaus.mp3',
             'audio/expressions/GibmireinStueckBrot.mp3', 
             'audio/expressions/gibmireinStueckZwetschgendatschi.mp3',
             'audio/expressions/griasenagott.mp3',
             'audio/expressions/GruessDich.mp3',
             'audio/expressions/GutenTagzusammen.mp3',
             'audio/expressions/heftigerRegen.mp3',
             'audio/expressions/heidumafiassoweh.mp3',
             'audio/expressions/heisstdas.mp3',
             'audio/expressions/Herbst,der.mp3',
             'audio/expressions/isdesagaudi.mp3',
             'audio/expressions/ja.mp3',
             'audio/expressions/jetztbinichwieddahoam.mp3',
             'audio/expressions/kerngesund.mp3',
             'audio/expressions/LoeffelMesserGabel.mp3',
             'audio/expressions/Oktoberfest.mp3',
             'audio/expressions/Paket,ein.mp3',
             'audio/expressions/Palmkaetzchen.mp3',
             'audio/expressions/pappadeckl.mp3',
             'audio/expressions/Pappkarton.mp3',
             'audio/expressions/pinktlich.mp3',
             'audio/expressions/rundherum1.mp3',
             'audio/expressions/sandesenahuehner.mp3',
             'audio/expressions/Sauwetter.mp3',
             'audio/expressions/sichlustigmachenueber.mp3',
             'audio/expressions/Sommer,der.mp3',
             'audio/expressions/tuamafangamandlspuin.mp3',
             'audio/expressions/weisstdudas.mp3',
             'audio/expressions/wogehtsndazumhauptbahnhof.mp3',
             'audio/expressions/wogehtsndazurwiesn.mp3',
             'audio/expressions/woisduwoshotelis.mp3',
             'audio/expressions/woisnjetztdadieBank.mp3',
             'audio/expressions/wosanders.mp3',
             'audio/expressions/ZahlenHerrOber.mp3',
             'audio/expressions/zoegerndeZustimmung.mp3',
             'audio/expressions/zurueckgehen.mp3'
               
      ]
         var index = Math.floor((Math.random() * files.length));

                var audio = new Audio(files[index]);
                audio.play();
}



function fooddrinksAudio()
            {
                var files = ['audio/food/erdaepfel.mp3',
                    'audio/food/apapadeckl.mp3',
                    'audio/food/Apfelkuechl.mp3',
                    'audio/food/apffemuas.mp3',
                    'audio/food/Betthupferl.mp3',
                    'audio/food/abiersuppen.mp3',
                    'audio/food/abierundalimo.mp3',
                    'audio/food/abroadzeit.mp3',
                    'audio/food/abudermilch.mp3',
                    'audio/food/agelberuebn.mp3',
                    'audio/food/akiachl.mp3',
                    'audio/food/anapfelbutzen.mp3',
                    'audio/food/anguglhupf.mp3',
                    'audio/food/Bier, eineMass.mp3',
                    'audio/food/Bierkrug1.mp3',
                    'audio/food/Bierkrug2.mp3',
                    'audio/food/Brezn, eine.mp3',
                    'audio/food/Brezn.mp3',
                    'audio/food/Brot1.mp3',
                    'audio/food/desisaradlermass.mp3',
                    'audio/food/eineWeisswurstisteineWeisswurst.mp3',
                    'audio/food/einHahn.mp3',
                    'audio/food/eischenka1.mp3',
                    'audio/food/eischenka2.mp3',
                    'audio/food/Entenbraten.mp3',
                    'audio/food/erdaepfel.mp3',
                    'audio/food/Fleischbulette.mp3',
                    'audio/food/Fleischflanzl,ein.mp3',
                    'audio/food/Gemuese.mp3',
                    'audio/food/geraeuchertes.mp3',
                    'audio/food/Haehnchen, gebratenesein.mp3',
                    'audio/food/Hahn.mp3',
                    'audio/food/Hoernchen, ein.mp3',
                    'audio/food/Hollunderbeeren.mp3',
                    'audio/food/ichhobansakrischendurscht.mp3',
                    'audio/food/Kaesespatzen.mp3',
                    'audio/food/Kartoffelbrei.mp3',
                    'audio/food/Kartoffelpuffer.mp3',
                    'audio/food/Kartoffelsuppe.mp3',
                    'audio/food/kleinerHahn.mp3',
                    'audio/food/Leberkaes,ein.mp3',
                    'audio/food/Leberkaesesemmel.mp3',
                    'audio/food/Marmelade.mp3',
                    'audio/food/Mehlschwitze,eine.mp3',
                    'audio/food/Obatzda.mp3',
                    'audio/food/Petersilie,eine.mp3',
                    'audio/food/Pfannkuchen.mp3',
                    'audio/food/Radler_Biersorte.mp3',
                    'audio/food/Rettich,ein.mp3',
                    'audio/food/Zwetschgendatschi.mp3'

                    ];

                var index = Math.floor((Math.random() * files.length));

                var audio = new Audio(files[index]);
                audio.play();
            }

function exclamationsAudio(){

    var files =[
     'audio/eclamations/achgehgehgeh.mp3',
     'audio/eclamations/Aellerbaetsch.mp3',
     'audio/eclamations/asosammahalt.mp3',
     'audio/eclamations/Aufpassen.mp3',
     'audio/eclamations/Batzi.mp3',
     'audio/eclamations/Bauernmaedchen.mp3',
     'audio/eclamations/Bauerntrampel,ein.mp3',
     'audio/eclamations/dasistinOrdnung.mp3',
     'audio/eclamations/desmoginiad.mp3',
     'audio/eclamations/deswarascheenegaudi.mp3',
     'audio/eclamations/deswoisined.mp3',
     'audio/eclamations/duamadochmalangfallen.mp3',
     'audio/eclamations/dubistarichtigerbatzi.mp3',
     'audio/eclamations/dubistheitadramhaparte.mp3',
     'audio/eclamations/gehraus.mp3',
     'audio/eclamations/gehrein.mp3',
     'audio/eclamations/gehzukratmermeinbuglweilsmebeist.mp3',
     'audio/eclamations/gemaaufdauerdult.mp3',
     'audio/eclamations/gemadanzn.mp3',
     'audio/eclamations/gemsmaahoibeja.mp3',
     'audio/eclamations/haeae.mp3',
     'audio/eclamations/hastduandusl.mp3',
     'audio/eclamations/heitgemaaufddult.mp3',
     'audio/eclamations/heitgmeaaufdwiesn.mp3',
     'audio/eclamations/heitgemaaufsoktoberfest.mp3',
     'audio/eclamations/heuteistesschoenwarm.mp3',
     'audio/eclamations/ichmoechteMarmeladeaufsBrot.mp3',
     'audio/eclamations/jamei.mp3',
     'audio/eclamations/jameijamei.mp3',
     'audio/eclamations/jameijameiisdesagaudi.mp3',
     'audio/eclamations/jetza.mp3',
     'audio/eclamations/jetztistesschonspaet.mp3',
     'audio/eclamations/kommgeweida.mp3',
     'audio/eclamations/meiehmschaugo.mp3',
     'audio/eclamations/Mensch,einschlechtgelaunter.mp3',
     'audio/eclamations/miasanmia.mp3',
     'audio/eclamations/miasanianorm.mp3',
     'audio/eclamations/naaajetztmogined.mp3',
     'audio/eclamations/nichtsfuerungut.mp3',
     'audio/eclamations/packmas.mp3',
     'audio/eclamations/Pardon.mp3',
     'audio/eclamations/Passauf.mp3',
     'audio/eclamations/schaumeramaldannsegnmasscho.mp3',
     'audio/eclamations/schamermaldannsegnmaschon.mp3',
     'audio/eclamations/schmeissdochwegdesalteklump.mp3',
     'audio/eclamations/schoninOrdnung.mp3',
     'audio/eclamations/sehrgut.mp3',
     'audio/eclamations/sehrnass.mp3',
     'audio/eclamations/soatheata.mp3',
     'audio/eclamations/werhatderhat.mp3',
     'audio/eclamations/werkoderko.mp3',
     'audio/eclamations/woas.mp3',
     'audio/eclamations/woashastgsagt.mp3'

    ];
    var index = Math.floor((Math.random() * files.length));
    var audio = new Audio(files[index]);
                audio.play();
}
function loveAudio(){

    var files =['audio/love/baerig,dieist.mp3',
    'audio/love/baeriges Maedchen,ein.mp3',
    'audio/love/Bussi.mp3',
    'audio/love/dasisteinschoenesMaedchen.mp3',
    'audio/love/desbuzaldoa.mp3',
    'audio/love/desisaechtebayerin.mp3',
    'audio/love/ichhabedichlieb.mp3',
    'audio/love/idaddirgernanschmatzgebn.mp3',
    'audio/love/ikanntdidawuzln.mp3',
    'audio/love/isdesadotscherl.mp3',
    'audio/love/jabistduakloansmuggerl.mp3',
    'audio/love/Kind,einkleines.mp3',
    'audio/love/Kuss,ein.mp3',
    'audio/love/Liebhaber,ein.mp3',
    'audio/love/meibisduakloansfakl.mp3',
    'audio/love/Spatz,einKosewort.mp3',
    'audio/love/Spatz,meinKosewort.mp3'
    ];
    var index = Math.floor((Math.random() * files.length));
    var audio = new Audio(files[index]);
                audio.play();
}

function swearwordsAudio(){
    var files =[
        'audio/swearwords/asoaoltakampl.mp3',
        'audio/swearwords/Bachratte1.mp3',
        'audio/swearwords/bochratzn.mp3',
        'audio/swearwords/DamischeGretl.mp3',
        'audio/swearwords/damischeGretlwaswuistn.mp3',
        'audio/swearwords/DasisteinPreusse.mp3',
        'audio/swearwords/daswirdeineZiegesein.mp3',
        'audio/swearwords/desisaganzagschertsluda.mp3',
        'audio/swearwords/desisahirsch.mp3',
        'audio/swearwords/desisahos.mp3',
        'audio/swearwords/desisakroah.mp3',
        'audio/swearwords/desisawirklichersaupreis.mp3',
        'audio/swearwords/desWeibda.mp3',
        'audio/swearwords/deswerdasoapagagesein.mp3',
        'audio/swearwords/dieistverrueckt.mp3',
        'audio/swearwords/Frau,verrueckte1.mp3',
        'audio/swearwords/Frau,verrueckte2.mp3',
        'audio/swearwords/Halunke.mp3',
        'audio/swearwords/isdesakomischerstesl.mp3',
        'audio/swearwords/mannaladerhatawampen.mp3',
        'audio/swearwords/Mensch,schlechtgelauntundunangenehm.mp3',
        'audio/swearwords/schaunerdiealtewapperero.mp3',
        'audio/swearwords/Sippschaft_laestigeVerwandschaft.mp3',
        'audio/swearwords/VerrueckteAmsel_Schimpfwortweiblich.mp3',
        'audio/swearwords/VerrueckterMann.mp3',
        'audio/swearwords/Ziege, eine.mp3',
        'audio/swearwords/ausdirwerdkoabayanimmerwern.mp3',
        'audio/swearwords/ausdirwerniaabayawern.mp3',
        'audio/swearwords/ausdirwernieabayawern1.mp3',
        'audio/swearwords/ausdirwirdnieabayawern2.mp3'
    ];
    var index = Math.floor((Math.random() * files.length));
    var audio = new Audio(files[index]);
                audio.play();

}   
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
    e.preventDefault();
    deferredPrompt = e;
})         
window.addEventListener('beforeinstallprompt', (e) =>{
    e.preventDefault();
    deferredPrompt = e;
    btnAdd.style.display = 'block';
})    
btnAdd.addEventListener('click', (e) => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {

        console.log('accepted prompt');
    }
    deferredPrompt = null;
    });
});