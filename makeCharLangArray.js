cl = []   // maps each character to a language
totalLangs = 0


function createCLArray () {
    // creates the array cl, which used to be read in from char_lang.js
    // globals 
    //      cl, an array of objects that links a given character with languages where it is used
    //      langs, the array in app-charuse/langs.js
    //      totalLangs
    
    for (var lang in langs) {
        var list = ''
        var auxlist = ''
        window.totalLangs++
        
        if (langs[lang].letter) list += langs[lang].letter
        if (langs[lang].mark) list += langs[lang].mark
        if (langs[lang].number) list += langs[lang].number
        if (langs[lang].punctuation) list += langs[lang].punctuation
        if (langs[lang].symbol) list += langs[lang].symbol
        if (langs[lang].separator) list += langs[lang].separator
        if (langs[lang].other) list += langs[lang].other

        if (langs[lang].letteraux) auxlist += langs[lang].letteraux
        if (langs[lang].markaux) auxlist += langs[lang].markaux
        if (langs[lang].numberaux) auxlist += langs[lang].numberaux
        if (langs[lang].punctuationaux) auxlist += langs[lang].punctuationaux
        if (langs[lang].symbolaux) auxlist += langs[lang].symbolaux
        if (langs[lang].separatoraux) auxlist += langs[lang].separatoraux
        if (langs[lang].otheraux) auxlist += langs[lang].otheraux

        if (langs[lang].aux) auxlist += langs[lang].aux
        if (debug) console.log(list,lang,auxlist)
        
        if (list != '') buildCLArray(list,auxlist,lang)
        }
    if (debug) console.log(cl)
    console.log('langs:',window.totalLangs)
    console.log('total chars:',cl.length)
    }



function buildCLArray (list, auxlist, lang) { 
    if (debug) console.log('UPDATECL: list ',list, 'auxlist ',auxlist, 'lang', lang)
	list = list.trim()
	auxlist = auxlist.trim()
	list = list.replace(/\s+/g,'')
	auxlist = auxlist.replace(/\s+/g,'')
	var listarray = [...list]
	var auxarray = [...auxlist]

    var i, dec
	for (i=0;i<listarray.length;i++) {
        dec = listarray[i].codePointAt(0)
        if (cl[dec]) cl[dec][0].push(lang)
        else {
            cl[dec] = [[],[]]
            cl[dec][0].push(lang)
            }
        }
	for (i=0;i<auxarray.length;i++) {
        dec = auxarray[i].codePointAt(0)
        if (cl[dec]) cl[dec][1].push(lang)
        else {
            cl[dec] = [[],[]]
            cl[dec][1].push(lang)
            }
        }
	}



