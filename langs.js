var langs = {

// Any time this is changed, run _make-array.html to generate new code for char_lang.js !

"ab": { name:"Abkhaz (Abxaz, Abkhazian)", source:"udhr_abk,b03748de41ccb9a6e724e938c3fea5013517b8fa", region:"wasia", script:"cyrl", speakers:"113000", letter:"ЏАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЫЬабвгдежзиклмнопрстуфхцчшыьџҔҕҚқҞҟҦҧҨҩҬҭҲҳҴҵҶҷҼҽҾҿӘәӠӡӶӷ", punctuation:"–‐", local:"Аԥсуа бызшәа /apʰswa bɨzʃʷa/"},

"ace": { name:"Acehnese (Achinese)", source:"udhr_ace,84b1954bb029c0f49091d7ba866b6e43bd2c7578", region:"seasia", script:"ascii", speakers:"3500000", letter:"ÈÉËÔÖèéëôö", mark:"̀́̂̈", punctuation:"‐“”", local:"Bahsa/Basa Acèh [bahsa at͡ʃeh]"},

"acu": { name:"Achaur-Shiwiar", source:"udhr_acu,udhr_acu_1", region:"sam", script:"latn", speakers:"7500", letter:"úáÚÁ", punctuation:"¿", mark:"́"},

"ada": { name:"Dangme (Adaŋgbi)", source:"udhr_ada", region:"afr", script:"latn", speakers:"800000", letter:"íÍƆƐɔɛ", mark:"́"},

"ady": { name:"Adyghe (West Circassian)", source:"udhr_ady,2354dbbf502e044f5b3c42824859764a3815632d", region:"eur", script:"cyrl", speakers:"590000", letter:"ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяёӏӀ", mark:"̆̈", local:"Адыгабзэ [aːdəɣaːbza]", notes:"The UDHR translation uses Іі (byelorussian-ukrainian i), rather than ӏ (palochka)."},

"af": { name:"Afrikaans", source:"cldr_af,udhr_afr", region:"afr", script:"latn", speakers:"7100000", letter:"áâéèêëîïôöûÁÂÉÈÊËÎÏÔÖÛ", mark:"́̂̀̈", punctuation:"§‐–—…‘’“”†‡′″‰", aux:"àåäãæçíìóòúùüý̧̊̃"},

"agq": { name:"Aghem (Wum, Yum)", source:"cldr_agq", region:"afr", script:"latn", speakers:"27000", letter:"àâèêìîòôùûÀÂÈÊÌÎÒÔÙÛǎǐǒǔǍƐǏƗǑƆǓɄāěēīŋōūĀĚĒĪŊŌŪɛɨɔʉʔ", mark:"̀̂̌̄", punctuation:"‰"},

"agr": { name:"Aguaruna (Awajún)", source:"udhr_agr", region:"sam", script:"latn", speakers:"38000", letter:"áíÁÍ", mark:"́", punctuation:"¡¿‐", local:"Awajún [ɑʋɑhʊ́n̪]"},

"aii": { name:"Assyrian Neo-Aramaic", source:"udhr_aii,e04c91748b5079b9b5077f2206f53c2223dc7839", region:"wasia", script:"syrc", speakers:"232300", letter:"ܒܘܕܩܐܬܝܠܦܙܢܫܥܡܣܪܟܗܚܓܛܨ", mark:"ܸܹܼ݂ܲܵܿ݁݀݇", punctuation:"܆،؛؟", local:"ܣܘܪܝܬ or ܣܘܪܬ [ˈsu:rɛt], [ˈsu:rɛθ], [ˈsu:rɪt], [ˈsu:rɪθ]"},

"ajg": { name:"Aja", source:"udhr_ajg", region:"afr", script:"latn", speakers:"550000", letter:"úóòùàèéìíõáÚÓÒÙÀÈÉÌÍÕÁƆƉƐƷŋŊɔɖɛʒ", mark:"̀́̃"},

"ak": { name:"Akan", source:"cldr_ak", region:"afr", script:"latn", speakers:"22000000", letter:"ɛɔƐƆ", punctuation:"‰", notes:"ak is a macrolanguage that encompasses the following more specific primary language subtags: tw (see <i>tw-akuapem</i> and <i>tw-asante</i>) <i>fat</i>. ak is often preferred by legacy applications rather than fat/tw (Fanti/Twi)."},

"alt": { name:"Southern Altai (Oirot, Oyrot)", source:"udhr_alt", region:"nasia", script:"cyrl", speakers:"57000", letter:"кижнҥтапэрешдлцязыгьйсмбјчӱоуӧвщюъфхКИЖНҤТАПЭРЕШДЛЦЯЗЫГЬЙСМБЈЧӰОУӦВЩЮЪФХ", punctuation:"‐","separator":"", symbol:"", local:"Алтай тили"},

"am": { name:"Amharic", source:"cldr_am,udhr_amh", region:"afr", script:"ethi", speakers:"21634396", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ","number":"፩፪፫፬፭፮፯፰፱፲፳፴", punctuation:"፡፣፤፥፦።‐–‹›«»", local:"አማርኛ [amarɨɲːa]"},

"amc": { name:"Amahuaca (Amawaka, Amaguaco, Ameuhaque, Ipitineri, Sayaco)", source:"udhr_amc", region:"sam", script:"latn", speakers:"310", letter:"óÓ", mark:"́"},

"ame": { name:"Yanesha' (Amuesha, Amoesha)", source:"udhr_ame,09030b03ba151c1dbce0f407f3bfeb6cc40bb4a2", region:"sam", script:"latn", speakers:"9800", letter:"ñëóíãõáÑËÓÍÃÕÁẽẼʼ", mark:"̃̈́", local:"Yaneshac̈h/Yanešač̣ [janeʃaˀt͡ʂʰ]", notes:"Combining characters are used in decomposed sequences with several consonants, such as m̃ñp̃t̃c̃c̈b̃."},

"ami": { name:"Amis", source:"udhr_ami", region:"easia", script:"ascii", speakers:"181000", local:"Pangcah [paŋt͡saʜ]"},

"amr": { name:"Amarakaeri", source:"udhr_amr", region:"sam", script:"latn", speakers:"500", mark:"̱", punctuation:"¿’"},

"ar": { name:"Arabic", source:"cldr_ar,udhr_arb,927e530285eebcb2cc78d1fee4df691ab6def77e", region:"wasia", script:"arab", speakers:"290000000", letter:"ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي", mark:"ًٌٍَُِّْٰٕٓٔ","number":"٠١٢٣٤٥٦٧٨٩", punctuation:"؉،؛؟٪٫٬‐–—…‰«»", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", aux:"ڢڧࢲـﷲٱ؍٬٭", local:"العَرَبِيَّة‎ [alʕaraˈbijja]", notes:"ar is a macrolanguage that encompasses the following more specific primary language subtags: <i>aao abh abv acm acq acw acx acy adf aeb aec afb ajp apc apd arb arq ars ary arz auz avl ayh ayl ayn ayp bbz pga shu ssh</i>.  ar is often preferred by legacy applications rather than arb (Standard Arabic)."},

"arl": { name:"Arabela (Chiripuno, Chiripunu)", source:"udhr_arl", region:"sam", script:"latn", speakers:"50", letter:"úÚ", mark:"́", punctuation:"¿", local:"Tapweyokwaka"},

"arn": { name:"Mapudungun (Mapuzugun, Mapudungu, Araucanian)", source:"udhr_arn", region:"sam", script:"latn", speakers:"260000", letter:"ñáíóÑÁÍÓ", mark:"̃́", notes:"This entry reflects only one of several competing and different writing systems using the Latin script, including Ragileo, Nhewenh and Azumchefi."},

"as": { name:"Assamese (Asamiya)", source:"cldr_as", region:"sasia", script:"beng", speakers:"15000000", letter:"অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযৰলৱশষসহ", mark:"়ংঁঃ্ািীুূৃেৈোৌৗ","number":"০১২৩৪৫৬৭৮৯", punctuation:"‰", aux:"৲ৎর", local:"অসমীয়া [ɔʃomia]"}, // checked against Wikipedia: only difference was rupee mark in CLDR aux, not in WP

"asa": { name:"Asu (Pare, Kipare, Casu, Chasu, Athu, Chathu)", source:"cldr_asa", region:"afr", script:"ascii", speakers:"500000"},

"ast": { name:"Asturian (Asturleonese, Bable, Leonese)", source:"cldr_ast,udhr_ast", region:"eur", script:"latn", speakers:"351791", letter:"áéíñóúüÁÉÍÑÓÚÜḥḷḤḶ", mark:"̣́̃̈", punctuation:"¡¿«»§‐–—…‘’“”†‡′″‰", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîïºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÒÔÖØÙÛ̧̀̆̂̊̄", local:"asturianu"},

"auc": { name:"Waorani (Huaorani, Sabela, Wao, Huao, Auishiri, Aushiri, Ssabela)", source:"udhr_auc", region:"sam", script:"latn", speakers:"1800", letter:"ñíéóÑÍÉÓ", mark:"̃́", local:"Wao Terero"},

"ayr": { name:"Central Aymara", source:"udhr_ayr", region:"sam", script:"latn", speakers:"2800000", letter:"ñïäíáëúÑÏÄÍÁËÚ", mark:"̃̈́", local:"Aymar aru [ajmaɾ ˈaɾu]", notes:"Macrolanguage is <i>ay</i>."},

"az-arab": { name:"Azerbaijani (Azeri) {Arabic}", source:"624d905f81c5ba4f15275776ccd818ef04d3c043", region:"wasia", script:"arab", speakers:"26000000", letter:"آؤئاتثجحخدذرزسشصضطظعغفقلمنهويٮپچژکگۆۇیەݣ", mark:"َْٓٔ", aux:"ـ", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", local:"آذربایجان دیلی [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:"az is a macrolanguage that encompasses the following more specific primary language subtags: <i>azb azj</i>. az is often preferred by legacy applications rather than azj (Azerbaijani, North).<br/>This list may be missing punctuation and numbers."},

"az-cyrl": { name:"Azerbaijani (Azeri) {Cyrillic}", source:"cldr_az_Cyrl,udhr_azj_cyrl", region:"wasia", script:"latn", speakers:"26000000", letter:"аәбвгғдежзийјкҝлмноөпрстуүфхһчҹшыАӘБВГҒДЕЖЗИЙЈКҜЛМНОӨПРСТУҮФХҺЧҸШЫ", mark:"̆", punctuation:"‐–—…‘’“”†‡′″‰§", aux:"цщъьэюяЦЩЪЬЭЮЯ", local:"Азәрбајҹан дили [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:"az is a macrolanguage that encompasses the following more specific primary language subtags: <i>azb azj</i>. az is often preferred by legacy applications rather than azj (Azerbaijani, North)."},

"az-latn": { name:"Azerbaijani (Azeri) {Latin}", source:"cldr_az,udhr_azj_latn", region:"wasia", script:"latn", speakers:"26000000", letter:"çöüÇÖÜƏğışĞŞİə", mark:"̧̇̆̈", punctuation:"§‐–—…‘’“”†‡′″", local:"Azərbaycan dili [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:"az is a macrolanguage that encompasses the following more specific primary language subtags: <i>azb azj</i>. az is often preferred by legacy applications rather than azj (Azerbaijani, North).<br/>This is based on the orthography introduced in 1991, rather than the 1929-1938 version."},

"ban-bali": { name:"Bali (Balinese) {Balinese}", source:"c6399677b86828b4f094bb4d4d3174446d92bef5", region:"seasia", script:"bali", speakers:"3300000", letter:"ᬅᬆᬇᬈᬉᬊᬋᬌᬍᬎᬏᬐᬑᬒᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬝᬞᬟᬠᬡᬢᬣᬤᬥᬦᬧᬨᬩᬪᬫᬬᬭᬮᬯᬰᬱᬲᬳ", mark:"ᬂᬃᬄ᬴ᬵᬶᬷᬸᬹᬺᬻᬼᬽᬾᬿᭀᭁᭂᭃ᭄", punctuation:"᭞᭟᭚᭛᭜᭝᭠","number":"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙", aux:"ᬀᬁ", local:"ᬪᬵᬱᬩᬮᬶ, ᬩᬲᬩᬮᬶ /baʃa bali/"},

"ban-latn": { name:"Bali (Balinese) {Latin}", source:"udhr_ban", region:"seasia", script:"ascii", speakers:"3300000", local:"Bhāṣa Bali, Basa Bali /baʃa bali/"},

"bas": { name:"Basaa (Bassa, Basa, Bissa, Mbene)", source:"cldr_bas", region:"afr", script:"latn", speakers:"300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƁƐǏǸǑƆǓāěēīńŋōūĀĚĒĪŃŊŌŪɓɛɔ", mark:"᷆᷇́̀̂̌̄", local:"ɓasaá"},

"bax-latn": { name:"Bamun (Bamum, Bamoun) {Latin}", source:"udhr_bax", region:"afr", script:"latn", speakers:"420000", letter:"úéêüûâôîáèùàÚÉÊÜÛÂÔÎÁÈÙÀṅṄ", mark:"́̂̈̀̇", punctuation:"‘’", local:"Shü Pamom [ʃŷpǎˑmə̀m]"},

"bax-bamu": { name:"Bamun (Bamum, Bamoun) {Bamum}", source:"820f9f09ce28a3610548365c402e624a9d6e7b32", region:"afr", script:"bamu", speakers:"420000", letter:"ꚠꚡꚢꚣꚤꚥꚦꚧꚨꚩꚪꚫꚬꚭꚮꚯꚰꚱꚲꚳꚴꚵꚶꚷꚸꚹꚺꚻꚼꚽꚾꚿꛀꛁꛂꛃꛄꛅꛆꛇꛈꛉꛊꛋꛌꛍꛎꛏꛐꛑꛒꛓꛔꛕꛖꛗꛘꛙꛚꛛꛜꛝꛞꛟꛠꛡꛢꛣꛤꛥꛦꛧꛨꛩꛪꛫꛬꛭꛮꛯ", mark:"꛰꛱", punctuation:"꛲꛳꛴꛵꛶꛷", local:"Shü Pamom [ʃŷpǎˑmə̀m]"},

"bba": { name:"Baatonum (Bariba, Baatombu, Baatonu, Barba, Barganchi, Bargawa, Bargu, Baruba, Berba, Bogung, Burgu)", source:"udhr_bba", region:"afr", script:"latn", speakers:"560000", letter:"àéùèóÀÉÙÈÓǹƐƆǸɛɔ", mark:"̀́"},

"bcl": { name:"Central Bicol (Bikol Naga, Bicolano)", source:"udhr_bcl", region:"seasia", script:"ascii", speakers:"2500000", notes:"Macrolanguage is <i>bik</i>."},

"be": { name:"Belorussian", source:"cldr_be,udhr_bel", region:"eur", script:"cyrl", speakers:"5000000", letter:"абвгджзеёійклмнопрстуўфхцчшыьэюяиАБВГДЖЗЕЁІЙКЛМНОПРСТУЎФХЦЧШЫЬЭЮЯИʼ", mark:"̈̆", punctuation:"‐«»", aux:"́", local:"беларуская мова [bʲelaˈruskaja ˈmova]"},

"bem": { name:"Bemba (ChiBemba, Cibemba, Ichibemba, Icibemba, Chiwemba)", source:"cldr_bem,udhr_bem", region:"afr", script:"ascii", speakers:"4100000", local:"Chibemba"},

"bez": { name:"Bena", source:"cldr_bez", region:"afr", script:"ascii", speakers:"670000", local:"Ekibena"},

"bg": { name:"Bulgarian", source:"cldr_bg,udhr_bul", region:"eur", script:"cyrl", speakers:"9000000", letter:"абвгдежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ", mark:"̆", punctuation:"‐–—…‘‚“„″§", symbol:"№", aux:"ѐёѝыѣэѫЀЁЍЫѢЭѪ̀̈", local:"български [ˈbɤɫɡɐrski]"},

"bho": { name:"Bhojpuri", source:"udhr_bho", region:"sasia", script:"deva", speakers:"51000000", letter:"मनवधकरखतसयषटउचबहलघणपगठदभअएआओथशजडइछऔफढईझऐञ", mark:"ािंु्ेोी़ूौृै", punctuation:"।", local:"भोजपुरी (bhōjpurī)"},

"bin": { name:"Edo (Bini)", source:"udhr_bin,5d2167e3d40aca7074b7d33835b1aa93e09cc088", region:"afr", script:"ascii", speakers:"1000000", letter:"ÀÁÈÉÌÍÒÓÙÚàáèéìíòóùúẸẹỌọ", mark:"̣̀́", local:"Ẹ̀dó", notes:"Acute and grave accents are used for tones, but the source didn't explicitly list all possible combinations, so the list of precomposed characters shown with those accents is a guess."},

"blt": { name:"Tai Dam (Black Tai)", source:"udhr_blt,a220b3a422c42646d07427217c800b9d9663991f", region:"seasia", script:"tavt", speakers:"760000", letter:"ꪀꪁꪂꪃꪄꪅꪆꪇꪈꪉꪊꪋꪌꪍꪎꪏꪐꪑꪒꪓꪔꪕꪖꪗꪘꪙꪚꪛꪜꪝꪞꪟꪠꪡꪢꪣꪤꪥꪦꪧꪨꪩꪪꪫꪬꪭꪮꪯꪱꪵꪶꪹꪺꪻꪼꪽꫀꫂꫛꫜꫝ", mark:"ꪴꪰꪲꪳꪷꪸꪾ꪿꫁", aux:"꫞꫟", local:"ꪼꪕꪒꪾ (tai dam)"},

"bm": { name:"Bambara (Bamanankan)", source:"cldr_bm,udhr_bam", region:"afr", script:"latn", speakers:"4100000", letter:"ƐƝƆŋŊɛɲɔ", punctuation:"’", local:"bamanankan"},

"bm-nkoo": { name:"Bambara (N'Ko)", source:"4dd61a887ac709179e0e709861288a0b0098c5d8", region:"afr", script:"nkoo", speakers:"4100000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߴߵߺ", mark:"߲߫߬߭߮߯߰߱߳","number":"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶", local:"ߓߡߊߣߊ߲ߞߊ߲ [bamanãkã]"},

"bn": { name:"Bengali (Bangla)", source:"cldr_bn,udhr_ben,f10b0a319d5c8ff26cc820cd9c84bc1150888ce9", region:"sasia", script:"beng", speakers:"260000000", letter:"অআইঈউঊঋএঐওঔকষখগঘঙচছজঝঞটঠডঢণতৎথদধনপফবভমযরলশসহঽ", mark:"়ংঃঁ্ািীুূৃেৈোৌৗ","number":"১২৩৪৫৬৭৮৯০", punctuation:"।", symbol:"৺৳", other:"‌‍", aux:"ৠঌৡৄৢৣ", local:"বাংলা /ˈbʌŋlə/"},

"bo": { name:"Tibetan", source:"cldr_bo,udhr_bod,3d4a46a3bc9bb2a2c900adf645b07f641ef2c2bf", region:"easia", script:"tibt", speakers:"1200000", letter:"ཀཁགངཅཆཇཉཊཋཌཎཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤཥསཧཨཪ", mark:"ིེོུྐྑྒྔྕྖྗྙྚྛྜྞྟྠྡྣྤྥྦྨྩྪྫྭྮྯྰྱྲླྴྵྶྷྸྺྻྼ", punctuation:"༄༅༈་༌།༎","number":"༠༡༢༣༤༥༦༧༨༩", aux:"ༀ", local:"བོད་སྐད་ (Böké); ལྷ་སའི་སྐད་ (Lhaséké)"},

"boa": { name:"Bora", source:"udhr_boa", region:"sam", script:"latn", speakers:"2400", letter:"úáéñíóÚÁÉÑÍÓɨȉƗȈ", mark:"́̃̏", local:"Meamuyna"},

"br": { name:"Breton", source:"cldr_br,udhr_bre", region:"eur", script:"latn", speakers:"226000", letter:"êñùÊÑÙʼ", mark:"̂̃̀", punctuation:"’–", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèëíìîïóòôöøúûüÿÁÀÂÅÄÃÆÇÉÈËÍÌÎÏÓÒÔÖØÚÛǗ̧̆̊̈̄", local:"brezhoneg [bʁeˈzõːnɛk] or [brəhõˈnek]"},

"brx": { name:"Bodo (Mech)", source:"cldr_brx", region:"sasia", script:"deva", speakers:"1500000", letter:"अआइईउऊऍएऐऑओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलळवशषसह", mark:"़ँंािीुूृॅेैॉोौ्", local:"बर'/बड़ [bɔɽo]"},

"bs-cyrl": { name:"Bosnian {Cyrillic}", source:"cldr_bs_Cyrl,udhr_bos_cyrl", region:"eur", script:"cyrl", speakers:"~3000000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–—…‘’“”′″", local:"босански [bɔ̌sanskiː]", notes:"Macrolanguage is <i>sh</i>."},

"bs-latn": { name:"Bosnian {Latin}", source:"cldr_bs,udhr_bos_latn", region:"eur", script:"latn", speakers:"~3000000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’“”′″", local:"bosanski [bɔ̌sanskiː]", notes:"Macrolanguage is <i>sh</i>."},

"buc": { name:"Bushi (Shibushi, Kibushi)", source:"udhr_buc,f977666b87e87d0adfd3e3683b6d046a9de0abf5", region:"afr", script:"latn", speakers:"47900", letter:"ìàãÌÀÃɓŋĩŊĨƁɗƊ", mark:"̀̃", punctuation:"’"},

"bug": { name:"Buginese", source:"d997476f6f5d5a7525a2cdf2d0790e944bfa83f2", region:"seasia", script:"bugi", speakers:"5000000", letter:"ᨀᨁᨂᨄᨅᨆᨈᨉᨊᨌᨍᨎᨐᨑᨒᨓᨔᨖᨃᨏᨋᨇᨕ", mark:"ᨘᨗᨙᨚᨛ", punctuation:"᨞᨟", local:"ᨅᨔ ᨕᨘᨁᨗ (basa ugi)"},

"bug-latn": { name:"Buginese {Latin}", source:"udhr_bug", region:"seasia", script:"ascii", speakers:"5000000", local:"Basa Ugi"},

"bum": { name:"Bulu", source:"cldr_bum,udhr_btb", region:"afr", script:"latn", speakers:"860000", letter:"óñôéáÓÑÔÉÁōńŌŃ", mark:"̄́̃̂"},

"ca": { name:"Catalan", source:"cldr_ca,udhr_cat", region:"eur", script:"latn", speakers:"4100000", letter:"àçéèíïóòúüÀÇÉÈÍÏÓÒÚÜ", mark:"̧̀́̈", punctuation:"·¡¿«»§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŀŏōœŭūĂĀĔĒĬĪĿŎŌŒŬŪŸáâåäãæêëìîñºôöøùûÿÁÂÅÄÃÆÊËÌÎÑÔÖØÙÛ̆̂̊̃̄", local:"català [kətəˈla]"},

"cab": { name:"Garifuna", source:"udhr_cab", region:"cam", script:"latn", speakers:"190000", letter:"üúñáéíèóÜÚÑÁÉÍÈÓ", mark:"̈́̃̀"},

"cak": { name:"Kaqchikel (Kaqchiquel, Cakchiquel, Cakchiquiel)", source:"udhr_cak", region:"cam", script:"latn", speakers:"450000", letter:"äïöüÄÏÖÜ", mark:"̈"},

"cbi": { name:"Chachi (Cha'palaa, Cayapa)", source:"udhr_cbi", region:"sam", script:"latn", speakers:"10000", letter:"ñóúáíéÑÓÚÁÍÉ", mark:"̃́", punctuation:"¿¡"},

"cbr": { name:"Cashibo (Caxibo, Cacibo, Cachibo, Cahivo, Cacataibo, Managua, Hagueti)", source:"udhr_cbr", region:"sam", script:"latn", speakers:"1200", letter:"ñëúíáéóÑËÚÍÁÉÓ", mark:"́̃̈́", punctuation:"¿"},

"cbs": { name:"Cashinahua (Kashinawa, Kaxinawá, Caxinawá, Hantxa Kuin, Huni Kui)", source:"udhr_cbs", region:"sam", script:"latn", speakers:"1200", letter:"íÍ", mark:"́", punctuation:"¿"},

"cbt": { name:"Chayahuita", source:"udhr_cbt", region:"sam", script:"latn", speakers:"14000", letter:"ëóíËÓÍ", mark:"̈́", punctuation:"¿"},

"cbu": { name:"Candoshi-Shapra (Candoxi, Kandoshi, Murato)", source:"udhr_cbu", region:"sam", script:"latn", speakers:"1120", letter:"íáÍÁ", mark:"́", punctuation:"¿¡"},

"ccp": { name:"Chakma", source:"cldr_ccp,udhr_ccp", region:"sasia", script:"cakm", speakers:"330000", letter:"𑄟𑄚𑄃𑄇𑄥𑄢𑄝𑄅𑄉𑄌𑄙𑄡𑄠𑄖𑄑𑄎𑄘𑄦𑄣𑄛𑄏𑄈𑄊𑄜𑄓𑄋𑄗𑄞𑄍𑄕𑄒𑄄𑄆𑄐𑄔𑄤", mark:"𑄬𑄭𑄴𑄧𑄁𑄮𑄳𑄨𑄩𑄪𑄱𑄰𑄫𑄯𑄲𑄀𑄂","number":"০১২৩৪৫৬৭৮৯𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿𑄶", punctuation:"𑅁𑅃𑅂𑅀‰‐–—…‘’“”†‡′″§", notes:"UDHR uses Chakma digits, whereas CLDR shows only Bengali digits.", local:"𑄌𑄋𑄴𑄟𑄳𑄦 𑄞𑄌𑄴 (changmha bhach)"},

"ce": { name:"Chechen", source:"cldr_ce", region:"eur", script:"cyrl", speakers:"1400000", letter:"аьбвгӏдеёжзийкхлмнопрстуфцчшщъыэюяАЬБВГӀДЕЁЖЗИЙКХЛМНОПРСТУФЦЧШЩЪЫЭЮЯ", mark:"̈̆","number":"", punctuation:"‐–—…‘‚“„«»§", local:"нохчийн мотт [ˈnɔx.t͡ʃiːn mu͜ɔt]"},

"ceb": { name:"Cebuano (Bisaya)", source:"cldr_ceb,udhr_ceb", region:"seasia", script:"ascii", speakers:"16000000", notes:"Wikipedia suggests that an acute accent is used to indicate stress."},

"cfm": { name:"Falam Chin (Baro Halam)", source:"udhr_flm,1f092f9b4f53e2b4ec5dc91221d0cdb55c50c844", region:"seasia", script:"ascii", speakers:"107000", letter:"Ṭṭ", mark:"̣", local:"Laiṭawng"},

"cgg": { name:"Chiga (Rukiga, Ruchiga, Kiga)", source:"cldr_cgg", region:"afr", script:"ascii", speakers:"1600000", local:"Rukiga"},

"ch": { name:"Chamorro", source:"udhr_cha,e97485e1a7f539f982e7cfeb56ea244d8b39af8a", region:"oce", script:"ascii", speakers:"58000", letter:"ÅÑåñ", mark:"̃̊", local:"Finu' Chamoru /finuʔ tʃəˈmɒroʊ/"},

"chj": { name:"Ojitlán Chinantec", source:"udhr_chj", region:"cam", script:"latn", speakers:"38000", letter:"öíäñáéúïüëóÖÍÄÑÁÉÚÏÜËÓ", mark:"̈́̃", punctuation:"–", symbol:"°"},

"chk": { name:"Chuukese (Trukese)", source:"udhr_chk", region:"oce", script:"ascii", speakers:"51000"},

"chr": { name:"Cherokee", source:"cldr_chr,udhr_chr_cased,udhr_chr_uppercase,4be08b04f56e7763cde42dfbebfb49497c506a2b", region:"nam", script:"cher", speakers:"1520", letter:"ᏸᏹᏺᏻᏼᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴꭰꭱꭲꭳꭴꭵꭶꭷꭸꭹꭺꭻꭼꭽꭾꭿꮀꮁꮂꮃꮄꮅꮆꮇꮈꮉꮊꮋꮌꮍꮎꮏꮐꮑꮒꮓꮔꮕꮖꮗꮘꮙꮚꮛꮜꮝꮞꮟꮠꮡꮢꮣꮤꮥꮦꮧꮨꮩꮪꮫꮬꮭꮮꮯꮰꮱꮲꮳꮴꮵꮶꮷꮸꮹꮺꮻꮼꮽꮾꮿ", aux:"̣̱̤̰", local:"ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ [dʒalaˈɡî ɡawónihisˈdî]"},

"cic": { name:"Chickasaw", source:"udhr_cic", region:"nam", script:"latn", speakers:"75", letter:"óáíÓÁÍ", mark:"̱́", punctuation:"—"},

"cjk": { name:"Chokwe", source:"udhr_cjk", region:"afr", script:"ascii", speakers:"980000"},

"cjs": { name:"Shor", source:"udhr_cjs,eec6428d9ce711e3709def0279121e23a4bf488a", region:"nasia", script:"cyrl", speakers:"2800", letter:"кижнтолағыңудерцязчқшйъӱгьсмбюпӧэвфхКИЖНТОЛАҒЫҢУДЕРЦЯЗЧҚШЙЪӰГЬСМБЮПӦЭВФХЁЩщё", mark:"̆̈", local:"Шор тили (šor tili), Тадар тили (tadar tili)"},

"ckb": { name:"Central Kurdish (Sorani)", source:"cldr_ckb,fa1e79cbcb9ca9906ebecd0c8e47c135d5a380c1", region:"wasia", script:"arab", speakers:"7250000", letter:"ئابپتجچحخدرزڕژسشعغفڤقکگلڵمنھەوۆیێي", mark:"ٔ", punctuation:"٫٬٪؉","number":"٠١٢٣٤٥٦٧٨٩", aux:"ًٌٍَُِّْـ", local:"کوردیی ناوەندی (Kurdîy nawendî), سۆرانی, (Soranî)", notes:"Macrolanguage is <i>ku</i>, which includes <i>ckb</i> <i>kmr</i> <i>sdh</i>."},

"ckb-latn": { name:"Central Kurdish (Sorani) {Latin}", source:"udhr_ckb,565fb1c44c0ddde28a6bec9836935ab74c3f72c9", region:"wasia", script:"latn", speakers:"7250000", letter:"şŞûîêçÛÎÊÇ", mark:"̧̂", aux:"̣̈̌ḤḥḦḧẌẍŁłŇňŘřÜüʿ", local:"Kurdîy nawendî, Soranî", notes:"Macrolanguage is <i>ku</i>, which includes <i>ckb</i> <i>kmr</i> <i>sdh</i>."},

"cnh": { name:"Haka Chin (Lai)", source:"udhr_cnh", region:"seasia", script:"ascii", speakers:"446264"},

"cni": { name:"Asháninka", source:"udhr_cni", region:"sam", script:"latn", speakers:"~35000", letter:"áéÁÉÑñ", mark:"́̃"},

"co": { name:"Corsican", source:"udhr_cos", region:"eur", script:"latn", speakers:"200000", letter:"àèìùòÀÈÌÙÒ", mark:"̀", punctuation:"’"},

"cof": { name:"Colorado (Tsafiki, Tsáchila)", source:"udhr_cof", region:"sam", script:"latn", speakers:"2300", letter:"íÍ", mark:"́"},

"cot": { name:"Caquinte (Poyenisati)", source:"udhr_cot", region:"sam", script:"latn", speakers:"500", letter:"óÓ", mark:"́", punctuation:"¿"},

"cpu": { name:"Pichis Ashéninka", source:"udhr_cpu", region:"sam", script:"latn", speakers:"~50000", letter:"ñáéÑÁÉ", mark:"̃́"},

"cri": { name:"Sãotomense (Forro Creole, Santomense)", source:"udhr_007", region:"afr", script:"latn", speakers:"70000", letter:"çóêéáâôºíÇÓÊÉÁÂÔÍ", mark:"̧́̂"},

"crs": { name:"Seychellois Creole (Seselwa)", source:"udhr_crs", region:"afr", script:"latn", speakers:"73000", letter:"íÍ", mark:"́", punctuation:"’"},

"cs": { name:"Czech (Bohemian)", source:"cldr_cs,udhr_ces", region:"eur", script:"latn", speakers:"10700000", letter:"áéíóúýÁÉÍÓÚÝčďěňřšťůžČĎĚŇŘŠŤŮŽ", mark:"́̌̊", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīľłŏōœŕŭūĂĀĔĒĬĪĽŁŎŌŒŔŬŪŸàâåäãæçèêëìîïñòôöøùûüÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̈̃̄"},

"csa": { name:"Chiltepec Chinantec", source:"udhr_csa", region:"cam", script:"latn", speakers:"1800", letter:"öüïóáñäëéíúÖÜÏÓÁÑÄËÉÍÚ", mark:"̷̱̍̎̈́̃", punctuation:"†"},

"csw": { name:"Swampy Cree (Maskekon, Omaškêkowak, Omushkego)", source:"udhr_csw", region:"nam", script:"cans", speakers:"2500", letter:"ᐁᐢᐱᑕᑲᒥᐠᐊᑭᒋᐃᑗᐎᐣᓂᑯᓯᓇᐅᔑᒧᓀᐡᑐᑌᑎᐸᐗᐳᒪᒶᐌᔭᓄᑾᔦᒣᐤᓴᓶᔕᑴᐯᐟᑫᓱᓉᐺᑡᐨᔓᑺᓋᔗᔾᔀᑊᔡᒬᒼ", punctuation:"᙮"},

"ctd": { name:"Tedim Chin", source:"udhr_ctd", region:"seasia", script:"ascii", speakers:"340000"},

"cu": { name:"Church Slavonic (Church Slavic, New Church Slavonic)", source:"cldr_cu", region:"eur", script:"cyrl", speakers:"0", letter:"абвгдеєжѕзиіїйклмнѻоѡѽѿпрстуфхцчшщъыьѣюѧѫѯѱѳѵѷАБВГДЕЄЖЅЗИІЇЙКЛМНѺОѠѼѾПРСТУФХЦЧШЩЪЫЬѢЮѦѪѮѰѲѴѶꙿꙁꙍꙋꙗꙀꙌꙊꙖⸯ", mark:"҇҃ⷠⷡⷢⷣⷤⷥⷦⷧⷨⷩⷪⷬⷭⷯⷱⷴ꙽", punctuation:"꙾꙳–—‐", symbol:"҂", aux:"҈҉҄ҥҁџѥѩѭҤҀЏѤѨѬⷶⷷⷸⷫⷵⷮⷹⷰⷲⷳⷺⷻⷼⷽⷾⷿ꙰꙱꙲꙯ꙣꙴꙃꙅꙵꙶꙇꙉꙥꙧꙩꙫꙭꙮꚙꚛꙷꚞꙻꙡꙏꙸꙑꙹꙺꙓꙕꚟꙙꙛꙝꙟꙢꙂꙄꙆꙈꙤꙦꙨꙪꙬꚘꚚꙠꙎꙐꙒꙔꙘꙚꙜꙞ︯︮"},

"cy": { name:"Welsh (Cymraeg, y Gymraeg)", source:"cldr_cy,udhr_cym", region:"eur", script:"latn", speakers:"700000", letter:"áàâäéèêëíìîïóòôöúùûüýÿÁÀÂÄÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜÝŵŷŴŶŸẃẁẅỳẂẀẄỲ", mark:"́̀̂̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪåãæçñøÅÃÆÇÑØ̧̆̊̃̄"},

"da": { name:"Danish", source:"cldr_da,udhr_dan", region:"eur", script:"latn", speakers:"5500000", letter:"æøåÆØÅ", mark:"̊", punctuation:"§‐–…‘’“”†′″", aux:"œŒŸǿǾáàâçéèêëíîïñóôúùûÿüäöÁÀÂÇÉÈÊËÍÎÏÑÓÔÚÙÛÜÄÖ̧́̀̂̈̃"},

"dag": { name:"Dagbani (Dagbanli, Dagbanle)", source:"udhr_dag", region:"afr", script:"latn", speakers:"1160000", letter:"ƐƆƔƷŋŊɛɔɣʒ"},

"dav": { name:"Taita (Dawida)", source:"cldr_dav", region:"afr", script:"ascii", speakers:"400000"},

"ddn": { name:"Dendi", source:"udhr_ddn", region:"afr", script:"latn", speakers:"32000", letter:"ãâõÃÂÕǎǒƆƐǍƉǑŋŊɔɛɖ", mark:"̃̌̂"},

"de": { name:"German", source:"cldr_de,udhr_udhr_deu_1996", region:"eur", script:"latn", speakers:"95000000", letter:"äößüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçéèêëíìîïñóòôøúùûÿÁÀÂÅÃÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̇́̀̆̂̊̃̄"},

"dga": { name:"Dagaare", source:"udhr_dga", region:"afr", script:"latn", speakers:"1100000", letter:"ãÃƐƆũŨɛɔ", mark:"̃"},

"dhw": { name:"Danwar (Danuwar, Denwar, Dhanvar, Dhanwar, Rai)", source:"udhr_dhw", region:"sasia", script:"ascii", speakers:"46000"},

"dje": { name:"Zarma (Djerma, Dyabarma, Dyarma, Dyerma, Adzerma, Zabarma, Zarbarma, Zarmaci, Zerma)", source:"cldr_dje", region:"afr", script:"latn", speakers:"24000000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"dsb": { name:"Lower Sorbian", source:"cldr_dsb", region:"eur", script:"latn", speakers:"6900", letter:"óÓčćěłńŕšśžźČĆĚŁŃŔŠŚŽŹ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœřşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŘŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋"},

"dua": { name:"Duala (Douala, Diwala, Dwela, Dualla, Dwala)", source:"cldr_dua", region:"afr", script:"latn", speakers:"90000", letter:"áéíóúÁÉÍÓÚƁƊƐƆŋūŊŪɓɗɛɔ", mark:"́̄"},

"duu": { name:"Drung (Dulong, Derung, Rawang, Trung)", source:"udhr_020", region:"easia", script:"ascii", speakers:"14000"},

"dv": { name:"Dhivehi (Maldivian, Divehi)", source:"udhr_div,e9188c572c9c158255cede2459f076ecb3b50b9f", region:"sasia", script:"thaa", speakers:"340000", letter:"ޑސމބރގއދޖލހޢނފކށވޙޤތޕޓޔޝޞޅޚޣޒޠޗޏޘޛޟޜޡޥޱ", mark:"ިެްަީުާޮޭޫޯ", punctuation:"،؛"},

"dyo": { name:"Jola-Fonyi", source:"cldr_dyo,udhr_dyo,cd01ae44156075d3e8aa249200adf6c04edb6acb", region:"afr", script:"latn", speakers:"410000", letter:"áéíñóúàÁÉÍÑÓÚÀŋŊ", mark:"́̃̀", punctuation:"“”‰", symbol:"°"},

"dyu": { name:"Dyula (Jula, Dioula)", source:"udhr_dyu", region:"afr", script:"latn", speakers:"2500000", letter:"úàìóáòùèíéÚÀÌÓÁÒÙÈÍÉƐƆƝŋŊɛɔɲ", mark:"́̀", punctuation:"’‘"},

"dz": { name:"Dzongkha (Bhutanese)", source:"cldr_dz,udhr_dzo", region:"sasia", script:"tibt", speakers:"171080", letter:"ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ", mark:"ིེོུྐྑྒྔྗྙྟྠྡྣྤྥྦྨྩྪྫྭྱྲླྵྶྷཱྕ", punctuation:"༼༽༄༅༆༈༉༊࿐࿑༒࿒࿓࿔༌།༎༏༐༑༔་§‐–—…‘’“”†‡","number":"༡༢༣༤༥༦༧༨༩༠", symbol:"༶྾྿༴", aux:"྄ཊཋཌཎཾཥྀཻཽྚྛྜྞྺྻྼ"},

"ebu": { name:"Embu (Kîembu)", source:"cldr_ebu", region:"afr", script:"latn", speakers:"320000", letter:"ĩũĨŨ", mark:"̃"},

"ee": { name:"Ewe", source:"cldr_ee,udhr_ewe", region:"afr", script:"latn", speakers:"20000000", letter:"áàãéèíìóòõúùÁÀÃÉÈÍÌÓÒÕÚÙƒƉƐƑƔƆƲĩŋũĨŊŨẽẼɖɛɣɔʋ", mark:"́̀̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕĭŏœŭĂĀĔĬŎŒŬŸâåäæçêëîïñôöøûüÿÂÅÄÆÇÊËÎÏÑÔÖØÛÜ̧̆̂̊̈̄"},

"el": { name:"Greek", source:"cldr_el,udhr_udhr_ell_monotonic,f31d3befd33d4e7a224b580bd5c3737769bba189", region:"eur", script:"grek", speakers:"12000000", letter:"ΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ", mark:"́̈", punctuation:"«»§‐–—…", aux:"ᾺὰἈἀἉἁἊἂἋἃἌἄἍἅἎἆἏἇᾲᾴᾶᾷᾸᾰᾹᾱᾼᾳᾈᾀᾉᾁᾊᾂᾋᾃᾌᾄᾍᾅᾎᾆᾏᾇῈὲἘἐἙἑἚἒἛἓἜἔἝἕῊὴἨἠἩἡἪἢἫἣἬἤἭἥἮἦἯἧῆῌῃῂῄῇᾘᾐᾙᾑᾚᾒᾛᾓᾜᾔᾝᾕᾞᾖᾟᾗῚὶἸἰἹἱἺἲἻἳἼἴἽἵἾἶἿἷῘῐῙῑῒῖῗῸὸὈὀὉὁὊὂὋὃὌὄὍὅῪὺὐὒὔὖὙὑὛὓὝὕὟὗῨῠῩῡῢῦῧῺὼὨὠὩὡὪὢὫὣὬὤὭὥὮὦὯὧῼῳᾨᾠᾩᾡᾪᾢᾫᾣᾬᾤᾭᾥᾮᾦᾯᾧῲῴῶῷῤῬῥ̀̄̆̓̔͂ͅ"},

"emk": { name:"Eastern Maninkakan", source:"udhr_emk", region:"afr", script:"latn", speakers:"5000000", letter:"ɲɛɔƝƐƆ"},

"emk-nkoo": { name:"Eastern Maninkakan (N'Ko)", source:"4dd61a887ac709179e0e709861288a0b0098c5d8", region:"afr", script:"nkoo", speakers:"5000000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߴߵߺ", mark:"߲߫߬߭߮߯߰߱߳","number":"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶"},

"en": { name:"English", source:"cldr_en,udhr_eng", region:"eur", script:"ascii", speakers:"~380000000", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄"},

"eo": { name:"Esperanto", source:"cldr_eo,udhr_epo", region:"eur", script:"latn", speakers:"~3000", letter:"ĉĝĥĵŝŭĈĜĤĴŜŬ", mark:"̂̆", punctuation:"‐–—…‘’“”"},

"es": { name:"Spanish (Castilian)", source:"cldr_es,udhr_spa", region:"eur", script:"latn", speakers:"480000000", letter:"áéíïñóúüýÁÉÍÏÑÓÚÜÝ", mark:"́̈̃", punctuation:"‐–—…‘’“”†‡′″¡¿«»§", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÒÔÖØÙÛ̧̀̆̂̊̄"},

"et": { name:"Estonian", source:"cldr_et,udhr_est", region:"eur", script:"latn", speakers:"1100000", letter:"õäöüÕÄÖÜšžŠŽ", mark:"̌̃̈", aux:"āēīŏōœūĀĒĪŎŌŒŪáàâåæçéèêëíìîïñóòôøúùûÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̂̊̄̆"},

"eu": { name:"Basque", source:"cldr_eu,udhr_eus", region:"eur", script:"latn", speakers:"550000", letter:"çñÇÑ", mark:"̧̃", punctuation:"§‐–—…‘’“”†‡′″","separator":"", symbol:"", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæéèêëíìîïóòôöøúùûüÿÁÀÂÅÄÃÆÉÈÊËÍÌÎÏÓÒÔÖØÚÙÛǗ̀̆̂̊̈̄"},

"eve": { name:"Even (Lamut, Ewen, Eben, Orich, Ilqan)", source:"udhr_eve", region:"nasia", script:"cyrl", speakers:"5700", letter:"стаьябэйилокчурмнхдеҥгөыцпвһюзѳшжъфщСТАЬЯБЭЙИЛОКЧУРМНХДЕҤГӨЫЦПВҺЮЗѲШЖЪФЩ", mark:"̆", punctuation:"‐"},

"evn": { name:"Evenki (Tungus, Solon)", source:"udhr_evn", region:"nasia", script:"cyrl", speakers:"17000", letter:"упкатңилэбгдерӣынӯмвчзоюцяьйсёһъщжхфУПКАТҢИЛЭБГДЕРӢЫНӮМВЧЗОЮЦЯЬЙСЁҺЪЩЖХФ", mark:"̄̆̈", punctuation:"–"},

"ewo": { name:"Ewondo (Kolo)", source:"cldr_ewo", region:"afr", script:"latn", speakers:"580000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƏƐǏǸǑƆǓěńŋĚŃŊəɛɔ", mark:"́̀̂̌"},

"fa": { name:"Persian (Farsi)", source:"cldr_fa,udhr_pes", region:"wasia", script:"arab", speakers:"~50000000", letter:"آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةیإي", mark:"ًٌٍِّٕٔٓ", punctuation:"٫٬٪؉،؛؟‰‐…‹›«»","number":"۰۱۲۳۴۵۶۷۸۹", symbol:"−", other:"‌", aux:"ـَُِْٰٖإكىٕ"},

"fat": { name:"Fanti (Fantse, Mfantse, Fante)", source:"udhr_aka_fante", region:"afr", script:"latn", speakers:"1900000", letter:"ãõÃÕƆƐɔɛ", mark:"̃", notes:"Macrolanguage is ak."},

"ff": { name:"Fulah (Fulani)", source:"cldr_ff", region:"afr", script:"latn", speakers:"24000000", letter:"ñÑƴƁƊƳŋŊɓɗ", mark:"̃"},

"fi": { name:"Finnish", source:"cldr_fi,udhr_fin", region:"eur", script:"latn", speakers:"5400000", letter:"åäöÅÄÖšžŠŽ", mark:"̌̊̈", punctuation:"»§‐–…’”", aux:"ăąāćčċďđěėęēğģħįīıķĺľļłńňņŋőœŕřśŝşťţŧůűųūźżĂĄĀĆČĊĎĐĚĖĘĒĞĢĦİĮĪĶĹĽĻŁŃŇŅŊŐŒŔŘŚŜŞŤŢŦŮŰŲŪŸŹŻʒǧǥȟǩșțǯǦǤȞǨȘȚƷǮáàâãçðéèêëíîïñóòôõßúùûýÿüþæøÁÀÂÃÇÐÉÈÊËÍÎÏÑÓÒÔÕÚÙÛÝÜÞÆØ̨̧̦̇́̀̆̂̃̄̋"},

"fil": { name:"Filipino", source:"cldr_fil", region:"seasia", script:"latn", speakers:"28000000", letter:"ñÑ", mark:"̃", punctuation:"§‐–—…‘’“”′″", aux:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ́̀̂"},

"fj": { name:"Fijian", source:"udhr_fij", region:"oce", script:"ascii", speakers:"339210"},

"fo": { name:"Faroese", source:"cldr_fo,udhr_fao", region:"eur", script:"latn", speakers:"66000", letter:"áðíóúýæøÁÐÍÓÚÝÆØ", mark:"́", punctuation:"́§‐–…‘’“”†′″"},

"fon": { name:"Fon", source:"udhr_fon", region:"afr", script:"latn", speakers:"2200000", letter:"óéòèáúàìùíÓÉÒÈÁÚÀÌÙÍǎǐǔƐƆƉǍǏǓěđĚĐɛɔɖ", mark:"́̌̀"},

"fr": { name:"French", source:"cldr_fr,udhr_fra", region:"eur", script:"latn", speakers:"150000000", letter:"àâæçéèêëîïôùûüÿÀÂÆÇÉÈÊËÎÏÔÙÛÜœŒŸ", mark:"̧̀̂́̈", punctuation:"«»§‐–—…’“”†‡", aux:"āćēīĳřšſĀĆĒĪĲŘŠǔǓáåäãíìñóòöõøßúÁÅÄÃÍÌÑÓÒÖÕØÚ̊̃̄̌"},

"fuf": { name:"Pular", source:"udhr_fuf", region:"afr", script:"ascii", speakers:"3000000"},

"fuf-adlm": { name:"Pular (Adlam)", source:"udhr_fuf_adlm", region:"afr", script:"adlm", speakers:"3000000", letter:"𞤩𞤢𞤲𞤺𞤭𞤣𞤫𞤸𞤤𞤴𞤳𞤮𞤪𞤶𞤯𞤼𞤵𞤱𞤬𞤥𞤧𞤨𞤻𞤦𞤷𞤰𞤾𞤇𞤀𞤐𞤘𞤋𞤁𞤉𞤖𞤂𞤒𞤑𞤌𞤈𞤔𞤍𞤚𞤓𞤏𞤊𞤃𞤅𞤆𞤙𞤄𞤕𞤎𞤜ŋŊƭƬ", mark:"𞥆𞥅𞥄", punctuation:"،؛’⹁","number":"𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙𞥑𞥐"},

"fur": { name:"Friulian (Friulan, Eastern Ladin)", source:"cldr_fur,udhr_fur", region:"eur", script:"latn", speakers:"600000", letter:"àâçèêìîòôùûÀÂÇÈÊÌÎÒÔÙÛ", mark:"̧̀̂", aux:"čğšČĞŠåéëïñóüÅÉËÏÑÓÜ̊̌́̈̆̃"},

"fy": { name:"West Frisian", source:"cldr_fy,udhr_fri", region:"eur", script:"latn", speakers:"470000", letter:"ûâêúôòëïáàäéèíóöüýÛÂÊÚÔÒËÏÁÀÄÉÈÍÓÖÜÝ", mark:"̂́̀̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"æùÆÙ"},

"ga": { name:"Irish", source:"cldr_ga,udhr_gle", region:"eur", script:"latn", speakers:"74000", letter:"áéíóúÁÉÍÓÚ", mark:"́", aux:"ḃḋḟṁṗṡṫḂḊḞṀṖṠṪċġĊĠåÅ̊̇"},

"gaa": { name:"Ga", source:"udhr_gaa", region:"afr", script:"latn", speakers:"745000", letter:"ãÃƆƐŋŊɔɛ", mark:"̃"},

"gag": { name:"Gagauz", source:"udhr_gag", region:"eur", script:"latn", speakers:"590000", letter:"üäêöçÜÄÊÖÇışţŞİŢ", mark:"̧̇̈̂", punctuation:"—"},

"gd": { name:"Gaelic (Scots Gaelic)", source:"cldr_gd,udhr_gla", region:"eur", script:"latn", speakers:"57000", letter:"ìàòèùÌÀÒÈÙ", mark:"̀", aux:"ḋḟṁṗṡṫḊḞṀṖṠṪăāċĕēġĭīıłŏōœşŭūĂĀĊĔĒĠĬĪŁŎŌŒŞŬŪŸșȘáâåäãæçéêëíîïñóôöøúûüÿÁÂÅÄÃÆÇÉÊËÍÎÏÑÓÔÖØÚÛǗ̧̦̆̂̊̈̃̄̇"},

"gjn": { name:"Gonja", source:"udhr_gjn", region:"afr", script:"latn", speakers:"230000", letter:"ƐƆŋŊɛɔ"},

"gl": { name:"Galician", source:"cldr_gl,udhr_glg", region:"eur", script:"latn", speakers:"2400000", letter:"áéíñóúüªÁÉÍÑÓÚÜ", mark:"́̃̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ªàâåäãçèêëìîïºòôöõùûÀÂÅÄÃÇÈÊËÌÎÏÒÔÖÕÙÛ̧̀̂̊"},

"gld": { name:"Nanai (Gold, Goldi, Hezhen)", source:"udhr_gld", region:"nasia", script:"cyrl", speakers:"1400", letter:"найпрвослиебщдкцягьмзюуёчэӈтхӣӯъфжНАЙПРВОСЛИЕБЩДКЦЯГЬМЗЮУЁЧЭӇТХӢӮЪФЖ", mark:"̄̆̈", punctuation:"–"},

"gsw": { name:"Swiss German", source:"cldr_gsw", region:"eur", script:"latn", speakers:"4930000", letter:"äöüÄÖÜ", mark:"̈", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåæçéèêëíìîïñóòôøúùûÿÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̊̄̃"},

"gu": { name:"Gujarati", source:"cldr_gu,udhr_guj,cd18536eac759a61da40080d717664d64a29b397", region:"sasia", script:"gujr", speakers:"49000000", letter:"ૐઅઆઇઈઉઊઋૠઍએઐઑઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળઽ", mark:"઼ંઁઃાિીુૂૃૄૅેૈૉોૌ્", punctuation:"§‐–—…‘’“”†‡′″", symbol:"૱","number":"૧૨૩૪૫૬૭૮૯૦", other:"‍‌", aux:"૰।॥"},

"guc": { name:"Wayuu (Wayu, Wayúu, Guajiro, Wahiro)", source:"udhr_guc", region:"sam", script:"latn", speakers:"437780", letter:"üñÜÑ", mark:"̈̃"},

"gug": { name:"Paraguayan Guarani", source:"udhr_gug", region:"sam", script:"latn", speakers:"6000000", letter:"óáñéãíúõèÓÁÑÉÃÍÚÕÈʼĩũĨŨẽẼ", mark:"́̃̀"},

"guu": { name:"Yanomamö", source:"udhr_guu", region:"sam", script:"latn", speakers:"20000", letter:"ëãáõíËÃÁÕÍĩũĨŨẽẼ", mark:"̈̃́"},

"guz": { name:"Gusii (Kisii, Ekegusii)", source:"cldr_guz", region:"afr", script:"ascii", speakers:"2200000"},

"gv": { name:"Manx (Manx Gaelic, Manks)", source:"cldr_gv,udhr_glv", region:"eur", script:"latn", speakers:"0", letter:"çÇ", mark:"̧", punctuation:"’"},

"gyr": { name:"Guarayu", source:"udhr_gyr", region:"sam", script:"latn", speakers:"5900", letter:"ëñäüöéïËÑÄÜÖÉÏ", mark:"̈̃́", punctuation:"’"},

"ha": { name:"Hausa", source:"cldr_ha,udhr_hau_NE,udhr_hau_NG", region:"afr", script:"latn", speakers:"70000000", letter:"ƙƴƁƊƘƳɓɗʼ", punctuation:"‐’‘", aux:"ƴƳáàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ̃́̀̂"},

"haw": { name:"Hawaiian", source:"cldr_haw,udhr_haw", region:"oce", script:"latn", speakers:"24000", letter:"āēīōūĀĒĪŌŪʻ", mark:"̄", punctuation:"’‘“”"},

"he": { name:"Hebrew", source:"cldr_he,udhr_heb,354bc8cccb82991d56ad51ac6f1c3b8437b28055", region:"wasia", script:"hebr", speakers:"9000000", letter:"אבגדהוזחטיכךלמםנןסעפףצץקרשת", punctuation:"׳״־‐–—", symbol:"₪", other:"‍‌‏‎⁧⁦⁩‫‪‬͏", aux:"ְֱֲֳִֵֶַָֹֻּׁׂ"},

"hi": { name:"Hindi", source:"cldr_hi,udhr_hin,9d8e188be96400153901b55006feaaf9fd4bf3b1", region:"sasia", script:"deva", speakers:"260000000", letter:"अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह\u{958}\u{959}\u{95A}\u{95B}\u{95C}\u{95D}\u{95E}", mark:"ँंः़ािीुूृेैोौ्", punctuation:"।॥॰‘’“”—","number":"०१२३४५६७८९", other:"‍‌", aux:"ऍऑऽॐॅॉ"},

"hil": { name:"Hiligaynon (Ilonggo)", source:"udhr_hil", region:"seasia", script:"ascii", speakers:"9300000"},

"hlt": { name:"Matu Chin", source:"udhr_hlt", region:"seasia", script:"ascii", speakers:"40000"},

"hna": { name:"Mina (Hina, Besleri)", source:"udhr_hna", region:"afr", script:"latn", speakers:"11000", letter:"éáìóòúíàèùÉÁÌÓÒÚÍÀÈÙǒǐǔǹƉƐƆǑǏǓǸŋŊɖɛɔ", mark:"̀́̌"},

"hni": { name:"Hani", source:"udhr_hni", region:"easia", script:"ascii", speakers:"760000"},

"hns": { name:"Caribbean Hindustani", source:"udhr_hns", region:"carib", script:"latn", speakers:"166000", letter:"áêòíèàëÁÊÒÍÈÀË", mark:"́̂̀̈", punctuation:"‘’"},

"hr": { name:"Croatian", source:"cldr_hr,udhr_hrv", region:"eur", script:"latn", speakers:"5600000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’‚“”„′″"},

"hsb": { name:"Upper Sorbian", source:"cldr_hsb,udhr_hsb", region:"eur", script:"latn", speakers:"13000", letter:"čćźěłńřšžČĆŹĚŁŃŘŠŽóÓ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœŕśşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŔŚŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋"},

"ht": { name:"Haitian Creole", source:"udhr_hat_kreyol,udhr_hat_popular", region:"carib", script:"latn", speakers:"113000", letter:"èéòÈÉÒ", mark:"̀́"},

"hu": { name:"Hungarian", source:"cldr_hu,udhr_hun", region:"eur", script:"latn", speakers:"13000000", letter:"áéíóöúüÁÉÍÓÖÚÜőűŐŰ", mark:"́̈̋", punctuation:"«»§–…’”„", symbol:"⁒", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåäãæçèêëìîïñòôøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̃̄"},

"hus": { name:"Huastec (Wasteko, Teenek)", source:"udhr_hus", region:"cam", script:"latn", speakers:"160000", letter:"íáúéóàÍÁÚÉÓÀ", mark:"°́̀"},

"huu": { name:"Murui Huitoto (Bue, Witoto Murui, Witoto)", source:"udhr_huu", region:"sam", script:"latn", speakers:"7800", letter:"úñáÚÑÁƗɨ", mark:"́̃"},

"hy": { name:"Armenian", source:"cldr_hy,udhr_hye,86422c72473b4ace41b3971e55e41a49a44dcbda", region:"wasia", script:"armn", speakers:"10000000", letter:"աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևօֆԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ", punctuation:"֊՝՜՞՛։․«»", aux:"֍֎֏","deprecated":"՚"},

"ibb": { name:"Ibibio", source:"udhr_ibb", region:"afr", script:"latn", speakers:"2000000", letter:"ñÑ", mark:"̃"},

"id": { name:"Indonesian", source:"cldr_id,udhr_ind", region:"seasia", script:"ascii", speakers:"43000000", punctuation:"‐–—…‘’“”", aux:"å"},

"ig": { name:"Igbo", source:"cldr_ig,udhr_ibo", region:"afr", script:"latn", speakers:"24000000", letter:"ẹịṅọụẸỊṄỌỤ", mark:"̣̇", punctuation:"‐"},

"ii": { name:"Nuosu (Nosu, Northern Yi, Liangshan Yi, Sichuan Yi)", source:"cldr_ii,udhr_iii", region:"easia", script:"yiii", speakers:"2000000", letter:"ꀀꀁꀂꀃꀄꀅꀆꀇꀈꀉꀊꀋꀌꀍꀎꀏꀐꀑꀒꀓꀔꀕꀖꀗꀘꀙꀚꀛꀜꀝꀞꀟꀠꀡꀢꀣꀤꀥꀦꀧꀨꀩꀪꀫꀬꀭꀮꀯꀰꀱꀲꀳꀴꀵꀶꀷꀸꀹꀺꀻꀼꀽꀾꀿꁀꁁꁂꁃꁄꁅꁆꁇꁈꁉꁊꁋꁌꁍꁎꁏꁐꁑꁒꁓꁔꁕꁖꁗꁘꁙꁚꁛꁜꁝꁞꁟꁠꁡꁢꁣꁤꁥꁦꁧꁨꁩꁪꁫꁬꁭꁮꁯꁰꁱꁲꁳꁴꁵꁶꁷꁸꁹꁺꁻꁼꁽꁾꁿꂀꂁꂂꂃꂄꂅꂆꂇꂈꂉꂊꂋꂌꂍꂎꂏꂐꂑꂒꂓꂔꂕꂖꂗꂘꂙꂚꂛꂜꂝꂞꂟꂠꂡꂢꂣꂤꂥꂦꂧꂨꂩꂪꂫꂬꂭꂮꂯꂰꂱꂲꂳꂴꂵꂶꂷꂸꂹꂺꂻꂼꂽꂾꂿꃀꃁꃂꃃꃄꃅꃆꃇꃈꃉꃊꃋꃌꃍꃎꃏꃐꃑꃒꃓꃔꃕꃖꃗꃘꃙꃚꃛꃜꃝꃞꃟꃠꃡꃢꃣꃤꃥꃦꃧꃨꃩꃪꃫꃬꃭꃮꃯꃰꃱꃲꃳꃴꃵꃶꃷꃸꃹꃺꃻꃼꃽꃾꃿꄀꄁꄂꄃꄄꄅꄆꄇꄈꄉꄊꄋꄌꄍꄎꄏꄐꄑꄒꄓꄔꄕꄖꄗꄘꄙꄚꄛꄜꄝꄞꄟꄠꄡꄢꄣꄤꄥꄦꄧꄨꄩꄪꄫꄬꄭꄮꄯꄰꄱꄲꄳꄴꄵꄶꄷꄸꄹꄺꄻꄼꄽꄾꄿꅀꅁꅂꅃꅄꅅꅆꅇꅈꅉꅊꅋꅌꅍꅎꅏꅐꅑꅒꅓꅔꅕꅖꅗꅘꅙꅚꅛꅜꅝꅞꅟꅠꅡꅢꅣꅤꅥꅦꅧꅨꅩꅪꅫꅬꅭꅮꅯꅰꅱꅲꅳꅴꅵꅶꅷꅸꅹꅺꅻꅼꅽꅾꅿꆀꆁꆂꆃꆄꆅꆆꆇꆈꆉꆊꆋꆌꆍꆎꆏꆐꆑꆒꆓꆔꆕꆖꆗꆘꆙꆚꆛꆜꆝꆞꆟꆠꆡꆢꆣꆤꆥꆦꆧꆨꆩꆪꆫꆬꆭꆮꆯꆰꆱꆲꆳꆴꆵꆶꆷꆸꆹꆺꆻꆼꆽꆾꆿꇀꇁꇂꇃꇄꇅꇆꇇꇈꇉꇊꇋꇌꇍꇎꇏꇐꇑꇒꇓꇔꇕꇖꇗꇘꇙꇚꇛꇜꇝꇞꇟꇠꇡꇢꇣꇤꇥꇦꇧꇨꇩꇪꇫꇬꇭꇮꇯꇰꇱꇲꇳꇴꇵꇶꇷꇸꇹꇺꇻꇼꇽꇾꇿꈀꈁꈂꈃꈄꈅꈆꈇꈈꈉꈊꈋꈌꈍꈎꈏꈐꈑꈒꈓꈔꈕꈖꈗꈘꈙꈚꈛꈜꈝꈞꈟꈠꈡꈢꈣꈤꈥꈦꈧꈨꈩꈪꈫꈬꈭꈮꈯꈰꈱꈲꈳꈴꈵꈶꈷꈸꈹꈺꈻꈼꈽꈾꈿꉀꉁꉂꉃꉄꉅꉆꉇꉈꉉꉊꉋꉌꉍꉎꉏꉐꉑꉒꉓꉔꉕꉖꉗꉘꉙꉚꉛꉜꉝꉞꉟꉠꉡꉢꉣꉤꉥꉦꉧꉨꉩꉪꉫꉬꉭꉮꉯꉰꉱꉲꉳꉴꉵꉶꉷꉸꉹꉺꉻꉼꉽꉾꉿꊀꊁꊂꊃꊄꊅꊆꊇꊈꊉꊊꊋꊌꊍꊎꊏꊐꊑꊒꊓꊔꊕꊖꊗꊘꊙꊚꊛꊜꊝꊞꊟꊠꊡꊢꊣꊤꊥꊦꊧꊨꊩꊪꊫꊬꊭꊮꊯꊰꊱꊲꊳꊴꊵꊶꊷꊸꊹꊺꊻꊼꊽꊾꊿꋀꋁꋂꋃꋄꋅꋆꋇꋈꋉꋊꋋꋌꋍꋎꋏꋐꋑꋒꋓꋔꋕꋖꋗꋘꋙꋚꋛꋜꋝꋞꋟꋠꋡꋢꋣꋤꋥꋦꋧꋨꋩꋪꋫꋬꋭꋮꋯꋰꋱꋲꋳꋴꋵꋶꋷꋸꋹꋺꋻꋼꋽꋾꋿꌀꌁꌂꌃꌄꌅꌆꌇꌈꌉꌊꌋꌌꌍꌎꌏꌐꌑꌒꌓꌔꌕꌖꌗꌘꌙꌚꌛꌜꌝꌞꌟꌠꌡꌢꌣꌤꌥꌦꌧꌨꌩꌪꌫꌬꌭꌮꌯꌰꌱꌲꌳꌴꌵꌶꌷꌸꌹꌺꌻꌼꌽꌾꌿꍀꍁꍂꍃꍄꍅꍆꍇꍈꍉꍊꍋꍌꍍꍎꍏꍐꍑꍒꍓꍔꍕꍖꍗꍘꍙꍚꍛꍜꍝꍞꍟꍠꍡꍢꍣꍤꍥꍦꍧꍨꍩꍪꍫꍬꍭꍮꍯꍰꍱꍲꍳꍴꍵꍶꍷꍸꍹꍺꍻꍼꍽꍾꍿꎀꎁꎂꎃꎄꎅꎆꎇꎈꎉꎊꎋꎌꎍꎎꎏꎐꎑꎒꎓꎔꎕꎖꎗꎘꎙꎚꎛꎜꎝꎞꎟꎠꎡꎢꎣꎤꎥꎦꎧꎨꎩꎪꎫꎬꎭꎮꎯꎰꎱꎲꎳꎴꎵꎶꎷꎸꎹꎺꎻꎼꎽꎾꎿꏀꏁꏂꏃꏄꏅꏆꏇꏈꏉꏊꏋꏌꏍꏎꏏꏐꏑꏒꏓꏔꏕꏖꏗꏘꏙꏚꏛꏜꏝꏞꏟꏠꏡꏢꏣꏤꏥꏦꏧꏨꏩꏪꏫꏬꏭꏮꏯꏰꏱꏲꏳꏴꏵꏶꏷꏸꏹꏺꏻꏼꏽꏾꏿꐀꐁꐂꐃꐄꐅꐆꐇꐈꐉꐊꐋꐌꐍꐎꐏꐐꐑꐒꐓꐔꐕꐖꐗꐘꐙꐚꐛꐜꐝꐞꐟꐠꐡꐢꐣꐤꐥꐦꐧꐨꐩꐪꐫꐬꐭꐮꐯꐰꐱꐲꐳꐴꐵꐶꐷꐸꐹꐺꐻꐼꐽꐾꐿꑀꑁꑂꑃꑄꑅꑆꑇꑈꑉꑊꑋꑌꑍꑎꑏꑐꑑꑒꑓꑔꑕꑖꑗꑘꑙꑚꑛꑜꑝꑞꑟꑠꑡꑢꑣꑤꑥꑦꑧꑨꑩꑪꑫꑬꑭꑮꑯꑰꑱꑲꑳꑴꑵꑶꑷꑸꑹꑺꑻꑼꑽꑾꑿꒀꒁꒂꒃꒄꒅꒆꒇꒈꒉꒊꒋꒌ", punctuation:"《》。、，（）："},

"ilo": { name:"Ilocano (Ilokano)", source:"udhr_ilo", region:"seasia", script:"ascii", speakers:"9100000"},

"io": { name:"Ido", source:"udhr_ido", region:"eur", script:"ascii", speakers:"300"},

"is": { name:"Icelandic", source:"cldr_is,udhr_isl", region:"eur", script:"latn", speakers:"331000", letter:"áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ", mark:"́̈", punctuation:"§‐–—…‘‚“„†‡′″"},

"it": { name:"Italian", source:"cldr_it,udhr_ita", region:"eur", script:"latn", speakers:"64000000", letter:"àéèìóòùÀÉÈÌÓÒÙ", mark:"̀́", punctuation:"«»—…’“”", aux:"œŒŸªáâåäãæçêëíîïñºôöõøßúûüÿÁÂÅÄÃÆÇÊËÍÎÏÑÔÖÕØÚÛÜ̧̂̊̈̃"},

"iu": { name:"Inuktitut (Eastern Canadian Inuktitut)", source:"udhr_ike", region:"nam", script:"cans", speakers:"34000", letter:"ᓯᓚᕐᔪᐊᒥᐅᑦᓇᓗᐃᖅᑎᖓᑭᒃᑯᑐᓐᐱᖏᕆᑲᓂᔾᔨᓄᒪᒻᑖᕈᖃᑕᕋᓪᒍᓴᖕᓕᕇᖢᕗᒋᒧᒐᖁᔭᑰᒌᙱᒫᕌᕙᒎᕕᕝᓘᓃᓱᓈᙵᓅᐹᓵᐸᔫᓲᐳᓖᖂᑑᐆᖑᙳᖔᕿᒡᓛᓰᖤᐋᑉᔮᔅᒨᑏᒦ", mark:"̃"},

"jgo": { name:"Ngomba (Ngomba Bamileke)", source:"cldr_jgo", region:"afr", script:"latn", speakers:"63000", letter:"áâíîúûÁÂÍÎÚÛꞌꞋǎǐǹǔǍƐǏǸƆǓɄńŋŃŊḿẅḾẄɛɔʉ", mark:"́̀̂̌̄̈", punctuation:"«»‹›"},

"jiv": { name:"Shuar", source:"udhr_jiv", region:"sam", script:"latn", speakers:"35000", letter:"áíúéÁÍÚÉ", mark:"́"},

"jmc": { name:"Machame", source:"cldr_jmc", region:"afr", script:"ascii", speakers:"400000"},

"jv": { name:"Javanese", source:"cldr_jv,udhr_jav,87bfc19c48736ce0e4045004f1485477badda620", region:"seasia", script:"ascii", speakers:"94000000", letter:"ÂÅÈÉÊÌÒÙâåèéêìòù", mark:"̀́̂̊", punctuation:"‰"},

"jv-java": { name:"Javanese (Javanese)", source:"6c4597409a211714769081f0db0c92a0314ede5f", region:"seasia", script:"java", speakers:"94000000", letter:"ꦄꦆꦇꦈꦉꦊꦋꦌꦎꦏꦑꦒꦓꦔꦕꦖꦗꦘꦚꦛꦝꦟꦠꦡꦢꦤꦥꦦꦧꦨꦩꦪꦫꦭꦮꦱꦲꧏ", mark:"ꦀꦁꦂꦃ꦳ꦴꦶꦸꦺꦼꦽꦾꦿ꧀","number":"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙", punctuation:"꧁꧂꧃꧄꧅꧆꧇꧈꧉꧊꧋꧌꧍", aux:"ꦙꦜꦞꦣꦯꦰ꧞꧟"},

"ka": { name:"Georgian", source:"cldr_ka,udhr_kat,2cafedfc80733bd49fb1ee6af49657333a88c1a3", region:"eur", script:"geor", speakers:"3700000", letter:"აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ", punctuation:"჻«»§‐–—…‘‚“„†‡′″", symbol:"№", aux:"ᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚᲛᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰ"},

"kab": { name:"Kabyle (Kabylian)", source:"cldr_kab", region:"afr", script:"latn", speakers:"5500000", letter:"ǧƐǦƔčČḍḥṛṣṭẓḌḤṚṢṬẒɛɣ", mark:"̣̌", punctuation:"‰"},

"kam": { name:"Kamba (Kikamba)", source:"cldr_kam", region:"afr", script:"latn", speakers:"3900000", letter:"ĩũĨŨ", mark:"̃"},

"kbd": { name:"Kabardian (Kabardino-Cherkess, East Circassian)", source:"udhr_kbd", region:"eur", script:"cyrl", speakers:"1600000", letter:"цӏыхуэфащмтеднйпсожлъкрзгьибяшвчіюЦӀЫХУЭФАЩМТЕДНЙПСОЖЛЪКРЗГЬИБЯШВЧІЮ", mark:"̆"},

"kbp": { name:"Kabiye", source:"udhr_kpb", region:"afr", script:"latn", speakers:"1000000", letter:"ñÑƆƐƱƉƖƔŋŊɔɛʊɖɩɣ", mark:"̃"},

"kde": { name:"Makonde (Kimakonde)", source:"cldr_kde,udhr_kde", region:"afr", script:"ascii", speakers:"1400000"},

"kdh": { name:"Tem (Temba, Kotokoli, Cotocoli)", source:"udhr_kdh", region:"afr", script:"latn", speakers:"290000", letter:"íáéúóÿÍÁÉÚÓƖƱƐƉƆńŋŃŸŊḿḾɩʊɛɖɔ", mark:"́̈"},

"kea": { name:"Kabuverdianu (Cape Verdean Creole)", source:"cldr_kea,udhr_kea", region:"afr", script:"latn", speakers:"1200000", letter:"ñçêéâíèáôóãºõúàòÑÇÊÉÂÍÈÁÔÓÃÕÚÀÒ", mark:"̧̃̂́̀", punctuation:"’", aux:"ẽẼăāĕēĭĩīŏōœŭũūĂĀĔĒĬĨĪŎŌŒŬŨŪŸªáàâåäãæçéèêëíìîïºóòôöõøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÓÒÔÖÕØÚÙÛǗ̧̀̆̂̊̈̄"},

"kg": { name:"Kongo (Kikongo)", source:"udhr_kng", region:"afr", script:"ascii", speakers:"6500000"},

"kha": { name:"Khasi", source:"udhr_kha", region:"sasia", script:"latn", speakers:"1128575", letter:"ïñÏÑ", mark:"̈̃"},

"khb": { name:"Tai Lü (Tai Lue)", source:"23af4e1d7781a7a933d2ffac5f71a42a5df6f629", region:"easia", script:"talu", speakers:"550000", letter:"ᦀᦁᦂᦃᦄᦅᦆᦇᦈᦉᦊᦋᦌᦍᦎᦏᦐᦑᦒᦓᦔᦕᦖᦗᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨᦩᦪᦫᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂᧃᧄᧅᧆᧇ","number":"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙᧚", symbol:"᧞᧟"},

"khq": { name:"Koyra Chiini (Western Songhay)", source:"cldr_khq", region:"afr", script:"latn", speakers:"200000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"ki": { name:"Kikuyu (Gikuyu)", source:"cldr_ki", region:"afr", script:"latn", speakers:"6600000", letter:"ĩũĨŨ", mark:"̃"},

"kjh": { name:"Khakas", source:"udhr_kjh", region:"nasia", script:"cyrl", speakers:"43000", letter:"прайтиксізледјвоцяыгнмбңюьчуғхжҷэфщъПРАЙТИКСІЗЛЕДЈВОЦЯЫГНМБҢЮЬЧУҒХЖҶЭФЩЪ", mark:"̆"},

"kk": { name:"Kazakh", source:"cldr_kk,udhr_kaz", region:"casia", script:"cyrl", speakers:"15000000", letter:"аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюяАӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ", punctuation:"‐–—…‘’“”«»§"},

"kkh": { name:"Khün (Tai Khün)", source:"udhr_kkh_lana,2d9827ce4589c5c4a76d7a1526db598162373c1d", region:"seasia", script:"lana", speakers:"100000", letter:"ᨠᨡᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩒᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩚᩛ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩭᩮᩯᩰᩱᩳᩴ᩵᩶᩺᩼","number":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩷᩸᩹᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭"},

"kkj": { name:"Kako (Mkako, Mkaka)", source:"cldr_kkj", region:"afr", script:"latn", speakers:"120000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǌƁƊƐǊƆŋŊɓɗɛɔ", mark:"̧́̀̂", punctuation:"«»…‘‹›“”"},

"kl": { name:"Kalaalisut (West Greenlandic)", source:"cldr_kl,udhr_kal", region:"eur", script:"ascii", speakers:"60000", aux:"ĸ", notes:"CLDR adds accented characters such as áâãéêíîôúûæøåĩĸũ, but this appears to be based on an older (pre 1973) orthography. See wikipedia."},

"kln": { name:"Kalenjin", source:"cldr_kln", region:"afr", script:"ascii", speakers:"60000", notes:"kln is a macrolanguage that encompasses the following more specific primary language subtags: enb eyo niq oki pko sgc spy tec tuy. kln is often preferred by legacy applications rather than spy (Sabaot)."},

"km": { name:"Khmer (Cambodian)", source:"cldr_km,udhr_khm,e50f6f6c10d9857db18430e54a9ec953abb77225", region:"seasia", script:"khmr", speakers:"16000000", letter:"ឥឦឪឧឩឯឰឱឳឲឫឬឭឮកខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរឡលវសហអៗ", mark:"ាិីឹឺុូួើឿៀេែៃោៅំះ៉៊់៍័្", punctuation:"៖។៕៙៚‘’“”","number":"០១២៣៤៥៦៧៨៩", symbol:"៛", aux:"៑៌៝៎៏"},

"kmb": { name:"Kimbundu (North Mbundu)", source:"udhr_kmb", region:"afr", script:"latn", speakers:"4000000", letter:"êâôÊÂÔ", mark:"̂", punctuation:"’"},

"kmr": { name:"Northern Kurdish (Kurmanji)", source:"udhr_kmr", region:"wasia", script:"latn", speakers:"15000000", letter:"ûîêçÛÎÊÇşŞ", mark:"̧̂", local:"Kurmancî", notes:"Macrolanguage is <i>ku</i>, which includes <i>ckb</i> <i>kmr</i> <i>sdh</i>."},

"kn": { name:"Kannada (Canarese, Kanarese)", source:"cldr_kn,udhr_kan", region:"sasia", script:"knda", speakers:"37700000", letter:"ಅಆಇಈಉಊಋೠಌೡಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲವಶಷಸಹಳಽ", mark:"಼̃ಂಃಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖ", punctuation:"‐–—…‘’“”′″","number":"೦೧೨೩೪೫೬೭೮೯", other:"‌", aux:"ೞ"},

"knc": { name:"Kanuri", source:"udhr_knc", region:"afr", script:"latn", speakers:"4200000", letter:"əƏ"},

"koi": { name:"Komi-Permyak", source:"udhr_koi", region:"eur", script:"cyrl", speakers:"63000", letter:"мортпавэзлӧнбыдсиьекцяюгйучішжёщъфхМОРТПАВЭЗЛӦНБЫДСИЬЕКЦЯЮГЙУЧІШЖЁЩЪФХ", mark:"̈̆", punctuation:"–"},

"kok": { name:"Konkani", source:"cldr_kok", region:"afr", script:"deva", speakers:"7400000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्","number":"०१२३४५६७८९", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here."},

"koo": { name:"Konjo (Konzo)", source:"udhr_koo", region:"afr", script:"ascii", speakers:"610000"},

"kpe": { name:"Kpelle", source:"udhr_gkp", region:"afr", script:"latn", speakers:"1300000", letter:"ƐƁƆƝƏĝŋĜŊɛɓɔɲə", mark:"̂"},

"kqn": { name:"Kaonde", source:"udhr_kqn", region:"afr", script:"ascii", speakers:"240000"},

"kri": { name:"Krio (Sierra Leonean Creole)", source:"udhr_kri", region:"afr", script:"latn", speakers:"500000", letter:"ƐƆŋŊɛɔ", punctuation:"–"},

"krl": { name:"Karelian", source:"udhr_krl", region:"eur", script:"latn", speakers:"36000", letter:"äöÄÖčžšČŽŠ", mark:"̈̌", punctuation:"’"},

"ks": { name:"Kashmiri (Koshur)", source:"cldr_ks", region:"sasia", script:"arab", speakers:"5600000", letter:"ءآأٲؤاٮبپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںھہوۄیۍے", mark:"َُِ۪ۭٕٖٔٗٚٛٓ"},

"ksb": { name:"Shambala (Shambaa)", source:"cldr_ksb", region:"afr", script:"ascii", speakers:"660000"},

"ksf": { name:"Bafia", source:"cldr_ksf", region:"afr", script:"latn", speakers:"60000", letter:"áéíóúÁÉÍÓÚǝƎƐƆŋŊɛɔ", mark:"́"},

"ksh": { name:"Kölsch (Colognian)", source:"cldr_ksh", region:"eur", script:"latn", speakers:"250000", letter:"ėœůĖŒŮåäæëößüÅÄÆËÖÜ", mark:"̊̈̇", punctuation:"‐–—…‘‚“„†‡§⸗", symbol:"°", aux:"ăāĕēğĭīĳıłŏōŭūĂĀĔĒĞĬĪĲŁŎŌŬŪŸáàâãçéèêíìîïñóòôøúùûÿÁÀÂÃÇÉÈÊÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̃̄"},

"ktu": { name:"Kituba", source:"udhr_ktu", region:"afr", script:"ascii", speakers:"5400000"},

"ku": { name:"Kurdish", source:"https://r12a.github.io/app-subtags/?lookup=ku", region:"wasia", script:"latn", speakers:"0", notes:" ku is a macrolanguage that encompasses the following more specific primary language subtags: <i>ku</i>, which includes <i>ckb</i> <i>kmr</i> <i>sdh</i> ku is often preferred by legacy applications rather than kmr (Northern Kurdish)."},

"kw": { name:"Cornish", source:"cldr_kw", region:"eur", script:"ascii", speakers:"~350"},

"kwi": { name:"Awa-Cuaiquer (Awa Pit)", source:"udhr_kwi", region:"sam", script:"latn", speakers:"13000", letter:"áñëóçâùéàêÁÑËÓÇÂÙÉÀÊ", mark:"̧́̃̈̂̀", punctuation:"·"},

"ky": { name:"Kyrgyz (Kirghiz)", source:"cldr_ky,udhr_kir", region:"casia", script:"cyrl", speakers:"4300000", letter:"абгдеёжзийклмнӊоөпрстуүхчшъыэюяцңвьфАБГДЕЁЖЗИЙКЛМНӉОӨПРСТУҮХЧШЪЫЭЮЯЦҢВЬФ", mark:"̈̆", punctuation:"‐–—…‘‚“„«»§", aux:"вфцщьВФЦЩЬ"},

"lad": { name:"Ladino", source:"udhr_lad", region:"wasia", script:"latn", speakers:"100000", letter:"íÍ", mark:"́", punctuation:"–"},

"lag": { name:"Langi (Rangi)", source:"cldr_lag", region:"afr", script:"latn", speakers:"410000", letter:"áéíóúÁÉÍÓÚƗɄɨʉ", mark:"́"},

"lb": { name:"Luxembourgish (Luxemburgish, Letzeburgesch)", source:"cldr_lb,udhr_ltz", region:"eur", script:"latn", speakers:"390000", letter:"äéëêüöôàÄÉËÊÜÖÔÀ", mark:"̈́̂̀", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçèêíìîïñóòôöøßúùûüÿÁÀÂÅÃÆÇÈÊÍÌÎÏÑÓÒÔÖØÚÙÛÜ̧̇̀̆̂̊̃̄", notes:"UDHR has many more accented characters"},

"lg": { name:"Ganda (Luganda)", source:"cldr_lg,udhr_lug", region:"afr", script:"latn", speakers:"4100000", letter:"ŋŊ"},

"lia": { name:"Limba", source:"udhr_lia", region:"afr", script:"latn", speakers:"340000", letter:"ƆƐŋŊɔɛ"},

"lij": { name:"Ligurian", source:"udhr_lij", region:"eur", script:"latn", speakers:"500000", letter:"çòæéùöôâîàêÇÒÆÉÙÖÔÂÎÀÊ", mark:"̧̀́̈̂", punctuation:"’"},

"lis": { name:"Lisu {Fraser}", source:"d6a5076cb77188fd52722d4a57b621ac1390c714", region:"easia", script:"lisu", speakers:"940000", letter:"ꓐꓑꓒꓓꓔꓕꓖꓗꓘꓙꓚꓛꓜꓝꓞꓟꓠꓡꓢꓣꓤꓥꓦꓧꓨꓩꓪꓫꓬꓭꓮꓯꓰꓱꓲꓳꓴꓵꓶꓷꓸꓹꓺꓻꓼꓽʼˍ", punctuation:"《》…꓾꓿"},

"lkt": { name:"Lakota (Lakhota, Teton, Teton Sioux)", source:"cldr_lkt", region:"nam", script:"latn", speakers:"6000", letter:"ʼáéíóúÁÉÍÓÚǧȟǦȞŋčšžŊČŠŽ", mark:"́̌", punctuation:"́̌‐–—“”"},

"lld": { name:"Ladin (Judaeo-Spanish, Judeo-Spanish)", source:"udhr_lld", region:"eur", script:"latn", speakers:"31000", letter:"ëéüêàèöìùîâôòóûËÉÜÊÀÈÖÌÙÎÂÔÒÓÛćĆ", mark:"̈́̂̀", punctuation:"’"},

"ln": { name:"Lingala", source:"cldr_ln,udhr_lin", region:"afr", script:"latn", speakers:"5500000", letter:"áâéêíîóôúÁÂÉÊÍÎÓÔÚǎǐǒǍƐǏǑƆěĚɛɔ", mark:"́̂̌", punctuation:"’", notes:"UDHR has no accents"},

"lns": { name:"Lamnso' (Nso)", source:"udhr_lns", region:"afr", script:"latn", speakers:"240000", letter:"áéùìòúíóàèÁÉÙÌÒÚÍÓÀÈƏŋŊə", mark:"̀́", punctuation:"’"},

"lo": { name:"Lao (Laotian)", source:"cldr_lo,udhr_lao", region:"seasia", script:"laoo", speakers:"~25000000", letter:"ໆກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫໜໝອຮຯະາຳຽເແໂໃໄ", mark:"່້໊໋́໌ໍັິີຶືຸູົຼ", aux:"໐໑໒໓໔໕໖໗໘໙"},

"lob": { name:"Lobi (Miwa, Lobiri)", source:"udhr_lob", region:"afr", script:"latn", speakers:"440000", letter:"àáäÀÁÄƲƖƆƐʋɩɔɛʔ", mark:"̀́̈"},

"lot": { name:"Otuho (Lotuko)", source:"udhr_lot", region:"afr", script:"ascii", speakers:"140000"},

"loz": { name:"Lozi (siLozi, Rozi)", source:"udhr_loz", region:"afr", script:"ascii", speakers:"725000"},

"lrc": { name:"Luri (Lurish)", source:"cldr_lrc", region:"wasia", script:"arab", speakers:"13000000", letter:"آأؤئابپتثجچحخدذرزژسشصضطظعغفڤقکگلمنھەوۉۊیؽي", mark:"ٙٛٓٔ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"ًٌٍَُِّْإةكهىٕ"},

"lt": { name:"Lithuanian", source:"cldr_lt,udhr_lit", region:"eur", script:"latn", speakers:"3000000", letter:"éÉąčęėįšųūžĄČĘĖĮŠŲŪŽ", mark:"̨̌̇̄́", punctuation:"‐–—…“„", aux:"ẽẼĩũĨŨáàãéèíìñóòõúùÁÀÃÉÈÍÌÑÓÒÕÚÙ́̃̀"},

"lu": { name:"Luba-Katanga (Luba-Shaba, Kiluba)", source:"cldr_lu", region:"afr", script:"latn", speakers:"1500000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙƐƆɛɔ", mark:"́̀"},

"lua": { name:"Luba-Kasai (Western Luba)", source:"udhr_lua", region:"afr", script:"ascii", speakers:"6300000"},

"lue": { name:"Luvale", source:"udhr_lue", region:"afr", script:"ascii", speakers:"640000"},

"lun": { name:"Lunda (Chilunda)", source:"udhr_lun", region:"afr", script:"ascii", speakers:"400000"},

"luo": { name:"Luo (Dholuo)", source:"cldr_luo", region:"afr", script:"ascii", speakers:"4200000"},

"lus": { name:"Mizo", source:"udhr_lus", region:"sasia", script:"latn", speakers:"690000", letter:"âêûîãÂÊÛÎÃ", mark:"̂̃"},

"luy": { name:"Luhya (Luyia, Luhia, Luhiya)", source:"cldr_luy", region:"afr", script:"ascii", speakers:"1200000"},

"lv": { name:"Latvian (Lettish)", source:"cldr_lv,udhr_lav", region:"eur", script:"latn", speakers:"1750000", letter:"āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ", mark:"̧̄̌", punctuation:"§‐–—…‘’‚“”„†‡′″", aux:"ōŗŌŖ"},

"mad": { name:"Madurese", source:"udhr_mad", region:"seasia", script:"ascii", speakers:"15000000"},

"mag": { name:"Magahi (Magadhi)", source:"udhr_mag", region:"sasia", script:"deva", speakers:"14000000", letter:"मनवधकरलसयतषटउचबघणपगठदहभअएऔथओशईजखआडइछफढझञऐ", mark:"ािेंु्ोी़ूौृैँ", punctuation:"।"},

"mai": { name:"Maithili", source:"udhr_mai,udhr_mai_2", region:"sasia", script:"deva", speakers:"33900000", letter:"सरवभमनधकघषणटदबएतआउलजपठगअछहऐयशओचथखफइढडङईञʼ", mark:"ा्ौिोंेँीृूुःै़", punctuation:"।–"},

"mam": { name:"Mam", source:"udhr_mam", region:"cam", script:"ascii", speakers:"540000"},

"mas": { name:"Masai (Maasai, Maa)", source:"cldr_mas", region:"afr", script:"latn", speakers:"1300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛƐƗƆɄāēīŋōūĀĒĪŊŌŪɛɨɔʉ", mark:"́̀̂̄"},

"maz": { name:"Central Mazahua", source:"udhr_maz", region:"cam", script:"latn", speakers:"140000", letter:"ñÑ", mark:"̸̱̃"},

"mcd": { name:"Sharanahua (Marinawa)", source:"udhr_mcd", region:"sam", script:"latn", speakers:"3100", letter:"úíóáÚÍÓÁ", mark:"́", punctuation:"¿"},

"mcf": { name:"Matsés (Mayoruna)", source:"udhr_mcf", region:"sam", script:"latn", speakers:"3200", letter:"ëË", mark:"̈"},

"men": { name:"Mende", source:"udhr_men", region:"afr", script:"latn", speakers:"1400000", letter:"ƆƐŋŊɔɛ", punctuation:"–‐"},

"mer": { name:"Meru", source:"cldr_mer", region:"afr", script:"latn", speakers:"2000000", letter:"ĩũĨŨ", mark:"̃"},

"mfe": { name:"Morisyen (Mauritian Creole, Morisien)", source:"cldr_mfe", region:"afr", script:"ascii", speakers:"1070000"},

"mg": { name:"Malagasy", source:"cldr_mg,udhr_plt", region:"afr", script:"latn", speakers:"18000000", letter:"àâéèêëìîïñôÀÂÉÈÊËÌÎÏÑÔ", mark:"̀̂́̈̃", notes:"UDHR has no accents"},

"mgh": { name:"Makhuwa-Meetto", source:"cldr_mgh", region:"afr", script:"ascii", speakers:"6600000"},

"mgo": { name:"Meta'", source:"cldr_mgo", region:"afr", script:"latn", speakers:"190000", letter:"ʼàèìòùÀÈÌÒÙƏƆŋŊəɔ", mark:"̀", punctuation:"‘’“”"},

"mh": { name:"Marshallese (Ebon)", source:"udhr_mah", region:"oce", script:"ascii", speakers:"55000"},

"mi": { name:"Maori (Te Reo)", source:"cldr_mi,udhr_mri,61f0a8014764c40b5937e54a104576fdf07d24d1", region:"oce", script:"latn", speakers:"60000", letter:"ĀāĒēĪīŌōŪūïÏ", mark:"̄̈", punctuation:"‰"},

"mic": { name:"Mi'kmaq (Micmac, Migmaw, Mikmaw)", source:"udhr_mic", region:"nam", script:"ascii", speakers:"14200"},

"mid": { name:"Neo-Mandaic", source:"280e6a9f98147de582820ff2179ebb7727e96147", region:"wasia", script:"mand", speakers:"200", letter:"ࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘ", mark:"࡙࡚࡛", punctuation:"࡞"},

"min": { name:"Minangkabau", source:"udhr_min", region:"seasia", script:"ascii", speakers:"5500000"},

"miq": { name:"Mískitu (Miskito)", source:"udhr_miq", region:"cam", script:"latn", speakers:"150000", letter:"áâÁÂ", mark:"́̂"},

"mk": { name:"Macedonian", source:"cldr_mk,udhr_mkd", region:"eur", script:"cyrl", speakers:"~2000000", letter:"абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ", mark:"́", punctuation:"‐–—…‘‚“„", aux:"ѐѝЀЍ̀"},

"ml": { name:"Malayalam", source:"cldr_ml,udhr_mal,d347047791774df1311d53dee98495c224fe0166", region:"sasia", script:"mlym", speakers:"38000000", letter:"അആഇഈഉഊഋൠഌൡഎഏഐഒഓഔകൿഖഗഘങചഛജഝഞടഠഡഢണൺതഥദധനൻപഫബഭമയരർലൽവശഷസഹളൾഴറ", mark:"ഃംാിീുൂൃെേൈൊോൌൗ്", punctuation:"‘’“”", other:"‌‍", aux:"൦൧൨൩൪൫൬൭൮൯൹।॥"},

"mn-cyrl": { name:"Mongolian {Cyrillic}", source:"cldr_mn,udhr_khk", region:"easia", script:"cyrl", speakers:"5200000", letter:"абвгдеёжзийклмноөпрстуүфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯ", mark:"̈̆", punctuation:"̈̆‐–—…‘’“”†‡′″§", aux:"әҗӊһӘҖӉҺ"},

"mnw": { name:"Mon", source:"udhr_mnw", region:"seasia", script:"mymr", speakers:"851000", letter:"လကၚအခရမဟပဍစတသဂဒဇနဘဝဗဓထၜယညဆဏဖဿဥဋဉဌဠ", mark:"ိ်ောါၞုံွဲ္ဵၟဳြှူၠးဴီျ", punctuation:"၊။","number":"၁၉၄၈၀၂၃၅၆၇"},

"mos": { name:"Mòoré (Mossi, Mooré)", source:"udhr_mos", region:"afr", script:"latn", speakers:"7600000", letter:"ãõÃÕƖƱƐĩũœĨŨŒẽẼɩʊɛ", mark:"̃", punctuation:"’"},

"mr": { name:"Marathi", source:"cldr_mr,udhr_mar", region:"sasia", script:"deva", speakers:"73000000", letter:"ऱॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्", punctuation:"‐–—…‘’“”′″","number":"१२३४५६७८९०", other:"‌‍", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here."},

"mt": { name:"Maltese", source:"cldr_mt,udhr_mlt", region:"eur", script:"latn", speakers:"520000", letter:"àèìòùÀÈÌÒÙċġħżĊĠĦŻ", mark:"̀̇", punctuation:"‘’“”"},

"mto": { name:"Totontepec Mixe (North Highland Mixe)", source:"udhr_mto", region:"cam", script:"latn", speakers:"5500", letter:"äüëöéÄÜËÖÉ", mark:"̈́", punctuation:"’"},

"mua": { name:"Mundang", source:"cldr_mua", region:"afr", script:"latn", speakers:"240000", letter:"ãëõÃËÕǝƁƊƎĩŋĨŊṽṼɓɗ", mark:"̃̈"},

"mxi": { name:"Mozarabic (Andalusi Romance)", source:"udhr_mxi", region:"eur", script:"latn", speakers:"0", letter:"àùèòÀÙÈÒ", mark:"̀", punctuation:"’"},

"my": { name:"Burmese (Myanmar)", source:"cldr_my,udhr_mya,43fe649806182b69d852d8c5881f6cc16d8731ca", region:"seasia", script:"mymr", speakers:"33000000", letter:"ကခဂဃငစဆဇဈဉညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအဣဤဥဦဧဩဪဿ", mark:"ာါိီုူေဲံျြွှ့္်း","number":"၁၉၄၈၀၂၃၅၆၇", punctuation:"၏၊။၍၌၎‘’“”", aux:"ၒၓၔၕၖၗၘၙ"},

"mzi": { name:"Ixcatlán Mazatec", source:"udhr_mzi", region:"cam", script:"latn", speakers:"8600", letter:"áñíóéÁÑÍÓÉ", mark:"́̃", punctuation:"’"},

"mzn": { name:"Mazanderani (Tabari, Geleki)", source:"cldr_mzn", region:"wasia", script:"arab", speakers:"6000000", letter:"ءآأؤئابپةتثجچحخدذرزژسشصضطظعغفقکگلمنهویي", mark:"ًٌٍّٔٓ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"َُِْٰٖإكىٕ"},

"nah": { name:"Nahuatl (Aztec)", source:"udhr_nhn", region:"cam", script:"latn", speakers:"1700000", letter:"íÍ", mark:"́"},

"naq": { name:"Khoekhoe (Nama, Hottentot)", source:"cldr_naq", region:"afr", script:"latn", speakers:"300000", letter:"ǀǁǂǃâîôûÂÎÔÛ", mark:"̂"},

"nb": { name:"Norwegian Bokmål", source:"cldr_nb,udhr_nob", region:"eur", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"«»§–", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáãçèêíñúüäöÁÃÇÈÊÍÑÚÜÄÖ̧̌̃̈"},

"nba": { name:"Nyemba", source:"udhr_nba", region:"afr", script:"latn", speakers:"900000", letter:"ñÑ", mark:"̃"},

"nd": { name:"Northern Ndebele (isiNdebele, Sindebele, Ndebele, North Ndebele, Matabele)", source:"cldr_nd", region:"afr", script:"ascii", speakers:"1600000"},

"nds": { name:"Low German (Low Saxon)", source:"cldr_nds,udhr_nds", region:"eur", script:"latn", speakers:"301000", letter:"åäöüÅÄÖÜ", mark:"̊̈", punctuation:"’", aux:"ăāĕęēĭīŏōœŭūĂĀĔĘĒĬĪŎŌŒŬŪŸáàâæçéèêëíìîïñóòôøúùûÿÁÀÂÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̨́̀̆̂̄̃"},

"ne": { name:"Nepali", source:"cldr_ne,udhr_nep", region:"sasia", script:"deva", speakers:"40000000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽ", mark:"़ँंःािीुूृॅेैॉोौ्", punctuation:"।","number":"१२३४५६७८९०", other:"‍", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here."},

"ng": { name:"Ndonga, (Oshindonga)", source:"udhr_ndo", region:"afr", script:"ascii", speakers:"810000"},

"nio": { name:"Nganasan", source:"udhr_nio", region:"nasia", script:"cyrl", speakers:"130", letter:"нерәзытбуоясикаӈҫүдйхлмпвгөъцьчэщжюНЕРӘЗЫТБУОЯСИКАӇҪҮДЙХЛМПВГӨЪЦЬЧЭЩЖЮ", mark:"̆", punctuation:"”"},

"nku": { name:"Bouna Kulango", source:"udhr_nku", region:"afr", script:"latn", speakers:"130000", letter:"ƖƆƐƝƲŋŊɩɔɛɲʋ", punctuation:"’"},

"nl": { name:"Dutch", source:"cldr_nl,udhr_nld", region:"eur", script:"latn", speakers:"24000000", letter:"áäéëíïóöúüÁÄÉËÍÏÓÖÚÜ", mark:"́̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"œŒŸàâåãæçèêîñôøùûÿÀÂÅÃÆÇÈÊÎÑÔØÙÛ̧̀̂̊̃"},

"nmg": { name:"Kwasio (Ngumba, Mvumbo, Bujeba, Gyele, Kola)", source:"cldr_nmg", region:"afr", script:"latn", speakers:"26000", letter:"áâäéêíîïóôöúûÁÂÄÉÊÍÎÏÓÔÖÚÛǎǝǐǒǔǍƁƎƐǏǑƆǓāěēīńŋōŕūĀĚĒĪŃŊŌŔŪɓɛɔ", mark:"́̂̌̄̈"},

"nn": { name:"Norwegian Nynorsk", source:"cldr_nn,udhr_nno", region:"eur", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"‰", symbol:"−", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáçèêñüäöÁÇÈÊÑÜÄÖ̧̌̃̈"},

"nnh": { name:"Ngiemboon", source:"cldr_nnh", region:"afr", script:"latn", speakers:"250000", letter:"ʼáàâéèêíìóòôúùûÿÁÀÂÉÈÊÍÌÓÒÔÚÙÛǎǒǔǍƐǑƆǓɄěńŋĚŃŊŸḿẅḾẄɛɔʉ", mark:"́̀̂̌̈", punctuation:"«»‘’"},

"no": { name:"Norwegian", source:"r12a", region:"eur", script:"latn", speakers:"5000000", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"«»§–"},

"nod": { name:"Northern Thai (Lanna, Kam Mueang)", source:"812b1d7d423d404b2e251f335553dd05b8999f08", region:"seasia", script:"lana", speakers:"6000000", letter:"ᨠᨡᨢᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩚᩛ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩮᩯᩰᩱᩲᩳᩴ᩵᩶᩺᩻","number":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩿᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭"},

"not": { name:"Nomatsiguenga", source:"udhr_not", region:"sam", script:"latn", speakers:"6500", letter:"ëíáóñËÍÁÓÑ", mark:"̈́̃"},

"nr": { name:"Ndebele (Southern Ndebele, Transvaal Ndebele)", source:"udhr_nbl", region:"afr", script:"ascii", speakers:"1100000"},

"nso": { name:"Northern Sotho", source:"udhr_nso", region:"afr", script:"latn", speakers:"4700000", letter:"šŠ", mark:"̌"},

"nus": { name:"Nuer (Thok Naath)", source:"cldr_nus", region:"afr", script:"latn", speakers:"890000", letter:"äëïöÄËÏÖƐƔƆŋŊɛɣɔ", mark:"̱̈"},

"nv": { name:"Navajo (Navaho)", source:"udhr_nav", region:"nam", script:"latn", speakers:"266000", letter:"ʼéóáíÉÓÁÍǫǪąłįęĄŁĮĘ", mark:"̨́"},

"ny": { name:"Chichewa (Chewa, Nyanja, Chichewa, Chinyanja)", source:"udhr_nya_chechewa", region:"afr", script:"ascii", speakers:"12000000"},

"nym": { name:"Nyamwezi", source:"udhr_nym", region:"afr", script:"ascii", speakers:"1000000"},

"nyn": { name:"Nyankore (Nkore, Nkole, Nyankole, Orunyankore, Orunyankole, Runyankore, Runyankole)", source:"cldr_nyn,udhr_nyn", region:"afr", script:"ascii", speakers:"2300000"},

"nzi": { name:"Nzima (Appolo)", source:"udhr_nzi", region:"afr", script:"latn", speakers:"330000", letter:"ɔɛƆƐ"},

"oaa": { name:"Orok (Uilta, Ulta, Ujlta)", source:"udhr_oaa", region:"nasia", script:"cyrl", speakers:"50", letter:"ƝūŪɲԩԨчипалнесдкробуӡгэӈмхтөвӯзЧИПАЛНЕСДКРОБУӠГЭӇМХТӨВӮЗ", mark:"̄", punctuation:"–"},

"oc": { name:"Occitan", source:"udhr_lnc", region:"eur", script:"latn", speakers:"~200000", letter:"óèéçàïòìùúâêîëáôüûÓÈÉÇÀÏÒÌÙÚÂÊÎËÁÔÜÛ", mark:"̧́̀̈̂", punctuation:"«»’—"},

"oj": { name:"Ojibwe (Ojibwa, Ojibway, Chippewa, Otchipwe)", source:"udhr_ojb", region:"nam", script:"cans", speakers:"100880", letter:"ᐯᒪᑎᓯᑦᑌᐸᑫᑕᑯᐎᓇᓐᒥᐌᑲᒃᔭᐊᓂᐃᔑᑭᔝᐤᐅᑾᐱᔦᑐᐗᒣᒋᐁᔅᓱᓀᓄᒧᓭᔥᐨᑡᔕᓴᓶᓉᐺᓪᑉᐼᑴᑄᒐᒬᔐᔗᑺᔡᒻᒡᑶ"},

"oki": { name:"Okiek", source:"udhr_oki", region:"afr", script:"ascii", speakers:"79000"},

"om": { name:"Oromo", source:"cldr_om,udhr_gax", region:"afr", script:"ascii", speakers:"25542000"},

"or": { name:"Oriya (Odia)", source:"cldr_or", region:"sasia", script:"orya", speakers:"33000000", letter:"ଅଆଇଈଉଊଋଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯୟରଲଳଵୱଶଷସହ", mark:"଼ଁଂଃାିୀୁୂୃେୈୋୌ୍ୖୗ","number":"୦୧୨୩୪୫୬୭୮୯"},

"os": { name:"Ossetian (Ossete, Ossetic)", source:"cldr_os,udhr_oss", region:"eur", script:"cyrl", speakers:"570000", letter:"аӕбвгъджзеёийклмнопрстуфхцчшщыьэюяАӔБВГЪДЖЗЕЁИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ", punctuation:"‐–—…‘‚“„«»§"},

"ote": { name:"Mezquital Otomi", source:"udhr_ote", region:"cam", script:"latn", speakers:"130000", letter:"öüäéñúíáèÖÜÄÉÑÚÍÁÈ", mark:"̱̈́̃̀"},

"pa": { name:"Punjabi", source:"cldr_pa,udhr_pan,f940e5c7fc381992f942120f89cd8137cb3c3eda", region:"sasia", script:"guru", speakers:"122000000", letter:"ੴਉਊਓਅਆਐਔਇਈਏਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ\u{A33}\u{A36}\u{A59}\u{A5A}\u{A5B}\u{A5E}", mark:"ੱੰ਼੍ਾਿੀੁੂੇੈੋੌਂ", punctuation:"‐–—‘’“”′″।","number":"੦੧੨੩੪੫੬੭੮੯", symbol:"☬", other:"\u{200D}\u{200C}", aux:"ਃਁੵ","deprecated":"ੳੲ"},

"pa-arab": { name:"Punjabi {Arabic}", source:"cldr_pa_Arab", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابتثجحخدذرزسشصضطظعغفقلمنهويٹپچڈڑژکگںھہیے", mark:"ُٓٔ", punctuation:"‰", other:"‎‏", aux:"أاةٔٺٻټٽ"},

"pam": { name:"Pampangan (Kapampangan)", source:"udhr_pam", region:"seasia", script:"ascii", speakers:"1900000"},

"pap": { name:"Papiamento (Papiamentu)", source:"udhr_pap", region:"carib", script:"latn", speakers:"271261", letter:"ñÑ", mark:"̃", punctuation:"’"},

"pau": { name:"Palauan", source:"udhr_pau", region:"seasia", script:"ascii", speakers:"17000"},

"pbb": { name:"Páez (Paez, Paes, Nasa Yuwe)", source:"udhr_pbb", region:"sam", script:"latn", speakers:"40000", letter:"üëäïáÜËÄÏÁ", mark:"̈́"},

"pcd": { name:"Picard", source:"udhr_pcd", region:"eur", script:"latn", speakers:"700000", letter:"èåûîéôçÈÅÛÎÉÔÇ", mark:"̧̀̊̂́", symbol:"°"},

"pcm": { name:"Nigerian Pidgin", source:"udhr_pcm", region:"afr", script:"ascii", speakers:"30000000"},

"pis": { name:"Pijin", source:"udhr_pis", region:"oce", script:"ascii", speakers:"24000"},

"piu": { name:"Pintupi-Luritja", source:"udhr_piu", region:"oce", script:"ascii", speakers:"1703"},

"pl": { name:"Polish", source:"cldr_pl,udhr_pol", region:"eur", script:"latn", speakers:"55000000", letter:"óÓąćęłńśźżĄĆĘŁŃŚŹŻ", mark:"̨́̇", punctuation:"«»§‐–—…”„†‡′″", symbol:"°", aux:"œŒŸàâåäæçéèêëîïôößùûüÿÀÂÅÄÆÇÉÈÊËÎÏÔÖÙÛǛ̧̂̊̈"},

"pnb": { name:"Western Panjabi", source:"cldr_pnb,udhr_pnb", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںهھہویےي", mark:"ُٓٔ", punctuation:"‐–—‘’“”′″"},

"pon": { name:"Pohnpeian (Ponapean)", source:"udhr_pon", region:"oce", script:"ascii", speakers:"31000"},

"ppl": { name:"Pipil", source:"udhr_ppl", region:"cam", script:"latn", speakers:"500", letter:"áéÁÉ", mark:"́"},

"prg": { name:"Prussian (Old Prussian)", source:"cldr_prg", region:"eur", script:"latn", speakers:"0", letter:"țȚāēģīķņōŗšūžĀĒĢĪĶŅŌŖŠŪŽḑḐ", mark:"̧̦̄̌", punctuation:"‐–—…“„"},

"prq": { name:"Ashéninka Perené", source:"udhr_prq", region:"sam", script:"latn", speakers:"~50000", letter:"íÍ", mark:"́", punctuation:"¿"},

"prs": { name:"Dari (Afghan Persian)", source:"udhr_pes_2", region:"casia", script:"arab", speakers:"12500000", letter:"اعلمیهجنحقوبشرصدسزآکئثتذضخپگظفغطأچژءي", mark:"ًٔٓ", punctuation:"،‐","number":"۱۹۴۸۲۳۵۶۷۰", other:"‌"},

"ps": { name:"Pashto (Pushtu, Pushto)", source:"cldr_ps", region:"casia", script:"arab", speakers:"~50000000", letter:"آاأءبپتټثجځچڅحخدډذرړزژږسشښصضطظعغفقکګگلمنڼهةوؤیيېۍئ", mark:"ًٌٍَُِّْٰٔٓ", punctuation:"٫٬٪؉‰","number":"۰۱۲۳۴۵۶۷۸۹", symbol:"−"},

"pt": { name:"Portuguese", source:"cldr_pt,udhr_por_PT,udhr_por_BR", region:"eur", script:"latn", speakers:"215000000", letter:"áàâãçéêíóòôõúºÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªåäæèëìîïñºöøùûüÿÅÄÆÈËÌÎÏÑÖØÙÛÜ̆̊̈̄"},

"qu": { name:"Quechua", source:"cldr_qu", region:"sam", script:"latn", speakers:"?", letter:"Ññʼ", mark:"̃", punctuation:"‰", aux:"ĀāĂăĒēĔĕĪīĬĭŌōŎŏŒœŪūŬŭŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÖØÙÚÛÜàáâãäåæçèéêëìíîïòóôöøùúûüÿ̧̀́̂̃̄̆̈̊", notes:"qu is a macrolanguage that encompasses the following more specific primary language subtags: cqu qub qud quf qug quh quk qul qup qur qus quw qux quy quz qva qvc qve qvh qvi qvj qvl qvm qvn qvo qvp qvs qvw qvz qwa qwc qwh qws qxa qxc qxh qxl qxn qxo qxp qxr qxt qxu qxw. qu is often preferred by legacy applications rather than qxp (Quechua, Puno)."},

"quc": { name:"K'iche' (Quiché)", source:"udhr_quc", region:"cam", script:"ascii", speakers:"2300000"},

"rar": { name:"Cook Islands Māori (Rarotongan)", source:"udhr_rar", region:"oce", script:"ascii", speakers:"21725"},

"rm": { name:"Romansh (Romansch, Rumantsch, Romanche)", source:"cldr_rm,udhr_roh_rumgr,udhr_roh_puter,udhr_roh_surmiran,udhr_roh_sursilv,udhr_roh_sutsilv,udhr_roh_vallader", region:"eur", script:"latn", speakers:"36622", letter:"àüöéèìòùÀÜÖÉÈÌÒÙ", mark:"̀̈́", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáâåäæçêëíîïñóôöøúûüÿÁÂÅÄÆÇÊËÍÎÏÑÓÔÖØÚÛÜ̧̆̂̊̈̄̃"},

"rn": { name:"Rundi (Kirundi)", source:"cldr_rn,udhr_run", region:"afr", script:"ascii", speakers:"8800000"},

"ro": { name:"Romanian (Rumanian, Roumanian)", source:"cldr_ro,udhr_ron_2006,udhr_ron_1993,udhr_ron_1953", region:"eur", script:"latn", speakers:"~25000000", letter:"âîÂÎșțȘȚăĂ", mark:"̦̆̂", punctuation:"«»‐–—…‘“”„", aux:"şţŞŢáàåäçéèêëñöüÁÀÅÄÇÉÈÊËÑÖǗ̧̀̊̈̃"},

"rof": { name:"Rombo (Kirombo)", source:"cldr_rof", region:"afr", script:"ascii", speakers:"?"},

"rom": { name:"Romani (Romany, Gypsy, Gipsy)", source:"udhr_rmn,udhr_rmn_1", region:"eur", script:"latn", speakers:"~1500000", letter:"àõùèìòâÀÕÙÈÌÒÂƟśěćŕăąňűźőģůščžŚĚĆŔĂĄŇŰŹŐĢŮŠČŽɵ", mark:"̨̧̀́̌̃̆̋̂̊"},

"ru": { name:"Russian", source:"cldr_ru,udhr_rus", region:"eur", script:"cyrl", speakers:"150000000", letter:"всеобщаядклрципчнтзгшюйьмуыхъжэфёВСЕОБЩАЯДКЛРЦИПЧНТЗГШЮЙЬМУЫХЪЖЭФЁ", mark:"̆̈", punctuation:"‐–—…‘‚“„«»§", aux:"́"},

"rup": { name:"Aromanian", source:"udhr_rmy", region:"eur", script:"latn", speakers:"250000", letter:"ãâÃÂ", mark:"̃̂"},

"rw": { name:"Kinyarwanda", source:"cldr_rw,udhr_kin", region:"afr", script:"ascii", speakers:"9800000"},

"rwk": { name:"Rwa (Rwo, Meru, Kirwo)", source:"cldr_rwk", region:"afr", script:"ascii", speakers:"400000"},

"sa": { name:"Sanskrit", source:"udhr_san", region:"sasia", script:"deva", speakers:"~15000", letter:"मनवधकरणजगतअभघषयपचशसएछबदटडहइआञउठथलढऽ", mark:"ािंो्ूेुौैीृॄ़", punctuation:"।", notes:"Added <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>."},

"sah": { name:"Yakut (Sakha)", source:"cldr_sah,udhr_sah", region:"nasia", script:"cyrl", speakers:"450000", letter:"абгҕдьийклмнҥоөпрстуүхһчыэецязювщъжфАБГҔДЬИЙКЛМНҤОӨПРСТУҮХҺЧЫЭЕЦЯЗЮВЩЪЖФ", mark:"̆", aux:"веёжзфцшщъюяВЕЁЖЗФЦШЩЪЮЯ̈"},

"saq": { name:"Samburu", source:"cldr_saq", region:"afr", script:"ascii", speakers:"240000"},

"sbp": { name:"Sangu (Kisangu, Kisango, Kirori, Eshisango, Rori, Sango)", source:"cldr_sbp", region:"afr", script:"ascii", speakers:"75000"},

"sc": { name:"Sardinian (Sard)", source:"udhr_src", region:"eur", script:"latn", speakers:"~1000000", letter:"òìàèùÒÌÀÈÙ", mark:"̀"},

"sco": { name:"Scots (Lowland Scots)", source:"udhr_sco", region:"eur", script:"ascii", speakers:"110000"},

"sd": { name:"Sindhi", source:"cldr_sd", region:"sasia", script:"arab", speakers:"25000000", letter:"آابٻپڀتثٺٽٿجھڃڄچڇحخدذڊڌڍڏرزڙسشصضطظعغفڦقکڪگڱڳلمنڻهوي", mark:"ٓ", punctuation:"‰", aux:"ئٔ"},

"se": { name:"Northern Sami", source:"cldr_se", region:"eur", script:"latn", speakers:"25000", letter:"áÁčđŋšŧžČĐŊŠŦŽ", mark:"́̌", aux:"ńŃàçéèíñóòúüøæåäãöÀÇÉÈÍÑÓÒÚÜØÆÅÄÃÖ̧̀̃̈̊"},

"seh": { name:"Sena", source:"cldr_seh", region:"afr", script:"latn", speakers:"1600000", letter:"áàâãçéêíóòôõúÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃"},

"ses": { name:"Koyraboro Senni (Eastern Songhay, Koroboro Senni, Koyra Senni)", source:"cldr_ses", region:"afr", script:"latn", speakers:"430000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"sey": { name:"Secoya", source:"udhr_sey", region:"sam", script:"latn", speakers:"400", letter:"ëñàéËÑÀÉ", mark:"̱̈̃̀́"},

"sg": { name:"Sango (Sangho)", source:"cldr_sg", region:"afr", script:"latn", speakers:"450000", letter:"âäêëîïôöùûüÂÄÊËÎÏÔÖÙÛÜ", mark:"̂̈̀"},

"shi": { name:"Tachelhit (Tashelhiyt, Shilha)", source:"cldr_shi", region:"afr", script:"tfng", speakers:"4000000", letter:"ⴰⴱⴳⵯⴷⴹⴻⴼⴽⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵓⵔⵕⵖⵙⵚⵛⵜⵟⵡⵢⵣⵥ"},

"shi-latn": { name:"Tachelhit (Tashelhiyt, Shilha) {Latin}", source:"cldr_shi_Latn", region:"afr", script:"latn", speakers:"4000000", letter:"ḍḥṛṣṭḌḤṚṢṬƐƔɛɣʷ", mark:"̣"},

"shk": { name:"Shilluk", source:"udhr_shk,7b9b98a8ced343c0f2356595d76c12d32b5dd0a5", region:"afr", script:"latn", speakers:"175000", letter:"ÀÁÄÈÉËÌÍÏÓÖØÙÚàáäèéëìíïóöøùú", mark:"́̈̀"},

"shn": { name:"Shan", source:"udhr_shn", region:"seasia", script:"mymr", speakers:"3300000", letter:"လၵပၼၽဝငသဢတမၸၾႁယၶၺထရ", mark:"ိ်ႈုၢႇွႆူးဵီႊႅႃႉေႂႄြ", punctuation:"။၊"},

"shp": { name:"Shipibo-Conibo (Shipibo-Konibo)", source:"udhr_shp", region:"sam", script:"latn", speakers:"26000", letter:"íáóéñúÍÁÓÉÑÚ", mark:"́̃", punctuation:"¿"},

"si": { name:"Sinhala (Sinhalese)", source:"cldr_si,udhr_sin,0de67cc747d85485d1c6e7c99ee9a6e885c80803", region:"sasia", script:"sinh", speakers:"16000000", letter:"අආඇඈඉඊඋඌඍඑඒඓඔඕඖකඛගඝඞඟචඡජඣඥටඨඩඪණඬතථදධනඳපඵබභමඹයරලවශෂසහළෆ", mark:"ංඃ්ාැෑිීුූෘෙේෛොෝෞෟ", punctuation:"§‐–—…‘’“”†‡′″", other:"‍"},

"sja": { name:"Epena (Eperara)", source:"udhr_sja", region:"sam", script:"ascii", speakers:"8300"},

"sk": { name:"Slovak", source:"cldr_sk,udhr_slk", region:"eur", script:"latn", speakers:"5200000", letter:"čďĺľňŕšťžűČĎĹĽŇŔŠŤŽŰáäéíóôúýÁÄÉÍÓÔÚÝ", mark:"́̈̌̂̋", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīŏōœřŭūĂĀĔĒĬĪŎŌŒŘŬŪŸàâåæçèêëìîïñòöøùûüÿÀÂÅÆÇÈÊËÌÎÏÑÒÖØÙÛǛ̧̆̊̄̃"},

"skr": { name:"Saraiki (Siraiki, Seraiki)", source:"udhr_skr", region:"sasia", script:"arab", speakers:"20000000", letter:"انسیحقودعلمشرپہڱھےکڄئتڻزںگڈفظجچبڑصڋخڔٹطآذضغةثٻي", mark:"ُٔٓ", punctuation:"۔،","number":"۱۲۳۴۵۶۷۸۹۰"},

"sl": { name:"Slovene (Slovenian)", source:"cldr_sl,udhr_slv", region:"eur", script:"latn", speakers:"2500000", letter:"čšžČŠŽ", mark:"̌", aux:"ăāćđĕēĭīŏōœŭūĂĀĆĐĔĒĬĪŎŌŒŬŪŸáàâåäæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̄̃"},

"sm": { name:"Samoan", source:"udhr_smo", region:"oce", script:"ascii", speakers:"510000"},

"smn": { name:"Inari Sami", source:"cldr_smn", region:"eur", script:"latn", speakers:"300", letter:"âäáÂÄÁčđŋšžČĐŊŠŽ", mark:"̂̌̈́", aux:"ńŃàçéèíñóòúüæøåãöÀÇÉÈÍÑÓÒÚÜÆØÅÃÖ̧̀̃̊"},

"sn": { name:"Shona", source:"cldr_sn,udhr_sna", region:"afr", script:"ascii", speakers:"15000000"},

"snk": { name:"Soninke", source:"udhr_snk", region:"afr", script:"latn", speakers:"2100000", letter:"ñÑŋŊ", mark:"̃"},

"snn": { name:"Siona", source:"udhr_snn", region:"sam", script:"latn", speakers:"500", letter:"ëñíäéËÑÍÄÉ", mark:"̱̈̃́"},

"so": { name:"Somali", source:"cldr_so,udhr_som", region:"afr", script:"ascii", speakers:"15000000"},

"sq": { name:"Albanian", source:"cldr_sq,UDHR", region:"eur", script:"latn", speakers:"5400000", letter:"çëÇË", mark:"̧̈", punctuation:"«»§‐–—…‘’“”′″‰"},

"sr": { name:"Serbian", source:"cldr_sr,udhr_srp_cyrl", region:"eur", script:"cyrl", speakers:"~9700000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–…‘‚“„", aux:"ёйщъыьэюяЁЙЩЪЫЬЭЮЯ̈̆"},

"sr-latn": { name:"Serbian {Latin}", source:"cldr_sr_Latn,udhr_srp_latn", region:"eur", script:"latn", speakers:"~9700000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–…‘‚“„", aux:"åÅ̊"},

"srr": { name:"Serer", source:"udhr_srr", region:"afr", script:"latn", speakers:"1230000", letter:"ñÑƭƴƊƁƬƳŋćŊĆṕṔɗɓ", mark:"̃́"},

"ss": { name:"Swati (Swazi)", source:"udhr_ssw", region:"afr", script:"ascii", speakers:"2300000"},

"st": { name:"Southern Sotho (Sotho, Sesotho, Southern Sesotho)", source:"udhr_sot", region:"afr", script:"ascii", speakers:"5600000"},

"su": { name:"Sundanese", source:"udhr_sun", region:"seasia", script:"ascii", speakers:"42000000"},

"su-sund": { name:"Sundanese (Sundanese)", source:"ba3345132c34462391346964eea198c4041e1a52", region:"seasia", script:"sund", speakers:"42000000", letter:"ᮊᮋᮌᮍᮎᮏᮐᮑᮒᮓᮔᮕᮖᮗᮘᮙᮚᮛᮜᮝᮞᮟᮠᮮᮯᮃᮄᮅᮆᮇᮈᮉ", mark:"ᮡᮢᮣᮀᮁᮂᮤᮥᮦᮧᮨᮩ᮪","number":"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹"},

"suk": { name:"Sukuma", source:"udhr_suk", region:"afr", script:"ascii", speakers:"5400000"},

"sus": { name:"Susu", source:"udhr_sus", region:"afr", script:"latn", speakers:"1060000", letter:"ƐƆƝɛɔɲ"},

"sv": { name:"Swedish", source:"cldr_sv,udhr_swe", region:"eur", script:"latn", speakers:"10000000", letter:"àéåäöÀÉÅÄÖ", mark:"̀́̊̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"āīĀĪŸáâãçèëíîïñóúÿüæøÁÂÃÇÈËÍÎÏÑÓÚÜÆØ̧̂̃̄"},

"sw": { name:"Swahili (Kiswahili)", source:"cldr_sw,udhr_swh", region:"afr", script:"ascii", speakers:"~7000000"},

"swb": { name:"Maore Comorian (Shimaore)", source:"udhr_swb", region:"afr", script:"latn", speakers:"97000", letter:"ãÃƁƊĩĨẽẼɓɗ", mark:"̃"},

"ta": { name:"Tamil", source:"cldr_ta,udhr_tam,b58628669c02b347a127405429a903afbcc07eb7", region:"sasia", script:"taml", speakers:"70000000", letter:"அஆஇஈஉஊஎஏஐஒஓஔஃகஙசஞடணதநபமயரலவழளறனஜஷஸஹ", mark:"ாிீுூெேைொோௌ்ௗ", punctuation:"§‐–—…‘’“”†‡′″", aux:"ஶ௦௧௨௩௪௫௬௭௮௯௰௱௲௳௴௵௶௷௸௹௺ௐ।॥"},

"tbz": { name:"Ditammari (Tammari)", source:"udhr_tbz", region:"afr", script:"latn", speakers:"150000", letter:"úàóãìùÚÀÓÃÌÙƉƐƆũŋĩŨŊĨɖɛɔ", mark:"̃́̀"},

"tca": { name:"Ticuna (Tikuna)", source:"udhr_tca", region:"sam", script:"latn", speakers:"47000", letter:"üéãñõúáíóÜÉÃÑÕÚÁÍÓĩũĨŨẽṯḏṉẼṮḎṈ", mark:"̱̃́̈͟"},

"tdd": { name:"Tai Nüa (Nɯa, Dehong Dai, Chinese Shan, Tai Mau, Tai Kong)", source:"7bbb60b1ae185293cf14c8d8088e14351477c26b", region:"seasia", script:"tale", speakers:"720000", letter:"ᥐᥑᥒᥓᥔᥕᥖᥗᥘᥙᥚᥛᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭᥰᥱᥲᥳᥴ", aux:"၀၁၂၃၄၅၆၇၈၉̀́̇̈̌"},

"tdt": { name:"Tetun Dili", source:"udhr_010", region:"seasia", script:"latn", speakers:"?", letter:"áíúóÁÍÚÓ", mark:"́", punctuation:"’"},

"te": { name:"Telugu", source:"cldr_te,udhr_tel", region:"sasia", script:"telu", speakers:"74002586", letter:"అఆఇఈఉఊఋౠఌౡఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలవశషసహళ", mark:"ఁంఃాిీుూృౄెేైొోౌ్ౕౖ", punctuation:"‘’“”", aux:"౦౧౨౩౪౫౬౭౮౯"},

"tem": { name:"Temne (Themne, Timne)", source:"udhr_tem", region:"afr", script:"latn", speakers:"1200000", letter:"ɅƆƏƐŋŊʌɔəɛ", punctuation:"‐"},

"teo": { name:"Teso", source:"cldr_teo", region:"afr", script:"ascii", speakers:"1900000"},

"tet": { name:"Tetum (Tetun)", source:"udhr_tet", region:"seasia", script:"ascii", speakers:"500000"},

"tg": { name:"Tajik (Tajiki, Tajiki Persian)", source:"cldr_tg,udhr_tgk", region:"casia", script:"cyrl", speakers:"8400000", letter:"эъломияуҳқбашрпегфтднзкхсвӣёҷчғюӯйжьЭЪЛОМИЯУҲҚБАШРПЕГФТДНЗКХСВӢЁҶЧҒЮӮЙЖЬ", mark:"̄̈̆", punctuation:"‰", aux:"цщыьЦЩЫЬ"},

"th": { name:"Thai (Siamese)", source:"cldr_th,udhr_tha,1935c4dc5720d8b5ca3fe2e8f19a794a59bba8af", region:"seasia", script:"thai", speakers:"44000000", letter:"ฯๆกขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮะาๅำเแโใไ", mark:"์็่้๊๋ัิีึืุู","number":"๐๑๒๓๔๕๖๗๘๙", punctuation:"‐–—‘’“”…′″๏๚๛", symbol:"฿", aux:"ํ"},

"ti": { name:"Tigrinya", source:"cldr_ti,udhr_tir", region:"afr", script:"ethi", speakers:"6900000", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍቐቑቒቓቔቕቖቘቚቛቜቝበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾዀዂዃዄዅወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ", mark:"፟", punctuation:"፣፡’", aux:"ሇቇኇኯዏዯዸዹዺዻዼዽዾዿጏጘጙጚጛጜጝጞጟፘፙፚⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶓⶔⶕⶖⶏⶐⶑⶒⶠⶡⶢⶣⶤⶥⶦⶨⶩⶪⶫⶬⶭⶮⶰⶱⶲⶳⶴⶵⶶⶸⶹⶺⶻⶼⶽⶾⷀⷁⷂⷃⷄⷅⷆⷈⷉⷊⷋⷌⷍⷎⷐⷑⷒⷓⷔⷕⷖⷘⷙⷚⷛⷜⷝⷞ᎐᎑᎒᎓᎔᎕᎖᎗᎘᎙ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ"},

"tiv": { name:"Tiv", source:"udhr_tiv", region:"afr", script:"latn", speakers:"2200000", letter:"ôÔ", mark:"̂"},

"tk": { name:"Turkmen", source:"cldr_tk,udhr_tuk_latn", region:"casia", script:"latn", speakers:"7500000", letter:"çäöüýÇÄÖÜÝžňşŽŇŞ", mark:"̧̈̌́", punctuation:"§–—…“”‐‰"},

"tk-cyrl": { name:"Turkmen {Cyrillic}", source:"udhr_tuk_cyrl", region:"casia", script:"cyrl", speakers:"7500000", letter:"адмхуклрынңәиецясгшбптчвзэоҗйөүъюжфёАДМХУКЛРЫНҢӘИЕЦЯСГШБПТЧВЗЭОҖЙӨҮЪЮЖФЁ", mark:"̆̈", punctuation:"‐–"},

"tl": { name:"Tagalog", source:"udhr_tgl_tglg", region:"seasia", script:"ascii", speakers:"28000000"},

"tly": { name:"Talysh", source:"udhr_tly", region:"wasia", script:"latn", speakers:"900000", letter:"çÇƏığşİĞŞə", mark:"̧̇̆"},

"tn": { name:"Tswana (Setswana)", source:"udhr_tsn", region:"afr", script:"latn", speakers:"5000000", letter:"šŠ", mark:"̌", punctuation:"·‐"},

"to": { name:"Tongan", source:"cldr_to,udhr_ton", region:"oce", script:"latn", speakers:"169000", letter:"āēīōūĀĒĪŌŪáéíóúÁÉÍÓÚʻ", mark:"́̄", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàâåäæçèêëìîïñòôöøùûüÿÀÂÅÄÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̊̈̃"},

"tob": { name:"Toba (Qom, Kom, Chaco Sur, Toba Sur)", source:"udhr_tob", region:"sam", script:"latn", speakers:"40000", letter:"ỹỸíÍ", mark:"̃́"},

"toi": { name:"Tonga (Chitonga, Zambezi)", source:"udhr_toi", region:"afr", script:"ascii", speakers:"1500000"},

"toj": { name:"Tojolab'al", source:"udhr_toj", region:"cam", script:"ascii", speakers:"52000", punctuation:"’"},

"top": { name:"Papantla Totonac (Lowland Totonac)", source:"udhr_top", region:"cam", script:"ascii", speakers:"80000"},

"tpi": { name:"Tok Pisin (Pidgin English)", source:"udhr_tpi", region:"seasia", script:"ascii", speakers:"4000000"},

"tr": { name:"Turkish (Istanbul Turkish)", source:"cldr_tr,udhr_tur", region:"wasia", script:"latn", speakers:"71000000", letter:"çöüâÇÖÜÂğışĞŞİ", mark:"̧̇̆̈̂", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàåäæèêëìîïñòôøùûÿÀÅÄÆÈÊËÌÎÏÑÒÔØÙÛ̀̊̃"},

"ts": { name:"Tsonga (Xitsonga)", source:"udhr_tso_MZ,udhr_tso_ZW", region:"afr", script:"latn", speakers:"13000000", letter:"ìàçãòèùíéáúÌÀÇÃÒÈÙÍÉÁÚ", mark:"̧̀̃́", punctuation:"’"},

"tsz": { name:"Purépecha (Tarascan)", source:"udhr_tsz", region:"cam", script:"latn", speakers:"125000", letter:"áïéíÁÏÉÍⱭƲŋŊɑʋ", mark:"́̈"},

"tt": { name:"Tatar", source:"cldr_tt,udhr_tat", region:"eur", script:"cyrl", speakers:"5200000", letter:"кешхоуларынңгмидцясбәтьвзпөъһҗчүйфюэжКЕШХОУЛАРЫНҢГМИДЦЯСБӘТЬВЗПӨЪҺҖЧҮЙФЮЭЖёщЁЩ", mark:"̈̆", aux:"ғқӯҒҚӮ̄"},

"tw-akuapem": { name:"Akuapem Twi", source:"udhr_aka_akuapem", region:"afr", script:"latn", speakers:"6000000", letter:"ɛɔƐƆòÒ", mark:"̀", notes:"Macrolanguage is ak."},

"tw-asante": { name:"Ashanti (Asante, Asante Twi)", source:"udhr_aka_asante", region:"afr", script:"latn", speakers:"2800000", letter:"ɛɔƐƆ", notes:"Macrolanguage is ak."},

"twq": { name:"Tasawaq", source:"cldr_twq", region:"afr", script:"latn", speakers:"8000", letter:"ɲẽẼŋšžŊŠŽƝãõÃÕ", mark:"̃̌"},

"ty": { name:"Tahitian", source:"udhr_tah", region:"oce", script:"latn", speakers:"68000", letter:"āūōēīĀŪŌĒĪ", mark:"̄"},

"tyv": { name:"Tuvan (Tuvinian, Tyvan, Tuvin)", source:"udhr_tyv", region:"nasia", script:"cyrl", speakers:"280000", letter:"кижнңэргелбүтуазычдьсмяоюцхпшөйвъфёКИЖНҢЭРГЕЛБҮТУАЗЫЧДЬСМЯОЮЦХПШӨЙВЪФЁ", mark:"̆̈"},

"tzh": { name:"Tzeltal (Ts'eltal)", source:"udhr_tzh", region:"cam", script:"ascii", speakers:"450000", symbol:"´"},

"tzm": { name:"Central Atlas Tamazight (Central Morocco Tamazight, Middle Atlas Tamazight, Central Shilha, Beraber, Braber) {Latin}", source:"cldr_tzm,udhr_tzm_tfng", region:"afr", script:"latn", speakers:"2500000", letter:"ɛɣḍḥṛṣṭẓỵḌḤṚṢṬẒỴƐƔâéçÂÉÇʷ", mark:"̧̣̂́"},

"tzo": { name:"Tzotzil", source:"udhr_tzc", region:"cam", script:"latn", speakers:"400000", letter:"óáéíúÓÁÉÍÚ", mark:"́", punctuation:"’"},

"ug": { name:"Uyghur (Uighur, Eastern Turki)", source:"cldr_ug,udhr_uig_arab", region:"casia", script:"arab", speakers:"25000000", letter:"ئاەبپتجچخدرزژسشغفقكگڭلمنھوۇۆۈۋېىي", mark:"ٔ", punctuation:"،؛"},

"ug-latn": { name:"Uyghur (Uighur, Eastern Turki) {Latin}", source:"udhr_uig_latn", region:"casia", script:"latn", speakers:"25000000", letter:"öéüÖÉÜ", mark:"̈́", punctuation:"’"},

"uk": { name:"Ukrainian", source:"cldr_uk,udhr_ukr", region:"eur", script:"cyrl", speakers:"45000000", letter:"абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯʼ", mark:"̈̆", punctuation:"–’“„‐«»§", symbol:"№", aux:"ёъыэЁЪЫЭ́"},

"umb": { name:"Umbundu (South Mbundu)", source:"udhr_umb,udhr_011", region:"afr", script:"latn", speakers:"6000000", letter:"ñêãîõâÑÊÃÎÕÂ", mark:"̃̂", punctuation:"’"},

"ur": { name:"Urdu", source:"cldr_urdu,udhr_urd,2a19c3255e234cbb86e12ec0dc966684ccdb2965", region:"sasia", script:"arab", speakers:"65000000", letter:"اآبپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنںوؤہۂھءیئےهي", mark:"ًَُِّٰٔٓ", punctuation:"،؍٫٬؛؟۔”“؁٪","number":"۰۱۲۳۴۵۶۷۸۹", aux:"؃ۃٻٺټٽي"},

"ura": { name:"Urarina (Itucali, Simacu, Shimacu)", source:"udhr_ura", region:"sam", script:"latn", speakers:"6000", letter:"úóíÚÓÍ", mark:"́"},

"uz": { name:"Uzbek", source:"cldr_uz,udhr_uzn_latn", region:"casia", script:"latn", speakers:"27000000", letter:"ʻʼ", punctuation:"‐–—…‘’“”„′″«»§"},

"uz-arab": { name:"Uzbek {Arabic}", source:"cldr_uz_Arab", region:"casia", script:"arab", speakers:"27000000", letter:"ءآأؤئابةتثجحخدذرزسشصضطظعغفقلمنهويپچژکگۇۉی", mark:"ًٌٍَُِّْٰٓٔ", punctuation:"؉٪٫٬","number":"۰۱۲۳۴۵۶۷۸۹", aux:"يټځڅډړږښګڼۍې", other:"‌‍‎‏"},

"uz-cyrl": { name:"Uzbek {Cyrillic}", source:"cldr_uz_Cyrl,udhr_uzn_cyrl", region:"casia", script:"cyrl", speakers:"27000000", letter:"инсоҳуқлармждекцяйбшгтўвэъпчзёфхюғИНСОҲУҚЛАРМЖДЕКЦЯЙБШГТЎВЭЪПЧЗЁФХЮҒ", mark:"̆̈", punctuation:"‐–", aux:"щыьЩЫЬ"},

"vai": { name:"Vai (Vy, Gallinas)", source:"cldr_vai,udhr_vai,a5c6b1f62cb3d71b6acccbe995ff47db10e94963", region:"afr", script:"vaii", speakers:"120000", letter:"ꔀꔁꔂꔃꔄꔅꔆꔇꔈꔉꔊꔋꔌꔍꔎꔏꔐꔑꔒꔓꔔꔕꔖꔗꔘꔙꔚꔛꔜꔝꔞꔟꔠꔡꔢꔣꔤꔥꔦꔧꔨꔩꔪꔫꔬꔭꔮꔯꔰꔱꔲꔳꔴꔵꔶꔷꔸꔹꔺꔻꔼꔽꔾꔿꕀꕁꕂꕃꕄꕅꕆꕇꕈꕉꕊꕋꕌꕍꕎꕏꕐꕑꕒꕓꕔꕕꕖꕗꕘꕙꕚꕛꕜꕝꕞꕟꕠꕡꕢꕣꕤꕥꕦꕧꕨꕩꕪꕫꕬꕭꕮꕯꕰꕱꕲꕳꕴꕵꕶꕷꕸꕹꕺꕻꕼꕽꕾꕿꖀꖁꖂꖃꖄꖅꖆꖇꖈꖉꖊꖋꖌꖍꖎꖏꖐꖑꖒꖓꖔꖕꖖꖗꖘꖙꖚꖛꖜꖝꖞꖟꖠꖡꖢꖣꖤꖥꖦꖧꖨꖩꖪꖫꖬꖭꖮꖯꖰꖱꖲꖳꖴꖵꖶꖷꖸꖹꖺꖻꖼꖽꖾꖿꗀꗁꗂꗃꗄꗅꗆꗇꗈꗉꗊꗋꗌꗍꗎꗏꗐꗑꗒꗓꗔꗕꗖꗗꗘꗙꗚꗛꗜꗝꗞꗟꗠꗡꗢꗣꗤꗥꗦꗧꗨꗩꗪꗫꗬꗭꗮꗯꗰꗱꗲꗳꗴꗵꗶꗷꗸꗹꗺꗻꗼꗽꗾꗿꘀꘁꘂꘃꘄꘅꘆꘇꘈꘉꘊꘋꘌ", aux:"ꘓꘘ꘍꘎꘏"},

"vai-latn": { name:"Vai (Vy, Gallinas) {Latin}", source:"cldr_vai_Latn", region:"afr", script:"ascii", speakers:"120000", letter:"áãéíóõúÁÃÉÍÓÕÚƁƊƐƆĩŋũĨŊŨẽẼɓɗɛɔ", mark:"́̃"},

"ve": { name:"Venda (Tshivenḓa, Luvenḓa)", source:"udhr_ven", region:"afr", script:"latn", speakers:"1300000", letter:"ṱḽḓṅṋṰḼḒṄṊ", mark:"̭̇", punctuation:"“”"},

"ven": { name:"Venetian (Venetan)", source:"udhr_vec", region:"eur", script:"latn", speakers:"3900000", letter:"óàòèùéìçÓÀÒÈÙÉÌÇƚȽđĐ", mark:"̧́̀", punctuation:"’—"},

"vep": { name:"Veps (Vepsian)", source:"udhr_vep", region:"eur", script:"latn", speakers:"5900", letter:"üäöÜÄÖšžčŠŽČ", mark:"̈̌", punctuation:"’"},

"vi": { name:"Vietnamese", source:"cldr_vi,udhr_vie", region:"seasia", script:"latn", speakers:"75000000", letter:"àãáâèéêìíòõóôùúýÀÃÁÂÈÉÊÌÍÒÕÓÔÙÚÝơưƠƯăđĩũĂĐĨŨảạằẳẵắặầẩẫấậẻẽẹềểễếệỉịỏọồổỗốộờởỡớợủụừửữứựỳỷỹỵẢẠẰẲẴẮẶẦẨẪẤẬẺẼẸỀỂỄẾỆỈỊỎỌỒỔỖỐỘỜỞỠỚỢỦỤỪỬỮỨỰỲỶỸỴ", mark:"̛̣̀̉̃́̆̂", punctuation:"§‐–—…‘’“”†‡′″"},

"vmw": { name:"Makhuwa (Makua, Macua)", source:"udhr_vmw", region:"afr", script:"latn", speakers:"6600000", letter:"çõãÇÕÃ", mark:"̧̃", punctuation:"’…"},

"vo": { name:"Volapük", source:"cldr_vo", region:"eur", script:"latn", speakers:"20", letter:"äöüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘’“”"},

"vun": { name:"Wuunjo (Wunjo, Vunjo, Kivunjo)", source:"cldr_vun", region:"afr", script:"ascii", speakers:"?"},

"wa": { name:"Walloon", source:"udhr_wln", region:"eur", script:"latn", speakers:"600000", letter:"éåèûîôâêçàÉÅÈÛÎÔÂÊÇÀ", mark:"̧́̊̀̂"},

"wae": { name:"Walser German (Walliser German)", source:"cldr_wae", region:"eur", script:"latn", speakers:"22000", letter:"áäãéíóöõúüÁÄÃÉÍÓÖÕÚÜčšũČŠŨ", mark:"́̈̃̌", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåæçèêëìîïñòôøßùûÿÀÂÅÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̄"},

"war": { name:"Waray", source:"udhr_war", region:"seasia", script:"ascii", speakers:"2600000"},

"wo": { name:"Wolof", source:"cldr_wo,udhr_wol", region:"afr", script:"latn", speakers:"4200000", letter:"ëñàéóËÑÀÉÓŋŊ", mark:"̈̃̀́", punctuation:"‰", aux:"ãÃ"},

"wwa": { name:"Waama (Yoabu)", source:"udhr_wwa", region:"afr", script:"latn", speakers:"50000", letter:"ãìàùèÃÌÀÙÈǹƆƐǸũŋŨŊɔɛ", mark:"̃̀"},

"xh": { name:"Xhosa", source:"cldr_xh,udhr_xho", region:"afr", script:"ascii", speakers:"8200000"},

"xog": { name:"Soga (Lusoga)", source:"cldr_xog", region:"afr", script:"ascii", speakers:"2100000"},

"xsm": { name:"Kasem", source:"udhr_xsm", region:"afr", script:"latn", speakers:"250000", letter:"ƐƆŋŊɛɔ"},

"yad": { name:"Yagua", source:"udhr_yad", region:"sam", script:"latn", speakers:"5700", letter:"ñíéáÑÍÉÁ", mark:"̃́"},

"yao": { name:"Yao", source:"udhr_yao", region:"afr", script:"ascii", speakers:"3100000"},

"yap": { name:"Yapese", source:"udhr_yap", region:"oce", script:"latn", speakers:"7400", letter:"ʼ", punctuation:"‐"},

"yav": { name:"Yangben (Central Yambasa)", source:"cldr_yav", region:"afr", script:"latn", speakers:"17000", letter:"áàâéèíìîóòôúùûÁÀÂÉÈÍÌÎÓÒÔÚÙÛǎǒǔǍƐǑƆǓāīŋōūĀĪŊŌŪɛɔ", mark:"́̀̂̌̄"},

"yi": { name:"Yiddish", source:"cldr_yi,udhr_ydd", region:"eur", script:"hebr", speakers:"1500000", letter:"אבגדזשהויחטײכךלמםנןסעפףצץקרתװױ", mark:"ִַָּֿׂ", punctuation:"׳״־‐–—", other:"‮‬"},

"ykg": { name:"Tundra Yukaghir (Northern Yukaghir)", source:"udhr_ykg", region:"nasia", script:"cyrl", speakers:"370", letter:"эльистачйкөдҥнбпрумогецяҕхжѳқзвфыющЭЛЬИСТАЧЙКӨДҤНБПРУМОГЕЦЯҔХЖѲҚЗВФЫЮЩ", mark:"̆"},

"yo": { name:"Yoruba", source:"cldr_yo,udhr_yor", region:"afr", script:"latn", speakers:"28000000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙńŃẹọṣẸỌṢ", mark:"̩̣́̀̄", punctuation:"‐"},

"yua": { name:"Yucatán Maya", source:"udhr_yua", region:"cam", script:"latn", speakers:"790000", letter:"ʼóíáúéÓÍÁÚÉ", mark:"́", punctuation:"‐"},

"za": { name:"Zhuang", source:"udhr_ccx", region:"easia", script:"ascii", speakers:"16000000", notes:"This may well be missing some letters."},

"zam": { name:"Miahuatlán Zapotec (Cuixtla Zapotec)", source:"udhr_zam", region:"cam", script:"latn", speakers:"1000", letter:"óáñíÓÁÑÍʼ", mark:"́̃"},

"zdj": { name:"Ngazidja Comorian", source:"udhr_zdj", region:"afr", script:"ascii", speakers:"700000"},

"zgh": { name:"Standard Moroccan Tamazight (Amazigh, Tamazight) (Tifinagh)", source:"cldr_zgh,udhr_zgh", script:"tfng", speakers:"?", region:"afr", letter:"ⴰⵍⵖⵓⵎⴹⵏⵉⵣⵔⴼⴳⴷⵊⴱⵜⵡⴽⵢⵙⵀⵛⵥⵇⵯⴻⵕⵟⵃⵄⵅⵚ"},

"zlm": { name:"Malay", source:"cldr_ms,udhr_mly_latn", region:"seasia", script:"ascii", speakers:"77000000"},

"zlm-arab": { name:"Malay {Arabic}", source:"udhr_mly_arab", region:"seasia", script:"arab", speakers:"77000000", letter:"ڤراشتهنحقسيمأجڬدبوڽڠعفكلچخظصزطۏؤئذ", mark:"ٔ", punctuation:"،","number":"٢"},

"zro": { name:"Záparo (Sápara, Zápara)", source:"udhr_zro", region:"sam", script:"latn", speakers:"350", letter:"ñÑ", mark:"̃"},

"ztu": { name:"Güilá Zapotec", source:"udhr_ztu", region:"cam", script:"latn", speakers:"9500", letter:"ëíéËÍÉ", mark:"̈́"},

"zu": { name:"Zulu", source:"cldr_zu,udhr_zul", region:"afr", script:"ascii", speakers:"12000000", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄"},

//"xxx":{name:"name",source:"cldr_xxx,UDHR",region:"Asia",script:"latn",speakers:"113000",letter:"",mark:"",punctuation:"",number:"",symbol:""},
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

// Notes
// kl: CLDR adds, letter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301}\u{0302}\u{0303}\u{030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field




