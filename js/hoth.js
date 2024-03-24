/* Custom directive for detecting click outside of element */
/*Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
	};
	document.body.addEventListener('click', this.event)
	},
	unbind: function (el) {
		document.body.removeEventListener('click', this.event)
	},
});
	*/
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		squads: [
		//---------------------------------------------------------------------------------------------------------------------------------DS SQUADS
			{	
				id: 0,
				name: 'Sith Empire',
				toons: ['darth_revan', 'bastila_shan_(fallen)', 'hk-47', 'sith_marauder', 'darth_malak']
			},
			{
				id: 1,
				name: 'First Order',
				toons: ['kylo_ren_(unmasked)', 'kylo_ren', 'first_order_executioner', 'first_order_officer', 'first_order_stormtrooper'],
			},
			{
				id: 2,
				name: 'Bounty Hunters',
				toons: ['bossk','jango_fett', 'boba_fett', 'dengar', 'cad_bane']
			},
			{
				id: 3,
				name: 'Empire',
				toons: ['emperor_palpatine', 'darth_vader', 'grand_admiral_thrawn', 'grand_moff_tarkin', 'tie_fighter_pilot'  ]
			},
			{
				id: 4,
				name: 'Night Sisters',
				toons: ['mother_talzin', 'asajj_ventress', 'nightsister_zombie', 'old_daka', 'nightsister_spirit' ]
			},
			{
				id: 5,
				name: 'Sith Triumvirate',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'count_dooku']
			},
			{
				id: 6,
				name: 'Separatist Droids',
				toons: ['general_grievous', 'b2_super_battle_droid', 'b1_battle_droid', 'droideka', 'ig100_magnaguard']
			},
			{
				id: 7,
				name: 'Geonosians',
				toons: ['geonosian_brood_alpha', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser', 'sun_fac']
			},
			{
				id: 8,
				name: 'Nute team',
				toons: ['nute_gunrey', 'b1_battle_droid', 'b2_super_battle_droid', 'droideka', 'ig100_magnaguard' ]
			},
			{
				id: 9,
				name: 'Dooku + Asajj',
				toons: ['count_dooku', 'asajj_ventress']
			},
			{
				id: 10,
				name: 'Poggle Geos',
				toons: ['poggle_the_lesser', 'geonosian_soldier', 'geonosian_spy', 'sun_fac', 'geonosian_brood_alpha']
			},
			{
				id: 11,
				name: 'Chimaera standard',
				toons: ['hound\'s_tooth', 'imperial_tie_fighter', 'tie_silencer', 'xanadu_blood', 'emperor\'s_shuttle']
			},
			{
				id: 12,
				name: 'Executrix standard',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i' ]
			},
			{
				id: 13,
				name: 'Chimaera bugs (without Hound\'s Tooth)',
				toons: ['sun_fac\'s_geonosian_starfighter', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			{
				id: 14,
				name: 'Nightsisters without Asajj',
				toons: ['mother_talzin',  'nightsister_zombie', 'old_daka', 'nightsister_spirit', 'talia' ]
			},
			{
				id: 15,
				name: 'Sith Triumvirate without Dooku',
				toons: ['darth_traya', 'darth_sion', 'darth_nihilus', 'sith_empire_trooper', 'sith_assassin']
			},
			{
				id: 16,
				name: 'Test squad',
				toons: ['count_dooku', 'general_grievous', 'b2_super_battle_droid', 'nute_gunrey', 'b1_battle_droid']
			},
			{
				id: 17,
				name: 'Executrix without Hound\'s Tooth',
				toons: ['b-28_extinction-class_bomber', 'emperor\'s_shuttle', 'sith_fighter', 'tie_advanced_x1', 'xanadu_blood']
			},
			{
				id: 18,
				name: 'Chimaera with Hound\'s Tooth and bugs',
				toons: ['hound\'s_tooth', 'geonosian_spy_starfighter', 'geonosian_soldier\'s_starfighter', 'sun_fac\'s_geonosian_starfighter', 'gauntlet_starfighter', 'slave_i']
			},
			
			//---------------------------------------------------------------------------------------------------------------------------------LS SQUADS
			{
				id: 19, 
				name: 'LS test squad',
				toons: ['ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)','ahsoka_tano_(fulcrum)',] //hands down best character
			},
			{
				id: 20, //Use once points are updated
				name: 'LS test squad',
				toons: ['ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano','ahsoka_tano',] 
			},
			{
				id: 21, 
				name: 'Required: GAS and Snips (21k+ Power)',
				toons: ['general_skywalker','ahsoka_tano','noone','noone','noone'] 
			},
			{
				id: 22, 
				name: 'Required: Kenobi and Clones (21k+ Power)',
				toons: ['general_kenobi','cc-2224__cody_', 'clone_sergeant_-_phase_i','noone','noone'] 
			},
			{
				id: 23,
				name: 'Shaak-ti and Clones (22k+ Power)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-5555__fives_', 'ct-7567__rex_']
				
			},
			{
				id: 24,
				name: 'Unknown',
				toons: ['unknown', 'unknown','unknown','unknown','unknown',]
				
			},
			{
				id:25,
				name: 'Required: Galactic Republic Jedi (23k+ Power)',
				toons: ['ki-adi-mundi', 'shaak_ti', 'gl_kenobi', 'mace_windu', 'aayla_secura',]
             },			
             {
                id:26,
                name: 'Kenobi Negotiator Fleet w/o Y-Wing',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter','ahsoka_tano\'s_jedi_starfighter', 'umbaran_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170', 'jedi_consular\'s_starfighter']
             },
             {
                id:27,
                name: 'Home One Fleet',
                toons: ['han\'s_millennium_falcon'],
             },
              {
                id:28,
                name: 'Padme Republic  (Required: Padme and Galactic Republic )',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id:29,
				name: 'Jedi Training Rey',
				toons: ['rey_(jedi_training)', 'c-3po', 'r2-d2', 'finn', 'bb-8'],
				 
			 },
			 {
				id:30,
				name: 'JKR Jedi (Required: Jedi)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
                id:31,
                name: 'Kenobi Negotiator Fleet w/ Y-Wing',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter','ahsoka_tano\'s_jedi_starfighter', 'umbaran_starfighter', 'plo_koon\'s_jedi_starfighter', 'clone_sergeant\'s_arc-170', 'rex\'s_arc-170', 'BTL-B_Y-wing_Starfighter']
             },
             {
                id:32,
                name: 'Kenobi Negotiator Fleet - CS start (see video)',
                toons: ['negotiator', 'anakin\'s_eta-2_starfighter', 'clone_sergeant\'s_arc-170', 'umbaran_starfighter','ahsoka_tano\'s_jedi_starfighter', 'plo_koon\'s_jedi_starfighter', 'rex\'s_arc-170', 'jedi_consular\'s_starfighter']
             },
             {
				id:33,
				name: 'JKL Lead (Required: Jedi)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id: 34,
				name: 'Shaak-ti Lead Clones',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			},
			{
				id: 35,
				name: 'GAS Lead Clones',
				toons: ['general_skywalker', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			},
			{
                id:36,
                name: 'Padme Republic  (Required: Galactic Republic)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
                id:37,
                name: 'Padme Republic' ,
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id: 38,
				name: 'Required: Galactic Republic Jedi, 22k+ Power',
				toons: ['general_kenobi', 'jedi_knight_anakin','grand_master_yoda','ahsoka_tano','barriss_offee',]
				
			},
			{
				id: 39,
				name: 'Unknown (Required: Jedi, 23k+ Power)',
				toons: ['unknown', 'unknown','unknown','unknown','unknown',]
				
			},
			{
				id: 40,
				name: 'Required: GAS & 501st, 23k+ Power',
				toons: ['general_skywalker', 'ct-21-0408__echo_','ct-7567__rex_','arc_trooper','ct-5555__fives_',]
				
			},
			{
				id: 41,
				name: 'Required: Galactic Republic, Padme, JKA, GK, 23k+ Power',
				toons: ['padmé_amidala', 'jedi_knight_anakin','general_kenobi','commander_ahsoka_tano','gl_kenobi',]
				
			},
			{
				id: 42,
				name: 'Resistance (GL Rey or oFinn Lead) (variants available)',
				toons: ['gl_rey', 'resistance_hero_finn','resistance_hero_poe','amilyn_holdo','rey_(jedi_training)',]
				
			},
			 {
				id:43,
				name: 'JKR Jedi with GAS (Required: Jedi)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'general_skywalker', 'grand_master_yoda'],
				 
			 },
			 {
				id:44,
				name: 'Rebels (Either CLS or oROLO Lead)',
				toons: ['commander_luke_skywalker', 'chewbacca', 'han_solo', 'threepio_&_chewie', 'c-3po'],
				 
			 },
			 {
				id:45,
				name: 'Rebel Fighters',
				toons: ['mon_mothma', 'pao', 'hoth_rebel_scout', 'cara_dune', 'kyle_katarn_o'],
				 
			 },
			 {
				 id:46,
				 name: 'Galactic Legend Luke (Required: Jedi) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				 id:47,
				 name: 'Galactic Legend Luke (Required: Jedi, 23k+ Power) (variants available)',
				 toons: ['jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				 id:48,
				 name: 'Galactic Legend Luke (Required: Jedi) (variants available)',
				 toons: ['jedi_knight_luke_skywalker','gl_luke', 'hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
                id:49,
                name: 'Padme Republic Without Snips (Required: Galactic Republic)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'barriss_offee'],
             },
             {
				id: 50,
				name: 'Shaak-ti Lead Clones (Required: Galactic Republic)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
			 {
				id: 51,
				name: 'Home One Rebel Fleet',
				toons: ['home_one', 'han\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'bistan\'s_u-wing', 'rebel_y-wing', 'phantom_ii', 'cassian\'s_u-wing','ghost']
				
		 	 },
		 	 {
				id: 52,
				name: 'Raddus Resistance Fleet',
				toons: ['raddus','poe_dameron\'s_x-wing','rey\'s_millennium_falcon', 'biggs_darklighter\'s_x-wing', 'han\'s_millennium_falcon', 'ebon_hawk', "lando\'s_millennium_falcon","resistance_x-wing"]
				
		 	 },
             {
                id:53,
                name: 'Padme Republic (Required: Padme, Galactic Republic 16.5k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','c-3po', 'ahsoka_tano'],
             },
             {
				id: 54,
				name: 'Shaak-ti Lead Clones (Required: Galactic Republic, 21k+ Power)',
				toons: ['shaak_ti', 'arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
             {
                id:55,
                name: 'Padme Republic Without Snips (Required: Galactic Republic, 21k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
				 id:56,
				 name: 'Galactic Legend Luke (Required: Jedi, 21k+ Power) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				id:57,
				name: 'JKL Lead (Required: Jedi, 21k+ Power)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id:58,
				name: 'JKR Jedi (Required: Jedi, 21k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
				 id:59,
				 name: 'Galactic Legend Luke (Required: Jedi, 22k+ Power) (variants available)',
				 toons: [ 'jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				id:60,
				name: 'JKL Lead (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_luke_skywalker', 'hermit_yoda', 'obi-wan_kenobi_(old_ben)', 'grand_master_yoda', 'aayla_secura'],
			 },
			 {
				id:61,
				name: 'JKR Jedi (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'hermit_yoda', 'grand_master_yoda'],
				 
			 },
			 {
				id:62,
				name: 'JKR Jedi with GAS (Required: Jedi, 22k+ Power)',
				toons: ['jedi_knight_revan', 'bastila_shan', 'jolee_bindo', 'general_skywalker', 'grand_master_yoda'],
				 
			 },
			 {
                id:63,
                name: 'Padme Republic With CAT (Required: Padme, Galactic Republic 16.5k+ Power)',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
				id: 64,
				name: 'Required: Galactic Republic, Padme, JKA, GK, 23k+ Power',
				toons: ['padmé_amidala', 'jedi_knight_anakin','general_kenobi','ahsoka_tano','commander_ahsoka_tano',]
				
  			 },
			 {
				id: 65,
				name: 'Galactic Legend Kenobi (Required: Jedi) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','ahsoka_tano','aayla_secura','mace_windu',]
				
			 },
			 {
				id: 66,
				name: 'Galactic Legend Kenobi (Required: Jedi, 21k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_kenobi','grand_master_yoda','aayla_secura','mace_windu',]
				
			 },
             {
				id: 67,
				name: 'Galactic Legend Kenobi (Required: Jedi, 22k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','aayla_secura','general_kenobi','ahsoka_tano',]
				
			 },
			 {
				id: 68,
				name: 'Galactic Legend Kenobi (Required: GR Jedi, 22k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'general_skywalker','aayla_secura','mace_windu','ahsoka_tano',]
				
			 },
			 {
				id: 69,
				name: 'Galactic Legend Kenobi (Required: GR, 21k+ Power) (Variants Available)',
				toons: ['gl_kenobi', 'mace_windu','commander_ahsoka_tano','aayla_secura','padmé_amidala',]
				
			 },
			 {
				id: 70,
				name: 'Bad Batch (22k+ Power)',
				toons: ['hunter', 'echo','wrecker','tech','omega',]
				
			 },
			 {
				id: 71,
				name: 'Padme 501st (Required Padme, Galactic Republic 16.5k+ Power )',
				toons: ['padmé_amidala','arc_trooper', 'ct-21-0408__echo_', 'ct-7567__rex_', 'ct-5555__fives_']
				
			 },
             {
                id:72,
                name: 'Padme Republic',
                toons: ['padmé_amidala','jedi_knight_anakin','general_kenobi','commander_ahsoka_tano', 'r2-d2'],
             },
             {
                id:73,
                name: 'Lord Vader (solo)',
                toons: ['gl_vader','noone','noone','noone','noone']
             },
             {
                id:74,
                name: 'Wookies',
                toons: ['clone_wars_chewbacca','threepio_&_chewie','chewbacca','zaalbar','veteran_smuggler_chewbacca']
             },
             {
				id: 75,
				name: 'Profundity Fleet',
				toons: ['profundity', 'rebel_y-wing', 'outrider','ghost', 'biggs_darklighter\'s_x-wing', 'han\'s_millennium_falcon', 'phantom_ii', 'cassian\'s_u-wing']
				
		 	 },
		 	 {
				 id:76,
				 name: 'Galactic Legend Luke (variants available)',
				 toons: ['jedi_knight_luke_skywalker','gl_luke','hermit_yoda','jolee_bindo','jedi_knight_revan',],
			 },
			 {
				 id:77,
				 name: 'Galactic Legend Kenobi with Republic (variants available)',
				 toons: ['gl_kenobi','commander_ahsoka_tano','padmé_amidala','general_kenobi','general_skywalker',],
			 },
			 {
                id:78,
                name: 'Mon Mothma with Omicron Kyle Katarn',
                toons: ['mon_mothma', 'pao', 'hoth_rebel_scout', 'cara_dune', 'kyle_katarn_o']
             },
             {
                id:79,
                name: 'oRolo with Rebels',
                toons: ['rolo', 'han_solo', 'chewbacca', 'threepio_&_chewie', 'ahsoka_tano_(fulcrum)']
             },
             {
                id:80,
                name: 'Executor',
                toons: ['executor','hound\'s_tooth','razor_crest','ghost','xanadu_blood','slave_i','ig-2000', 'ebon_hawk']
             },
             {
                id:81,
                name: 'Jabba the Hutt',
                toons: ['gl_jabba','krrsantan','skiff_lando','boba_fett','boushh']
             },
             {
				id: 82,
				name: 'SLKR',
				toons: ['gl_kylo', 'sith_trooper', 'kylo_ren_(unmasked)', 'general_hux', 'first_order_stormtrooper'],
			},
            {
                id:83,
                name: "Doctor Aphra & Droids (variants available)",
                toons: ['doctoraphra','bt1','triplezero','ig-88','hk-47']
             },
            {
                id:84,
                name: 'Lord Vader Empire (Variants Available)',
                toons: ['gl_vader','dark_trooper_moff_gideon','royal_guard','admiral_piett','maul'],
             },
	     {
		id: 85,
		name: 'SEE + Sith Empire',
		toons: ['gl_palp', 'darth_malak', 'darth_revan','darth_malgus','wat_tambor'],
	     },
	     {
                id:86,
                name: 'Inquisitors',
                toons: ['third_sister','grand_inquisitor', 'seventh_sister', 'ninth_sister', 'fifth_brother']
             },
 



		],
		enemies: [
		'B2 Rocket Droid',//0
		'Command Battle Droid',//1
	    'Count Dooku', //2
	    'General Grevious',//3
	    'General Kalani',//4
	    'Geonosian Brood Alpha', //5
	    'Jango Fett',//6
	    'Nute Gunray', //7	
	    'Poggle the Lesser',//8
	    'Reek',//9
	    'T-Series Tactical Droid',//10
	    'Wat Tambor', //11 
	    'Executrix',//12
	    'Malevolence',//13
	    'Chimaera',//14        
	    'Nexu',//15 
	    'Hound\'s Tooth',//16	
        'Wave 1: Wat Tambor (L), Nute Gunray, Poggle the Lesser',
        'Wave 2: Jedi Master Kenobi',
        'Wave 1: Command Battle Droid (L), 2x Magnaguard, B2, B1, Droideka',
        "Wave 2: Nute Gunray (L), 2x Magnaguard, 2x B2, Security Battle Droid",//20
        "Wave 2: Wat Tambor (L), 2x Magnaguard, 2x B2, Security Battle Droid",
        "Wave 2: Geonosian Brood Alpha (L), Geo Spy, Geo Soldier, Poggle, Sun Fac",
        "Malevolence, Hyena Bomber, Vulture Droid, Geo Starfighter",
        "Malevolence, Sun Fac's Starfigher, Geo Spy's Starfighter, Geo Starfighter",
        "Wave 1: Geonosian Brood Alpha (L), Geo Spy, Geo Soldier, Poggle, Sun Fac",//25
        "Wave 2: Nexu",
        "Wave 1: Geonosian Brood Alpha, Geonosian Soldier, Reek",
        "Wave 1: Acklay",
        "Wave 1: 3x Partisan Fighter, 2x Rebel Spy",
        "Wave 2: Kanan Jarrus (L), Ezra Bridger, Chopper, Rex, Partisan Fighter",//30
        "Wave 1: Stormtrooper Commander (L), Stormtrooper, Tie Pilot, Recon Trooper, Scout Trooper",
        "Wave 2: Imperial Officer (L), Stormtrooper Commander, Stormtrooper, Tie Pilot, Recon Trooper, Scout Trooper",
        "Executrix, Tie Advanced X1, Tie Bomber, Tie Fighter, Tie Interceptor (R)",
        "Unknown",
        "Wave 2: General Veers (L), Colonel Starck, Stormtrooper Commander, 2x Stormtrooper, Tie Pilot",//35
        "Wave 1: Mob Enforcer (L), Cartel Spy, 2x Cartel Bruiser, Cartel Saboteur",
        "Wave 2: Qi'ra (L), Young Han, Cartel Bruiser, Cartel Spy, Cartel Saboteur ",
        "Wave 1: 2x Nightsister Acolyte (L), Nightsister Initiate, Nightsister Zombie, Nightsister Spirit",
        "Wave 2: Mother Talzin (L), Old Daka, Nightsister Acolyte, Nightsister Zombie, Nightsister Spirit",
        "Wave 1: Stormtrooper Commander (L), Stormtrooper, Recon Trooper, Scout Trooper",//40
        "Wave 2: Mara Jade (L), 2x Purge Trooper, Stormtrooper Commander, Stormtrooper, Recon Trooper",
        "Wave 2: Imperial Officer (L), Stormtrooper Commander, Stormtrooper, Recon Trooper, Tie Pilot, Scout Trooper",
        "Executrix, Tie Advanced X1, Scythe, Tie Fighter, Tie Interceptor (R)",
        "Wave 2: Ninth Sister (L), 2x Purge Trooper",
        "Executor, Hound's Tooth, Xanadu Blood, Razor Crest, Slave I (R), IG-2000 (R)",//45
        "Wave 1: 3x Pike Sentinel (L), Pirate Spy, Pirate Saboteur, Pirate Leader",
        "Wave 2: Qi'ra, L3-37, Young Han Solo, Young Lando Calrissian, Vandor Chewbacca, Pirate Leader",
        "Wave 2: 3x Pike Sentinel (L), Pirate Spy, Pirate Saboteur, Pirate Enforcer",
        "Mon Calamari Cruiser, X-wing, Red2, Red3",
		"TBC: Sana Starros/Han/Chewy/Leia/3po",//50
		"Wave 1: 3x Wampa",
		"Wave 2: 3x Wampa",
        "Wave 1: Mob Enforcer (L), 2x Cartel Spy, 2x Cartel Bruiser, Cartel Saboteur",
        "Wave 2: Dash Rendar (L), 2x Cartel Spy, 2x Cartel Bruiser, Cartel Saboteur",
        "Wave 2: Mob Enforcer (L), 2x Cartel Spy, 2x Cartel Bruiser, Cartel Saboteur",//55
	"Wave 1: Hoth Rebel Commander (L), 3x Hoth Rebel Soldier, Hoth Rebel Scout",
	"Wave 2: Sana Starros (L), Chewbacca, Rolo, Hoth Rebel Soldier, C-3PO, Captain Han"
		],
		platoons: [
        [  "Darth Malgus",	"7","Scythe",	"6","Commander Ahsoka Tano",	"5","Rey",	"5","Supreme Leader Kylo Ren",	"4",
"Ben Solo",	"3","Boba Fett, Scion of Jango",	"3","Darth Traya",	"3","General Kenobi",	"3","Han Solo",	"3",
"Lord Vader",	"3","Maul",	"3","Razor Crest",	"3","Imperial Probe Droid",	"2",
"Jedi Master Kenobi",	"2","Jedi Master Luke Skywalker",	"2",
"Sana Starros",	"2","Wat Tambor",	"2","Admiral Raddus",	"1","Asajj Ventress",	"1","Aurra Sing",	"1",
"B1 Battle Droid",	"1","Chief Nebit",	"1","Clone Sergeant - Phase I",	"1","Dark Trooper",	"1","Dengar",	"1",
"Emperor's Shuttle",	"1","Executor",	"1","First Order Officer",	"1","Hermit Yoda",	"1",
"HK-47",	"1","IG-100 MagnaGuard",	"1","Jedi Consular",	"1",
"Nightsister Initiate",	"1","Ninth Sister",	"1","Nute Gunray",	"1","Old Daka",	"1","Outrider",	"1","Pao",	"1","Rebel Officer Leia Organa",	"1",
"Resistance Pilot",	"1","Sith Empire Trooper",	"1",
"Sith Eternal Emperor",	"1","Sith Trooper",	"1","TIE Echelon",	"1","Veteran Smuggler Chewbacca",	"1",
"Young Lando Calrissian",	"1",  
          ]
		],
		guides:[
		'See also: 50 Shards of Kam Discord Server',
		'Its Just Ian Modding and Strategy: www.youtube.com/watch?v=9eLKxWumn_Y',
		'McMole2 Defeat the Reek: www.youtube.com/watch?v=ktfNTjiUiGY',
		'Mikayas Sky & Ahsoka guide www.youtube.com/watch?v=rWu4qahiA-g',
		'BitDynasty GAS + Ahsoka guide: www.youtube.com/watch?v=mV7PPNRL2Nc',
		'Z-Gaming JTR with C3P0: www.youtube.com/watch?v=rOqVwTLFMOE',//5
		'DBofficial G10 SARGE guide: www.youtube.com/watch?v=QPfu0URQliU&',//6
		'Warrior SWGOH Livestream t/s 10:06: www.youtube.com/watch?v=YAP5s-bavXE',//7
		'Bulldog g12 JKL destorys LS geo tb: www.youtube.com/watch?v=g_co0UtkMvA',//8
		],
        modifiers:[
        'At the beginning of battle, each side summons a random Corellian Engineering Cargo Ship. At the start of their turn, Cargo Ships gain Protection Over Time (10%) for 1 turn.',
        'Coaxium: +25% Critical Damage and Speed; -15% Accuracy; will be critically hit if able; enemies can ignore Taunt to target this character; if this character is defeated by a status effect, Coaxium will not be granted to anyone',
        "Summons Probe Droid whenever possible",
        "Whenever a character/ship uses a Special ability, they gain a stack of Confuse (max 3) until the end of the encounter. All characters gain the granted ability Clear Head at the start of battle (remove all stacks of confused).",
        "At the end of every other turn, all units are inflicted with Damage Over Time until defeated, which can't be resisted.",
        "Gain a stack of frostbite every turn. At 10 stacks units are defeated. Use granted ability to remove 2 stacks.",
        "All units gain the Smells Bad on the Outside ability. All units start with Deadly Storm. The first time an ally would be defeated, they instead dispel all debuffs on themselves and remove Deadly Storm from all allies, recover 100% Health and Protection, gain Damage Immunity and Stun for 1 turn. Use Smells Bad From the Outside ability to remove Deadly Storm.",
        ],
        notes:[
        'With Lord Vader\'s ultimate ability, this can be done on full auto',
        'Unclear if this is even possible right now',
        "Currently Bugged!",
		"If you are able to do this mission, please send me a screenshot on discord so I can confirm the wave breakdown!"
        ],
        reqs:[
        'Lord Vader (Relic 5+)',
        '5x Dark Side or Neutral (Relic 5+)',
        'Dark Side Ships (7-Star), Scythe',
        'Dark Side Ships (7-Star)',
        '5x Dark Side or Neutral (Relic 6+)',//4
        '5x Geonosian (Relic 7+)',//5
        '5x characters (Relic 5+)',
        '5x characters (Relic 5+), Doctor Aphra',
        '5x characters (Relic 5+), Jabba the Hutt',
        '5x characters (Relic 5+), Qi\'ra, Young Han Solo',
        'Lando\'s Millenium Falcon (7-Star)',//10,
        "Dark Side or Neutral (Relic 7+)",
        "Dark Side or Neutral (Relic 7+), Doctor Aphra",
        "Empire (Relic 7+)",
        "5x Light Side or Neutral (Relic 7+)",
        "5x Light Side Wookiees (Relic 7+)",//15
        "Light Side Ships (7-Star), Profundity",
        '5x characters (Relic 8+), Jabba the Hutt',
        "Ships (7-Star), Ghost",
        '5x characters (Relic 8+), Qi\'ra, L3-37',
        '5x characters (Relic 8+)',//20,
        '5x characters (Relic 9+)',
        '5x characters (Relic 9+), Doctor Aphra, BT-1, 0-0-0',
        '5x characters (Relic 9+), Jabba the Hutt',
        "Ships (7-Star)",
        
        ],
		platims:[
		'Phase 6 Mixed Hoth (self)',//0
		],
		missions: [{
			id: 0,
			name: 'c1',
			type: 'fleet',
			position: 'left',
			rewards: [
				'Wave 1: 2,303,438',
				],
            preferredSquads: [80,],//fleet
			dangerousEnemies: [49],
            reqs: [24],
            modifiers: [4],
			},	{
			id: 1,
			name: 'c2',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 460,668',
                'Wave 2: 1,151,719'
				],
			preferredSquads: [84,44],//Wampa
			dangerousEnemies: [51,52],
			modifiers: [5,6],
            reqs: [21],
			}, {
			id: 2,
			name: 'c3',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 460,668',
                'Wave 2: 1,151,719'
				],
            preferredSquads: [85, 86],//bl
			dangerousEnemies: [53,55],
            reqs: [21],
            modifiers: [5,6],
			},
            {
			id: 5,
			name: 'c4',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 460,668',
                'Wave 2: 1,151,719'
				],
			preferredSquads: [83],//br aphra
			dangerousEnemies: [56,57],
			modifiers: [5,6],
            reqs: [22],
			},
			{
			id: 5,
			name: 'c6',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 460,668',
                'Wave 2: 1,151,719'
				],
				preferredSquads: [81],//Jabba
				dangerousEnemies: [53,54],
				modifiers: [5,6],
            reqs: [23],
			}, 
            {
			id: 6,
			name: 'c7',
			type: 'deploy',
			position: 'right',
            stars: [
               '1 Star: 582,632,425',
               '2 Stars: 1,059,331,682',
               '3 Stars: 1,246,272,567',
               '3 Stars after maximum preload: 663,640,142 ',
            ]
			}, 
			{id: 30, name: 'm2', type: 'platoon', position: 'right',preqs:["Characters: Relic 9","Ships: 7-Star"], requiredToons: [0], platzones: [0]}
		],
		selectedMission: '',
		seen: false,
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},	
        hide: function() {
			    this.seen = false;
		}
	},
})


let app = new Vue({
	el: '#app',
	data: {
		isVisible: false
	},
});
