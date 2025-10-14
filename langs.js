var langs = {

// Any time this is changed, run _make-array.html to generate new code for char_lang.js !

"ab": { name:"Abkhaz (Abxaz, Abkhazian)", local:"Аԥсуа бызшәа", localtrans:"/apʰswa bɨzʃʷa/", silcode:"abk", 
source:"b9d21cee498f37e8fc7a2f8f7cbb6ce16d568e32,udhr_abk", 
region:"wasia", countries:"Georgia, Turkey", script:"cyrl", speakers:"113000", 
letter:"ЏАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЫЬабвгдежзиклмнопрстуфхцчшыьџҔҕҚқҞҟҦҧҨҩҬҭҲҳҴҵҶҷҼҽҾҿӘәӠӡӶӷ", punctuation:"–‐", 
orth:`[Cyrillic.] In use since the 1860s.`,
also:["ab-geor | geor | Mkhedruli/mtavruli, no longer in use."],
},


"ace": { name:"Acehnese (Achinese)", local:"Bahsa / Basa Acèh", localtrans:"[bahsa at͡ʃeh]", 
source:"d84a00d33c079a885ec8b91da6c8d12d1253b6d5,udhr_ace", 
region:"seasia", countries:"Indonesia", script:"ascii", speakers:"3500000", 
letter:"ÈÉËÔÖèéëôö", mark:"̀́̂̈", punctuation:"‐“”", 
},

"acu": { name:"Achaur-Shiwiar", local:"Achuár chícham", 
source:"udhr_acu,udhr_acu_1", 
region:"sam", countries:"Ecuador, Peru", script:"latn", speakers:"7500", 
letter:"úáÚÁ", mark:"́", punctuation:"¿", 
},

"ada": { name:"Dangme (Adaŋgbi)", local:"Dangme", 
source:"udhr_ada", 
region:"afr", countries:"Ghana", script:"latn", speakers:"800000", 
letter:"íÍƆƐɔɛ", mark:"́", 
orth:`[Latin]. In use since 1966.`,
},

"ady": { name:"Adyghe (West Circassian)", local:"Адыгабзэ", localtrans:"[aːdəɣaːbza]", 
source:"4050673fa397e9ecf072706356b0feea9617aaea,udhr_ady", 
region:"eur", countries:"Russia, Turkey, Jordan, Iraq, Syria", script:"cyrl", speakers:"590000", 
letter:"ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяёӏӀ", mark:"̆̈", 
orth:`[Cyrillic].`,
also:["ady-arab | arab | Naskh style. No longer in use.","ady-latn | latn | Used in Turkey."],
},

"af": { name:"Afrikaans", local:"Afrikaans", silcode:"afr", 
source:"cldr_af,udhr_afr", 
region:"afr", countries:"South Africa, Namibia, Zambia, Eswatini", script:"latn", speakers:"7100000", 
letter:"áâéèêëîïôöûÁÂÉÈÊËÎÏÔÖÛ", mark:"́̂̀̈", punctuation:"§‐–—…‘’“”†‡′″‰", aux:"àåäãæçíìóòúùüý̧̊̃", 
},

"agq": { name:"Aghem (Wum, Yum)", local:"Aghɨ̂m", 
source:"cldr_agq", 
region:"afr", countries:"Cameroon", script:"latn", speakers:"27000", 
letter:"àâèêìîòôùûÀÂÈÊÌÎÒÔÙÛǎǐǒǔǍƐǏƗǑƆǓɄāěēīŋōūĀĚĒĪŊŌŪɛɨɔʉʔ", mark:"̀̂̌̄", punctuation:"‰", 
},

"agr": { name:"Aguaruna (Awajún)", local:"Awajún", localtrans:"[ɑʋɑhʊ́n̪]", 
source:"udhr_agr", 
region:"sam", countries:"Peru", script:"latn", speakers:"38000", 
letter:"áíÁÍ", mark:"́", punctuation:"¡¿‐", 
},

"aho": { name:"Ahom", local:"𑜒𑜑𑜪𑜨", localtrans:"", silcode:"", 
source:"r12a", 
region:"sasia", countries:"India", script:"ahom", speakers:"", 
letter:"𑜀𑜁𑜂𑜃𑜄𑜅𑜆𑜇𑜈𑜉𑜊𑜋𑜌𑜍𑜎𑜏𑜐𑜑𑜒𑜓𑜔𑜕𑜖𑜗𑜘𑜙𑜚", letteraux:"𑝀𑝁𑝂𑝃𑝄𑝅𑝆", mark:"𑜝𑜞𑜟𑜠𑜡𑜢𑜣𑜤𑜥𑜦𑜧𑜨𑜩𑜪𑜫", number:"𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹𑜺𑜻", punctuation:"𑜼𑜽𑜾", symbol:"𑜿", other:"", aux:"!%'(),-.0123456789:;?[]«»͏٭​‌‍‑–—‘’“”… ‰‹›⁠⋯⹁", 
orth:`[Ahom] Became extinct but there are attempts to revive it. <a href='../scripts/ahom/aho.html' target='_blank'>Details</a>.`,
linked:"ahom/aho", picker:"ahom-aho", font:"Noto Serif Ahom", 
},

"aii": { name:"Assyrian Neo-Aramaic", local:"ܣܘܪܝܬ / ܣܘܪܬ", localtrans:"[ˈsu:rɛt / ˈsu:rɛθ / ˈsu:rɪt / ˈsu:rɪθ]", silcode:"", rtl:true, xxlang:"../syrc/aii",
source:"a9dcf48a64fd2fb12d3014d2f0295b003130db65,udhr_aii", 
region:"wasia", countries:"Iraq, Syria, Iran, Georgia, Armenia", script:"syrn", speakers:"232300", 
letter:"ـܐܒܓܕܗܘܙܚܛܝܟܠܡܢܣܥܦܨܩܪܫܬ", mark:"ܑ̣̤̭̮̰̱ܸܹܼ݂݈̃̄̇̈ܲܵܿ݀݁݇", number:"", punctuation:"،؛؟܆܇", symbol:"", other:"\u{061C}\u{070F}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"̥̊͏܀܁܂܃܄܅܈܉܊܋܌܍݄݃•⁠", 
orth:`[Syriac] (maḏnḥāyā/Eastern style). Used for East Syriac and Swadaya texts.
ISO 15924 has a general script code for Syriac (syrc), and another (syrn) for the Eastern Syriac orthography. <a href="../scripts/syriac/" target="_blank">Details</a>.`,
also:
["aii-arab | arab | 'Garshuni', often used today for written communication, such as letters and fliers."],
related:`Macrolanguage is Syriac [syr].`,
linked:"syrc/aii", picker:"syrc-aii", font:"'Noto Sans Syriac Eastern'", 
},

"ajg": { name:"Aja", local:"Ajagbe", 
source:"udhr_ajg", 
region:"afr", countries:"Benin, Togo", script:"latn", speakers:"550000", 
letter:"úóòùàèéìíõáÚÓÒÙÀÈÉÌÍÕÁƆƉƐƷŋŊɔɖɛʒ", mark:"̀́̃", 
},

"ak": { name:"Akan", local:"Akan", silcode:"aka", 
source:"cldr_ak", 
region:"afr", script:"latn", speakers:"9800000", 
letter:"ɛɔƐƆ", punctuation:"‰", 
orth:`[Latin] Used since 1978. ‘Akan’ was a name created by Ghanaian academics and language activists in the mid-20th century when they sought to standardize the Fante-Asante-Akuampen written language varieties.`,
also:
["tw-asante | latn | For the Asante dialect of Twi.",
"tw-akuapem | latn | For the Akuapem dialect of Twi.",
"fat | latn | For the Fante dialect of Twi."],
related:`ak is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Twi [tw]<br/>Fanti [fat].
Legacy applications often use ak rather than [fat] (Fanti) or [tw] (Twi).`,
},

"alt": { name:"Southern Altai (Oirot, Oyrot)", local:"алтай тили / алтайча‎ ", localtrans:"(Altay tili / Altajča)", 
source:"udhr_alt", 
region:"nasia", countries:"Russia", script:"cyrl", speakers:"57000", 
letter:"кижнҥтапэрешдлцязыгьйсмбјчӱоуӧвщюъфхКИЖНҤТАПЭРЕШДЛЦЯЗЫГЬЙСМБЈЧӰОУӦВЩЮЪФХ", punctuation:"‐", 
},

"als": { name:"Tosk Albanian", local:"Shqip", 
source:"cldr_sq,udhr_als", 
region:"eur", countries:"Albania, Turkey", script:"latn", speakers:"5400000", 
letter:"çëÇË", mark:"̧̈", punctuation:"«»§‐–—…‘’“”′″‰", 
orth:`[Latin].`,
also:
["als-elba | elba | No longer in use.",
"als-grek | grek | No longer in use."],
related:`Macrolanguage is Albanian [sq]. Legacy applications often use [sq] rather als.`,
},

"am": { name:"Amharic", local:"አማርኛ", localtrans:"[amarɨɲːa]", silcode:"amh", 
source:"cldr_am,udhr_amh", 
region:"afr", countries:"Ethiopia", script:"ethi", speakers:"21634396", 
letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾዃወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗፘፙፚ", letteraux:"", mark:"፝፞፟", markaux:"", number:"፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼", numberaux:"", punctuation:"«»፠፡።፣፤፥፦፧፨–—‘’“”‹›", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`Ethiopic. &nbsp; <a href="../scripts/ethiopic" target="_blank">Details</a>.`,
linked:"ethi/am", picker:"ethi", font:"", 
},

"amc": { name:"Amahuaca (Amawaka, Amaguaco, Ameuhaque, Ipitineri, Sayaco)", local:"Yora", 
source:"udhr_amc", 
region:"sam", countries:"Peru, Brazil", script:"latn", speakers:"310", 
letter:"óÓ", mark:"́", 
},

"ame": { name:"Yanesha' (Amuesha, Amoesha)", local:"Yaneshac̈h / Yanešač̣", localtrans:"[janeʃaˀt͡ʂʰ]", 
source:"udhr_ame,09030b03ba151c1dbce0f407f3bfeb6cc40bb4a2", 
region:"sam", countries:"Peru", script:"latn", speakers:"9800", 
letter:"ñëóíãõáÑËÓÍÃÕÁẽẼʼ", mark:"̃̈́", 
notes:`Combining characters are used in decomposed sequences with several consonants, such as <u>m̃ñp̃t̃c̃c̈b̃</u>.`,
},

"ami": { name:"Amis", local:"Pangcah", localtrans:"[paŋt͡saʜ]", 
source:"udhr_ami", 
region:"easia", countries:"Taiwan", script:"ascii", speakers:"181000", 
},

"amr": { name:"Amarakaeri", local:"aratbuten hua’a", 
source:"udhr_amr", 
region:"sam", countries:"Peru", script:"latn", speakers:"500", 
mark:"̱", punctuation:"¿’", 
},

"ar": { name:"Arabic", silcode:"ara", redirect:true, region:"wasia", script:"macrolanguage", related:`ar is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Algerian Saharan Arabic [aao]<br/> Tajiki Arabic [abh]<br/> Baharna Arabic [abv]<br/> Mesopotamian Arabic [acm]<br/> Ta'izzi-Adeni Arabic [acq]<br/> Hijazi Arabic [acw]<br/> Omani Arabic [acx]<br/> Cypriot Arabic [acy]<br/> Dhofari Arabic [adf]<br/> Tunisian Arabic [aeb]<br/> Saidi Arabic [aec]<br/> Gulf Arabic [afb]<br/> South Levantine Arabic [ajp]<br/> North Levantine Arabic [apc]<br/> Sudanese Arabic [apd]<br/> Standard Arabic [arb]<br/> Algerian Arabic [arq]<br/> Najdi Arabic [ars]<br/> Moroccan Arabic [ary]<br/> Egyptian Arabic [arz]<br/> Uzbeki Arabic [auz]<br/> Eastern Egyptian Bedawi Arabic [avl]<br/> Hadrami Arabic [ayh]<br/> Libyan Arabic [ayl]<br/> Sanaani Arabic [ayn]<br/> North Mesopotamian Arabic [ayp]<br/> Babalia Creole Arabic [bbz]<br/> Sudanese Creole Arabic [pga]<br/> Chadian Arabic [shu]<br/> Shihhi Arabic [ssh]
Legacy applications often use ar rather than [arb] (Standard Arabic).`},

"arb": { name:"Arabic, Standard", local:"العَرَبِيَّة‎", localtrans:"[alʕaraˈbijja]", silcode:"", xxlang:"arb", rtl:true, 
source:"5d92060d0376b6a659e408ddc1c289cc0cecbba8,cldr_ar,udhr_arb", 
region:"wasia", countries:"Saudi Arabia, Egypt, Mali, Algeria, Iraq, Sudan, Yemen, Syria, Morocco, etc.", script:"arab", speakers:"273989700", 
letter:"ءآأؤإئابةتثجحخدذرزسشصضطظعغـفقكلمنهوىيٱپچڢڤڧࢲﷲﷴﷺﷻ", mark:"͏ًٌٍَُِّْٰؔ", markaux:"ٕٓٔۜ", number:"٠١٢٣٤٥٦٧٨٩", punctuation:"«»؉،؍؛؟٪٫٬٭–—‘’“”…‰‹›﴾﴿", symbol:"﵀﵁﵂﵃﵄﵅﵆﵇﵈﵉﵊﵋﵌﵍﵎﵏﷏﷼﷽﷾﷿", symbolaux:"﮲﮳﮴﮵﮶﮷﮸﮹﮺﮻﮼﮽﮾﮿﯀﯁﯂", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{06DD}", aux:"", 
orth:`Arabic. &nbsp; Naskh style. <a href="../scripts/arabic" target="_blank">Details</a>.`,
related:`Macrolanguage is Arabic [ar]. Legacy applications often use [ar] rather than arb.`,
linked:"arab/arb", picker:"arab-ar", font:"", 
},

"arl": { name:"Arabela (Chiripuno, Chiripunu)", local:"Tapweyokwaka / Tapueyocaca", 
source:"udhr_arl", 
region:"sam", countries:"Peru", script:"latn", speakers:"50", 
letter:"úÚ", mark:"́", punctuation:"¿", 
},

"arn": { name:"Mapudungun (Mapuzugun, Mapudungu, Araucanian)", local:"Mapudungun", 
source:"udhr_arn", 
region:"sam", countries:"Chile, Argentina", script:"latn", speakers:"260000", 
letter:"ñáíóÑÁÍÓ", mark:"̃́", 
related:`This entry reflects only one of several competing and different writing systems using the Latin script, including Ragileo, Nhewenh and Azumchefi.`,
},

"as": { name:"Assamese (Asamiya)", local:"অসমীয়া", localtrans:"[ɔʃomia]", silcode:"asm", 
source:"cldr_as", 
region:"sasia", countries:"India", script:"beng", speakers:"15000000", 
letter:"অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযৰলৱশষসহ", mark:"়ংঁঃ্ািীুূৃেৈোৌৗ", number:"০১২৩৪৫৬৭৮৯", punctuation:"‰", aux:"৲ৎর", 
},

"asa": { name:"Asu (Pare, Kipare, Casu, Chasu, Athu, Chathu)", 
source:"cldr_asa", 
region:"afr", countries:"Tanzania", script:"ascii", speakers:"500000", 
},

"ast": { name:"Asturian (Asturleonese, Bable, Leonese)", local:"asturianu", 
source:"cldr_ast,udhr_ast", 
region:"eur", countries:"Spain", script:"latn", speakers:"351791", 
letter:"áéíñóúüÁÉÍÑÓÚÜḥḷḤḶ", mark:"̣́̃̈", punctuation:"¡¿«»§‐–—…‘’“”†‡′″‰", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîïºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÒÔÖØÙÛ̧̀̆̂̊̄", 
},

"auc": { name:"Waorani (Huaorani, Sabela, Wao, Huao, Auishiri, Aushiri, Ssabela)", local:"Wao Terero", 
source:"udhr_auc", 
region:"sam", countries:"Ecuador", script:"latn", speakers:"1800", 
letter:"ñíéóÑÍÉÓ", mark:"̃́", 
},

"ay": { name:"Aymara", silcode:"aym", redirect:true, source:"", region:"sam", script:"macrolanguage", speakers:"0", 
related:`ay is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Aymara [ayr]<br/>Southern Aymara [ayc].
Legacy applications often use ay rather than [ayr].`},

"ayr": { name:"Central Aymara", local:"Aymar aru", localtrans:"[ajmaɾ ˈaɾu]", 
source:"udhr_ayr", 
region:"sam", countries:"Bolivia, Peru, Chile", script:"latn", speakers:"2800000", 
letter:"ñïäíáëúÑÏÄÍÁËÚ", mark:"̃̈́", 
related:`Macrolanguage is Aymara [ay]. Legacy applications often use ay rather than ayr.`,
},

"az": { name:"Azerbaijani (Azeri)", silcode:"aze", redirect:true, source:"624d905f81c5ba4f15275776ccd818ef04d3c043", region:"wasia", script:"macrolanguage", speakers:"26000000", related:`az is a macrolanguage that encompasses the following more specific primary language subtags:<br/>South Azerbaijani [azb]<br/>North Azerbaijani [azj].
Legacy applications often use az rather than [azj].
Orthographies include the following scripts: Arabic, Cyrillic, Latin.`
},

"azb": { name:"Azerbaijani (Azeri)", local:"آذربایجان دیلی", localtrans:"[ɑːzæɾbɑjˈdʒɑn diˈli]", rtl:true, 
source:"f0fadf1bb3cf144a0034d94f00d98e74d1d253aa", 
region:"wasia", countries:"Iran, Iraq, Turkey, Azerbaijan, Syria", script:"arab", speakers:"26000000", 
letter:"آؤئاتثجحخدذرزسشصضطظعغفقلمنهويٮپچژکگۆۇیەݣ", mark:"َْٓٔ", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", aux:"ـ", 
related:`Macrolanguage is Azerbaijani [az].`,
},

"azj": { name:"Northern Azerbaijani", local:"Azərbaycan dili", localtrans:"[ɑːzæɾbɑjˈdʒɑn diˈli]", 
source:"cldr_az,udhr_azj_latn", 
region:"wasia", countries:"Axerbaijan, Russia, Georgia, Armenia", script:"latn", speakers:"26000000", 
letter:"çöüÇÖÜƏğışĞŞİə", mark:"̧̇̆̈", punctuation:"§‐–—…‘’“”†‡′″", 
orth:`[Latin] Modified version of 1991 orthography, used since 1992.`,
also:
["azb | arab | Used prior to 1929.",
"azj-x-sovietlatn | latn | Used 1929-1939 in Soviet Azerbaijan.",
"azj-x-1939cyrl | cyrl | Used 1939-1958 in Soviet Azerbaijan.",
"azj-cyrl | cyrl | Simplified Cyrillic orthography, used 1958-1991 in Soviet Azerbaijan. Widely used still in Armenia.",
"azj-x-1991latn | latn | Used 1991-1992 in independent Azerbaijan."],
related:`Macrolanguage is Azerbaijani [az]. Legacy applications often use az rather azj.`,
},

"azj-cyrl": { name:"Northern Azerbaijani", local:"Азәрбајҹан дили", localtrans:"[ɑːzæɾbɑjˈdʒɑn diˈli]", silcode:"azj", 
source:"cldr_az_Cyrl,udhr_azj_cyrl", 
region:"wasia", script:"cyrl", speakers:"26000000", 
letter:"аәбвгғдежзийјкҝлмноөпрстуүфхһчҹшыАӘБВГҒДЕЖЗИЙЈКҜЛМНОӨПРСТУҮФХҺЧҸШЫ", mark:"̆", punctuation:"‐–—…‘’“”†‡′″‰§", aux:"цщъьэюяЦЩЪЬЭЮЯ", 
orth:`[Cyrillic] Simplified orthography of Soviet Azerbaijan, 1958-1991. Widely used still in Armenia.`,
also:
["azb | arab | Used prior to 1929.",
"azj-x-sovietlatn | latn | Used 1929-1939 in Soviet Azerbaijan.",
"azj-x-1939cyrl | cyrl | Used 1939-1958 in Soviet Azerbaijan.",
"azj-x-1991latn | latn | Used 1991-1992 in independent Azerbaijan.",
"azj | latn | From 1992, modified Latin orthography."],
related:`Macrolanguage is Azerbaijani [az]. Legacy applications often use az rather than azj.`,
},

"ban": { name:"Bali (Balinese)", source:"5e57fecd469e080a9ee7d6a6ec4ad232405d52ce,udhr_ban", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"3300000", local:"Basa Bali", localtrans:"/baʃa bali/", 
orth:`[Latin] &nbsp; Used since early 20th century.`,
also:
['ban-bali | bali | ',
'ban-java | java | No longer in use.']
},

"ban-bali": { name:"Bali (Balinese)", local:"ᬪᬵᬱᬩᬮᬶ / ᬩᬲᬩᬮᬶ", localtrans:"/baʃa bali/", xxlang:"ban", silcode:"ban", 
source:"ff844379ad4006570a536dd0572148858532d87b", 
region:"oce", countries:"Indonesia", script:"bali", speakers:"3300000", 
letter:"ᬅᬆᬇᬈᬉᬊᬋᬌᬍᬎᬏᬐᬑᬒᬓᬕᬖᬗᬘᬚᬜᬝᬞᬟᬠᬡᬢᬣᬤᬥᬦᬧᬨᬩᬪᬫᬬᬭᬮᬯᬰᬱᬲᬳ", letteraux:"ᬔᬙᬛ", mark:"ᬀᬁᬂᬃᬄ᬴ᬵᬶᬷᬸᬹᬺᬻᬼᬽᬾᬿᭀᭁᭂᭃ᭄", number:"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙", punctuation:"᭎᭏᭚᭛᭜᭝᭞᭟᭠᭽᭾᭿", symbol:"", other:"\u200B\u200C", 
aux:"!%()-;?[]§«»ʼ͏‍‑‒–—‘’“”†‡…‰′″‹›", deprecated:"", 
orth:`Balinese. &nbsp; <a href="../scripts/balinese" target="_blank">Details</a>.`,
also:
["ban | latn | Used since early 20th century.",
"ban-java | java | No longer in use."],
linked:"bali/ban", picker:"bali", font:"Noto Sans Balinese", 
},

"bap": { name:"Bantawa", local:"", localtrans:"", silcode:"", 
source:"r12a", 
region:"sasia", countries:"India (Sikkim), Nepal", script:"krai", speakers:"", 
letter:"𖵀𖵁𖵂𖵃𖵄𖵅𖵆𖵇𖵈𖵉𖵊𖵋𖵌𖵍𖵎𖵏𖵐𖵑𖵒𖵓𖵔𖵕𖵖𖵗𖵘𖵙𖵚𖵛𖵜𖵝𖵞𖵟𖵠𖵡𖵢𖵣𖵤𖵥𖵦𖵨𖵧𖵩𖵪𖵫𖵬", mark:"", number:"𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹", punctuation:"‘’“”𖵭𖵮𖵯", symbol:"", other:"", aux:"", 
orth:`[Kirat Rai] Developed by Late Kripasalyan Rai in 1981-1982, and gaining traction. <a href='../scripts/krai/bap.html' target='_blank'>Details</a>.`,
related:`bap-deva | deva | The primary orthography for Bantawa.`,
linked:"krai/bap", picker:"krai-bap", font:"Kanchenjunga", 
},

"bas": { name:"Basaa (Bassa, Basa, Bissa, Mbene)", local:"ɓasaá", 
source:"cldr_bas", 
region:"afr", countries:"Cameroon", script:"latn", speakers:"300000", 
letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƁƐǏǸǑƆǓāěēīńŋōūĀĚĒĪŃŊŌŪɓɛɔ", mark:"᷆᷇́̀̂̌̄", 
vowels:"let:7",
},

"bax": { name:"Bamun (Bamum, Bamoun)", local:"Shü Pamom", localtrans:"[ʃŷpǎˑmə̀m]", 
source:"udhr_bax", 
region:"afr", countries:"Cameroon", script:"latn", speakers:"420000", 
letter:"úéêüûâôîáèùàÚÉÊÜÛÂÔÎÁÈÙÀṅṄ", mark:"́̂̈̀̇", punctuation:"‘’", 
orth:`[Latin] &nbsp; `,
also:
["bax-bamu | bamu | Taught in schools until 1930s."],
},

"bax-bamu": { name:"Bamun (Bamum, Bamoun)", local:"Shü Pamom", localtrans:"[ʃŷpǎˑmə̀m]", silcode:"bax", 
source:"820f9f09ce28a3610548365c402e624a9d6e7b32", 
region:"afr", countries:"Cameroon", script:"bamu", speakers:"420000", 
letter:"ꚠꚡꚢꚣꚤꚥꚦꚧꚨꚩꚪꚫꚬꚭꚮꚯꚰꚱꚲꚳꚴꚵꚶꚷꚸꚹꚺꚻꚼꚽꚾꚿꛀꛁꛂꛃꛄꛅꛆꛇꛈꛉꛊꛋꛌꛍꛎꛏꛐꛑꛒꛓꛔꛕꛖꛗꛘꛙꛚꛛꛜꛝꛞꛟꛠꛡꛢꛣꛤꛥ", letteraux:"", mark:"꛰꛱", markaux:"", number:"ꛦꛧꛨꛩꛪꛫꛬꛭꛮꛯ", numberaux:"", punctuation:"꛲꛳꛴꛵꛶꛷", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Bamum] &nbsp; Taught in schools until 1930s.`,
also:
["bax | latn | "],
linked:"bamu/bax", picker:"", font:"", 
},

"bba": { name:"Baatonum (Bariba, Baatombu, Baatonu, Barba, Barganchi, Bargawa, Bargu, Baruba, Berba, Bogung, Burgu)", source:"udhr_bba", region:"afr", countries:"Benin, Nigeria", script:"latn", speakers:"560000", letter:"àéùèóÀÉÙÈÓǹƐƆǸɛɔ", mark:"̀́", local:"Baatonum"},

"bbc-batk": { name:"Batak Toba", 
source:"c1bacf15547e607e98a6bff9af38717b6f18e49d", xxlang:"btk", 
region:"seasia", countries:"Indonesia", script:"batk", speakers:"1610000", 
letter:"ᯤᯥᯀᯇᯅᯖᯗᯑᯂᯎᯐᯙᯂᯔᯉᯠᯝᯍᯒᯞᯛ", mark:"ᯪᯮᯩᯬ᯲ᯰ", punctuation:"᯼᯽᯾᯿", 
orth:`[Batak Toba] Mostly used nowadays for cultural displays, signposts, etc. <a href='../scripts/batk/btk.html' target='_blank'>Details</a>.`,
also:
["bbc | latn | The predominant orthography."],
linked:"batk/btk", picker:"batk",
},

"bcl": { name:"Central Bicol (Bikol Naga, Bicolano)", source:"udhr_bcl", region:"seasia", countries:"Philippines", script:"ascii", speakers:"2500000", 
related:`Macrolanguage is Bikol [bik]. Legacy applications often use bik rather bcl.`
},

"be": { name:"Belorussian", silcode:"bel", source:"cldr_be,udhr_bel", region:"eur", countries:"Belarus, Ukraine, Poland", script:"cyrl", speakers:"5000000", letter:"абвгджзеёійклмнопрстуўфхцчшыьэюяиАБВГДЖЗЕЁІЙКЛМНОПРСТУЎФХЦЧШЫЬЭЮЯИʼ", mark:"̈̆", punctuation:"‐«»", aux:"́", local:"беларуская мова", localtrans:"[bʲelaˈruskaja ˈmova]"},

"bem": { name:"Bemba (ChiBemba, Cibemba, Ichibemba, Icibemba, Chiwemba)", source:"cldr_bem,udhr_bem", region:"afr", countries:"Zambia, DRC", script:"ascii", speakers:"4100000", local:"Chibemba"},

"bez": { name:"Bena", source:"cldr_bez", region:"afr", countries:"Tanzania", script:"ascii", speakers:"670000", local:"Ekibena"},

"bg": { name:"Bulgarian", silcode:"bul", source:"cldr_bg,udhr_bul", region:"eur", countries:"Bulgaria, Turkey, Ukraine, Greece, Moldova, Serbia", script:"cyrl", speakers:"9000000", letter:"абвгдежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ", mark:"̆", punctuation:"‐–—…‘‚“„″§", symbol:"№", aux:"ѐёѝыѣэѫЀЁЍЫѢЭѪ̀̈", local:"български", localtrans:"[ˈbɤɫɡɐrski]"},

"bho": { name:"Bhojpuri", source:"udhr_bho", region:"sasia", countries:"India, Nepal, Mauritius", script:"deva", speakers:"51000000", letter:"मनवधकरखतसयषटउचबहलघणपगठदभअएआओथशजडइछऔफढईझऐञ", mark:"ािंु्ेोी़ूौृै", punctuation:"।", local:"भोजपुरी", localtrans:"(bhōjpurī)", 
orth:`[Devanagari] &nbsp; `,
also:
['bho-kthi | kthi | ']
},

"bik": { name:"Bikol", redirect:true, region:"seasia", script:"macrolanguage", related:`bik is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Bikol [bcl]<br/> Albay Bicolano (deprecated, don't use!) [bhk]<br/> Southern Catanduanes Bikol [bln]<br/> Rinconada Bikol [bto]<br/> Northern Catanduanes Bikol [cts]<br/> West Albay Bikol [fbl]<br/> Libon Bikol [lbl]<br/> Miraya Bikol [rbl]<br/> Buhi'non Bikol [ubl].
Legacy applications often use bik rather than [bcl].`},

"bin": { name:"Edo (Bini)", source:"udhr_bin,5d2167e3d40aca7074b7d33835b1aa93e09cc088", region:"afr", countries:"Nigeria", script:"ascii", speakers:"1000000", letter:"ÀÁÈÉÌÍÒÓÙÚàáèéìíòóùúẸẹỌọ", mark:"̣̀́", local:"Ẹ̀dó", notes:"Acute and grave accents are used for tones, but the source didn't explicitly list all possible combinations, so the list of precomposed characters shown with those accents is a guess."},

"bku-buhd": { name:"Buhid (Bangon, Batangan, Buhid-Mangyan, Bukil)", local:"ᝊᝓᝑᝒ", localtrans:"(buhid)", silcode:"", xxlang:"bku", 
source:"3bd5a62d6d969a796148fc6c805c3eb8ac27e52d", 
region:"oce", countries:"Philippines", script:"buhd", speakers:"11600", 
letter:"ᝀᝁᝂᝃᝄᝅᝆᝇᝈᝉᝊᝋᝌᝍᝎᝏᝐᝑ", letteraux:"", mark:"ᝒᝓ", markaux:"", number:"", numberaux:"", punctuation:"᜵᜶", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`Buhid &nbsp; <a href="../scripts/buhd/index.html" target="_blank">Details</a>.`,
also:
["bku | latn | Primary."],
linked:"buhd/bku", picker:"buhd", font:"Noto Sans Buhid", 
},

"blt": { name:"Tai Dam (Black Tai)", local:"ꪼꪕꪒꪾ", localtrans:"(tai dam)", silcode:"", 
source:"udhr_blt,a220b3a422c42646d07427217c800b9d9663991f", 
region:"seasia", countries:"Vietnam, Laos, China", script:"tavt", speakers:"760000", 
letter:"ꪀꪁꪄꪅꪆꪇꪈꪉꪊꪋꪎꪏꪐꪑꪒꪓꪔꪕꪖꪗꪘꪙꪚꪛꪜꪝꪠꪡꪢꪣꪤꪥꪦꪧꪨꪩꪪꪫꪬꪭꪮꪯꪱꪵꪶꪹꪺꪻꪼꪽꫀꫂꫛꫜꫝ", mark:"ꪴꪰꪲꪳꪷꪸꪾ꪿꫁", number:"", punctuation:"–꫞꫟", symbol:"", other:"", aux:"!;?", 
orth:`Tai Viet &nbsp; <a href="../scripts/tavt/index.html" target="_blank">Details</a>.`,
also:
["blt-laoo | laoo | ",
"blt-latn | latn | "],
linked:"tavt/blt", picker:"tavt", font:"Noto Sans Tai Viet", 
},

"bm": { name:"Bamanan (Bambara, Bamanankan)", local:"bamanankan", localtrans:"", silcode:"bam", 
source:"61711e9f6eb3f930b12ed40b27bf0d8c2c6ee101,cldr_bm,udhr_bam", 
region:"afr", countries:"Mali", script:"latn", speakers:"4100000", 
letter:"ŊŋƆƐƝɔɛɲʼ", letteraux:"ÀÁÈÉÌÍÒÓÙÚàáèéìíòóùúĚěǍǎǏǐǑǒǓǔ", mark:"̀́", markaux:"̂̌", number:"", punctuation:"«»‘’“”…", symbol:"", other:"", aux:"[]‑–—‰‹›", 
orth:`[Latin] &nbsp; <a href="../scripts/latin/bm" target="_blank">Details</a>.`,
also:
["nqo | nkoo | Written koiné used by speakers of Maninka, Bambara, Dyula and related dialects."],
linked:"latn/bm", picker:"latn-bm", font:"", 
},

"bn": { name:"Bengali (Bangla)", local:"বাংলা", localtrans:"/ˈbʌŋlə/", silcode:"ben", 
source:"10e4909416eed2f0279eb7996f90c6bab37281e2,cldr_bn,udhr_ben", 
region:"sasia", countries:"Bangladesh, India", script:"beng", speakers:"260000000", 
letter:"ʼঅআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহঽৎড়য়", letteraux:"ঢ়", mark:"ঁংঃ়ািীুূৃেৈোৌ্", number:"০১২৩৪৫৬৭৮৯", punctuation:"।॥‘’“”", symbol:"৳৺", other:"\u{200C}\u{200D}", aux:"͏ঀৼ৽–—…", 
orth:`[Bengali] &nbsp; <a href="../scripts/bengali" target="_blank">Details</a>.`,
also:
["bn-newa | newa | No longer in use."],
linked:"beng/bn", picker:"beng", font:"", 
},

"bo": { name:"Tibetan", local:"བོད་སྐད་ / ལྷ་སའི་སྐད་", localtrans:"(Böké / Lhaséké)", silcode:"bod", 
source:"3d4a46a3bc9bb2a2c900adf645b07f641ef2c2bf,cldr_bo,udhr_bod", 
region:"easia", countries:"China, India", script:"tibt", speakers:"1200000", 
letter:"ༀཀཁགངཅཆཇཉཊཋཌཎཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤཥསཧཨཪྈྉྊྋྌ", mark:"ཱིེོུ༹༵༷ྃ྆ྐྒྒྷྔྕྗྙྚྛྜྜྷྞྟྡྡྷྣྤྥྦྦྷྨྩྫྫྷྭྰྱྲླྷྸྐྵྺ", markaux:"ཱཱཱིྀུ", number:"༠༡༢༣༤༥༦༧༨༩༪༫༬༭༮༯༰༱༲༳", punctuation:"༄༅༈་༌།༎༑༔༼༽྅〈〉《》", symbol:"༁༂༃༴༶༸྾྿", other:"", aux:"!%(),:;?[]ʼ͏༆༇༉༊༏༐༒༓༺༻ྂ྇ྍྎྏྻྼ࿄࿅࿆࿇࿈࿉࿊࿋࿌࿐࿑࿒࿓࿔࿕࿖࿗࿘࿙࿚​‌‍‑–—‘’“”…‰⁠", 
orth:`[Tibetan] &nbsp; Has Uchen and Umed styles. 
<a href="../scripts/tibetan/" target="_blank">Detailed summary</a>.`,
also:
["bo-marc | marc | ",
"bo-phag | phag | "],
linked:"tibt/bo", picker:"tibt", font:"", 
},

"boa": { name:"Bora", source:"udhr_boa", region:"sam", countries:"Peru, Colombia", script:"latn", speakers:"2400", letter:"úáéñíóÚÁÉÑÍÓɨȉƗȈ", mark:"́̃̏", local:"Meamuyna"},

"br": { name:"Breton", silcode:"bre", source:"cldr_br,udhr_bre", region:"eur", countries:"France", script:"latn", speakers:"226000", letter:"êñùÊÑÙʼ", mark:"̂̃̀", punctuation:"’–", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèëíìîïóòôöøúûüÿÁÀÂÅÄÃÆÇÉÈËÍÌÎÏÓÒÔÖØÚÛǗ̧̆̊̈̄", local:"brezhoneg", localtrans:"[bʁeˈzõːnɛk / brəhõˈnek]"},

"brx": { name:"Bodo (Boro, Mech)", source:"cldr_brx", region:"sasia", countries:"India", script:"deva", speakers:"1500000", letter:"अआइईउऊऍएऐऑओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलळवशषसह", mark:"़ँंािीुूृॅेैॉोौ्", local:"बर' / बड़", localtrans:"[bɔɽo]", 
orth:`[Devanagari] &nbsp; `,
also:
['brx-beng | beng | ',
'brx-latn | latn | ']
},

"bs": { name:"Bosnian", silcode:"bos", source:"cldr_bs,udhr_bos_latn", region:"eur", countries:"Bosnia &amp; Herzegovina, Serbia, Montenegro, Slovenia, Croatia", script:"latn", speakers:"~3000000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’“”′″", local:"bosanski", localtrans:"[bɔ̌sanskiː]", 
related:`Macrolanguage is Serbo-Croatian [sh].`,
orth:`[Latin] &nbsp; Gaj's alphabet.`,
also:
['bs-cyrl | cyrl | \'Bosančica\', used in the Middle Ages, with some recent attempts at revival.',
'bs-arab | arab | \'Arebica\', used mainly between the 15th and 19th centuries.']
},

"bs-cyrl": { name:"Bosnian", sildcode:"bo", source:"cldr_bs_Cyrl,udhr_bos_cyrl", region:"eur", countries:"Bosnia &amp; Herzegovina, Serbia, Montenegro, Slovenia, Croatia", script:"cyrl", speakers:"~3000000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–—…‘’“”′″", local:"босански", localtrans:"[bɔ̌sanskiː]", 
related:`Macrolanguage is Serbo-Croatian [sh].`,
orth:`[Cyrillic] &nbsp; \'Bosančica\', used in the Middle Ages, with some recent attempts at revival.`,
also:
['bs | latn | Gaj\'s alphabet.',
'bs-arab | arab | \'Arebica\', used mainly between the 15th and 19th centuries.']
},

"bsq": { name:"Bassa", silcode:"bsq", source:"dd438bfc5ea761e6f22cb5886c0bec90c57a9d96", region:"afr", countries:"Liberia", script:"latn", speakers:"648000", letter:"ɓɔɖɛḾḿṸṹĒēĚěĨĩŃńŨũŪūƁƆƉƐǍǎǏǐǑǒǓǔǸǹÀÁÃÈÉÌÍÒÓÙÚàáãèéìíòóùú", mark:"̀́̃̄̌", local:"Ɓǎsɔ́ɔ̀", 
orth:`[Latin] &nbsp; Primary usage.`,
also:
['bsq-bass | bass | Rediscovered in the Americas at the start of the 20th century. Now used mainly by older people.']
},

"bsq-bass": { name:"Bassa", local:"𖫔𖫧𖫳𖫒𖫨𖫰𖫨𖫱", localtrans:"(Ɓǎsɔ́ɔ̀)", silcode:"bsq", 
source:"feb8d27835761376c21d0c994cb1c128010d1ac0", 
region:"afr", countries:"Liberia", script:"bass", speakers:"648000", 
letter:"𖫐𖫑𖫒𖫓𖫔𖫕𖫖𖫗𖫘𖫙𖫚𖫛𖫜𖫝𖫞𖫟𖫠𖫡𖫢𖫣𖫤𖫥𖫦𖫧𖫨𖫩𖫪𖫫𖫬𖫭", mark:"𖫰𖫱𖫲𖫳𖫴", number:"", punctuation:"“”𖫵", symbol:"", other:"", aux:"!():;§«»ʼ‐‑–—‘’†‡…′″", 
orth:`[Bassa Vah] &nbsp; Rediscovered in the Americas at the start of the 20th century. Now used mainly by older people. <a href="../scripts/bassavah/">Details</a>.`,
also:
["bsq | latn | Primary usage."],
linked:"bass/bsq", picker:"bass", font:"", 
},

"btd-batk": { name:"Batak Dairi (Pakpak)", 
source:"c1bacf15547e607e98a6bff9af38717b6f18e49d", xxlang:"btk", 
region:"seasia", countries:"Indonesia", script:"batk", speakers:"172000", 
letter:"ᯀᯂᯅᯇᯉᯍᯎᯐᯑᯒᯔᯗᯘᯙᯛᯝᯞᯤᯥ", mark:"ᯨᯩᯪᯬᯮᯰ᯲", punctuation:"᯼᯽᯾᯿", 
orth:`[Batak Dairi] Mostly used nowadays for cultural displays, signposts, etc. <a href='../scripts/batk/btk.html' target='_blank'>Details</a>.`,
also:
["btd | latn | The predominant orthography."],
linked:"batk/btk", picker:"batk", 
},

"btk": { name:"Batak", redirect:true, source:"", region:"oce", script:"batk", speakers:"", notes:`btk is a collection that encompasses the following more specific primary language subtags:<br/>Toba [bbc-batk]<br/> Dairi [btd-batk]<br/> Mandailing [btm-batk]<br/> Simalungun [bts-batk]<br/> Karo [btx-batk].`},

"btm-batk": { name:"Batak Mandailing (Batta)", xxlang:"btk", 
source:"c1bacf15547e607e98a6bff9af38717b6f18e49d", 
region:"seasia", countries:"Indonesia", script:"batk", speakers:"691000", 
letter:"ᯤᯥᯀᯇᯅᯖᯑᯎᯐᯘᯄᯔᯉᯠᯝᯋᯒᯞᯛ", mark:"ᯪᯮᯩᯬᯰ᯦᯲", punctuation:"᯼᯽᯾᯿", 
orth:`[Batak Mandailing] Mostly used nowadays for cultural displays, signposts, etc. <a href='../scripts/batk/btk.html' target='_blank'>Details</a>.`,
also:
["btm | latn | The predominant orthography."],
linked:"batk/btk", picker:"batk", 
},

"bts-batk": { name:"Batak Simalungun (Simelungan, Timur)", xxlang:"btk", 
source:"c1bacf15547e607e98a6bff9af38717b6f18e49d", 
region:"seasia", countries:"Indonesia", script:"batk", speakers:"151000", 
letter:"ᯁᯃᯅᯈᯉᯌᯏᯐᯑᯓᯕᯖᯙᯜᯝᯟᯠᯤᯥ", mark:"ᯩᯫᯬᯭᯮᯯᯰᯱ᯳", punctuation:"᯼᯽᯾᯿", 
orth:`[Batak Simalungun] Mostly used nowadays for cultural displays, signposts, etc. <a href='../scripts/batk/btk.html' target='_blank'>Details</a>.`,
also:
["bts | latn | The predominant orthography."],
linked:"batk/btk", picker:"batk", 
},

"btx-batk": { name:"Batak Karo", 
source:"c1bacf15547e607e98a6bff9af38717b6f18e49d", xxlang:"btk", 
region:"seasia", countries:"Indonesia", script:"batk", speakers:"491000", 
letter:"ᯤᯥᯀᯇᯆᯗᯑᯂᯎᯢᯣᯡᯐᯙᯀᯔᯉᯝᯋᯒᯞᯛ", mark:"ᯧᯨᯩᯪᯫᯬᯭᯰᯱ᯳", punctuation:"᯼᯽᯾᯿", 
orth:`[Batak Karo] Mostly used nowadays for cultural displays, signposts, etc. <a href='../scripts/batk/btk.html' target='_blank'>Details</a>.`,
also:
["btx | latn | The predominant orthography."],
linked:"batk/btk", picker:"batk", 
},

"buc": { name:"Bushi (Shibushi, Kibushi)", source:"udhr_buc,f977666b87e87d0adfd3e3683b6d046a9de0abf5", region:"afr", countries:"Mayotte", script:"latn", speakers:"47900", letter:"ìàãÌÀÃɓŋĩŊĨƁɗƊ", mark:"̀̃", punctuation:"’", local:"Kibushi", 
orth:`[Latin] &nbsp; Writing is limited in use.`},

"bug": { name:"Buginese", silcode:"bug", source:"udhr_bug", region:"seasia", countries:"Indonesia, Malaysia", script:"ascii", speakers:"5000000", local:"Basa Ugi", 
orth:`[Latin] &nbsp; `,
also:
['bug-bugi | bugi | No longer in significant use, but found on signage.'],
},

"bug-bugi": { name:"Buginese", local:"ᨅᨔ ᨕᨘᨁᨗ", localtrans:"(basa ugi)", silcode:"bug", xxlang:"bug",
source:"d997476f6f5d5a7525a2cdf2d0790e944bfa83f2", 
region:"seasia", countries:"Indonesia, Malaysia", script:"bugi", speakers:"5000000", 
letter:"ᨀᨁᨂᨃᨄᨅᨆᨇᨈᨉᨊᨋᨌᨍᨎᨏᨐᨑᨒᨓᨔᨕᨖꧏ", mark:"ᨘᨗᨙᨚᨛ", number:"", punctuation:"᨞᨟", symbol:"", other:"\u{200D}", aux:"​‌", 
orth:`[Buginese] &nbsp; No longer in significant use, but found on signage. 
<a href="../scripts/buginese" target="_blank">Detailed summary</a>.`,
also:
["bug | latn | "],
linked:"bugi/bug", picker:"bugi", font:"Noto Sans Buginese", 
},

"bum": { name:"Bulu", source:"cldr_bum,udhr_btb", region:"afr", countries:"Cameroon", script:"latn", speakers:"860000", letter:"óñôéáÓÑÔÉÁōńŌŃ", mark:"̄́̃̂", local:"Bulu"},

"bxk": { name:"Bukusu", source:"cldr_luy", region:"afr", countries:"Kenya, Uganda", script:"ascii", speakers:"1200000", local:"Lubukusu", 
related:`Macrolanguage is Luyia [luy]. Legacy applications often use luy rather bxk.`},

"ca": { name:"Catalan", silcode:"cat", source:"cldr_ca,udhr_cat", region:"eur", countries:"Spain, France, Andorra, Italy", script:"latn", speakers:"4100000", letter:"àçéèíïóòúüÀÇÉÈÍÏÓÒÚÜ", mark:"̧̀́̈", punctuation:"·¡¿«»§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŀŏōœŭūĂĀĔĒĬĪĿŎŌŒŬŪŸáâåäãæêëìîñºôöøùûÿÁÂÅÄÃÆÊËÌÎÑÔÖØÙÛ̆̂̊̃̄", local:"català", localtrans:"[kətəˈla]"},

"cab": { name:"Garifuna", source:"udhr_cab", region:"cam", countries:"Honduras, Belize", script:"latn", speakers:"190000", letter:"üúñáéíèóÜÚÑÁÉÍÈÓ", mark:"̈́̃̀", local:"Garifuna"},

"cak": { name:"Kaqchikel (Kaqchiquel, Cakchiquel, Cakchiquiel)", source:"udhr_cak", region:"cam", countries:"Guatemala", script:"latn", speakers:"450000", letter:"äïöüÄÏÖÜ", mark:"̈", local:"Kaqchikel"},

"cbi": { name:"Chachi (Cha'palaa, Cayapa)", source:"udhr_cbi", region:"sam", countries:"Ecuador", script:"latn", speakers:"10000", letter:"ñóúáíéÑÓÚÁÍÉ", mark:"̃́", punctuation:"¿¡"},

"cbr": { name:"Cashibo (Caxibo, Cacibo, Cachibo, Cahivo, Cacataibo, Managua, Hagueti)", source:"udhr_cbr", region:"sam", countries:"Peru", script:"latn", speakers:"1200", letter:"ñëúíáéóÑËÚÍÁÉÓ", mark:"́̃̈́", punctuation:"¿", local:"Kakataibo-Kashibo"},

"cbs": { name:"Cashinahua (Kashinawa, Kaxinawá, Caxinawá, Hantxa Kuin, Huni Kui)", source:"udhr_cbs", region:"sam", countries:"Peru, Brazil", script:"latn", speakers:"1200", letter:"íÍ", mark:"́", punctuation:"¿", local:"Hantxa Kuin / Juni Kuin"},

"cbt": { name:"Chayahuita", source:"udhr_cbt", region:"sam", countries:"Peru", script:"latn", speakers:"14000", letter:"ëóíËÓÍ", mark:"̈́", punctuation:"¿", local:"Shahui"},

"cbu": { name:"Candoshi-Shapra (Candoxi, Kandoshi, Murato)", source:"udhr_cbu", region:"sam", countries:"Peru", script:"latn", speakers:"1120", letter:"íáÍÁ", mark:"́", punctuation:"¿¡"},

"ccp": { name:"Chakma", local:"𑄌𑄋𑄴𑄟𑄳𑄦 𑄞𑄌𑄴", localtrans:"(changmha bhach)", silcode:"", 
source:"cldr_ccp,udhr_ccp", 
region:"sasia", countries:"Bangladesh, India", script:"cakm", speakers:"330000", 
letter:"𑄃𑄄𑄅𑄆𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑅇", letteraux:"𑅄", mark:"𑄀𑄁𑄂𑄧𑄨𑄩𑄪𑄫𑄬𑄭𑄮𑄯𑄰𑄱𑄲𑄳𑄴", markaux:"𑅅𑅆", number:"০১২৩৪৫৬৭৮৯𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿", punctuation:"“”…𑅀𑅁𑅂𑅃", symbol:"", other:"", aux:"!'.0123456789[]«»͏‌‍‑–—‘’•‹›⁠", 
orth:`[Chakma] &nbsp; `,
also:
["ccp-beng | beng | ",
"ccp-latn | latn | "],
notes:`UDHR uses Chakma digits, whereas CLDR shows only Bengali digits.`,
linked:"cakm/ccp", picker:"cakm-ccp", font:"Noto Sans Chakma", 
},

"ce": { name:"Chechen", silcode:"che", source:"cldr_ce", region:"eur", countries:"Russia", script:"cyrl", speakers:"1400000", letter:"аьбвгӏдеёжзийкхлмнопрстуфцчшщъыэюяАЬБВГӀДЕЁЖЗИЙКХЛМНОПРСТУФЦЧШЩЪЫЭЮЯ", mark:"̈̆","number":"", punctuation:"‐–—…‘‚“„«»§", local:"нохчийн мотт", localtrans:"[ˈnɔx.t͡ʃiːn mu͜ɔt]", 
orth:`[Cyrillic] &nbsp; `,
also:
['ce-arab | arab | No longer in use.',
'ce-latn | latn | From 1925-1938.']
},

"ceb": { name:"Cebuano (Bisaya)", source:"cldr_ceb,udhr_ceb", region:"seasia", countries:"Philippines", script:"ascii", speakers:"16000000", local:"Binisaya", notes:`Wikipedia suggests that an acute accent is used to indicate stress.`},

"cfm": { name:"Falam Chin (Baro Halam)", source:"udhr_flm,1f092f9b4f53e2b4ec5dc91221d0cdb55c50c844", region:"seasia", countries:"Myanmar, India", script:"ascii", speakers:"107000", letter:"Ṭṭ", mark:"̣", local:"Laiṭawng / Falam Chin", 
orth:`[Latin] &nbsp; Primary usage.`,
also:
['cfm-beng | beng | Used in India.']
},

"cgg": { name:"Chiga (Rukiga, Ruchiga, Kiga)", source:"cldr_cgg", region:"afr", countries:"Uganda", script:"ascii", speakers:"1600000", local:"Rukiga", orth:`[Latin] Used since 1964.`},

"ch": { name:"Chamorro", silcode:"cha", source:"udhr_cha,e97485e1a7f539f982e7cfeb56ea244d8b39af8a", region:"oce", countries:"Guam, USA, Northern Mariana Islands", script:"ascii", speakers:"58000", letter:"ÅÑåñ", mark:"̃̊", local:"Finu' Chamoru", localtrans:"/finuʔ tʃəˈmɒroʊ/"},

"chj": { name:"Ojitlán Chinantec", source:"udhr_chj", region:"cam", countries:"Mexico", script:"latn", speakers:"38000", letter:"öíäñáéúïüëóÖÍÄÑÁÉÚÏÜËÓ", mark:"̈́̃", punctuation:"–", symbol:"°", local:"Jmiih kia’ dzä ‘vï ï / Jujmi", related:`Although there is no macrolanguage, this is one of several Chinantecan languages that are partially mutually intelligible: [cco], [chj], [chq], [chz], [cle], [cnl], [cnt], [cpa], [csa], [cso], [cte], [ctl], [cuc], [cvn].`},

"chk": { name:"Chuukese (Trukese)", source:"udhr_chk", region:"oce", countries:"Micronesia", script:"ascii", speakers:"51330", local:"Chuuk"},

"chr": { name:"Cherokee", local:"ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ", localtrans:"[dʒalaˈɡî ɡawónihisˈdî]", silcode:"", 
source:"4be08b04f56e7763cde42dfbebfb49497c506a2b,cldr_chr,udhr_chr_cased,udhr_chr_uppercase", 
region:"nam", countries:"USA", script:"cher", speakers:"1520", 
letter:"ᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴᏸᏹᏺᏻᏼꭰꭱꭲꭳꭴꭵꭶꭷꭸꭹꭺꭻꭼꭽꭾꭿꮀꮁꮂꮃꮄꮅꮆꮇꮈꮉꮊꮋꮎꮏꮐꮑꮒꮓꮔꮕꮖꮗꮘꮙꮚꮛꮜꮝꮞꮟꮠꮡꮢꮣꮤꮥꮦꮧꮨꮩꮪꮫꮬꮭꮮꮯꮰꮱꮲꮳꮴꮵꮶꮷꮸꮹꮺꮻꮼꮽꮾꮿ", letteraux:"ᎼᎽꮌꮍ", mark:"̣̤̰̱", markaux:"̀́̂̄̋̌", number:"", numberaux:"", punctuation:"‘’“”", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"%[]§ʼ‑–—†‡…‰′″", deprecated:"", 
orth:`[Cherokee] &nbsp; <a href="../scripts/cherokee" target="_blank">Details</a>.`,
also:
["chr-latn | latn | "],
linked:"cher/chr", picker:"cher", font:"Noto Sans Cherokee", 
},

"cic": { name:"Chickasaw", source:"udhr_cic,f258793e409fd555ca28c242b449ca206a0bd6c0", region:"nam", countries:"USA", script:"latn", speakers:"75", letter:"óáíÓÁÍ", mark:"̱́", punctuation:"—", local:"Chikashshanompa'", localtrans:"[tʃikaʃːanompaʔ]", notes:`U+0331 COMBINING MACRON BELOW is used with a and o, for which there are no precomposed characters.`},

"cjk": { name:"Chokwe", source:"udhr_cjk", region:"afr", countries:"Angola, DRC, Zambia", script:"ascii", speakers:"980000"},

"cjm": { name:"Cham", local:"ꨌꩌ", localtrans:"Chăm", silcode:"", 
source:"r12a", 
region:"seasia", countries:"Vietnam", script:"cham", speakers:"132000", 
letter:"ꨀꨁꨂꨃꨄꨅꨆꨇꨈꨉꨊꨋꨌꨍꨎꨏꨐꨑꨒꨓꨔꨕꨖꨗꨘꨙꨚꨛꨜꨝꨞꨟꨠꨡꨢꨣꨤꨥꨦꨧꨨꩀꩁꩂꩄꩅꩆꩇꩈꩉꩊꩋ", letteraux:"", mark:"ꨩꨪꨫꨬꨭꨮꨯꨰꨱꨲꨳꨴꨵꨶꩃꩌꩍ", markaux:"", number:"꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙", numberaux:"", punctuation:"꩜꩝꩞꩟", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Cham] Primary use for Eastern Cham speakers. <a href='../scripts/cham/cjm.html' target='_blank'>Details</a>.`,
linked:"cham/cjm", picker:"cham-cjm", font:"Noto Sans Cham", 
},

"cjs": { name:"Shor", source:"udhr_cjs,eec6428d9ce711e3709def0279121e23a4bf488a", region:"nasia", countries:"Russia", script:"cyrl", speakers:"2800", letter:"кижнтолағыңудерцязчқшйъӱгьсмбюпӧэвфхКИЖНТОЛАҒЫҢУДЕРЦЯЗЧҚШЙЪӰГЬСМБЮПӦЭВФХЁЩщё", mark:"̆̈", local:"Шор тили / Тадар тили", localtrans:"(šor tili / tadar tili)", 
orth:`[Cyrillic] &nbsp; Developed by Altai missionaries in 1880s.`,
also:
['cjs-latn | latn | Used between 1930-1938.']
},

"ckb": { name:"Central Kurdish (Sorani)", local:"کوردیی ناوەندی / سۆرانی", localtrans:"(Kurdîy nawendî / Soranî)", rtl:true, 
source:"cldr_ckb,fa1e79cbcb9ca9906ebecd0c8e47c135d5a380c1", 
region:"wasia", countries:"Iraq, Iran", script:"arab", speakers:"7250000", 
letter:"ئابتجحخدرزسشعغفقلمنهوپچڕژڤکگڵھۆیێە", letteraux:"يۊ", mark:"", markaux:"ٔ", number:"", punctuation:"،؛؟“”…", symbol:"", other:"\u200C\u200D\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Arabic] &nbsp; Alphabetised naskh style, from 1920s, mostly used by Kurds in Iraq and Iran.`,
also:
["ckb-latn | latn | Proposed Universal Kurdish alphabet (adds Ł, Ň, Ř and Ü).",
"ckb-x-yekgirtu | latn | Yekgirtú (Kurdish Unified Alphabet) promoted by the Kurdish Academy of Language for all Kurdish dialects."],
related:`Macrolanguage is Kurdish [ku].`,
type:"alphabet", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"rtl", 
vowels:"let:4 ml:2", 
linked:"arab/ckb", fonts:"arab-ckb", 
},


"ckb-latn": { name:"Central Kurdish (Sorani)", source:"udhr_ckb,565fb1c44c0ddde28a6bec9836935ab74c3f72c9", region:"wasia", script:"latn", speakers:"7250000", letter:"şŞûîêçÛÎÊÇ", mark:"̧̂", aux:"̣̈̌ḤḥḦḧẌẍŁłŇňŘřÜüʿ", local:"Kurdîy nawendî, Soranî", 
related:`Macrolanguage is Kurdish [ku].`,
orth:`[Latin] &nbsp; Proposed Universal Kurdish alphabet (adds Ł, Ň, Ř and Ü).`,
also:
['ckb | arab | Alphabetised naskh style, from 1920s, mostly used by Kurds in Iraq and Iran.',
'ckb-x-yekgirtu | latn | Yekgirtú (Kurdish Unified Alphabet) promoted by the Kurdish Academy of Language for all Kurdish dialects.']
},

"cnh": { name:"Haka Chin (Lai)", source:"udhr_cnh", region:"seasia", countries:"Myanmar, India", script:"ascii", speakers:"446264", local:"Lai, Lai Chin"},

"cni": { name:"Asháninka", source:"udhr_cni,4a72f03687c85b581a7fab4146a3d0d9420e3257", region:"sam", countries:"Peru", script:"latn", speakers:"~35000", letter:"áéÁÉÑñ", mark:"́̃", local:"Asháninka", notes:"Asháninka was recognized as a separate language from Ashéninka ([cpu], [prq], [cpc], [cpb], [cjo], [cpy]) in 2017, and the process to fix an alphabet was underway during 2018."},

"co": { name:"Corsican", silcode:"cos", source:"udhr_cos,3f49d57dae01202ea97c4d9eae9e2df2a8d3a65e", region:"eur", countries:"France", script:"latn", speakers:"325000", letter:"àèìùòÀÈÌÙÒ", mark:"̀", punctuation:"’", aux:"ÉÔéố̂", local:"corsu / lingua corsa", localtrans:"[ˈkorsu / ˈkɔrtsu / ˈliŋɡwa ˈɡorsa]"},

"cof": { name:"Colorado (Tsafiki, Tsáchila)", source:"udhr_cof", region:"sam", countries:"Ecuador", script:"latn", speakers:"2300", letter:"íÍ", mark:"́"},

"cot": { name:"Caquinte (Poyenisati)", source:"udhr_cot", region:"sam", countries:"Peru", script:"latn", speakers:"500", letter:"óÓ", mark:"́", punctuation:"¿", local:"Aguenquetsatsare"},

"cpu": { name:"Pichis Ashéninka", source:"udhr_cpu", region:"sam", countries:"Peru", script:"latn", speakers:"9881", letter:"ñáéÑÁÉ", mark:"̃́", related:`This is one of several closely related Ashéninka languages (though there is no macrolanguage), including: [prq], [cpc], [cpb], [cjo], [cpy]. Ashéninka was recognized as a separate language from Asháninka ([cni]) in 2017, and the process to fix an alphabet was underway during 2018.`},

"cr": { name:"Cree", redirect:true, source:"", region:"nam", script:"cans", speakers:"", notes:`cr is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern East Cree [crj]<br/> Plains Cree [crk]<br/> Northern East Cree [crl]<br/> Moose Cree [crm]<br/> Swampy Cree [csw]<br/> Woods Cree [cwd].
Legacy applications often use cr rather than [cwd].`},

"cri": { name:"Sãotomense (Forro Creole, Santomense)", source:"udhr_007", region:"afr", countries:"São Tomé e Príncipe", script:"latn", speakers:"70000", letter:"çóêéáâôºíÇÓÊÉÁÂÔÍ", mark:"̧́̂", notes:`Wikipedia says that there is no standard orthography, and Ethnologue says that the language is unwritten.`},

"crk": { name:"Plains Cree (Western Cree)", local:"ᓀᐦᐃᔭᐍᐏᐣ‎", localtrans:"(nēhiyawēwin)", label:"Cree, Plains",
source:"bab7473b269caccd315056ce1d856d43b7cfb1ac", 
region:"nam", countries:"Canada", script:"cans", speakers:"3170", 
letter:"ᐁᐃᐄᐅᐆᐊᐋᐍᐏᐑᐓᐕᐘᐚᐟᐠᐢᐣᐤᐦᐨᐯᐱᐲᐳᐴᐸᐹᐻᐽᐿᑁᑃᑅᑇᑊᑌᑎᑏᑐᑑᑕᑖᑘᑚᑜᑞᑠᑢᑤᑫᑭᑮᑯᑰᑲᑳᑵᑷᑹᑻᑽᑿᒁᒉᒋᒌᒍᒎᒐᒑᒓᒕᒗᒙᒛᒝᒟᒣᒥᒦᒧᒨᒪᒫᒭᒯᒱᒳᒵᒷᒹᒼᓀᓂᓃᓄᓅᓇᓈᓊᓌᓎᓬᓭᓯᓰᓱᓲᓴᓵᓷᓹᓻᓽᓿᔁᔃᔦᔨᔩᔪᔫᔭᔮᔰᔲᔴᔶᔸᔺᔼᕀᕒᕽᣟ", mark:"", number:"", punctuation:"᐀᙮", symbol:"", other:"",
aux:"§«»ʼ͏ᑉᒽᓫᕑᵖᵗ​‌‍‐‑–—‘’“”†‡…′″",
orth:`[UCAS] &nbsp; <a href="../scripts/cans/cans-crk" target="_blank">Details</a>`,
also:
["crk-latn | latn | "],
type:"syllabary", cs:"no", gpos:"no", gsub:"no", cursive:"no", direction:"ltr", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"yes", hyphen:"᐀",  justification:"sp",
vowels:"syl:7", clusters:"ss", finals:"ss:y", 
linked:"cans/crk", picker:"cans-crk", 
},

"crs": { name:"Seychellois Creole (Seselwa)", source:"udhr_crs", region:"afr", countries:"Seychelles", script:"latn", speakers:"73000", letter:"íÍ", mark:"́", punctuation:"’", local:"kreol, seselwa"},

"cs": { name:"Czech (Bohemian)", silcode:"ces", source:"cldr_cs,udhr_ces", region:"eur", countries:"Czech Republic, Slovakia, USA, Serbia, Austria", script:"latn", speakers:"10700000", letter:"áéíóúýÁÉÍÓÚÝčďěňřšťůžČĎĚŇŘŠŤŮŽ", mark:"́̌̊", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīľłŏōœŕŭūĂĀĔĒĬĪĽŁŎŌŒŔŬŪŸàâåäãæçèêëìîïñòôöøùûüÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̈̃̄", local:"čeština", localtrans:"[ˈtʃɛʃcɪna]"},

"csa": { name:"Chiltepec Chinantec", source:"udhr_csa", region:"cam", countries:"Mexico", script:"latn", speakers:"1800", letter:"öüïóáñäëéíúÖÜÏÓÁÑÄËÉÍÚ", mark:"̷̱̍̎̈́̃", punctuation:"†", related:`Although there is no macrolanguage, this is one of several Chinantecan languages that are partially mutually intelligible: [cco], [chj], [chq], [chz], [cle], [cnl], [cnt], [cpa], [csa], [cso], [cte], [ctl], [cuc], [cvn].`},

"csw": { name:"Swampy Cree (Maskekon, Omaškêkowak, Omushkego)", local:"ᓀᐦᐃᓇᐍᐏᐣ", localtrans:"(Nêhinawêwin)", 
source:"udhr_csw", 
region:"nam", countries:"Canada", script:"cans", speakers:"1805", 
letter:"ᐁᐢᐱᑕᑲᒥᐠᐊᑭᒋᐃᑗᐎᐣᓂᑯᓯᓇᐅᔑᒧᓀᐡᑐᑌᑎᐸᐗᐳᒪᒶᐌᔭᓄᑾᔦᒣᐤᓴᓶᔕᑴᐯᐟᑫᓱᓉᐺᑡᐨᔓᑺᓋᔗᔾᔀᑊᔡᒬᒼ", punctuation:"᙮", 
related:`Macrolanguage is Cree [cr].`,
type:"syllabary", cs:"no", gpos:"no", gsub:"no", cursive:"no", direction:"ltr", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"?", justification:"sp",
clusters:"ss:y", 
picker:"cans", 
},

"ctd": { name:"Tedim Chin", source:"udhr_ctd", region:"seasia", countries:"Myanmar, India", script:"ascii", speakers:"340000", local:"Tidim"},

"cu": { name:"Church Slavonic (Church Slavic, New Church Slavonic)", silcode:"chu", source:"cldr_cu", region:"eur", countries:"Russia", script:"cyrl", speakers:"0", letter:"абвгдеєжѕзиіїйклмнѻоѡѽѿпрстуфхцчшщъыьѣюѧѫѯѱѳѵѷАБВГДЕЄЖЅЗИІЇЙКЛМНѺОѠѼѾПРСТУФХЦЧШЩЪЫЬѢЮѦѪѮѰѲѴѶꙿꙁꙍꙋꙗꙀꙌꙊꙖⸯ", mark:"҇҃ⷠⷡⷢⷣⷤⷥⷦⷧⷨⷩⷪⷬⷭⷯⷱⷴ꙽", punctuation:"꙾꙳–—‐", symbol:"҂", aux:"҈҉҄ҥҁџѥѩѭҤҀЏѤѨѬⷶⷷⷸⷫⷵⷮⷹⷰⷲⷳⷺⷻⷼⷽⷾⷿ꙰꙱꙲꙯ꙣꙴꙃꙅꙵꙶꙇꙉꙥꙧꙩꙫꙭꙮꚙꚛꙷꚞꙻꙡꙏꙸꙑꙹꙺꙓꙕꚟꙙꙛꙝꙟꙢꙂꙄꙆꙈꙤꙦꙨꙪꙬꚘꚚꙠꙎꙐꙒꙔꙘꙚꙜꙞ︯︮", local:"Црькъвьнословѣньскъ ѩзыкъ / Словѣньскъ‎", localtrans:"(Slovyensk)", 
orth:`[Cyrillic] &nbsp; Old Church Slavonic variant ([Cyrs]).`,
also:
['cjs-glag | glag | '],
font:"'Times New Roman'",
},

"cy": { name:"Welsh (Cymraeg, y Gymraeg)", silcode:"cym", source:"cldr_cy,udhr_cym", region:"eur", countries:"Wales, Argentina", script:"latn", speakers:"700000", letter:"áàâäéèêëíìîïóòôöúùûüýÿÁÀÂÄÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜÝŵŷŴŶŸẃẁẅỳẂẀẄỲ", mark:"́̀̂̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪåãæçñøÅÃÆÇÑØ̧̆̊̃̄", local:"Cymraeg / y Gymraeg ", localtrans:"[kʰəmˈraiɡ / ə ɡəmˈraiɡ]"},

"da": { name:"Danish", silcode:"da", source:"cldr_da,udhr_dan", region:"eur", countries:"Denmark, Finland, Norway, Sweden", script:"latn", speakers:"5500000", letter:"æøåÆØÅ", mark:"̊", punctuation:"§‐–…‘’“”†′″", aux:"œŒŸǿǾáàâçéèêëíîïñóôúùûÿüäöÁÀÂÇÉÈÊËÍÎÏÑÓÔÚÙÛÜÄÖ̧́̀̂̈̃", local:"dansk", localtrans:"[ˈtænˀsk]"},

"dag": { name:"Dagbani (Dagbanli, Dagbanle)", source:"udhr_dag,5fa369ea3e444b15406074c4e55ab99887619adf", region:"afr", countries:"Ghana", script:"latn", speakers:"1160000", letter:"ƐƆƔƷŋŊɛɔɣʒ’", local:"Dagbanli", 
orth:`[Latin] &nbsp; Used since 1968.`},

"dav": { name:"Taita (Dawida)", source:"cldr_dav", region:"afr", countries:"Kenya", script:"ascii", speakers:"400000", local:"Kidawida"},

"ddn": { name:"Dendi", source:"udhr_ddn", region:"afr", countries:"Benin, Nigeria", script:"latn", speakers:"257050", letter:"ãâõÃÂÕǎǒƆƐǍƉǑŋŊɔɛɖ", mark:"̃̌̂", local:"Songhay"},

"de": { name:"German", silcode:"de", source:"cldr_de,udhr_udhr_deu_1996", region:"eur", countries:"Germany, Austria, Switzerland", script:"latn", speakers:"95000000", letter:"äößüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçéèêëíìîïñóòôøúùûÿÁÀÂÅÃÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̇́̀̆̂̊̃̄", local:"Deutsch", localtrans:"[dɔʏtʃ]",
related:`Other language subtags containing the word "German" include: Colonia Tovar German [gct], Hutterite German, Hutterisch [geh], Germanic languages [gem], East Germanic languages [gme], Middle High German (ca. 1050-1500) [gmh], Middle Low German [gml], North Germanic languages [gmq], West Germanic languages [gmw], Old High German (ca. 750-1050) [goh]`,
orth:`[Latin] &nbsp; Revision of 1996 ([1996]).`,
also:
['de-1901 | latn | Traditional orthography.',
'de-latf | latn | Fraktur variant of Latin ([Latf]), until 1940.',
'de-runr | runr | No longer in use.']
},

"dga": { name:"Southern Dagaare", source:"udhr_dga", region:"afr", countries:"Ghana", script:"latn", speakers:"1100000", letter:"ãÃƐƆũŨɛɔ", mark:"̃", local:"Dagaare", 
orth:`[Latin] Used since 1966.`},

//"dhw": { name:"Danwar (Danuwar, Denwar, Dhanvar, Dhanwar, Rai)", source:"udhr_dhw", region:"sasia", script:"ascii", speakers:"46000", countries:"Nepal", local:"दनुवार‎ (danuvāra)", notes:`Dialects: Kochariya (Bara, Rautahat, Sarlahi), Done Danuwar (Kavre, Sindhupalchowk), Dukuchhap Danuwar (Lalitpur), Dolbar Danuwar (Terai)...
//Orthographies:
//* Devanagari`},

"dje": { name:"Zarma (Djerma, Dyabarma, Dyarma, Dyerma, Adzerma, Zabarma, Zarbarma, Zarmaci, Zerma)", source:"cldr_dje,2e134c6858f7aabbbc5a50ac8d7c5a73e08e7435", region:"afr", script:"latn", speakers:"3600000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌", aux:"ĚěǍǎǏǐǑǒǓǔÀÁÂÈÉÊÌÍÎÒÓÔÙÚÛàáâèéêìíîòóôùúû̀́̂", countries:"Niger", local:"zarma ciine", 
orth:`[Latin] &nbsp; `,
also:
['dje-arab | arab | Naskh style.']
},

"dsb": { name:"Lower Sorbian", source:"cldr_dsb", region:"eur", script:"latn", speakers:"6900", letter:"óÓčćěłńŕšśžźČĆĚŁŃŔŠŚŽŹ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœřşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŘŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋", countries:"Germany", local:"dolnoserbšćina, dolnoserbski", localtrans:"[ˈdɔlnɔˌsɛrskʲi]"},

"dua": { name:"Duala (Douala, Diwala, Dwela, Dualla, Dwala)", source:"cldr_dua", region:"afr", script:"latn", speakers:"90000", letter:"áéíóúÁÉÍÓÚƁƊƐƆŋūŊŪɓɗɛɔ", mark:"́̄", countries:"Cameroon", local:"Duala"},

"duu": { name:"Drung (Dulong, Derung, Rawang, Trung)", source:"udhr_020", region:"easia", script:"ascii", speakers:"14000", countries:"China, Tibet", local:"Tvrung kvt", localtrans:"[tə˧˩ɻuŋ˥˧ kət˥]", 
orth:`[Latin] &nbsp; Pinyin-based, used 1984-1990s.`},

"dv": { name:"Dhivehi (Maldivian, Divehi)", local:"ދިވެހި / ދިވެހިބަސް ", localtrans:"[d̪iˈʋehi / d̪iˈʋehi bas]", silcode:"div", rtl:true, 
source:"udhr_div,760eec0c90074853cbeeb6ec23e9bb8d14dd7c0d", 
region:"sasia", countries:"Maldives", script:"thaa", speakers:"340000", 
letter:"ހށނރބޅކއވމފދތލގޏސޑޒޓޔޕޖޗޘޙޚޛޜޝޞޟޠޡޢޣޤޥ", letteraux:"ﷲ", mark:"ަާިީުޫެޭޮޯް", number:"", numberaux:"٠١٢٣٤٥٦٧٨٩", punctuation:"،؛؟“”", symbol:"", symbolaux:"﷽", other:"\u{061C}", aux:",/;<>[]⹁", 
orth:`[Thaana] &nbsp;  <a href="../scripts/thaana/" target="_blank">Details</a>.`,
also:
["dv-latn | latn | ‘Maldivian Latin’."],
linked:"thaa/dv", picker:"thaa", font:"", 
},

"dyo": { name:"Jola-Fonyi", source:"cldr_dyo,udhr_dyo,cd01ae44156075d3e8aa249200adf6c04edb6acb", region:"afr", script:"latn", speakers:"410000", letter:"áéíñóúàÁÉÍÑÓÚÀŋŊ", mark:"́̃̀", punctuation:"“”‰", symbol:"°", countries:"Senegal, Gambia", local:"Jóola-Fóoñi / kújoolaay", 
orth:`[Latin] &nbsp; `,
also:
['dyo-arab | arab | Naskh style.']
},

"dyu": { name:"Dyula (Jula, Dioula)", source:"udhr_dyu", region:"afr", script:"latn", speakers:"2500000", letter:"úàìóáòùèíéÚÀÌÓÁÒÙÈÍÉƐƆƝŋŊɛɔɲ", mark:"́̀", punctuation:"’‘", countries:"Côte d'Ivoire, Burkina Faso", local:"Julakan", 
orth:`[Latin] &nbsp; `,
also:
['dyu-arab | arab | Naskh style.',
'nqo | nkoo |  Written koiné used by speakers of Maninka, Bambara, Dyula and related dialects. In Côte d’Ivoire &amp; Burkina Faso.']
},

"dz": { name:"Dzongkha (Bhutanese)", source:"cldr_dz,udhr_dzo", region:"sasia", script:"tibt", speakers:"171080", letter:"ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ", mark:"ིེོུྐྑྒྔྗྙྟྠྡྣྤྥྦྨྩྪྫྭྱྲླྵྶྷཱྕ", punctuation:"༼༽༄༅༆༈༉༊࿐࿑༒࿒࿓࿔༌།༎༏༐༑༔་§‐–—…‘’“”†‡","number":"༡༢༣༤༥༦༧༨༩༠", symbol:"༶྾྿༴", aux:"྄ཊཋཌཎཾཥྀཻཽྚྛྜྞྺྻྼ", countries:"Bhutan", local:"རྫོང་ཁ་", localtrans:"[dzoŋkʰa]"},

"ebu": { name:"Embu (Kîembu)", source:"cldr_ebu", region:"afr", script:"latn", speakers:"320000", letter:"ĩũĨŨ", mark:"̃", countries:"Kenya", local:"Kiembu", notes:`The fact that Kîembu is written in Wikipedia with an i-circumflex may indicate that at least one character is missing from the CLDR list.`},

"ee": { name:"Ewe", silcode:"ewe", source:"cldr_ee,udhr_ewe", region:"afr", script:"latn", speakers:"20000000", letter:"áàãéèíìóòõúùÁÀÃÉÈÍÌÓÒÕÚÙƒƉƐƑƔƆƲĩŋũĨŊŨẽẼɖɛɣɔʋ", mark:"́̀̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕĭŏœŭĂĀĔĬŎŒŬŸâåäæçêëîïñôöøûüÿÂÅÄÆÇÊËÎÏÑÔÖØÛÜ̧̆̂̊̈̄", countries:"Ghana", local:"Èʋegbe‎", localtrans:"(Èwegbe)", 
orth:`[Latin] &nbsp; Used since 1850s, primary usage.`},

"ekk": { name:"Standard Estonian", source:"cldr_et,udhr_est", region:"eur", script:"latn", speakers:"1100000", letter:"õäöüÕÄÖÜšžŠŽ", mark:"̌̃̈", aux:"āēīŏōœūĀĒĪŎŌŒŪáàâåæçéèêëíìîïñóòôøúùûÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̂̊̄̆", countries:"Estonia, Finland", local:"Eesti", notes:`Macrolanguage is Estonian [et] . Legacy applications often use et rather ekk.`},

"el": { name:"Greek, Modern", local:"ελληνικά / Νέα Ελληνικά‎", localtrans:"(elliniká / néa ellīniká)", silcode:"ell", 
source:"699008154b84228aa76b6e70cce872c0177878c1,cldr_el,udhr_udhr_ell_monotonic", 
region:"eur", countries:"Greece, Cyprus, Albania", script:"grek", speakers:"12000000", 
letter:"ʹΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ", letteraux:"ϗϛϞϟϠϡ", mark:"́̈", number:"", punctuation:"«·»‑–—‘’“”…", symbol:"͵€", other:"", aux:"-[]ʼ̍‰‹›", 
orth:`[Greek] &nbsp; Essentially Monotonic Greek ([el-monoton]), however the polytonic Greek characters are included in the list of infrequently used characters. <a href="../scripts/greek" target="_blank">Details</a>.`,
also:
["grc | grek | Ancient Greek, polytonic ([polyton]).",
"el-cyrl | cyrl | Used in Ukraine."],
related:`Related Greek language codes include [cpg] (Cappadocian Greek), [gmy] (Mycenaean Greek), [grc] (Ancient Greek (to 1453)), [grk] (Greek languages), [rge] (Romano-Greek), [pnt] (Pontic), [tsd] (Tsakonian), [yej] (Yevanic).<br/>Variants include [monoton] (Monotonic Greek), [polyton] (Polytonic Greek).
In Cyprus, the dialect is reportedly more similar to Classical Greek [grc] in some vocabulary and grammar than that spoken in Greece.`,
linked:"grek/el", picker:"grek", font:"", 
},

"emk": { name:"Eastern Maninkakan", source:"udhr_emk", region:"afr", script:"latn", speakers:"5000000", letter:"ɲɛɔƝƐƆ", countries:"Guinea, Liberia, Mali, Sierra Leone", 
related:`Macrolanguage is Mandingo [man]. Legacy applications often use man rather emk.`,
orth:`[Latin] &nbsp; `,
also:
['eml-arab | arab | ',
'nqo | nkoo |  Written koiné used by speakers of Maninka, Bambara, Dyula and related dialects. Used in Guinea.']
},

"en": { name:"English", silcode:"en", source:"cldr_en,udhr_eng", region:"eur", script:"ascii", speakers:"~380000000", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄", 
orth:`[Latin] &nbsp; `,
also:
['en-dsrt | dsrt | Limited usage 1854-1877',
'en-shaw | shaw | No longer in use.']
},

"eo": { name:"Esperanto", silcode:"epo", source:"cldr_eo,udhr_epo", region:"eur", script:"latn", speakers:"~3000", letter:"ĉĝĥĵŝŭĈĜĤĴŜŬ", mark:"̂̆", punctuation:"‐–—…‘’“”", local:"Esperanto / Lingvo Internacia"},

"es": { name:"Spanish (Castilian)", silcode:"spa", source:"cldr_es,udhr_spa", region:"eur", script:"latn", speakers:"480000000", letter:"áéíïñóúüýÁÉÍÏÑÓÚÜÝ", mark:"́̈̃", punctuation:"‐–—…‘’“”†‡′″¡¿«»§", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÒÔÖØÙÛ̧̀̆̂̊̄", countries:"Spain, Central &amp; South America, USA, Philippines", local:"Castellano / Español"},

"et": { name:"Estonian", redirect:true, source:"", region:"eur", script:"latn", speakers:"0", notes:`et is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Standard Estonian [ekk]<br/>Võro [vro]
Legacy applications often use et rather than [ekk] (Standard Estonian).`},

"eu": { name:"Basque", silcode:"eus", source:"cldr_eu,udhr_eus", region:"eur", script:"latn", speakers:"550000", letter:"çñÇÑ", mark:"̧̃", punctuation:"§‐–—…‘’“”†‡′″","separator":"", symbol:"", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæéèêëíìîïóòôöøúùûüÿÁÀÂÅÄÃÆÉÈÊËÍÌÎÏÓÒÔÖØÚÙÛǗ̀̆̂̊̈̄", countries:"Spain, France", local:"Euskara"},

"eve": { name:"Even (Lamut, Ewen, Eben, Orich, Ilqan)", source:"udhr_eve", region:"nasia", script:"cyrl", speakers:"5700", letter:"стаьябэйилокчурмнхдеҥгөыцпвһюзѳшжъфщСТАЬЯБЭЙИЛОКЧУРМНХДЕҤГӨЫЦПВҺЮЗѲШЖЪФЩ", mark:"̆", punctuation:"‐", countries:"Russia", notes:`There are two standard orthographies in Cyrillic, limited usage.`},

"evn": { name:"Evenki (Tungus, Solon)", source:"udhr_evn", region:"nasia", script:"cyrl", speakers:"17000", letter:"упкатңилэбгдерӣынӯмвчзоюцяьйсёһъщжхфУПКАТҢИЛЭБГДЕРӢЫНӮМВЧЗОЮЦЯЬЙСЁҺЪЩЖХФ", mark:"̄̆̈", punctuation:"–", countries:"China, Russia", 
orth:`[Cyrillic] &nbsp; Since 1937, small scale use in Russia.`,
also:
['evn-latn | latn | 1931-1937 in Russia, and limited use in China and on internet since 1983.']
},

"ewo": { name:"Ewondo (Kolo)", source:"cldr_ewo", region:"afr", countries:"Cameroon", script:"latn", speakers:"580000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƏƐǏǸǑƆǓěńŋĚŃŊəɛɔ", mark:"́̀̂̌", local:"Ewondo"},

"fa": { name:"Persian (Farsi)", silcode:"fas", redirect:true, source:"", region:"wasia", script:"macrolanguage", speakers:"0", notes:`fa is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Iranian Persian [pes]<br/>Dari, Afghan Persian [prs]
Legacy applications often use fa rather than [pes] (Iranian Persian) or [prs] (Dari, Afghan Persian).`},

"fat": { name:"Fanti (Fantse, Mfantse, Fante)", silcode:"aka", source:"udhr_aka_fante", region:"afr", countries:"Ghana", script:"latn", speakers:"1900000", letter:"ãõÃÕƆƐɔɛ", mark:"̃", 
related:`Macrolanguage is Akan [ak]. Legacy applications often use ak rather fat.
Ethnologue regards Fanti as a dialect of Akan: it doesn't have its own entry.`,
orth: `[Latin] &nbsp; Since 1978.`
},

"ff": { name:"Fula (Fulani, Fulfulde, Fulah)", local:"Fula / Fulfulde", localtrans:"", silcode:"ful", 
source:"2175c4f5eeb22d1c5d1c299445a11ffe23e00a2f", 
region:"afr", countries:"Benin, Burkina Faso, Cameroon, Chad, Gambia, Ghana, Guinea, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone", script:"latn", speakers:"24000000", 
letter:"ÑñŊŋƁƊƝƳƴɓɗɲʼ", mark:"", number:"", punctuation:"‘’“”…", symbol:"", other:"", aux:"[]«»Ɠɠ‑–—‰‹›", 
orth:`[Latin] &nbsp; <a href="../scripts/latin/ff" target="_blank">Details</a>.`,
also:
["ff-adlm | adlm | Since 1989, in development.",
"ff-arab | arab | Sub-Saharan/Sahelian style."],
related:`ff is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Maasina Fulfulde [ffm]<br/>Adamawa Fulfulde [fub]<br/>Pulaar [fuc]<br/>Borgu Fulfulde [fue]<br/>Pular [fuf]<br/>Western Niger Fulfulde [fuh]<br/>Bagirmi Fulfulde [fui]<br/>Central-Eastern Niger Fulfulde [fuq]<br/>Nigerian Fulfulde [fuv]
There is no indicated equivalence between one of the latter subtags and the macrolanguage subtag.`,
linked:"latn/ff", picker:"latn-ff", font:"", 
},

"ff-adlm": { name:"Fula (Fulani, Fulfulde, Fulah)", rtl:true, 
source:"87aa8d2418234ff41d8b66385c7475c5b8f290cb,udhr_fuf_adlm", 
region:"afr", script:"adlm", speakers:"3000000", 
letter:"𞤭𞤋𞤵𞤓𞤫𞤉𞤮𞤌𞤢𞤀𞤨𞤆𞤼𞤚𞤷𞤕𞤳𞤑𞤹𞤗𞤦𞤄𞤩𞤇𞤣𞤁𞤯𞤍𞤶𞤔𞤺𞤘𞤬𞤊𞤧𞤅𞤸𞤖𞤥𞤃𞤲𞤐𞤻𞤙𞤽𞤛𞤱𞤏𞤪𞤈𞤤𞤂𞤴𞤒𞤰𞤎𞤾𞤜𞤿𞤝𞥀𞤞𞥁𞤟𞥂𞤠𞥃𞤡𞥋", mark:"𞥊𞥆𞥅𞥄𞥈𞥉𞥇", number:"𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙", punctuation:"𞥟𞥞⹁⁏؟“”…", other:"\u{200C}\u{200D}\u{2067}\u{202B}\u{2066}\u{202A}\u{2068}\u{2069}\u{202C}\u{200F}\u{200E}",
orth:`[Adlam] &nbsp; Since 1989, in development. <a href="../scripts/adlam/">Details</a>`,
also:
["ff | latn | ",
"ff-arab | arab | Sub-Saharan/Sahelian style."],
related:``,
type:"alphabet", cs:"yes", gpos:"yes", gsub:"yes", cursive:"yes", direction:"rtl*", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"yes",  justification:"sp",
vowels:"let:5+2",
linked:"adlm/fuf", picker:"adlm", 
},

"ff-arab": { name:"Adamawa Fulfulde (Ajamiya)", local:"ڢُلْڢُلْدٜ‎", localtrans:"", silcode:"fub", xxlang:"ff", rtl:true, 
source:"tbd", 
region:"afr", countries:"Nigeria, Niger, Côte d'Ivoire, Benin, Chad, Sudan", script:"arab", speakers:"5673600", 
letter:"ءأإابتثجحخدذرزسشصضطظعغقلمنوىيڢکݠࢡࢨࢩ", letteraux:"ه", mark:"͏َُِّْٰٜٛ", markaux:"ٕٔ", number:"٠١٢٣٤٥٦٧٨٩", punctuation:"«»،؛؟‑–—…⸫", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"", 
orth:`[Arabic] &nbsp; Used mostly for muslim texts. <a href="../scripts/arab/ff.html" target="_blank">Details.</a>`,
also:
["ff-adlm | adlm | Since 1989, in development.",
"ff-latn | latn | Primary usage. Based on Pan-Nigerian alphabet since 1980s. <a href='../scripts/latn/ff.html' target='_blank'>Details.</a>"],
linked:"arab/ff", picker:"arab-ff", font:"", 
},

"fi": { name:"Finnish", silcode:"fin", source:"cldr_fi,udhr_fin", region:"eur", countries:"Finland, Sweden, Russia", script:"latn", speakers:"5400000", letter:"åäöÅÄÖšžŠŽ", mark:"̌̊̈", punctuation:"»§‐–…’”", aux:"ăąāćčċďđěėęēğģħįīıķĺľļłńňņŋőœŕřśŝşťţŧůűųūźżĂĄĀĆČĊĎĐĚĖĘĒĞĢĦİĮĪĶĹĽĻŁŃŇŅŊŐŒŔŘŚŜŞŤŢŦŮŰŲŪŸŹŻʒǧǥȟǩșțǯǦǤȞǨȘȚƷǮáàâãçðéèêëíîïñóòôõßúùûýÿüþæøÁÀÂÃÇÐÉÈÊËÍÎÏÑÓÒÔÕÚÙÛÝÜÞÆØ̨̧̦̇́̀̆̂̃̄̋", local:"Suomi", 
related:`Finnish is closely related to Karelian [krl] and Livvi [olo]. In the Russian Federation eastern dialects merge gradually into Karelian.`},

"fil": { name:"Filipino", source:"cldr_fil", region:"seasia", countries:"Philippines", script:"latn", speakers:"28000000", letter:"ñÑ", mark:"̃", punctuation:"§‐–—…‘’“”′″", aux:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ́̀̂", local:"Filipino", 
orth:`[Latin] &nbsp; `,
also:
['fil-tglg | tglg | No longer in use.']
},

"fj": { name:"Fijian", silcode:"fij", source:"udhr_fij", region:"oce", countries:"Fiji", script:"ascii", speakers:"339210", local:"Na Vosa Vakaviti"},

"fo": { name:"Faroese", silcode:"fao", source:"cldr_fo,udhr_fao", region:"eur", countries:"Faroe Islands", script:"latn", speakers:"66000", letter:"áðíóúýæøÁÐÍÓÚÝÆØ", mark:"́", punctuation:"́§‐–…‘’“”†′″", local:"Føroyskt"},

"fon": { name:"Fon", source:"udhr_fon", region:"afr", countries:"Benin, Togo", script:"latn", speakers:"2200000", letter:"óéòèáúàìùíÓÉÒÈÁÚÀÌÙÍǎǐǔƐƆƉǍǏǓěđĚĐɛɔɖ", mark:"́̌̀", local:"Fongbe"},

"fr": { name:"French", silcode:"fra", source:"cldr_fr,udhr_fra", region:"eur", countries:"France, etc.", script:"latn", speakers:"150000000", letter:"àâæçéèêëîïôùûüÿÀÂÆÇÉÈÊËÎÏÔÙÛÜœŒŸ", mark:"̧̀̂́̈", punctuation:"«»§‐–—…’“”†‡", aux:"āćēīĳřšſĀĆĒĪĲŘŠǔǓáåäãíìñóòöõøßúÁÅÄÃÍÌÑÓÒÖÕØÚ̊̃̄̌", local:"français"},

"fuf": { name:"Pular", local:"Pular", 
source:"d71a9f038980d010a2887a07d956007fe0c9b285,udhr_fuf", 
region:"afr", countries:"Guinea, Sierra Leone, Senegal, Mali", script:"latn", speakers:"3000000", 
letter:"ŊŋƁƊƝƳƴɓɗɲʼ", letteraux:"Ññ",
orth:`[Latin] &nbsp; `,
also:
["fuf-adlm | adlm | Since 1989, in development.",
"fuf-arab | arab | Sub-Saharan/Sahelian style."],
related:`Macrolanguage is Fulah [ff].`,
type:"alphabet", cs:"yes", gpos:"no", gsub:"no", cursive:"no", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"?",  direction:"ltr",  justification:"sp", 
vowels:"let:5", 
linked:"latn/ff", picker:"latin-ff", 
},

"fuf-adlm": { name:"Pular", local:"", localtrans:"", silcode:"", xxlang:"fuf", rtl:true, 
source:"9ee024aca4e4745c9b779ef3ee0697c42700d2ca,udhr_fuf_adlm", 
region:"afr", countries:"", script:"adlm", speakers:"3000000", 
letter:"ـ𞤀𞤁𞤂𞤃𞤄𞤅𞤆𞤇𞤈𞤉𞤊𞤋𞤌𞤍𞤎𞤏𞤐𞤑𞤒𞤓𞤔𞤕𞤖𞤗𞤘𞤙𞤚𞤛𞤜𞤝𞤞𞤟𞤠𞤡𞤢𞤣𞤤𞤥𞤦𞤧𞤨𞤩𞤪𞤫𞤬𞤭𞤮𞤯𞤰𞤱𞤲𞤳𞤴𞤵𞤶𞤷𞤸𞤹𞤺𞤻𞤼𞤽𞤾𞤿𞥀𞥁𞥂𞥃𞥋", mark:"𞥊𞥄𞥅𞥆𞥇𞥈𞥉", number:"𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙", punctuation:"؟“”…⁏⹁𞥞𞥟", symbol:"", other:"\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"%,;[]«»ʼ‑–—‘’‰‹›", 
orth:`[Adlam] &nbsp; Since 1989, in development. <a href="../scripts/adlam/">Details</a>`,
also:
["fuf | latn | ",
"fuf-arab | arab | Sub-Saharan/Sahelian style."],
related:`Macrolanguage is Fulah [ff].`,
linked:"adlm/fuf", picker:"adlm", font:"", 
},

"fur": { name:"Friulian (Friulan, Eastern Ladin)", source:"cldr_fur,udhr_fur", region:"eur", countries:"Italy", script:"latn", speakers:"600000", letter:"àâçèêìîòôùûÀÂÇÈÊÌÎÒÔÙÛ", mark:"̧̀̂", aux:"čğšČĞŠåéëïñóüÅÉËÏÑÓÜ̊̌́̈̆̃", local:"Furlan"},

"fy": { name:"West Frisian", silcode:"fry", source:"cldr_fy,udhr_fri", region:"eur", countries:"Netherlands", script:"latn", speakers:"470000", letter:"ûâêúôòëïáàäéèíóöüýÛÂÊÚÔÒËÏÁÀÄÉÈÍÓÖÜÝ", mark:"̂́̀̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"æùÆÙ", local:"Frysk"},

"ga": { name:"Irish", silcode:"gle", source:"cldr_ga,udhr_gle", region:"eur", countries:"Ireland", script:"latn", speakers:"74000", letter:"áéíóúÁÉÍÓÚ", mark:"́", aux:"ḃḋḟṁṗṡṫḂḊḞṀṖṠṪċġĊĠåÅ̊̇", local:"Gaeilge", 
orth:`[Latin] &nbsp; [Latg] is a special script tag for the Gaelic variant of Latin.`,
also:
['ga-ogam | ogam | No longer in use.']
},

"gaa": { name:"Ga", source:"udhr_gaa", region:"afr", countries:"Ghana", script:"latn", speakers:"745000", letter:"ãÃƆƐŋŊɔɛ", mark:"̃", local:"Ga", 
orth:`[Latin] Used since 1975`},

"gag": { name:"Gagauz", source:"udhr_gag", region:"eur", countries:"Moldova, Ukraine", script:"latn", speakers:"590000", letter:"üäêöçÜÄÊÖÇışţŞİŢ", mark:"̧̇̈̂", punctuation:"—", local:"Gagauz dili / Gagauzça", 
orth:`[Latin] &nbsp; [`,
also:
['gag-grek | grek | Until 1957.',
'gag-cyrl | cyrl | 1957-1991.']
},

"gax": { name:"Borana-Arsi-Guji Oromo", source:"cldr_om,udhr_gax", region:"afr", countries:"Ethiopia, Kenya, Somalia", script:"ascii", speakers:"3949600", local:"Afaan Oromoo", 
related:`Macrolanguage is Oromo [om].`,
orth:`[Latin] &nbsp; `,
also:
['gax-ethi | ethi | No longer in use.']
},

"gd": { name:"Gaelic (Scots Gaelic)", silcode:"gla", source:"cldr_gd,udhr_gla", region:"eur", countries:"Scotland", script:"latn", speakers:"57000", letter:"ìàòèùÌÀÒÈÙ", mark:"̀", aux:"ḋḟṁṗṡṫḊḞṀṖṠṪăāċĕēġĭīıłŏōœşŭūĂĀĊĔĒĠĬĪŁŎŌŒŞŬŪŸșȘáâåäãæçéêëíîïñóôöøúûüÿÁÂÅÄÃÆÇÉÊËÍÎÏÑÓÔÖØÚÛǗ̧̦̆̂̊̈̃̄̇", local:"Gàidhlig"},

"gjn": { name:"Gonja", source:"udhr_gjn", region:"afr", countries:"Ghana", script:"latn", speakers:"230000", letter:"ƐƆŋŊɛɔ", local:"Ngbanyito", 
orth:`[Latin] Used since 1970.`},

"gl": { name:"Galician", silcode:"glg", source:"cldr_gl,udhr_glg", region:"eur", countries:"Spain, Portugal", script:"latn", speakers:"2400000", letter:"áéíñóúüªÁÉÍÑÓÚÜ", mark:"́̃̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ªàâåäãçèêëìîïºòôöõùûÀÂÅÄÃÇÈÊËÌÎÏÒÔÖÕÙÛ̧̀̂̊", local:"Galego"},

"gld": { name:"Nanai (Gold, Goldi, Hezhen)", source:"udhr_gld", region:"nasia", countries:"Russia", script:"cyrl", speakers:"1400", letter:"найпрвослиебщдкцягьмзюуёчэӈтхӣӯъфжНАЙПРВОСЛИЕБЩДКЦЯГЬМЗЮУЁЧЭӇТХӢӮЪФЖ", mark:"̄̆̈", punctuation:"–"},

"gon": { name:"Gondi", local:"𑴌𑴽𑴥𑴱 𑴢𑴱𑴪𑴱", localtrans:"koːjaː baːʂaː", silcode:"", 
source:"r12a", 
region:"sasia", countries:"India", script:"gonm", speakers:"300000", 
letter:"𑴀𑴁𑴂𑴃𑴄𑴅𑴆𑴈𑴉𑴋𑴌𑴍𑴎𑴏𑴐𑴑𑴒𑴓𑴔𑴕𑴖𑴗𑴘𑴙𑴚𑴛𑴜𑴝𑴞𑴟𑴠𑴡𑴢𑴣𑴤𑴥𑴦𑴧𑴨𑴩𑴪𑴫𑴬𑴭𑴮𑴯𑴰𑵆", letteraux:"", mark:"𑴱𑴲𑴳𑴴𑴵𑴶𑴺𑴼𑴽𑴿𑵀𑵁𑵂𑵃𑵄𑵅𑵇", markaux:"", number:"𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙", numberaux:"", punctuation:"।॥", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Masaram Gondi] Emerging script, unrelated to the Gunjala Gondi script which is used for the same language. Most Gondi speakers are illiterate, and the others typically use Devanagari or Telugu to write their language. <a href='../scripts/gonm/gon.html' target='_blank'>Details</a>.`,
notes:`gon is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Adilabad Gondi [wsg]<br>Aheri Gondi [esg]<br>Northern Gondi [gno].`,
linked:"gonm/gon", picker:"gonm", font:"Noto Sans Masaram Gondi", 
},

"gsw": { name:"Swiss German", source:"cldr_gsw", region:"eur", countries:"Switzerland, France, Austria, Liechtenstein", script:"latn", speakers:"4930000", letter:"äöüÄÖÜ", mark:"̈", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåæçéèêëíìîïñóòôøúùûÿÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̊̄̃", local:"Schwyzerdütsch"},

"gu": { name:"Gujarati", local:"ગુજરાત‎", localtrans:"(gujarātī)", silcode:"guj", 
source:"cldr_gu,udhr_guj,cd18536eac759a61da40080d717664d64a29b397", 
region:"sasia", countries:"India, Tanzania, Kenya, Bahrain, Zambia, Pakistan", script:"gujr", speakers:"49000000", 
letter:"અઆઇઈઉઊઋઍએઐઑઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલળવશષસહૐૠ", mark:"ંઃ઼ાિીુૂૃૄૅેૈૉોૌ્", number:"૦૧૨૩૪૫૬૭૮૯", punctuation:"।॥૰‘’“”", symbol:"૱", other:"\u{200C}\u{200D}", aux:"%[]«»ʼ͏ઁઌૡૢૣ​‑–—…‰‹›⁠", 
orth:`[Gujurati] &nbsp; Primary usage. 
<a href="../scripts/gujarati" target="_blank">Detailed summary</a>.`,
also:
["gu-khoj | khoj | "],
linked:"gujr/gu", picker:"gujr", font:"", 
},

"guc": { name:"Wayuu (Wayu, Wayúu, Guajiro, Wahiro)", source:"udhr_guc", region:"sam", countries:"Colombia, Venezuela", script:"latn", speakers:"437780", letter:"üñÜÑ", mark:"̈̃", local:"Wayuunaiki"},

"gug": { name:"Paraguayan Guarani", source:"udhr_gug", region:"sam", countries:"Paraguay", script:"latn", speakers:"6000000", letter:"óáñéãíúõèÓÁÑÉÃÍÚÕÈʼĩũĨŨẽẼ", mark:"́̃̀", local:"Avañe’ẽ"},

"guu": { name:"Yanomamö", source:"udhr_guu", region:"sam", countries:"Venezuela, Brazil", script:"latn", speakers:"20000", letter:"ëãáõíËÃÁÕÍĩũĨŨẽẼ", mark:"̈̃́", local:"Yanomamɨ", notes:`The crossed i in the autonym suggests that there are more letters, or an alternate orthography.`},

"guz": { name:"Gusii (Kisii, Ekegusii)", source:"cldr_guz", region:"afr", countries:"Kenya", script:"ascii", speakers:"2200000", local:"Ekegusii"},

"gv": { name:"Manx (Manx Gaelic, Manks)", silcode:"glv", source:"cldr_gv,udhr_glv", region:"eur", countries:"Isle of Man", script:"latn", speakers:"0", letter:"çÇ", mark:"̧", punctuation:"’", local:"Gaelg", notes:`Last native speaker died in 1974.  Ethnologue lists 1,660 second language speakers.`},

"gyr": { name:"Guarayu", source:"udhr_gyr", region:"sam", countries:"Bolivia", script:"latn", speakers:"5900", letter:"ëñäüöéïËÑÄÜÖÉÏ", mark:"̈̃́", punctuation:"’"},

"ha": { name:"Hausa (boko)", local:"Harshen Hausa", localtrans:"", silcode:"hau", 
source:"cldr_ha,udhr_hau_NE,udhr_hau_NG", 
region:"afr", countries:"Nigeria, Niger, Côte d'Ivoire, Benin, Chad, Sudan", script:"latn", speakers:"43928100", 
letter:"ƁƊƘƙƳƴɓɗʼ", letteraux:"ÀÁÂÈÉÊÌÍÎÒÓÔÙÚÛàáâèéêìíîòóôùúû", mark:"", markaux:"̀́̂", number:"", punctuation:"‘’“”…", symbol:"", other:"", aux:"[]«»‑–—‰‹›", 
orth:`[Latin] &nbsp; Primary usage. Based on Pan-Nigerian alphabet since 1980s. <a href="../scripts/latin/hausa#variants" target="_blank">Details.</a>&nbsp;
See also <a href="../scripts/latin/hausa" target="_blank">Hausa (boko)</a>`,
also:
["ha-x-pre1980 | latn | Since 1880. Became official Hausa alphabet in 1930.",
"ha-arab | arab | Not standardised. The used mostly by muslim communities. Typically written with Warsh forms in the Kano style."],
linked:"latn/ha", picker:"latn-ha", font:"", 
},

"ha-arab": { name:"Hausa (ajami)", local:"هَرْشَن هَوْسَ", localtrans:"", silcode:"hau", xxlang:"ha", rtl:true, 
source:"720246f3729e525b99b5f829cdb0d44cca5a9cb6", 
region:"afr", countries:"Nigeria, Niger, Côte d'Ivoire, Benin, Chad, Sudan", script:"arab", speakers:"43928100", 
letter:"أإابتثجحدرزسشطعغلموىڟکیۑݑݣࢻࢼࢽࣃࣄ", letteraux:"ذصضظؿفقكنهٻپ", mark:"َُِّْٰٜ", markaux:"ٕٔ", number:"", punctuation:"«»،؟‘’“”‹›", symbol:"", other:"\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:":͏؜", 
orth:`[Arabic] &nbsp; Not standardised. The predominant orthography for Hausa ajami written in the Kano style uses Warsh forms. Used mostly for muslim texts. <a href="../scripts/arabic/hausa" target="_blank">Details.</a>`,
also:
["ha | latn | Primary usage. Based on Pan-Nigerian alphabet since 1980s.",
"ha-x-pre1980 | latn | Since 1880. Became official Hausa alphabet in 1930."],
linked:"arab/ha", picker:"arab-ha", font:"", 
},

"haw": { name:"Hawaiian", source:"cldr_haw,udhr_haw", region:"oce", countries:"USA", script:"latn", speakers:"24000", letter:"āēīōūĀĒĪŌŪʻ", mark:"̄", punctuation:"’‘“”", local:" ’Olelo Hawai’i"},

"he": { name:"Hebrew", local:" עברית‎ / עברית חדשה‎", localtrans:"(ivrit / ivrít ḥadašá[h])", silcode:"heb", rtl:true, 
source:"0a5ae89a710c3b0c9e880e33bdaaf863175ea62a,cldr_he,udhr_heb", 
region:"wasia", countries:"Israel, etc.", script:"hebr", speakers:"9000000", 
letter:"אבגדהוזחטיךכלםמןנסעףפץצקרשת", mark:"", markaux:"ְֱֲֳִֵֶַָׇֹֺֻּׁׂ", number:"", punctuation:"־׳״’”„", symbol:"₪", other:"\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"[]{}ʼ͏‑–—‘“…‰⁠", 
orth:`Hebrew. &nbsp;  <a href="../scripts/hebrew" target="_blank">Details</a>.`,
linked:"hebr/he", picker:"hebr", font:"", 
},

"hi": { name:"Hindi", local:" मानक हिन्दी‎ / हिन्दी‎", localtrans:"(Mānak Hindī / Hindī)", silcode:"hin", 
source:"21f8184138e858d28a8478313d2b5b59a1f650f6,cldr_hi,udhr_hin", 
region:"sasia", countries:"India, Nepal, Singapore, South Africa", script:"deva", speakers:"260000000", 
letter:"अआइईउऊऋऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहऽॐ", letteraux:"क़ख़ग़ज़ड़ढ़फ़", mark:"ँंः़ािीुूृॅेैॉोौ्", number:"०१२३४५६७८९", punctuation:"।॥॰‘’“”", symbol:"₹", other:"\u{200C}\u{200D}", aux:"[]ʼ͏​‑–—…‰", 
orth:`[Devanagari] &nbsp; <a href="../scripts/deva/hi.html" target="_blank">Detailed summary</a>.`,
also:
["hi-newa | newa | Archaic, no longer in use."],
linked:"deva/hi", picker:"deva-hi", font:"Noto Sans Devanagari", 
},

"hil": { name:"Hiligaynon (Ilonggo)", source:"udhr_hil", region:"seasia", countries:"Philippines", script:"ascii", speakers:"9300000", local:"Hiligaynon / Ilonggo"},

"hlt": { name:"Matu Chin", source:"udhr_hlt", region:"seasia", countries:"Myanmar, India", script:"ascii", speakers:"40000", local:"Matu Chin"},

"hmd": { name:"A-Hmao", local:"", localtrans:"", silcode:"", 
source:"https://github.com/r12a/app-charuse/commit/e3f689e49515f744239669fdf085c9ee8c9f71b9", 
region:"easia", countries:"China", script:"plrd", speakers:"300,000", 
letter:"𖼀𖼁𖼄𖼅𖼇𖼈𖼊𖼋𖼎𖼏𖼐𖼑𖼔𖼕𖼖𖼘𖼚𖼛𖼜𖼝𖼞𖼟𖼡𖼢𖼣𖼤𖼦𖼨𖼩𖼪𖼫𖼬𖼭𖼮𖼯𖼳𖼴𖼵𖼷𖼸𖼺𖼻𖼽𖽀𖽂𖽃𖽐𖾓𖾔𖾕𖾖𖾗𖾘𖾙", mark:"𖽑𖽔𖽗𖽙𖽜𖽝𖽞𖽟𖽠𖽡𖽢𖽣𖽤𖽦𖽨𖽪𖽫𖽬𖽭𖽱𖽳𖽵𖽷𖽹𖽺𖽻𖽾𖾏𖾐𖾑", number:"", punctuation:"“”", symbol:"", other:"", aux:"𖼉𖼗𖼙𖼼𖼾𖽁𖽄𖽘𖽥𖽩𖽲𖾒", 
orth:`[Miao-Pollard] &nbsp; Primary usage. This actually covers both the 1936 (traditional, and most current) and the 1998 orthographies, as described by Enwall. <a href="../scripts/plrd/hmd.html" target="_blank">Details</a>.`,
also:
["hmd-latn | latn | Several alternative variants."],
linked:"plrd/hmd", picker:"plrd-hmd", font:"Noto Sans Miao", 
},

"hna": { name:"Mina (Hina, Besleri)", source:"udhr_hna", region:"afr", countries:"Cameroon", script:"latn", speakers:"11000", letter:"éáìóòúíàèùÉÁÌÓÒÚÍÀÈÙǒǐǔǹƉƐƆǑǏǓǸŋŊɖɛɔ", mark:"̀́̌", notes:`Ethnologue lists this as unwritten.`},

"hni": { name:"Hani", source:"udhr_hni", region:"easia", countries:"China, Vietnam", script:"ascii", speakers:"760000", local:"Ha Nhi", 
orth:`[Latin] &nbsp; Ethnologue says that this orthography is pinyin-based, used in 1958–1964 and from 1982, experimental, used in education, literature, and media.`},

"hnn-hano": { name:"Hanunoo", local:"ᜱᜨᜳᜨᜳᜢ", localtrans:"(Hanunó'o)", silcode:"", xxlang:"hnn",
source:"f9d39cb72f3eca8fa47b766a6fdb42797b8390f9", 
region:"oce", countries:"Philippines", script:"hano", speakers:"25000", 
letter:"ᜠᜡᜢᜣᜤᜥᜦᜧᜨᜩᜪᜫᜬᜭᜮᜯᜰᜱ", letteraux:"", mark:"ᜲᜳ᜴", markaux:"", number:"", numberaux:"", punctuation:"᜵᜶", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`Hanunoo &nbsp; Used widely for love songs &amp; correspondence.`,
also:
["hnn-latn | latn | Primary."],
linked:"", picker:"hano", font:"", 
},

"hns": { name:"Caribbean Hindustani (Sarnami Hindustani)", source:"udhr_hns", region:"carib", countries:"Suriname, Guyana, Trinidad &amp; Tobago", script:"latn", speakers:"166000", letter:"áêòíèàëÁÊÒÍÈÀË", mark:"́̂̀̈", punctuation:"‘’", local:"Sarnaanie Hiendoestaanie"},

"hr": { name:"Croatian", silcode:"hrv", source:"cldr_hr,udhr_hrv", region:"eur", countries:"Croatia, Slovenia, Bosnia &amp; Herzegovina, Austria, Hungary", script:"latn", speakers:"5600000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’‚“”„′″", local:"Hrvatski", 
related:`Macrolanguage is Serbo-Croatian [sh].`},

"hsb": { name:"Upper Sorbian", source:"cldr_hsb,udhr_hsb", region:"eur", countries:"Germany", script:"latn", speakers:"13000", letter:"čćźěłńřšžČĆŹĚŁŃŘŠŽóÓ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœŕśşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŔŚŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋", local:"Hornjoserbski / Hornjoserbšćina"},

"ht": { name:"Haitian Creole", silcode:"hat", source:"udhr_hat_kreyol,udhr_hat_popular", region:"carib", countries:"Haiti, Domenican Republic", script:"latn", speakers:"113000", letter:"èéòÈÉÒ", mark:"̀́", local:"Kreyòl Ayisyen"},

"hu": { name:"Hungarian", silcode:"hu", source:"cldr_hu,udhr_hun", region:"eur", countries:"Hungary, Romania, Slovakia, Serbia, Ukraine, Israel, Austria", script:"latn", speakers:"13000000", letter:"áéíóöúüÁÉÍÓÖÚÜőűŐŰ", mark:"́̈̋", punctuation:"«»§–…’”„", symbol:"⁒", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåäãæçèêëìîïñòôøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̃̄", local:"Magyar"},

"hus": { name:"Huastec (Wasteko, Teenek)", source:"udhr_hus", region:"cam", countries:"Mexico", script:"latn", speakers:"160000", letter:"íáúéóàÍÁÚÉÓÀ", mark:"°́̀", local:"Teenek"},

"huu": { name:"Murui Huitoto (Bue, Witoto Murui, Witoto)", source:"udhr_huu", region:"sam", countries:"Colombia, Peru", script:"latn", speakers:"7800", letter:"úñáÚÑÁƗɨ", mark:"́̃", local:"Murui"},

"hy": { name:"Armenian", local:"հայերէն/հայերեն‎", localtrans:"(hayeren)", silcode:"hye", 
source:"ac321e266f0a5b1374f2b3889d418fc3399daf34,cldr_hy,udhr_hye", 
region:"wasia", countries:"Armenia, Russia, Azerbaijan, Iran", script:"armn", speakers:"10000000", 
letter:"ʼԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև", mark:"", number:"", punctuation:"«»՛՜՝՞։֊–—‘’“”․…‹›", symbol:"֍֎֏", other:"", aux:"‌‍‑‰★", 
orth:`Armenian. &nbsp;
<a href="../scripts/armenian" target="_blank">Detailed summary</a>.`,
related:`See also Western Armenian [hyw].`,
linked:"armn/hy", picker:"armn", font:"", 
},

"ibb": { name:"Ibibio", source:"udhr_ibb", region:"afr", countries:"Nigeria", script:"latn", speakers:"2000000", letter:"ñÑ", mark:"̃", local:"Ibibio"},

"id": { name:"Indonesian", silcode:"ind", source:"cldr_id,udhr_ind", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"43000000", punctuation:"‐–—…‘’“”", aux:"å", local:"Bahasa Indonesia", 
related:`Macrolanguage is Malay [ms].`,
orth:`[Latin] &nbsp; `,
also:
['id-arab | arab | Naskh style.']
},

"ig": { name:"Igbo", silcode:"ibo", source:"cldr_ig,udhr_ibo", region:"afr", countries:"Nigeria", script:"latn", speakers:"24000000", letter:"ẹịṅọụẸỊṄỌỤ", mark:"̣̇", punctuation:"‐", local:"Igbo", 
orth:`[Latin] Used since 1900.`},

"ii": { name:"Nuosu (Nosu, Northern Yi, Liangshan Yi, Sichuan Yi)", silcode:"iii", source:"cldr_ii,udhr_iii", region:"easia", countries:"China", script:"yiii", speakers:"2000000", letter:"ꀀꀁꀂꀃꀄꀅꀆꀇꀈꀉꀊꀋꀌꀍꀎꀏꀐꀑꀒꀓꀔꀕꀖꀗꀘꀙꀚꀛꀜꀝꀞꀟꀠꀡꀢꀣꀤꀥꀦꀧꀨꀩꀪꀫꀬꀭꀮꀯꀰꀱꀲꀳꀴꀵꀶꀷꀸꀹꀺꀻꀼꀽꀾꀿꁀꁁꁂꁃꁄꁅꁆꁇꁈꁉꁊꁋꁌꁍꁎꁏꁐꁑꁒꁓꁔꁕꁖꁗꁘꁙꁚꁛꁜꁝꁞꁟꁠꁡꁢꁣꁤꁥꁦꁧꁨꁩꁪꁫꁬꁭꁮꁯꁰꁱꁲꁳꁴꁵꁶꁷꁸꁹꁺꁻꁼꁽꁾꁿꂀꂁꂂꂃꂄꂅꂆꂇꂈꂉꂊꂋꂌꂍꂎꂏꂐꂑꂒꂓꂔꂕꂖꂗꂘꂙꂚꂛꂜꂝꂞꂟꂠꂡꂢꂣꂤꂥꂦꂧꂨꂩꂪꂫꂬꂭꂮꂯꂰꂱꂲꂳꂴꂵꂶꂷꂸꂹꂺꂻꂼꂽꂾꂿꃀꃁꃂꃃꃄꃅꃆꃇꃈꃉꃊꃋꃌꃍꃎꃏꃐꃑꃒꃓꃔꃕꃖꃗꃘꃙꃚꃛꃜꃝꃞꃟꃠꃡꃢꃣꃤꃥꃦꃧꃨꃩꃪꃫꃬꃭꃮꃯꃰꃱꃲꃳꃴꃵꃶꃷꃸꃹꃺꃻꃼꃽꃾꃿꄀꄁꄂꄃꄄꄅꄆꄇꄈꄉꄊꄋꄌꄍꄎꄏꄐꄑꄒꄓꄔꄕꄖꄗꄘꄙꄚꄛꄜꄝꄞꄟꄠꄡꄢꄣꄤꄥꄦꄧꄨꄩꄪꄫꄬꄭꄮꄯꄰꄱꄲꄳꄴꄵꄶꄷꄸꄹꄺꄻꄼꄽꄾꄿꅀꅁꅂꅃꅄꅅꅆꅇꅈꅉꅊꅋꅌꅍꅎꅏꅐꅑꅒꅓꅔꅕꅖꅗꅘꅙꅚꅛꅜꅝꅞꅟꅠꅡꅢꅣꅤꅥꅦꅧꅨꅩꅪꅫꅬꅭꅮꅯꅰꅱꅲꅳꅴꅵꅶꅷꅸꅹꅺꅻꅼꅽꅾꅿꆀꆁꆂꆃꆄꆅꆆꆇꆈꆉꆊꆋꆌꆍꆎꆏꆐꆑꆒꆓꆔꆕꆖꆗꆘꆙꆚꆛꆜꆝꆞꆟꆠꆡꆢꆣꆤꆥꆦꆧꆨꆩꆪꆫꆬꆭꆮꆯꆰꆱꆲꆳꆴꆵꆶꆷꆸꆹꆺꆻꆼꆽꆾꆿꇀꇁꇂꇃꇄꇅꇆꇇꇈꇉꇊꇋꇌꇍꇎꇏꇐꇑꇒꇓꇔꇕꇖꇗꇘꇙꇚꇛꇜꇝꇞꇟꇠꇡꇢꇣꇤꇥꇦꇧꇨꇩꇪꇫꇬꇭꇮꇯꇰꇱꇲꇳꇴꇵꇶꇷꇸꇹꇺꇻꇼꇽꇾꇿꈀꈁꈂꈃꈄꈅꈆꈇꈈꈉꈊꈋꈌꈍꈎꈏꈐꈑꈒꈓꈔꈕꈖꈗꈘꈙꈚꈛꈜꈝꈞꈟꈠꈡꈢꈣꈤꈥꈦꈧꈨꈩꈪꈫꈬꈭꈮꈯꈰꈱꈲꈳꈴꈵꈶꈷꈸꈹꈺꈻꈼꈽꈾꈿꉀꉁꉂꉃꉄꉅꉆꉇꉈꉉꉊꉋꉌꉍꉎꉏꉐꉑꉒꉓꉔꉕꉖꉗꉘꉙꉚꉛꉜꉝꉞꉟꉠꉡꉢꉣꉤꉥꉦꉧꉨꉩꉪꉫꉬꉭꉮꉯꉰꉱꉲꉳꉴꉵꉶꉷꉸꉹꉺꉻꉼꉽꉾꉿꊀꊁꊂꊃꊄꊅꊆꊇꊈꊉꊊꊋꊌꊍꊎꊏꊐꊑꊒꊓꊔꊕꊖꊗꊘꊙꊚꊛꊜꊝꊞꊟꊠꊡꊢꊣꊤꊥꊦꊧꊨꊩꊪꊫꊬꊭꊮꊯꊰꊱꊲꊳꊴꊵꊶꊷꊸꊹꊺꊻꊼꊽꊾꊿꋀꋁꋂꋃꋄꋅꋆꋇꋈꋉꋊꋋꋌꋍꋎꋏꋐꋑꋒꋓꋔꋕꋖꋗꋘꋙꋚꋛꋜꋝꋞꋟꋠꋡꋢꋣꋤꋥꋦꋧꋨꋩꋪꋫꋬꋭꋮꋯꋰꋱꋲꋳꋴꋵꋶꋷꋸꋹꋺꋻꋼꋽꋾꋿꌀꌁꌂꌃꌄꌅꌆꌇꌈꌉꌊꌋꌌꌍꌎꌏꌐꌑꌒꌓꌔꌕꌖꌗꌘꌙꌚꌛꌜꌝꌞꌟꌠꌡꌢꌣꌤꌥꌦꌧꌨꌩꌪꌫꌬꌭꌮꌯꌰꌱꌲꌳꌴꌵꌶꌷꌸꌹꌺꌻꌼꌽꌾꌿꍀꍁꍂꍃꍄꍅꍆꍇꍈꍉꍊꍋꍌꍍꍎꍏꍐꍑꍒꍓꍔꍕꍖꍗꍘꍙꍚꍛꍜꍝꍞꍟꍠꍡꍢꍣꍤꍥꍦꍧꍨꍩꍪꍫꍬꍭꍮꍯꍰꍱꍲꍳꍴꍵꍶꍷꍸꍹꍺꍻꍼꍽꍾꍿꎀꎁꎂꎃꎄꎅꎆꎇꎈꎉꎊꎋꎌꎍꎎꎏꎐꎑꎒꎓꎔꎕꎖꎗꎘꎙꎚꎛꎜꎝꎞꎟꎠꎡꎢꎣꎤꎥꎦꎧꎨꎩꎪꎫꎬꎭꎮꎯꎰꎱꎲꎳꎴꎵꎶꎷꎸꎹꎺꎻꎼꎽꎾꎿꏀꏁꏂꏃꏄꏅꏆꏇꏈꏉꏊꏋꏌꏍꏎꏏꏐꏑꏒꏓꏔꏕꏖꏗꏘꏙꏚꏛꏜꏝꏞꏟꏠꏡꏢꏣꏤꏥꏦꏧꏨꏩꏪꏫꏬꏭꏮꏯꏰꏱꏲꏳꏴꏵꏶꏷꏸꏹꏺꏻꏼꏽꏾꏿꐀꐁꐂꐃꐄꐅꐆꐇꐈꐉꐊꐋꐌꐍꐎꐏꐐꐑꐒꐓꐔꐕꐖꐗꐘꐙꐚꐛꐜꐝꐞꐟꐠꐡꐢꐣꐤꐥꐦꐧꐨꐩꐪꐫꐬꐭꐮꐯꐰꐱꐲꐳꐴꐵꐶꐷꐸꐹꐺꐻꐼꐽꐾꐿꑀꑁꑂꑃꑄꑅꑆꑇꑈꑉꑊꑋꑌꑍꑎꑏꑐꑑꑒꑓꑔꑕꑖꑗꑘꑙꑚꑛꑜꑝꑞꑟꑠꑡꑢꑣꑤꑥꑦꑧꑨꑩꑪꑫꑬꑭꑮꑯꑰꑱꑲꑳꑴꑵꑶꑷꑸꑹꑺꑻꑼꑽꑾꑿꒀꒁꒂꒃꒄꒅꒆꒇꒈꒉꒊꒋꒌ", punctuation:"《》。、，（）：", local:"Nuosu", 
orth:`[Yi] &nbsp; Standard version since 1975, and primary usage.`,
also:
['ii-latn | latn | 1951-1957, 1958-1960, from 1975.']
},

"ike": { name:"Inuktitut, Eastern Canadian", local:"ᐃᓄᒃᑎᑐᑦ‎", localtrans:"(Inuktitut)", label:"Inuktitut, East Canadian",
source:"3cc72e78bdfa007c9612513a501835f81aa20ff2,udhr_ike", 
region:"nam", countries:"Canada", script:"cans", speakers:"34000", 
letter:"ᐁᐃᐄᐅᐆᐊᐋᐯᐱᐲᐳᐴᐸᐹᑉᑌᑎᑏᑐᑑᑕᑖᑦᑫᑭᑮᑯᑰᑲᑳᒃᒉᒋᒌᒍᒎᒐᒑᒡᒣᒥᒦᒧᒨᒪᒫᒻᓀᓂᓃᓄᓅᓇᓈᓐᓓᓕᓖᓗᓘᓚᓛᓪᓭᓯᓰᓱᓲᓴᓵᔅᔦᔨᔩᔪᔫᔭᔮᔾᕃᕆᕇᕈᕉᕋᕌᕐᕓᕕᕖᕗᕘᕙᕚᕝᕼᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᖠᖡᖢᖣᖤᖥᖦᖯᙯᙰᙱᙲᙳᙴᙵᙶ", letteraux:"ᕴᕵᕶᕷᕸᕹᕺᕻ", mark:"", number:"", punctuation:"‘’“”", symbol:"", other:"",
aux:"§«»ʼ͏ᖖ​‌‍‐‑–—†‡…′″",
orth:`[UCAS] &nbsp; Standardised for Inuktitut in 1976, however application varies across dialects. <a href="../scripts/cans/" target="_blank">Details</a>`,
also:
["ike-latn | latn | Also standardised for Inuktitut in 1976."],
type:"syllabary", cs:"no", gpos:"no", gsub:"no", cursive:"no", direction:"ltr", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"yes", hyphen:"-",  justification:"sp",
vowels:"syl:7", clusters:"ss", finals:"ss:y", 
linked:"cans/ike", picker:"cans-ike", 
},

"ilo": { name:"Ilocano (Ilokano)", source:"udhr_ilo", region:"seasia", countries:"Philippines", script:"ascii", speakers:"9100000", local:"Ilokano", 
orth:`[Latin] &nbsp; Primary usage.`,
also:
['ilo-tglg | tglg | No longer in use.']
},

"io": { name:"Ido", source:"udhr_ido", region:"eur", script:"ascii", speakers:"300"},

"is": { name:"Icelandic", silcode:"isl", source:"cldr_is,udhr_isl", region:"eur", countries:"Iceland", script:"latn", speakers:"331000", letter:"áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ", mark:"́̈", punctuation:"§‐–—…‘‚“„†‡′″", local:"Íslenska"},

"it": { name:"Italian", silcode:"ita", source:"cldr_it,udhr_ita", region:"eur", countries:"Italy, Romania, Switzerland, Vatican State, San Marino, etc.", script:"latn", speakers:"64000000", letter:"àéèìóòùÀÉÈÌÓÒÙ", mark:"̀́", punctuation:"«»—…’“”", aux:"œŒŸªáâåäãæçêëíîïñºôöõøßúûüÿÁÂÅÄÃÆÇÊËÍÎÏÑÔÖÕØÚÛÜ̧̂̊̈̃", local:"Italiano"},

"iu": { name:"Inuktitut", silcode:"iku", redirect:true, source:"", region:"nam", script:"macrolanguage", speakers:"", related:`iu is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Eastern Canadian Inuktitut [ike]<br/>Inuinnaqtun, Western Canadian Inuktitut [ikt].
Legacy applications often use iu rather than [ike].
`},

"jgo": { name:"Ngomba (Ngomba Bamileke)", source:"cldr_jgo", region:"afr", countries:"Cameroon", script:"latn", speakers:"63000", letter:"áâíîúûÁÂÍÎÚÛꞌꞋǎǐǹǔǍƐǏǸƆǓɄńŋŃŊḿẅḾẄɛɔʉ", mark:"́̀̂̌̄̈", punctuation:"«»‹›", local:"Cú-Mbɔ́ndaa"},

"jiv": { name:"Shuar", source:"udhr_jiv", region:"sam", countries:"Ecuador", script:"latn", speakers:"35000", letter:"áíúéÁÍÚÉ", mark:"́", local:"Shuar Chicham"},

"jmc": { name:"Machame", source:"cldr_jmc", region:"afr", countries:"Tanzania", script:"ascii", speakers:"400000", local:"Kimashami"},

"jv": { name:"Javanese", silcode:"jav", source:"cldr_jv,udhr_jav,87bfc19c48736ce0e4045004f1485477badda620", region:"seasia", countries:"Indonesia, Singapore", script:"ascii", speakers:"94000000", letter:"ÂÅÈÉÊÌÒÙâåèéêìòù", mark:"̀́̂̊", punctuation:"‰", local:"Jawa", 
orth:`[Latin] &nbsp; `,
also:
['jv-java | java | No longer in common use.']
},

"jv-java": { name:"Javanese", local:"ꦲꦤꦕꦫꦏ", localtrans:"aksara d͡ʒawa", silcode:"jav", xxlang:"jv",
source:"6c4597409a211714769081f0db0c92a0314ede5f", 
region:"seasia", countries:"Indonesia, Singapore", script:"java", speakers:"94000000", 
letter:"ꦄꦆꦈꦉꦊꦌꦎꦏꦑꦒꦓꦔꦕꦖꦗꦘꦙꦚꦛꦜꦝꦞꦟꦠꦡꦢꦣꦤꦥꦦꦧꦨꦩꦪꦫꦭꦮꦰꦱꦲꧏ", letteraux:"ꦯ", mark:"ꦀꦁꦂꦃ꦳ꦴꦶꦸꦺꦼꦽꦾꦿ꧀", number:"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙", punctuation:"꧁꧂꧃꧄꧅꧆꧇꧈꧉꧊꧋꧌꧍", punctuationaux:"꧞꧟", symbol:"", other:"\u{200B}\u{200C}", aux:"%-ʼ͏‍‑‒–—‰⁠", 
orth:`Javanese &nbsp; No longer in common use. <a href="../scripts/javanese" target="_blank">Details</a>.`,
also:
["jv | latn | Primary orthography."],
linked:"java/jv", picker:"java", font:"", 
},

"ka": { name:"Georgian", local:"ქართული‎ / ქართული ენა‎", localtrans:"(kartuli / kartuli ena)", silcode:"kat", 
source:"2cafedfc80733bd49fb1ee6af49657333a88c1a3,cldr_ka,udhr_kat", 
region:"eur", countries:"Georgia, Turkey, Iran", script:"geor", speakers:"3700000", 
letter:"აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚᲛᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰ", letteraux:"ჲჴ", mark:"", number:"", punctuation:"«»“„", punctuationaux:"჻", symbol:"₾№", other:"", aux:"-[]ʼ‑–—", 
orth:`[Georgian] &nbsp; Mkhedruli &amp; mtavruli. The mtavruli characters are listed as infrequent because, although classed as uppercase, they are only used when a full word is uppercased. <a href="../scripts/georgian" target="_blank">Details</a>.`,
also:
["ka-geok | geok | Asomtavruli &amp; nuskhuri, no longer in use except liturgically."],
linked:"geor/ka", picker:"geor-ka", font:"", 
},

"kab": { name:"Kabyle (Kabylian)", source:"cldr_kab", region:"afr", countries:"Algeria", script:"latn", speakers:"5500000", letter:"ǧƐǦƔčČḍḥṛṣṭẓḌḤṚṢṬẒɛɣ", mark:"̣̌", punctuation:"‰", local:"Taqbaylit", 
orth:`[Latin] &nbsp; Primary usage.`,
also:
['kab-tfng | tfng | Symbolic use only.']
},

"kam": { name:"Kamba (Kikamba)", source:"cldr_kam", region:"afr", countries:"Kenya, Tanzania", script:"latn", speakers:"3900000", letter:"ĩũĨŨ", mark:"̃", local:"Kĩĩkamba"},

"kbd": { name:"Kabardian (Kabardino-Cherkess, East Circassian)", source:"udhr_kbd", region:"eur", countries:"Turkey, Russia, Jordan, Syria", script:"cyrl", speakers:"1600000", letter:"цӏыхуэфащмтеднйпсожлъкрзгьибяшвчіюЦӀЫХУЭФАЩМТЕДНЙПСОЖЛЪКРЗГЬИБЯШВЧІЮ", mark:"̆", local:" Къэбэрдей Адыгэбзэ‎", localtrans:"(Qăbărdey Adəgăbză)"},

"kbp": { name:"Kabiye", source:"udhr_kpb", region:"afr", countries:"Togo", script:"latn", speakers:"1000000", letter:"ñÑƆƐƱƉƖƔŋŊɔɛʊɖɩɣ", mark:"̃", local:"Kabɩyɛ, Kabɩyɛ Tɔm"},

"kde": { name:"Makonde (Kimakonde)", source:"cldr_kde,udhr_kde", region:"afr", countries:"Tanzania, Mozambique", script:"ascii", speakers:"1400000", local:"Chimakonde"},

"kdh": { name:"Tem (Temba, Kotokoli, Cotocoli)", source:"udhr_kdh", region:"afr", countries:"Togo, Ghana, Benin", script:"latn", speakers:"290000", letter:"íáéúóÿÍÁÉÚÓƖƱƐƉƆńŋŃŸŊḿḾɩʊɛɖɔ", mark:"́̈", local:"Tem", 
orth:`[Latin] &nbsp; `,
also:
['kdh-arab | arab | Naskh style.']
},

"kea": { name:"Kabuverdianu (Cape Verdean Creole)", source:"cldr_kea,udhr_kea", region:"afr", countries:"Cape Verde Islands, USA, Portugal", script:"latn", speakers:"1200000", letter:"ñçêéâíèáôóãºõúàòÑÇÊÉÂÍÈÁÔÓÃÕÚÀÒ", mark:"̧̃̂́̀", punctuation:"’", aux:"ẽẼăāĕēĭĩīŏōœŭũūĂĀĔĒĬĨĪŎŌŒŬŨŪŸªáàâåäãæçéèêëíìîïºóòôöõøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÓÒÔÖÕØÚÙÛǗ̧̀̆̂̊̈̄", local:"Kabuverdianu / Kriol", 
orth:`[Latin] &nbsp; Known as ALUPEC.`},

"kg": { name:"Kongo", silcode:"kon", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"6500000", related:`kg is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Koongo [kng]<br/>San Salvador Kongo [kwy]<br/>Laari [ldi].
Legacy applications often use kg rather than [kng].
`},

"kha": { name:"Khasi", source:"udhr_kha", region:"sasia", countries:"India", script:"latn", speakers:"1128575", letter:"ïñÏÑ", mark:"̈̃", local:"Khasi", 
orth:`[Latin] &nbsp; Since about 1842.`,
also:
['kha-beng | beng | No longer in use.']
},

"khb": { name:"Tai Lü (Tai Lue)", local:"ᦅᧄᦺᦑᦟᦹᧉ‎", localtrans:"(Kam Tai Lue)", silcode:"", 
source:"23af4e1d7781a7a933d2ffac5f71a42a5df6f629", 
region:"easia", countries:"China, Laos, Thailand, Myanmar", script:"talu", speakers:"550000", 
letter:"ᦀᦁᦂᦃᦄᦅᦆᦇᦈᦉᦊᦋᦌᦍᦎᦏᦐᦑᦒᦓᦔᦕᦖᦗᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨᦩᦪᦫᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂᧃᧄᧅᧆᧇᧈᧉ", mark:"", number:"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙᧚", punctuation:"、。〈〉《》！（），．：；？", symbol:"᧞᧟", other:"", aux:"!%,.:;?«»ʼ͏​‌‍‑–—‘’“”…‰‹›⁠⋯", 
orth:`[New Tai Lue] &nbsp; In Yunnan province, China. <a href="../scripts/newtailue/" target="_blank">Details</a>.`,
also:
["khb-lana | lana | Still used by some, particularly Buddhist monasteries in Yunnan province."],
linked:"talu/khb", picker:"talu", font:"", 
},

"khk": { name:"Halh Mongolian", local:"Монгол хэл‎", localtrans:"(Mongol khel)", silcode:"", xxlang:"mn",
source:"f41ea8a05b20e8c0c5d97f2c8d98f10aae211c03,cldr_mn,udhr_khk", 
region:"easia", countries:"Mongolia, Russia", script:"cyrl", speakers:"2640000", 
letter:"ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяёҮүӨө", letteraux:"", mark:"", markaux:"̆̈", number:"", numberaux:"", punctuation:"«»“„…", punctuationaux:"", symbol:"₮", symbolaux:"", other:"", otheraux:"", aux:"%[]§ʼЫ‑–—‘‚†‡‰′″‹›№", deprecated:"", 
orth:`[Cyrillic] &nbsp;  <a href="../scripts/cyrillic/mn" target="_blank">Details</a>`,
also:
["khk-mong | mong | Before 1941, and resurgent since 1990s.",
"khk-phag | phag | No longer in use.",
"khk-tibt | tibt | No longer in use."],
related:`Macrolanguage is Mongolian [mn].`,
linked:"cyrl/mn", picker:"cyrl-mn", font:"", 
},

"khk-mong": { name:"Halh Mongolian", local:"Монгол хэл‎", localtrans:"(Mongol khel)", label:"Mongolian, Halh",
source:"cldr_mn", xxlang:"mn",
region:"easia", countries:"Mongolia, China", script:"mong", speakers:"2640000", 
letter:"ᠠᠡᠢᠣᠤᠥᠦᠧᠨᠩᠪᠫᠬᠭᠮᠯᠰᠱᠲᠳᠴᠵᠶᠷᠸᠹᠺᠻᠼᠽᠾᠿᡀᡁᡂ", mark:"᠋᠌᠍᠏ᢅᢆᢩ", number:"᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙", punctuation:"«»᠁᠂᠃᠄᠆᠊〈〉《》〔〕！（）？", symbol:"", other:"\u{180E}", aux:"%;[]ʼ͏᠀᠅‌‍‑–—‘’“”‰‹›⁈⁉、。", 
orth:`[Mongolian (Hudum)] &nbsp; <a href="../scripts/mongolian" target="_blank">Details</a>`,
also:
["khk | cyrl | ",
"khk-phag | phag | No longer in use.",
"khk-tibt | tibt | No longer in use."],
related:`Macrolanguage is Mongolian [mn].`,
type:"alphabet", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", direction:"tblr", wordsep:"space", baseline:"cntr", wrap:"word", hyphenation:"yes", hyphen:"↵᠆*",  justification:"sp",
vowels:"let:8",
linked:"mong/mn", picker:"mong", 
},

"khq": { name:"Koyra Chiini (Western Songhay)", source:"cldr_khq", region:"afr", countries:"Mali", script:"latn", speakers:"200000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"ki": { name:"Kikuyu (Gikuyu)", silcode:"kik", source:"cldr_ki", region:"afr", countries:"Kenya", script:"latn", speakers:"6600000", letter:"ĩũĨŨ", mark:"̃", local:"Gĩgĩkũyũ"},

"kjh": { name:"Khakas", source:"udhr_kjh", region:"nasia", countries:"Russia", script:"cyrl", speakers:"43000", letter:"прайтиксізледјвоцяыгнмбңюьчуғхжҷэфщъПРАЙТИКСІЗЛЕДЈВОЦЯЫГНМБҢЮЬЧУҒХЖҶЭФЩЪ", mark:"̆", local:"Хакас тілі‎", localtrans:"(Xakas tili)"},

"kk": { name:"Kazakh", silcode:"kaz", source:"cldr_kk,udhr_kaz", region:"casia", countries:"Kazakhstan, China, Uzbekistan, Mongolia", script:"cyrl", speakers:"15000000", letter:"аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюяАӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ", punctuation:"‐–—…‘’“”«»§", local:"казақ тілі‎ / казақша‎", localtrans:"(qazaq tili / qazaqşa)", 
orth:`[Cyrillic] &nbsp; Used in Kazakhstan and Mongolia.`,
also:
['kk-arab | arab | Used in China and Iran.',
'kk-latn | latn | Used in Turkey.',]
},

"kkh": { name:"Khün (Tai Khün)", local:"", localtrans:"", silcode:"", 
source:"ce79bb6fd7d362af6b9792e580b42527805fe59c,udhr_kkh_lana", 
region:"seasia", countries:"Myanmar, Thailand", script:"lana", speakers:"100000", 
letter:"ᨠᨡᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩒᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩚᩛᩜ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩭᩮᩯᩰᩱᩳᩴ᩵᩶᩺᩼", markaux:"ᩝᩞ᩷᩸᩹", number:"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙", punctuation:"᪠᪡᪢᪣᪤᪥᪦᪨᪩᪪᪫᪬᪭“”", symbol:"", other:"\u{200B}", aux:",.:;[]«»ʼ͏ᩂᩄᩗᩲ᩿᩻‌‍‑–—‘’…‹›⁠", 
orth:`Tai Tham. &nbsp;  <a href="../scripts/taitham/" target="_blank">Details</a>.`,
linked:"lana/kkh", picker:"", font:"'Noto Sans Tai Tham'", 
},

"kkj": { name:"Kako (Mkako, Mkaka)", source:"cldr_kkj", region:"afr", countries:"Cameroon, Congo, Central African Republic", script:"latn", speakers:"120000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǌƁƊƐǊƆŋŊɓɗɛɔ", mark:"̧́̀̂", punctuation:"«»…‘‹›“”", local:"Kakɔ"},

"kl": { name:"Kalaalisut (West Greenlandic)", silcode:"kal", source:"cldr_kl,udhr_kal", region:"eur", countries:"Greenland, Denmark", script:"ascii", speakers:"60000", aux:"ĸ", local:"Kalaallisut", notes:"CLDR adds accented characters such as áâãéêíîôúûæøåĩĸũ, but this appears to be based on an older (pre 1973) orthography. See wikipedia."},

"kln": { name:"Kalenjin", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"0", related:`kln is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Markweeta [enb]<br/>Keiyo [eyo]<br/>Nandi [niq]<br/>Okiek [oki]<br/>Pökoot [pko]<br/>Kipsigis [sgc]<br/>Sabaot [spy]<br/>Terik [tec]<br/>Tugen [tuy].
Legacy applications often use kln rather than [spy] (Sabaot).`},

"km": { name:"Khmer (Cambodian)", local:"ខ្មែរ‎", localtrans:"(khmer)", silcode:"khm", 
source:"cldr_km,udhr_khm,7f422cd6f0781ddbcb488b785f4f0d3a5883c93b", 
region:"seasia", countries:"Cambodia, Vietnam", script:"khmr", speakers:"16000000", 
letter:"កខគឃងចឆជឈញដឋណតថទធនបផពភមយរលវសហឡអឥឦឧឩឪឫឭឯឰឱឲឳៗ", letteraux:"ឌឍឬឮ", mark:"ាិីឹឺុូួើឿៀេែៃោៅំះៈ៉៊់៌៍៎៏័៑្៝", number:"០១២៣៤៥៦៧៨៩", punctuation:"។៕៖៙៚‘’“”", punctuationaux:"៘", symbol:"៛", other:"\u200B\u200C\u200D", 
orth:`Khmer. &nbsp; <a href="../scripts/khmer" target="_blank">Details</a>.`,
linked:"khmr/km", picker:"khmr", font:"", 
},

"kmb": { name:"Kimbundu (North Mbundu)", source:"udhr_kmb", region:"afr", countries:"Angola", script:"latn", speakers:"4000000", letter:"êâôÊÂÔ", mark:"̂", punctuation:"’", local:"Kimbundu"},

"kmr": { name:"Northern Kurdish (Kurmanji)", local:"Kurmancî", localtrans:"", silcode:"", 
source:"r12a,udhr_kmr", 
region:"wasia", countries:"Turkey, Iraq, Syria, Iran, Lebanon, Armenia", script:"latn", speakers:"15000000", 
letter:"ÇÊÎÛçêîûŞş", letteraux:"ŇňḦḧẌẍ", mark:"", markaux:"̧̂", number:"", punctuation:"‑–—‘’“”…‰", symbol:"", other:"", aux:"«»‹›", 
orth:`[Latin] &nbsp; Hawar alphabet, from 1932 in Syria and (fully) from 2013 in Turkey.`,
also:
["kmr-arab | arab | Naskh style, used in Iran, Iraq, Syria, Lebanon.",
"kmr-armn | armn | 1921-1929 in Armenia.",
"kmr-x-yanalif | latn | Yañalif-like alphabet, replaces Armenian alphabet during Latinisation phase (probably 1930s?).",
"kmr-x-1928latn | latn | 1928 in Soviet Union, adds some cyrillic characters into a Latin set.",
"kmr-x-1929latn | latn | 1929 in Soviet Union.",
"kmr-cyrl | cyrl | From 1946, in Soviet Union &amp; Armenia.",
"kmr-x-hawar2 | latn | Reduced Hawar alphabet, used in Turkey until 2013 (missing Q,W,X).",
"kmr-x-uka | latn | Proposed Universal Kurdish alphabet (adds Ł, Ň, Ř and Ü).",
"kmr-x-yekgirtu | latn | Yekgirtú (Kurdish Unified Alphabet) promoted by the Kurdish Academy of Language for all Kurdish dialects."],
related:`Macrolanguage is Kurdish [ku]. Legacy applications often use ku rather kmr.`,
linked:"latn/kmr", picker:"latn-kmr", font:"", 
},

"kn": { name:"Kannada (Canarese, Kanarese)", local:"ಕನ್ನಡ‎", localtrans:"(kannaḍa)", silcode:"kan", 
source:"cldr_kn,udhr_kan", 
region:"sasia", countries:"India", script:"knda", speakers:"37700000", 
letter:"ಅಆಇಈಉಊಋೠಌೡಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲವಶಷಸಹಳಽ", mark:"಼̃ಂಃಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖ", number:"೦೧೨೩೪೫೬೭೮೯", punctuation:"‐–—…‘’“”′″", other:"\u200C\u200D", aux:"ೞ", 
orth:`[Kannada] &nbsp; Primary usage.`,
also:
["kn-nand | nand | No longer in use."],
type:"abugida", cs:"no", gpos:"yes", gsub:"yes", cursive:"no", direction:"ltr", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"?",  justification:"sp",
},

"knc": { name:"Kanuri (Yerwa)", source:"udhr_knc", region:"afr", countries:"Nigeria, Sudan, Chad, Niger, Cameroon", script:"latn", speakers:"4200000", letter:"əƏ", local:"Kanuri / Yerwa Kanuri", 
orth:`[Latin] &nbsp; Used since 1949.`,
also:
['knc-arab | arab | Naskh style.',]
},

"kng": { name:"Koongo (Kikongo)", source:"udhr_kng", region:"afr", countries:"DRC, Angola, Congo", script:"ascii", speakers:"6500000", local:"Kikongo"},

"knn": { name:"Konkani", source:"cldr_kok", region:"sasia", countries:"India", script:"deva", speakers:"7400000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्","number":"०१२३४५६७८९", local:"कोंकणी‎", localtrans:"(Konknni)", notes:`CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here.`, 
orth:`Devanagari. &nbsp; Primary usage.`,
also:
['knn-knda | knda | No longer in use.',
'knn-latn | latn | No longer in use.',]
},

"koi": { name:"Komi-Permyak", source:"udhr_koi", region:"eur", script:"cyrl", countries:"Russia", speakers:"63000", letter:"мортпавэзлӧнбыдсиьекцяюгйучішжёщъфхМОРТПАВЭЗЛӦНБЫДСИЬЕКЦЯЮГЙУЧІШЖЁЩЪФХ", mark:"̈̆", punctuation:"–", 
orth:`Cyrillic. &nbsp; `,
also:
['koi-latn | latn | 1930s and 1940s.',
'koi-perm | perm | No longer in use.',]
},

"kok": { name:"Konkani", redirect:true, source:"", region:"sasia", script:"macrolanguage", speakers:"", related:`kok is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Goan Konkani [gom]<br/>Konkani (individual language) [knn].
Legacy applications often use kok rather than [knn].
`},

"koo": { name:"Konjo (Konzo)", source:"udhr_koo", region:"afr", countries:"Uganda", script:"ascii", speakers:"610000", local:"Lhukonzo", 
orth:`Latin. &nbsp; Used since 1914.`},

"kpe": { name:"Kpelle", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"", related:`kpe is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Guinea Kpelle [gkp]<br/>Liberia Kpelle [xpe].
Legacy applications often use kpe rather than [xpe].
`},

"kqn": { name:"Kaonde", source:"udhr_kqn", region:"afr", countries:"Zambia, DRC", script:"ascii", speakers:"240000", local:"kiiKaonde"},

"kri": { name:"Krio (Sierra Leonean Creole)", source:"udhr_kri", region:"afr", countries:"Sierra Leone", script:"latn", speakers:"500000", letter:"ƐƆŋŊɛɔ", punctuation:"–", local:"Krio"},

"krl": { name:"Karelian", source:"udhr_krl", region:"eur", countries:"Russia", script:"latn", speakers:"36000", letter:"äöÄÖčžšČŽŠ", mark:"̈̌", punctuation:"’", 
orth:`Latin. &nbsp; `,
also:
['knc-cyrl | cyrl | No longer in use.',]
},

"kru-tols": { name:"Kurukh", local:"𑷊𑶲̃𑷗𑶲𑷖", localtrans:"kũrux", silcode:"", xxlang:"kru",
source:"r12a", 
region:"sasia", countries:"India", script:"tols", speakers:"?", 
letter:"ʼ𑶰𑶱𑶲𑶳𑶴𑶵𑶶𑶷𑶸𑶹𑶺𑶻𑶼𑶽𑶾𑶿𑷀𑷁𑷂𑷃𑷄𑷅𑷆𑷇𑷈𑷉𑷊𑷋𑷌𑷍𑷎𑷏𑷐𑷑𑷒𑷓𑷔𑷕𑷖𑷗𑷘𑷙𑷚𑷛", mark:"̤̰̃̆̇̈", number:"𑷠𑷡𑷢𑷣𑷤𑷥𑷦𑷧𑷨𑷩", punctuation:"।", symbol:"", other:"", 
orth:`[Tolong Siki] Invented in 1988, and officially recognised by the state of Jharkhand in 2007.`,
also:
["kru-deva | deva | Primary orthography."],
linked:"tols/kru", picker:"tols-kru", font:"Uni11DB0TolongSiki", 
},

"ks": { name:"Kashmiri (Koshur)", local:"کٲشُر‎", localtrans:"(koshur)", silcode:"kas", rtl:true, 
source:"cldr_ks,57237835618d4daaf27d149d55e14be159182c33", 
region:"sasia", countries:"India, Pakistan", script:"arab", speakers:"5600000", 
letter:"ؠآأؤإابتثجحخدذرزسشصضطظعغفقلمنوٲٹپچڈڑژکگںھہۂۄیے", letteraux:"ـ", mark:"͏َُِّْٕٖٟؔٔٗٚ", markaux:"ٓ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"،؛؟٪۔“”", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:".[]§«»ʼۓ​‑–—‘’†‡…‰′″‹›₹", 
orth:`Arabic. &nbsp; Nastaliq style ([Aran]) is primary usage, but naskh style also used. Associated with the Muslim Kashmiris.
Kashmiri is one of the languages that indicates all vowel sounds when using Arabic script. <a href="../scripts/arabic/kashmiri" target="_blank">Details</a>`,
also:
["ks-deva | deva | Used by the Hindi community in Kashmir."],
linked:"arab/ks", picker:"arab-ks", font:"'Noto Nastaliq Urdu', 'Urdu Typesetting'", 
},


"ks-deva": { name:"Kashmiri (Koshur)", local:"कॉशुर‎", localtrans:"(koshur)", silcode:"kas", xxlang:"ks",
source:"7f2afe74cc91aa1c3986c9017fac92907f6cd260", 
region:"sasia", countries:"India, Pakistan", script:"deva", speakers:"5600000", 
letter:"अआइईउऊऋऎएऐऒओऔकखगचछजटठडतथदनपफबमयरलवशसहऽज़ॳॴॵॶॷ", letteraux:"घङझञढणधभष", mark:"ँंऺऻ़ािीुूृॆेैॊोौ्ॏॖॗ", number:"", punctuation:"।॥", symbol:"", other:"\u{200C}\u{200D}", aux:"%.[]ʼ͏ॄॐॠ०१२३४५६७८९॰‑–—‘’“”…‰⁠₹⹁", 
orth:`Devanagari. &nbsp; Associated with the Hindu Kashmiris. There were orthographic reforms in 1995, 2002, and 2009. This selection of characters reflects the latter. <a href="../scripts/devanagari/kashmiri" target="_blank">Details</a>.`,
also:
["ks| arab | Used by the Muslim community in Kashmir."],
notes:`Need clarity about use or not of Devanagari numbers.`,
linked:"deva/ks", picker:"deva-ks", font:"", 
},

"ksb": { name:"Shambala (Shambaa)", source:"cldr_ksb", region:"afr", countries:"Tanzania", script:"ascii", speakers:"660000"},

"ksf": { name:"Bafia", source:"cldr_ksf", region:"afr", countries:"Cameroon", script:"latn", speakers:"60000", letter:"áéíóúÁÉÍÓÚǝƎƐƆŋŊɛɔ", mark:"́", local:"Rikpa"},

"ksh": { name:"Kölsch (Colognian)", source:"cldr_ksh", region:"eur", countries:"Germany", script:"latn", speakers:"250000", letter:"ėœůĖŒŮåäæëößüÅÄÆËÖÜ", mark:"̊̈̇", punctuation:"‐–—…‘‚“„†‡§⸗", symbol:"°", aux:"ăāĕēğĭīĳıłŏōŭūĂĀĔĒĞĬĪĲŁŎŌŬŪŸáàâãçéèêíìîïñóòôøúùûÿÁÀÂÃÇÉÈÊÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̃̄", local:"Kölsch"},

"ktu": { name:"Kituba", source:"udhr_ktu", region:"afr", countries:"DRC", script:"ascii", speakers:"5400000", local:"Kikongo ya leta / Kituba"},

"ku": { name:"Kurdish", redirect:true, source:"", region:"wasia", script:"macrolanguage", speakers:"0", related:`ku is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Kurdish ([ckb])<br/>Northern Kurdish ([kmr])<br/>Southern Kurdish ([sdh])
Legacy applications often use ku rather than [kmr] (Northern Kurdish).`},

"kw": { name:"Cornish", silcode:"cor", source:"cldr_kw", region:"eur", countries:"England", script:"ascii", speakers:"~350", local:"Kernewek"},

"kwi": { name:"Awa-Cuaiquer (Awa Pit)", source:"udhr_kwi", region:"sam", countries:"Colombia, Ecuador", script:"latn", speakers:"13000", letter:"áñëóçâùéàêÁÑËÓÇÂÙÉÀÊ", mark:"̧́̃̈̂̀", punctuation:"·", local:"Awapit"},

"ky": { name:"Kyrgyz (Kirghiz)", silcode:"kir", source:"cldr_ky,udhr_kir", region:"casia", countries:"Kyrgyzstan, China, Tajikistan", script:"cyrl", speakers:"4300000", letter:"абгдеёжзийклмнӊоөпрстуүхчшъыэюяцңвьфАБГДЕЁЖЗИЙКЛМНӉОӨПРСТУҮХЧШЪЫЭЮЯЦҢВЬФ", mark:"̈̆", punctuation:"‐–—…‘‚“„«»§", aux:"вфцщьВФЦЩЬ", local:"кыргыз тили‎ / кыргызча‎", localtrans:"(kyrgyz tili / kyrgyzcha)", 
orth:`Cyrillic. &nbsp; Not used in Afghanistan.`,
also:
['ky-arab | arab | Naskh style, used in China.',
'ky-latn | latn | Used in Turkey.',]
},

"kyu": { name:"Western Kayah (Karenni, Kayah, Red Karen, Yang Daeng)", local:"ꤊꤢ꤬ꤛꤢ꤭ꤜꤟꤤ꤬ ꤍꤟꤥ‎", localtrans:"(ka¹ya³li̤¹ ŋo̤)", silcode:"", 
source:"0fffd0a5c3dc3ba4fb309222f060ad348b1f197f", 
region:"seasia", countries:"Myanmar, Thailand", script:"kali", speakers:"170000", 
letter:"ꤊꤋꤌꤍꤎꤏꤐꤑꤒꤓꤔꤕꤖꤗꤘꤙꤚꤛꤜꤝꤞꤟꤠꤡꤢꤣꤤꤥ", mark:"ꤦꤧꤨꤩꤪ꤫꤬꤭", number:"꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉", punctuation:"“”꤮꤯", symbol:"", other:"", aux:"%.[]ʼ͏‌‍‑–—‘’…⋯", 
orth:`Kayah Li. &nbsp; Primary usage. Developed in 1962. <a href="../scripts/kali/" target="_blank">Details</a>.`,
linked:"kali/kyu", picker:"kali", font:"", 
},

"lad": { name:"Ladino", source:"udhr_lad", region:"wasia", countries:"Israel, Turkey", script:"latn", speakers:"100000", letter:"íÍ", mark:"́", punctuation:"–", local:"גﬞודיאו־איספאנייול‎ / לאדינו‎", localtrans:"(djudeo-espanyol / ladino)", 
orth:`Latin. &nbsp; Used in Turkey.`,
also:
['ky-hebr | hebr | ',
'ky-cyrl | cyrl | Used by Sephardic speakers in the Balkans.',],
font:"'Times New Roman'",
},

"lag": { name:"Langi (Rangi)", source:"cldr_lag", region:"afr", countries:"Tanzania", script:"latn", speakers:"410000", letter:"áéíóúÁÉÍÓÚƗɄɨʉ", mark:"́", local:"Kɨlaangi / Langi"},

"lb": { name:"Luxembourgish (Luxemburgish, Letzeburgesch)", silcode:"ltz", source:"cldr_lb,udhr_ltz", region:"eur", countries:"Luxembourg, France, Belgium, Germany", script:"latn", speakers:"390000", letter:"äéëêüöôàÄÉËÊÜÖÔÀ", mark:"̈́̂̀", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçèêíìîïñóòôöøßúùûüÿÁÀÂÅÃÆÇÈÊÍÌÎÏÑÓÒÔÖØÚÙÛÜ̧̇̀̆̂̊̃̄", local:"Lëtzebuergesch", notes:`UDHR has many more accented characters than CLDR.`},

"lep": { name:"Lepcha", local:"ᰛᰩᰵᰛᰧᰵᰶ", localtrans:"", silcode:"", 
source:"b1367290d9c75505221c288a0382c33f2b3070b9", 
region:"sasia", countries:"India", script:"lepc", speakers:"53000", 
letter:"ᰀᰁᰂᰃᰄᰅᰆᰇᰈᰉᰊᰋᰌᰍᰎᰏᰐᰑᰒᰓᰔᰕᰖᰗᰘᰙᰚᰛᰜᰝᰞᰟᰠᰡᰢᰣᱍᱎᱏ", mark:"ᰤᰥᰦᰧᰨᰩᰪᰫᰬᰭᰮᰯᰰᰱᰲᰳᰴᰵᰶ᰷", number:"᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉", punctuation:"᰻᰼᰽᰾‘’“”", punctuationaux:"᰿", symbol:"", other:"", aux:"%[]‌‍–—…‰", 
orth:`[Lepcha] <a href='../scripts/lepc/lep.html' target='_blank'>Details</a>.`,
also:
["lep-deva | deva | xxx"],
linked:"lepc/lep", picker:"lepc-lep", font:"", 
},

"lg": { name:"Ganda (Luganda)", silcode:"lug", source:"cldr_lg,udhr_lug", region:"afr", countries:"Uganda", script:"latn", speakers:"4100000", letter:"ŋŊ", local:"Luganda", 
orth:`Latin. &nbsp; Used since 1947.`},

"lia": { name:"Limba", source:"udhr_lia", region:"afr", countries:"Sierra Leone", script:"latn", speakers:"340000", letter:"ƆƐŋŊɔɛ", local:"Hulimba ha"},

"lif": { name:"Limbu", local:"ᤃᤠᤰᤌᤢᤱ ᤐᤠ᤺ᤴ", localtrans:"[gaktʰuŋ paːn]", silcode:"lif", 
source:"", 
region:"sasia", countries:"Nepal, Sikkim", script:"limb", speakers:"400000", 
letter:"ᤀᤁᤂᤃᤄᤅᤆᤇᤈᤋᤌᤍᤎᤏᤐᤑᤒᤓᤔᤕᤖᤗᤘᤙᤛᤜ", mark:"ᤠᤡᤢᤣᤤᤥᤦᤧᤨᤩᤪᤫᤰᤱᤳᤴᤵᤶᤷᤸ᤻᤹᤺", number:"᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏", punctuation:"॥᥄᥅“”", symbol:"", other:"", aux:"%[]‌‍–—…‰", 
orth:`Limbu.  <a href="../scripts/limb/lif.html#variants" target="_blank">Details.</a>`,
also:
["lif-deva | deva | Primary usage."],
linked:"limb/lif", picker:"limb-lif", font:"Namdhinggo, 'Noto Sans Limbu', 'Sans Serif Collection'", 
},

"lij": { name:"Ligurian", source:"udhr_lij", region:"eur", countries:"Italy, Monaco", script:"latn", speakers:"500000", letter:"çòæéùöôâîàêÇÒÆÉÙÖÔÂÎÀÊ", mark:"̧̀́̈̂", punctuation:"’", local:"Ligure"},

"lis": { name:"Lisu", local:"ꓡꓲ-ꓢꓴ", localtrans:"(li-su / lisu)", silcode:"", 
source:"d6a5076cb77188fd52722d4a57b621ac1390c714", 
region:"easia", countries:"China, Myanmar, Thailand", script:"lisu", speakers:"940000", 
letter:"ˍꓐꓑꓒꓓꓔꓕꓖꓗꓘꓙꓚꓛꓜꓝꓞꓟꓠꓡꓢꓣꓤꓥꓦꓧꓨꓩꓪꓫꓬꓭꓮꓯꓰꓱꓲꓳꓴꓵꓶꓷꓸꓹꓺꓻꓼꓽ꓿", mark:"", number:"", punctuation:"‐…《》꓾", symbol:"", other:"", aux:"%,.«»ʼ͏​‌‍‑–—‘’“”‰‹›⁠", 
orth:`Lisu (Fraser script). &nbsp; Since 1918, primary usage. <a href="../scripts/lisu" target="_blank">Details</a>.`,
also:
["lis-latn | latn | 1915-1918, 1958-1966, and from 1981."],
linked:"lisu/lis", picker:"lisu", font:"", 
},

"lkt": { name:"Lakota (Lakhota, Teton, Teton Sioux)", source:"cldr_lkt", region:"nam", countries:"USA", script:"latn", speakers:"6000", letter:"ʼáéíóúÁÉÍÓÚǧȟǦȞŋčšžŊČŠŽ", mark:"́̌", punctuation:"́̌‐–—“”"},

"lld": { name:"Ladin (Judaeo-Spanish, Judeo-Spanish)", source:"udhr_lld", region:"eur", countries:"Italy", script:"latn", speakers:"31000", letter:"ëéüêàèöìùîâôòóûËÉÜÊÀÈÖÌÙÎÂÔÒÓÛćĆ", mark:"̈́̂̀", punctuation:"’"},

"ln": { name:"Lingala", silcode:"lin", source:"cldr_ln,udhr_lin", region:"afr", countries:"DRC, Congo", script:"latn", speakers:"5500000", letter:"áâéêíîóôúÁÂÉÊÍÎÓÔÚǎǐǒǍƐǏǑƆěĚɛɔ", mark:"́̂̌", punctuation:"’", local:"Lingala", notes:"UDHR has no accents"},

"lns": { name:"Lamnso' (Nso)", source:"udhr_lns", region:"afr", countries:"Cameroon", script:"latn", speakers:"240000", letter:"áéùìòúíóàèÁÉÙÌÒÚÍÓÀÈƏŋŊə", mark:"̀́", punctuation:"’", local:"Lamnso’"},

"lo": { name:"Lao (Laotian)", local:"ພາສາລາວ‎", localtrans:"(Phasa Lao)", silcode:"lao", 
source:"267d2078d559460c36c580699263c209cb06bf98,cldr_lo,udhr_lao", 
region:"seasia", countries:"Laos, Cambodia, Vietnam", script:"laoo", speakers:"~25000000", 
letter:"ກຂຄງຈຊຍດຕຖທນບປຜຝພຟມຢຣລວສຫອຮຯະາຳຽເແໂໃໄໆໜໝ", mark:"ັິີຶືຸູົຼ່້໊໋ໍ", number:"໐໑໒໓໔໕໖໗໘໙", punctuation:"«»‑‘’“”…", symbol:"₭", other:"\u200B\u2060",
aux:"%*[]_§ʼ͏‌‍–—†‡‰′″‹›", 
orth:`Lao. &nbsp; <a href="../scripts/lao" target="_blank">Details</a>.`,
type:"alphabet", cs:"no", gpos:"yes", gsub:"yes", cursive:"no", wordsep:"no/zwsp", baseline:"romn", wrap:"word", hyphenation:"no",  direction:"ltr",  justification:"ig", 
vowels:"let:8 cm:9 vs:9 vsl:12 base:ອ/ɔː venc:5 pre:5 other:4 comp:29",  clusters:"stk", 
linked:"laoo/lo", picker:"lao", 
},

"lob": { name:"Lobi (Miwa, Lobiri)", source:"udhr_lob", region:"afr", countries:"Burkina Faso, Côte d'Ivoire", script:"latn", speakers:"440000", letter:"àáäÀÁÄƲƖƆƐʋɩɔɛʔ", mark:"̀́̈", local:"’Lobiiri"},

"lot": { name:"Otuho (Lotuko)", source:"udhr_lot", region:"afr", countries:"South Sudan", script:"ascii", speakers:"140000", local:"Otuho"},

"loz": { name:"Lozi (siLozi, Rozi)", source:"udhr_loz", region:"afr", countries:"Zambia, Zimbabwe, Namibia, Botswana", script:"ascii", speakers:"725000", local:"siLozi"},

"lrc": { name:"Luri (Lurish)", rtl:true, source:"cldr_lrc", region:"wasia", countries:"Iran", script:"arab", speakers:"13000000", letter:"آأؤئابپتثجچحخدذرزژسشصضطظعغفڤقکگلمنھەوۉۊیؽي", mark:"ٙٛٓٔ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"ًٌٍَُِّْإةكهىٕ", 
orth:`Arabic. &nbsp; Uses both naskh and nastaliq ([Aran]) styles.`},

"lt": { name:"Lithuanian", silcode:"lit", source:"cldr_lt,udhr_lit", region:"eur", countries:"Lithuania", script:"latn", speakers:"3000000", letter:"éÉąčęėįšųūžĄČĘĖĮŠŲŪŽ", mark:"̨̌̇̄́", punctuation:"‐–—…“„", aux:"ẽẼĩũĨŨáàãéèíìñóòõúùÁÀÃÉÈÍÌÑÓÒÕÚÙ́̃̀", local:"Lietuviškai / Lietuvių kalba", notes:`A Latin orthography written with the Fraktur style is no longer in use. There is a separate script subtag for Fraktur, [Latf].`},

"lu": { name:"Luba-Katanga (Luba-Shaba, Kiluba)", silcode:"lub", source:"cldr_lu", region:"afr", countries:"DRC", script:"latn", speakers:"1500000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙƐƆɛɔ", mark:"́̀", local:"Kiluba"},

"lua": { name:"Luba-Kasai (Western Luba)", source:"udhr_lua", region:"afr", countries:"DRC, Angola", script:"ascii", speakers:"6300000", local:"Tshiluba"},

"lue": { name:"Luvale", source:"udhr_lue", region:"afr", countries:"Zambia, Angola", script:"ascii", speakers:"640000", local:"Chiluvale / Luvale"},

"lun": { name:"Lunda (Chilunda)", source:"udhr_lun", region:"afr", countries:"Zambia, Angola", script:"ascii", speakers:"400000", local:"chiLunda"},

"luo": { name:"Luo (Dholuo)", source:"cldr_luo", region:"afr", countries:"Kenya, Tanzania", script:"ascii", speakers:"4200000", local:"Dholuo"},

"lus": { name:"Mizo", source:"udhr_lus", region:"sasia", countries:"India, Myanmar", script:"latn", speakers:"690000", letter:"âêûîãÂÊÛÎÃ", mark:"̂̃", local:"Mizo ṭawng", notes:`The autonym shows a t with dot below that isn't in the list, which may mean that character should be added.`, 
orth:`Latin. &nbsp; `,
also:
['lus-beng | beng | ',]
},

"luy": { name:"Luhya (Oluluyia, Luyia, Luhia, Luhiya)", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"", 
related:`luy is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bukusu, Lubukusu [bxk]<br/>Idakho-Isukha-Tiriki, Luidakho-Luisukha-Lutirichi [ida]<br/>Kabras, Lukabaras [lkb]<br/>Khayo, Olukhayo [lko]<br/>Kisa, Olushisa [lks]<br/>Marachi, Olumarachi [lri]<br/>Marama, Olumarama [lrm]<br/>Saamia, Olusamia [lsm]<br/>Tsotso, Olutsotso [lto]<br/>Tachoni, Lutachoni [lts]<br/>Wanga, Oluwanga [lwg]<br/>East Nyala [nle]<br/>Nyore, Olunyole [nyd]<br/>Logooli, Lulogooli [rag].
Legacy applications often use luy rather than [bxk].
`},

"lv": { name:"Latvian (Lettish)", silcode:"lav", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"", 
related:`lv is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Latgalian [ltg]<br/>Standard Latvian [lvs].
`},

"lvs": { name:"Latvian (Lettish)", source:"cldr_lv,udhr_lav", region:"eur", countries:"Latvia", script:"latn", speakers:"1750000", letter:"āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ", mark:"̧̄̌", punctuation:"§‐–—…‘’‚“”„†‡′″", aux:"ōŗŌŖ", local:"Latviešu valoda / Latviski"},

"mad": { name:"Madurese", source:"udhr_mad", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"15000000", local:"Basa Mathura"},

"mag": { name:"Magahi (Magadhi)", source:"udhr_mag", region:"sasia", countries:"India, Nepal", script:"deva", speakers:"14000000", letter:"मनवधकरलसयतषटउचबघणपगठदहभअएऔथओशईजखआडइछफढझञऐ", mark:"ािेंु्ोी़ूौृैँ", punctuation:"।", local:"मगही‎", localtrans:"(magahī)"},

"mai": { name:"Maithili", source:"udhr_mai,udhr_mai_2", region:"sasia", countries:"India, Nepal", script:"deva", speakers:"33900000", letter:"सरवभमनधकघषणटदबएतआउलजपठगअछहऐयशओचथखफइढडङईञʼ", mark:"ा्ौिोंेँीृूुःै़", punctuation:"।–", local:"मैथिली‎", localtrans:"(Maithilī)", 
orth:`Devanagari. &nbsp; Primary usage.`,
also:
['mai-kthi | kthi | Until end of 20th century.',
'mai-newa | newa | No longer in use.',
'mai-tirh | tirh | Until end of 20th century.',]
},

"mak": { name:"Makassarese", local:"𑻤𑻰𑻥𑻠𑻰𑻭", localtrans:"ɓasa mãŋˈkʰasaraʔ", silcode:"", 
source:"r12a", 
region:"seasia", countries:"Indonesia", script:"maka", speakers:"2100000", 
letter:"تم𑻠𑻡𑻢𑻣𑻤𑻥𑻦𑻧𑻨𑻩𑻪𑻫𑻬𑻭𑻮𑻯𑻰𑻱𑻲", letteraux:"ء", mark:"ّ𑻳𑻴𑻵𑻶", number:"٠١٢٣٤٥٦٧٨٩", punctuation:"𑻷𑻸", symbol:"", other:"\u{0600}\u{0601}", aux:" ​ ",	
orth:`[Makasar] Historical script. <a href='../scripts/maka/mak.html' target='_blank'>Details</a>.
`,
also:
["mak-bugi | bugi | Buginese script."],
linked:"maka/mak", picker:"maka", font:"Noto Serif Makasar", 
},

"mam": { name:"Mam", source:"udhr_mam", region:"cam", countries:"Guatemala, Mexico", script:"ascii", speakers:"540000", local:"B’anax Mam / Qyool Mam"},

"man": { name:"Mandingo (Manding)", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"0", related:`man is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Eastern Maninkakan [emk]<br/>Konyanka Maninka [mku]<br/>Western Maninkakan [mlq]<br/>Mandinka [mnk]<br/>Sankaran Maninka [msc]<br/>Kita Maninkakan [mwk]<br/>Forest Maninka (deprecated, don't use) [myq].
Legacy applications often use man rather than [emk] (Eastern Maninkakan).`},

"mas": { name:"Masai (Maasai, Maa)", source:"cldr_mas", region:"afr", countries:"Kenya, Tanzania", script:"latn", speakers:"1300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛƐƗƆɄāēīŋōūĀĒĪŊŌŪɛɨɔʉ", mark:"́̀̂̄", local:"Maa"},

"maz": { name:"Central Mazahua", source:"udhr_maz", region:"cam", countries:"Mexico", script:"latn", speakers:"140000", letter:"ñÑ", mark:"̸̱̃", local:"Jnatrjo"},

"mcd": { name:"Sharanahua (Marinawa)", source:"udhr_mcd", region:"sam", countries:"Peru", script:"latn", speakers:"3100", letter:"úíóáÚÍÓÁ", mark:"́", punctuation:"¿", local:"Sharanahuan tsain"},

"mcf": { name:"Matsés (Mayoruna)", source:"udhr_mcf", region:"sam", countries:"Peru, Brazil", script:"latn", speakers:"3200", letter:"ëË", mark:"̈", local:"Matses"},

"men": { name:"Mende", source:"udhr_men", region:"afr", countries:"Sierra Leone, Liberia", script:"latn", speakers:"1400000", letter:"ƆƐŋŊɔɛ", punctuation:"–‐", local:"Mɛnde / Mɛnde yia", 
orth:`Latin. &nbsp; `,
also:
['men-mend | mend | Limited usage except for correspondence, record keeping, and especially accounting.',]
},

"mer": { name:"Meru", source:"cldr_mer", region:"afr", countries:"Kenya", script:"latn", speakers:"2000000", letter:"ĩũĨŨ", mark:"̃", local:"Kimîîru"},

"mfe": { name:"Morisyen (Mauritian Creole, Morisien)", source:"cldr_mfe", region:"afr", countries:"Mauritius", script:"ascii", speakers:"1070000", local:"Kreol Morisien"},

"mg": { name:"Malagasy", silcode:"mlg", source:"cldr_mg,udhr_plt", region:"afr", script:"macrolanguage", speakers:"", related:`mg is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bara Malagasy [bhr]<br/>Southern Betsimisaraka Malagasy (deprecated, don't use). [bjq]<br/>Northern Betsimisaraka Malagasy [bmm]<br/>Southern Betsimisaraka Malagasy [bzc]<br/>Masikoro Malagasy [msh]<br/>Plateau Malagasy [plt]<br/>Sakalava Malagasy [skg]<br/>Tandroy-Mahafaly Malagasy [tdx]<br/>Tesaka Malagasy [tkg]<br/>Tanosy Malagasy [txy]<br/>Antankarana Malagasy, Tankarana Malagasy [xmv]<br/>Tsimihety Malagasy [xmw].
Legacy applications often use mg rather than [plt].
`},

"mgh": { name:"Makhuwa-Meetto", source:"cldr_mgh", region:"afr", countries:"Mozambique", script:"ascii", speakers:"6600000", local:"Imeetto"},

"mgo": { name:"Meta'", source:"cldr_mgo", region:"afr", countries:"Cameroon", script:"latn", speakers:"190000", letter:"ʼàèìòùÀÈÌÒÙƏƆŋŊəɔ", mark:"̀", punctuation:"‘’“”", local:"Mɨta’"},

"mh": { name:"Marshallese (Ebon)", silcode:"mah", source:"udhr_mah", region:"oce", countries:"Marshall Islands", script:"ascii", speakers:"55000"},

"mi": { name:"Maori (Te Reo)", silcode:"mri", source:"cldr_mi,udhr_mri,61f0a8014764c40b5937e54a104576fdf07d24d1", region:"oce", countries:"New Zealand", script:"latn", speakers:"60000", letter:"ĀāĒēĪīŌōŪūïÏ", mark:"̄̈", punctuation:"‰", local:"te reo Māori"},

"mic": { name:"Mi'kmaq (Micmac, Migmaw, Mikmaw)", source:"udhr_mic", region:"nam", countries:"Canada", script:"ascii", speakers:"14200", local:"L’nui’simk / Míkmawísimk", notes:`The autonym shows an accented character that isn't in the UDHR-based list.`, 
orth:`Latin. &nbsp; Also Ethnologue lists Micmac hieroglyphs, no longer in use (and no ISO script code.)`,
},

"mid": { name:"Neo-Mandaic", rtl:true, 
source:"280e6a9f98147de582820ff2179ebb7727e96147", 
region:"wasia", countries:"Iran, Iraq", script:"mand", speakers:"200", 
letter:"ـࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘ", mark:"࡙࡚࡛", number:"", punctuation:"«»،؛؟࡞﴾﴿", symbol:"", other:"",
aux:"(),./{}٠١٢٣٤٥٦٧٨٩٪۔‘’",
orth:`Mandaic. &nbsp;  <a href="../scripts/mandaic" target="_blank">Details</a>.`,
type:"alphabet", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", direction:"rtl", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"?",  justification:"sp str",
vowels:"let:4 cm:1",
linked:"mand/mid", picker:"mand", 
},

"min": { name:"Minangkabau", source:"udhr_min", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"5500000", 
related:`Macrolanguage is Malay [ms].`},

"miq": { name:"Mískitu (Miskito)", source:"udhr_miq", region:"cam", countries:"Nicaragua, Honduras", script:"latn", speakers:"150000", letter:"áâÁÂ", mark:"́̂", local:"Mískitu"},

"mk": { name:"Macedonian", silcode:"mkd", source:"cldr_mk,udhr_mkd", region:"eur", countries:"Macedonia, Albania, Bulgaria", script:"cyrl", speakers:"~2000000", letter:"абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ", mark:"́", punctuation:"‐–—…‘‚“„", aux:"ѐѝЀЍ̀", local:"македонски‎ / македонски јазик‎", localtrans:"(makedonski / makedonski jazik)", 
orth:`Cyrillic. &nbsp; Used since 1944.`},

"ml": { name:"Malayalam", local:"മലയാളം‎", localtrans:"(malayāḷam)", silcode:"mal", 
source:"cldr_ml,udhr_mal,d347047791774df1311d53dee98495c224fe0166", 
region:"sasia", countries:"India, Singapore", script:"mlym", speakers:"38000000", 
letter:"അആഇഈഉഊഋഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹൔൕൖൺൻർൽൾൿ", letteraux:"ഌൠൡ", mark:"ംഃാിീുൂൃെേൈൊോ്ൗ", number:"൦൧൨൩൪൫൬൭൮൯", punctuation:"‘’“”", symbol:"", symbolaux:"൹", other:"\u{200C}\u{200D}", aux:"%[]«»ʼ͏ഀഁ഻഼ഽ​‑–—…‰‹›⁠", 
orth:`Malayalam. &nbsp; Primary usage. <a href="../scripts/malayalam" target="_blank">Details</a>.`,
also:
["ml-arab | arab | Naskh style."],
linked:"mlym/ml", picker:"mlym", font:"'Noto Serif Malayalam'", 
},

"mn": { name:"Mongolian", silcode:"mon", redirect:true, region:"easia", script:"macrolanguage", speakers:"?", related:`mn is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Halh Mongolian [khk]<br/>Peripheral Mongolian [mvf].
Legacy applications often use mn rather than [mvf].`
},

"mnw": { name:"Mon", source:"udhr_mnw", region:"seasia", countries:"Myanmar, Thailand", script:"mymr", speakers:"851000", letter:"လကၚအခရမဟပဍစတသဂဒဇနဘဝဗဓထၜယညဆဏဖဿဥဋဉဌဠ", mark:"ိ်ောါၞုံွဲ္ဵၟဳြှူၠးဴီျ", punctuation:"၊။","number":"၁၉၄၈၀၂၃၅၆၇"},

"mos": { name:"Mòoré (Mossi, Mooré)", source:"udhr_mos", region:"afr", countries:"Burkina Faso, Mali, Togo", script:"latn", speakers:"7600000", letter:"ãõÃÕƖƱƐĩũœĨŨŒẽẼɩʊɛ", mark:"̃", punctuation:"’", local:"Mòoré", notes:`Note that the accents in the autonym don't appear in the UDHR text, suggesting that we need to add characters here.`},

"mr": { name:"Marathi", silcode:"mar", source:"cldr_mr,udhr_mar", region:"sasia", countries:"India", script:"deva", speakers:"73000000", letter:"ऱॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्", punctuation:"‐–—…‘’“”′″","number":"१२३४५६७८९०", other:"‌‍", local:"मराठी‎", localtrans:"(marāṭhī)", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here."},

"mro": { name:"Mru, Mro", local:"", localtrans:"", silcode:"mro", 
source:"", 
region:"sasia", countries:"Bangladesh", script:"mroo", speakers:"400000", 
letter:"𖩀𖩁𖩂𖩃𖩄𖩅𖩆𖩇𖩈𖩉𖩊𖩋𖩌𖩍𖩎𖩏𖩐𖩑𖩒𖩓𖩔𖩕𖩖𖩗𖩘𖩙𖩚𖩛𖩜𖩝𖩞", mark:"", number:"𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩", punctuation:"“”𖩮𖩯", symbol:"", other:"", aux:"%[]–—…‰", 
orth:`Mro.  <a href="../scripts/mroo/mro.html" target="_blank">Details.</a>`,
linked:"mroo/mro", picker:"mroo-mro", font:"", 
},

"ms": { name:"Malay", silcode:"msa", source:"", region:"seasia", script:"macrolanguage", speakers:"77000000", related:`ms is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Indonesian [id]<br/>Indonesian (deprecated, use id) [in]<br/>Banjar [bjn]<br/>Bacanese Malay [btj]<br/>Berau Malay [bve]<br/>Bukit Malay [bvu]<br/>Cocos Islands Malay [coa]<br/>Duano [dup]<br/>Haji [hji]<br/>Jakun [jak]<br/>Jambi Malay [jax]<br/>Kubu [kvb]<br/>Kerinci [kvr]<br/>Brunei [kxd]<br/>Loncong, Sekak [lce]<br/>Lubu [lcf]<br/>Col [liw]<br/>North Moluccan Malay [max]<br/>Kedah Malay [meo]<br/>Pattani Malay [mfa]<br/>Bangka [mfb]<br/>Minangkabau [min]<br/>Kota Bangun Kutai Malay [mqg]<br/>Sabah Malay [msi]<br/>Musi [mui]<br/>Orang Kanaq [orn]<br/>Orang Seletar [ors]<br/>Pekal [pel]<br/>Central Malay [pse]<br/>Temuan [tmw]<br/>Urak Lawoi' [urk]<br/>Kaur [vkk]<br/>Tenggarong Kutai Malay [vkt]<br/>Manado Malay [xmm]<br/>Malay (individual language) [zlm]<br/>Negeri Sembilan Malay [zmi]<br/>Standard Malay [zsm].
Legacy applications often use ms rather than [zsm].
`},

"mt": { name:"Maltese", silcode:"mlt", source:"cldr_mt,udhr_mlt", region:"eur", countries:"Malta", script:"latn", speakers:"520000", letter:"àèìòùÀÈÌÒÙċġħżĊĠĦŻ", mark:"̀̇", punctuation:"‘’“”", local:"Malti", 
orth:`Latin. &nbsp; Primary usage.`,
also:
['mt-arab | arab | Naskh style. No longer in use.',]
},

"mto": { name:"Totontepec Mixe (North Highland Mixe)", source:"udhr_mto", region:"cam", countries:"Mexico", script:"latn", speakers:"5500", letter:"äüëöéÄÜËÖÉ", mark:"̈́", punctuation:"’", local:"Ayuk"},

"mua": { name:"Mundang", source:"cldr_mua", region:"afr", countries:"Chad, Cameroon", script:"latn", speakers:"240000", letter:"ãëõÃËÕǝƁƊƎĩŋĨŊṽṼɓɗ", mark:"̃̈", local:"záá múndàŋ", notes:`Note that the autonym has diacritics which were not found in CLDR.`},

"mxi": { name:"Mozarabic (Andalusi Romance)", source:"udhr_mxi", region:"eur", script:"latn", speakers:"0", letter:"àùèòÀÙÈÒ", mark:"̀", punctuation:"’"},

"my": { name:"Burmese (Myanmar)", local:"", localtrans:"", silcode:"", 
source:"cldr_my,udhr_mya,e658408933cd9f4d157eac1af6c6373f4c7c6f44", 
region:"seasia", countries:"Myanmar", script:"mymr", speakers:"33000000", 
letter:"ကခဂငစဆဇဉညတထဒဓနပဖဗဘမယရလဝသဟအဣဤဥဦဧဩဪဿ", letteraux:"ဃဈဠ", mark:"ါာိီုူေဲံ့း္်ျြွှ", number:"၀၁၂၃၄၅၆၇၈၉", punctuation:"၊။၌၍၎၏“”", symbol:"", other:"\u200B\u2060", otheraux:"\u200C", aux:"!͏‍–—‘’…",	
orth:`Myanmar. &nbsp; <a href="../scripts/myanmar" target="_blank">Details</a>.`,
linked:"mymr/my", picker:"mymr-my", font:"", 
},

"mzi": { name:"Ixcatlán Mazatec", source:"udhr_mzi", region:"cam", countries:"Mexico", script:"latn", speakers:"8600", letter:"áñíóéÁÑÍÓÉ", mark:"́̃", punctuation:"’", local:"En ningotsie"},

"mzn": { name:"Mazanderani (Tabari, Geleki)", rtl:true, source:"cldr_mzn", region:"wasia", countries:"Iran", script:"arab", speakers:"6000000", letter:"ءآأؤئابپةتثجچحخدذرزژسشصضطظعغفقکگلمنهویي", mark:"ًٌٍّٔٓ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"َُِْٰٖإكىٕ", local:"طبری‎ / مازرونی‎", localtrans:"(tabari / mazuroni)", 
orth:`Arabic. &nbsp; Uses both nastaliq ([Aran]) and naskh styles.`},

"nah": { name:"Nahuatl (Aztec)", source:"udhr_nhn", region:"cam", script:"latn", speakers:"1700000", letter:"íÍ", mark:"́"},

"naq": { name:"Khoekhoe (Nama, Hottentot)", source:"cldr_naq", region:"afr", countries:"Namibia", script:"latn", speakers:"300000", letter:"ǀǁǂǃâîôûÂÎÔÛ", mark:"̂", local:"Khoekhoe, Khoekhoegowab"},

"nb": { name:"Norwegian Bokmål", silcode:"nor", source:"cldr_nb,udhr_nob", region:"eur", script:"latn", speakers:"5190000", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"«»§–", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáãçèêíñúüäöÁÃÇÈÊÍÑÚÜÄÖ̧̌̃̈", local:"Norsk", related:`Macrolanguage is Norwegian [no]. Legacy applications often use no rather nb.`},

"nba": { name:"Nyemba", source:"udhr_nba", region:"afr", countries:"Angola", script:"latn", speakers:"900000", letter:"ñÑ", mark:"̃"},

"nd": { name:"Northern Ndebele (isiNdebele, Sindebele, Ndebele, North Ndebele, Matabele)", silcode:"nde", source:"cldr_nd", region:"afr", countries:"Zimbabwe, Botswana", script:"ascii", speakers:"1600000", local:"isiNdebele"},

"nds": { name:"Low German (Low Saxon)", source:"cldr_nds,udhr_nds", region:"eur", countries:"Germany, Brazil", script:"latn", speakers:"301000", letter:"åäöüÅÄÖÜ", mark:"̊̈", punctuation:"’", aux:"ăāĕęēĭīŏōœŭūĂĀĔĘĒĬĪŎŌŒŬŪŸáàâæçéèêëíìîïñóòôøúùûÿÁÀÂÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̨́̀̆̂̄̃", local:"Niedersächsisch"},

"ne": { name:"Nepali", silcode:"nep", redirect:true, source:"", region:"sasia", script:"macrolanguage", speakers:"", related:`ne is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Dotyali [dty]<br/>Nepali (individual language) [npi].
Legacy applications often use ne rather than [npi].
`},

"new": { name:"Newar (Newa Bhaye, Newaah Bhaae, Newaah Bhaaye, Newah, Newal Bhaye)", local:"नेवाः भाय्‎ / नेपाल भाषा‎", localtrans:"(newah bhay / nepal bhasa)", silcode:"", 
source:"b5241e2710ad015ba1bd5fbe840b55d15bbc9963", 
region:"sasia", countries:"Nepal", script:"newa", speakers:"861000", 
letter:"𑐀𑐁𑐂𑐃𑐄𑐅𑐆𑐊𑐋𑐌𑐍𑐎𑐏𑐐𑐑𑐒𑐓𑐔𑐕𑐖𑐗𑐘𑐙𑐚𑐛𑐜𑐝𑐞𑐟𑐠𑐡𑐢𑐣𑐤𑐥𑐦𑐧𑐨𑐩𑐪𑐫𑐬𑐭𑐮𑐯𑐰𑐱𑐲𑐳𑐴𑑉", mark:"𑐵𑐶𑐷𑐸𑐹𑐺𑐾𑐿𑑀𑑁𑑂𑑃𑑄𑑅", number:"𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙", punctuation:"‘’“”𑑋𑑌", symbol:"", other:"\u{200C}\u{200D}", aux:"%-.[]ʼ͏–—⋯𑐇𑐈𑐉𑐻𑐼𑐽𑑆𑑇𑑈𑑊𑑍𑑎𑑏𑑚𑑛𑑝𑑞𑑟𑑠𑑡", 
orth:`Newa. &nbsp; Resurgent orthography. <a href="../scripts/newa" target="_blank">Details</a>.`,
linked:"newa/new", picker:"newa", font:"", 
},


"ng": { name:"Ndonga, (Oshindonga)", silcode:"ndo", source:"udhr_ndo", region:"afr", countries:"Namibia", script:"ascii", speakers:"810000", local:"Oshindonga / Oshiwambo"},

"nio": { name:"Nganasan", source:"udhr_nio", region:"nasia", script:"cyrl", countries:"Russia", speakers:"130", letter:"нерәзытбуоясикаӈҫүдйхлмпвгөъцьчэщжюНЕРӘЗЫТБУОЯСИКАӇҪҮДЙХЛМПВГӨЪЦЬЧЭЩЖЮ", mark:"̆", punctuation:"”"},

"nku": { name:"Bouna Kulango", source:"udhr_nku", region:"afr", countries:"Côte d'Ivoire, Ghana", script:"latn", speakers:"130000", letter:"ƖƆƐƝƲŋŊɩɔɛɲʋ", punctuation:"’"},

"nl": { name:"Dutch", silcode:"nld", source:"cldr_nl,udhr_nld", region:"eur", countries:"Netherlands, Belgium, Suriname, Curacao, Aruba", script:"latn", speakers:"24000000", letter:"áäéëíïóöúüÁÄÉËÍÏÓÖÚÜ", mark:"́̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"œŒŸàâåãæçèêîñôøùûÿÀÂÅÃÆÇÈÊÎÑÔØÙÛ̧̀̂̊̃", local:"Hollands / Nederlands"},

"nmg": { name:"Kwasio (Ngumba, Mvumbo, Bujeba, Gyele, Kola)", source:"cldr_nmg", region:"afr", countries:"Equatorial Guinea, Cameroon", script:"latn", speakers:"26000", letter:"áâäéêíîïóôöúûÁÂÄÉÊÍÎÏÓÔÖÚÛǎǝǐǒǔǍƁƎƐǏǑƆǓāěēīńŋōŕūĀĚĒĪŃŊŌŔŪɓɛɔ", mark:"́̂̌̄̈", 
orth:`Latin. &nbsp; Revised 2011.`,
also:
['nmg-x-1930latn | latn | From 1930s.',]
},

"nn": { name:"Norwegian Nynorsk", silcode:"nor", source:"cldr_nn,udhr_nno", region:"eur", countries:"Norway", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"‰", symbol:"−", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáçèêñüäöÁÇÈÊÑÜÄÖ̧̌̃̈", local:"Norsk", 
related:`Macrolanguage is Norwegian [no].`},

"nnh": { name:"Ngiemboon", source:"cldr_nnh", region:"afr", countries:"Cameroon", script:"latn", speakers:"250000", letter:"ʼáàâéèêíìóòôúùûÿÁÀÂÉÈÊÍÌÓÒÔÚÙÛǎǒǔǍƐǑƆǓɄěńŋĚŃŊŸḿẅḾẄɛɔʉ", mark:"́̀̂̌̈", punctuation:"«»‘’", local:"Shwoge"},

"nnp-wcho": { name:"Wancho", local:"𞋒𞋀𞋉𞋃𞋕", localtrans:"/want͡ʃo/", silcode:"", 
source:"454005271107db89215e8dede7e06e3348da260d", 
region:"sasia", countries:"India, Myanmar, Bhutan", script:"wcho", speakers:"55000", 
letter:"𞋀𞋁𞋂𞋃𞋄𞋅𞋆𞋇𞋈𞋉𞋊𞋋𞋌𞋍𞋎𞋏𞋐𞋑𞋒𞋓𞋔𞋕𞋖𞋗𞋘𞋙𞋚𞋛𞋜𞋝𞋞𞋟𞋠𞋡𞋢𞋣𞋤𞋥𞋦𞋧𞋨𞋩𞋪𞋫", mark:"𞋬𞋭𞋮𞋯", number:"𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹", punctuation:"", symbol:"𞋿", other:"", aux:"()-‘’“”…", 
orth:`[Wancho] Created between 2001 and 20013. <a href="../scripts/wcho/nnp.html" target="_blank">Details</a>.`,
also:
["nnp-deva | deva | Devanagari orthography (primary)",
"nnp-latn | latn | Latin orthography."],
linked:"wcho/nnp", picker:"wcho-nnp", font:"Noto Sans Wancho", 
},

"no": { name:"Norwegian", silcode:"nor", redirect:true, source:"", region:"eur", countries:"Norway", script:"macrolanguage", speakers:"0", related:`no is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Norwegian Bokmål [nb]<br/>Norwegian Nynorsk [nn].
Legacy applications often use no rather than [nb].`},

"nod": { name:"Northern Thai (Lanna, Kam Mueang)", local:"ᨣᩤᩴᨾᩮᩬᩨᨦ‎", localtrans:"(kam mueang / คำเมือง)", silcode:"", 
source:"85b2f09701993de6c7a34f3ac37f1bb9697f3d58", 
region:"seasia", countries:"Thailand, Laos", script:"lana", speakers:"6000000", 
letter:"ᨠᨡᨢᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩛᩝᩞ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩮᩯᩰᩱᩴ᩿᩵᩶᩺᩻", markaux:"ᩲᩳ", number:"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙", punctuation:"᪠᪡᪢᪣᪤᪥᪦᪨᪩᪪᪫᪬᪭“”", symbol:"", other:"", aux:",.:;§«»ʼ͏ᩂᩄᩒᩗᩜ​‌‍‐‑–—‘’†‡…′″", 
orth:`Tai Tham. &nbsp; Limited usage. <a href="../scripts/taitham/northernthai" target="_blank">Details</a>.`,
also:
["nod-thai | thai | "],
linked:"lana/nod", picker:"lana-nod", font:"'Payap Lanna'", 
},

"not": { name:"Nomatsiguenga", source:"udhr_not", region:"sam", countries:"Peru", script:"latn", speakers:"6500", letter:"ëíáóñËÍÁÓÑ", mark:"̈́̃", local:"Nomatsigenga"},

"npi": { name:"Nepali", source:"cldr_ne,udhr_nep", region:"sasia", countries:"Nepal, India, Bhutan", script:"deva", speakers:"40000000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽ", mark:"़ँंःािीुूृॅेैॉोौ्", punctuation:"।","number":"१२३४५६७८९०", other:"‍", local:"नेपाली‎", localtrans:"(nepālī)", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here.", 
related:`Macrolanguage is Nepali [ne]. Legacy applications often use ne rather npi.`},

"nqo": { name:"N’Ko (Kangbe)", local:"ߒߞߏ", localtrans:"", silcode:"", rtl:true, 
source:"13c49deccb3837263a381fe75e79bab744b7a7e1", 
region:"afr", countries:"Guinea, Côte d'Ivoire, Mali", script:"nkoo", speakers:"0", 
letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߴߵߺ", mark:"߲߽߫߬߭߮߯߰߱߳", number:"߀߁߂߃߄߅߆߇߈߉", punctuation:"«»،؛؟߷߸߹⸜⸝﴾﴿", symbol:"߶߾߿", other:"\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"͏؜٪​‑–—‘’“”…‹›⁠", 
orth:`[N’Ko] &nbsp; This is a written, rather than spoken, language. Used as a koiné by speakers of Maninka, Bambara, Dyula and related dialects. <a href="../scripts/nko" target="_blank">Details</a>`,
linked:"nkoo/nqo", picker:"nko", font:"", 
},

"nr": { name:"Ndebele (Southern Ndebele, Transvaal Ndebele)", silcode:"nbl", source:"udhr_nbl", region:"afr", countries:"South Africa", script:"ascii", speakers:"1100000", local:"IsiNdebele"},

"nso": { name:"Northern Sotho", source:"udhr_nso", region:"afr", countries:"South Africa", script:"latn", speakers:"4700000", letter:"šŠ", mark:"̌", local:"Sesotho sa Leboa"},

"nst": { name:"Tangsa", local:"𖪫𖪏𖪴𖩻𖪇𖪐", localtrans:"mɯ˧ʃəuŋ˧", silcode:"", 
source:"r12a", 
region:"seasia", countries:"Myanmar, India", script:"tnsa", speakers:"110000", 
letter:"𖩰𖩱𖩲𖩳𖩴𖩵𖩶𖩷𖩸𖩹𖩺𖩻𖩼𖩽𖩾𖩿𖪀𖪁𖪂𖪃𖪄𖪅𖪆𖪇𖪈𖪉𖪊𖪋𖪌𖪍𖪎𖪏𖪐𖪑𖪒𖪓𖪔𖪕𖪖𖪗𖪘𖪙𖪚𖪛𖪜𖪝𖪞𖪟𖪠𖪡𖪢𖪣𖪤𖪥𖪦𖪧𖪨𖪩𖪪𖪫𖪬𖪭𖪮𖪯𖪰𖪱𖪲𖪳𖪴𖪵𖪶𖪷𖪸𖪹𖪺𖪻𖪼𖪽𖪾", letteraux:"", mark:"", markaux:"", number:"𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉", numberaux:"", punctuation:"", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Tangsa] Used mainly for Muishvung dialect. <a href='../scripts/tnsa/nst.html' target='_blank'>Details</a>.
`,
also:
["nst-latn | latn | Principal orthography."],
notes:`The term Tangsa covers a collection of dialects spanning the India/Myanmar border.`,
linked:"tnsa/nst", picker:"tnsa", font:"Noto Sans Tangsa", 
},

"nus": { name:"Nuer (Thok Naath)", source:"cldr_nus", region:"afr", countries:"South Sudan, Ethiopia", script:"latn", speakers:"890000", letter:"äëïöÄËÏÖƐƔƆŋŊɛɣɔ", mark:"̱̈", local:"Naath"},

"nv": { name:"Navajo (Navaho)", silcode:"nav", source:"udhr_nav", region:"nam", countries:"USA", script:"latn", speakers:"266000", letter:"ʼéóáíÉÓÁÍǫǪąłįęĄŁĮĘ", mark:"̨́", local:"Diné Bizaad, Naabeehó bizaad"},

"ny": { name:"Chichewa (Chewa, Nyanja, Chichewa, Chinyanja)", silcode:"nya", source:"udhr_nya_chechewa", region:"afr", countries:"Malawi, Zambia, Mozambique, Zimbabwe", script:"ascii", speakers:"12000000", local:"Chicheŵa", notes:`Note that the autonym uses an accented character.`},

"nym": { name:"Nyamwezi", source:"udhr_nym", region:"afr", countries:"Tanzania", script:"ascii", speakers:"1000000"},

"nyn": { name:"Nyankore (Nkore, Nkole, Nyankole, Orunyankore, Orunyankole, Runyankore, Runyankole)", source:"cldr_nyn,udhr_nyn", region:"afr", countries:"Uganda", script:"ascii", speakers:"2300000", local:"Runyankore"},

"nzi": { name:"Nzima (Appolo)", source:"udhr_nzi", region:"afr", countries:"Ghana, Côte d'Ivoire", script:"latn", speakers:"330000", letter:"ɔɛƆƐ", 
orth:`Latin. &nbsp; Used since about 1965.`},

"oaa": { name:"Orok (Uilta, Ulta, Ujlta)", source:"udhr_oaa", region:"nasia", script:"cyrl", speakers:"50", letter:"ƝūŪɲԩԨчипалнесдкробуӡгэӈмхтөвӯзЧИПАЛНЕСДКРОБУӠГЭӇМХТӨВӮЗ", mark:"̄", punctuation:"–"},

"oc": { name:"Occitan", silcode:"oci", source:"udhr_lnc", region:"eur", countries:"France, Italy, Monaco, Spain", script:"latn", speakers:"~200000", letter:"óèéçàïòìùúâêîëáôüûÓÈÉÇÀÏÒÌÙÚÂÊÎËÁÔÜÛ", mark:"̧́̀̈̂", punctuation:"«»’—"},

"oj": { name:"Ojibwa", silcode:"oji", redirect:true, source:"", region:"nam", script:"macrolanguage", speakers:"", related:`oj is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Chippewa [ciw]<br/>Northwestern Ojibwa [ojb]<br/>Central Ojibwa [ojc]<br/>Eastern Ojibwa [ojg]<br/>Severn Ojibwa [ojs]<br/>Western Ojibwa [ojw]<br/>	Ottawa [otw].
Legacy applications often use oj rather than [ojg].
`},

"ojb": { name:"Northwestern Ojibwa", source:"udhr_ojb", region:"nam", countries:"Canada", script:"cans", speakers:"100880", letter:"ᐯᒪᑎᓯᑦᑌᐸᑫᑕᑯᐎᓇᓐᒥᐌᑲᒃᔭᐊᓂᐃᔑᑭᔝᐤᐅᑾᐱᔦᑐᐗᒣᒋᐁᔅᓱᓀᓄᒧᓭᔥᐨᑡᔕᓴᓶᓉᐺᓪᑉᐼᑴᑄᒐᒬᔐᔗᑺᔡᒻᒡᑶ", local:"Nakawēmowin", 
related:`Macrolanguage is Ojibwa [oj].`,
orth:`Latin. &nbsp; `,
also:
['ojb-cans | cans | No longer in use according to Ethnologue.',]
},

"oki": { name:"Okiek", source:"udhr_oki", region:"afr", countries:"Kenya", script:"ascii", speakers:"79000", notes:`Ethnologue regards this language as unwritten.`},

"om": { name:"Oromo", silcode:"orm", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"25542000", related:`om is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Borana-Arsi-Guji Oromo [gax]<br/>West Central Oromo [gaz]<br/>Eastern Oromo [hae]<br/>Orma [orc].
Legacy applications often use om rather than [gaz].`},

"or": { name:"Oriya (Odia)", silcode:"ori", redirect:true, source:"", region:"sasia", script:"macrolanguage", speakers:"", related:`or is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Odia, Oriya (individual language) [ory]<br/>Sambalpuri, Kosli [spv].`},

"ory": { name:"Odia (Oriya)", local:"ଓଡ଼ିଆ‎", localtrans:"(oḍiā)", silcode:"", xxlang:"or",
source:"7dcf17c28affb360d4d46f7a0540a5e4644ab9e3,cldr_or", 
region:"sasia", countries:"India", script:"orya", speakers:"33000000", 
letter:"ଅଆଇଈଉଊଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହଽୟୱ", letteraux:"ଋଌଡ଼ଢ଼ୠୡ", mark:"ଁଂଃ଼ାିୀୁୂୃେୈୋୌ୍", markaux:"ୄୖୗୢୣ", number:"୦୧୨୩୪୫୬୭୮୯", punctuation:"।॥‘’“”…", symbol:"୰", other:"\u{200C}\u{200D}", aux:"%-[]ʼ͏‑–—", 
related:`Macrolanguage is Oriya [or].`,
linked:"orya/or", picker:"orya", font:"", 
},

"osa": { name:"Osage (Wazhazhe)", local:"𐓏𐓘𐓻𐓘𐓻𐓟 𐓣𐓟", localtrans:"", silcode:"", 
source:"f75ee5a02603b011f6e9d88afdf63c3abcd3e860", 
region:"nam", countries:"USA", script:"osge", speakers:"0", 
letter:"ʼ𐒰𐒱𐒲𐒳𐒴𐒵𐒶𐒷𐒸𐒹𐒺𐒻𐒼𐒽𐒾𐒿𐓀𐓁𐓂𐓃𐓄𐓅𐓆𐓇𐓈𐓉𐓊𐓋𐓌𐓍𐓎𐓏𐓐𐓑𐓒𐓓𐓘𐓙𐓚𐓛𐓜𐓝𐓞𐓟𐓠𐓡𐓢𐓣𐓤𐓥𐓦𐓧𐓨𐓩𐓪𐓫𐓬𐓭𐓮𐓯𐓰𐓱𐓲𐓳𐓴𐓵𐓶𐓷𐓸𐓹𐓺𐓻", mark:"́̄̋͘", number:"", punctuation:"–—‘’“”…", symbol:"", other:"", aux:"%-[]‑", 
orth:`Osage. <a href="../scripts/osage" target="_blank">Details</a>. Standardised in 2015.`,
also:
["osa-latn | latn | Non-standardised orthography."],
linked:"osge/osa", picker:"osge", font:"", 
},

"ote": { name:"Mezquital Otomi", source:"udhr_ote", region:"cam", countries:"Mexico", script:"latn", speakers:"130000", letter:"öüäéñúíáèÖÜÄÉÑÚÍÁÈ", mark:"̱̈́̃̀", local:"Hñahñu"},

"pa": { name:"Punjabi", local:"ਪੰਜਾਬੀ‎ / ਪੰਜਾਬੀ ਭਾਸ਼ਾ‎", localtrans:"(panjabi / panjabi bhasa)", silcode:"pan", 
source:"cldr_pa,udhr_pan,f940e5c7fc381992f942120f89cd8137cb3c3eda", 
region:"sasia", countries:"India", script:"guru", speakers:"122000000", 
letter:"ʼਅਆਇਈਉਊਏਐਓਔਕਖਗਘਚਛਜਝਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸਹੜੴ", letteraux:"ਙਞਲ਼ਸ਼ਖ਼ਗ਼ਜ਼ਫ਼", mark:"ਂਃ਼ਾਿੀੁੂੇੈੋੌ੍ੰੱੵ", number:"੦੧੨੩੪੫੬੭੮੯", punctuation:"।‘’“”", symbol:"☬", other:"", aux:"%[]«»॥‌‍‑–—…‰‹›⁠", 
orth:`Gurmukhi. &nbsp; Primary usage. <a href="../scripts/gurmukhi" target="_blank">Details</a>.`,
also:
["pa-arab | arab | Naskh style. See also [pnb].",
"pa-khoj | khoj | "],
notes:`Need to check the difference between pa-arab and pnb.`,
linked:"guru/pa", picker:"guru", font:"", 
},

"pa-arab": { name:"Punjabi", silcode:"pan", rtl:true, source:"cldr_pa_Arab", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابتثجحخدذرزسشصضطظعغفقلمنهويٹپچڈڑژکگںھہیے", mark:"ُٓٔ", punctuation:"‰", other:"‎‏", aux:"أاةٔٺٻټٽ", 
orth:`Arabic. &nbsp; Naskh style. See also [pnb].`,
also:
['pa | guru | Primary usage.',
'pa-khoj | khoj | '],
notes:`Need to check the difference between pa-arab and pnb.`
},

"pam": { name:"Pampangan (Kapampangan)", source:"udhr_pam", region:"seasia", countries:"Philippines", script:"ascii", speakers:"1900000", local:"Kapampangan"},

"pap": { name:"Papiamento (Papiamentu)", source:"udhr_pap", region:"carib", countries:"Curacao, Aruba, Caribbean Netherlands, Sint Marten", script:"latn", speakers:"271261", letter:"ñÑ", mark:"̃", punctuation:"’", local:"Papiamentu"},

"pau": { name:"Palauan", source:"udhr_pau", region:"seasia", countries:"Palau", script:"ascii", speakers:"17000", local:"Tekoi ra Belau"},

"pbb": { name:"Páez (Paez, Paes, Nasa Yuwe)", source:"udhr_pbb", region:"sam", countries:"Colombia", script:"latn", speakers:"40000", letter:"üëäïáÜËÄÏÁ", mark:"̈́", local:"Nasa Yuwe"},

"pbt": { name:"Southern Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pus",
source:"r12a", 
region:"casia", countries:"Afghanistan", script:"arab", speakers:"~50000000", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکگڼیۍې", letteraux:"", mark:"َُِٙ", markaux:"͏ًٓٔ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟٪٬‘’“”…", other:"\u061C\u200C\u200D\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Arabic] Characters typically used in Afghanistan. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
type:"abjad", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"rtl",  justification:"?", 
vowels:"ml:y hcm:y", 
linked:"arab/ps", fonts:"arab-ps", font:"Scheherazade", 
},

"pbu": { name:"Northern Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pbu",  rtl:true,
source:"r12a,cldr_ps", 
region:"casia", countries:"Pakistan, Afghanistan, UAE", script:"arab", speakers:"20850900", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکګڼۀیۍېے", letteraux:"ە", mark:"َُِٙ", markaux:"͏ًٓٔ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟٪٬‘’“”…", other:"\u061C\u200C\u200D\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Arabic]  &nbsp; Characters typically used in the Peshawar region. Primary usage is naskh style, but nastaliq ([Aran]) also used. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
type:"abjad", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"rtl",  justification:"?", 
vowels:"ml:y hcm:y", 
linked:"arab/ps", fonts:"arab-ps", font:"Scheherazade", 
},


"pcd": { name:"Picard", source:"udhr_pcd", region:"eur", countries:"France, Belgium", script:"latn", speakers:"700000", letter:"èåûîéôçÈÅÛÎÉÔÇ", mark:"̧̀̊̂́", symbol:"°"},

"pcm": { name:"Nigerian Pidgin", source:"udhr_pcm", region:"afr", countries:"Nigeria", script:"ascii", speakers:"30000000", local:"Naijá", 
orth:`Latin. &nbsp; Used since 2002.`},

"pes": { name:"Persian (Farsi)", local:" فارسی‎", localtrans:"(fārsi)", silcode:"", rtl:true, 
source:"f6c7293e56545fe2044143ef784236e7d524019c,cldr_fa,udhr_pes", 
region:"wasia", countries:"Iran, Iraq", script:"arab", speakers:"~50000000", 
letter:"ءآؤابةتثجحخدذرزسشصضطظعغـفقلمنهوپچژکگی", letteraux:"أ", mark:"͏ًَُِّْٔ", markaux:"ٌٍٓ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟", symbol:"", other:"\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"%-[]{}ʼ؉؍٪٫٬٭ٰ۔ ‑–—‘’“”…‰‹›", 
orth:`Arabic. &nbsp; Naskh style, but nastaliq ([Aran]) in Iran.`,
related:`Macrolanguage is Farsi [fa]. Legacy applications often use fa rather than pes.`,
linked:"arab/pes", picker:"arab-fa", font:"", 
},

"pis": { name:"Pijin", source:"udhr_pis", region:"oce", countries:"Solomon Islands", script:"ascii", speakers:"24000", local:"Pijin"},

"piu": { name:"Pintupi-Luritja", source:"udhr_piu", region:"oce", countries:"Australia", script:"ascii", speakers:"1703"},

"pl": { name:"Polish", silcode:"pol", source:"cldr_pl,udhr_pol", region:"eur", countries:"Poland, Germany, Lithuania, Israel, Russia, Czechia", script:"latn", speakers:"55000000", letter:"óÓąćęłńśźżĄĆĘŁŃŚŹŻ", mark:"̨́̇", punctuation:"«»§‐–—…”„†‡′″", symbol:"°", aux:"œŒŸàâåäæçéèêëîïôößùûüÿÀÂÅÄÆÇÉÈÊËÎÏÔÖÙÛǛ̧̂̊̈", local:"język polski"},

"plt": { name:"Plateau Malagasy", source:"cldr_mg,udhr_plt", region:"afr", countries:"Madagascar", script:"latn", speakers:"18000000", letter:"àâéèêëìîïñôÀÂÉÈÊËÌÎÏÑÔ", mark:"̀̂́̈̃", local:"Malagasy", notes:"UDHR has no accents", 
related:`Macrolanguage is Malagasy [mg]. Legacy applications often use mg rather plt.`},

"pnb": { name:"Western Panjabi", rtl:true, source:"cldr_pnb,udhr_pnb", region:"sasia", countries:"Pakistan, India", script:"arab", speakers:"122000000", letter:"ءآؤئابپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںهھہویےي", mark:"ُٓٔ", punctuation:"‐–—‘’“”′″", local:"پنجابی‎", localtrans:"(panjābī)", notes:`Need to ascertain whether this is the same as [pa-arab].`, 
orth:`Arabic. &nbsp; Naskh and nastaliq ([Aran]) styles in primary usage.
Also used Lahnda script, but no longer in use (and no ISO script tag.)`,
also:
['pnb-khoj | khoj | ',
'pnb-latn | latn | ']
},

"pon": { name:"Pohnpeian (Ponapean)", source:"udhr_pon", region:"oce", countries:"Micronesia", script:"ascii", speakers:"31000", local:"Pohnpei"},

"ppl": { name:"Nawat (Nicarao, Pipil)", source:"udhr_ppl", region:"cam", countries:"El Salvador", script:"latn", speakers:"500", letter:"áéÁÉ", mark:"́", local:"Nahuat"},

"prg": { name:"Prussian (Old Prussian)", source:"cldr_prg", region:"eur", countries:"Poland", script:"latn", speakers:"0", letter:"țȚāēģīķņōŗšūžĀĒĢĪĶŅŌŖŠŪŽḑḐ", mark:"̧̦̄̌", punctuation:"‐–—…“„"},

"prq": { name:"Ashéninka Perené", source:"udhr_prq", region:"sam", countries:"Peru", script:"latn", speakers:"~50000", letter:"íÍ", mark:"́", punctuation:"¿", related:"This is one of several closely related Ashéninka languages (though there is no macrolanguage), including: [cpu], [cpc], [cpb], [cjo], [cpy]. Ashéninka was recognized as a separate language from Asháninka ([cni]) in 2017, and the process to fix an alphabet was underway during 2018."},

"prs": { name:"Dari (Afghan Persian)", rtl:true, source:"udhr_pes_2", region:"casia", countries:"Afghanistan, Pakistan, Iran", script:"arab", speakers:"12500000", letter:"اعلمیهجنحقوبشرصدسزآکئثتذضخپگظفغطأچژءي", mark:"ًٔٓ", punctuation:"،‐","number":"۱۹۴۸۲۳۵۶۷۰", other:"‌", local:" فارسی‎", localtrans:"(fārsi)", 
related:`Macrolanguage is Farsi [fa]. Legacy applications often use fa rather prs.`,
orth:`Arabic &nbsp; Naskh style used in print. Nastaliq style ([Aran]) used in handwriting &amp; for book titles.`},

"ps": { name:"Pashto (Pushtu, Pushto)", silcode:"pus", redirect:true, source:"", region:"casia", script:"macrolanguage", speakers:"~50000000", related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`},

"ps": { name:"Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pus", redirect:true, 
source:"r12a", 
region:"casia", countries:"Afghanistan, Pakistan", script:"macrolanguage", speakers:"~50000000", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکګگڼۀیۍېے", letteraux:"كںە", mark:"͏ً", markaux:"͏َُِٓٔٙ", number:"۰۱۲۳۴۵۶۷۸۹", numberaux:"", punctuation:"«»،؛؟٪٬‘’“”…", punctuationaux:"", symbol:"", symbolaux:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"", aux:"", deprecated:"", 
orth:`[Arabic] This entry reflects characters recommended by both Afghan and Peshawar authorities. There exist a small number of regional differences. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
linked:"arab/ps", picker:"", font:"Scheherazade", 
},

"pt": { name:"Portuguese", silcode:"por", source:"cldr_pt,udhr_por_PT,udhr_por_BR", region:"eur", countries:"Portugal, Brazil, Angola, Mozambique, etc.", script:"latn", speakers:"215000000", letter:"áàâãçéêíóòôõúºÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªåäæèëìîïñºöøùûüÿÅÄÆÈËÌÎÏÑÖØÙÛÜ̆̊̈̄", local:"Português"},

"qu": { name:"Quechua", silcode:"que", redirect:true, source:"", region:"sam", script:"latn", speakers:"?", related:`qu is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Chilean Quechua (deprecated, use quh) [cqu]<br/>Huallaga Huánuco Quechua [qub]<br/>Calderón Highland Quichua [qud]<br/>Lambayeque Quechua [quf]<br/>Chimborazo Highland Quichua [qug]<br/>South Bolivian Quechua [quh]<br/>Chachapoyas Quechua [quk]<br/>North Bolivian Quechua [qul]<br/>Southern Pastaza Quechua [qup]<br/>Yanahuanca Pasco Quechua [qur]<br/>Santiago del Estero Quichua [qus]<br/>Tena Lowland Quichua [quw]<br/>Yauyos Quechua [qux]<br/>Ayacucho Quechua [quy]<br/>Cusco Quechua [quz]<br/>Ambo-Pasco Quechua [qva]<br/>Cajamarca Quechua [qvc]<br/>Eastern Apurímac Quechua [qve]<br/>Huamalíes-Dos de Mayo Huánuco Quechua [qvh]<br/>Imbabura Highland Quichua [qvi]<br/>Loja Highland Quichua [qvj]<br/>Cajatambo North Lima Quechua [qvl]<br/>Margos-Yarowilca-Lauricocha Quechua [qvm]<br/>North Junín Quechua [qvn]<br/>Napo Lowland Quechua [qvo]<br/>Pacaraos Quechua [qvp]<br/>San Martín Quechua [qvs]<br/>Huaylla Wanca Quechua [qvw]<br/>Northern Pastaza Quichua [qvz]<br/>Corongo Ancash Quechua [qwa]<br/>Classical Quechua [qwc]<br/>Huaylas Ancash Quechua [qwh]<br/>Sihuas Ancash Quechua [qws]<br/>Chiquián Ancash Quechua [qxa]<br/>Chincha Quechua [qxc]<br/>Panao Huánuco Quechua [qxh]<br/>Salasaca Highland Quichua [qxl]<br/>Northern Conchucos Ancash Quechua [qxn]<br/>Southern Conchucos Ancash Quechua [qxo]<br/>Puno Quechua [qxp]<br/>Cañar Highland Quichua [qxr]<br/>Santa Ana de Tusi Pasco Quechua [qxt]<br/>Arequipa-La Unión Quechua [qxu]<br/>Jauja Wanca Quechua [qxw].
Legacy applications often use qu rather than [qxp].
`},

"quc": { name:"K'iche' (Quiché)", source:"udhr_quc", region:"cam", countries:"Guatemala", script:"ascii", speakers:"2300000", local:"Qach’abel"},

"qxp": { name:"Puno Quechua", source:"cldr_qu", region:"sam", countries:"Peru", script:"latn", speakers:"500000", letter:"Ññʼ", mark:"̃", punctuation:"‰", aux:"ĀāĂăĒēĔĕĪīĬĭŌōŎŏŒœŪūŬŭŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÖØÙÚÛÜàáâãäåæçèéêëìíîïòóôöøùúûüÿ̧̀́̂̃̄̆̈̊", local:"Runa Simi", 
related:`Macrolanguage is Quechua [qu]. Legacy applications often use qu rather qxp.`},

"rar": { name:"Cook Islands Māori (Rarotongan)", source:"udhr_rar", region:"oce", countries:"Cook Islands", script:"ascii", speakers:"21725", local:"Te Reo Maori"},

"rej": { name:"Rejang", local:"", localtrans:"", silcode:"", 
source:"r12a", 
region:"seasia", countries:"Indonesia", script:"rjng", speakers:"350,000", 
letter:"ꤰꤱꤲꤳꤴꤵꤶꤷꤸꤹꤺꤻꤼꤽꤾꤿꥀꥁꥂꥃꥄꥅꥆ", mark:"ꥇꥈꥉꥊꥋꥌꥍꥎꥏꥐꥑꥒ꥓", number:"", punctuation:"꥟", symbol:"", other:"", aux:"[]​‑–—‘’“”…", 
orth:`[Rejang script] Endangered. <a href="../scripts/rjng/' target='_blank'>Details</a>.`,
linked:"rjng/rej", picker:"rjng-rej", font:"Noto Sans Rejang", 
},

"rhg": { name:"Rohingya", local:"𐴌𐴟𐴇𐴥𐴝𐴚𐴒𐴙𐴝", localtrans:"", silcode:"", 
source:"aa5ce5ea8ecb1959646753273cf485844e6390f3", 
region:"seasia", countries:"Myanmar, Bangladesh, Thailand", script:"rohg", speakers:"2529250", 
letter:"ـ𐴀𐴁𐴂𐴃𐴄𐴅𐴆𐴇𐴈𐴉𐴊𐴋𐴌𐴍𐴎𐴏𐴐𐴑𐴒𐴓𐴔𐴕𐴖𐴗𐴘𐴙𐴚𐴛𐴝𐴞𐴟𐴠𐴡𐴢𐴣", mark:"𐴤𐴥𐴦𐴧", number:"𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹", punctuation:"،؛؟۔‘’“”", symbol:"", other:"\u{200E}\u{200F}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:"%[]ʼ͏؜‌‍‑–—…", 
orth:`Hanifi Rohingya. &nbsp; Developed in the 1980s by Mohammad Hanif and his colleagues. <a href="/scripts/rohg/">Details</a>.`,
also:
["rhg-arab | arab | Developed in 1975 as an alternative to Myanmar script, but not completely successful. Also used prior to and during British rule.",
"rhg-latn | latn | Called Rohingyalish, or Rohingya Fonna, developed in 1999.",
"rhg-mymar | mymr | Used from independence in 1948."],
linked:"rohg/rhg", picker:"rohg", font:"", 
},

"rhg-latn": { name:"Rohingya", local:"rohingyalish", 
source:"tbd", 
region:"seasia", countries:"Myanmar, Bangladesh, Thailand", script:"latn", speakers:"2529250", 
letter:"çñ", number:"0123456789", punctuation:"“”‘’", 
orth:`Rohingyalish or Rohingya Fonna. &nbsp; Developed in 1999.`,
also:
["rhg-arab | arab | Developed in 1975 as an alternative to Myanmar script, but not completely successful. Also used prior to and during British rule.",
"rhg | rohg | Developed in the 1980s by Mohammad Hanif and his colleagues.",
"rhg-mymar | mymr | Used from independence in 1948."],
type:"alphabet", cs:"yes", gpos:"no", gsub:"no", cursive:"no", direction:"ltr", wordsep:"space", baseline:"romn", wrap:"word", hyphenation:"?",  justification:"sp",
vowels:"let:5",
},

"rm": { name:"Romansh (Romansch, Rumantsch, Romanche)", silcode:"roh", source:"cldr_rm,udhr_roh_rumgr,udhr_roh_puter,udhr_roh_surmiran,udhr_roh_sursilv,udhr_roh_sutsilv,udhr_roh_vallader", region:"eur", countries:"Switzerland", script:"latn", speakers:"36622", letter:"àüöéèìòùÀÜÖÉÈÌÒÙ", mark:"̀̈́", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáâåäæçêëíîïñóôöøúûüÿÁÂÅÄÆÇÊËÍÎÏÑÓÔÖØÚÛÜ̧̆̂̊̈̄̃", local:"Rumantsch"},

"rn": { name:"Rundi (Kirundi)", source:"cldr_rn,udhr_run", region:"afr", countries:"Burundi", script:"ascii", speakers:"8800000", local:"Ikirundi"},

"ro": { name:"Romanian (Rumanian, Roumanian)", silcode:"ron", source:"cldr_ro,udhr_ron_2006,udhr_ron_1993,udhr_ron_1953", region:"eur", countries:"Romania, Moldova, Ukraine, Israel", script:"latn", speakers:"~25000000", letter:"âîÂÎșțȘȚăĂ", mark:"̦̆̂", punctuation:"«»‐–—…‘“”„", aux:"şţŞŢáàåäçéèêëñöüÁÀÅÄÇÉÈÊËÑÖǗ̧̀̊̈̃", local:"Limba română / româneşte", 
orth:`Latin. &nbsp; `,
also:
['ro-cyrl | cyrl | Until 1991 official in Moldova.',]
},

"rof": { name:"Rombo (Kirombo)", source:"cldr_rof", region:"afr", countries:"Tanzania", script:"ascii", speakers:"?", notes:"Ethnologue reports this as unwritten."},

"rmn": { name:"Romani (Romany, Gypsy, Gipsy)", source:"udhr_rmn,udhr_rmn_1", region:"eur", countries:"Serbia, Bulgaria, Turkey, Macedonia, Greece, Iran", script:"latn", speakers:"~1500000", letter:"àõùèìòâÀÕÙÈÌÒÂƟśěćŕăąňűźőģůščžŚĚĆŔĂĄŇŰŹŐĢŮŠČŽɵ", mark:"̨̧̀́̌̃̆̋̂̊", local:"Romani / Romani ćhib", 
related:`Macrolanguage is Romany [rom].`,
orth:`Latin. &nbsp; Used in Serbia.`,
also:
['rmn-cyrl | cyrl | Used in Bulgaria.',
'rmn-grek | grek | Used in Greece.']
},

"rom": { name:"Romany", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"~1500000", related:`rom is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Carpathian Romani [rmc]<br/>Kalo Finnish Romani [rmf]<br/>Baltic Romani [rml]<br/>Balkan Romani [rmn]<br/>Sinte Romani [rmo]<br/>Welsh Romani [rmw]<br/>Vlax Romani [rmy].
Legacy applications often use rom rather than [rmy].`},

"ru": { name:"Russian", local:"русский язык‎", localtrans:"(russkij jazyk)", silcode:"rus", 
source:"3b62d1cd6732b3b939bef075192c917a41ed20da,cldr_ru,udhr_rus", 
region:"eur", countries:"Russia, Ukraine, Kazakhstan, Uzbekistan, Poland, Belarus, Azerbaijan, Georgia, Kyrgyzstan, Lithuania, Latvia, Moldova, Estonia, etc.", script:"cyrl", speakers:"258227760", 
letter:"ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё", letteraux:"", mark:"", markaux:"́̆̈", number:"", numberaux:"", punctuation:"«»–—“„…", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"%[]§ʼ‑‘‚†‡‰′″‹›₽№", deprecated:"", 
orth:`Cyrillic. &nbsp; <a href="../scripts/cyrillic" target="_blank">Details</a>.`,
linked:"cyrl/ru", picker:"cyrl-ru", font:"", 
},

"rup": { name:"Aromanian", source:"udhr_rmy", region:"eur", countries:"Macedonia, Albania, Romania, Greece, Serbia, Bulgaria", script:"latn", speakers:"250000", letter:"ãâÃÂ", mark:"̃̂", local:"Armani", notes:`Caution: The UDHR source names this language as Aromanian, but uses a BCP47 code of [rmy], which is Vlax Romani.`, related:`Orthographies include:
* Greek.
* Latin <strong>(shown here)</strong>.`},

"rw": { name:"Kinyarwanda", silcode:"kin", source:"cldr_rw,udhr_kin", region:"afr", countries:"Rwanda, Uganda, DRC", script:"ascii", speakers:"9800000", local:"Kinyarwanda"},

"rwk": { name:"Rwa (Rwo, Meru, Kirwo)", source:"cldr_rwk", region:"afr", countries:"Tanzania", script:"ascii", speakers:"400000"},

"sa": { name:"Sanskrit", silcode:"san", source:"udhr_san", region:"sasia", countries:"India", script:"deva", speakers:"~15000", letter:"मनवधकरणजगतअभघषयपचशसएछबदटडहइआञउठथलढऽ", mark:"ािंो्ूेुौैीृॄ़", punctuation:"।", local:"संस्कृतम्‎", localtrans:"(saṃskṛtam)", notes:`Added <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>.`, 
orth:`Devanagari. &nbsp; `,
also:
['sa-mymr | mymr | ',
'sa-newa | newa | ',
'sa-shrd | shrd | ',
'sa-sinh | sinh | ']
},

"sa-shrd": { name:"Sanskrit", local:"", localtrans:"", silcode:"san", 
source:"r12a", 
region:"sasia", countries:"India", script:"shrd", speakers:"", 
letter:"𑆃𑆄𑆅𑆆𑆇𑆈𑆉𑆊𑆋𑆌𑆍𑆎𑆏𑆐𑆑𑆒𑆓𑆔𑆕𑆖𑆗𑆘𑆙𑆚𑆛𑆜𑆝𑆞𑆟𑆠𑆡𑆢𑆣𑆤𑆥𑆦𑆧𑆨𑆩𑆪𑆫𑆬𑆭𑆮𑆯𑆰𑆱𑆲𑇁𑇂𑇃𑇚𑇜", letteraux:"", mark:"𑆀𑆁𑆂𑆳𑆴𑆵𑆶𑆷𑆸𑆹𑆺𑆻𑆼𑆽𑆾𑆿𑇀𑇉𑇊𑇋𑇌𑇎𑇏𑭠𑭡𑭢𑭣𑭤𑭥𑭦𑭧", markaux:"", number:"𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙", numberaux:"", punctuation:"«»𑇅𑇆𑇇𑇈𑇍𑇛𑇝𑇞𑇟", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Sharada] Historically used for Sanskrit and Kashmiri texts. <a href='../scripts/shrd/ks.html' target='_blank'>Details</a>`,
linked:"shrd/ks", picker:"shrd-ks", font:"Noto Sans Sharada", 
},

"sah": { name:"Yakut (Sakha)", source:"cldr_sah,udhr_sah", region:"nasia", countries:"Russia", script:"cyrl", speakers:"450000", letter:"абгҕдьийклмнҥоөпрстуүхһчыэецязювщъжфАБГҔДЬИЙКЛМНҤОӨПРСТУҮХҺЧЫЭЕЦЯЗЮВЩЪЖФ", mark:"̆", aux:"веёжзфцшщъюяВЕЁЖЗФЦШЩЪЮЯ̈", local:"саха тыла‎ / сахалыы‎", localtrans:"(saxa tıla / saȟalyy)"},

"saq": { name:"Samburu", source:"cldr_saq", region:"afr", countries:"Kenya", script:"ascii", speakers:"240000"},

"sat": { name:"Santali (Santhali)", local:"ᱥᱟᱱᱛᱟᱲᱤ", localtrans:"", silcode:"", 
source:"7e9f0d5d372afc701b3e3a5bc5b45a1d8375eeca", 
region:"sasia", countries:"India, Bangladesh, Nepal", script:"olck", speakers:"7340000", 
letter:"ᱚᱛᱜᱝᱞᱟᱠᱡᱢᱣᱤᱥᱦᱧᱨᱩᱪᱫᱬᱭᱮᱯᱰᱱᱲᱳᱴᱵᱶᱷᱸᱹᱺᱻᱼᱽ", mark:"", number:"᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙", punctuation:"᱾᱿‘’“”", symbol:"", other:"", aux:"%-.[]ʼ͏‌‍‑–—…", 
orth:`Ol Chiki. &nbsp; <a href="../scripts/santali/" target="_blank">Details</a>.`,
linked:"olck/sat", picker:"olck", font:"", 
},

"sbp": { name:"Sangu (Kisangu, Kisango, Kirori, Eshisango, Rori, Sango)", source:"cldr_sbp", region:"afr", countries:"Tanzania", script:"ascii", speakers:"75000", local:"Shisango"},

"sc": { name:"Sardinian (Sard)", silcode:"srd", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"~1000000", related:`sc is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Sassarese Sardinian [sdc]<br/>Gallurese Sardinian [sdn]<br/>Logudorese Sardinian [src]<br/>Campidanese Sardinian [sro].
Legacy applications often use sc rather than [src].`},

"sco": { name:"Scots (Lowland Scots)", source:"udhr_sco", region:"eur", countries:"UK", script:"ascii", speakers:"110000", local:"Scots"},

"sd": { name:"Sindhi", local:"سنڌي‎", localtrans:"(sindhi)", silcode:"snd", rtl:true, 
source:"cldr_sd", 
region:"sasia", countries:"Pakistan, India", script:"arab", speakers:"25000000", 
letter:"آابتثجحخدذرزسشصضطظعغفقلمنهويٺٻٽپٿڀڃڄچڇڊڌڍڏڙڦکڪگڱڳڻھہ", mark:"͏", markaux:"َُِٓٔ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"؟۔“”⁏⹁", punctuationaux:"،؛", symbol:"۽۾", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:",-[]«»ـ٪​‑–—‘’…‹›⁠﴾﴿", 
orth:`Arabic. &nbsp; Naskh style.`,
also:
["sd-deva | deva | In India.",
"sd-guru | guru | In India."],
linked:"arab/sd", picker:"", font:"Scheherazade New", 
},

"se": { name:"Northern Sami", silcode:"sme", source:"cldr_se", region:"eur", countries:"Norway, Sweden, Finland", script:"latn", speakers:"25000", letter:"áÁčđŋšŧžČĐŊŠŦŽ", mark:"́̌", aux:"ńŃàçéèíñóòúüøæåäãöÀÇÉÈÍÑÓÒÚÜØÆÅÄÃÖ̧̀̃̈̊", local:"Sámegiella", 
orth:`Latin. &nbsp; Primary usage.`,
also:
['se-cyrl | cyrl | ',]
},

"seh": { name:"Sena", source:"cldr_seh", region:"afr", countries:"Mozambique", script:"latn", speakers:"1600000", letter:"áàâãçéêíóòôõúÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃", local:"Cisena"},

"ses": { name:"Koyraboro Senni (Eastern Songhay, Koroboro Senni, Koyra Senni)", source:"cldr_ses", region:"afr", countries:"Mali", script:"latn", speakers:"430000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"sey": { name:"Secoya", source:"udhr_sey", region:"sam", countries:"Ecuador, Peru", script:"latn", speakers:"400", letter:"ëñàéËÑÀÉ", mark:"̱̈̃̀́", local:"Paikoka"},

"sg": { name:"Sango (Sangho)", silcode:"sag", source:"cldr_sg", region:"afr", countries:"CAR", script:"latn", speakers:"450000", letter:"âäêëîïôöùûüÂÄÊËÎÏÔÖÙÛÜ", mark:"̂̈̀", local:"Sango"},

"sh": { name:"Serbo-Croatian", silcode:"hbs", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"", related:`sh is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bosnian [bs]<br/>Croatian [hr]<br/>Serbian [sr]<br/>Montenegrin [cnr].
Legacy applications often use az rather than [sr].`},

"shi": { name:"Tachelhit (Tashelhiyt, Shilha)", source:"cldr_shi,db6c6d7edec873652985f17f39fbab19dd57fab8", region:"afr", countries:"Morocco", script:"tfng", speakers:"4000000", letter:"ⴰⴱⴳⵯⴷⴹⴻⴼⴽⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵓⵔⵕⵖⵙⵚⵛⵜⵟⵡⵢⵣⵥ", aux:"ⴲⴴⴸⴺⴿⵝⵠⵒ",
orth:`Tifinagh. &nbsp; Official usage. See <a href="../scripts/tifinagh/">Tifinagh script summary</a>`,
also:
['shi-arab | arab | Naskh style.',
'shi-latn | latn | ']
},

"shi-latn": { name:"Tachelhit (Tashelhiyt, Shilha)", source:"cldr_shi_Latn", region:"afr", countries:"Morocco", script:"latn", speakers:"4000000", letter:"ḍḥṛṣṭḌḤṚṢṬƐƔɛɣʷ", mark:"̣", local:"Tachelhit", 
orth:`Latin. &nbsp; `,
also:
['shi-arab | arab | Naskh style.',
'shi-tfng | tfng | Official usage.']
},

"shk": { name:"Shilluk", source:"udhr_shk,7b9b98a8ced343c0f2356595d76c12d32b5dd0a5", region:"afr", countries:"South Sudan", script:"latn", speakers:"175000", letter:"ÀÁÄÈÉËÌÍÏÓÖØÙÚàáäèéëìíïóöøùú", mark:"́̈̀", local:"Colo"},

"shn": { name:"Shan", local:"ၵႂၢမ်းတႆ", localtrans:"/kwáːm.táj/", silcode:"", 
source:"1144bc3ca7538fc284268c3be5d0725611cd52e5,udhr_shn", 
region:"seasia", countries:"Myanmar, Thailand", script:"mymr", speakers:"3300000", 
letter:"ငတထပမယရလဝသဢၵၶၸၺၼၽၾႁꧦ", letteraux:"ၷၹၻၿႀ", mark:"ိီုူေဵး်ျြွၢႂႃႄႅႆႇႈႉႊ", markaux:"", number:"၀၁၂၃၄၅၆၇၈၉႐႑႒႓႔႕႖႗႘႙", numberaux:"", punctuation:"၊။", punctuationaux:"", symbol:"", symbolaux:"", other:"\u{200B}", otheraux:"", aux:"!,.:;§«»ʼ͏ံ္႞႟‌‍‑–—‘’“”†‡…′″", deprecated:"", 
orth:`Myanmar. &nbsp; <a href="../scripts/myanmar/mymr-shn" target="_blank">Details</a>.`,
linked:"mymr/shn", picker:"mymr-shn", font:"", 
},

"shp": { name:"Shipibo-Conibo (Shipibo-Konibo)", source:"udhr_shp", region:"sam", countries:"Peru", script:"latn", speakers:"26000", letter:"íáóéñúÍÁÓÉÑÚ", mark:"́̃", punctuation:"¿"},

"si": { name:"Sinhala (Sinhalese)", local:"සිංහල‎", localtrans:"(siṃhāla)", silcode:"sin", 
source:"cldr_si,udhr_sin,0de67cc747d85485d1c6e7c99ee9a6e885c80803", 
region:"sasia", countries:"Sri Lanka", script:"sinh", speakers:"16000000", 
letter:"අආඇඈඉඊඋඌඍඑඒඓඔඕඖකඛගඝඞඟචඡජඣඥටඨඩඪණඬතථදධනඳපඵබභමඹයරලවශෂසහළෆ", mark:"ංඃ්ාැෑිීුූෘෙේෛොෝෞ", markaux:"ෟ", number:"", punctuation:"‘’“”", symbol:"", other:"\u{200C}\u{200D}", aux:"%[]«»ʼ͏।॥​‑–—…‰‹›⁠", 
orth:`Sinhala. &nbsp; <a href="../scripts/sinhala/" target="_blank">Details</a>.`,
linked:"sinh/si", picker:"sinh", font:"", 
},

"sja": { name:"Epena (Eperara)", source:"udhr_sja", region:"sam", countries:"Colombia", script:"ascii", speakers:"8300", local:"Epéna Pedée"},

"sk": { name:"Slovak", silcode:"slk", source:"cldr_sk,udhr_slk", region:"eur", countries:"Slovakia, Czechia, Serbia", script:"latn", speakers:"5200000", letter:"čďĺľňŕšťžűČĎĹĽŇŔŠŤŽŰáäéíóôúýÁÄÉÍÓÔÚÝ", mark:"́̈̌̂̋", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīŏōœřŭūĂĀĔĒĬĪŎŌŒŘŬŪŸàâåæçèêëìîïñòöøùûüÿÀÂÅÆÇÈÊËÌÎÏÑÒÖØÙÛǛ̧̆̊̄̃", local:"Slovenský Jazyk / Slovenčina"},

"skr": { name:"Saraiki (Siraiki, Seraiki)", local:"سرائیکی‎", localtrans:"sə.ˈɾɛːkiː", silcode:"skr", rtl:true, 
source:"r12a, udhr_skr", 
region:"sasia", countries:"Pakistan", script:"arab", speakers:"30000000", 
letter:"آؤئابتثجحخدذرزسشصضطظعغفقلمنوٹٻپڄچڈڑژکگڳںھہیےۓݙݨ", letteraux:"ي", mark:"ٍَُِ٘", markaux:"ًٌّْٰٖٓٔٗ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"،؛؟۔", symbol:"", other:"\u{200C}\u{200D}\u{200E}\u{200F}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:",-[]«»͏؜ءـكه٪​‑–—‘’“”…‹›⁠﴾﴿", 
orth:`Arabic. &nbsp; Nastaliq ([Aran]) style. Primary usage.`,
also:
["skr-deva | deva | No longer in use.",
"skr-guru | guru | No longer in use.",
"skr-khoj | khoj | "],
linked:"arab/skr", picker:"", font:"Noto Nastaliq Urdu", 
},

"sl": { name:"Slovene (Slovenian)", silcode:"slv", source:"cldr_sl,udhr_slv", region:"eur", countries:"Slovenia, Italy", script:"latn", speakers:"2500000", letter:"čšžČŠŽ", mark:"̌", aux:"ăāćđĕēĭīŏōœŭūĂĀĆĐĔĒĬĪŎŌŒŬŪŸáàâåäæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̄̃", local:"Slovenski jezik / Slovenščina"},

"sm": { name:"Samoan", silcode:"smo", source:"udhr_smo", region:"oce", countries:"Samoa, American Samoa", script:"ascii", speakers:"510000", local:"Gagana Samoa"},

"smn": { name:"Inari Sami", source:"cldr_smn", region:"eur", countries:"Finland", script:"latn", speakers:"300", letter:"âäáÂÄÁčđŋšžČĐŊŠŽ", mark:"̂̌̈́", aux:"ńŃàçéèíñóòúüæøåãöÀÇÉÈÍÑÓÒÚÜÆØÅÃÖ̧̀̃̊", local:"Anarâškielâ"},

"sn": { name:"Shona", silcode:"sna", source:"cldr_sn,udhr_sna", region:"afr", countries:"Zimbabwe", script:"ascii", speakers:"15000000", local:"Chishona"},

"snk": { name:"Soninke", source:"udhr_snk", region:"afr", countries:"Mali, Senegal, Mauritania, Gambia", script:"latn", speakers:"2100000", letter:"ñÑŋŊ", mark:"̃", local:"Sooninkanxanne"},

"snn": { name:"Siona", source:"udhr_snn", region:"sam", countries:"Colombia, Ecuador", script:"latn", speakers:"500", letter:"ëñíäéËÑÍÄÉ", mark:"̱̈̃́"},

"so": { name:"Somali", silcode:"som", source:"cldr_so,udhr_som", region:"afr", countries:"Somalia, Ethiopia, Kenya, Djibouti", script:"ascii", speakers:"15000000", local:"Af-Soomaali / Afka Soomaaliga", 
orth:`Latin. &nbsp; Since 1972.`,
also:
['so-arab | arab | Naskh style. No longer in use.',
'so-osma | osma | No longer in use.']
},

"spy": { name:"Sabaot", source:"cldr_kln", region:"afr", countries:"Kenya", script:"ascii", speakers:"60000", local:"Sābāwōōt", 
notes:`The autonym suggests that there are more characters than described in CLDR, or an alternate orthography.`,
related:`Macrolanguage is Kalenjin [kln]. Legacy applications often use kln rather spy.`},

"sq": { name:"Albanian", silcode:"sqi", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"5400000", related:`sq is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Arbëreshë Albanian [aae]<br/>Arvanitika Albanian [aat]<br/>Gheg Albanian [aln]<br/>Tosk Albanian [als].
Legacy applications often use sq rather than [als].`},

"sr": { name:"Serbian", silcode:"српски‎ (Srpski)", source:"0a9e673e26a1afaf7b77f5a544e7e760270b1064,cldr_sr,udhr_srp_cyrl", region:"eur", countries:"Serbia, Bosnia &amp; Herzegovina, Montenegro, Slovenia", script:"cyrl", speakers:"~9700000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–…‘‚“„", aux:"ёйщъыьэюяЁЙЩЪЫЬЭЮЯ̈̆\u0302", local:"српски‎", localtrans:"(srpski)", 
orth:`Cyrillic. &nbsp; Primary usage.`,
also:
['sr-latn | latn | ',]
},

"sr-latn": { name:"Serbian", silcode:"српски‎ (Srpski)", source:"cldr_sr_Latn,udhr_srp_latn", region:"eur", countries:"Serbia, Bosnia &amp; Herzegovina, Montenegro, Slovenia", script:"latn", speakers:"~9700000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–…‘‚“„", aux:"åÅ̊", local:"Srpski", 
orth:`Latin. &nbsp; `,
also:
['sr | cyrl | Primary usage.',]
},

"srb-sora": { name:"Sora", local:"𑃐𑃚𑃝", 
source:"r12a", 
region:"sasia", countries:"Nepal, India (Sikkim)", script:"sora", speakers:"300000", 
letter:"𑃐𑃑𑃒𑃓𑃔𑃕𑃖𑃗𑃘𑃙𑃚𑃛𑃜𑃝𑃞𑃟𑃠𑃡𑃢𑃣𑃤𑃥𑃦𑃧𑃨", number:"𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹", 
orth:`[Sora Sompeng] <a href="../scripts/sora/srb.html" target="_blank">Details</a>.`,
also:
["srb-telu | telu | Telugu script.","srb-orya | orya | Oriya script."],
type:"abugida", cs:"no", gpos:"no", gsub:"no", cursive:"no", wordsep:"space", baseline:"mid", wrap:"?", hyphenation:"?",  direction:"ltr",  justification:"?", 
vowels:"let:6",  clusters:"unm", 
linked:"sora/srb.html", fonts:"sora-srb", font:"Noto Sans Sora Sompeng", 
},

"src": { name:"Sardinian (Sard)", source:"udhr_src", region:"eur", countries:"Italy", script:"latn", speakers:"~1000000", letter:"òìàèùÒÌÀÈÙ", mark:"̀"},

"srr": { name:"Serer", source:"udhr_srr", region:"afr", countries:"Senegal", script:"latn", speakers:"1230000", letter:"ñÑƭƴƊƁƬƳŋćŊĆṕṔɗɓ", mark:"̃́", local:"Seereer", 
orth:`Latin. &nbsp; `,
also:
['srr-arab | arab | Naskh style.',]
},

"ss": { name:"Swati (Swazi)", silcode:"ssw", source:"udhr_ssw", region:"afr", countries:"Swaziland, South Africa, Lesotho", script:"ascii", speakers:"2300000", local:"Siswati"},

"st": { name:"Southern Sotho (Sotho, Sesotho, Southern Sesotho)", silcode:"sot", source:"udhr_sot", region:"afr", countries:"Lesotho, South Africa", script:"ascii", speakers:"5600000", local:"Sesotho"},

"su": { name:"Sundanese", silcode:"sun", source:"udhr_sun", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"42000000", local:"Basa Sunda", 
orth:`Latin. &nbsp; Since mid-19th century.`,
also:
['su-arab | arab | Naskh style. Since 12th-13th century.',
'su-java | java | Until 17th century.',
'su-sund | sund | No longer in use.']
},

"su-sund": { name:"Sundanese", local:"", localtrans:"", silcode:"sun", xxlang:"su",
source:"ba3345132c34462391346964eea198c4041e1a52", 
region:"seasia", countries:"Indonesia", script:"sund", speakers:"42000000", 
letter:"ᮃᮄᮅᮆᮇᮈᮉᮊᮋᮌᮍᮎᮏᮐᮑᮒᮓᮔᮕᮖᮗᮘᮙᮚᮛᮜᮝᮞᮟᮠᮮᮯ", mark:"ᮀᮁᮂᮡᮢᮣᮤᮥᮦᮧᮨᮩ᮪", number:"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹", punctuation:"‘’“”", symbol:"", other:"", aux:"%-[]«»ʼ͏​‌‍‑–—…‰‹›⁠", 
orth:`Sundanese. &nbsp; No longer in common use. <a href="../scripts/sundanese/" target="_blank">Details</a>.`,
also:
["su-arab | arab | Naskh style. Since 12th-13th century.",
"su-java | java | Until 17th century.",
"su | latn | Since mid-19th century."],
linked:"sund/su", picker:"sund", font:"", 
},

"suk": { name:"Sukuma", source:"udhr_suk", region:"afr", countries:"Tanzania", script:"ascii", speakers:"5400000", local:"Kisukuma"},

"suz": { name:"Sunuwar (Kiranti-Kõits, Mukhia)", local:"𑯆𑯑𑯃̃𑯌 𑯎𑯄𑯂𑯒𑯂", localtrans:"/koīt͡ʃ brese/", silcode:"suz", 
source:"3673556864e9fc547d3c22fabf0b0bda88d5a5f3", 
region:"sasia", countries:"Nepal, Sikkim", script:"sunu", speakers:"38200", 
letter:"𑯀𑯁𑯂𑯃𑯄𑯅𑯆𑯇𑯈𑯉𑯊𑯋𑯌𑯍𑯎𑯏𑯐𑯑𑯒𑯓𑯔𑯕𑯖𑯗𑯘𑯙𑯚𑯛𑯜𑯝𑯞𑯟𑯠", mark:"̭̱̀́̃̍̐", number:"𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹", punctuation:"‘’“”…", symbol:"𑯡", other:"", aux:"‌‍–—‰", 
orth:`Sunuwar. <a href="../scripts/sunu/suz.html" target="_blank">Details.</a>`,
also:
["suz-deva | deva | Primary usage."],
linked:"sunu/suz", picker:"sunu-suz", font:"Uni11BC0Sunuwar", 
},

"sus": { name:"Susu", source:"udhr_sus", region:"afr", countries:"Guinea, Sierra Leone", script:"latn", speakers:"1060000", letter:"ƐƆƝɛɔɲ", local:"Sosoxui", 
orth:`Latin. &nbsp; `,
also:
['sus-arab | arab | Naskh style.',]
},

"sv": { name:"Swedish", silcode:"swe", source:"cldr_sv,udhr_swe", region:"eur", countries:"Sweden, Finland, Aland Islands", script:"latn", speakers:"10000000", letter:"àéåäöÀÉÅÄÖ", mark:"̀́̊̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"āīĀĪŸáâãçèëíîïñóúÿüæøÁÂÃÇÈËÍÎÏÑÓÚÜÆØ̧̂̃̄", local:"Svenska"},

"sw": { name:"Swahili (Kiswahili)", silcode:"swa", redirect:true, source:"", region:"afr", script:"macrolanguage", speakers:"", related:`sw is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Congo Swahili [swc]<br/>Swahili (individual language), Kiswahili [swh].
Legacy applications often use sw rather than [swh].`},

"swb": { name:"Maore Comorian (Shimaore)", source:"udhr_swb", region:"afr", countries:"Mayotte", script:"latn", speakers:"97000", letter:"ãÃƁƊĩĨẽẼɓɗ", mark:"̃", local:"Shimaore", 
orth:`Latin. &nbsp; `,
also:
['swb-arab | arab | Naskh style.',]
},

"swh": { name:"Swahili (Kiswahili)", source:"cldr_sw,udhr_swh", region:"afr", countries:"Tanzania, Uganda, Kenya, Somalia, Oman", script:"ascii", speakers:"~7000000", local:"Kiswahili", 
related:`Macrolanguage is Swahili [sw]. Legacy applications often use sw rather swh.`},

"syc": { name:"Syriac", local:" ܠܫܢܐ ܣܘܪܝܝܐ‎", localtrans:"(leššānā suryāyā)", silcode:"", rtl:true, redirect:true, xxlang:"../syrc/syr",
source:"a9dcf48a64fd2fb12d3014d2f0295b003130db65", 
region:"wasia", countries:"Turkey, Iraq, Syria", script:"syrc", speakers:"0", 
letter:"ـܐܒܓܕܗܘܙܚܛܝܞܟܠܡܢܣܤܥܦܨܩܪܫܬ", mark:"̣̭̮݂̄̇̈݀݁", markaux:"̤̥̱݄݈̊݃݇݉݊", number:"", punctuation:"،؛؟܀܁܂܃܄܅܆܇܈܉܊", punctuationaux:"܋܌܍", symbol:"♰♱", other:"\u{061C}\u{070F}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"[]«»ʼ̠̰̃͏​‑–—‘’“”…‹›⁠", 
linked:"syrc/syr", picker:"syrc-syr", font:"", 
},

"syl": { name:"Sylheti", local:"ꠍꠤꠟꠐꠤ", localtrans:"sílɔʈi", silcode:"", 
source:"r12a", 
region:"sasia", countries:"Bangladesh", script:"sylo", speakers:"11000000", 
letter:"ʼꠀꠁꠃꠄꠅꠇꠈꠉꠊꠌꠍꠎꠏꠐꠑꠒꠓꠔꠕꠖꠗꠘꠙꠚꠛꠜꠝꠞꠟꠠꠡꠢ", letteraux:"", mark:"ꠂ꠆ꠋꠣꠤꠥꠦꠧ꠬", markaux:"", number:"০১২৩৪৫৬৭৮৯", numberaux:"", punctuation:"।॥–—‘’“”…⁕", punctuationaux:"", symbol:"৳꠨꠩꠪꠫", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Syloti Nagri] &nbsp; <a href="../scripts/sylo/syl.html" target="_blank">Details</a>.`,
also:
["syl | beng | Principal orthography."],
linked:"sylo/syl", picker:"sylo", font:"Surma", 
},

"syr": { name:"Syriac", redirect:true, region:"wasia", script:"syrc", 
related:`syr is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Assyrian Neo-Aramaic ([aii])<br/>Chaldean Neo-Aramaic ([cld]).
Legacy applications often use syr rather than [cld] (Chaldean Neo-Aramaic).
Orthographies include:
* ʾesṭrangēlā (syre), all ancient manuscripts. West and East Syriac text uses it for headers, titles, and subtitles. It's also the current standard for Western scholarship.
* serṭā (Western Syriac) (syrj), used in West Syriac texts, Turoyo, and Garshuni (Arabic written with Syriac).
* maḏnḥāyā (Eastern Syriac) (syrn), used for East Syriac and Swadaya texts, and in West Syriac texts for headers, titles and subtitles.
* Arabic (Garshuni), often used today by Neo-Aramaic-speakers for written communication, such as letters and fliers.
ISO 15924 also has a general script code for Syriac (syrc).`,
},

"ta": { name:"Tamil", local:"தமிழ்‎", localtrans:"(tamiḻ)", silcode:"tam", 
source:"02c655f2e4d80f65f8f280e81da3c892afc52e91,cldr_ta,udhr_tam", 
region:"sasia", countries:"India, Sri Lanka, Malaysia, South Africa, Singapore", script:"taml", speakers:"70000000", 
letter:"ஃஅஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஶஷஸஹௐ", mark:"ாிீுூெேைொோௌ்", markaux:"ௗ", number:"", punctuation:"।॥‘’“”", symbol:"௹₹", other:"\u{200C}\u{200D}", aux:"%[]«»ʼ​‑–—…‰‹›", 
orth:`Modern Tamil. <a href="../scripts/tamil/" target="_blank">Details</a>.`,
linked:"taml/ta", picker:"taml", font:"", 
},

"tbz": { name:"Ditammari (Tammari)", source:"udhr_tbz", region:"afr", countries:"Benin, Togo", script:"latn", speakers:"150000", letter:"úàóãìùÚÀÓÃÌÙƉƐƆũŋĩŨŊĨɖɛɔ", mark:"̃́̀", local:"Ditammari"},

"tbw-tagb": { name:"Tagbanwa (Aborlan Tagbanwa, Apurawnon, Tagbanua)", local:"ᝦᝪᝯ", localtrans:"(tagbanwa)", silcode:"", xxlang:"tbw", 
source:"09633b7f41ba0964afe7ba85e2a36b37ceff58b7", 
region:"oce", countries:"Philippines", script:"tagb", speakers:"17200", 
letter:"ᝠᝡᝢᝣᝤᝥᝦᝧᝨᝩᝪᝫᝬᝮᝯᝰ", mark:"ᝲᝳ", number:"", punctuation:"᜵᜶", symbol:"", other:"", aux:"", 
orth:`Tagbanwa &nbsp;`,
also:
["tbw | latn | Primary."],
linked:"tagb/tbw", picker:"tagb", font:"Noto Sans Tagbanwa", 
},

"tca": { name:"Ticuna (Tikuna)", source:"udhr_tca", region:"sam", countries:"Brazil, Colombia, Peru", script:"latn", speakers:"47000", letter:"üéãñõúáíóÜÉÃÑÕÚÁÍÓĩũĨŨẽṯḏṉẼṮḎṈ", mark:"̱̃́̈͟", local:"ticunagaxũ"},

"tdd": { name:"Tai Nüa (Nɯa, Dehong Dai, Chinese Shan, Tai Mau, Tai Kong)", local:"", localtrans:"", silcode:"", 
source:"7bbb60b1ae185293cf14c8d8088e14351477c26b", 
region:"seasia", countries:"China, Myanmar, Vietnam, Laos", script:"tale", speakers:"720000", 
letter:"ᥐᥑᥒᥓᥔᥕᥖᥗᥘᥙᥚᥛᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭᥰᥱᥲᥳᥴ", mark:"̀́̇̈̌", number:"၀၁၂၃၄၅၆၇၈၉", punctuation:"、。〈〉《》！（），．：；？", symbol:"", other:"", aux:"", 
orth:`Tai Le. &nbsp; <a href="../scripts/taile/" target="_blank">Details</a>.`,
linked:"tale/tdd", picker:"tale", font:"", 
},

"tdt": { name:"Tetun Dili", source:"udhr_010", region:"seasia", countries:"East Timor", script:"latn", speakers:"385000", letter:"áíúóÁÍÚÓ", mark:"́", punctuation:"’", local:"Tetun Dili"},

"te": { name:"Telugu", local:"తెలుగు‎", localtrans:"(telugu)", silcode:"tel", 
source:"cldr_te,udhr_tel,21cc5fdd3dd94d0bb44ca0059c7fbe514fbf60e3", 
region:"sasia", countries:"India", script:"telu", speakers:"74002586", 
letter:"అఆఇఈఉఊఋఎఏఐఒఓఔకఖగఘచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహ", letteraux:"ఙ", mark:"ంఃాిీుూృెేైొోౌ్", markaux:"ౖ", number:"౦౧౨౩౪౫౬౭౮౯", punctuation:"।॥‘’“”", symbol:"₹", other:"\u{200C}\u{200D}", aux:"%[]«»ʼ͏ఁఄ౷​‑–—…‰‹›⁠", 
linked:"telu/te", picker:"telu", font:"", 
},

"tem": { name:"Temne (Themne, Timne)", source:"udhr_tem", region:"afr", countries:"Sierra Leone", script:"latn", speakers:"1200000", letter:"ɅƆƏƐŋŊʌɔəɛ", punctuation:"‐", local:"Themne"},

"teo": { name:"Teso", source:"cldr_teo", region:"afr", countries:"Uganda, Kenya", script:"ascii", speakers:"1900000", local:"Atεsᴐ", 
orth:`Latin. &nbsp; Used since 1930.`},

"tet": { name:"Tetum (Tetun)", source:"udhr_tet", region:"seasia", countries:"Indonesia, East Timor", script:"ascii", speakers:"500000", local:"Tetun"},

"tg": { name:"Tajik (Tajiki, Tajiki Persian)", silcode:"tgk", source:"cldr_tg,udhr_tgk", region:"casia", countries:"Tajikistan, Uzbekistan, Kyrgyzstan, Kazakhstan", script:"cyrl", speakers:"8400000", letter:"эъломияуҳқбашрпегфтднзкхсвӣёҷчғюӯйжьЭЪЛОМИЯУҲҚБАШРПЕГФТДНЗКХСВӢЁҶЧҒЮӮЙЖЬ", mark:"̄̈̆", punctuation:"‰", aux:"цщыьЦЩЫЬ", local:"тоҷикӣ‎", localtrans:"(tojiki)", 
orth:`Cyrillic. &nbsp; Since 1940, primary usage.`,
also:
['tg-arab | arab | Naskh style. Until 1928.',
'tg-latn | latn | 1928-1940.',
'tg-hebr | hebr | Used by Bukharan Jews in Uzbekistan.']
},

"th": { name:"Thai (Siamese)", local:"ภาษาไทย", localtrans:"", silcode:"tha", 
source:"85b37d327a5e470abcc40234d6cbfdfa388d6566,cldr_th,udhr_tha", 
region:"seasia", countries:"Thailand", script:"thai", speakers:"44000000", 
letter:"กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮะาำเแโใไๅๆ", mark:"ัิีึืุู็่้๊๋์", markaux:"ํ", number:"๐๑๒๓๔๕๖๗๘๙", punctuation:"ฯ๏๚๛–—‘’“”…", symbol:"฿", other:"\u{200B}\u{2060}", aux:"%;[]«»ʼ͏ ‌‍‑‰‹›", 
orth:`Thai. &nbsp; <a href="../scripts/thai/" target="_blank">Details</a>.`,
linked:"thai/th", picker:"thai", font:"Noto Serif Thai", 
},

"ti": { name:"Tigrinya", silcode:"tir", source:"cldr_ti,udhr_tir", region:"afr", countries:"Ethiopia, Eritrea", script:"ethi", speakers:"6900000", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍቐቑቒቓቔቕቖቘቚቛቜቝበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾዀዂዃዄዅወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ", mark:"፟", punctuation:"፣፡’", aux:"ሇቇኇኯዏዯዸዹዺዻዼዽዾዿጏጘጙጚጛጜጝጞጟፘፙፚⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶓⶔⶕⶖⶏⶐⶑⶒⶠⶡⶢⶣⶤⶥⶦⶨⶩⶪⶫⶬⶭⶮⶰⶱⶲⶳⶴⶵⶶⶸⶹⶺⶻⶼⶽⶾⷀⷁⷂⷃⷄⷅⷆⷈⷉⷊⷋⷌⷍⷎⷐⷑⷒⷓⷔⷕⷖⷘⷙⷚⷛⷜⷝⷞ᎐᎑᎒᎓᎔᎕᎖᎗᎘᎙ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ", 
orth:`Ethiopic. &nbsp; Used since 13th or 14th century.`,
picker:"ethi"
},

"tiv": { name:"Tiv", source:"udhr_tiv", region:"afr", countries:"Nigeria", script:"latn", speakers:"2200000", letter:"ôÔ", mark:"̂", local:"Tiv", 
orth:`Latin. &nbsp; Used since 1936.`},

"tk": { name:"Turkmen", silcode:"tuk", source:"cldr_tk,udhr_tuk_latn", region:"casia", countries:"Turkmenistan, Afghanistan, Iran, Iraq, Syria", script:"latn", speakers:"7500000", letter:"çäöüýÇÄÖÜÝžňşŽŇŞ", mark:"̧̈̌́", punctuation:"§–—…“”‐‰", local:"Türkmençe", 
orth:`Latin. &nbsp; Since 1991, official usage.`,
also:
['tk-arab | arab | Naskh style. Used in Afghanistan &amp; Iran',
'tk-cyrl | cyrl | Used in Turkmenistan (but not Afghanistan).']
},

"tk-cyrl": { name:"Turkmen", source:"udhr_tuk_cyrl", region:"casia", countries:"Turkmenistan, Afghanistan, Iran, Iraq, Syria", script:"cyrl", speakers:"7500000", letter:"адмхуклрынңәиецясгшбптчвзэоҗйөүъюжфёАДМХУКЛРЫНҢӘИЕЦЯСГШБПТЧВЗЭОҖЙӨҮЪЮЖФЁ", mark:"̆̈", punctuation:"‐–", local:"түркменче‎", localtrans:"(türkmençe)", 
orth:`Cyrillic. &nbsp; Used in Turkmenistan.`,
also:
['tk-arab | arab | Naskh style. Used in Afghanistan &amp; Iran',
'tk-latn | latn | Since 1991, official usage.']
},

"tl": { name:"Tagalog", silcode:"tgl", source:"udhr_tgl_tglg", region:"seasia", countries:"Philippines, USA, Canada", script:"ascii", speakers:"28000000", local:"Tagalog", 
orth:`Latin. &nbsp; Primary usage.`,
also:
['tl-tglg | tglg | No longer in use.',]
},

"tly": { name:"Talysh", source:"udhr_tly", region:"wasia", countries:"Azerbaijan, Iran", script:"latn", speakers:"900000", letter:"çÇƏığşİĞŞə", mark:"̧̇̆", local:"Tolışi", 
orth:`Latin. &nbsp; Used in Azerbaijan.`,
also:
['tly-arab | arab | Naskh style. Used in Iran.',
'tly-cyrl | cyrl | ']
},

"tn": { name:"Tswana (Setswana)", silcode:"tsn", source:"udhr_tsn", region:"afr", countries:"Botswana, South Africa, Zimbabwe", script:"latn", speakers:"5000000", letter:"šŠ", mark:"̌", punctuation:"·‐", local:"Setswana / Tswana"},

"to": { name:"Tongan", silcode:"ton", source:"cldr_to,udhr_ton", region:"oce", countries:"Tonga", script:"latn", speakers:"169000", letter:"āēīōūĀĒĪŌŪáéíóúÁÉÍÓÚʻ", mark:"́̄", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàâåäæçèêëìîïñòôöøùûüÿÀÂÅÄÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̊̈̃", local:"Faka Tonga"},

"tob": { name:"Toba (Qom, Kom, Chaco Sur, Toba Sur)", source:"udhr_tob", region:"sam", countries:"Argentina", script:"latn", speakers:"40000", letter:"ỹỸíÍ", mark:"̃́", local:"Qom"},

"toi": { name:"Tonga (Chitonga, Zambezi)", source:"udhr_toi", region:"afr", countries:"Zambia, Zimbabwe", script:"ascii", speakers:"1500000", local:"Chitonga"},

"toj": { name:"Tojolab'al", source:"udhr_toj", region:"cam", countries:"Mexico", script:"ascii", speakers:"52000", punctuation:"’", local:"Tojolabal"},

"top": { name:"Papantla Totonac (Lowland Totonac)", source:"udhr_top", region:"cam", countries:"Mexico", script:"ascii", speakers:"80000", local:"Tutunakú"},

"tpi": { name:"Tok Pisin (Pidgin English)", source:"udhr_tpi", region:"seasia", countries:"Papua New Guinea", script:"ascii", speakers:"4000000", local:"Tok Pisin"},

"tr": { name:"Turkish (Istanbul Turkish)", silcode:"tur", source:"cldr_tr,udhr_tur", region:"wasia", countries:"Turkey, Bulgaria, Cyprus, Uzbekistan,Kazakhstan, Macedonia", script:"latn", speakers:"71000000", letter:"çöüâÇÖÜÂğışĞŞİ", mark:"̧̇̆̈̂", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàåäæèêëìîïñòôøùûÿÀÅÄÆÈÊËÌÎÏÑÒÔØÙÛ̀̊̃", local:"Türkçe", 
orth:`Latin. &nbsp; Since 1928/1929, primary usage.`,
also:
['tr-arab | arab | Naskh style. No longer in use.',
'tr-grek | grek | No longer in use.',
'tr-cyrl | cyrl | Used in Bulgaria.',]
},

"tru": { name:"Turoyo (Suryoyo, Syryoyo, Süryani, Turani)", local:"Surayt", localtrans:"", silcode:"", rtl:true, xxlang:"../syrc/tru",
source:"a9dcf48a64fd2fb12d3014d2f0295b003130db65", 
region:"wasia", countries:"Turkey", script:"syrj", speakers:"15000", 
letter:"ܐܒܓܔܕܗܘܙܚܛܝܟܠܡܢܣܥܦܨܩܪܫܬ", mark:"̰ܱܷ݂݆ܰܳܶ݁݅", number:"", punctuation:"،؛؟܆܇", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"!:̠̣̤̄̇̈͏ـ​•⁠", 
orth:`[Syriac] (serto/Western style). Used for West Syriac and Turoyo texts.
ISO 15924 has a general script code for Syriac (syrc), and another (syrn) for the Eastern Syriac orthography. 
<a href="../scripts/syriac/syrc-tru" target="_blank">Details</a>.`,
related:`Macrolanguage is Syriac [syr].`,
linked:"syrc/tru", picker:"syrc-tru", font:"'Noto Sans Syriac Western'", 
},

"ts": { name:"Tsonga (Xitsonga)", silcode:"tso", source:"udhr_tso_MZ,udhr_tso_ZW", region:"afr", countries:"South Africa, Mozambique, Zimbabwe", script:"latn", speakers:"13000000", letter:"ìàçãòèùíéáúÌÀÇÃÒÈÙÍÉÁÚ", mark:"̧̀̃́", punctuation:"’", local:"Xitsonga"},

"tsz": { name:"Purépecha (Tarascan)", source:"udhr_tsz", region:"cam", countries:"Mexico, USA", script:"latn", speakers:"125000", letter:"áïéíÁÏÉÍⱭƲŋŊɑʋ", mark:"́̈", local:"P’urhe / P’urhépecha"},

"tt": { name:"Tatar", silcode:"tat", source:"cldr_tt,udhr_tat", region:"eur", countries:"Russia, Kazakhstan", script:"cyrl", speakers:"5200000", letter:"кешхоуларынңгмидцясбәтьвзпөъһҗчүйфюэжКЕШХОУЛАРЫНҢГМИДЦЯСБӘТЬВЗПӨЪҺҖЧҮЙФЮЭЖёщЁЩ", mark:"̈̆", aux:"ғқӯҒҚӮ̄", local:"татар теле‎/ татарча‎", localtrans:"(tatar tele / tatarça)", 
orth:`Cyrillic. &nbsp; `,
also:
['tt-latn | latn | ',]
},

"tw": { name:"Twi", redirect:true, region:"afr", script:"latn", related:`Macrolanguage is Akan [ak]. Legacy applications often use [ak] rather than tw.
Dialects include: Ahafo, Akuapem, Akyem, Asante, Asen, Dankyira, Kwawu.
Orthographies include:
* Latin, from 1978, intended to be a common orthography for Akan (see [ak]).
* Latin, for the Asante dialect of Twi (see [tw-asante])
* Latin, for the Akuapem dialect of Twi (see [tw-akuapem])`,
},

"tw-akuapem": { name:"Akuapem Twi", source:"udhr_aka_akuapem", region:"afr", script:"latn", speakers:"6000000", letter:"ɛɔƐƆòÒ", mark:"̀", 
related:`This is a dialect of Twi [tw], under the Akan [ak] macrolanguage. Legacy applications often use ak rather than tw.`,
orth:`Latin. &nbsp; For the Akuapem dialect of Twi.`,
also:
['tw-asante | latn | For the Asante dialect of Twi.',]
},

"tw-asante": { name:"Ashanti (Asante, Asante Twi)", source:"udhr_aka_asante", region:"afr", script:"latn", speakers:"2800000", letter:"ɛɔƐƆ", related:`This is a dialect of Twi ([tw]), under the Akan ([ak]) macrolanguage.
Legacy applications often use [ak] rather than tw-asante.`,
related:`This is a dialect of Twi [tw], under the Akan [ak] macrolanguage. Legacy applications often use ak rather than tw.`,
orth:`Latin. &nbsp; For the Asante dialect of Twi.`,
also:
['tw-akuapem | latn | For the Akuapem dialect of Twi.',]
},

"twq": { name:"Tasawaq", source:"cldr_twq", region:"afr", countries:"Niger", script:"latn", speakers:"8000", letter:"ɲẽẼŋšžŊŠŽƝãõÃÕ", mark:"̃̌", local:"Ingalkoyyu’"},

"ty": { name:"Tahitian", silcode:"tah", source:"udhr_tah", region:"oce", script:"latn", speakers:"68000", letter:"āūōēīĀŪŌĒĪ", mark:"̄", local:"Reo Tahiti"},


"tyj": { name:"Tai Yo", local:"", localtrans:"", silcode:"", 
source:"r12a", 
region:"seasia", countries:"Vietnam", script:"tayo", speakers:"", 
letter:"𞛀𞛁𞛂𞛃𞛄𞛅𞛆𞛇𞛈𞛉𞛊𞛋𞛌𞛍𞛎𞛏𞛐𞛑𞛒𞛓𞛔𞛕𞛖𞛗𞛘𞛙𞛚𞛛𞛜𞛝𞛞𞛠𞛡𞛢𞛤𞛥𞛧𞛨𞛩𞛪𞛫𞛬𞛭𞛰𞛱𞛲𞛳𞛴𞛾𞛿", mark:"𞛣𞛦𞛮𞛯𞛵", number:"", punctuation:"“”‹›、。！（），：？［］", symbol:"", other:"", aux:" %'-«»͏٭​‌‍‑–—‘’•… ‰⁠⋯；", 
orth:`[Tai Yo] &nbsp;  
<a href="../scripts/tayo/tyj.html" target="_blank">Detailed summary</a>.`,
linked:"tayo/tyj", picker:"tayo", font:"Noto Serif Tai Yo", 
},





/*
"adlm": { name:"Adlam", region:"afr",
blocks: 1, chars: 88, bletter:69, bmark:7, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:Y,
type:"alpha", 
voweltype: { inherent: 0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:Y, cursive: Y, conjuncts:N, mcchars:Y, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:"" }, 
wordsep:"space",
linebreak:"word", hyphen:"no", justification:"sp", spacing:U, gc:Y,
baseline: "romn",
},



"xxx": { name:"Tai Yo", local:"taiiyo", silcode:"abc", 
source:"r12a", 
region:"seasia", countries:"Vietnam", script:"xxxx", speakers:"22000", 
letter:"𞛮𞛑𞛒𞛓𞛌𞛍𞛎𞛆𞛀𞛂𞛃𞛝𞛞𞛜𞛐𞛋𞛔𞛕𞛙𞛇𞛈𞛄𞛚𞛛𞛖𞛏𞛉𞛊𞛅𞛘𞛗𞛡𞛢𞛤𞛨𞛧𞛥𞛬𞛭𞛠𞛩𞛪𞛫𞛴𞛳𞛲𞛱𞛰𞛿", letteraux:"asd", mark:"𞛣𞛦𞛮𞛵𞛯", markaux:"afd", number:"234", punctuation:"，、。：？！", symbol:"𞛾", other:"‌‍", 
orth:`[Tai Yo] &nbsp;  
<a href="../scripts/tayo/tyj.html" target="_blank">Detailed summary</a>.`,
also:
['tw-akuapem | latn | For the Akuapem dialect of Twi.',],
linked:"tayo", fonts:"/pickers/tayo-tyj/", font:"Noto Serif Tayo",
},
*/

"tyv": { name:"Tuvan (Tuvinian, Tyvan, Tuvin)", source:"udhr_tyv", region:"nasia", countries:"Russia, Mongolia", script:"cyrl", speakers:"280000", letter:"кижнңэргелбүтуазычдьсмяоюцхпшөйвъфёКИЖНҢЭРГЕЛБҮТУАЗЫЧДЬСМЯОЮЦХПШӨЙВЪФЁ", mark:"̆̈", local:"тыва‎ / тыва дыл‎", localtrans:"(tyva / tyva dyl)"},

"tzh": { name:"Tzeltal (Ts'eltal)", source:"udhr_tzh", region:"cam", countries:"Mexico", script:"ascii", speakers:"450000", symbol:"´", local:"Bats’il k’op"},

"tzm": { name:"Central Atlas Tamazight (Central Morocco Tamazight, Middle Atlas Tamazight, Central Shilha, Beraber, Braber)", source:"cldr_tzm,udhr_tzm_tfng", region:"afr", countries:"Morocco", script:"latn", speakers:"2500000", letter:"ɛɣḍḥṛṣṭẓỵḌḤṚṢṬẒỴƐƔâéçÂÉÇʷ", mark:"̧̣̂́", local:"Tmaziɣt, ⵜⴰⵎⴰⵣⵉⵖⵜ‎", localtrans:"(tamazight)", 
orth:`Latin. &nbsp; `,
also:
['tzm-arab | arab | Naskh style.',
'tzm-tfng | tfng | Developed 2003, official usage.']
},

"tzo": { name:"Tzotzil", source:"udhr_tzc", region:"cam", countries:"Mexico", script:"latn", speakers:"400000", letter:"óáéíúÓÁÉÍÚ", mark:"́", punctuation:"’", local:"Bats’i k’op"},

"ug": { name:"Uyghur (Uighur, Eastern Turki)", local:"ئۇيغۇر تىلى‎ / ئۇيغۇرچە‎", localtrans:"(uyghur tili / uyghurche)", silcode:"uig", rtl:true, 
source:"cldr_ug,udhr_uig_arab", 
region:"casia", countries:"China, Kazakhstan", script:"arab", speakers:"25000000", 
letter:"ئابتجخدرزسشغفقكلمنوىيپچژڭگھۆۇۈۋېە", mark:"͏", markaux:"ٔ", number:"", punctuation:"«»،؛؟", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"-[]ʼ٪​‑–—‘’“”…‹›⁠", 
orth:`Arabic. &nbsp; Naskh style. Official and primary use in China, also used in Afghanistan. <a href="../scripts/arabic/uighur" target="_blank">Details</a>.`,
also:
["ug-latn | latn | Used in China and Turkey.",
"ug-cyrl | cyrl | Used in Kazakhstan, previously used in China."],
linked:"arab/ug", picker:"arab-ug", font:"", 
},

"ug-latn": { name:"Uyghur (Uighur, Eastern Turki)", source:"udhr_uig_latn", region:"casia", countries:"China, Kazakhstan", script:"latn", speakers:"25000000", letter:"öéüÖÉÜ", mark:"̈́", punctuation:"’", 
orth:`Latin. &nbsp; Used in China and Turkey.`,
also:
['ug | arab | Naskh style. Official and primary use in China, also used in Afghanistan.',
'ug-cyrl | cyrl | Used in Kazakhstan, previously used in China.']
},


"uk": { name:"Ukrainian", local:"українська мова‎", localtrans:"(ukrayins’ka mova)", silcode:"ukr", 
source:"cldr_uk,udhr_ukr", 
region:"eur", countries:"Ukraine, Brazil, Moldova, Romania", script:"cyrl", speakers:"45000000", 
letter:"ʼЄІЇАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгдежзийклмнопрстуфхцчшщьюяєіїґ", letteraux:"", mark:"", markaux:"́̆̈", number:"", numberaux:"", punctuation:"«»–—“„…", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"%-[]§‑‘‚†‡‰′″‹›₽№", deprecated:"", 
orth:`Cyrillic. &nbsp; <a href="../scripts/cyrillic/ks.html" target="_blank">Details</a>.`,
linked:"cyrl/uk", picker:"cyrl-uk", font:"", 
},

"umb": { name:"Umbundu (South Mbundu)", source:"udhr_umb,udhr_011", region:"afr", countries:"Angola", script:"latn", speakers:"6000000", letter:"ñêãîõâÑÊÃÎÕÂ", mark:"̃̂", punctuation:"’", local:"Umbundu"},

"unr": { name:"Mundari", local:"", localtrans:"", silcode:"unr", 
source:"", 
region:"sasia", countries:"Bangladesh", script:"nagm", speakers:"1100000", 
letter:"𞓐𞓑𞓒𞓓𞓔𞓕𞓖𞓗𞓘𞓙𞓚𞓛𞓜𞓝𞓞𞓟𞓠𞓡𞓢𞓣𞓤𞓥𞓦𞓧𞓨𞓩𞓪𞓫", mark:"𞓮𞓯𞓬𞓭", number:"०१२३४५६७८९০১২৩৪৫৬৭৮৯୦୧୨୩୪୫୬୭୮୯𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹", punctuation:"“”", symbol:"", other:"", aux:"%-[]–—…‰", 
orth:`Nag Mundari (Mundari Bani).  <a href="../scripts/nagm/unr.html" target="_blank">Details.</a>`,
linked:"nagm/unr", picker:"nagm-unr", font:"Noto Sans Nag Mundari", 
},

"ur": { name:"Urdu", local:"اُردُو‎‎", localtrans:"(urdū)", silcode:"urd", rtl:true, 
source:"db476b3d6bab736201e0829304afa25fcf4a4223,cldr_urdu,udhr_urd", 
region:"sasia", countries:"Pakistan, India, Nepal, Bangladesh", script:"arab", speakers:"65000000", 
letter:"ءآؤئابتثجحخدذرزسشصضطظعغفقلمنويٹپچڈڑژکگںھہۂۃیےۓ", mark:"͏ًٌٍَُِّْٰٖؐؑؒؓؔٓٔٗ٘", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"،؍؛؟٪٫٬۔–“”", symbol:"؎؏﷽", other:"\u{0600}\u{0601}\u{0602}\u{0603}\u{0604}\u{061C}\u{06DD}\u{200C}\u{200D}\u{200E}\u{200F}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:"%,;[]«»ʼ​‑—‘’…‰‹›⋯", 
orth:`Arabic. &nbsp; The primary usage is nastaliq ([Aran]) style, though naskh style is used also. <a href="../scripts/arabic/urdu" target="_blank">Details</a>.`,
linked:"arab/ur", picker:"arab-ur", font:"'Noto Nastaliq Urdu', 'Urdu Typesetting'", 
},

"ura": { name:"Urarina (Itucali, Simacu, Shimacu)", source:"udhr_ura", region:"sam", countries:"Peru", script:"latn", speakers:"6000", letter:"úóíÚÓÍ", mark:"́", local:"Oruarinya"},

"uz": { name:"Uzbek", silcode:"uzb", redirect:true, source:"", region:"casia", script:"macrolanguage", speakers:"27000000", related:`uz is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Northern Uzbek [uzn]<br/>Southern Uzbek [uzs].
Legacy applications often use uz rather than [uzn].
`},

"uzn": { name:"Northern Uzbek", source:"cldr_uz,udhr_uzn_latn", region:"casia", countries:"Uzbekistan, Tajikistan, Kyrgyzstan, Kazakhstan, Turkmenistan", script:"latn", speakers:"27000000", letter:"ʻʼ", punctuation:"‐–—…‘’“”„′″«»§", local:"oʻzbek tili", 
related:`Macrolanguage is Uzbek [uz]. Legacy applications often use uz rather than uzn.`,
orth:`Latin. &nbsp; Used since 1992, official usage in Uzbekistan.`,
also:
['uzn-arab | arab | Naskh style. Symbolic use in Uzbekistan, sometimes used in China.',
'uzn-cyrl | cyrl | 1940-1992, official usage in Uzbekistan, and continued widespread use in China and Uzbekistan.']
},

"uzn-arab": { name:"Northern Uzbek", silcode:"uzn", rtl:true, source:"cldr_uz_Arab", region:"casia", countries:"Uzbekistan, Tajikistan, Kyrgyzstan, Kazakhstan, Turkmenistan", script:"arab", speakers:"27000000", letter:"ءآأؤئابةتثجحخدذرزسشصضطظعغفقلمنهويپچژکگۇۉی", mark:"ًٌٍَُِّْٰٓٔ", punctuation:"؉٪٫٬","number":"۰۱۲۳۴۵۶۷۸۹", aux:"يټځڅډړږښګڼۍې", other:"‌‍‎‏", 
related:`Macrolanguage is Uzbek [uz]. Legacy applications often use uz rather than uzn.`,
orth:`Arabic. &nbsp; Naskh style. Symbolic use in Uzbekistan, sometimes used in China.`,
also:
['uzn | latn | Used since 1992, official usage in Uzbekistan.',
'uzn-cyrl | cyrl | 1940-1992, official usage in Uzbekistan, and continued widespread use in China and Uzbekistan.']
},

"uzn-cyrl": { name:"Northern Uzbek", silcode:"uzn", source:"cldr_uz_Cyrl,udhr_uzn_cyrl", region:"casia", countries:"Uzbekistan, Tajikistan, Kyrgyzstan, Kazakhstan, Turkmenistan", script:"cyrl", speakers:"27000000", letter:"инсоҳуқлармждекцяйбшгтўвэъпчзёфхюғИНСОҲУҚЛАРМЖДЕКЦЯЙБШГТЎВЭЪПЧЗЁФХЮҒ", mark:"̆̈", punctuation:"‐–", aux:"щыьЩЫЬ", local:"ўзбек тили‎", localtrans:"(oʻzbek tili)", 
related:`Macrolanguage is Uzbek [uz]. Legacy applications often use uz rather than uzn.`,
orth:`Cyrillic. &nbsp; 1940-1992, official usage in Uzbekistan, and continued widespread use in China and Uzbekistan.`,
also:
['uzn | latn | Used since 1992, official usage in Uzbekistan.',
'uzn-arab | arab | Naskh style. Symbolic use in Uzbekistan, sometimes used in China.']
},

"vai": { name:"Vai (Vy, Gallinas)", local:"", localtrans:"", silcode:"", 
source:"cldr_vai,udhr_vai,a5c6b1f62cb3d71b6acccbe995ff47db10e94963", 
region:"afr", countries:"Liberia, Sierra Leone", script:"vaii", speakers:"120000", 
letter:"ꔀꔁꔂꔃꔄꔅꔆꔇꔈꔉꔊꔋꔌꔍꔎꔏꔐꔑꔒꔓꔔꔕꔖꔗꔘꔙꔚꔛꔜꔝꔞꔟꔠꔡꔢꔣꔤꔥꔦꔧꔨꔩꔪꔫꔬꔭꔮꔯꔰꔱꔲꔳꔴꔵꔶꔷꔸꔹꔺꔻꔼꔽꔾꔿꕀꕁꕂꕃꕄꕅꕆꕇꕈꕉꕊꕋꕌꕍꕎꕏꕐꕑꕒꕓꕔꕕꕖꕗꕘꕙꕚꕛꕜꕝꕞꕟꕠꕡꕢꕣꕤꕥꕦꕧꕨꕩꕪꕫꕬꕭꕮꕯꕰꕱꕲꕳꕴꕵꕶꕷꕸꕹꕺꕻꕼꕽꕾꕿꖀꖁꖂꖃꖄꖅꖆꖇꖈꖉꖊꖋꖌꖍꖎꖏꖐꖑꖒꖓꖔꖕꖖꖗꖘꖙꖚꖛꖜꖝꖞꖟꖠꖡꖢꖣꖤꖥꖦꖧꖨꖩꖪꖫꖬꖭꖮꖯꖰꖱꖲꖳꖴꖵꖶꖷꖸꖹꖺꖻꖼꖽꖾꖿꗀꗁꗂꗃꗄꗅꗆꗇꗈꗉꗊꗋꗌꗍꗎꗏꗐꗑꗒꗓꗔꗕꗖꗗꗘꗙꗚꗛꗜꗝꗞꗟꗠꗡꗢꗣꗤꗥꗦꗧꗨꗩꗪꗫꗬꗭꗮꗯꗰꗱꗲꗳꗴꗵꗶꗷꗸꗹꗺꗻꗼꗽꗾꗿꘀꘁꘂꘃꘄꘅꘆꘇꘈꘉꘊꘋꘌꘓꘘ", letteraux:"", mark:"", markaux:"", number:"", numberaux:"", punctuation:"꘍꘎꘏", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"%[]§«»ʼ͏​‌‍‑–—‘’“”†‡…‰′″‹›⁠", deprecated:"", 
orth:`Vai. &nbsp; Primary usage. <a href="../scripts/vai/" target="_blank">Details</a>.`,
also:
["vai-latn | latn | "],
linked:"vaii/vai", picker:"vai", font:"", 
},

"vai-latn": { name:"Vai (Vy, Gallinas)", source:"cldr_vai_Latn", region:"afr", countries:"Liberia, Sierra Leone", script:"latn", speakers:"120000", letter:"áãéíóõúÁÃÉÍÓÕÚƁƊƐƆĩŋũĨŊŨẽẼɓɗɛɔ", mark:"́̃", 
orth:`Latin. &nbsp; `,
also:
['vai | vaii | Primary usage.',]
},

"ve": { name:"Venda (Tshivenḓa, Luvenḓa)", silcode:"ven", source:"udhr_ven", region:"afr", countries:"South Africa, Zimbabwe", script:"latn", speakers:"1300000", letter:"ṱḽḓṅṋṰḼḒṄṊ", mark:"̭̇", punctuation:"“”", local:"Tshivenḓa‎", localtrans:"(Tshivenda)"},

"vec": { name:"Venetian (Venetan)", source:"udhr_vec", region:"eur", countries:"Italy, Brazil, Croatia", script:"latn", speakers:"3900000", letter:"óàòèùéìçÓÀÒÈÙÉÌÇƚȽđĐ", mark:"̧́̀", punctuation:"’—", local:"Veneto"},

"vep": { name:"Veps (Vepsian)", source:"udhr_vep", region:"eur", countries:"Russia", script:"latn", speakers:"5900", letter:"üäöÜÄÖšžčŠŽČ", mark:"̈̌", punctuation:"’"},

"vi": { name:"Vietnamese", silcode:"vie", source:"cldr_vi,udhr_vie", region:"seasia", countries:"Vietnam, Cambodia", script:"latn", speakers:"75000000", letter:"àãáâèéêìíòõóôùúýÀÃÁÂÈÉÊÌÍÒÕÓÔÙÚÝơưƠƯăđĩũĂĐĨŨảạằẳẵắặầẩẫấậẻẽẹềểễếệỉịỏọồổỗốộờởỡớợủụừửữứựỳỷỹỵẢẠẰẲẴẮẶẦẨẪẤẬẺẼẸỀỂỄẾỆỈỊỎỌỒỔỖỐỘỜỞỠỚỢỦỤỪỬỮỨỰỲỶỸỴ", mark:"̛̣̀̉̃́̆̂", punctuation:"§‐–—…‘’“”†‡′″", local:"Tiếng Việt", 
orth:`Latin. &nbsp; Primary usage.`,
also:
['vi-han | hani | ',]
},

"vmw": { name:"Makhuwa (Makua, Macua)", source:"udhr_vmw", region:"afr", countries:"Mozambique", script:"latn", speakers:"6600000", letter:"çõãÇÕÃ", mark:"̧̃", punctuation:"’…", local:"Emakhuwa"},

"vo": { name:"Volapük", source:"cldr_vo", region:"eur", script:"latn", speakers:"20", letter:"äöüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘’“”"},

"vun": { name:"Wuunjo (Wunjo, Vunjo, Kivunjo)", source:"cldr_vun", region:"afr", countries:"Tanzania", script:"ascii", speakers:"?"},

"wa": { name:"Walloon", silcode:"wal", source:"udhr_wln", region:"eur", countries:"Belgium", script:"latn", speakers:"600000", letter:"éåèûîôâêçàÉÅÈÛÎÔÂÊÇÀ", mark:"̧́̊̀̂",  local:"Walon"},

"wae": { name:"Walser German (Walliser German)", source:"cldr_wae", region:"eur", countries:"Swizterland, Austria, Italy, Leichtenstein", script:"latn", speakers:"22000", letter:"áäãéíóöõúüÁÄÃÉÍÓÖÕÚÜčšũČŠŨ", mark:"́̈̃̌", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåæçèêëìîïñòôøßùûÿÀÂÅÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̄"},

"war": { name:"Waray", source:"udhr_war", region:"seasia", countries:"Philippines", script:"ascii", speakers:"2600000", local:"Waray / Waray-Waray"},

"wo": { name:"Wolof", local:"Wolof", localtrans:"", silcode:"wol", 
source:"cldr_wo,udhr_wol", 
region:"afr", countries:"Guinea, etc.", script:"latn", speakers:"4200000", 
letter:"ÀÉËÑÓàéëñóŊŋ", mark:"", markaux:"̀́̃̈", number:"", punctuation:"“”", symbol:"", other:"", aux:"%Z[]z«»‑–—…‰‹›", 
orth:`Latin. &nbsp; Primary usage.`,
also:
["wo-arab | arab | Limited usage. Naskh style. <a href='../scripts/latn/wo.html' target='_blank'>Details</a>",
"wo-gara | gara | Low usage. <a href='../scripts/gara/wo.html' target='_blank'>Details</a>."],
linked:"latn/wo", picker:"latn-wo", font:"", 
},

"wo-gara": { name:"Wolof", local:"𐵗𐵌𐵸𐵌𐶀", localtrans:"/wɔlɔf/", silcode:"wol", rtl:true, xxlang:"wo",
source:"r12a", 
region:"afr", countries:"Senegal, Mauritania, The Gambia", script:"gara", speakers:"5500000", 
letter:"𐵊𐵋𐵌𐵍𐵎𐵐𐵑𐵒𐵓𐵔𐵕𐵖𐵗𐵘𐵙𐵚𐵛𐵜𐵝𐵞𐵟𐵠𐵡𐵢𐵣𐵰𐵱𐵲𐵳𐵴𐵵𐵶𐵷𐵸𐵹𐵺𐵻𐵼𐵽𐵾𐵿𐶀𐶁𐶂𐶃", mark:"𐵩𐵪𐵫𐵬𐵭", number:"𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉", punctuation:"،؛؟‘’“”…𐵮", symbol:"𐵯", other:"\u{200E}\u{200F}\u{202A}\u{202B}\u{202C}\u{2066}\u{2067}\u{2068}\u{2069}", aux:"%,[]«»؜–—‰‹›",	
orth:`Garay. &nbsp; Limited usage.  <a href='../scripts/gara/wo.html' target='_blank'>Details</a>`,
also:
["wo | latn | Primary usage. <a href='../scripts/latn/wo.html' target='_blank'>Details</a>",
"wo-arab | arab | Limited usage. Naskh style. <a href='../scripts/latn/wo.html' target='_blank'>Details</a>"],
linked:"gara/wo", fonts:"gara-wo", font:"WolofGaraySansSerif", 
},

"wo-arab": { name:"Wolof", local:"Wolof", localtrans:"وࣷلࣷفْ لࣵکّ", silcode:"wol", rtl:true, 
source:"60f90ae05da3e47b25b07d3fb24cbf634210dac1", 
region:"afr", countries:"Senegal, Mauritania, Gambia", script:"arab", speakers:"4200000", 
letter:"آابتجخدرسعفقلمنهويکگݒݖݝݧ", mark:"͏َُِّْࣹࣺࣴࣵࣷࣸ", number:"", punctuation:"،؛؟‘’“”…", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{2060}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:"%,;?[]«»–—‰‹›", 
orth:`Arabic. &nbsp; Limited usage. <a href="../scripts/arab/wo.html" target="_blank">Details</a>.`,
also:
["wo | latn | Primary usage. <a href='../scripts/latn/wo.html' target='_blank'>Details</a>",
"wo-gara | gara | Low usage.  <a href='../scripts/gara/wo.html' target='_blank'>Details</a>."],
linked:"arab/wo", picker:"", font:"Harmattan, 'Scheherazade New'", 
},

"wsg": { name:"Adilabad Gondi", local:"𑵶𑶓𑶕𑶂𑶋", localtrans:"ɡoːɳɖiː", silcode:"", 
source:"r12a", 
region:"sasia", countries:"India", script:"gong", speakers:"300000", 
letter:"𑵠𑵡𑵢𑵣𑵤𑵥𑵧𑵨𑵪𑵫𑵬𑵭𑵮𑵯𑵰𑵱𑵲𑵳𑵴𑵵𑵶𑵷𑵸𑵹𑵺𑵻𑵼𑵽𑵾𑵿𑶀𑶁𑶂𑶃𑶄𑶅𑶆𑶇𑶈𑶉𑶘", letteraux:"", mark:"𑶊𑶋𑶌𑶍𑶎𑶐𑶑𑶓𑶔𑶕𑶖𑶗", markaux:"", number:"𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩", numberaux:"", punctuation:"।॥", punctuationaux:"", symbol:"", symbolaux:"", other:"\u{200C}\u{200D}", otheraux:"", aux:"", deprecated:"", 
orth:`[Gunjala Gondi] Being reactivated from an 18thC script. Telugu and Devanagari are more commonly used. <a href='../scripts/gong/wsg.html' target='_blank'>Details</a>.`,
linked:"gong/wsg", picker:"gong", font:"Noto Sans Gunjala Gondi", 
},

"wwa": { name:"Waama (Yoabu)", source:"udhr_wwa", region:"afr", countries:"Benin", script:"latn", speakers:"50000", letter:"ãìàùèÃÌÀÙÈǹƆƐǸũŋŨŊɔɛ", mark:"̃̀", local:"Waama"},

"xh": { name:"Xhosa", silcode:"xho", source:"cldr_xh,udhr_xho", region:"afr", countries:"South Africa", script:"ascii", speakers:"8200000", local:"isiXhosa"},

"xmr": { name:"Meroitic", local:"", localtrans:"", silcode:"", rtl:true, 
source:"r12a", 
region:"afr", countries:"Sudan", script:"merc", speakers:"0", 
letter:"𐦠𐦡𐦢𐦣𐦤𐦥𐦦𐦧𐦨𐦩𐦪𐦫𐦬𐦭𐦮𐦯𐦱𐦲𐦳𐦴𐦵𐦶𐦷𐦾𐦿", mark:"", number:"𐦼𐦽𐧀𐧁𐧂𐧃𐧄𐧅𐧆𐧇𐧈𐧉𐧊𐧋𐧌𐧍𐧎𐧏𐧒𐧓𐧔𐧕𐧖𐧗𐧘𐧙𐧚𐧛𐧜𐧝𐧞𐧟𐧠𐧡𐧢𐧣𐧤𐧥𐧦𐧧𐧨𐧩𐧪𐧫𐧬𐧭𐧮𐧯𐧰𐧱𐧲𐧳𐧴𐧵𐧶𐧷𐧸𐧹𐧺𐧻𐧼𐧽𐧾𐧿", punctuation:"", symbol:"", other:"\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Meroitic Cursive] Used to write Meroitic from BCE 300 to around 400-600 CE. Primary script. <a href='../scripts/merc/xmr.html'>Details</a>`,
also:
["xmr-mero | mero | Hieroglyphic script for inscriptions."],
linked:"merc/xmr", picker:"mero", font:"Noto Sans Meroitic", 
},

"xog": { name:"Soga (Lusoga)", source:"cldr_xog", region:"afr", countries:"Uganda", script:"ascii", speakers:"2100000", local:"Lusoga"},

"xpe": { name:"Liberia Kpelle", source:"udhr_gkp", region:"afr", countries:"Liberia", script:"latn", speakers:"1300000", letter:"ƐƁƆƝƏĝŋĜŊɛɓɔɲə", mark:"̂", local:"Kpɛlɛwoo", related:`Macrolanguage is Kpelle [kpe]. Legacy applications often use kpe rather xpe.`,
orth:`Latin. &nbsp; `,
also:
['xpe-kpel | kpel | Limited usage except for correspondence.',]
},

"xsm": { name:"Kasem", source:"udhr_xsm", region:"afr", countries:"Burkina Faso, Ghana", script:"latn", speakers:"250000", letter:"ƐƆŋŊɛɔ", local:"Kasem"},

"yad": { name:"Yagua", source:"udhr_yad", region:"sam", countries:"Peru", script:"latn", speakers:"5700", letter:"ñíéáÑÍÉÁ", mark:"̃́", local:"Nijya̱mi̱ Niquejada"},

"yao": { name:"Yao", source:"udhr_yao", region:"afr", countries:"Malawi, Tanzania, Mozambique", script:"ascii", speakers:"3100000", local:"Ciyawo"},

"yap": { name:"Yapese", source:"udhr_yap", region:"oce", countries:"Micronesia", script:"latn", speakers:"7400", letter:"ʼ", punctuation:"‐"},

"yav": { name:"Yangben (Central Yambasa)", source:"cldr_yav", region:"afr", countries:"Cameroon", script:"latn", speakers:"17000", letter:"áàâéèíìîóòôúùûÁÀÂÉÈÍÌÎÓÒÔÚÙÛǎǒǔǍƐǑƆǓāīŋōūĀĪŊŌŪɛɔ", mark:"́̀̂̌̄", local:"Nuasue"},

"ydd": { name:"Yiddish", source:"cldr_yi,udhr_ydd", region:"eur", countries:"Israel, USA, etc.", script:"hebr", speakers:"1500000", letter:"אבגדזשהויחטײכךלמםנןסעפףצץקרתװױ", mark:"ִַָּֿׂ", punctuation:"׳״־‐–—", other:"‮‬", 
related:`Macrolanguage is Yiddish [yi]. Legacy applications often use yi rather ydd.`},

"yi": { name:"Yiddish", silcode:"yid", redirect:true, source:"", region:"eur", script:"macrolanguage", speakers:"1500000", related:`yi is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Eastern Yiddish [ydd]<br/>Western Yiddish [yih].
Legacy applications often use yi rather than [ydd].
`},

"ykg": { name:"Tundra Yukaghir (Northern Yukaghir)", source:"udhr_ykg", region:"nasia", countries:"Russia", script:"cyrl", speakers:"370", letter:"эльистачйкөдҥнбпрумогецяҕхжѳқзвфыющЭЛЬИСТАЧЙКӨДҤНБПРУМОГЕЦЯҔХЖѲҚЗВФЫЮЩ", mark:"̆"},

"yo": { name:"Yoruba", silcode:"yor", source:"cldr_yo,udhr_yor", region:"afr", countries:"Nigeria, Benin, Côte d'Ivoire", script:"latn", speakers:"28000000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙńŃẹọṣẸỌṢ", mark:"̩̣́̀̄", punctuation:"‐", local:"Èdè Yorùbá", 
orth:`Latin. &nbsp; Used since 1865, primary usage.`,
also:
['yo-arab | arab | Naskh style. No longer in use.',]
},

"yua": { name:"Yucatán Maya", source:"udhr_yua", region:"cam", countries:"Mexico", script:"latn", speakers:"790000", letter:"ʼóíáúéÓÍÁÚÉ", mark:"́", punctuation:"‐", local:"Maaya t’aan"},

"za": { name:"Zhuang", silcode:"zha", redirect:true, source:"", region:"easia", script:"macrolanguage", speakers:"16000000", related:`za is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Hongshuihe Zhuang [zch]<br/>Eastern Hongshuihe Zhuang [zeh]<br/>Guibei Zhuang [zgb]<br/>Minz Zhuang [zgm]<br/>Guibian Zhuang [zgn]<br/>Dai Zhuang [zhd]<br/>Nong Zhuang [zhn]<br/>Liujiang Zhuang [zlj]<br/>Lianshan Zhuang [zln]<br/>Liuqian Zhuang [zlq]<br/>Qiubei Zhuang [zqe]<br/>Yongbei Zhuang [zyb]<br/>Yang Zhuang [zyg]<br/>Youjiang Zhuang [zyj]<br/>Yongnan Zhuang [zyn]<br/>Zuojiang Zhuang [zzj].
Legacy applications often use za rather than [zyb].`},

"zag": { name:"Zaghawa", local:"", localtrans:"", silcode:"", 
source:"r12a", 
region:"afr", countries:"Sudan, Chad", script:"beri", speakers:"300000", 
letter:"𖺠𖺡𖺢𖺣𖺤𖺥𖺦𖺧𖺨𖺩𖺪𖺫𖺬𖺭𖺮𖺯𖺰𖺱𖺲𖺳𖺴𖺵𖺶𖺷𖺸𖺻𖺼𖺽𖺾𖺿𖻀𖻁𖻂𖻃𖻄𖻅𖻆𖻇𖻈𖻉𖻊𖻋𖻌𖻍𖻎𖻏𖻐𖻑𖻒𖻓", letteraux:"", mark:"̀́̄̇", markaux:"", number:"", numberaux:"", punctuation:"–“”", punctuationaux:"", symbol:"", symbolaux:"", other:"", otheraux:"", aux:"", deprecated:"", 
orth:`[Beria Erfe] Recently redeveloped for writing Zaghawa. <a href='../scripts/beri/zag.html' target='_blank'>Details</a>. `,
linked:"beri/zag", picker:"beri-zag", font:"Kedebideri", 
},

"zam": { name:"Miahuatlán Zapotec (Cuixtla Zapotec)", source:"udhr_zam", region:"cam", countries:"Mexico", script:"latn", speakers:"1000", letter:"óáñíÓÁÑÍʼ", mark:"́̃"},

"zdj": { name:"Ngazidja Comorian", source:"udhr_zdj", region:"afr", countries:"Comoros", script:"ascii", speakers:"700000", local:"Shingazidja", 
orth:`Latin. &nbsp; `,
also:
['zdj-arab | arab | Naskh style.',]
},

"zgh": { name:"Standard Moroccan Tamazight (Amazigh, Tamazight)", local:"ⵜⴰⵎⴰⵣⵉⵖⵜ‎ / ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵡⴰⵢⵜ‎", localtrans:"(tamaziɣt / tamaziɣt tanawayt)", silcode:"", 
source:"c7db7ca11771abcda449392ca6fed00e9db62d20,cldr_zgh,udhr_zgh", 
region:"afr", countries:"Morocco", script:"tfng", speakers:"?", 
letter:"ⴰⴱⴲⴳⴴⴷⴸⴹⴺⴻⴼⴽⴿⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵒⵓⵔⵕⵖⵙⵚⵛⵜⵝⵟⵠⵡⵢⵣⵥⵯ", mark:"", number:"", punctuation:"«»”„…", symbol:"", other:"\u{200C}\u{200D}", aux:"%-[]ʼ͏‑–—‘’“‰‹›", 
orth:`Tifinagh. &nbsp;  <a href="../scripts/tifinagh/" target="_blank">Details</a>.`,
linked:"tfng/zgh", picker:"tfng-ber", font:"", 
},

"zlm": { name:"Malay", source:"cldr_ms,udhr_mly_latn", region:"seasia", countries:"Malaysia, Indonesia, Singapore", script:"ascii", speakers:"77000000", local:"Bahasa Melayu", 
related:`Macrolanguage is Malay [ms].`,
orth:`Latin. &nbsp; `,
also:
['zlm-arab | arab | Naskh style.',]
},

"zlm-arab": { name:"Malay", rtl:true, source:"udhr_mly_arab", region:"seasia", countries:"Malaysia, Indonesia, Singapore", script:"arab", speakers:"77000000", letter:"ڤراشتهنحقسيمأجڬدبوڽڠعفكلچخظصزطۏؤئذ", mark:"ٔ", punctuation:"،","number":"٢", local:" ملايو‎", localtrans:"(melayu)", 
related:`Macrolanguage is Malay [ms].`,
orth:`Arabic. &nbsp; Naskh style.`,
also:
['zlm | latn | ',]
},

"zro": { name:"Záparo (Sápara, Zápara)", source:"udhr_zro", region:"sam", countries:"Ecuador", script:"latn", speakers:"350", letter:"ñÑ", mark:"̃", notes:`Ethnologue regards this language as unwritten (and almost extinct).`},

"ztu": { name:"Güilá Zapotec", source:"udhr_ztu", region:"cam", countries:"Mexico", script:"latn", speakers:"9500", letter:"ëíéËÍÉ", mark:"̈́"},

"zu": { name:"Zulu", silcode:"zul", source:"cldr_zu,udhr_zul", region:"afr", countries:"South Africa, Lesotho, Eswatini, Malawi", script:"ascii", speakers:"12000000", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄"},

"zyb": { name:"Yongbei Zhuang", source:"udhr_ccx", region:"easia", countries:"China", script:"ascii", speakers:"16000000", notes:"This may well be missing some letters.", related:`Macrolanguage is Zhuang [za]. Legacy applications often use za rather zyb.`,
orth:`Latin. &nbsp; Pinyin-based, since 1982, official and mainly used in official domains.`,
also:
['zyb-hani | hani | Dating from Han dynasty, mainly in non-official domains, gaining popularity.',]
},


//"xxx":{name:"name",source:"cldr_xxx,UDHR",region:"Asia",script:"latn",speakers:"113000",letter:"",mark:"",punctuation:"",number:"",symbol:""},
}


/*
vowels:"1 inherent vowel, 36 letters/3 matres lectionis/some independent vowels, 18 vowel-signs/3 diacritics, A vowel-base ᩋ, 5 visually-encoded letters, 5 prescripts, 2 circumgraphs, 29 composite vowels, 4 vocalics",
clusters:"", medials:"", finals:"",
clusters:"visible virama, virama-based conjuncts, stacking, conjoining, ligation, touching, ra special",
medials:"", finals:"6 marks, ordinary letters",
pre-base letters
*/



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

// Notes
// kl: CLDR adds, letter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301 0302 0303 030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field




