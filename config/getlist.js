const list = [
  ['noriben', 'noriben327', 'NORIBEN LUNCH<br/>-のりべん専門店-','https://noriben.booth.pm/'],
  ['リノールの', 'F_Linoal', 'リノールのどうぶつ雑貨店','https://linoal.booth.pm/'],
  ['amanek', 'amanek_', 'amanek store','https://amanekun.booth.pm/'],
  ['れみーと', 'remiiiiiiit', 'remiit-workshop','https://remiit-workshop.booth.pm/'],
  ['坪倉輝明', 'kohack_v', 'TsubokuLab','https://tsubokulab.booth.pm/'],
  ['えびてふ', 'ebtf_', 'ebtfworks','https://ebtf.booth.pm'],
  ['ミッコちゃん', 'mikkohietala', 'ミッコちゃんのおみせ "Mikon Kauppa"','https://mikkohietala.booth.pm/'],
  ['菫青セラ', 'hekiru_celaeno', 'Cosmic　Kitty','https://serasera.booth.pm/'],
  ['かでん', '2_sac', 'SPORADIC-E','https://sporadic-e.booth.pm/items/2138399'],
  ['椛 琉那', 'Luna_Momizi', '楓の悠々亭','https://luna-momizi.booth.pm/'],
  ['みきしぃ', '3405691582', 'うさみみ雑貨店','https://usamimi-zakka.booth.pm/'],
  ['Musha', 'Musha_JP', 'Studiometricks','https://studiometricks.booth.pm/'],
  ['momoma', 'momoma_creative', 'virtual-boys','https://virtual-boys.booth.pm/'],
  ['Asterior', 'on_asti', 'Asterior','https://asterior.booth.pm/'],
  ['研究員ケミカル', 'chemical_15_VR', 'chemical\'s shop','https://chemical15.booth.pm/'],
  ['まおー', 'tonomaoo', '三丁目の魔界','https://tonomaoo.booth.pm/'],
  ['おにちくTRAIN', 'onitikuTRAIN', 'おにちくBar','https://onitikutrain.booth.pm/'],
  ['Karasuma-Kuro', 'Karasu_ma_Kuro', 'カラスの巣箱','https://karasuma-kuro.booth.pm/'],
  ['pao_ran', 'paon_line', '明鏡翡翠','https://paoran.booth.pm/items/1804637'],
  ['てすら', 'tesla_0123', 'てすらのデザイン研究所','https://tesla-shop.booth.pm/'],
  ['空風ふうた', 'sorakazehuuta', '空餡','https://kuanvrchat.booth.pm/'],
  ['カイム', 'plus515', '白桜亭','https://caimvoxels.booth.pm/'],
  ['こくりこ', 'Coquelicots_WoT', 'Coquelicotz_Shelf','https://www.v-market.work/ec/shops/29/detail/'],
  ['鷹乃みかん', 'MikanTakano', 'みかんカンパニー','https://mikangumi.booth.pm/'],
  ['Junk food', 'Junkfood_CoLeo', 'Junk food','https://junkfoodv.booth.pm/'],
  ['JOE_JANOME', 'Joe_Janome', '電脳喫茶じゃのめ','https://cybercafejanome.booth.pm/'],
  ['ヒバ', 'hibatuija93', 'ひばちゃ工房','https://hibatuija.booth.pm/'],
  ['蒼密', 'Aomitsu_vrc', 'BlueDense','https://bluedense.booth.pm/'],
  ['ペケポン', 'peke4444', 'ペケポンが土日を潰して作ったモノ','https://pekepon35.booth.pm/'],
  ['みゃおん', 'blackcatyuma', 'みゃおん','https://blackcatmyaon.booth.pm/'],
  ['さにぃ', 'sunnyf6789', '木漏れ日の小物屋','https://sunnyf.booth.pm/'],
  ['盃ないぎ', 'Sakazuki_naigi', '盃市/ふるさと民芸店','https://sakazuki.booth.pm/'],
  ['ヤギハタ', 'Yagihata4x', '電子烏の出張展覧場','https://yagihata.booth.pm/'],
  ['wahekui', 'wahekui_1', '時計「仮想社Controller」','https://booth.pm/ja/items/2398113'],
  ['Vacss the Tire', 'vacss2', 'vacssのモデル置き場','https://vacss.booth.pm/'],
  ['雨鮭', 'amesake_san', '雨鮭製作','https://amesake.booth.pm/'],
  ['るら', 'Lu_Ra_999', '仮想狐のデザイン工房','https://lura.booth.pm/'],
  ['狐ン', 'kon_acc', 'お狐工房','https://kon001.booth.pm/'],
  ['もくし', 'nekotokageee', 'もくしのお店','https://mokushii.booth.pm/'],
  ['かべ', 'wallL3D', 'wallL製作所','https://ahatoha.booth.pm/'],
  ['ベッラパスタ', 'VR_pasta', 'ベッラパスタ','https://metamovr.booth.pm/'],
  ['MICHIGARI', 'MichigariArch', 'MICHIGARI','https://michigari.booth.pm/items/2370029'],
  ['ダイゴ', 'daigo_h3', 'てのひら屋','https://palmo.booth.pm/'],
  ['コンソメ', 'konsome_vrc', 'コンソメパンチ','https://booth.pm/ja/items/1433737'],
  ['ネタおじ', 'DarakeruZer0', 'ネタおじ商店','https://lunaticgrininds.booth.pm/'],
  ['akimin', 'AKImin011', '秋霖製作所','https://akimin.booth.pm/'],
  ['kanonji', 'kanonji', '第十三情報遺産格納庫','https://kanonji.booth.pm/'],
  ['さばみりん', 'sabamirin_mof', 'ふわも工房','https://sabamirin.booth.pm'],
  ['DEMITASS-KUN', 'Demitass_p', 'demitass store','https://demitass.booth.pm/'],
  ['anagot', 'anagot', '穴子電子商会','https://anagot.booth.pm/'],
  ['あすか', 'Asuka_ukon', 'あすかの雑貨屋さん','https://asukappo.booth.pm/'],
  ['ぽぽやま', 'popo_para', 'ぽぽぱら','https://popo-para.booth.pm/'],
  ['lag-lag-lag-01', 'lag_vrchat', 'うぐいす堂','https://booth.pm/ja/items/1433737'],
  ['お休みさん', '0yasum13', 'お休みさん','https://oyasumisan.booth.pm/'],
  ['chimaki', 'ha_ru_u', 'ちま屋','https://chimaya.booth.pm/'],
  ['dokkoi', 'DYokkoi', 'こたつ本舗','https://dyokkoi.booth.pm/'],
  ['えくれあ', 'EClareChan', 'えくれあ屋','https://eclare.booth.pm/'],
  ['Ichika H. Poqou', 'rotten_apples__', '一夏庵','https://hpoqou.booth.pm/'],
  ['kelupu', 'kelupu', 'けるぷのもり','https://kelupu.booth.pm/'],
];

list.forEach(user => {
  console.log(`
  <div class="exhibitor">
    <div class="exhibitor-icon i-${user[1]}"></div>
    <a class="exhibitor-name-area" href="https://twitter.com/${user[1]}" target="_blank" rel="noopener noreferrer">
      <p class="exhibitor-shop-name${user[2].length < 9 ? '':' small'}">${user[2]}</p>
      <p class="exhibitor-name">${user[0]}</p>
      <p class="exhibitor-twitter-id">@${user[1]}</p>
    </a>
    <a class="exhibitor-shop" href="${user[3]}" target="_blank" rel="noopener noreferrer"></a>
  </div>`);
});

