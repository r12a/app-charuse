function makeBCPList () {
	//out = '<option value=""> </option>'
	out = ''
	array = []
	for (l in langs) array.push(l)
	array.sort()
	for (let i=0;i<array.length;i++) out += '<option value="'+array[i]+'">'+array[i]+' '+langs[array[i]].name+'</option>\n'
	document.getElementById('totalLanguages').textContent = array.length
	document.getElementById('total').textContent = array.length
	return out
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

    var regionList = { ascii:[], adlm:[], arab:[], armn:[], bali:[], bamu:[], beng:[], bugi:[], cans:[], cakm:[], cher:[], cyrl:[], deva:[], ethi:[], geor:[], grek:[], gujr:[], guru:[], hebr:[], java:[], knda:[], khmr:[], laoo:[], latn:[], lisu:[], mlym:[], mand:[], mymr:[], talu:[], nkoo:[], orya:[], shrd:[], sinh:[], sund:[], syrc:[], syrn:[], tale:[], lana:[], tavt:[], taml:[], telu:[], thaa:[], thai:[], tibt:[], tfng:[], vaii:[], yiii:[], macrolanguage:[] }
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
		case 'beng': script = 'Bengali (Bangla)';break
		case 'bugi': script = 'Buginese';break
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
		case 'hebr': script = 'Hebrew';break
		case 'java': script = 'Javanese';break
		case 'khoj': script = 'Khojki';break
		case 'khmr': script = 'Khmer';break
		case 'knda': script = 'Kannada';break
		case 'kpel': script = 'Kpelle';break
		case 'kthi': script = 'Kaithi';break
		case 'lana': script = 'Tai Tham';break
		case 'laoo': script = 'Lao';break
		case 'latn': script = 'Latin';break
		case 'lisu': script = 'Lisu';break
		case 'mand': script = 'Mandaic';break
		case 'marc': script = 'Marchen';break
		case 'mend': script = 'Mende Kikakui';break
		case 'mlym': script = 'Malayalam';break
		case 'mong': script = 'Mongolian';break
		case 'mymr': script = 'Myanmar';break
		case 'nand': script = 'Nandinagari';break
		case 'newa': script = 'Newa';break
		case 'orya': script = 'Oriya';break
		case 'ogam': script = 'Ogham';break
		case 'osma': script = 'Osmanya';break
		case 'nkoo': script = 'N’Ko';break
		case 'perm': script = 'Old Permic';break
		case 'phag': script = 'Phags-pa';break
		case 'runr': script = 'Runic';break
		case 'shrd': script = 'Sharada';break
		case 'shaw': script = 'Shavian';break
		case 'sinh': script = 'Sinhala';break
		case 'sund': script = 'Sundanese';break
		case 'syrc': script = 'Syriac';break
		case 'syrn': script = 'Eastern Syriac';break
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


function getAll (which) { 
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



function showLanguage (lang) {
	out = ''
	var charList
    var stats = 'Non-ASCII character count: &nbsp; '
    var total = 0

	// check this is a valid langtag
	if (!langs[lang]) { alert("The tag "+lang+" was not recognised."); return }
	
	if (langs[lang].silcode) langcode = langs[lang].silcode
	else langcode = lang

	out += '<tr><td colspan="2" class="links" style="text-align:right; padding: 0; font-size: 80%; vertical-align:bottom;"><span style="cursor:pointer; margin-right:1em; color:teal;" onclick="toImg(document.getElementById(\'letterCell\')); toImg(document.getElementById(\'markCell\')); toImg(document.getElementById(\'punctuationCell\')); toImg(document.getElementById(\'numberCell\')); toImg(document.getElementById(\'infrequentCell\')); toImg(document.getElementById(\'symbolCell\')); this.style.color=\'#ccc\';">Convert to images</span></td><td class="links" style="padding:0;">&nbsp;</td></tr>'
	
	// name
	out += '<tr><th>Name</th><td class="large">'+langs[lang].name+'&nbsp; <a href="../app-subtags/?lookup='+lang+'" target="_blank" style="font-size:80%;">['+lang+']</a>'+'&nbsp; <span class="scriptName" style="font-size:60%;">'+langs[lang].script+'</span></td><td class="links"><a href="https://en.wikipedia.org/w/index.php?search='+langs[lang].name+'%20language" target="_blank"><img src="wikipedia.png" alt="Search Wikipedia for this language" title="Search Wikipedia for this language" /></a></td></tr>'

	if (!langs[lang].redirect) {
	
	// local name
	if (langs[lang].local) out += '<tr><th>Autonym</th><td class="localCell">'+langs[lang].local+'</td></td><td class="links"></td></tr>'
	
	if (langs[lang].rtl) rtl = true
	else rtl = false
	
	// characters
	if (langs[lang].letter) {
		charList = [...langs[lang].letter]
		charList.sort()
        stats += charList.length + ' <a onclick="getAll(\'letterCell\');return false;" style="cursor:pointer;">letters</a>'
        total += charList.length
		out += '<tr><th>Letters</th><td class="large" id="letterCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+charList.join('')+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].mark) {
		charList = [...langs[lang].mark]
 		charList.sort()
        if (total > 0) stats += ', '
        stats += charList.length + ' <a onclick="getAll(\'markCell\');return false;" style="cursor:pointer;">marks</a>'
        total += charList.length
		out += '<tr><th>Marks</th><td class="large" id="markCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+charList.join('')+'" target="_blank"><img src="univ.png" alt="Show characters in UniView."  title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].punctuation) {
		charList = [...langs[lang].punctuation]
 		charList.sort()
        if (total > 0) stats += ', '
        stats += charList.length + ' <a onclick="getAll(\'punctuationCell\');return false;" style="cursor:pointer;">punctuation</a>'
        total += charList.length
		out += '<tr><th>Punctuation</th><td class="large" id="punctuationCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+charList.join('')+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].number) {
		charList = [...langs[lang].number]
        if (total > 0) stats += ', '
        stats += charList.length + ' <a onclick="getAll(\'numberCell\');return false;" style="cursor:pointer;">numbers</a>'
        total += charList.length
		out += '<tr><th>Numbers</th><td class="large" id="numberCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+langs[lang].number+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].symbol) {
		charList = [...langs[lang].symbol]
        if (total > 0) stats += ', '
        stats += charList.length + ' <a onclick="getAll(\'symbolCell\');return false;" style="cursor:pointer;">symbols</a>'
        total += charList.length
		out += '<tr><th>Symbols</th><td class="large" id="symbolCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+langs[lang].symbol+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].other) {
		charList = [...langs[lang].other]
        if (total > 0) stats += ', '
        stats += charList.length + ' other'
        total += charList.length
		out += '<tr><th>Other</th><td class="other" id="otherCell">'
		//out += langs[lang].other
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">U+'+cp+'</span> ' 
			}
		//for (j=0;j<charList.length;j++) out += charList[j].codepointAt(0)+' '
		out += '</td><td class="links"><a href="/uniview?charlist='+langs[lang].other+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
			
	// stats
	stats += ' : &nbsp; <a onclick="getAll(\'total\');return false;" style="cursor:pointer;">total</a> ' + total
	if (langs[lang].aux || langs[lang].deprecated) stats += ' &nbsp; &nbsp; + ( '
	if (langs[lang].aux) {
		charList = [...langs[lang].aux]
        stats += charList.length + ' <a onclick="getAll(\'infrequentCell\');return false;" style="cursor:pointer;">infrequent</a> '
		out += '<tr><th>Infrequent</th><td class="small" id="infrequentCell"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++) { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+langs[lang].aux+'" target="_blank"><img src="univ.png" alt="Show characters in UniView."  title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].deprecated) {
		charList = [...langs[lang].deprecated]
        if (total > 0) stats += ', '
        stats += charList.length + ' deprecated'
        total += charList.length
		out += '<tr><th>Deprecated</th><td class="small"'
		if (rtl) out += ' dir="rtl">'
		else out += '>'
		for (j=0;j<charList.length;j++)  { 
			cp = charList[j].codePointAt(0).toString(16).toUpperCase()
			while (cp.length<4) cp = '0'+cp
			name = 'U+'+cp+' '+charData[charList[j]]
			out += '<span title="'+name+'">'+'\u00A0'+charList[j]+'</span> ' 
			}
		out += '</td><td class="links"><a href="/uniview?charlist='+langs[lang].symbol+'" target="_blank"><img src="univ.png" alt="Show characters in UniView." title="Show characters in UniView." class="ulink"/></a></td></tr>'
		}
	if (langs[lang].aux || langs[lang].deprecated) stats += ' )'
	if (!langs[lang].letter && !langs[lang].mark && !langs[lang].punctuation && !langs[lang].number && !langs[lang].symbol && !langs[lang].other) {
		out += '<tr><th></th><td class="large">ASCII only</td></tr>'
		stats = ''
		}
	else stats = '<tr><th></th><td style="border:0; font-size: 70%; font-style: italic; line-height: 1; color:gray;">'+stats+'  <input  id="clipboardStore" style="height:2px;width:2px;margin-left:2em;vertical-align:middle;"/></td></tr>'

	// source
	var sources = langs[lang].source.split(',')
	// check whether there is only a UDHR source
	if (sources.length === 1 && sources[0].match('udhr_')) var warning = true
	else warning = false
	out += '<tr><th>Sources</th><td class="sources">'
	for (let i=0;i<sources.length;i++) {
		if (i>0) out += ', '
		if (sources[i].startsWith('cldr_')) out += '<a href="https://www.unicode.org/cldr/charts/latest/summary/'+sources[i].substr(5)+'.html">CLDR</a>'
		else if (sources[i].startsWith('udhr_')) out += '<a href="https://unicode.org/udhr/d/'+sources[i]+'.html">UDHR</a>'
		else if (sources[i].startsWith('ethn_')) out += '<a href="https://ethnologue.com/language/'+sources[i].substr(5)+'">Ethnologue</a>'
		else if (sources[i].startsWith('http')) out += '<a href="'+sources[i]+'">link</a>'
		else if (sources[i] === 'r12a' || sources[i] === 'CLDR' || sources[i] === 'UDHR') out += sources[i]
		else out += '<a href="https://github.com/r12a/app-charuse/commit/'+sources[i]+'">GitHub</a>'
		}
	if (warning) out += '<br/><span class="udhrWarning">The sole source for this language is the translation of the Universal Declaration of Human Rights. That text may not contain all characters needed for this orthography.</span>'
	out += '</td></td><td class="links"></tr>'
	
	out += stats
	
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
	out += '</td></td><td class="links"><a href="https://www.ethnologue.com/language/'+langcode+'" target="_blank"><img src="ethn.png" alt="Look this up in the Ethnologue." title="Look this up in the Ethnologue." class="ulink"/></a></td></tr>'
	
	// speakers
	if (langs[lang].speakers === '?') var speakers = 'Not known'
	else { 
		speakers = langs[lang].speakers.replace(/~/,'')
		speakers = parseInt(speakers).toLocaleString('en')
		}
	//speakers = speakers.replace(/\?/,'0')
	out += '<tr><th>Native speakers</th><td>'+speakers+'</td></tr>'
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


	if (langs[lang].orth) out += '<tr><th>&nbsp;</th><td class="notesCell orthIntro">'+langs[lang].name+' orthographies</td></td><td class="links"></td></tr>'
	
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


function initialise () {
	document.getElementById('languageSelector').innerHTML = makeBCPList()
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