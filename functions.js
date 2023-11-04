debug = false


var scriptData = {
'ascii':{ name:'ASCII only', block:"" },
'adlm':{ name:'Adlam', block:"adlm" },
'arab':{ name:'Arabic', block:"arab" },
'armn':{ name:'Armenian', block:"armn" },
'bali':{ name:'Balinese', block:"bali" },
'bamu':{ name:'Bamum', block:"bamu" },
'bass':{ name:'Bassa Vah', block:"bassavah" },
'batk':{ name:'Batak', block:"batk" },
'beng':{ name:'Bengali (Bangla)', block:"bengali" },
'bugi':{ name:'Buginese', block:"buginese" },
'buhd':{ name:'Buhid', block:"" },
'cakm':{ name:'Chakma', block:"" },
'cans':{ name:'Canadian Syllabics', block:"cans" },
'cher':{ name:'Cherokee', block:"cherokee" },
'cyrl':{ name:'Cyrillic', block:"cyrillic" },
'deva':{ name:'Devanagari', block:"devanagari" },
'dsrt':{ name:'Deseret', block:"" },
'elba':{ name:'Elbasan', block:"" },
'ethi':{ name:'Ethiopic', block:"ethiopic" },
'geok':{ name:'Khutsuri', block:"" },
'geor':{ name:'Georgian', block:"georgian" },
'glag':{ name:'Glagolitic', block:"" },
'grek':{ name:'Greek', block:"greek" },
'gujr':{ name:'Gujarati', block:"gujarati" },
'guru':{ name:'Gurmukhi', block:"gurmukhi" },
'hani':{ name:'Han', block:"" },
'hano':{ name:'Hanunoo', block:"" },
'hebr':{ name:'Hebrew', block:"hebrew" },
'java':{ name:'Javanese', block:"javanese" },
'kali':{ name:'Kayah Li', block:"kali" },
'khoj':{ name:'Khojki', block:"" },
'khmr':{ name:'Khmer', block:"khmer" },
'knda':{ name:'Kannada', block:"" },
'kpel':{ name:'Kpelle', block:"" },
'kthi':{ name:'Kaithi', block:"" },
'lana':{ name:'Tai Tham', block:"taitham" },
'laoo':{ name:'Lao', block:"lao" },
'latn':{ name:'Latin', block:"latin" },
'lisu':{ name:'Lisu', block:"lisu" },
'lepc':{ name:'Lepcha', block:"lepc" },
'mand':{ name:'Mandaic', block:"mandaic" },
'marc':{ name:'Marchen', block:"" },
'mend':{ name:'Mende Kikakui', block:"" },
'mlym':{ name:'Malayalam', block:"malayalam" },
'mong':{ name:'Mongolian', block:"mongolian" },
'mroo':{ name:'Mro', block:"mroo" },
'mymr':{ name:'Myanmar', block:"myanmar" },
'nagm':{ name:'Nag Mundari', block:"nagm" },
'nand':{ name:'Nandinagari', block:"" },
'newa':{ name:'Newa', block:"newa" },
'nkoo':{ name:'N’Ko', block:"nko" },
'olck':{ name:'Ol Chiki', block:"santali" },
'orya':{ name:'Oriya', block:"Oriya" },
'ogam':{ name:'Ogham', block:"" },
'osge':{ name:'Osage', block:"Osage" },
'osma':{ name:'Osmanya', block:"" },
'perm':{ name:'Old Permic', block:"" },
'phag':{ name:'Phags-pa', block:"" },
'rohg':{ name:'Hanifi Rohingya', block:"rohg" },
'runr':{ name:'Runic', block:"runic" },
'shrd':{ name:'Sharada', block:"" },
'shaw':{ name:'Shavian', block:"" },
'sinh':{ name:'Sinhala', block:"sinhala" },
'sund':{ name:'Sundanese', block:"sundanese" },
'syrc':{ name:'Syriac', block:"syriac" },
'syrn':{ name:'Eastern Syriac', block:"syriac" },
'syrj':{ name:'Western Syriac', block:"syriac" },
'tagb':{ name:'Tagbanwa', block:"" },
'taml':{ name:'Tamil', block:"tamil" },
'tavt':{ name:'Tai Viet', block:"taiviet" },
'tale':{ name:'Tai Le', block:"taile" },
'talu':{ name:'New Tai Lü', block:"newtailue" },
'telu':{ name:'Telugu', block:"telugu" },
'tfng':{ name:'Tifinagh', block:"tifinagh" },
'tglg':{ name:'Tagalog', block:"" },
'thai':{ name:'Thai', block:"thai" },
'thaa':{ name:'Thaana', block:"thaana" },
'tibt':{ name:'Tibetan', block:"tibetan" },
'tirh':{ name:'Tirhuta', block:"" },
'vaii':{ name:'Vai', block:"vai" },
'yiii':{ name:'Yi', block:"" },
'macrolanguage':{ name:'Macrolanguage', block:"" },

}









function makeBCPList () {
	// creates the markup for the datalist selection control
	out = ''
	datalist = ''
	array = []
	for (l in langs) array.push(l)
	array.sort()
	for (var i=0;i<array.length;i++) {
		out += '<option value="'+array[i]+'">'+array[i]+' '+langs[array[i]].name+'</option>\n'
		datalist += '<option value="'+array[i]+' '+langs[array[i]].name+'">'+array[i]+' '+langs[array[i]].name+'</option>\n'
		}
	document.getElementById('totalLanguages').textContent = array.length
	document.getElementById('languageSelector').innerHTML = out
	document.getElementById('datalist').innerHTML = datalist
	}


function makeLangList () {
	out = ''
	for (l in langs) out += '<option value="'+l+'">'+langs[l].name+'</option>\n'
	return out
	}

function listLangsByRegion () {
    var regionList = { eur:[], wasia:[], casia:[], sasia:[], seasia:[], nasia:[], easia:[], afr:[], oce:[], carib:[], sam:[], cam:[], nam:[] }
    for (l in langs) {
        var language = Object.assign({bcp:l}, langs[l])
        regionList[langs[l].region].push(language)
        }
	out = ''
	for (r in regionList) {
        switch (r) {
            case 'afr': region = 'Africa';break
            case 'oce': region = 'Oceania';break
            case 'eur': region = 'Europe';break
            case 'nam': region = 'Northern America';break
            case 'cam': region = 'Central America';break
            case 'sam': region = 'South America';break
            case 'wasia': region = 'Western Asia';break
            case 'casia': region = 'Central Asia';break
            case 'nasia': region = 'Northern Asia';break
            case 'sasia': region = 'South Asia';break
            case 'seasia': region = 'South East Asia';break
            case 'easia': region = 'East Asia';break
            case 'carib': region = 'Caribbean';break
            }
        out += '<tr><th>'+region+'</th><td>'+regionList[r].length+' languages: '
        for (let l=0;l<regionList[r].length;l++ ) {
           out += '<span onclick="showLanguage(\''+regionList[r][l].bcp+'\'); document.getElementById(\'regionByScriptDetail\').open = false;">'+regionList[r][l].name.replace(/ \([^\)]+\)/g,'')+'</span>, '
            }
        out += '</td></tr>'
        }
	return out
	}
// regions:
// nam (Northern America), sam (South America), cam (Central America), carib (Caribbean)
// eur (Europe - includes Russia to Urals and Georgia, but not Armenia or Azerbaijan)
// easia (East Asia - includes China, Mongolia, Japan, Korea)
// nasia (Northern Asia - Russia east of Urals)
// seasia (Southeast Asia - including Indonesia, Philippines
// casia (Central Asia - north of Iran, S of Russia, W of China)
// wasia (Western Asia - includes Armenian, Azerbaijan, Turkey, & middle east)
// afr (Africa)
// oce (Oceania - includes Australia, NZ, and Pacific Islands)


function listLangsByScript () {
    // code to find out what script tags are there
    //var myset = new Set([])
    //for (l in langs) {
    //    if (myset.has(langs[l].script)) { }
    //    else myset.add(langs[l].script)
    //    }
    //console.log(myset)

    var regionList = { ascii:[], adlm:[], arab:[], armn:[], bali:[], bamu:[], bass:[], batk:[], beng:[], bugi:[], buhd:[], cans:[], cakm:[], cher:[], cyrl:[], deva:[], ethi:[], geor:[], grek:[], gujr:[], guru:[], hano:[], hebr:[], java:[], kali:[], knda:[], khmr:[], laoo:[], latn:[], lepc:[], limb:[], lisu:[], mlym:[], mand:[], mong:[], mroo:[], mymr:[], talu:[], nagm:[],newa:[], nkoo:[], olck:[], orya:[], osge:[], rohg:[], shrd:[], sinh:[], sund:[], sunu:[], syrc:[], syrn:[], syrj:[], tale:[], lana:[], tagb:[], tavt:[], taml:[], telu:[], thaa:[], thai:[], tibt:[], tfng:[], vaii:[], yiii:[], macrolanguage:[] }
    for (l in langs) {
        var language = Object.assign({bcp:l}, langs[l])
        regionList[langs[l].script].push(language)
        }
	out = ''
	for (r in regionList) {
		region = getScriptName(r)
        out += '<tr><th>'+region+'</th><td>'+regionList[r].length+' languages: '
        for (let l=0;l<regionList[r].length;l++ ) {
           out += '<span onclick="showLanguage(\''+regionList[r][l].bcp+'\'); document.getElementById(\'langByScriptDetail\').open = false;">'+regionList[r][l].name.replace(/ \([^\)]+\)/g,'')+'</span>'
           if (l<regionList[r].length-1) out += ', '
            }
        out += '</td></tr>'
        }
	return out
	}


function getScriptName (s) { 
	// returns a name for a script subtag
	switch (s) {
		case 'ascii': script = 'ASCII only';break
		case 'adlm': script = 'Adlam';break
		case 'arab': script = 'Arabic';break
		case 'armn': script = 'Armenian';break
		case 'bali': script = 'Balinese';break
		case 'bamu': script = 'Bamum';break
		case 'bass': script = 'Bassa Vah';break
		case 'batk': script = 'Batak';break
		case 'beng': script = 'Bengali (Bangla)';break
		case 'bugi': script = 'Buginese';break
		case 'buhd': script = 'Buhid';break
		case 'cakm': script = 'Chakma';break
		case 'cans': script = 'Canadian Syllabics';break
		case 'cher': script = 'Cherokee';break
		case 'cyrl': script = 'Cyrillic';break
		case 'deva': script = 'Devanagari';break
		case 'dsrt': script = 'Deseret';break
		case 'elba': script = 'Elbasan';break
		case 'ethi': script = 'Ethiopic';break
		case 'geok': script = 'Khutsuri';break
		case 'geor': script = 'Georgian';break
		case 'glag': script = 'Glagolitic';break
		case 'grek': script = 'Greek';break
		case 'gujr': script = 'Gujarati';break
		case 'guru': script = 'Gurmukhi';break
		case 'hani': script = 'Han';break
		case 'hano': script = 'Hanunoo';break
		case 'hebr': script = 'Hebrew';break
		case 'java': script = 'Javanese';break
		case 'kali': script = 'Kayah Li';break
		case 'khoj': script = 'Khojki';break
		case 'khmr': script = 'Khmer';break
		case 'knda': script = 'Kannada';break
		case 'kpel': script = 'Kpelle';break
		case 'kthi': script = 'Kaithi';break
		case 'lana': script = 'Tai Tham';break
		case 'laoo': script = 'Lao';break
		case 'latn': script = 'Latin';break
		case 'lepc': script = 'Lepcha';break
		case 'lisu': script = 'Lisu';break
		case 'mand': script = 'Mandaic';break
		case 'marc': script = 'Marchen';break
		case 'mend': script = 'Mende Kikakui';break
		case 'mlym': script = 'Malayalam';break
		case 'mong': script = 'Mongolian';break
		case 'mroo': script = 'Mro';break
		case 'mymr': script = 'Myanmar';break
		case 'nagm': script = 'Nag Mundari';break
		case 'nand': script = 'Nandinagari';break
		case 'newa': script = 'Newa';break
		case 'olck': script = 'Ol Chiki';break
		case 'orya': script = 'Oriya';break
		case 'ogam': script = 'Ogham';break
		case 'osge': script = 'Osage';break
		case 'osma': script = 'Osmanya';break
		case 'mong': script = 'Mongolian';break
		case 'newa': script = 'Newa';break
		case 'nkoo': script = 'N’Ko';break
		case 'perm': script = 'Old Permic';break
		case 'phag': script = 'Phags-pa';break
		case 'rohg': script = 'Hanifi Rohingya';break
		case 'runr': script = 'Runic';break
		case 'shrd': script = 'Sharada';break
		case 'shaw': script = 'Shavian';break
		case 'sinh': script = 'Sinhala';break
		case 'sund': script = 'Sundanese';break
		case 'syrc': script = 'Syriac';break
		case 'syrn': script = 'Eastern Syriac';break
		case 'syrj': script = 'Western Syriac';break
		case 'tagb': script = 'Tagbanwa';break
		case 'taml': script = 'Tamil';break
		case 'tavt': script = 'Tai Viet';break
		case 'tale': script = 'Tai Le';break
		case 'talu': script = 'New Tai Lü';break
		case 'telu': script = 'Telugu';break
		case 'tfng': script = 'Tifinagh';break
		case 'tglg': script = 'Tagalog';break
		case 'thai': script = 'Thai';break
		case 'thaa': script = 'Thaana';break
		case 'tibt': script = 'Tibetan';break
		case 'tirh': script = 'Tirhuta';break
		case 'vaii': script = 'Vai';break
		case 'yiii': script = 'Yi';break
		case 'macrolanguage': script = 'Macrolanguage';break
		default: script = 'Unknown script'
		}
	
	return script
	}




function findChars (str) {
	//str.replace(/[\s]+/g,'')
	str = convertEscapes(str)
	var chars = [...str]
	var out = ''
	for (i=0;i<chars.length;i++){
		cp = chars[i].codePointAt(0)
		if (cp>127) {
			out += '<tr><th>'+chars[i]+'</td>'
			if (cl[cp]) {
				out += '<td>'
				languages = cl[cp][0]
				auxlanguages = cl[cp][1]
				var languageNames = ''
				var population = 0
				for (let l=0;l<languages.length;l++) {
					//languageNames += langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')
					languageNames += '<span onclick="showLanguage(\''+languages[l]+'\')">'+langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')+'</span>'
					if (l<languages.length-1) languageNames += ', '
					speakerNum = langs[languages[l]].speakers.replace(/~/,'')
					speakerNum = speakerNum.replace(/\?/,'0')
					population += parseInt(speakerNum)
					}
                if (languages.length>0 && auxlanguages.length>0) languageNames += ', '
				for (let l=0;l<auxlanguages.length;l++) {
					//languageNames += langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')
					languageNames += '<span style="font-style:italic" onclick="showLanguage(\''+auxlanguages[l]+'\')">'+langs[auxlanguages[l]].name.replace(/ \([^\)]+\)/g,'')+'</span>'
					if (l<auxlanguages.length-1) languageNames += ', '
					speakerNum = langs[auxlanguages[l]].speakers.replace(/~/,'')
					speakerNum = speakerNum.replace(/\?/,'0')
					population += parseInt(speakerNum)
					}
				//out += languageNames+' ('+languages.length+' languages)</td>'
                totallanguages = languages.length+auxlanguages.length
				out += totallanguages+' languages: '+languageNames+'</td>'
				out += '<td>'+population.toLocaleString('en')+'</td>'
				}
			else out += '<td>Unknown</td><td>-</td>'
			out += '</tr>'
			}
		}
	return out
	}


function copyToClipboard (chars) { 
	// copies characters to clipboard when you click on an icon	
	document.getElementById('clipboardStore').value = chars
	
	document.getElementById('clipboardStore').focus()
	document.getElementById('clipboardStore').select()
	document.execCommand('copy')
	}


function getAllOLD (which) { 
	// copies characters to clipboard when you click on the stats
	if (which === 'total') {
		out = ''
		if (document.getElementById('letterCell')) out += document.getElementById('letterCell').textContent
		if (document.getElementById('markCell')) out += document.getElementById('markCell').textContent
		if (document.getElementById('punctuationCell')) out += document.getElementById('punctuationCell').textContent
		if (document.getElementById('numberCell')) out += document.getElementById('numberCell').textContent
		if (document.getElementById('symbolCell')) out += document.getElementById('symbolCell').textContent
		out = out.replace(/\s+/g,'')
		}
	else {
		out = document.getElementById(which).textContent
		out = out.replace(/\s+/g,'')
		}
	
	document.getElementById('clipboardStore').value = out
	
	document.getElementById('clipboardStore').focus()
	document.getElementById('clipboardStore').select()
	document.execCommand('copy')
	}



function getAll () { 
	// returns a list of all characters except deprecated and infrequent
    out = ''
    if (document.getElementById('letterCell')) out += document.getElementById('letterCell').textContent
    if (document.getElementById('markCell')) out += document.getElementById('markCell').textContent
    if (document.getElementById('punctuationCell')) out += document.getElementById('punctuationCell').textContent
    if (document.getElementById('numberCell')) out += document.getElementById('numberCell').textContent
    if (document.getElementById('symbolCell')) out += document.getElementById('symbolCell').textContent
    out = out.replace(/\s+/g,'')
    
    return out
	}


function getCharsOnRow (node) {
    // return a list of characters in a row for processing by the right column
    spans=node.parentNode.parentNode.querySelectorAll('.c')
    chars=''
    for (i=0;i<spans.length;i++) chars+=spans[i].textContent
    return chars
    }


function addSpacesTo (str) {
    // adds spaces to a string, used for preparing list of characters for font app
    array = [...str]
    return array.join(' ')
    }


function addRightColContent (charlist, lang) {
    var out = `<td class="links"><span title="Copy to clipboard" onclick="copyToClipboard('${ charlist }')"><img src="icons/copy.png"></span></td>`
    out += '<td class="links" style="position:relative;" onmouseover="this.lastChild.style.display=\'block\'" onmouseout="this.lastChild.style.display=\'none\'"><img src="icons/share.png" alt="Send characters." title="Send characters." class="ulink"/>'
    out += `<div class="popup" style="position:absolute; right:0;">
    <div><a href="../app-analysestring/index.html?chars=${ charlist }" target="_blank">Show details</a></div>
    <div><a href="../uniview/index.html?charlist=${ charlist }" target="_blank">Show characters in UniView</a></div>
    <div><a href="../app-listcharacters/index.html?chars=${ charlist }" target="_blank">List characters by block</a></div>
    <div><a href="../scripts/fontlist/index.html?script=${langs[lang].script}&text=${ addSpacesTo(charlist) }" target="_blank">Send to Font lister</a></div>`
    if (langs[lang].fonts) out += `<div><a target="_blank" href="${langs[lang].fonts}/index.html?showFonts=true&text=${ charlist }">Show in character app</a></div>`
    out += '</div>'
    out += '</td>'

    return out
    }


function showLanguage (lang) {
    // writes out the content for a given language
    // globals
    // langs: stored in langs.js
    // charData:
    // scriptData
    
	var out = ''
	var charList, cp
    var stats = 'Non-ASCII character count: &nbsp; '
    var total = 0

	// check this is a valid langtag
	if (!langs[lang]) { alert("The tag "+lang+" was not recognised."); return }
	
	if (langs[lang].silcode) var langcode = langs[lang].silcode
	else langcode = lang

	out += '<tr><td colspan="2" class="links" style="text-align:right; padding: 0; font-size: 80%; vertical-align:bottom;"><span style="cursor:pointer; margin-right:1em; color:teal;" onclick="toImg(document.getElementById(\'letterCell\')); toImg(document.getElementById(\'markCell\')); toImg(document.getElementById(\'punctuationCell\')); toImg(document.getElementById(\'numberCell\')); toImg(document.getElementById(\'infrequentCell\')); toImg(document.getElementById(\'symbolCell\')); this.style.color=\'#ccc\';">Convert to images</span></td><td class="links" style="padding:0;">&nbsp;</td></tr>'
	
	// name
	out += '<tr><th>Name</th><td class="large">'+langs[lang].name+'&nbsp; <a href="../app-subtags/?lookup='+lang+'" target="_blank" style="font-size:80%;">['+lang+']</a>'+'&nbsp; <span class="scriptName" style="font-size:60%;">'+langs[lang].script+'</span></td><td class="links">&nbsp;<!--a href="../scripts/links?iso='+langs[lang].script+'" target="_blank"><img src="lists.png" alt="Find links for this script" title="Find links for this script"/></a--></td></tr>'

	if (!langs[lang].redirect) {
	
	// local name
	if (langs[lang].local) out += '<tr><th>Autonym</th><td class="localCell">'+langs[lang].local+'</td></td><td class="links"></td></tr>'
	
	if (langs[lang].rtl) var rtl = true
	else rtl = false
	
	var cumulative = ''  // gathers all characters, mainly for font parameter
    var main, aux
	
	// characters
	if (langs[lang].letter || langs[lang].letteraux) {
        if (langs[lang].letter) main = langs[lang].letter
        else main = ''
        if (langs[lang].letteraux) aux = langs[lang].letteraux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' letters, '
        total += rowCount
		out += '<tr><th>Letters<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="letterCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (var j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
			else out += charList[j]
			out += '</span> ' 
			}
        if (langs[lang].letteraux) {
            out += ' + '
            charList = [...langs[lang].letteraux]
            //thisRow += charList.join('')
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<span title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</span> '
                }
            }
        out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
	if (langs[lang].mark || langs[lang].markaux) {
        if (langs[lang].mark) main = langs[lang].mark
        else main = ''
        if (langs[lang].markaux) aux = langs[lang].markaux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' marks, '
        total += rowCount
		out += '<tr><th>Marks<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="markCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+'\u00A0'+charList[j]+'</a>'
			else out += '\u00A0'+charList[j]
			out += '</span> ' 
			}
        if (langs[lang].markaux) {
            out += ' + '
            charList = [...langs[lang].markaux]
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<span title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</span> ' 
                }
            }
		out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
	if (langs[lang].number || langs[lang].numberaux) {
        if (langs[lang].number) main = langs[lang].number
        else main = ''
        if (langs[lang].numberaux) aux = langs[lang].numberaux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' numbers, '
        total += rowCount
		out += '<tr><th>Numbers<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="numberCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
			else out += charList[j]
			out += '</span> ' 
			}
        if (langs[lang].numberaux) {
            out += ' + '
            charList = [...langs[lang].numberaux]
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<span title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</span> ' 
                }
            }
		out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
	if (langs[lang].punctuation || langs[lang].punctuationaux) {
        if (langs[lang].punctuation) main = langs[lang].punctuation
        else main = ''
        if (langs[lang].punctuationaux) aux = langs[lang].punctuationaux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' punctuation, '
        total += rowCount
		out += '<tr><th>Punctuation<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="punctuationCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
			else out += charList[j]
			out += '</span> ' 
			}
        if (langs[lang].punctuationaux) {
            out += ' + '
            charList = [...langs[lang].punctuationaux]
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<span title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</span> ' 
                }
            }
		out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
	if (langs[lang].symbol || langs[lang].symbolaux) {
        if (langs[lang].symbol) main = langs[lang].symbol
        else main = ''
        if (langs[lang].symbolaux) aux = langs[lang].symbolaux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' symbols, '
        total += rowCount
		out += '<tr><th>Symbols<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="symbolCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
			else out += charList[j]
			out += '</span> ' 
			}
        if (langs[lang].symbolaux) {
            out += ' + '
            charList = [...langs[lang].symbolaux]
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<span title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</span> ' 
                }
            }
		out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
	if (langs[lang].other || langs[lang].otheraux) {
        if (langs[lang].other) main = langs[lang].other
        else main = ''
        if (langs[lang].otheraux) aux = langs[lang].otheraux
        else aux = ''
        cumulative += main + aux
        rowCount = [...main].length+[...aux].length
        stats += rowCount + ' other'
        total += rowCount
		out += '<tr><th>Other<br><span class="rowCount">'+rowCount+'</span></th><td class="large" id="otherCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
        
		charList = [...main]
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<bdi title="'+name+'" class="c">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
			else out += charList[j]
			out += '</bdi> ' 
			}
        if (langs[lang].otheraux) {
            out += ' + '
            charList = [...langs[lang].otheraux]
            for (j=0;j<charList.length;j++) { 
                cp = charList[j].codePointAt(0).toString(16).toUpperCase()
                while (cp.length<4) cp = '0'+cp
                name = 'U+'+cp+' '+charData[charList[j]]
                out += '<bdi title="'+name+'" class="c small">'
                if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+ charList[j]+'</a>'
                else out += charList[j]
                out += '</bdi> ' 
                }
            }
		out += '</td>'
        out += addRightColContent(main+aux, lang)
        out += '</tr>'
		}
			
	// stats
	stats += ' : &nbsp; total ' + total
	if (langs[lang].aux || langs[lang].deprecated) stats += ' &nbsp; &nbsp; + ( '
	if (langs[lang].aux) {
		charList = [...langs[lang].aux]
        stats += charList.length + ' possible '
		out += '<tr><th>Investigate&#x202F;!<br><span class="rowCount">'+charList.length+'</span></th><td class="small" id="infrequentCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'
            if (langs[lang].script && langs[lang].script) out += '<a target="c" href="../scripts/'+langs[lang].script+'/block.html#char'+cp+'">'+'\u00A0'+charList[j]+'</a>'
			else out += '\u00A0'+charList[j]
			out += '</span> ' 
			}
		out += '</td>'
		out += '<td class="links"><span title="Copy to clipboard" onclick="copyToClipboard(\''+charList.join('')+'\')"><img src="icons/copy.png"></span></td>'
        out += '<td class="links" style="position:relative;" onmouseover="this.lastChild.style.display=\'block\'" onmouseout="this.lastChild.style.display=\'none\'"><img src="icons/share.png" alt="Send characters." title="Send characters." class="ulink"/>'
        out += `<div class="popup" style="position:absolute; right:0;">
        <div><a href="/app-analysestring/?chars=${charList.join('')}" target="_blank">Show details</a></div>
        <div><a href="/uniview?charlist=${charList.join('')}" target="_blank">Show characters in UniView</a></div>
        <div><a href="/app-listcharacters?chars=${charList.join('')}" target="_blank">List characters by block</a></div>
        <div><a href="../scripts/fontlist?script=${langs[lang].script}&text=${charList.join(' ')}" target="_blank">Send to Font lister</a></div>`
        if (langs[lang].fonts) out += `<div><a target="_blank" href="${langs[lang].fonts}?showFonts=true&text=${charList.join('')}">Show in character app</a></div>`
        out += '</div>'
		}
	if (langs[lang].deprecated) {
		charList = [...langs[lang].deprecated]
        if (total > 0) stats += ', '
        stats += charList.length + ' not used'
        total += charList.length
		out += '<tr><th>Not used!<br><span class="rowCount">'+charList.length+'</span></th><td class="small"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td>'
		out += '<td class="links"><span title="Copy to clipboard" onclick="copyToClipboard(\''+charList.join('')+'\')"><img src="icons/copy.png"></span></td>'
        out += '<td class="links" style="position:relative;" onmouseover="this.lastChild.style.display=\'block\'" onmouseout="this.lastChild.style.display=\'none\'"><img src="icons/share.png" alt="Send characters." title="Send characters." class="ulink"/>'
        out += `<div class="popup" style="position:absolute; right:0;">
        <div><a href="/app-analysestring/?chars=${charList.join('')}" target="_blank">Show details</a></div>
        <div><a href="/uniview?charlist=${charList.join('')}" target="_blank">Show characters in UniView</a></div>
        <div><a href="/app-listcharacters?chars=${charList.join('')}" target="_blank">List characters by block</a></div>
        <div><a href="../scripts/fontlist?script=${langs[lang].script}&text=${charList.join(' ')}" target="_blank">Send to Font lister</a></div>`
        if (langs[lang].fonts) out += `<div><a target="_blank" href="${langs[lang].fonts}?showFonts=true&text=${charList.join('')}">Show in character app</a></div>`
        out += '</div>'
        out += '</td></tr>'
		}
	if (langs[lang].aux || langs[lang].deprecated) stats += ' )'
    var cumulativeSpaced = [...cumulative]
	cumulativeSpaced = cumulativeSpaced.join(' ')
	if (!langs[lang].letter && !langs[lang].mark && !langs[lang].punctuation && !langs[lang].number && !langs[lang].symbol && !langs[lang].other) {
		out += '<tr><th></th><td class="large">ASCII only</td></tr>'
		stats = ''
		}
	else stats = '<tr><th></th><td style="border:0; font-size: 70%; font-style: italic; line-height: 1; color:gray;">'+stats+'  <input  id="clipboardStore" style="height:2px;width:2px;margin-left:2em;vertical-align:middle;"/></td>'
		stats += `<td class="links"><span title="Copy to clipboard" onclick="copyToClipboard(getAll())"><img src="icons/copy.png"></span></td>`
        stats += '<td class="links" style="position:relative;" onmouseover="this.lastChild.style.display=\'block\'" onmouseout="this.lastChild.style.display=\'none\'"><img src="icons/share.png" alt="Send characters." title="Send characters." class="ulink"/>'
        stats += `<div class="popup" style="position:absolute; right:0;">
        <div><a href="/app-analysestring/?chars=${cumulative}" target="_blank">Show details</a></div>
        <div><a href="/uniview?charlist=${cumulative}" target="_blank">Show characters in UniView</a></div>
        <div><a href="/app-listcharacters?chars=${cumulative}" target="_blank">List characters by block</a></div>
        <div><a href="../scripts/fontlist?script=${langs[lang].script}&text=${cumulativeSpaced}" target="_blank">Send to Font lister</a></div>`
        if (langs[lang].fonts) stats += `<div><a target="_blank" href="${langs[lang].fonts}?showFonts=true&text=${cumulative}">Show in character app</a></div>`
        stats += '</div>'
        stats += '</td></tr>'
/*
	// source
	var sources = langs[lang].source.split(',')
	// check whether there is only a UDHR source
	if (sources.length === 1 && sources[0].match('udhr_')) var warning = true
	else warning = false
	out += '<tr><th>Sources</th><td class="sources">'
	for (let i=0;i<sources.length;i++) {
		if (i>0) out += ', '
		if (sources[i].startsWith('cldr_')) out += '<a target="_blank" href="https://unicode-org.github.io/cldr-staging/charts/37/summary/'+sources[i].substr(5)+'.html">CLDR</a>'
		else if (sources[i].startsWith('udhr_')) out += '<a target="_blank" href="https://unicode.org/udhr/d/'+sources[i]+'.html">UDHR</a>'
		else if (sources[i].startsWith('ethn_')) out += '<a target="_blank" href="https://ethnologue.com/language/'+sources[i].substr(5)+'">Ethnologue</a>'
		else if (sources[i].startsWith('http')) out += '<a target="_blank" href="'+sources[i]+'">link</a>'
		else if (sources[i] === 'r12a' || sources[i] === 'CLDR' || sources[i] === 'UDHR') out += sources[i]
		else out += '<a  target="_blank" href="https://github.com/r12a/app-charuse/commit/'+sources[i]+'">GitHub</a>'
		}
	if (warning) out += '<br/><span class="udhrWarning">The sole source for this language is the translation of the Universal Declaration of Human Rights. That text may not contain all characters needed for this orthography.</span>'
	out += '</td></td><td class="links" colspan="2">&nbsp;<!--a href="https://en.wikipedia.org/w/index.php?search='+langs[lang].name+'%20language" target="_blank"><img src="wikipedia.png" alt="Search Wikipedia for this language" title="Search Wikipedia for this language" style="width:unset;" /></a><a href="https://www.ethnologue.com/language/'+langcode+'" target="_blank"><img src="ethn.png" alt="Look this up in the Ethnologue." title="Look this up in the Ethnologue." style="width:unset;" class="ulink"/></a--></td></tr>'
    
    // links
    out += `<tr>
    <th>Links</th><td id="externalLinks">
    <a href="https://www.ethnologue.com/language/${ langcode }" target="_blank" title="Look this up in the Ethnologue.">Ethnologue</a> • 
    <a href="https://en.wikipedia.org/w/index.php?search=${ langs[lang].name }%20language" target="_blank" title="Search Wikipedia for this language">Wikipedia</a> • 
    <a href="../scripts/fontlist/?script=${ langs[lang].script }" target="_blank">Fonts</a> • `
    if (langs[lang].fonts) out += `<a href="${langs[lang].fonts}" target="_blank">Character app</a> • `
    out += `<a href="../scripts/links?iso=${ langs[lang].script }" target="_blank">Other links</a>
    </td>
    </tr>`
*/
	out += stats
	
	// change font
	out += '<th></th><td style="border: 0; padding-top:0; font-size: 70%;font-style: italic;line-height: 1;color: gray;">Change font to <input id="fontChange" onChange="setFont(this.value)" type="text" style="border-radius: 5px; border: 1px solid #ccc;"/>'
	
	//temp = [...cumulative]
	//parameter = temp.join(' ')
	//out += ' •  &nbsp; <a target="_blank" href="../scripts/fontlist/?script='+langs[lang].script+'&text='+parameter+'">Show in font lister</a>'
	
	//if (langs[lang].fonts) {
	//	if (langs[lang].aux) parameter += "\n"+langs[lang].aux
	//	out += ' •  &nbsp; <a target="_blank" href="'+langs[lang].fonts+'?showFonts=true&text='+parameter+'">Show in character app</a>'
	//	}
	out += '</td>'
	

	// source
	var sources = langs[lang].source.split(',')
	// check whether there is only a UDHR source
	if (sources.length === 1 && sources[0].match('udhr_')) var warning = true
	else warning = false
	out += '<tr><th>Sources</th><td class="sources">'
	for (let i=0;i<sources.length;i++) {
		if (i>0) out += ', '
		if (sources[i].startsWith('cldr_')) out += '<a target="_blank" href="https://unicode-org.github.io/cldr-staging/charts/37/summary/'+sources[i].substr(5)+'.html">CLDR</a>'
		else if (sources[i].startsWith('udhr_')) out += '<a target="_blank" href="https://unicode.org/udhr/d/'+sources[i]+'.html">UDHR</a>'
		else if (sources[i].startsWith('ethn_')) out += '<a target="_blank" href="https://ethnologue.com/language/'+sources[i].substr(5)+'">Ethnologue</a>'
		else if (sources[i].startsWith('http')) out += '<a target="_blank" href="'+sources[i]+'">link</a>'
		else if (sources[i] === 'r12a' || sources[i] === 'CLDR' || sources[i] === 'UDHR') out += sources[i]
		else out += '<a  target="_blank" href="https://github.com/r12a/app-charuse/commit/'+sources[i]+'">GitHub</a>'
		}
	if (warning) out += '<br/><span class="udhrWarning">The sole source for this language is the translation of the Universal Declaration of Human Rights. That text may not contain all characters needed for this orthography.</span>'
	out += '</td></td><td class="links" colspan="2">&nbsp;<!--a href="https://en.wikipedia.org/w/index.php?search='+langs[lang].name+'%20language" target="_blank"><img src="wikipedia.png" alt="Search Wikipedia for this language" title="Search Wikipedia for this language" style="width:unset;" /></a><a href="https://www.ethnologue.com/language/'+langcode+'" target="_blank"><img src="ethn.png" alt="Look this up in the Ethnologue." title="Look this up in the Ethnologue." style="width:unset;" class="ulink"/></a--></td></tr>'
    
    // links
    out += `<tr>
    <th>Links</th><td id="externalLinks">
    <a href="https://www.ethnologue.com/language/${ langcode }" target="_blank" title="Look this up in the Ethnologue.">Ethnologue</a> • 
    <a href="https://en.wikipedia.org/w/index.php?search=${ langs[lang].name }%20language" target="_blank" title="Search Wikipedia for this language">Wikipedia</a> • 
    <a href="../scripts/fontlist/?script=${ langs[lang].script }" target="_blank">Fonts</a> • `
    if (langs[lang].fonts) out += `<a href="${langs[lang].fonts}" target="_blank">Character app</a> • `
    if (langs[lang].linked) out += `<a href="${langs[lang].linked}" target="_blank">Orthography description</a> • `
    out += `<a href="../scripts/links?iso=${ langs[lang].script }" target="_blank">Other links</a>
    </td>
    </tr>`


    // region
	switch (langs[lang].region) {
		case 'afr': region = 'Africa';break
		case 'oce': region = 'Oceania';break
		case 'eur': region = 'Europe';break
		case 'nam': region = 'Northern America';break
		case 'cam': region = 'Central America';break
		case 'sam': region = 'South America';break
		case 'wasia': region = 'Western Asia';break
		case 'casia': region = 'Central Asia';break
		case 'nasia': region = 'Northern Asia';break
		case 'sasia': region = 'South Asia';break
		case 'seasia': region = 'South East Asia';break
		case 'easia': region = 'East Asia';break
		case 'carib': region = 'Caribbean';break
		}
	out += '<tr><th>Region</th><td>'+region
	if (langs[lang].countries) out += '<span class="countries">'+langs[lang].countries+'</span>'
	out += '</td></td><td class="links"><!--a href="https://www.ethnologue.com/language/'+langcode+'" target="_blank"><img src="ethn.png" alt="Look this up in the Ethnologue." title="Look this up in the Ethnologue." class="ulink"/></a--></td></tr>'
	
	// speakers
	if (langs[lang].speakers === '?') var speakers = 'Not known'
	else { 
		speakers = langs[lang].speakers.replace(/~/,'')
		speakers = parseInt(speakers).toLocaleString('en')
		}
	//speakers = speakers.replace(/\?/,'0')
	out += '<tr><th>Native speakers</th><td>'+speakers+'</td></tr>'
	/*out += `<tr>
        <th>Links</th><td id="externalLinks">
        <a href="https://www.ethnologue.com/language/${ langcode }" target="_blank" title="Look this up in the Ethnologue.">Ethnologue</a> • 
        <a href="https://en.wikipedia.org/w/index.php?search=${ langs[lang].name }%20language" target="_blank" title="Search Wikipedia for this language">Wikipedia</a> • 
        <a href="../scripts/links?iso=${ langs[lang].script }" target="_blank">Other links</a>
        </td>
        </tr>`*/
	} // ends stuff cut out for macrolanguages etc.
	
	// local name
	//if (langs[lang].local) out += '<tr><th>Autonym</th><td class="localCell">'+langs[lang].local+'</td></td><td class="links"></td></tr>'


    // related
	if (langs[lang].related) {
		langs[lang].related = langs[lang].related.replace(/\[/g, '<i>')
		langs[lang].related = langs[lang].related.replace(/\]/g, '</i>')
	
		lines = langs[lang].related.split('\n')
		inList = false
		for (let l=0;l<lines.length;l++) {
			if (lines[l].startsWith('*')) {
				if (inList) lines[l] = '<li>'+lines[l].substring(2)+'</li>'
				else {
					lines[l] = '<ul><li>'+lines[l].substring(2)+'</li>'
					inList = true
					}
				}
			else if (inList) {
				lines[l] = '</ul><p>'+lines[l]+'</p>'
				inList = false
				}
			else lines[l] = '<p>'+lines[l]+'</p>'
			}
		formattedNote = lines.join('')
		out += '<tr><th>Related</th><td class="notesCell related">'+formattedNote+'</td></td><td class="links"></td></tr>'
		}

	var shortLanguage = langs[lang].name.split('(')[0]
	if (langs[lang].orth) out += '<tr><th>&nbsp;</th><td class="notesCell orthIntro">'+shortLanguage+' orthographies</td></td><td class="links"></td></tr>'
	
	// this orthography
	if (langs[lang].orth) {
		langs[lang].orth = langs[lang].orth.replace(/\[/g, '<i>')
		langs[lang].orth = langs[lang].orth.replace(/\]/g, '</i>')
	
		lines = langs[lang].orth.split('\n')
		inList = false
		for (let l=0;l<lines.length;l++) {
			if (lines[l].startsWith('*')) {
				if (inList) lines[l] = '<li>'+lines[l].substring(2)+'</li>'
				else {
					lines[l] = '<ul><li>'+lines[l].substring(2)+'</li>'
					inList = true
					}
				}
			else if (inList) {
				lines[l] = '</ul><p>'+lines[l]+'</p>'
				inList = false
				}
			else {
				//if (l === 0) lines[l] = '<p>This orthography: &nbsp; '+lines[l]+'</p>'
				//else lines[l] = '<p>'+lines[l]+'</p>'
				lines[l] = '<p>'+lines[l]+'</p>'
				}
			}
		formattedNote = lines.join('')
		out += '<tr><th>This</th><td class="notesCell related" style="background-color:#fef3e6;color:#666; border:1px solid bisque;">'+formattedNote+'</td></td><td class="links"></td></tr>'
		}
	
	// related orthographies
	if (langs[lang].more) {
		list = ''
		for (let l=0;l<langs[lang].more.length;l++) {
			list += '<tr><td class="orthCode"><i>'+langs[lang].more[l][0]+'</i><td>'+getScriptName(langs[lang].more[l][1])+'. '+langs[lang].more[l][2].replace(/\[/g, '<i>').replace(/\]/g, '</i>')+'</td></tr>'
			}
		out += '<tr><th>Others</th><td class="notesCell orth"><table>'+list+'</table></td></td><td class="links"></td></tr>'
		}
	
	// additional orthographies
	if (langs[lang].also) {
		list = ''
		for (let l=0;l<langs[lang].also.length;l++) {
			var orths = langs[lang].also[l].split('|')
			list += '<tr><td class="orthCode"><i>'+orths[0].trim()+'</i><td>'+getScriptName(orths[1].trim())+'. &nbsp; '+orths[2].replace(/\[/g, '<i>').replace(/\]/g, '</i>')+'</td></tr>'
			}
		out += '<tr><th>Others</th><td class="notesCell orth"><table>'+list+'</table></td></td><td class="links"></td></tr>'
		}
	
	
	// notes
	if (langs[lang].notes) {
		langs[lang].notes = langs[lang].notes.replace(/\[/g, '<i>')
		langs[lang].notes = langs[lang].notes.replace(/\]/g, '</i>')
	
		lines = langs[lang].notes.split('\n')
		inList = false
		for (let l=0;l<lines.length;l++) {
			if (lines[l].startsWith('*')) {
				if (inList) lines[l] = '<li>'+lines[l].substring(2)+'</li>'
				else {
					lines[l] = '<ul><li>'+lines[l].substring(2)+'</li>'
					inList = true
					}
				}
			else if (inList) {
				lines[l] = '</ul><p>'+lines[l]+'</p>'
				inList = false
				}
			else lines[l] = '<p>'+lines[l]+'</p>'
			}
		formattedNote = lines.join('')
		out += '<tr><th>Notes</th><td class="notesCell">'+formattedNote+'</td></td><td class="links"></td></tr>'
		}


	document.getElementById('langDetails').innerHTML = out
	document.getElementById('langDetails').scrollIntoView()
	

	// put links around tags related to macrolanguages
	var macrolist = document.querySelectorAll('i')
	for (let i=0;i<macrolist.length;i++) {
		var finalList = ''
		var tagList = macrolist[i].textContent.split(' ')
		for (let t=0;t<tagList.length;t++) {
			if (t>0) finalList = ' '+finalList
			if (langs[tagList[t]]) finalList += '<a href="./?language='+tagList[t]+'">'+tagList[t]+'</a>'
			else finalList += tagList[t]
			}
		macrolist[i].innerHTML = finalList
		}
	

	// convert {script} to plain script name
	var macrolist = document.querySelectorAll('b')
	for (let i=0;i<macrolist.length;i++) {
		macrolist[i].textContent = getScriptName(macrolist[i].textContent)
		}
	
	// set the permalink
	document.getElementById('permalink').innerHTML = '<a href=".?language='+lang+'">Permalink</a>'
	}




function convertEscapes ( str ) { 
	// converts a string containing hex escapes of various kinds to a string of characters
	// and strips white space
	// str: string, the input and output
	
	// replace the escape syntax chars with spaces
	str = str.replace(/0x/g, ' ')
	str = str.replace(/[&#x;\\{}Uu+]/g, ' ')
	
	// first convert the 6 digit escapes to characters
	str = str.replace(/10([A-Fa-f0-9]{4})/g, 
					function(matchstr, parens) {
						return String.fromCodePoint(parseInt('10'+parens,16));
						}
						); 
	
	// next convert up to 5 digit escapes to characters
	str = str.replace(/([A-Fa-f0-9]{1,5})/g, 
					function(matchstr, parens) {
						return String.fromCodePoint(parseInt(parens,16));
						}
						); 
	return str.replace(/\s/g,'');
	}



function compareLists () {
    var left = document.getElementById('leftList').value
    var right = document.getElementById('rightList').value
    
    var leftArray = [...left]
    var rightArray = [...right]
    
    var leftResult = ''
    var rightResult = ''
    
    for (let i=0;i<leftArray.length;i++) {
        var found = false
        for (let j=0;j<rightArray.length;j++) {
            if (leftArray[i] === rightArray[j]) { found = true; break }
            }
        if (! found) leftResult += leftArray[i]
        }
    document.getElementById('leftOut').textContent = leftResult

    for (let i=0;i<rightArray.length;i++) {
        var found = false
        for (let j=0;j<leftArray.length;j++) {
            if (rightArray[i] === leftArray[j]) { found = true; break }
            }
        if (! found) rightResult += rightArray[i]
        }
    document.getElementById('rightOut').textContent = rightResult

    }


function xfilter (str) {
	str = str.toLowerCase()
	str = str.replace(/ /,'.*')
	var total = 0
	var names = document.querySelectorAll('#listrecord p')
	for (var i=0;i<langs.length;i++) {
		if (! langs[i].name.toLowerCase().match(str)) names[i].style.display = 'none'
		else { names[i].style.display = 'block'; total++ }
		}
	document.getElementById('total').textContent = total
	}

function filter (str) {
	str = str.toLowerCase()
	str = str.replace(/ /,'.*')
	var total = 0
	var names = document.querySelectorAll('#languageSelector option')
	for (var i=0;i<names.length;i++) {
		if (! names[i].textContent.toLowerCase().match(str)) names[i].style.display = 'none'
		else { names[i].style.display = 'block'; total++ }
		}
	document.getElementById('total').textContent = total
	}


function findScriptGroup ( charNum ) { 
	// output: returns the name of the script group in which charNum falls
	// charNum: a decimal number representing the code point of the character in question
	if (charNum < 128) { return 'Basic Latin' }
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][0] ) i++
	if ( i === scriptGroups.length ) { return( "Not a character!" ) }
	if ( scriptGroups[i-1][1] >= charNum ) { return( scriptGroups[i-1][2]) }
	if ( scriptGroups[i][0] == charNum ) { return( scriptGroups[i][2]) }
	return( "Not a character!" )
	}

function toImg (node) {
	// convert the characters shown to images
	
	if (! node) return
	
	var charlist = node.textContent.replace(/\s+/g,'')
	//console.log(charlist)
	var charArray = [...charlist]
	//console.log(charArray)
	var out = ''
	for (let i=0;i<charArray.length;i++) {
		cp = charArray[i].codePointAt(0)
		scriptGroup = findScriptGroup(cp)
		//console.log(scriptGroup)
		hexNum = cp.toString(16).toUpperCase()
		while (hexNum.length < 4) hexNum = '0'+hexNum
		out += '<img src="../c/'+scriptGroup.replace(/ /g,'_')+'/'+hexNum+'.png"/> '
		}
	//console.log(out)
	node.innerHTML = out
	}


function setFont (fontName) {
	if (document.getElementById('letterCell')) document.getElementById('letterCell').style.fontFamily = fontName
	if (document.getElementById('markCell')) document.getElementById('markCell').style.fontFamily = fontName
	if (document.getElementById('punctuationCell')) document.getElementById('punctuationCell').style.fontFamily = fontName
	if (document.getElementById('numberCell')) document.getElementById('numberCell').style.fontFamily = fontName
	if (document.getElementById('symbolCell')) document.getElementById('symbolCell').style.fontFamily = fontName
	if (document.getElementById('infrequentCell')) document.getElementById('infrequentCell').style.fontFamily = fontName
	}




function initialise () {
    createCLArray() // creates the array cl, which used to be read in from char_lang.js
    
	makeBCPList() // creates the markup for the datalist selection control
	document.getElementById('languageByRegion').innerHTML = listLangsByRegion()
	document.getElementById('languageByScript').innerHTML = listLangsByScript()
	
	// check for parameters and take appropriate action
	parameters = location.search.split('&');
	parameters[0] = parameters[0].substring(1);
	for (var p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=');
		if (pairs[0] == 'charlist') { 
			if (pairs[1]) { 
				document.getElementById('characters').value = decodeURIComponent(pairs[1])
				document.getElementById('output').innerHTML = findChars(document.getElementById('characters').value)
				}
			}
		if (pairs[0] === 'language') { 
			if (pairs[1]) { 
				document.getElementById('languageSelector').value = pairs[1]
				showLanguage(pairs[1])
				}
			}
		}
	}