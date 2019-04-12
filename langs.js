var langs = {

// Any time this is changed, run _make-array.html to generate new code for char_lang.js !

"ab":{ name:"Abkhaz (Abxaz, Abkhazian)", source:"udhr_abk,b03748de41ccb9a6e724e938c3fea5013517b8fa", region:"wasia", script:"cyrl", speakers:"113000", letter: "ЏАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЫЬабвгдежзиклмнопрстуфхцчшыьџҔҕҚқҞҟҦҧҨҩҬҭҲҳҴҵҶҷҼҽҾҿӘәӠӡӶӷ", punctuation:"–‐" },

"ace": { name:"Acehnese", source:"UDHR", region:"seasia", script:"ascii", speakers:"3500000", punctuation:"‐“”" },

"acu": { name:"Achaur-Shiwiar", source:"UDHR", region:"sam", script:"latn", speakers:"7500", letter:"úáÚÁ", punctuation:"¿", mark:"\u{0301}" },

"ady": { name:"Adyghe (West Circassian)", source:"UDHR", region:"eur", script:"cyrl", speakers:"590000", letter:"цыхуэфащмтеднйпсожлъкрзгьишбячівюЦЫХУЭФАЩМТЕДНЙПСОЖЛЪКРЗГЬИШБЯЧІВЮ", number:"", punctuation:"", separator:"", symbol:"", mark:"\u{0306}" },

"af": { name:"Afrikaans", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"7100000", letter:"áâéèêëîïôöûÁÂÉÈÊËÎÏÔÖÛ", mark:"\u{0301}\u{0302}\u{0300}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″‰", aux:"àåäãæçíìóòúùüý̧̊̃" },

"agq": { name:"Aghem (Wum, Yum)", source:"CLDR", region:"afr", script:"latn", speakers:"27000", letter:"àâèêìîòôùûÀÂÈÊÌÎÒÔÙÛǎǐǒǔǍƐǏƗǑƆǓɄāěēīŋōūĀĚĒĪŊŌŪɛɨɔʉʔ", mark:"\u{0300}\u{0302}\u{030C}\u{0304}", punctuation:"‰" },

"agr": { name:"Aguaruna (Awajún)", source:"UDHR", region:"sam", script:"latn", speakers:"8000", letter:"áíÁÍ", mark:"\u{0301}", punctuation:"¡¿‐" },

"ajg": { name:"Aja", source:"UDHR", region:"afr", script:"latn", speakers:"550000", letter:"úóòùàèéìíõáÚÓÒÙÀÈÉÌÍÕÁƆƉƐƷŋŊɔɖɛʒ", mark:"\u{0300}\u{0301}\u{0303}" },

"ak": { name:"Akan", source:"CLDR", region:"afr", script:"latn", speakers:"22000000", letter:"ɛɔƐƆ", punctuation:"‰" },

"sq": { name:"Albanian", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"5400000", letter:"çëÇË", mark:"\u{0327}\u{0308}", punctuation:"«»§‐–—…‘’“”′″‰" },

"alt": { name:"Southern Altai", source:"UDHR", region:"nasia", script:"cyrl", speakers:"57000", letter:"кижнҥтапэрешдлцязыгьйсмбјчӱоуӧвщюъфхКИЖНҤТАПЭРЕШДЛЦЯЗЫГЬЙСМБЈЧӰОУӦВЩЮЪФХ", punctuation:"‐", separator:"", symbol:"" },

"amc": { name:"Amahuaca", source:"UDHR", region:"sam", script:"latn", speakers:"500", letter:"óÓ", mark:"\u{0301}" },

"amr": { name:"Amarakaeri", source:"UDHR", region:"sam", script:"latn", speakers:"500", mark:"\u{0331}", punctuation:"¿’" },

"am": { name:"Amharic", source:"cldr_am,udhr_amh", region:"afr", script:"ethi", speakers:"21634396", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ", number:"፩፪፫፬፭፮፯፰፱፲፳፴", punctuation:"፡፣፤፥፦።‐–‹›«»" },

"ami": { name:"Amis", source:"UDHR", region:"easia", script:"ascii", speakers:"180000" },

"arl": { name:"Arabela (Chiripuno, Chiripunu)", source:"UDHR", region:"sam", script:"latn", speakers:"50", letter:"úÚ", mark:"\u{0301}", punctuation:"¿" },

//"ar": { name:"Arabic", source:"cldr_ar,udhr_arb", region:"wasia", script:"arab", speakers:"290000000", letter:"ءأؤإئاآبةتثجحخدذرزسشصضطظعغفقكلمنهوىي", mark:"\u{064B}\u{064C}\u{064D}\u{064E}\u{064F}\u{0650}\u{0651}\u{0652}\u{0670}\u{0654}\u{0655}\u{0653}", number:"٠١٢٣٤٥٦٧٨٩", punctuation:"٫٬٪؉،؛؟‰‐–—…«»" },

"ar": { name:"Arabic", source:"cldr_ar,udhr_arb,927e530285eebcb2cc78d1fee4df691ab6def77e", region:"wasia", script:"arab", speakers:"290000000", letter:"ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي", mark:"\u{64B}\u{64C}\u{64D}\u{64E}\u{64F}\u{650}\u{651}\u{652}\u{653}\u{654}\u{655}\u{670}", number:"٠١٢٣٤٥٦٧٨٩", punctuation:"؉،؛؟٪٫٬‐–—…‰«»", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", aux:"ڢڧࢲـﷲٱ؍٬٭" },  

"hy": { name:"Armenian", source:"cldr_hy,udhr_hye,86422c72473b4ace41b3971e55e41a49a44dcbda", region:"wasia", script:"armn", speakers:"10000000", letter:"աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևօֆԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ", punctuation:"֊՝՜՞՛։․«»", aux:"֍֎֏", deprecated:"\u{55A}" },

"rup": { name:"Aromanian", source:"UDHR", region:"eur", script:"latn", speakers:"250000", letter:"ãâÃÂ", mark:"\u{0303}\u{0302}" },

"cni": { name:"Asháninka", source:"UDHR", region:"sam", script:"latn", speakers:"~35000", letter:"áéÁÉ", mark:"\u{0301}" },

"prq": { name:"Ashéninka Perené", source:"UDHR", region:"sam", script:"latn", speakers:"~50000", letter:"íÍ", mark:"\u{0301}", punctuation:"¿" },

"ast": { name:"Asturian", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"110000", letter:"áéíñóúüÁÉÍÑÓÚÜḥḷḤḶ", mark:"\u{0323}\u{0301}\u{0303}\u{0308}", punctuation:"¡¿«»§‐–—…‘’“”†‡′″‰", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîïºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÒÔÖØÙÛ\u{300}\u{306}\u{302}\u{30A}\u{304}\u{327}" },

"cpu": { name:"Pichis Ashéninka", source:"UDHR", region:"sam", script:"latn", speakers:"~50000", letter:"ñáéÑÁÉ", mark:"\u{0303}\u{0301}" },

"as": { name:"Assamese (Asamiya)", source:"CLDR", region:"sasia", script:"beng", speakers:"15000000", letter:"অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযৰলৱশষসহ", mark:"\u{09BC}\u{0982}\u{0981}\u{0983}\u{09CD}\u{09BE}\u{09BF}\u{09C0}\u{09C1}\u{09C2}\u{09C3}\u{09C7}\u{09C8}\u{09CB}\u{09CC}\u{09D7}", number:"০১২৩৪৫৬৭৮৯", punctuation:"‰", aux:"৲ৎর" },

"aii": { name:"Assyrian Neo-Aramaic", source:"udhr_aii,e04c91748b5079b9b5077f2206f53c2223dc7839", region:"wasia", script:"syrc", speakers:"232300", letter:"ܒܘܕܩܐܬܝܠܦܙܢܫܥܡܣܪܟܗܚܓܛܨ", mark:"\u{0738}\u{0739}\u{073C}\u{0732}\u{0735}\u{073F}\u{0742}\u{0741}\u{0740}\u{0747}", punctuation:"܆،؛؟" },

"asa": { name:"Asu (Pare, Kipare, Casu, Chasu, Athu, Chathu)", source:"CLDR", region:"afr", script:"ascii", speakers:"500000" },

"kwi": { name:"Awa-Cuaiquer (Awa Pit)", source:"UDHR", region:"sam", script:"latn", speakers:"13000", letter:"áñëóçâùéàêÁÑËÓÇÂÙÉÀÊ", mark:"\u{0327}\u{0301}\u{0303}\u{0308}\u{0302}\u{0300}", punctuation:"·" },

"ayr": { name:"Central Aymara", source:"UDHR", region:"sam", script:"latn", speakers:"2800000", letter:"ñïäíáëúÑÏÄÍÁËÚ", mark:"\u{0303}\u{0308}\u{0301}" },

"az-latn": { name:"Azerbaijani (Azeri) (Latin)", source:"CLDR,UDHR", region:"wasia", script:"latn", speakers:"26000000", letter:"çöüÇÖÜƏğışĞŞİə", mark:"\u{0327}\u{0307}\u{0306}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″" },

"az-cyrl": { name:"Azerbaijani (Azeri) (Cyrillic)", source:"CLDR,UDHR", region:"wasia", script:"latn", speakers:"26000000", letter:"аәбвгғдежзийјкҝлмноөпрстуүфхһчҹшыАӘБВГҒДЕЖЗИЙЈКҜЛМНОӨПРСТУҮФХҺЧҸШЫ", mark:"\u{0306}", punctuation:"‐–—…‘’“”†‡′″‰§", aux:"цщъьэюяЦЩЪЬЭЮЯ" },

"bba": { name:"Baatonum (Bariba, Baatombu, Baatonu, Barba, Barganchi, Bargawa, Bargu, Baruba, Berba, Bogung, Burgu)", source:"UDHR", region:"afr", script:"latn", speakers:"560000", letter:"àéùèóÀÉÙÈÓǹƐƆǸɛɔ", mark:"\u{0300}\u{0301}" },

"ban-latn": { name:"Bali (Balinese) (Latin)", source:"UDHR", region:"seasia", script:"ascii", speakers:"3300000" },

"ban-bali": { name:"Bali (Balinese) (Balinese script)", source:"c6399677b86828b4f094bb4d4d3174446d92bef5", region:"seasia", script:"bali", speakers:"3300000", letter:"ᬅᬆᬇᬈᬉᬊᬋᬌᬍᬎᬏᬐᬑᬒᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬝᬞᬟᬠᬡᬢᬣᬤᬥᬦᬧᬨᬩᬪᬫᬬᬭᬮᬯᬰᬱᬲᬳ", mark:"ᬂᬃᬄ᬴ᬵᬶᬷᬸᬹᬺᬻᬼᬽᬾᬿᭀᭁᭂᭃ᭄", punctuation:"᭞᭟᭚᭛᭜᭝᭠", number:"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙", aux:"ᬀᬁ" },

"ksf": { name:"Bafia", source:"CLDR", region:"afr", script:"latn", speakers:"60000", letter:"áéíóúÁÉÍÓÚǝƎƐƆŋŊɛɔ", mark:"\u{0301}" },

"bm": { name:"Bambara (Bamanankan)", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"4000000", letter:"ƐƝƆŋŊɛɲɔ", punctuation:"’" },

"bm-nkoo": { name:"Bambara (N'Ko)", source:"e04c91748b5079b9b5077f2206f53c2223dc7839", region:"afr", script:"nkoo", speakers:"4000000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߨߩߪߴߵߺ", mark:"\u{07EB}\u{07EC}\u{07ED}\u{07EE}\u{07EF}\u{07F0}\u{07F1}\u{07F2}\u{07F3}", number:"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶" },

"bax-latn": { name:"Bamum (Bamun, Bamoun) (Latin)", source:"UDHR", region:"afr", script:"latn", speakers:"420000", letter:"úéêüûâôîáèùàÚÉÊÜÛÂÔÎÁÈÙÀṅṄ", mark:"\u{0301}\u{0302}\u{0308}\u{0300}\u{0307}", punctuation:"‘’" },

"bn": { name:"Bengali (Bangla)", source:"cldr_bn,udhr_ben,f10b0a319d5c8ff26cc820cd9c84bc1150888ce9", region:"sasia", script:"beng", speakers:"238000000", letter:"অআইঈউঊঋএঐওঔকষখগঘঙচছজঝঞটঠডঢণতৎথদধনপফবভমযরলশসহঽ", mark:"\u{09BC}\u{0982}\u{0983}\u{0981}\u{09CD}\u{09BE}\u{09BF}\u{09C0}\u{09C1}\u{09C2}\u{09C3}\u{09C7}\u{09C8}\u{09CB}\u{09CC}\u{09D7}", number:"১২৩৪৫৬৭৮৯০", punctuation:"।", symbol:"৺৳", other:"\u{200C}\u{200D}", aux:"ৠঌৡৄৢৣ" },

"bas": { name:"Basaa (Bassa, Basa, Bissa, Mbene)", source:"CLDR", region:"afr", script:"latn", speakers:"300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƁƐǏǸǑƆǓāěēīńŋōūĀĚĒĪŃŊŌŪɓɛɔ", mark:"\u{1DC6}\u{1DC7}\u{0301}\u{0300}\u{0302}\u{030C}\u{0304}", number:"", punctuation:"", separator:"", symbol:"" },

"eu": { name:"Basque", source:"cldr_eu,udhr_eus", region:"eur", script:"latn", speakers:"550000", letter:"çñÇÑ", mark:"\u{0327}\u{0303}", punctuation:"§‐–—…‘’“”†‡′″", separator:"", symbol:"", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæéèêëíìîïóòôöøúùûüÿÁÀÂÅÄÃÆÉÈÊËÍÌÎÏÓÒÔÖØÚÙÛÜ\u{301}\u{300}\u{306}\u{302}\u{30A}\u{308}\u{304}" },

"be": { name:"Belorussian", source:"cldr_be,udhr_bel", region:"eur", script:"cyrl", speakers:"5000000", letter:"абвгджзеёійклмнопрстуўфхцчшыьэюяиАБВГДЖЗЕЁІЙКЛМНОПРСТУЎФХЦЧШЫЬЭЮЯИʼ", mark:"\u{0308}\u{0306}", punctuation:"‐«»", aux:"\u{301}" },

"bem": { name:"Bemba (ChiBemba, Cibemba, Ichibemba, Icibemba, Chiwemba)", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"4100000" },

"bez": { name:"Bena", source:"CLDR", region:"afr", script:"ascii", speakers:"670000" },

"bho": { name:"Bhojpuri", source:"UDHR", region:"sasia", script:"deva", speakers:"40000000", letter:"मनवधकरखतसयषटउचबहलघणपगठदभअएआओथशजडइछऔफढईझऐञ", mark:"\u{093E}\u{093F}\u{0902}\u{0941}\u{094D}\u{0947}\u{094B}\u{0940}\u{093C}\u{0942}\u{094C}\u{0943}\u{0948}", punctuation:"।" },

"bcl": { name:"Central Bicol (Bikol Naga)", source:"UDHR", region:"seasia", script:"ascii", speakers:"2500000" },

"brx": { name:"Bodo (Mech)", source:"CLDR", region:"sasia", script:"deva", speakers:"1330775", letter:"अआइईउऊऍएऐऑओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलळवशषसह", mark:"\u{093C}\u{0901}\u{0902}\u{093E}\u{093F}\u{0940}\u{0941}\u{0942}\u{0943}\u{0945}\u{0947}\u{0948}\u{0949}\u{094B}\u{094C}\u{094D}" },

"boa": { name:"Bora", source:"UDHR", region:"sam", script:"latn", speakers:"2400", letter:"úáéñíóÚÁÉÑÍÓɨȉƗȈ", mark:"\u{0301}\u{0303}\u{030F}" },

"bs-latn": { name:"Bosnian (Latin)", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"~3000000", letter:"čćžđšČĆŽĐŠ", mark:"\u{030C}\u{0301}", punctuation:"‐–—…‘’“”′″" },

"bs-cyrl": { name:"Bosnian (Cyrillic)", source:"CLDR,UDHR", region:"eur", script:"cyrl", speakers:"~3000000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–—…‘’“”′″" },

"br": { name:"Breton", source:"cldr_br,udhr_bre", region:"eur", script:"latn", speakers:"226000", letter:"êñùÊÑÙʼ", mark:"\u{0302}\u{0303}\u{0300}", punctuation:"’–", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèëíìîïóòôöøúûüÿÁÀÂÅÄÃÆÇÉÈËÍÌÎÏÓÒÔÖØÚÛǗ̧̆̊̈̄" },

"bug": { name:"Buginese", source:"d997476f6f5d5a7525a2cdf2d0790e944bfa83f2", region:"seasia", script:"bugi", speakers:"5000000", letter:"ᨀᨁᨂᨄᨅᨆᨈᨉᨊᨌᨍᨎᨐᨑᨒᨓᨔᨖᨃᨏᨋᨇᨕ", mark:"\u{1A17}\u{1A18}\u{1A19}\u{1A1A}\u{1A1B}", punctuation:"᨞᨟" },

"bug-latn": { name:"Buginese (Latin)", source:"UDHR", region:"seasia", script:"ascii", speakers:"5000000" },

"bg": { name:"Bulgarian", source:"cldr_bg,udhr_bul", region:"eur", script:"cyrl", speakers:"9000000", letter:"абвгдежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ", mark:"\u{0306}", punctuation:"‐–—…‘‚“„″§", symbol:"№", aux:"ѐёѝыѣэѫЀЁЍЫѢЭѪ̀̈" },

"bum": { name:"Bulu", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"860000", letter:"óñôéáÓÑÔÉÁōńŌŃ", mark:"\u{0304}\u{0301}\u{0303}\u{0302}" },

"my": { name:"Burmese (Myanmar)", source:"cldr_my,udhr_mya", region:"seasia", script:"mymr", speakers:"33000000", letter:"ကခဂဃငစဆဇဈဉညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအဣဤဥဦဧဩဪဿ", mark:"\u{102C}\u{102B}\u{102D}\u{102E}\u{102F}\u{1030}\u{1031}\u{1032}\u{1036}\u{103B}\u{103C}\u{103D}\u{103E}\u{1037}\u{1039}\u{103A}\u{1038}", number:"၁၉၄၈၀၂၃၅၆၇", punctuation:"၏၊။၍၌‘’“”", aux:"႐႑႒႓႔႕႖႗႘႙ၵၚၽၾၐၑၥဨဢၒၓၔၕဳၖၗၘၙဴၢႆၤႈႊႏ" },

"buc": { name:"Bushi (Shibushi, Kibushi)", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"41700", letter:"ìàãÌÀÃɓŋĩŊĨƁ", mark:"\u{0300}\u{0303}", punctuation:"’" },

"ca": { name:"Catalan", source:"cldr_ca,udhr_cat", region:"eur", script:"latn", speakers:"4100000", letter:"àçéèíïóòúüÀÇÉÈÍÏÓÒÚÜ", mark:"\u{0327}\u{0300}\u{0301}\u{0308}", punctuation:"·¡¿«»§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŀŏōœŭūĂĀĔĒĬĪĿŎŌŒŬŪŸáâåäãæêëìîñºôöøùûÿÁÂÅÄÃÆÊËÌÎÑÔÖØÙÛ̆̂̊̃̄" },

"tzm": { name:"Central Atlas Tamazight (Central Morocco Tamazight, Middle Atlas Tamazight, Central Shilha, Beraber, Braber) (Latin)", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"2500000", letter:"ɛɣḍḥṛṣṭẓỵḌḤṚṢṬẒỴƐƔâéçÂÉÇʷ", mark:"\u{0327}\u{0323}\u{0302}\u{0301}" },

"zgh": { name:"Standard Moroccan Tamazight (Amazigh, Tamazight) (Tifinagh)", source:"CLDR,UDHR", script:"tfng", speakers:"?", region:"afr", letter:"ⴰⵍⵖⵓⵎⴹⵏⵉⵣⵔⴼⴳⴷⵊⴱⵜⵡⴽⵢⵙⵀⵛⵥⵇⵯⴻⵕⵟⵃⵄⵅⵚ" },

"ckb-arab": { name:"Central Kurdish (Sorani) (Arabic)", source:"cldr_ckb", region:"wasia", script:"arab", speakers:"7000000", letter:"ئابپتجچحخدرزڕژسشعغفڤقکگلڵمنھەوۆیێي", mark:"\u{0654}", punctuation:"٫٬٪؉", number:"٠١٢٣٤٥٦٧٨٩", aux:"ًٌٍَُِّْ" },

"ckb-latn": { name:"Central Kurdish (Sorani) (Latin)", source:"UDHR", region:"wasia", script:"latn", speakers:"7000000", letter:"şŞûîêçÛÎÊÇ", mark:"\u{0327}\u{0302}" },

"ce": { name:"Chechen", source:"CLDR", region:"eur", script:"cyrl", speakers:"1400000", letter:"аьбвгӏдеёжзийкхлмнопрстуфцчшщъыэюяАЬБВГӀДЕЁЖЗИЙКХЛМНОПРСТУФЦЧШЩЪЫЭЮЯ", mark:"\u{0308}\u{0306}", number:"", punctuation:"‐–—…‘‚“„«»§" },

"chr": { name:"Cherokee", source:"cldr_chr,udhr_chr_cased,udhr_chr_uppercase,4be08b04f56e7763cde42dfbebfb49497c506a2b", region:"nam", script:"cher", speakers:"~12000", letter:"ᏸᏹᏺᏻᏼᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴꭰꭱꭲꭳꭴꭵꭶꭷꭸꭹꭺꭻꭼꭽꭾꭿꮀꮁꮂꮃꮄꮅꮆꮇꮈꮉꮊꮋꮌꮍꮎꮏꮐꮑꮒꮓꮔꮕꮖꮗꮘꮙꮚꮛꮜꮝꮞꮟꮠꮡꮢꮣꮤꮥꮦꮧꮨꮩꮪꮫꮬꮭꮮꮯꮰꮱꮲꮳꮴꮵꮶꮷꮸꮹꮺꮻꮼꮽꮾꮿ", aux:"̣̱̤̰" },

"cgg": { name:"Chiga (Rukiga, Ruchiga)", source:"CLDR", region:"afr", script:"ascii", speakers:"1600000" },

"cu": { name:"Church Slavonic (Church Slavic, New Church Slavonic)", source:"cldr_cu", region:"eur", script:"cyrl", speakers:"0", letter:"абвгдеєжѕзиіїйклмнѻоѡѽѿпрстуфхцчшщъыьѣюѧѫѯѱѳѵѷАБВГДЕЄЖЅЗИІЇЙКЛМНѺОѠѼѾПРСТУФХЦЧШЩЪЫЬѢЮѦѪѮѰѲѴѶꙿꙁꙍꙋꙗꙀꙌꙊꙖⸯ", mark:"\u{0487}\u{0483}\u{2DE0}\u{2DE1}\u{2DE2}\u{2DE3}\u{2DE4}\u{2DE5}\u{2DE6}\u{2DE7}\u{2DE8}\u{2DE9}\u{2DEA}\u{2DEC}\u{2DED}\u{2DEF}\u{2DF1}\u{2DF4}\u{A67D}", punctuation:"꙾꙳–—‐", symbol:"҂", aux:"҈҉҄ҥҁџѥѩѭҤҀЏѤѨѬⷶⷷⷸⷫⷵⷮⷹⷰⷲⷳⷺⷻⷼⷽⷾⷿ꙰꙱꙲꙯ꙣꙴꙃꙅꙵꙶꙇꙉꙥꙧꙩꙫꙭꙮꚙꚛꙷꚞꙻꙡꙏꙸꙑꙹꙺꙓꙕꚟꙙꙛꙝꙟꙢꙂꙄꙆꙈꙤꙦꙨꙪꙬꚘꚚꙠꙎꙐꙒꙔꙘꙚꙜꙞ︯︮" },

"ksh": { name:"Kölsch (Colognian)", source:"cldr_ksh", region:"eur", script:"latn", speakers:"250000", letter:"ėœůĖŒŮåäæëößüÅÄÆËÖÜ", mark:"\u{030A}\u{0308}\u{0307}", punctuation:"‐–—…‘‚“„†‡§⸗", symbol:"°", aux:"ăāĕēğĭīĳıłŏōŭūĂĀĔĒĞĬĪĲŁŎŌŬŪŸáàâãçéèêíìîïñóòôøúùûÿÁÀÂÃÇÉÈÊÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̃̄" },

"kw": { name:"Cornish", source:"CLDR", region:"eur", script:"ascii", speakers:"~350" },

"hr": { name:"Croatian", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"5600000", letter:"čćžđšČĆŽĐŠ", mark:"\u{030C}\u{0301}", punctuation:"‐–—…‘’‚“”„′″" },

"cs": { name:"Czech (Bohemian)", source:"cldr_cs,udhr_ces", region:"eur", script:"latn", speakers:"10700000", letter:"áéíóúýÁÉÍÓÚÝčďěňřšťůžČĎĚŇŘŠŤŮŽ", mark:"\u{0301}\u{030C}\u{030A}", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīľłŏōœŕŭūĂĀĔĒĬĪĽŁŎŌŒŔŬŪŸàâåäãæçèêëìîïñòôöøùûüÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̈̃̄" },

"cbu": { name:"Candoshi-Shapra (Candoxi, Kandoshi, Murato)", source:"UDHR", region:"sam", script:"latn", speakers:"1100", letter:"íáÍÁ", mark:"\u{0301}", punctuation:"¿¡" },

"cot": { name:"Caquinte (Poyenisati)", source:"UDHR", region:"sam", script:"latn", speakers:"500", letter:"óÓ", mark:"\u{0301}", punctuation:"¿" },

"cbr": { name:"Cashibo (Caxibo, Cacibo, Cachibo, Cahivo, Cacataibo, Managua, Hagueti)", source:"UDHR", region:"sam", script:"latn", speakers:"1200", letter:"ñëúíáéóÑËÚÍÁÉÓ", mark:"\u{0301}\u{0303}\u{0308}\u{0301}", punctuation:"¿" },

"cbs": { name:"Cashinahua (Kashinawa, Kaxinawá, Caxinawá, Hantxa Kuin, Huni Kui)", source:"UDHR", region:"sam", script:"latn", speakers:"1200", letter:"íÍ", mark:"\u{0301}", punctuation:"¿" },

"ceb": { name:"Cebuano (Bisaya)", source:"UDHR", region:"seasia", script:"ascii", speakers:"21000000" },

"cbi": { name:"Chachi (Cha'palaa, Cayapa)", source:"UDHR", region:"sam", script:"latn", speakers:"9500", letter:"ñóúáíéÑÓÚÁÍÉ", mark:"\u{0303}\u{0301}", punctuation:"¿¡" },

"ccp": { name:"Chakma", source:"CLDR,UDHR", region:"sasia", script:"cakm", speakers:"330000", letter:"𑄟𑄚𑄃𑄇𑄥𑄢𑄝𑄅𑄉𑄌𑄙𑄡𑄠𑄖𑄑𑄎𑄘𑄦𑄣𑄛𑄏𑄈𑄊𑄜𑄓𑄋𑄗𑄞𑄍𑄕𑄒𑄄𑄆𑄐𑄔𑄤", mark:"\u{1112C}\u{1112D}\u{11134}\u{11127}\u{11101}\u{1112E}\u{11133}\u{11128}\u{11129}\u{1112A}\u{11131}\u{11130}\u{1112B}\u{1112F}\u{11132}\u{11100}\u{11102}", number:"০১২৩৪৫৬৭৮৯𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿𑄶", punctuation:"𑅁𑅃𑅂𑅀‰‐–—…‘’“”†‡′″§", notes:"UDHR uses Chakma digits, whereas CLDR shows only Bengali digits." },

"ch": { name:"Chamorro", source:"UDHR", region:"oce", script:"ascii", speakers:"95000" },

"cbt": { name:"Chayahuita", source:"UDHR", region:"sam", script:"latn", speakers:"7900", letter:"ëóíËÓÍ", mark:"\u{0308}\u{0301}", punctuation:"¿" },

"cic": { name:"Chickasaw", source:"UDHR", region:"nam", script:"latn", speakers:"70", letter:"óáíÓÁÍ", mark:"\u{0331}\u{0301}", punctuation:"—" },

"cfm": { name:"Falam Chin (Baro Halam)", source:"UDHR", region:"seasia", script:"ascii", speakers:"107000" },

"cnh": { name:"Haka Chin (Lai)", source:"UDHR", region:"seasia", script:"ascii", speakers:"446264" },

"hlt": { name:"Matu Chin", source:"UDHR", region:"seasia", script:"ascii", speakers:"40000" },

"ctd": { name:"Tedim Chin", source:"UDHR", region:"seasia", script:"ascii", speakers:"340000" },

"csa": { name:"Chiltepec Chinantec", source:"UDHR", region:"cam", script:"latn", speakers:"1800", letter:"öüïóáñäëéíúÖÜÏÓÁÑÄËÉÍÚ", mark:"\u{0337}\u{0331}\u{030D}\u{030E}\u{0308}\u{0301}\u{0303}", punctuation:"†" },

"chj": { name:"Ojitlán Chinantec", source:"UDHR", region:"cam", script:"latn", speakers:"38000", letter:"öíäñáéúïüëóÖÍÄÑÁÉÚÏÜËÓ", mark:"\u{0308}\u{0301}\u{0303}", punctuation:"–", symbol:"°" },

"cjk": { name:"Chokwe", source:"UDHR", region:"afr", script:"ascii", speakers:"980000" },

"chk": { name:"Chuukese (Trukese)", source:"UDHR", region:"oce", script:"ascii", speakers:"51000" },

"cof": { name:"Colorado (Tsafiki, Tsáchila)", source:"UDHR", region:"sam", script:"latn", speakers:"2300", letter:"íÍ", mark:"\u{0301}" },

"swb": { name:"Maore Comorian (Shimaore)", source:"UDHR", region:"afr", script:"latn", speakers:"97000", letter:"ãÃƁƊĩĨẽẼɓɗ", mark:"\u{0303}" },

"zdj": { name:"Ngazidja Comorian", source:"UDHR", region:"afr", script:"ascii", speakers:"700000" },

"co": { name:"Corsican", source:"UDHR", region:"eur", script:"latn", speakers:"200000", letter:"àèìùòÀÈÌÙÒ", mark:"\u{0300}", punctuation:"’" },

"csw": { name:"Swampy Cree (Maskekon, Omaškêkowak, Omushkego)", source:"UDHR", region:"nam", script:"cans", speakers:"2500", letter:"ᐁᐢᐱᑕᑲᒥᐠᐊᑭᒋᐃᑗᐎᐣᓂᑯᓯᓇᐅᔑᒧᓀᐡᑐᑌᑎᐸᐗᐳᒪᒶᐌᔭᓄᑾᔦᒣᐤᓴᓶᔕᑴᐯᐟᑫᓱᓉᐺᑡᐨᔓᑺᓋᔗᔾᔀᑊᔡᒬᒼ", punctuation:"᙮" },

"da": { name:"Danish", source:"cldr_da,udhr_dan", region:"eur", script:"latn", speakers:"5500000", letter:"æøåÆØÅ", mark:"\u{030A}", punctuation:"§‐–…‘’“”†′″", aux:"œŒŸǿǾáàâçéèêëíîïñóôúùûÿüäöÁÀÂÇÉÈÊËÍÎÏÑÓÔÚÙÛÜÄÖ̧́̀̂̈̃" },

"dua": { name:"Duala (Douala, Diwala, Dwela, Dualla, Dwala)", source:"CLDR", region:"afr", script:"latn", speakers:"90000", letter:"áéíóúÁÉÍÓÚƁƊƐƆŋūŊŪɓɗɛɔ", mark:"\u{0301}\u{0304}" },

"nl": { name:"Dutch", source:"cldr_nl,udhr_nld", region:"eur", script:"latn", speakers:"24000000", letter:"áäéëíïóöúüÁÄÉËÍÏÓÖÚÜ", mark:"\u{0301}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″", aux:"œŒŸàâåãæçèêîñôøùûÿÀÂÅÃÆÇÈÊÎÑÔØÙÛ̧̀̂̊̃" },

"dz": { name:"Dzongkha (Bhutanese)", source:"cldr_dz,udhr_dzo", region:"sasia", script:"tibt", speakers:"171080", letter:"ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ", mark:"\u{0F72}\u{0F7A}\u{0F7C}\u{0F74}\u{0F90}\u{0F91}\u{0F92}\u{0F94}\u{0F97}\u{0F99}\u{0F9F}\u{0FA0}\u{0FA1}\u{0FA3}\u{0FA4}\u{0FA5}\u{0FA6}\u{0FA8}\u{0FA9}\u{0FAA}\u{0FAB}\u{0FAD}\u{0FB1}\u{0FB2}\u{0FB3}\u{0FB5}\u{0FB6}\u{0FB7}\u{0F71}\u{0F95}", punctuation:"༼༽༄༅༆༈༉༊࿐࿑༒࿒࿓࿔༌།༎༏༐༑༔་§‐–—…‘’“”†‡", number:"༡༢༣༤༥༦༧༨༩༠", symbol:"༶྾྿༴", aux:"྄ཊཋཌཎཾཥྀཻཽྚྛྜྞྺྻྼ" },

"dga": { name:"Dagaare", source:"UDHR", region:"afr", script:"latn", speakers:"1100000", letter:"ãÃƐƆũŨɛɔ", mark:"\u{0303}" },

"dag": { name:"Dagbani (Dagbanli, Dagbanle)", source:"UDHR", region:"afr", script:"latn", speakers:"1160000", letter:"ƐƆƔƷŋŊɛɔɣʒ" },

"ada": { name:"Dangme (Adaŋgbi)", source:"UDHR", region:"afr", script:"latn", speakers:"800000", letter:"íÍƆƐɔɛ", mark:"\u{0301}" },

"dhw": { name:"Danwar (Danuwar, Denwar, Dhanvar, Dhanwar, Rai)", source:"UDHR", region:"sasia", script:"ascii", speakers:"46000" },

"prs": { name:"Dari (Afghan Persian)", source:"UDHR", region:"casia", script:"arab", speakers:"12500000", letter:"اعلمیهجنحقوبشرصدسزآکئثتذضخپگظفغطأچژءي", mark:"\u{0654}\u{064B}\u{0653}", punctuation:"،‐", number:"۱۹۴۸۲۳۵۶۷۰", other:"\u{200C}" },

"ddn": { name:"Dendi", source:"UDHR", region:"afr", script:"latn", speakers:"32000", letter:"ãâõÃÂÕǎǒƆƐǍƉǑŋŊɔɛɖ", mark:"\u{0303}\u{030C}\u{0302}" },

"tbz": { name:"Ditammari (Tammari)", source:"UDHR", region:"afr", script:"latn", speakers:"150000", letter:"úàóãìùÚÀÓÃÌÙƉƐƆũŋĩŨŊĨɖɛɔ", mark:"\u{0303}\u{0301}\u{0300}" },

"duu": { name:"Drung (Dulong, Derung, Rawang, Trung)", source:"UDHR", region:"easia", script:"ascii", speakers:"14000" },

"ebu": { name:"Embu (Kîembu)", source:"CLDR", region:"afr", script:"latn", speakers:"320000", letter:"ĩũĨŨ", mark:"\u{0303}" },

"en": { name:"English", source:"cldr_en,udhr_eng", region:"eur", script:"ascii", speakers:"~380000000", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄" },

"eo": { name:"Esperanto", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"~3000", letter:"ĉĝĥĵŝŭĈĜĤĴŜŬ", mark:"\u{0302}\u{0306}", punctuation:"‐–—…‘’“”" },

"et": { name:"Estonian", source:"cldr_et,udhr_est", region:"eur", script:"latn", speakers:"1100000", letter:"õäöüÕÄÖÜšžŠŽ", mark:"\u{030C}\u{0303}\u{0308}", aux:"āēīŏōœūĀĒĪŎŌŒŪáàâåæçéèêëíìîïñóòôøúùûÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̂̊̄̆" },

"ee": { name:"Ewe", source:"cldr_ee,udhr_ewe", region:"afr", script:"latn", speakers:"20000000", letter:"áàãéèíìóòõúùÁÀÃÉÈÍÌÓÒÕÚÙƒƉƐƑƔƆƲĩŋũĨŊŨẽẼɖɛɣɔʋ", mark:"\u{0301}\u{0300}\u{0303}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕĭŏœŭĂĀĔĬŎŒŬŸâåäæçêëîïñôöøûüÿÂÅÄÆÇÊËÎÏÑÔÖØÛÜ̧̆̂̊̈̄" },

"ewo": { name:"Ewondo (Kolo)", source:"CLDR", region:"afr", script:"latn", speakers:"580000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƏƐǏǸǑƆǓěńŋĚŃŊəɛɔ", mark:"\u{0301}\u{0300}\u{0302}\u{030C}" },

"bin": { name:"Edo (Bini)", source:"UDHR", region:"afr", script:"ascii", speakers:"1000000" },

"sja": { name:"Epena (Eperara)", source:"UDHR", region:"sam", script:"ascii", speakers:"8300" },

"eve": { name:"Even (Lamut, Ewen, Eben, Orich, Ilqan)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"5700", letter:"стаьябэйилокчурмнхдеҥгөыцпвһюзѳшжъфщСТАЬЯБЭЙИЛОКЧУРМНХДЕҤГӨЫЦПВҺЮЗѲШЖЪФЩ", mark:"\u{0306}", punctuation:"‐" },

"evn": { name:"Evenki (Tungus, Solon)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"17000", letter:"упкатңилэбгдерӣынӯмвчзоюцяьйсёһъщжхфУПКАТҢИЛЭБГДЕРӢЫНӮМВЧЗОЮЦЯЬЙСЁҺЪЩЖХФ", mark:"\u{0304}\u{0306}\u{0308}", punctuation:"–" },

"fo": { name:"Faroese", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"66000", letter:"áðíóúýæøÁÐÍÓÚÝÆØ", mark:"\u{0301}", punctuation:"́§‐–…‘’“”†′″" },

"fil": { name:"Filipino", source:"cldr_fil", region:"seasia", script:"latn", speakers:"28000000", letter:"ñÑ", mark:"\u{0303}", punctuation:"§‐–—…‘’“”′″", aux:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ́̀̂" },

"fi": { name:"Finnish", source:"cldr_fi,udhr_fin", region:"eur", script:"latn", speakers:"5400000", letter:"åäöÅÄÖšžŠŽ", mark:"\u{030C}\u{030A}\u{0308}", punctuation:"»§‐–…’”", aux:"ăąāćčċďđěėęēğģħįīıķĺľļłńňņŋőœŕřśŝşťţŧůűųūźżĂĄĀĆČĊĎĐĚĖĘĒĞĢĦİĮĪĶĹĽĻŁŃŇŅŊŐŒŔŘŚŜŞŤŢŦŮŰŲŪŸŹŻʒǧǥȟǩșțǯǦǤȞǨȘȚƷǮáàâãçðéèêëíîïñóòôõßúùûýÿüþæøÁÀÂÃÇÐÉÈÊËÍÎÏÑÓÒÔÕÚÙÛÝÜÞÆØ̨̧̦̇́̀̆̂̃̄̋" },

"fr": { name:"French", source:"cldr_fr,udhr_fra", region:"eur", script:"latn", speakers:"150000000", letter:"àâæçéèêëîïôùûüÿÀÂÆÇÉÈÊËÎÏÔÙÛÜœŒŸ", mark:"\u{0327}\u{0300}\u{0302}\u{0301}\u{0308}", punctuation:"«»§‐–—…’“”†‡", aux:"āćēīĳřšſĀĆĒĪĲŘŠǔǓáåäãíìñóòöõøßúÁÅÄÃÍÌÑÓÒÖÕØÚ̊̃̄̌" },

"fur": { name:"Friulian (Friulan, Eastern Ladin)", source:"cldr_fur,udhr_fur", region:"eur", script:"latn", speakers:"600000", letter:"àâçèêìîòôùûÀÂÇÈÊÌÎÒÔÙÛ", mark:"\u{0327}\u{0300}\u{0302}", aux:"čğšČĞŠåéëïñóüÅÉËÏÑÓÜ̊̌́̈̆̃" },

"ff": { name:"Fulah (Fulani)", source:"CLDR", region:"afr", script:"latn", speakers:"24000000", letter:"ñÑƴƁƊƳŋŊɓɗ", mark:"\u{0303}" },

"fat": { name:"Fanti (Fantse, Mfantse, Fante)", source:"UDHR", region:"afr", script:"latn", speakers:"1900000", letter:"ãõÃÕƆƐɔɛ", mark:"\u{0303}" },

"fa": { name:"Persian (Farsi)", source:"cldr_fa,udhr_pes", region:"wasia", script:"arab", speakers:"~50000000", letter:"آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةیإي", mark:"\u{064B}\u{064D}\u{064C}\u{0651}\u{0654}\u{0650}\u{0653}\u{0655}", punctuation:"٫٬٪؉،؛؟‰‐…‹›«»", number:"۰۱۲۳۴۵۶۷۸۹", symbol:"−", other:"\u{200C}", aux:"ـَُِْٰٖإكىٕ" },

"fj": { name:"Fijian", source:"UDHR", region:"oce", script:"ascii", speakers:"339210" },

"fon": { name:"Fon", source:"UDHR", region:"afr", script:"latn", speakers:"2200000", letter:"óéòèáúàìùíÓÉÒÈÁÚÀÌÙÍǎǐǔƐƆƉǍǏǓěđĚĐɛɔɖ", mark:"\u{0301}\u{030C}\u{0300}" },

"fy": { name:"West Frisian", source:"cldr_fy,udhr_fri", region:"eur", script:"latn", speakers:"470000", letter:"ûâêúôòëïáàäéèíóöüýÛÂÊÚÔÒËÏÁÀÄÉÈÍÓÖÜÝ", mark:"\u{0302}\u{0301}\u{0300}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″", aux:"æùÆÙ" },

"gl": { name:"Galician", source:"cldr_gl,udhr_glg", region:"eur", script:"latn", speakers:"2400000", letter:"áéíñóúüªÁÉÍÑÓÚÜ", mark:"\u{0301}\u{0303}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ªàâåäãçèêëìîïºòôöõùûÀÂÅÄÃÇÈÊËÌÎÏÒÔÖÕÙÛ̧̀̂̊" },

"lg": { name:"Ganda (Luganda)", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"4100000", letter:"ŋŊ" },

"ka": { name:"Georgian", source:"cldr_ka,udhr_kat,2cafedfc80733bd49fb1ee6af49657333a88c1a3", region:"eur", script:"geor", speakers:"3700000", letter:"აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ", punctuation:"჻«»§‐–—…‘‚“„†‡′″", symbol:"№", aux:"ᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚᲛᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰ" },

"de": { name:"German", source:"cldr_de,udhr_udhr_deu_1996", region:"eur", script:"latn", speakers:"95000000", letter:"äößüÄÖÜ", mark:"\u{0308}", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçéèêëíìîïñóòôøúùûÿÁÀÂÅÃÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̇́̀̆̂̊̃̄" },

"el": { name:"Greek", source:"cldr_el,udhr_udhr_ell_monotonic", region:"eur", script:"grek", speakers:"12000000", letter:"αάβγδεέζηήθιίϊΐκλμνξοόπρσςτυύϋΰφχψωώΑΆΒΓΔΕΈΖΗΉΘΙΊΪΚΛΜΝΞΟΌΠΡΣΤΥΎΫΦΧΨΩΏἐἘ", mark:"\u{0301}\u{0308}\u{0313}", punctuation:"«»§‐–—…", aux:"ἀἄἂἆἁἅἃἇὰᾶἐἔἒἑἕἓὲἠἤἢἦἡἥἣἧὴῆἰἴἲἶἱἵἳἷὶῖῒῗὄὂὃὸὐὔὒὖὑὕὓὗὺῦῢῧὤὢὦὥὣὧὼῶἈἌἊἎἉἍἋἏᾺἘἜἚἙἝἛῈἨἬἪἮἩἭἫἯῊἸἼἺἾἹἽἻἿῚὌὊὋῸὙὝὛὟῪὬὪὮὭὫὯῺ̓̀͂̔" },

"gu": { name:"Gujarati", source:"cldr_gu,udhr_guj,cd18536eac759a61da40080d717664d64a29b397", region:"sasia", script:"gujr", speakers:"49000000", letter:"ૐઅઆઇઈઉઊઋૠઍએઐઑઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળઽ", mark:"\u{0ABC}\u{0A82}\u{0A81}\u{0A83}\u{0ABE}\u{0ABF}\u{0AC0}\u{0AC1}\u{0AC2}\u{0AC3}\u{0AC4}\u{0AC5}\u{0AC7}\u{0AC8}\u{0AC9}\u{0ACB}\u{0ACC}\u{0ACD}", punctuation:"§‐–—…‘’“”†‡′″", symbol:"૱", number:"૧૨૩૪૫૬૭૮૯૦", other:"\u{200D}\u{200C}", aux:"૰।॥" },

"guz": { name:"Gusii (Kisii, Ekegusii)", source:"CLDR", region:"afr", script:"ascii", speakers:"2200000" },

"gaa": { name:"Ga", source:"UDHR", region:"afr", script:"latn", speakers:"745000", letter:"ãÃƆƐŋŊɔɛ", mark:"\u{0303}" },

"ga": { name:"Irish", source:"cldr_ga,udhr_gle", region:"eur", script:"latn", speakers:"74000", letter:"áéíóúÁÉÍÓÚ", mark:"\u{0301}", aux:"ḃḋḟṁṗṡṫḂḊḞṀṖṠṪċġĊĠåÅ̊̇" },

"gd": { name:"Gaelic (Scots Gaelic)", source:"cldr_gd,udhr_gla", region:"eur", script:"latn", speakers:"57000", letter:"ìàòèùÌÀÒÈÙ", mark:"\u{0300}", aux:"ḋḟṁṗṡṫḊḞṀṖṠṪăāċĕēġĭīıłŏōœşŭūĂĀĊĔĒĠĬĪŁŎŌŒŞŬŪŸșȘáâåäãæçéêëíîïñóôöøúûüÿÁÂÅÄÃÆÇÉÊËÍÎÏÑÓÔÖØÚÛǗ̧̦̆̂̊̈̃̄̇" },

"gag": { name:"Gagauz", source:"UDHR", region:"eur", script:"latn", speakers:"590000", letter:"üäêöçÜÄÊÖÇışţŞİŢ", mark:"\u{0327}\u{0307}\u{0308}\u{0302}", punctuation:"—" },

"cab": { name:"Garifuna", source:"UDHR", region:"cam", script:"latn", speakers:"190000", letter:"üúñáéíèóÜÚÑÁÉÍÈÓ", mark:"\u{0308}\u{0301}\u{0303}\u{0300}" },

"gjn": { name:"Gonja", source:"UDHR", region:"afr", script:"latn", speakers:"230000", letter:"ƐƆŋŊɛɔ" },

"gug": { name:"Paraguayan Guarani", source:"UDHR", region:"sam", script:"latn", speakers:"6000000", letter:"óáñéãíúõèÓÁÑÉÃÍÚÕÈʼĩũĨŨẽẼ", mark:"\u{0301}\u{0303}\u{0300}" },

"gyr": { name:"Guarayu", source:"UDHR", region:"sam", script:"latn", speakers:"5900", letter:"ëñäüöéïËÑÄÜÖÉÏ", mark:"\u{0308}\u{0303}\u{0301}", punctuation:"’" },

"ha": { name:"Hausa", source:"cldr_ha,udhr_hau_NE,udhr_hau_NG", region:"afr", script:"latn", speakers:"70000000", letter:"ƙƴƁƊƘƳɓɗʼ", punctuation:"‐’‘", aux:"ƴƳáàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ̃́̀̂" },

"haw": { name:"Hawaiian", source:"CLDR,UDHR", region:"oce", script:"latn", speakers:"24000", letter:"āēīōūĀĒĪŌŪʻ", mark:"\u{0304}", punctuation:"’‘“”" },

"he": { name:"Hebrew", source:"cldr_he,udhr_heb,354bc8cccb82991d56ad51ac6f1c3b8437b28055", region:"wasia", script:"hebr", speakers:"9000000", letter:"אבגדהוזחטיכךלמםנןסעפףצץקרשת",  punctuation:"׳״־‐–—", symbol:"₪", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}", aux:"ְֱֲֳִֵֶַָֹֻּׁׂ" },

"hi": { name:"Hindi", source:"cldr_hi,udhr_hin,9d8e188be96400153901b55006feaaf9fd4bf3b1", region:"sasia", script:"deva", speakers:"260000000", letter:"अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह\u{958}\u{959}\u{95A}\u{95B}\u{95C}\u{95D}\u{95E}", mark:"\u{901}\u{902}\u{903}\u{93C}\u{93E}\u{93F}\u{940}\u{941}\u{942}\u{943}\u{947}\u{948}\u{94B}\u{94C}\u{94D}", punctuation:"।॥॰‘’“”—", number:"०१२३४५६७८९", other:"\u{200D}\u{200C}", aux:"ऍऑऽॐॅॉ" },

"hu": { name:"Hungarian", source:"cldr_hu,udhr_hun", region:"eur", script:"latn", speakers:"13000000", letter:"áéíóöúüÁÉÍÓÖÚÜőűŐŰ", mark:"\u{0301}\u{0308}\u{030B}", punctuation:"«»§–…’”„", symbol:"⁒", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåäãæçèêëìîïñòôøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̃̄" },

"ht": { name:"Haitian Creole", source:"UDHR", region:"carib", script:"latn", speakers:"113000", letter:"èéòÈÉÒ", mark:"\u{0300}\u{0301}" },

"hni": { name:"Hani", source:"UDHR", region:"easia", script:"ascii", speakers:"760000" },

"hil": { name:"Hiligaynon (Ilonggo)", source:"UDHR", region:"seasia", script:"ascii", speakers:"9300000" },

"hns": { name:"Caribbean Hindustani", source:"UDHR", region:"carib", script:"latn", speakers:"166000", letter:"áêòíèàëÁÊÒÍÈÀË", mark:"\u{0301}\u{0302}\u{0300}\u{0308}", punctuation:"‘’" },

"hus": { name:"Huastec (Wasteko, Teenek)", source:"UDHR", region:"cam", script:"latn", speakers:"160000", letter:"íáúéóàÍÁÚÉÓÀ", mark:"\u{00B0}\u{0301}\u{0300}" },

"huu": { name:"Murui Huitoto (Bue, Witoto Murui, Witoto)", source:"UDHR", region:"sam", script:"latn", speakers:"7800", letter:"úñáÚÑÁƗɨ", mark:"\u{0301}\u{0303}" },

"is": { name:"Icelandic", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"331000", letter:"áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ", mark:"\u{0301}\u{0308}", punctuation:"§‐–—…‘‚“„†‡′″" },

"ig": { name:"Igbo", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"24000000", letter:"ẹịṅọụẸỊṄỌỤ", mark:"\u{0323}\u{0307}", punctuation:"‐" },

"smn": { name:"Inari Sami", source:"cldr_smn", region:"eur", script:"latn", speakers:"300", letter:"âäáÂÄÁčđŋšžČĐŊŠŽ", mark:"\u{0302}\u{030C}\u{0308}\u{0301}", aux:"ńŃàçéèíñóòúüæøåãöÀÇÉÈÍÑÓÒÚÜÆØÅÃÖ̧̀̃̊" },

"id": { name:"Indonesian", source:"cldr_id,udhr_ind", region:"seasia", script:"ascii", speakers:"43000000", punctuation:"‐–—…‘’“”", aux:"å" },

"it": { name:"Italian", source:"cldr_it,udhr_ita", region:"eur", script:"latn", speakers:"64000000", letter:"àéèìóòùÀÉÈÌÓÒÙ", mark:"\u{0300}\u{0301}", punctuation:"«»—…’“”", aux:"œŒŸªáâåäãæçêëíîïñºôöõøßúûüÿÁÂÅÄÃÆÇÊËÍÎÏÑÔÖÕØÚÛÜ̧̂̊̈̃" },

"ibb": { name:"Ibibio", source:"UDHR", region:"afr", script:"latn", speakers:"2000000", letter:"ñÑ", mark:"\u{0303}" },

"io": { name:"Ido", source:"UDHR", region:"eur", script:"ascii", speakers:"300" },

"ilo": { name:"Ilocano (Ilokano)", source:"UDHR", region:"seasia", script:"ascii", speakers:"9100000" },

"iu": { name:"Inuktitut (Eastern Canadian Inuktitut)", source:"UDHR", region:"nam", script:"cans", speakers:"34000", letter:"ᓯᓚᕐᔪᐊᒥᐅᑦᓇᓗᐃᖅᑎᖓᑭᒃᑯᑐᓐᐱᖏᕆᑲᓂᔾᔨᓄᒪᒻᑖᕈᖃᑕᕋᓪᒍᓴᖕᓕᕇᖢᕗᒋᒧᒐᖁᔭᑰᒌᙱᒫᕌᕙᒎᕕᕝᓘᓃᓱᓈᙵᓅᐹᓵᐸᔫᓲᐳᓖᖂᑑᐆᖑᙳᖔᕿᒡᓛᓰᖤᐋᑉᔮᔅᒨᑏᒦ", mark:"\u{0303}" },

"kl": { name:"Kalaalisut (West Greenlandic)", source:"cldr_kl,udhr_kal", region:"eur", script:"ascii", speakers:"60000", aux:"ĸ", notes:"CLDR adds accented characters such as áâãéêíîôúûæøåĩĸũ, but this appears to be based on an older (pre 1973) orthography. See wikipedia." },

"dyo": { name:"Jola-Fonyi", source:"UDHR", region:"afr", script:"latn", speakers:"410000", letter:"áéíñóúàÁÉÍÑÓÚÀŋŊ", mark:"\u{0301}\u{0303}\u{0300}", punctuation:"“”", symbol:"°" },

"jv": { name:"Javanese", source:"UDHR", region:"seasia", script:"ascii", speakers:"94000000" },

"jv-java": { name:"Javanese (Javanese)", source:"r12a", region:"seasia", script:"java", speakers:"94000000", letter:"ꦏꦑꦒꦓꦔꦕꦖꦗꦛꦚꦘꦠꦡꦢꦝꦤꦟꦥꦦꦧꦨꦩꦪꦭꦫꦱꦯꦮꦲꦰꦣꦞꦙꦜꦉꦊꦄꦆꦈꦌꦎꧏ", mark:"\u{A9BD}\u{A9BE}\u{A9BF}\u{A980}\u{A981}\u{A982}\u{A983}\u{A9B3}\u{A9B6}\u{A9B8}\u{A9BA}\u{A9BC}\u{A9B4}", punctuation:"꧊꧋꧌꧍꧈꧉꧇꧁꧂꧅꧄꧃꧆" },

"dyu": { name:"Dyula (Jula, Dioula)", source:"UDHR", region:"afr", script:"latn", speakers:"2500000", letter:"úàìóáòùèíéÚÀÌÓÁÒÙÈÍÉƐƆƝŋŊɛɔɲ", mark:"\u{0301}\u{0300}", punctuation:"’‘" },

"kea": { name:"Kabuverdianu (Cape Verdean Creole)", source:"cldr_kea,udhr_kea", region:"afr", script:"latn", speakers:"1200000", letter:"ñçêéâíèáôóãºõúàòÑÇÊÉÂÍÈÁÔÓÃÕÚÀÒ", mark:"\u{0327}\u{0303}\u{0302}\u{0301}\u{0300}", punctuation:"’", aux:"ẽẼăāĕēĭĩīŏōœŭũūĂĀĔĒĬĨĪŎŌŒŬŨŪŸªáàâåäãæçéèêëíìîïºóòôöõøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÓÒÔÖÕØÚÙÛǗ̧̀̆̂̊̈̄" },

"kab": { name:"Kabyle (Kabylian)", source:"CLDR", region:"afr", script:"latn", speakers:"5500000", letter:"ǧƐǦƔčČḍḥṛṣṭẓḌḤṚṢṬẒɛɣ", mark:"\u{0323}\u{030C}", punctuation:"‰" },

"kkj": { name:"Kako (Mkako, Mkaka)", source:"CLDR", region:"afr", script:"latn", speakers:"120000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǌƁƊƐǊƆŋŊɓɗɛɔ", mark:"\u{0327}\u{0301}\u{0300}\u{0302}", punctuation:"«»…‘‹›“”" },

"kam": { name:"Kamba (Kikamba)", source:"CLDR", region:"afr", script:"latn", speakers:"3900000", letter:"ĩũĨŨ", mark:"\u{0303}" },

"kn": { name:"Kannada (Canarese, Kanarese)", source:"cldr_kn,udhr_kan", region:"sasia", script:"knda", speakers:"37700000", letter:"ಅಆಇಈಉಊಋೠಌೡಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲವಶಷಸಹಳಽ", mark:"\u{0303}\u{0CBC}\u{0C82}\u{0C83}\u{0CBE}\u{0CBF}\u{0CC0}\u{0CC1}\u{0CC2}\u{0CC3}\u{0CC4}\u{0CC6}\u{0CC7}\u{0CC8}\u{0CCA}\u{0CCB}\u{0CCC}\u{0CCD}\u{0CD5}\u{0CD6}", punctuation:"‐–—…‘’“”′″", number:"೦೧೨೩೪೫೬೭೮೯", other:"\u{200C}", aux:"ೞ" },

"ks": { name:"Kashmiri (Koshur)", source:"CLDR", region:"sasia", script:"arab", speakers:"5600000", letter:"ءآأٲؤاٮبپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںھہوۄیۍے", mark:"\u{064E}\u{064F}\u{0650}\u{06EA}\u{06ED}\u{0655}\u{0656}\u{0654}\u{0657}\u{065A}\u{065B}\u{0653}" },

"kk": { name:"Kazakh", source:"CLDR,UDHR", region:"casia", script:"cyrl", speakers:"15000000", letter:"аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюяАӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ", punctuation:"‐–—…‘’“”«»§" },

"km": { name:"Khmer (Cambodian)", source:"cldr_km,udhr_khm", region:"seasia", script:"khmr", speakers:"16000000", letter:"កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរឫឬលឭឮវសហឡអឥឦឧឩឪឯឰឱឲឳៗ", mark:"\u{17D0}\u{17C8}\u{17CB}\u{17C9}\u{17CA}\u{17CD}\u{17B6}\u{17B7}\u{17B8}\u{17B9}\u{17BA}\u{17BB}\u{17BC}\u{17BD}\u{17BE}\u{17BF}\u{17C0}\u{17C1}\u{17C2}\u{17C3}\u{17C4}\u{17C5}\u{17C6}\u{17C7}\u{17D2}\u{17CC}\u{17CF}", punctuation:"៖។៕៙៚‘’“”", number:"២១៧០៩៤៨៣៥៦", aux:"឴឵៌៎៏៑ឝឞ" },

"ki": { name:"Kikuyu (Gikuyu)", source:"CLDR", region:"afr", script:"latn", speakers:"6600000", letter:"ĩũĨŨ", mark:"\u{0303}" },

"rw": { name:"Kinyarwanda", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"9800000" },

"kok": { name:"Konkani", source:"CLDR", region:"afr", script:"deva", speakers:"7400000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"\u{093C}\u{0902}\u{0901}\u{0903}\u{093E}\u{093F}\u{0940}\u{0941}\u{0942}\u{0943}\u{0945}\u{0947}\u{0948}\u{0949}\u{094B}\u{094C}\u{094D}", number:"०१२३४५६७८९", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here." },

"khb": { name:"Tai Lü (Tai Lue)", source:"23af4e1d7781a7a933d2ffac5f71a42a5df6f629", region:"easia", script:"talu", speakers:"550000", letter:"ᦀᦁᦂᦃᦄᦅᦆᦇᦈᦉᦊᦋᦌᦍᦎᦏᦐᦑᦒᦓᦔᦕᦖᦗᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨᦩᦪᦫᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂᧃᧄᧅᧆᧇ", number:"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙᧚", symbol:"᧞᧟" },

"khq": { name:"Koyra Chiini (Western Songhay)", source:"CLDR", region:"afr", script:"latn", speakers:"200000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"\u{0303}\u{030C}" },

"ses": { name:"Koyraboro Senni (Eastern Songhay, Koroboro Senni, Koyra Senni)", source:"CLDR", region:"afr", script:"latn", speakers:"430000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"\u{0303}\u{030C}" },

"nmg": { name:"Kwasio (Ngumba, Mvumbo, Bujeba, Gyele, Kola)", source:"CLDR", region:"afr", script:"latn", speakers:"26000", letter:"áâäéêíîïóôöúûÁÂÄÉÊÍÎÏÓÔÖÚÛǎǝǐǒǔǍƁƎƐǏǑƆǓāěēīńŋōŕūĀĚĒĪŃŊŌŔŪɓɛɔ", mark:"\u{0301}\u{0302}\u{030C}\u{0304}\u{0308}" },

"ky": { name:"Kyrgyz (Kirghiz)", source:"cldr_ky,udhr_kir", region:"casia", script:"cyrl", speakers:"4300000", letter:"абгдеёжзийклмнӊоөпрстуүхчшъыэюяцңвьфАБГДЕЁЖЗИЙКЛМНӉОӨПРСТУҮХЧШЪЫЭЮЯЦҢВЬФ", mark:"\u{0308}\u{0306}", punctuation:"‐–—…‘‚“„«»§", aux:"вфцщьВФЦЩЬ" },

"quc": { name:"K'iche' (Quiché)", source:"UDHR", region:"cam", script:"ascii", speakers:"2300000" },

"kbd": { name:"Kabardian (Kabardino-Cherkess, East Circassian)", source:"UDHR", region:"eur", script:"cyrl", speakers:"1600000", letter:"цӏыхуэфащмтеднйпсожлъкрзгьибяшвчіюЦӀЫХУЭФАЩМТЕДНЙПСОЖЛЪКРЗГЬИБЯШВЧІЮ", mark:"\u{0306}" },

"kbp": { name:"Kabiye", source:"UDHR", region:"afr", script:"latn", speakers:"1000000", letter:"ñÑƆƐƱƉƖƔŋŊɔɛʊɖɩɣ", mark:"\u{0303}" },

"knc": { name:"Kanuri", source:"UDHR", region:"afr", script:"latn", speakers:"4200000", letter:"əƏ" },

"kqn": { name:"Kaonde", source:"UDHR", region:"afr", script:"ascii", speakers:"240000" },

"cak": { name:"Kaqchikel (Kaqchiquel, Cakchiquel, Cakchiquiel)", source:"UDHR", region:"cam", script:"latn", speakers:"450000", letter:"äïöüÄÏÖÜ", mark:"\u{0308}" },

"krl": { name:"Karelian", source:"UDHR", region:"eur", script:"latn", speakers:"36000", letter:"äöÄÖčžšČŽŠ", mark:"\u{0308}\u{030C}", punctuation:"’" },

"xsm": { name:"Kasem", source:"UDHR", region:"afr", script:"latn", speakers:"250000", letter:"ƐƆŋŊɛɔ" },

"kjh": { name:"Khakas", source:"UDHR", region:"nasia", script:"cyrl", speakers:"43000", letter:"прайтиксізледјвоцяыгнмбңюьчуғхжҷэфщъПРАЙТИКСІЗЛЕДЈВОЦЯЫГНМБҢЮЬЧУҒХЖҶЭФЩЪ", mark:"\u{0306}" },

"kha": { name:"Khasi", source:"UDHR", region:"sasia", script:"latn", speakers:"1128575", letter:"ïñÏÑ", mark:"\u{0308}\u{0303}" },

"kkh": { name:"Khün (Tai Khün)", source:"udhr_kkh_lana,c23d0607b3e03b274f5c1ad89a69ead2739b6116", region:"seasia", script:"lana", speakers:"100000", letter:"ᨠᨡᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩒᩓᩔᪧ", mark:"\u{1A55}\u{1A56}\u{1A58}\u{1A59}\u{1A5B}\u{1A5C}\u{1A5D}\u{1A5E}\u{1A60}\u{1A61}\u{1A62}\u{1A63}\u{1A64}\u{1A65}\u{1A66}\u{1A67}\u{1A68}\u{1A69}\u{1A6A}\u{1A6B}\u{1A6C}\u{1A6D}\u{1A6E}\u{1A6F}\u{1A70}\u{1A71}\u{1A73}\u{1A74}\u{1A75}\u{1A76}\u{1A77}\u{1A78}\u{1A79}\u{1A7A}\u{1A7C}", number:"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩿᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭" },

"nod": { name:"Northern Thai (Lanna, Kam Mueang)", source:"812b1d7d423d404b2e251f335553dd05b8999f08", region:"seasia", script:"lana", speakers:"6000000", letter:"ᨠᨡᨢᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩓᩔᪧ", mark:"\u{1A55}\u{1A56}\u{1A58}\u{1A59}\u{1A5A}\u{1A5B}\u{1A5C}\u{1A5D}\u{1A5E}\u{1A60}\u{1A61}\u{1A62}\u{1A63}\u{1A64}\u{1A65}\u{1A66}\u{1A67}\u{1A68}\u{1A69}\u{1A6A}\u{1A6B}\u{1A6C}\u{1A6E}\u{1A6F}\u{1A70}\u{1A71}\u{1A72}\u{1A73}\u{1A74}\u{1A75}\u{1A76}\u{1A7A}\u{1A7B}", number:"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩿᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭" },

"ktu": { name:"Kituba", source:"UDHR", region:"afr", script:"ascii", speakers:"5400000" },

"koi": { name:"Komi-Permyak", source:"UDHR", region:"eur", script:"cyrl", speakers:"63000", letter:"мортпавэзлӧнбыдсиьекцяюгйучішжёщъфхМОРТПАВЭЗЛӦНБЫДСИЬЕКЦЯЮГЙУЧІШЖЁЩЪФХ", mark:"\u{0308}\u{0306}", punctuation:"–" },

"koo": { name:"Konjo (Konzo)", source:"UDHR", region:"afr", script:"ascii", speakers:"610000" },

"kg": { name:"Kongo (Kikongo)", source:"UDHR", region:"afr", script:"ascii", speakers:"6500000" },

"kpe": { name:"Kpelle", source:"UDHR", region:"afr", script:"latn", speakers:"1300000", letter:"ƐƁƆƝƏĝŋĜŊɛɓɔɲə", mark:"\u{0302}" },

"kri": { name:"Krio (Sierra Leonean Creole)", source:"UDHR", region:"afr", script:"latn", speakers:"500000", letter:"ƐƆŋŊɛɔ", punctuation:"–" },

"nku": { name:"Bouna Kulango", source:"UDHR", region:"afr", script:"latn", speakers:"130000", letter:"ƖƆƐƝƲŋŊɩɔɛɲʋ", punctuation:"’" },

"kmr": { name:"Northern Kurdish (Kurmanji)", source:"UDHR", region:"wasia", script:"latn", speakers:"15000000", letter:"ûîêçÛÎÊÇşŞ", mark:"\u{0327}\u{0302}" },

"ku": { name:"Kurdish", source:"https://r12a.github.io/app-subtags/?lookup=ku", region:"wasia", script:"latn", speakers:"0", notes:"This is a macrolanguage. See kmr (Northern Kurdish) or ckb (Central Kurdish) or sdh (Southern Kurdish)." },

"lkt": { name:"Lakota (Lakhota, Teton, Teton Sioux)", source:"CLDR", region:"nam", script:"latn", speakers:"6000", letter:"ʼáéíóúÁÉÍÓÚǧȟǦȞŋčšžŊČŠŽ", mark:"\u{0301}\u{030C}", punctuation:"́̌‐–—“”" },

"lag": { name:"Langi (Rangi)", source:"CLDR", region:"afr", script:"latn", speakers:"410000", letter:"áéíóúÁÉÍÓÚƗɄɨʉ", mark:"\u{0301}" },

"lo": { name:"Lao (Laotian)", source:"cldr_lo,udhr_lao", region:"seasia", script:"laoo", speakers:"~25000000", letter:"ໆກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫໜໝອຮຯະາຳຽເແໂໃໄ", mark:"\u{0301}\u{0EC8}\u{0EC9}\u{0ECA}\u{0ECB}\u{0ECC}\u{0ECD}\u{0EB1}\u{0EB4}\u{0EB5}\u{0EB6}\u{0EB7}\u{0EB8}\u{0EB9}\u{0EBB}\u{0EBC}", aux:"໐໑໒໓໔໕໖໗໘໙" },

"lv": { name:"Latvian (Lettish)", source:"cldr_lv,udhr_lav", region:"eur", script:"latn", speakers:"1750000", letter:"āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ", mark:"\u{0327}\u{0304}\u{030C}", punctuation:"§‐–—…‘’‚“”„†‡′″", aux:"ōŗŌŖ" },

"ln": { name:"Lingala", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"5500000", letter:"áâéêíîóôúÁÂÉÊÍÎÓÔÚǎǐǒǍƐǏǑƆěĚɛɔ", mark:"\u{0301}\u{0302}\u{030C}", punctuation:"’" }, // UDHR has no accents

"lt": { name:"Lithuanian", source:"cldr_lt,udhr_lit", region:"eur", script:"latn", speakers:"3000000", letter:"éÉąčęėįšųūžĄČĘĖĮŠŲŪŽ", mark:"\u{0328}\u{030C}\u{0307}\u{0304}\u{0301}", punctuation:"‐–—…“„", aux:"ẽẼĩũĨŨáàãéèíìñóòõúùÁÀÃÉÈÍÌÑÓÒÕÚÙ́̃̀" },

"nds": { name:"Low German (Low Saxon)", source:"cldr_nds,udhr_nds", region:"eur", script:"latn", speakers:"301000", letter:"åäöüÅÄÖÜ", mark:"\u{030A}\u{0308}", punctuation:"’", aux:"ăāĕęēĭīŏōœŭūĂĀĔĘĒĬĪŎŌŒŬŪŸáàâæçéèêëíìîïñóòôøúùûÿÁÀÂÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̨́̀̆̂̄̃" },

"dsb": { name:"Lower Sorbian", source:"cldr_dsb", region:"eur", script:"latn", speakers:"6900", letter:"óÓčćěłńŕšśžźČĆĚŁŃŔŠŚŽŹ", mark:"\u{030C}\u{0301}", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœřşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŘŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋" },

"lu": { name:"Luba-Katanga (Luba-Shaba, Kiluba)", source:"CLDR", region:"afr", script:"latn", speakers:"1500000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙƐƆɛɔ", mark:"\u{0301}\u{0300}" },

"lb": { name:"Luxembourgish (Luxemburgish, Letzeburgesch)", source:"cldr_lb,udhr_ltz", region:"eur", script:"latn", speakers:"390000", letter:"äéëêüöôàÄÉËÊÜÖÔÀ", mark:"\u{0308}\u{0301}\u{0302}\u{0300}", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçèêíìîïñóòôöøßúùûüÿÁÀÂÅÃÆÇÈÊÍÌÎÏÑÓÒÔÖØÚÙÛÜ̧̇̀̆̂̊̃̄" }, // UDHR has many more accented characters

"luy": { name:"Luhya (Luyia, Luhia, Luhiya)", source:"CLDR", region:"afr", script:"ascii", speakers:"1200000" },

"lld": { name:"Ladin (Judaeo-Spanish, Judeo-Spanish)", source:"UDHR", region:"eur", script:"latn", speakers:"31000", letter:"ëéüêàèöìùîâôòóûËÉÜÊÀÈÖÌÙÎÂÔÒÓÛćĆ", mark:"\u{0308}\u{0301}\u{0302}\u{0300}", punctuation:"’" },

"lad": { name:"Ladino", source:"UDHR", region:"wasia", script:"latn", speakers:"100000", letter:"íÍ", mark:"\u{0301}", punctuation:"–" },

"lns": { name:"Lamnso' (Nso)", source:"UDHR", region:"afr", script:"latn", speakers:"240000", letter:"áéùìòúíóàèÁÉÙÌÒÚÍÓÀÈƏŋŊə", mark:"\u{0300}\u{0301}", punctuation:"’" },

"lij": { name:"Ligurian", source:"UDHR", region:"eur", script:"latn", speakers:"500000", letter:"çòæéùöôâîàêÇÒÆÉÙÖÔÂÎÀÊ", mark:"\u{0327}\u{0300}\u{0301}\u{0308}\u{0302}", punctuation:"’" },

"lia": { name:"Limba", source:"UDHR", region:"afr", script:"latn", speakers:"340000", letter:"ƆƐŋŊɔɛ" },

"lis": { name:"Lisu (Fraser script)", source:"d6a5076cb77188fd52722d4a57b621ac1390c714", region:"easia", script:"lisu", speakers:"940000", letter:"ꓐꓑꓒꓓꓔꓕꓖꓗꓘꓙꓚꓛꓜꓝꓞꓟꓠꓡꓢꓣꓤꓥꓦꓧꓨꓩꓪꓫꓬꓭꓮꓯꓰꓱꓲꓳꓴꓵꓶꓷꓸꓹꓺꓻꓼꓽʼˍ", punctuation:"《》…꓾꓿" },

"lob": { name:"Lobi (Miwa, Lobiri)", source:"UDHR", region:"afr", script:"latn", speakers:"440000", letter:"àáäÀÁÄƲƖƆƐʋɩɔɛʔ", mark:"\u{0300}\u{0301}\u{0308}" },

"loz": { name:"Lozi (siLozi, Rozi)", source:"UDHR", region:"afr", script:"ascii", speakers:"725000" },

"lua": { name:"Luba-Kasai (Western Luba)", source:"UDHR", region:"afr", script:"ascii", speakers:"6300000" },

"lun": { name:"Lunda (Chilunda)", source:"UDHR", region:"afr", script:"ascii", speakers:"400000" },

"lue": { name:"Luvale", source:"UDHR", region:"afr", script:"ascii", speakers:"640000" },

"mk": { name:"Macedonian", source:"cldr_mk,udhr_mkd", region:"eur", script:"cyrl", speakers:"~2000000", letter:"абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ", mark:"\u{0301}", punctuation:"‐–—…‘‚“„", aux:"ѐѝЀЍ̀" },

"jmc": { name:"Machame", source:"CLDR", region:"afr", script:"ascii", speakers:"400000" },

"mgh": { name:"Makhuwa-Meetto", source:"CLDR", region:"afr", script:"ascii", speakers:"6600000" },

"kde": { name:"Makonde (Kimakonde)", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"1400000" },

"mg": { name:"Malagasy", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"18000000", letter:"àâéèêëìîïñôÀÂÉÈÊËÌÎÏÑÔ", mark:"\u{0300}\u{0302}\u{0301}\u{0308}\u{0303}" },  // UDHR has no accents

"mid": { name:"Neo-Mandaic", source:"280e6a9f98147de582820ff2179ebb7727e96147", region:"wasia", script:"mand", speakers:"200", letter:"ࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘ", mark:"\u{0859}\u{085A}\u{085B}", punctuation:"࡞" },

"zml": { name:"Malay", source:"CLDR,UDHR", region:"seasia", script:"ascii", speakers:"77000000" },

"zml-arab": { name:"Malay (Arabic)", source:"UDHR", region:"seasia", script:"arab", speakers:"77000000", letter:"ڤراشتهنحقسيمأجڬدبوڽڠعفكلچخظصزطۏؤئذ", mark:"\u{0654}", punctuation:"،", number:"٢" },

"ml": { name:"Malayalam", source:"CLDR,UDHR", region:"sasia", script:"mlym", speakers:"38000000", letter:"അആഇഈഉഊഋൠഌൡഎഏഐഒഓഔകൿഖഗഘങചഛജഝഞടഠഡഢണൺതഥദധനൻപഫബഭമയരർലൽവശഷസഹളൾഴറ", mark:"\u{0D03}\u{0D02}\u{0D3E}\u{0D3F}\u{0D40}\u{0D41}\u{0D42}\u{0D43}\u{0D46}\u{0D47}\u{0D48}\u{0D4A}\u{0D4B}\u{0D4C}\u{0D57}\u{0D4D}", punctuation:"‘’“”", other:"\u{200C}\u{200D}" },

"mt": { name:"Maltese", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"520000", letter:"àèìòùÀÈÌÒÙċġħżĊĠĦŻ", mark:"\u{0300}\u{0307}", punctuation:"‘’“”" },

"gv": { name:"Manx (Manx Gaelic, Manks)", source:"CLDR,UDHR", region:"eur", script:"latn", speakers:"0", letter:"çÇ", mark:"\u{0327}", punctuation:"’" },

"mr": { name:"Marathi", source:"CLDR,UDHR", region:"sasia", script:"deva", speakers:"73000000", letter:"ऱॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"\u{093C}\u{0902}\u{0901}\u{0903}\u{093E}\u{093F}\u{0940}\u{0941}\u{0942}\u{0943}\u{0945}\u{0947}\u{0948}\u{0949}\u{094B}\u{094C}\u{094D}", punctuation:"‐–—…‘’“”′″", number:"१२३४५६७८९०", other:"\u{200C}\u{200D}", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here." },

"mas": { name:"Masai (Maasai, Maa)", source:"CLDR", region:"afr", script:"latn", speakers:"1300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛƐƗƆɄāēīŋōūĀĒĪŊŌŪɛɨɔʉ", mark:"\u{0301}\u{0300}\u{0302}\u{0304}" },

"mzn": { name:"Mazanderani (Tabari, Geleki)", source:"cldr_mzn", region:"wasia", script:"arab", speakers:"6000000", letter:"ءآأؤئابپةتثجچحخدذرزژسشصضطظعغفقکگلمنهویي", mark:"\u{064B}\u{064C}\u{064D}\u{0651}\u{0654}\u{0653}", punctuation:"،٫٬؛؟‐…‹›«»", aux:"َُِْٰٖإكىٕ" },

"mer": { name:"Meru", source:"CLDR", region:"afr", script:"latn", speakers:"2000000", letter:"ĩũĨŨ", mark:"\u{0303}" },

"mgo": { name:"Meta'", source:"CLDR", region:"afr", script:"latn", speakers:"190000", letter:"ʼàèìòùÀÈÌÒÙƏƆŋŊəɔ", mark:"\u{0300}", punctuation:"‘’“”" },

"mn-cyrl": { name:"Mongolian (Cyrillic)", source:"cldr_mn,udhr_khk", region:"easia", script:"cyrl", speakers:"5200000", letter:"абвгдеёжзийклмноөпрстуүфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯ", mark:"\u{0308}\u{0306}", punctuation:"̈̆‐–—…‘’“”†‡′″§", aux:"әҗӊһӘҖӉҺ" },

"mfe": { name:"Morisyen (Mauritian Creole, Morisien)", source:"CLDR", region:"afr", script:"ascii", speakers:"1070000" },

"mua": { name:"Mundang", source:"CLDR", region:"afr", script:"latn", speakers:"240000", letter:"ãëõÃËÕǝƁƊƎĩŋĨŊṽṼɓɗ", mark:"\u{0303}\u{0308}" },

"mad": { name:"Madurese", source:"UDHR", region:"seasia", script:"ascii", speakers:"15000000" },

"mag": { name:"Magahi (Magadhi)", source:"UDHR", region:"sasia", script:"deva", speakers:"14000000", letter:"मनवधकरलसयतषटउचबघणपगठदहभअएऔथओशईजखआडइछफढझञऐ", mark:"\u{093E}\u{093F}\u{0947}\u{0902}\u{0941}\u{094D}\u{094B}\u{0940}\u{093C}\u{0942}\u{094C}\u{0943}\u{0948}\u{0901}", punctuation:"।" },

"mai": { name:"Maithili", source:"UDHR", region:"sasia", script:"deva", speakers:"33900000", letter:"सरवभमनधकघषणटदबएतआउलजपठगअछहऐयशओचथखफइढडङईञʼ", mark:"\u{093E}\u{094D}\u{094C}\u{093F}\u{094B}\u{0902}\u{0947}\u{0901}\u{0940}\u{0943}\u{0942}\u{0941}\u{0903}\u{0948}\u{093C}", punctuation:"।–" },

"vmw": { name:"Makhuwa (Makua, Macua)", source:"UDHR", region:"afr", script:"latn", speakers:"6600000", letter:"çõãÇÕÃ", mark:"\u{0327}\u{0303}", punctuation:"’…" },

"dv": { name:"Dhivehi (Maldivian, Divehi)", source:"UDHR", region:"sasia", script:"thaa", speakers:"340000", letter:"ޑސމބރގއދޖލހޢނފކށވޙޤތޕޓޔޝޞޅޚޣޒޠޗޏޘޛޟ", mark:"\u{07A8}\u{07AC}\u{07B0}\u{07A6}\u{07A9}\u{07AA}\u{07A7}\u{07AE}\u{07AD}\u{07AB}\u{07AF}", punctuation:"،؛" },

"mam": { name:"Mam", source:"UDHR", region:"cam", script:"ascii", speakers:"540000" },

"emk": { name:"Eastern Maninkakan", source:"UDHR", region:"afr", script:"latn", speakers:"5000000", letter:"ɲɛɔƝƐƆ" },

"emk-nkoo": { name:"Eastern Maninkakan (N'Ko)", source:"e04c91748b5079b9b5077f2206f53c2223dc7839", region:"afr", script:"nkoo", speakers:"5000000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߨߩߪߴߵߺ", mark:"\u{07EB}\u{07EC}\u{07ED}\u{07EE}\u{07EF}\u{07F0}\u{07F1}\u{07F2}\u{07F3}", number:"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶" },

"mi": { name:"Maori (Te Reo)", source:"UDHR", region:"oce", script:"latn", speakers:"60000", letter:"ïÏ", mark:"\u{0308}" },

"arn": { name:"Mapudungun (Mapuzugun, Mapudungu, Araucanian)", source:"UDHR", region:"sam", script:"latn", speakers:"260000", letter:"ñáíóÑÁÍÓ", mark:"\u{0303}\u{0301}" },

"mh": { name:"Marshallese (Ebon)", source:"UDHR", region:"oce", script:"ascii", speakers:"55000" },

"mcf": { name:"Matsés (Mayoruna)", source:"UDHR", region:"sam", script:"latn", speakers:"3200", letter:"ëË", mark:"\u{0308}" },

"yua": { name:"Yucatán Maya", source:"UDHR", region:"cam", script:"latn", speakers:"790000", letter:"ʼóíáúéÓÍÁÚÉ", mark:"\u{0301}", punctuation:"‐" },

"maz": { name:"Central Mazahua", source:"UDHR", region:"cam", script:"latn", speakers:"140000", letter:"ñÑ", mark:"\u{0338}\u{0331}\u{0303}" },

"mzi": { name:"Ixcatlán Mazatec", source:"UDHR", region:"cam", script:"latn", speakers:"8600", letter:"áñíóéÁÑÍÓÉ", mark:"\u{0301}\u{0303}", punctuation:"’" },

"kmb": { name:"Kimbundu (North Mbundu)", source:"UDHR", region:"afr", script:"latn", speakers:"4000000", letter:"êâôÊÂÔ", mark:"\u{0302}", punctuation:"’" },

"men": { name:"Mende", source:"UDHR", region:"afr", script:"latn", speakers:"1400000", letter:"ƆƐŋŊɔɛ", punctuation:"–‐" },

"mic": { name:"Mi'kmaq (Micmac, Migmaw, Mikmaw)", source:"UDHR", region:"nam", script:"ascii", speakers:"14200" },

"hna": { name:"Mina (Hina, Besleri)", source:"UDHR", region:"afr", script:"latn", speakers:"11000", letter:"éáìóòúíàèùÉÁÌÓÒÚÍÀÈÙǒǐǔǹƉƐƆǑǏǓǸŋŊɖɛɔ", mark:"\u{0300}\u{0301}\u{030C}" },

"min": { name:"Minangkabau", source:"UDHR", region:"seasia", script:"ascii", speakers:"5500000" },

"mto": { name:"Totontepec Mixe (North Highland Mixe)", source:"UDHR", region:"cam", script:"latn", speakers:"5500", letter:"äüëöéÄÜËÖÉ", mark:"\u{0308}\u{0301}", punctuation:"’" },

"lus": { name:"Mizo", source:"UDHR", region:"sasia", script:"latn", speakers:"690000", letter:"âêûîãÂÊÛÎÃ", mark:"\u{0302}\u{0303}" },

"mnw": { name:"Mon", source:"UDHR", region:"seasia", script:"mymr", speakers:"851000", letter:"လကၚအခရမဟပဍစတသဂဒဇနဘဝဗဓထၜယညဆဏဖဿဥဋဉဌဠ", mark:"\u{102D}\u{103A}\u{1031}\u{102C}\u{102B}\u{105E}\u{102F}\u{1036}\u{103D}\u{1032}\u{1039}\u{1035}\u{105F}\u{1033}\u{103C}\u{103E}\u{1030}\u{1060}\u{1038}\u{1034}\u{102E}\u{103B}", punctuation:"၊။", number:"၁၉၄၈၀၂၃၅၆၇" },

"mxi": { name:"Mozarabic (Andalusi Romance)", source:"UDHR", region:"eur", script:"latn", speakers:"0", letter:"àùèòÀÙÈÒ", mark:"\u{0300}", punctuation:"’" },

"miq": { name:"Mískitu (Miskito)", source:"UDHR", region:"cam", script:"latn", speakers:"150000", letter:"áâÁÂ", mark:"\u{0301}\u{0302}" },

"mos": { name:"Mòoré (Mossi, Mooré)", source:"UDHR", region:"afr", script:"latn", speakers:"7600000", letter:"ãõÃÕƖƱƐĩũœĨŨŒẽẼɩʊɛ", mark:"\u{0303}", punctuation:"’" },

"naq": { name:"Khoekhoe (Nama, Hottentot)", source:"CLDR", region:"afr", script:"latn", speakers:"300000", letter:"ǀǁǂǃâîôûÂÎÔÛ", mark:"\u{0302}" },

"ne": { name:"Nepali", source:"CLDR,UDHR", region:"sasia", script:"deva", speakers:"40000000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽ", mark:"\u{093C}\u{0901}\u{0902}\u{0903}\u{093E}\u{093F}\u{0940}\u{0941}\u{0942}\u{0943}\u{0945}\u{0947}\u{0948}\u{0949}\u{094B}\u{094C}\u{094D}", punctuation:"।", number:"१२३४५६७८९०", other:"\u{200D}", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here." },

"nnh": { name:"Ngiemboon", source:"CLDR", region:"afr", script:"latn", speakers:"250000", letter:"ʼáàâéèêíìóòôúùûÿÁÀÂÉÈÊÍÌÓÒÔÚÙÛǎǒǔǍƐǑƆǓɄěńŋĚŃŊŸḿẅḾẄɛɔʉ", mark:"\u{0301}\u{0300}\u{0302}\u{030C}\u{0308}", punctuation:"«»‘’" },

"jgo": { name:"Ngomba (Ngomba Bamileke)", source:"CLDR", region:"afr", script:"latn", speakers:"63000", letter:"áâíîúûÁÂÍÎÚÛꞌꞋǎǐǹǔǍƐǏǸƆǓɄńŋŃŊḿẅḾẄɛɔʉ", mark:"\u{0301}\u{0300}\u{0302}\u{030C}\u{0304}\u{0308}", punctuation:"«»‹›" },

"nd": { name:"Northern Ndebele (isiNdebele, Sindebele, Ndebele, North Ndebele, Matabele)", source:"CLDR", region:"afr", script:"ascii", speakers:"1600000" },

"lrc": { name:"Luri (Lurish)", source:"cldr_lrc", region:"wasia", script:"arab", speakers:"13000000", letter:"آأؤئابپتثجچحخدذرزژسشصضطظعغفڤقکگلمنھەوۉۊیؽي", mark:"\u{0659}\u{065B}\u{0653}\u{0654}", punctuation:"،٫٬؛؟‐…‹›«»", aux:"ًٌٍَُِّْإةكهىٕ" },

"se": { name:"Northern Sami", source:"cldr_se", region:"eur", script:"latn", speakers:"25000", letter:"áÁčđŋšŧžČĐŊŠŦŽ", mark:"\u{0301}\u{030C}", aux:"ńŃàçéèíñóòúüøæåäãöÀÇÉÈÍÑÓÒÚÜØÆÅÄÃÖ̧̀̃̈̊" },

"no": { name:"Norwegian", source:"r12a", region:"eur", script:"latn", speakers:"5000000", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"\u{0300}\u{0301}\u{0302}\u{030A}", punctuation:"«»§–" },

"nb": { name:"Norwegian Bokmål", source:"cldr_nb,udhr_nob", region:"eur", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"\u{0300}\u{0301}\u{0302}\u{030A}", punctuation:"«»§–", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáãçèêíñúüäöÁÃÇÈÊÍÑÚÜÄÖ̧̌̃̈" },

"nn": { name:"Norwegian Nynorsk", source:"cldr_nn,udhr_nno", region:"eur", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"\u{0300}\u{0301}\u{0302}\u{030A}", punctuation:"‰", symbol:"−", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáçèêñüäöÁÇÈÊÑÜÄÖ̧̌̃̈" },

"nus": { name:"Nuer (Thok Naath)", source:"CLDR", region:"afr", script:"latn", speakers:"890000", letter:"äëïöÄËÏÖƐƔƆŋŊɛɣɔ", mark:"\u{0331}\u{0308}" },

"nyn": { name:"Nyankore (Nkore, Nkole, Nyankole, Orunyankore, Orunyankole, Runyankore, Runyankole)", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"2300000" },

"nah": { name:"Nahuatl (Aztec)", source:"UDHR", region:"cam", script:"latn", speakers:"1700000", letter:"íÍ", mark:"\u{0301}" },

"gld": { name:"Nanai (Gold, Goldi, Hezhen)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"1400", letter:"найпрвослиебщдкцягьмзюуёчэӈтхӣӯъфжНАЙПРВОСЛИЕБЩДКЦЯГЬМЗЮУЁЧЭӇТХӢӮЪФЖ", mark:"\u{0304}\u{0306}\u{0308}", punctuation:"–" },

"nv": { name:"Navajo (Navaho)", source:"UDHR", region:"nam", script:"latn", speakers:"266000", letter:"ʼéóáíÉÓÁÍǫǪąłįęĄŁĮĘ", mark:"\u{0328}\u{0301}" },

"nr": { name:"Ndebele (Southern Ndebele, Transvaal Ndebele)", source:"UDHR", region:"afr", script:"ascii", speakers:"1100000" },

"ng": { name:"Ndonga, (Oshindonga)", source:"UDHR", region:"afr", script:"ascii", speakers:"810000" },

"nio": { name:"Nganasan", source:"UDHR", region:"nasia", script:"cyrl", speakers:"130", letter:"нерәзытбуоясикаӈҫүдйхлмпвгөъцьчэщжюНЕРӘЗЫТБУОЯСИКАӇҪҮДЙХЛМПВГӨЪЦЬЧЭЩЖЮ", mark:"\u{0306}", punctuation:"”" },

"not": { name:"Nomatsiguenga", source:"UDHR", region:"sam", script:"latn", speakers:"6500", letter:"ëíáóñËÍÁÓÑ", mark:"\u{0308}\u{0301}\u{0303}" },

"ii": { name:"Nuosu (Nosu, Northern Yi, Liangshan Yi, Sichuan Yi)", source:"UDHR", region:"easia", script:"yiii", speakers:"2000000", letter:"ꀀꀁꀂꀃꀄꀅꀆꀇꀈꀉꀊꀋꀌꀍꀎꀏꀐꀑꀒꀓꀔꀕꀖꀗꀘꀙꀚꀛꀜꀝꀞꀟꀠꀡꀢꀣꀤꀥꀦꀧꀨꀩꀪꀫꀬꀭꀮꀯꀰꀱꀲꀳꀴꀵꀶꀷꀸꀹꀺꀻꀼꀽꀾꀿꁀꁁꁂꁃꁄꁅꁆꁇꁈꁉꁊꁋꁌꁍꁎꁏꁐꁑꁒꁓꁔꁕꁖꁗꁘꁙꁚꁛꁜꁝꁞꁟꁠꁡꁢꁣꁤꁥꁦꁧꁨꁩꁪꁫꁬꁭꁮꁯꁰꁱꁲꁳꁴꁵꁶꁷꁸꁹꁺꁻꁼꁽꁾꁿꂀꂁꂂꂃꂄꂅꂆꂇꂈꂉꂊꂋꂌꂍꂎꂏꂐꂑꂒꂓꂔꂕꂖꂗꂘꂙꂚꂛꂜꂝꂞꂟꂠꂡꂢꂣꂤꂥꂦꂧꂨꂩꂪꂫꂬꂭꂮꂯꂰꂱꂲꂳꂴꂵꂶꂷꂸꂹꂺꂻꂼꂽꂾꂿꃀꃁꃂꃃꃄꃅꃆꃇꃈꃉꃊꃋꃌꃍꃎꃏꃐꃑꃒꃓꃔꃕꃖꃗꃘꃙꃚꃛꃜꃝꃞꃟꃠꃡꃢꃣꃤꃥꃦꃧꃨꃩꃪꃫꃬꃭꃮꃯꃰꃱꃲꃳꃴꃵꃶꃷꃸꃹꃺꃻꃼꃽꃾꃿꄀꄁꄂꄃꄄꄅꄆꄇꄈꄉꄊꄋꄌꄍꄎꄏꄐꄑꄒꄓꄔꄕꄖꄗꄘꄙꄚꄛꄜꄝꄞꄟꄠꄡꄢꄣꄤꄥꄦꄧꄨꄩꄪꄫꄬꄭꄮꄯꄰꄱꄲꄳꄴꄵꄶꄷꄸꄹꄺꄻꄼꄽꄾꄿꅀꅁꅂꅃꅄꅅꅆꅇꅈꅉꅊꅋꅌꅍꅎꅏꅐꅑꅒꅓꅔꅕꅖꅗꅘꅙꅚꅛꅜꅝꅞꅟꅠꅡꅢꅣꅤꅥꅦꅧꅨꅩꅪꅫꅬꅭꅮꅯꅰꅱꅲꅳꅴꅵꅶꅷꅸꅹꅺꅻꅼꅽꅾꅿꆀꆁꆂꆃꆄꆅꆆꆇꆈꆉꆊꆋꆌꆍꆎꆏꆐꆑꆒꆓꆔꆕꆖꆗꆘꆙꆚꆛꆜꆝꆞꆟꆠꆡꆢꆣꆤꆥꆦꆧꆨꆩꆪꆫꆬꆭꆮꆯꆰꆱꆲꆳꆴꆵꆶꆷꆸꆹꆺꆻꆼꆽꆾꆿꇀꇁꇂꇃꇄꇅꇆꇇꇈꇉꇊꇋꇌꇍꇎꇏꇐꇑꇒꇓꇔꇕꇖꇗꇘꇙꇚꇛꇜꇝꇞꇟꇠꇡꇢꇣꇤꇥꇦꇧꇨꇩꇪꇫꇬꇭꇮꇯꇰꇱꇲꇳꇴꇵꇶꇷꇸꇹꇺꇻꇼꇽꇾꇿꈀꈁꈂꈃꈄꈅꈆꈇꈈꈉꈊꈋꈌꈍꈎꈏꈐꈑꈒꈓꈔꈕꈖꈗꈘꈙꈚꈛꈜꈝꈞꈟꈠꈡꈢꈣꈤꈥꈦꈧꈨꈩꈪꈫꈬꈭꈮꈯꈰꈱꈲꈳꈴꈵꈶꈷꈸꈹꈺꈻꈼꈽꈾꈿꉀꉁꉂꉃꉄꉅꉆꉇꉈꉉꉊꉋꉌꉍꉎꉏꉐꉑꉒꉓꉔꉕꉖꉗꉘꉙꉚꉛꉜꉝꉞꉟꉠꉡꉢꉣꉤꉥꉦꉧꉨꉩꉪꉫꉬꉭꉮꉯꉰꉱꉲꉳꉴꉵꉶꉷꉸꉹꉺꉻꉼꉽꉾꉿꊀꊁꊂꊃꊄꊅꊆꊇꊈꊉꊊꊋꊌꊍꊎꊏꊐꊑꊒꊓꊔꊕꊖꊗꊘꊙꊚꊛꊜꊝꊞꊟꊠꊡꊢꊣꊤꊥꊦꊧꊨꊩꊪꊫꊬꊭꊮꊯꊰꊱꊲꊳꊴꊵꊶꊷꊸꊹꊺꊻꊼꊽꊾꊿꋀꋁꋂꋃꋄꋅꋆꋇꋈꋉꋊꋋꋌꋍꋎꋏꋐꋑꋒꋓꋔꋕꋖꋗꋘꋙꋚꋛꋜꋝꋞꋟꋠꋡꋢꋣꋤꋥꋦꋧꋨꋩꋪꋫꋬꋭꋮꋯꋰꋱꋲꋳꋴꋵꋶꋷꋸꋹꋺꋻꋼꋽꋾꋿꌀꌁꌂꌃꌄꌅꌆꌇꌈꌉꌊꌋꌌꌍꌎꌏꌐꌑꌒꌓꌔꌕꌖꌗꌘꌙꌚꌛꌜꌝꌞꌟꌠꌡꌢꌣꌤꌥꌦꌧꌨꌩꌪꌫꌬꌭꌮꌯꌰꌱꌲꌳꌴꌵꌶꌷꌸꌹꌺꌻꌼꌽꌾꌿꍀꍁꍂꍃꍄꍅꍆꍇꍈꍉꍊꍋꍌꍍꍎꍏꍐꍑꍒꍓꍔꍕꍖꍗꍘꍙꍚꍛꍜꍝꍞꍟꍠꍡꍢꍣꍤꍥꍦꍧꍨꍩꍪꍫꍬꍭꍮꍯꍰꍱꍲꍳꍴꍵꍶꍷꍸꍹꍺꍻꍼꍽꍾꍿꎀꎁꎂꎃꎄꎅꎆꎇꎈꎉꎊꎋꎌꎍꎎꎏꎐꎑꎒꎓꎔꎕꎖꎗꎘꎙꎚꎛꎜꎝꎞꎟꎠꎡꎢꎣꎤꎥꎦꎧꎨꎩꎪꎫꎬꎭꎮꎯꎰꎱꎲꎳꎴꎵꎶꎷꎸꎹꎺꎻꎼꎽꎾꎿꏀꏁꏂꏃꏄꏅꏆꏇꏈꏉꏊꏋꏌꏍꏎꏏꏐꏑꏒꏓꏔꏕꏖꏗꏘꏙꏚꏛꏜꏝꏞꏟꏠꏡꏢꏣꏤꏥꏦꏧꏨꏩꏪꏫꏬꏭꏮꏯꏰꏱꏲꏳꏴꏵꏶꏷꏸꏹꏺꏻꏼꏽꏾꏿꐀꐁꐂꐃꐄꐅꐆꐇꐈꐉꐊꐋꐌꐍꐎꐏꐐꐑꐒꐓꐔꐕꐖꐗꐘꐙꐚꐛꐜꐝꐞꐟꐠꐡꐢꐣꐤꐥꐦꐧꐨꐩꐪꐫꐬꐭꐮꐯꐰꐱꐲꐳꐴꐵꐶꐷꐸꐹꐺꐻꐼꐽꐾꐿꑀꑁꑂꑃꑄꑅꑆꑇꑈꑉꑊꑋꑌꑍꑎꑏꑐꑑꑒꑓꑔꑕꑖꑗꑘꑙꑚꑛꑜꑝꑞꑟꑠꑡꑢꑣꑤꑥꑦꑧꑨꑩꑪꑫꑬꑭꑮꑯꑰꑱꑲꑳꑴꑵꑶꑷꑸꑹꑺꑻꑼꑽꑾꑿꒀꒁꒂꒃꒄꒅꒆꒇꒈꒉꒊꒋꒌ", punctuation:"《》。、，（）：" },

"nym": { name:"Nyamwezi", source:"UDHR", region:"afr", script:"ascii", speakers:"1000000" },

"ny": { name:"Chichewa (Chewa, Nyanja, Chichewa, Chinyanja)", source:"UDHR", region:"afr", script:"ascii", speakers:"12000000" },

"nba": { name:"Nyemba", source:"UDHR", region:"afr", script:"latn", speakers:"900000", letter:"ñÑ", mark:"\u{0303}" },

"nzi": { name:"Nzima (Appolo)", source:"UDHR", region:"afr", script:"latn", speakers:"330000", letter:"ɔɛƆƐ" },

"or": { name:"Oriya (Odia)", source:"CLDR", region:"sasia", script:"orya", speakers:"33000000", letter:"ଅଆଇଈଉଊଋଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯୟରଲଳଵୱଶଷସହ", mark:"\u{0B3C}\u{0B01}\u{0B02}\u{0B03}\u{0B3E}\u{0B3F}\u{0B40}\u{0B41}\u{0B42}\u{0B43}\u{0B47}\u{0B48}\u{0B4B}\u{0B4C}\u{0B4D}\u{0B56}\u{0B57}", number:"୦୧୨୩୪୫୬୭୮୯" },

"om": { name:"Oromo", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"25542000" },

"os": { name:"Ossetian (Ossete, Ossetic)", source:"CLDR,UDHR", region:"eur", script:"cyrl", speakers:"570000", letter:"аӕбвгъджзеёийклмнопрстуфхцчшщыьэюяАӔБВГЪДЖЗЕЁИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ", punctuation:"‐–—…‘‚“„«»§" },

"oc": { name:"Occitan", source:"UDHR", region:"eur", script:"latn", speakers:"~200000", letter:"óèéçàïòìùúâêîëáôüûÓÈÉÇÀÏÒÌÙÚÂÊÎËÁÔÜÛ", mark:"\u{0301}\u{0300}\u{0327}\u{0308}\u{0302}", punctuation:"«»’—" },

"oj": { name:"Ojibwe (Ojibwa, Ojibway, Chippewa, Otchipwe)", source:"UDHR", region:"nam", script:"cans", speakers:"100880", letter:"ᐯᒪᑎᓯᑦᑌᐸᑫᑕᑯᐎᓇᓐᒥᐌᑲᒃᔭᐊᓂᐃᔑᑭᔝᐤᐅᑾᐱᔦᑐᐗᒣᒋᐁᔅᓱᓀᓄᒧᓭᔥᐨᑡᔕᓴᓶᓉᐺᓪᑉᐼᑴᑄᒐᒬᔐᔗᑺᔡᒻᒡᑶ" },

"oki": { name:"Okiek", source:"UDHR", region:"afr", script:"ascii", speakers:"79000" },

"oaa": { name:"Orok (Uilta, Ulta, Ujlta)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"50", letter:"ƝūŪɲԩԨчипалнесдкробуӡгэӈмхтөвӯзЧИПАЛНЕСДКРОБУӠГЭӇМХТӨВӮЗ", mark:"\u{0304}", punctuation:"–" },

"ote": { name:"Mezquital Otomi", source:"UDHR", region:"cam", script:"latn", speakers:"130000", letter:"öüäéñúíáèÖÜÄÉÑÚÍÁÈ", mark:"\u{0331}\u{0308}\u{0301}\u{0303}\u{0300}" },

"lot": { name:"Otuho (Lotuko)", source:"UDHR", region:"afr", script:"ascii", speakers:"140000" },

"ps": { name:"Pashto (Pushtu, Pushto)", source:"CLDR", region:"casia", script:"arab", speakers:"~50000000", letter:"آاأءبپتټثجځچڅحخدډذرړزژږسشښصضطظعغفقکګگلمنڼهةوؤیيېۍئ", mark:"\u{064B}\u{064C}\u{064D}\u{064E}\u{064F}\u{0650}\u{0651}\u{0652}\u{0670}\u{0654}\u{0653}", punctuation:"٫٬٪؉‰", number:"۰۱۲۳۴۵۶۷۸۹", symbol:"−" },

"pl": { name:"Polish", source:"cldr_pl,udhr_pol", region:"eur", script:"latn", speakers:"55000000", letter:"óÓąćęłńśźżĄĆĘŁŃŚŹŻ", mark:"\u{0328}\u{0301}\u{0307}", punctuation:"«»§‐–—…”„†‡′″", symbol:"°", aux:"œŒŸàâåäæçéèêëîïôößùûüÿÀÂÅÄÆÇÉÈÊËÎÏÔÖÙÛǛ̧̂̊̈" },

"pt": { name:"Portuguese", source:"cldr_pt,udhr_por_PT,udhr_por_BR", region:"eur", script:"latn", speakers:"215000000", letter:"áàâãçéêíóòôõúºÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"\u{0327}\u{0301}\u{0300}\u{0302}\u{0303}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªåäæèëìîïñºöøùûüÿÅÄÆÈËÌÎÏÑÖØÙÛÜ̆̊̈̄" },

"prg": { name:"Prussian (Old Prussian)", source:"CLDR", region:"eur", script:"latn", speakers:"0", letter:"țȚāēģīķņōŗšūžĀĒĢĪĶŅŌŖŠŪŽḑḐ", mark:"\u{0327}\u{0326}\u{0304}\u{030C}", punctuation:"‐–—…“„" },

"pa": { name:"Punjabi", source:"cldr_pa,udhr_pan,f940e5c7fc381992f942120f89cd8137cb3c3eda", region:"sasia", script:"guru", speakers:"122000000", letter:"ੴਉਊਓਅਆਐਔਇਈਏਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ\u{A33}\u{A36}\u{A59}\u{A5A}\u{A5B}\u{A5E}", mark:"\u{0A71}\u{0A70}\u{0A3C}\u{0A4D}\u{0A3E}\u{0A3F}\u{0A40}\u{0A41}\u{0A42}\u{0A47}\u{0A48}\u{0A4B}\u{0A4C}\u{0A02}", punctuation:"‐–—‘’“”′″।", number:"੦੧੨੩੪੫੬੭੮੯", symbol:"☬", other:"\u{200D}\u{200C}", aux:"ਃਁੵ", deprecated:"ੳੲ" },

"pnb": { name:"Western Panjabi", source:"CLDR,UDHR", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںهھہویےي", mark:"\u{064F}\u{0653}\u{0654}", punctuation:"‐–—‘’“”′″" },

"pau": { name:"Palauan", source:"UDHR", region:"seasia", script:"ascii", speakers:"17000" },

"pam": { name:"Pampangan (Kapampangan)", source:"UDHR", region:"seasia", script:"ascii", speakers:"1900000" },

"pap": { name:"Papiamento (Papiamentu)", source:"UDHR", region:"carib", script:"latn", speakers:"271261", letter:"ñÑ", mark:"\u{0303}", punctuation:"’" },

"pcd": { name:"Picard", source:"UDHR", region:"eur", script:"latn", speakers:"700000", letter:"èåûîéôçÈÅÛÎÉÔÇ", mark:"\u{0327}\u{0300}\u{030A}\u{0302}\u{0301}", symbol:"°" },

"pcm": { name:"Nigerian Pidgin", source:"UDHR", region:"afr", script:"ascii", speakers:"30000000" },

"pis": { name:"Pijin", source:"UDHR", region:"oce", script:"ascii", speakers:"24000" },

"piu": { name:"Pintupi-Luritja", source:"UDHR", region:"oce", script:"ascii", speakers:"1703" },

"ppl": { name:"Pipil", source:"UDHR", region:"cam", script:"latn", speakers:"500", letter:"áéÁÉ", mark:"\u{0301}" },

"pon": { name:"Pohnpeian (Ponapean)", source:"UDHR", region:"oce", script:"ascii", speakers:"31000" },

"fuf": { name:"Pular", source:"UDHR", region:"afr", script:"ascii", speakers:"3000000" },

"fuf-adlm": { name:"Pular (Adlam)", source:"UDHR", region:"afr", script:"adlm", speakers:"3000000", letter:"𞤩𞤢𞤲𞤺𞤭𞤣𞤫𞤸𞤤𞤴𞤳𞤮𞤪𞤶𞤯𞤼𞤵𞤱𞤬𞤥𞤧𞤨𞤻𞤦𞤷𞤰𞤾𞤇𞤀𞤐𞤘𞤋𞤁𞤉𞤖𞤂𞤒𞤑𞤌𞤈𞤔𞤍𞤚𞤓𞤏𞤊𞤃𞤅𞤆𞤙𞤄𞤕𞤎𞤜ŋŊƭƬ", mark:"\u{1E946}\u{1E945}\u{1E944}", punctuation:"،؛’⹁", number:"𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙𞥑𞥐" },

"tsz": { name:"Purépecha (Tarascan)", source:"UDHR", region:"cam", script:"latn", speakers:"125000", letter:"áïéíÁÏÉÍⱭƲŋŊɑʋ", mark:"\u{0301}\u{0308}" },

"pbb": { name:"Páez (Paez, Paes, Nasa Yuwe)", source:"UDHR", region:"sam", script:"latn", speakers:"40000", letter:"üëäïáÜËÄÏÁ", mark:"\u{0308}\u{0301}" },

"ro": { name:"Romanian (Rumanian, Roumanian)", source:"cldr_ro,udhr_ron_2006,udhr_ron_1993,udhr_ron_1953", region:"eur", script:"latn", speakers:"~25000000", letter:"âîÂÎșțȘȚăĂ", mark:"\u{0326}\u{0306}\u{0302}", punctuation:"«»‐–—…‘“”„", aux:"şţŞŢáàåäçéèêëñöüÁÀÅÄÇÉÈÊËÑÖǗ̧̀̊̈̃" },

"rm": { name:"Romansh (Romansch, Rumantsch, Romanche)", source:"cldr_rm,udhr_roh_rumgr,udhr_roh_puter,udhr_roh_surmiran,udhr_roh_sursilv,udhr_roh_sutsilv,udhr_roh_vallader", region:"eur", script:"latn", speakers:"36622", letter:"àüöéèìòùÀÜÖÉÈÌÒÙ", mark:"\u{0300}\u{0308}\u{0301}", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáâåäæçêëíîïñóôöøúûüÿÁÂÅÄÆÇÊËÍÎÏÑÓÔÖØÚÛÜ̧̆̂̊̈̄̃" },

"rof": { name:"Rombo (Kirombo)", source:"CLDR", region:"afr", script:"ascii", speakers:"?" },

"rn": { name:"Rundi (Kirundi)", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"8800000" },

"ru": { name:"Russian", source:"cldr_ru,udhr_rus", region:"eur", script:"cyrl", speakers:"150000000", letter:"всеобщаядклрципчнтзгшюйьмуыхъжэфёВСЕОБЩАЯДКЛРЦИПЧНТЗГШЮЙЬМУЫХЪЖЭФЁ", mark:"\u{0306}\u{0308}", punctuation:"‐–—…‘‚“„«»§", aux:"́" },

"rwk": { name:"Rwa (Rwo, Meru, Kirwo)", source:"CLDR", region:"afr", script:"ascii", speakers:"400000" },

"rar": { name:"Cook Islands Māori (Rarotongan)", source:"UDHR", region:"oce", script:"ascii", speakers:"21725" },

"rom": { name:"Romani (Romany, Gypsy, Gipsy)", source:"UDHR", region:"eur", script:"latn", speakers:"~1500000", letter:"àõùèìòâÀÕÙÈÌÒÂƟśěćŕăąňűźőģůščžŚĚĆŔĂĄŇŰŹŐĢŮŠČŽɵ", mark:"\u{0328}\u{0327}\u{0300}\u{0301}\u{030C}\u{0303}\u{0306}\u{030B}\u{0302}\u{030A}" },

"sah": { name:"Yakut (Sakha)", source:"cldr_sah,udhr_sah", region:"nasia", script:"cyrl", speakers:"450000", letter:"абгҕдьийклмнҥоөпрстуүхһчыэецязювщъжфАБГҔДЬИЙКЛМНҤОӨПРСТУҮХҺЧЫЭЕЦЯЗЮВЩЪЖФ", mark:"\u{0306}", aux:"веёжзфцшщъюяВЕЁЖЗФЦШЩЪЮЯ̈" },

"saq": { name:"Samburu", source:"CLDR", region:"afr", script:"ascii", speakers:"240000" },

"sg": { name:"Sango (Sangho)", source:"CLDR", region:"afr", script:"latn", speakers:"450000", letter:"âäêëîïôöùûüÂÄÊËÎÏÔÖÙÛÜ", mark:"\u{0302}\u{0308}\u{0300}" },

"sbp": { name:"Sangu (Kisangu, Kisango, Kirori, Eshisango, Rori, Sango)", source:"CLDR", region:"afr", script:"ascii", speakers:"75000" },

"seh": { name:"Sena", source:"CLDR", region:"afr", script:"latn", speakers:"1600000", letter:"áàâãçéêíóòôõúÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"\u{0327}\u{0301}\u{0300}\u{0302}\u{0303}" },

"sr": { name:"Serbian", source:"cldr_sr,udhr_srp_cyrl", region:"eur", script:"cyrl", speakers:"~9700000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–…‘‚“„", aux:"ёйщъыьэюяЁЙЩЪЫЬЭЮЯ̈̆" },

"sr-latn": { name:"Serbian (Latin)", source:"cldr_sr_Latn,udhr_srp_latn", region:"eur", script:"latn", speakers:"~9700000", letter:"čćžđšČĆŽĐŠ", mark:"\u{030C}\u{0301}", punctuation:"‐–…‘‚“„", aux:"åÅ̊" },

"ksb": { name:"Shambala (Shambaa)", source:"CLDR", region:"afr", script:"ascii", speakers:"660000" },

"sn": { name:"Shona", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"15000000" },

"si": { name:"Sinhala (Sinhalese)", source:"cldr_si,udhr_sin", region:"sasia", script:"sinh", speakers:"16000000", letter:"අආඇඈඉඊඋඌඍඑඒඓඔඕඖකඛගඝඞඟචඡජඣඥඤටඨඩඪණඬතථදධනඳපඵබභමඹයරලවශෂසහළෆ", mark:"\u{0D82}\u{0D83}\u{0DCF}\u{0DD0}\u{0DD1}\u{0DD2}\u{0DD3}\u{0DD4}\u{0DD6}\u{0DD8}\u{0DF2}\u{0DDF}\u{0DD9}\u{0DDA}\u{0DDB}\u{0DDC}\u{0DDD}\u{0DDE}\u{0DCA}", punctuation:"§‐–—…‘’“”†‡′″", symbol:"\u{200D}", aux:"ඎඏඐඦෳ" },

"sk": { name:"Slovak", source:"cldr_sk,udhr_slk", region:"eur", script:"latn", speakers:"5200000", letter:"čďĺľňŕšťžűČĎĹĽŇŔŠŤŽŰáäéíóôúýÁÄÉÍÓÔÚÝ", mark:"\u{0301}\u{0308}\u{030C}\u{0302}\u{030B}", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīŏōœřŭūĂĀĔĒĬĪŎŌŒŘŬŪŸàâåæçèêëìîïñòöøùûüÿÀÂÅÆÇÈÊËÌÎÏÑÒÖØÙÛǛ̧̆̊̄̃" },

"sl": { name:"Slovene (Slovenian)", source:"cldr_sl,udhr_slv", region:"eur", script:"latn", speakers:"2500000", letter:"čšžČŠŽ", mark:"\u{030C}", aux:"ăāćđĕēĭīŏōœŭūĂĀĆĐĔĒĬĪŎŌŒŬŪŸáàâåäæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̄̃" },

"sog": { name:"Soga (Lusoga)", source:"CLDR", region:"afr", script:"ascii", speakers:"2100000" },

"so": { name:"Somali", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"15000000" },

"es": { name:"Spanish (Castilian)", source:"cldr_es,udhr_spa", region:"eur", script:"latn", speakers:"480000000", letter:"áéíïñóúüýÁÉÍÏÑÓÚÜÝ", mark:"\u{0301}\u{0308}\u{0303}", punctuation:"‐–—…‘’“”†‡′″¡¿«»§", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÒÔÖØÙÛ̧̀̆̂̊̄" },

"sw": { name:"Swahili (Kiswahili)", source:"CLDR,UDHR", region:"afr", script:"ascii", speakers:"~7000000" },

"sv": { name:"Swedish", source:"cldr_sv,udhr_swe", region:"eur", script:"latn", speakers:"10000000", letter:"àéåäöÀÉÅÄÖ", mark:"\u{0300}\u{0301}\u{030A}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″", aux:"āīĀĪŸáâãçèëíîïñóúÿüæøÁÂÃÇÈËÍÎÏÑÓÚÜÆØ̧̂̃̄" },

"gsw": { name:"Swiss German", source:"cldr_gsw", region:"eur", script:"latn", speakers:"4930000", letter:"äöüÄÖÜ", mark:"\u{0308}", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåæçéèêëíìîïñóòôøúùûÿÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̊̄̃" },

"sm": { name:"Samoan", source:"UDHR", region:"oce", script:"ascii", speakers:"510000" },

"sa": { name:"Sanskrit", source:"UDHR", region:"sasia", script:"deva", speakers:"~15000", letter:"मनवधकरणजगतअभघषयपचशसएछबदटडहइआञउठथलढऽ", mark:"\u{093E}\u{093F}\u{0902}\u{094B}\u{094D}\u{0942}\u{0947}\u{0941}\u{094C}\u{0948}\u{0940}\u{0943}\u{0944}\u{093C}", punctuation:"।", notes:"Added <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>." },

"sc": { name:"Sardinian (Sard)", source:"UDHR", region:"eur", script:"latn", speakers:"~1000000", letter:"òìàèùÒÌÀÈÙ", mark:"\u{0300}" },

"sco": { name:"Scots (Lowland Scots)", source:"UDHR", region:"eur", script:"ascii", speakers:"110000" },

"sd": { name:"Sindhi", source:"cldr_sd", region:"sasia", script:"arab", speakers:"25000000", letter:"آابٻپڀتثٺٽٿجھڃڄچڇحخدذڊڌڍڏرزڙسشصضطظعغفڦقکڪگڱڳلمنڻهوي", mark:"\u{0653}", punctuation:"‰", aux:"ئٔ" },

"sey": { name:"Secoya", source:"UDHR", region:"sam", script:"latn", speakers:"400", letter:"ëñàéËÑÀÉ", mark:"\u{0331}\u{0308}\u{0303}\u{0300}\u{0301}" },

"skr": { name:"Saraiki (Siraiki, Seraiki)", source:"UDHR", region:"sasia", script:"arab", speakers:"20000000", letter:"انسیحقودعلمشرپہڱھےکڄئتڻزںگڈفظجچبڑصڋخڔٹطآذضغةثٻي", mark:"\u{064F}\u{0654}\u{0653}", punctuation:"۔،", number:"۱۲۳۴۵۶۷۸۹۰" },

"srr": { name:"Serer", source:"UDHR", region:"afr", script:"latn", speakers:"1230000", letter:"ñÑƭƴƊƁƬƳŋćŊĆṕṔɗɓ", mark:"\u{0303}\u{0301}" },

"crs": { name:"Seychellois Creole (Seselwa)", source:"UDHR", region:"afr", script:"latn", speakers:"73000", letter:"íÍ", mark:"\u{0301}", punctuation:"’" },

"shn": { name:"Shan", source:"UDHR", region:"seasia", script:"mymr", speakers:"3300000", letter:"လၵပၼၽဝငသဢတမၸၾႁယၶၺထရ", mark:"\u{102D}\u{103A}\u{1088}\u{102F}\u{1062}\u{1087}\u{103D}\u{1086}\u{1030}\u{1038}\u{1035}\u{102E}\u{108A}\u{1085}\u{1083}\u{1089}\u{1031}\u{1082}\u{1084}\u{103C}", punctuation:"။၊" },

"mcd": { name:"Sharanahua (Marinawa)", source:"UDHR", region:"sam", script:"latn", speakers:"3100", letter:"úíóáÚÍÓÁ", mark:"\u{0301}", punctuation:"¿" },

"shk": { name:"Shilluk", source:"udhr_shk,7b9b98a8ced343c0f2356595d76c12d32b5dd0a5", region:"afr", script:"latn", speakers:"175000", letter:"ÀÁÄÈÉËÌÍÏÓÖØÙÚàáäèéëìíïóöøùú", mark:"\u{0301}\u{0308}\u{0300}" },

"shp": { name:"Shipibo-Conibo (Shipibo-Konibo)", source:"UDHR", region:"sam", script:"latn", speakers:"26000", letter:"íáóéñúÍÁÓÉÑÚ", mark:"\u{0301}\u{0303}", punctuation:"¿" },

"cjs": { name:"Shor", source:"UDHR", region:"nasia", script:"cyrl", speakers:"2800", letter:"кижнтолағыңудерцязчқшйъӱгьсмбюпӧэвфхКИЖНТОЛАҒЫҢУДЕРЦЯЗЧҚШЙЪӰГЬСМБЮПӦЭВФХ", mark:"\u{0306}\u{0308}" },

"jiv": { name:"Shuar", source:"UDHR", region:"sam", script:"latn", speakers:"35000", letter:"áíúéÁÍÚÉ", mark:"\u{0301}" },

"snn": { name:"Siona", source:"UDHR", region:"sam", script:"latn", speakers:"500", letter:"ëñíäéËÑÍÄÉ", mark:"\u{0331}\u{0308}\u{0303}\u{0301}" },

"snk": { name:"Soninke", source:"UDHR", region:"afr", script:"latn", speakers:"2100000", letter:"ñÑŋŊ", mark:"\u{0303}" },

"hsb": { name:"Upper Sorbian", source:"cldr_hsb,udhr_hsb", region:"eur", script:"latn", speakers:"13000", letter:"čćźěłńřšžČĆŹĚŁŃŘŠŽóÓ", mark:"\u{030C}\u{0301}", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœŕśşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŔŚŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋" },

"nso": { name:"Northern Sotho", source:"UDHR", region:"afr", script:"latn", speakers:"4700000", letter:"šŠ", mark:"\u{030C}" },

"st": { name:"Southern Sotho (Sotho, Sesotho, Southern Sesotho)", source:"UDHR", region:"afr", script:"ascii", speakers:"5600000" },

"suk": { name:"Sukuma", source:"UDHR", region:"afr", script:"ascii", speakers:"5400000" },

"su": { name:"Sundanese", source:"UDHR", region:"seasia", script:"ascii", speakers:"42000000" },

"su-sund": { name:"Sundanese (Sundanese)", source:"e04c91748b5079b9b5077f2206f53c2223dc7839", region:"seasia", script:"sund", speakers:"42000000", letter:"ᮊᮋᮌᮍᮎᮏᮐᮑᮒᮓᮔᮕᮖᮗᮘᮙᮚᮛᮜᮝᮞᮟᮠᮮᮯᮃᮄᮅᮆᮇᮈᮉ", mark:"\u{1BA1}\u{1BA2}\u{1BA3}\u{1B80}\u{1B81}\u{1B82}\u{1BA4}\u{1BA5}\u{1BA6}\u{1BA7}\u{1BA8}\u{1BA9}" },

"sus": { name:"Susu", source:"UDHR", region:"afr", script:"latn", speakers:"1060000", letter:"ƐƆƝɛɔɲ" },

"ss": { name:"Swati (Swazi)", source:"UDHR", region:"afr", script:"ascii", speakers:"2300000" },

"cri": { name:"Sãotomense (Forro Creole, Santomense)", source:"UDHR", region:"afr", script:"latn", speakers:"70000", letter:"çóêéáâôºíÇÓÊÉÁÂÔÍ", mark:"\u{0327}\u{0301}\u{0302}" },

"shi": { name:"Tachelhit (Tashelhiyt, Shilha)", source:"CLDR", region:"afr", script:"tfng", speakers:"4000000", letter:"ⴰⴱⴳⵯⴷⴹⴻⴼⴽⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵓⵔⵕⵖⵙⵚⵛⵜⵟⵡⵢⵣⵥ" },

"shi-latn": { name:"Tachelhit (Tashelhiyt, Shilha) (Latin)", source:"CLDR", region:"afr", script:"latn", speakers:"4000000", letter:"ḍḥṛṣṭḌḤṚṢṬƐƔɛɣʷ", mark:"\u{0323}" },

"dav": { name:"Taita (Dawida)", source:"CLDR", region:"afr", script:"ascii", speakers:"400000" },

"ta": { name:"Tamil", source:"cldr_ta,udhr_tam,b58628669c02b347a127405429a903afbcc07eb7", region:"sasia", script:"taml", speakers:"70000000", letter:"அஆஇஈஉஊஎஏஐஒஓஔஃகஙசஞடணதநபமயரலவழளறனஜஷஸஹ", mark:"\u{0BBE}\u{0BBF}\u{0BC0}\u{0BC1}\u{0BC2}\u{0BC6}\u{0BC7}\u{0BC8}\u{0BCA}\u{0BCB}\u{0BCC}\u{0BCD}\u{0BD7}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ஶ௦௧௨௩௪௫௬௭௮௯௰௱௲௳௴௵௶௷௸௹௺ௐ।॥" },

"twq": { name:"Tasawaq", source:"CLDR", region:"afr", script:"latn", speakers:"8000", letter:"ɲẽẼŋšžŊŠŽƝãõÃÕ", mark:"\u{0303}\u{030C}" },

"te": { name:"Telugu", source:"cldr_te,udhr_tel", region:"sasia", script:"telu", speakers:"74002586", letter:"అఆఇఈఉఊఋౠఌౡఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలవశషసహళ", mark:"\u{0C01}\u{0C02}\u{0C03}\u{0C3E}\u{0C3F}\u{0C40}\u{0C41}\u{0C42}\u{0C43}\u{0C44}\u{0C46}\u{0C47}\u{0C48}\u{0C4A}\u{0C4B}\u{0C4C}\u{0C4D}\u{0C55}\u{0C56}", punctuation:"‘’“”", aux:"౦౧౨౩౪౫౬౭౮౯" },

"teo": { name:"Teso", source:"CLDR", region:"afr", script:"ascii", speakers:"1900000" },

"th": { name:"Thai (Siamese)", source:"CLDR,UDHR", region:"seasia", script:"thai", speakers:"44000000", letter:"ฯๆกขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮะาๅำเแโใไ", mark:"\u{0E4E}\u{0E4C}\u{0E47}\u{0E48}\u{0E49}\u{0E4A}\u{0E4B}\u{0E4D}\u{0E31}\u{0E34}\u{0E35}\u{0E36}\u{0E37}\u{0E38}\u{0E39}\u{0E3A}", punctuation:"‐–—‘’“”…′″" },

"bo": { name:"Tibetan", source:"cldr_bo,udhr_bod", region:"easia", script:"tibt", speakers:"1200000", letter:"ཀཁགངཅཆཇཉཊཋཌཎཏཐདནཔཕབམཙཚཛཝཞཟའཡརཪལཤཥསཧཨ", mark:"\u{0F7E}\u{0F7F}\u{0FB5}\u{0F90}\u{0F91}\u{0FB7}\u{0F92}\u{0F94}\u{0F95}\u{0F96}\u{0F97}\u{0F99}\u{0F9A}\u{0F9B}\u{0F9C}\u{0F9E}\u{0F9F}\u{0FA0}\u{0FA1}\u{0FA3}\u{0FA4}\u{0FA5}\u{0FA6}\u{0FA8}\u{0FA9}\u{0FAA}\u{0FAB}\u{0FAD}\u{0FBA}\u{0FAE}\u{0FAF}\u{0FB0}\u{0FB1}\u{0FBB}\u{0FB2}\u{0FBC}\u{0FB3}\u{0FB4}\u{0FB6}\u{0FB8}\u{0F71}\u{0F72}\u{0F80}\u{0F74}\u{0F77}\u{0F79}\u{0F84}\u{0F7A}\u{0F7B}\u{0F7C}\u{0F7D}", punctuation:"་།༄༅༎༌༈", number:"༠༡༢༣༤༥༦༧༨༩", aux:"ༀ" },

"ti": { name:"Tigrinya", source:"cldr_ti,udhr_tir", region:"afr", script:"ethi", speakers:"6900000", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍቐቑቒቓቔቕቖቘቚቛቜቝበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾዀዂዃዄዅወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ", mark:"\u{135F}", punctuation:"፣፡’", aux:"ሇቇኇኯዏዯዸዹዺዻዼዽዾዿጏጘጙጚጛጜጝጞጟፘፙፚⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶓⶔⶕⶖⶏⶐⶑⶒⶠⶡⶢⶣⶤⶥⶦⶨⶩⶪⶫⶬⶭⶮⶰⶱⶲⶳⶴⶵⶶⶸⶹⶺⶻⶼⶽⶾⷀⷁⷂⷃⷄⷅⷆⷈⷉⷊⷋⷌⷍⷎⷐⷑⷒⷓⷔⷕⷖⷘⷙⷚⷛⷜⷝⷞ᎐᎑᎒᎓᎔᎕᎖᎗᎘᎙ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ" },

"to": { name:"Tongan", source:"cldr_to,udhr_ton", region:"oce", script:"latn", speakers:"169000", letter:"āēīōūĀĒĪŌŪáéíóúÁÉÍÓÚʻ", mark:"\u{0301}\u{0304}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàâåäæçèêëìîïñòôöøùûüÿÀÂÅÄÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̊̈̃" },

"tr": { name:"Turkish (Istanbul Turkish)", source:"cldr_tr,udhr_tur", region:"wasia", script:"latn", speakers:"71000000", letter:"çöüâÇÖÜÂğışĞŞİ", mark:"\u{0327}\u{0307}\u{0306}\u{0308}\u{0302}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàåäæèêëìîïñòôøùûÿÀÅÄÆÈÊËÌÎÏÑÒÔØÙÛ̀̊̃" },

"tk": { name:"Turkmen", source:"CLDR,UDHR", region:"casia", script:"latn", speakers:"7500000", letter:"çäöüýÇÄÖÜÝžňşŽŇŞ", mark:"\u{0327}\u{0308}\u{030C}\u{0301}", punctuation:"§–—…“”‐‰" },

"tk-cyrl": { name:"Turkmen (Cyrillic)", source:"UDHR", region:"casia", script:"cyrl", speakers:"7500000", letter:"адмхуклрынңәиецясгшбптчвзэоҗйөүъюжфёАДМХУКЛРЫНҢӘИЕЦЯСГШБПТЧВЗЭОҖЙӨҮЪЮЖФЁ", mark:"\u{0306}\u{0308}", punctuation:"‐–" },

"tl": { name:"Tagalog", source:"UDHR", region:"seasia", script:"ascii", speakers:"28000000" },

"ty": { name:"Tahitian", source:"UDHR", region:"oce", script:"latn", speakers:"68000", letter:"āūōēīĀŪŌĒĪ", mark:"\u{0304}" },

"blt": { name:"Tai Dam (Black Tai)", source:"UDHR", region:"seasia", script:"tavt", speakers:"760000", letter:"ꪁꪫꪱꪣꪜꪹꪕꪉꪵꪠꪙꪒꪘꪀꪩꫛꪶꪔꪄꪮꪨꪭꪚꪺꪼꪥꪻꪐꪎꪈꪬꪊꪽꪝꪋꪤꪏꪡꪅꪑꪗꪢꫜꪖꪪꪯ", mark:"\u{AAB8}\u{AAB2}\u{AABE}\u{AAB4}\u{AAB7}\u{AAB0}\u{AAB3}" },

"tdd": { name:"Tai Nüa (Nɯa, Dehong Dai, Chinese Shan, Tai Mau, Tai Kong)", source:"7bbb60b1ae185293cf14c8d8088e14351477c26b", region:"seasia", script:"tale", speakers:"720000", letter:"ᥐᥑᥒᥓᥔᥕᥖᥗᥘᥙᥚᥛᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭᥰᥱᥲᥳᥴ", aux:"၀၁၂၃၄၅၆၇၈၉̀́̇̈̌" },

"tg": { name:"Tajik (Tajiki, Tajiki Persian)", source:"cldr_tj,udhr_tgk", region:"casia", script:"cyrl", speakers:"8400000", letter:"эъломияуҳқбашрпегфтднзкхсвӣёҷчғюӯйжьЭЪЛОМИЯУҲҚБАШРПЕГФТДНЗКХСВӢЁҶЧҒЮӮЙЖЬ", mark:"\u{0304}\u{0308}\u{0306}", punctuation:"‰", aux:"цщыьЦЩЫЬ" },

"tly": { name:"Talysh", source:"UDHR", region:"wasia", script:"latn", speakers:"900000", letter:"çÇƏığşİĞŞə", mark:"\u{0327}\u{0307}\u{0306}" },

"tt": { name:"Tatar", source:"cldr_tt,udhr_tat", region:"eur", script:"cyrl", speakers:"5200000", letter:"кешхоуларынңгмидцясбәтьвзпөъһҗчүйфюэжКЕШХОУЛАРЫНҢГМИДЦЯСБӘТЬВЗПӨЪҺҖЧҮЙФЮЭЖёщЁЩ", mark:"\u{0308}\u{0306}", aux:"ғқӯҒҚӮ̄" },

"kdh": { name:"Tem (Temba, Kotokoli, Cotocoli)", source:"UDHR", region:"afr", script:"latn", speakers:"290000", letter:"íáéúóÿÍÁÉÚÓƖƱƐƉƆńŋŃŸŊḿḾɩʊɛɖɔ", mark:"\u{0301}\u{0308}" },

"tet": { name:"Tetum (Tetun)", source:"UDHR", region:"seasia", script:"ascii", speakers:"500000" },

"tdt": { name:"Tetun Dili", source:"UDHR", region:"seasia", script:"latn", speakers:"?", letter:"áíúóÁÍÚÓ", mark:"\u{0301}", punctuation:"’" },

"tem": { name:"Temne (Themne, Timne)", source:"UDHR", region:"afr", script:"latn", speakers:"1200000", letter:"ɅƆƏƐŋŊʌɔəɛ", punctuation:"‐" },

"tca": { name:"Ticuna (Tikuna)", source:"UDHR", region:"sam", script:"latn", speakers:"47000", letter:"üéãñõúáíóÜÉÃÑÕÚÁÍÓĩũĨŨẽṯḏṉẼṮḎṈ", mark:"\u{0331}\u{0303}\u{0301}\u{0308}\u{035F}" },

"tiv": { name:"Tiv", source:"UDHR", region:"afr", script:"latn", speakers:"2200000", letter:"ôÔ", mark:"\u{0302}" },

"tob": { name:"Toba (Qom, Kom, Chaco Sur, Toba Sur)", source:"UDHR", region:"sam", script:"latn", speakers:"40000", letter:"ỹỸíÍ", mark:"\u{0303}\u{0301}" },

"toj": { name:"Tojolab'al", source:"UDHR", region:"cam", script:"ascii", speakers:"52000", punctuation:"’" },

"tpi": { name:"Tok Pisin (Pidgin English)", source:"UDHR", region:"seasia", script:"ascii", speakers:"4000000" },

"toi": { name:"Tonga (Chitonga, Zambezi)", source:"UDHR", region:"afr", script:"ascii", speakers:"1500000" },

"top": { name:"Papantla Totonac (Lowland Totonac)", source:"UDHR", region:"cam", script:"ascii", speakers:"80000" },

"ts": { name:"Tsonga (Xitsonga)", source:"UDHR", region:"afr", script:"latn", speakers:"13000000", letter:"ìàçãòèùíéáúÌÀÇÃÒÈÙÍÉÁÚ", mark:"\u{0327}\u{0300}\u{0303}\u{0301}", punctuation:"’" },

"tn": { name:"Tswana (Setswana)", source:"UDHR", region:"afr", script:"latn", speakers:"5000000", letter:"šŠ", mark:"\u{030C}", punctuation:"·‐" },

"tyv": { name:"Tuvan (Tuvinian, Tyvan, Tuvin)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"280000", letter:"кижнңэргелбүтуазычдьсмяоюцхпшөйвъфёКИЖНҢЭРГЕЛБҮТУАЗЫЧДЬСМЯОЮЦХПШӨЙВЪФЁ", mark:"\u{0306}\u{0308}" },

"tw-asante": { name:"Ashanti (Asante, Asante Twi)", source:"UDHR", region:"afr", script:"latn", speakers:"2800000", letter:"ɛɔƐƆ" },

"tw-akuapem": { name:"Akuapem Twi", source:"UDHR", region:"afr", script:"latn", speakers:"6000000", letter:"ɛɔƐƆòÒ", mark:"\u{0300}" },

"tzh": { name:"Tzeltal (Ts'eltal)", source:"UDHR", region:"cam", script:"ascii", speakers:"450000", symbol:"´" },

"tzo": { name:"Tzotzil", source:"UDHR", region:"cam", script:"latn", speakers:"400000", letter:"óáéíúÓÁÉÍÚ", mark:"\u{0301}", punctuation:"’" },

"uk": { name:"Ukrainian", source:"cldr_uk,udhr_ukr", region:"eur", script:"cyrl", speakers:"45000000", letter:"абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯʼ", mark:"\u{0308}\u{0306}", punctuation:"–’“„‐«»§", symbol:"№", aux:"ёъыэЁЪЫЭ́" },

"ur": { name:"Urdu", source:"cldr_urdu,udhr_urd,2a19c3255e234cbb86e12ec0dc966684ccdb2965", region:"sasia", script:"arab", speakers:"65000000", letter:"اآبپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنںوؤہۂھءیئےهي", mark:"\u{0650}\u{064B}\u{064F}\u{0670}\u{064E}\u{0651}\u{0654}\u{0653}", punctuation:"،؍٫٬؛؟۔”“؁٪", number:"۰۱۲۳۴۵۶۷۸۹", aux:"\u{0652}\u{064C}\u{064D}\u{0657}\u{0656}\u{0658}\u{0612}\u{0614}\u{0613}\u{0611}\u{0610}؀؄؎؏؂﷽", aux:"؃ۃٻٺټٽي" },

"ug": { name:"Uyghur (Uighur, Eastern Turki)", source:"CLDR,UDHR", region:"casia", script:"arab", speakers:"25000000", letter:"ئاەبپتجچخدرزژسشغفقكگڭلمنھوۇۆۈۋېىي", mark:"\u{0654}", punctuation:"،؛" },

"ug-latn": { name:"Uyghur (Uighur, Eastern Turki) (Latin)", source:"UDHR", region:"casia", script:"latn", speakers:"25000000", letter:"öéüÖÉÜ", mark:"\u{0308}\u{0301}", punctuation:"’" },

"uz": { name:"Uzbek", source:"CLDR,UDHR", region:"casia", script:"latn", speakers:"27000000", letter:"ʻʼ", punctuation:"‐–—…‘’“”„′″«»§" },

"uz-cyrl": { name:"Uzbek (Cyrillic)", source:"cldr_uz_Cyrl,udhr_uzn_cyrl", region:"casia", script:"cyrl", speakers:"27000000", letter:"инсоҳуқлармждекцяйбшгтўвэъпчзёфхюғИНСОҲУҚЛАРМЖДЕКЦЯЙБШГТЎВЭЪПЧЗЁФХЮҒ", mark:"\u{0306}\u{0308}", punctuation:"‐–", aux:"щыьЩЫЬ" },

"umb": { name:"Umbundu (South Mbundu)", source:"UDHR", region:"afr", script:"latn", speakers:"6000000", letter:"ñêãîõâÑÊÃÎÕÂ", mark:"\u{0303}\u{0302}", punctuation:"’" },

"ura": { name:"Urarina (Itucali, Simacu, Shimacu)", source:"UDHR", region:"sam", script:"latn", speakers:"6000", letter:"úóíÚÓÍ", mark:"\u{0301}" },

"vai": { name:"Vai (Vy, Gallinas)", source:"cldr_vai,udhr_vai", region:"afr", script:"vaii", speakers:"120000", letter:"ꔀꔁꔂꔃꔄꔅꔆꔇꔈꔉꔊꔋꔌꔍꔎꔏꔐꔑꔒꔓꔔꔕꔖꔗꔘꔙꔚꔛꔜꔝꔞꔟꔠꔡꔢꔣꔤꔥꔦꔧꔨꔩꔪꔫꔬꔭꔮꔯꔰꔱꔲꔳꔴꔵꔶꔷꔸꔹꔺꔻꔼꔽꔾꔿꕀꕁꕂꕃꕄꕅꕆꕇꕈꕉꕊꕋꕌꕍꕎꕏꕐꕑꕒꕓꕔꕕꕖꕗꕘꘐꕙꕚꕛꕜꕝꕞꕟꕠꕡꕢꕣꕤꕥꕦꕧꕨꕩꕪꘑꕫꕬꕭꕮꘪꕯꕰꕱꕲꕳꕴꕵꕶꕷꕸꕹꕺꕻꕼꕽꕾꕿꖀꖁꖂꖃꖄꖅꖆꖇꘒꖈꖉꖊꖋꖌꖍꖎꖏꖐꖑꖒꖓꖔꖕꖖꖗꖘꖙꖚꖛꖜꖝꖞꖟꖠꖡꖢꖣꖤꖥꖦꖧꖨꖩꖪꖫꖬꖭꖮꖯꖰꖱꖲꖳꖴꖵꖶꖷꖸꖹꖺꖻꖼꖽꖾꖿꗀꗁꗂꗃꗄꗅꗆꗇꗈꗉꗊꗋꗌꗍꗎꗏꗐꗑꘫꗒꗓꗔꗕꗖꗗꗘꗙꗚꗛꗜꗝꗞꗟꗠꗡꗢꗣꗤꗥꗦꗧꗨꗩꗪꗫꗬꗭꗮꗯꗰꗱꗲꗳꗴꗵꗶꗷꗸꗹꗺꗻꗼꗽꗾꗿꘀꘁꘂꘃꘄꘅꘆꘇꘈꘉꘊꘋꘌ", aux:"ꘓꘔꘕꘖꘗꘘꘙꘚꘛꘜꘝꘞꘟ" },

"vai-latn": { name:"Vai (Vy, Gallinas) (Latin)", source:"CLDR", region:"afr", script:"ascii", speakers:"120000", letter:"áãéíóõúÁÃÉÍÓÕÚƁƊƐƆĩŋũĨŊŨẽẼɓɗɛɔ", mark:"\u{0301}\u{0303}" },

"vi": { name:"Vietnamese", source:"CLDR,UDHR", region:"seasia", script:"latn", speakers:"75000000", letter:"àãáâèéêìíòõóôùúýÀÃÁÂÈÉÊÌÍÒÕÓÔÙÚÝơưƠƯăđĩũĂĐĨŨảạằẳẵắặầẩẫấậẻẽẹềểễếệỉịỏọồổỗốộờởỡớợủụừửữứựỳỷỹỵẢẠẰẲẴẮẶẦẨẪẤẬẺẼẸỀỂỄẾỆỈỊỎỌỒỔỖỐỘỜỞỠỚỢỦỤỪỬỮỨỰỲỶỸỴ", mark:"\u{031B}\u{0323}\u{0300}\u{0309}\u{0303}\u{0301}\u{0306}\u{0302}", punctuation:"§‐–—…‘’“”†‡′″" },

"vo": { name:"Volapük", source:"CLDR", region:"eur", script:"latn", speakers:"20", letter:"äöüÄÖÜ", mark:"\u{0308}", punctuation:"«»§‐–—…‘’“”" },

"vun": { name:"Wuunjo (Wunjo, Vunjo, Kivunjo)", source:"CLDR", region:"afr", script:"ascii", speakers:"?" },

"ve": { name:"Venda (Tshivenḓa, Luvenḓa)", source:"UDHR", region:"afr", script:"latn", speakers:"1300000", letter:"ṱḽḓṅṋṰḼḒṄṊ", mark:"\u{032D}\u{0307}", punctuation:"“”" },

"ven": { name:"Venetian (Venetan)", source:"UDHR", region:"eur", script:"latn", speakers:"3900000", letter:"óàòèùéìçÓÀÒÈÙÉÌÇƚȽđĐ", mark:"\u{0327}\u{0301}\u{0300}", punctuation:"’—" },

"vep": { name:"Veps (Vepsian)", source:"UDHR", region:"eur", script:"latn", speakers:"5900", letter:"üäöÜÄÖšžčŠŽČ", mark:"\u{0308}\u{030C}", punctuation:"’" },

"wae": { name:"Walser German (Walliser German)", source:"cldr_wae", region:"eur", script:"latn", speakers:"22000", letter:"áäãéíóöõúüÁÄÃÉÍÓÖÕÚÜčšũČŠŨ", mark:"\u{0301}\u{0308}\u{0303}\u{030C}", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåæçèêëìîïñòôøßùûÿÀÂÅÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̄" },

"cy": { name:"Welsh (Cymraeg, y Gymraeg)", source:"cldr_cy,udhr_cym", region:"eur", script:"latn", speakers:"700000", letter:"áàâäéèêëíìîïóòôöúùûüýÿÁÀÂÄÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜÝŵŷŴŶŸẃẁẅỳẂẀẄỲ", mark:"\u{0301}\u{0300}\u{0302}\u{0308}", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪåãæçñøÅÃÆÇÑØ̧̆̊̃̄" },

"wwa": { name:"Waama (Yoabu)", source:"UDHR", region:"afr", script:"latn", speakers:"50000", letter:"ãìàùèÃÌÀÙÈǹƆƐǸũŋŨŊɔɛ", mark:"\u{0303}\u{0300}" },

"wa": { name:"Walloon", source:"UDHR", region:"eur", script:"latn", speakers:"600000", letter:"éåèûîôâêçàÉÅÈÛÎÔÂÊÇÀ", mark:"\u{0327}\u{0301}\u{030A}\u{0300}\u{0302}" },

"auc": { name:"Waorani (Huaorani, Sabela, Wao, Huao, Auishiri, Aushiri, Ssabela)", source:"UDHR", region:"sam", script:"latn", speakers:"1800", letter:"ñíéóÑÍÉÓ", mark:"\u{0303}\u{0301}" },

"war": { name:"Waray", source:"UDHR", region:"seasia", script:"ascii", speakers:"2600000" },

"guc": { name:"Wayuu (Wayu, Wayúu, Guajiro, Wahiro)", source:"UDHR", region:"sam", script:"latn", speakers:"437780", letter:"üñÜÑ", mark:"\u{0308}\u{0303}" },

"wo": { name:"Wolof", source:"cldr_wo,udhr_wol", region:"afr", script:"latn", speakers:"4200000", letter:"ëñàéóËÑÀÉÓŋŊ", mark:"\u{0308}\u{0303}\u{0300}\u{0301}", punctuation:"‰", aux:"ãÃ" },

"xh": { name:"Xhosa", source:"UDHR", region:"afr", script:"ascii", speakers:"8200000" },

"yav": { name:"Yangben (Central Yambasa)", source:"CLDR", region:"afr", script:"latn", speakers:"17000", letter:"áàâéèíìîóòôúùûÁÀÂÉÈÍÌÎÓÒÔÚÙÛǎǒǔǍƐǑƆǓāīŋōūĀĪŊŌŪɛɔ", mark:"\u{0301}\u{0300}\u{0302}\u{030C}\u{0304}" },

"yi": { name:"Yiddish", source:"CLDR,UDHR", region:"eur", script:"hebr", speakers:"1500000", letter:"אבגדזשהויחטײכךלמםנןסעפףצץקרתװױ", mark:"\u{05B7}\u{05B8}\u{05BF}\u{05BC}\u{05B4}\u{05C2}", punctuation:"׳״־‐–—", other:"\u{202E}\u{202C}" },

"yo": { name:"Yoruba", source:"CLDR,UDHR", region:"afr", script:"latn", speakers:"28000000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙńŃẹọṣẸỌṢ", mark:"\u{0329}\u{0323}\u{0301}\u{0300}\u{0304}", punctuation:"‐" },

"yad": { name:"Yagua", source:"UDHR", region:"sam", script:"latn", speakers:"5700", letter:"ñíéáÑÍÉÁ", mark:"\u{0303}\u{0301}" },

"ame": { name:"Yanesha' (Amuesha, Amoesha)", source:"UDHR", region:"sam", script:"latn", speakers:"9800", letter:"ñëóíãõáÑËÓÍÃÕÁẽẼʼ", mark:"\u{0303}\u{0308}\u{0301}" },

"guu": { name:"Yanomamö", source:"UDHR", region:"sam", script:"latn", speakers:"20000", letter:"ëãáõíËÃÁÕÍĩũĨŨẽẼ", mark:"\u{0308}\u{0303}\u{0301}" },

"yao": { name:"Yao", source:"UDHR", region:"afr", script:"ascii", speakers:"3100000" },

"yap": { name:"Yapese", source:"UDHR", region:"oce", script:"latn", speakers:"7400", letter:"ʼ", punctuation:"‐" },

"ykg": { name:"Tundra Yukaghir (Northern Yukaghir)", source:"UDHR", region:"nasia", script:"cyrl", speakers:"370", letter:"эльистачйкөдҥнбпрумогецяҕхжѳқзвфыющЭЛЬИСТАЧЙКӨДҤНБПРУМОГЕЦЯҔХЖѲҚЗВФЫЮЩ", mark:"\u{0306}" },

"dje": { name:"Zarma (Djerma, Dyabarma, Dyarma, Dyerma, Adzerma, Zabarma, Zarbarma, Zarmaci, Zerma)", source:"UDHR", region:"afr", script:"latn", speakers:"24000000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"\u{0303}\u{030C}" },

"zu": { name:"Zulu", source:"cldr_zu,udhr_zul", region:"afr", script:"ascii", speakers:"12000000", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄" },

"ztu": { name:"Güilá Zapotec", source:"UDHR", region:"cam", script:"latn", speakers:"9500", letter:"ëíéËÍÉ", mark:"\u{0308}\u{0301}" },

"zam": { name:"Miahuatlán Zapotec (Cuixtla Zapotec)", source:"UDHR", region:"cam", script:"latn", speakers:"1000", letter:"óáñíÓÁÑÍʼ", mark:"\u{0301}\u{0303}" },

"za": { name:"Zhuang", source:"UDHR", region:"easia", script:"ascii", speakers:"16000000" }, // i suspect this is missing some letters

"zro": { name:"Záparo (Sápara, Zápara)", source:"UDHR", region:"sam", script:"latn", speakers:"350", letter:"ñÑ", mark:"\u{0303}" },

//"xxx": { name:"name", source:"CLDR,UDHR", region:"Asia", script:"latn", speakers:"113000", letter:"", mark:"", punctuation:"", number:"", symbol:"" },
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
// kl: CLDR adds, letter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ", mark:"\u{0301}\u{0302}\u{0303}\u{030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field




