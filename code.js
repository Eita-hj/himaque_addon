(function () {
  const version = "1.0.0";
  const c = _0x5952cb;
  layercount++;
  if (globalThis.addonVersion !== version) {
    $("#layerroot").append(
      `<div class='layer' id='layer${layercount}'><h2 class='sourcespace'>${
        globalThis.addonVersion ? "更新" : "起動"
      }しました。</h2><button class='layerclosebtn' onclick='myremove(this.parentNode)'>×</button> </div>`
    );
    globalThis.addonVersion = version;
  } else {
    return $("#layerroot").append(
      `<div class='layer' id='layer${layercount}'><h2 class='sourcespace'>すでに起動済です。</h2><button class='layerclosebtn' onclick='myremove(this.parentNode)'>×</button> </div>`
    );
  }
  globalThis.addon_working = true;
  _0x4a0a()[563] =
    "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t\t<div class='uegamen'>\t \t \t<div style='position:absolute;top:10%;bottom:3%;left:5%;right:5%;background-color:#FFFFFF;overflow:hidden;'>\t\t \t \t<div class='myroom_supportdiv'>\t\t \t \t\t<div style='font-size:11px'>SUPPORT CHARACTOR</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(1)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(2)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(3)'>×</div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<div id='supportpetdiv1' class='supportpetdiv'>取得中</div>\t\t \t \t\t<div id='supportpetdiv2' class='supportpetdiv'></div>\t\t \t \t\t<div id='supportpetdiv3' class='supportpetdiv'></div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<button onclick='SupportPetChange(1)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(2)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(3)' class='supportchengebtn'>変更</button>\t\t \t \t</div>\t\t \t \t<div style='clear:both'>[<small>友P</small> <b class='astyle' id='tomop' onclick='SupportLogMore()'>?</b>/<small>1000</small>]</div>\t \t \t\t<div id='supportscorespace'>取得中...</div>\t \t \t</div>\t \t \t<div class='scenetitle'>自分の家</div>\t \t</div> \t\t<div class='sitagamen' style='background-color:transparent'> \t\t\t<button onclick='PetStatusEntry()' class='halfbtn'>ステータス (extend)</button> \t\t\t<button onclick='ItemWindow()' class='halfbtn'>アイテムBOX</button> \t\t\t<button onclick='SceneCharactorChange()' class='halfbtn'>キャラクター変更</button> \t\t\t<button onclick='KozinZyouhou();' class='halfbtn'>個人情報</button> \t\t\t<button onclick='SceneTown()' class='exitbtn'>帰る</button> \t\t</div>";
  globalThis.ScenePetStatus = () => {
    $(".scene").hide();
    const d =
      "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t <div class='uegamen'> \t \t<div class='hanyoudiv' style='background-color:#FAFAFA;'>\t \t \t<div class='petstatus_imgdiv'>\t\t\t\t<div class='objimgbasediv'>\t\t\t\t\t<img src='' id='petstatus_buguimg' class='objectimg' />\t\t\t\t\t<img src='' id='petstatus_objimg' class='objectimg' />\t\t\t\t</div>\t\t\t</div> \t\t\t<div style='text-align:center'> \t\t\t\t<span id='petstatus_name'></span>　 \t\t\t\t<small>lv</small><span id='petstatus_lv'></span> \t\t\t</div> \t\t\t<div style='margin-left:8%'>\t \t\t\tHP　<span id='petstatus_hp'></span><br/> \t\t\t\t<span style='display:none'>SP　<span id='petstatus_sp'></span></span><br/> \t\t\t\tPOW　<span id='petstatus_pow'></span><br/> \t\t\t\tDEF　<span id='petstatus_def'></span><br/> \t\t\t\tTEC　<span id='petstatus_tec'></span><br/> \t\t\t</div> \t\t\t<div style='font-size:10px;color:#AAAAAA;margin:20px 10px 0px 0px;text-align:right;'>※表記がおかしい場合、装備品を変更してください</div> \t\t</div> \t </div> \t <div class='sitagamen'> \t \t\t<div style='text-align:center'> \t \t\t\tステータスを割り振ります<br /> \t \t\t\tボーナスポイント　<span id='petstatus_bonuspoint'></span> \t \t\t</div> \t \t\t<div style='margin-left:15%'>\t \t\t\tPOW　<span id='petstatus_userpow'></span>+<span id='petstatus_bonuspow'></span><button onclick='PointAddPow(1)'>+1</button><button onclick='PointAddPow(10)'>+10</button><button onclick='PointAddPow(100)'>+100</button> <button onclick='PointAddPow(nokoripoint)'>All</button> <button onclick='PointSubPow()'>R</button><br/> \t\t\t\tDEF　<span id='petstatus_userdef'></span>+<span id='petstatus_bonusdef'></span><button onclick='PointAddDef(1)'>+1</button><button onclick='PointAddDef(10)'>+10</button><button onclick='PointAddDef(100)'>+100</button> <button onclick='PointAddDef(nokoripoint)'>All</button> <button onclick='PointSubDef()'>R</button><br/> \t\t\t\tTEC　<span id='petstatus_usertec'></span>+<span id='petstatus_bonustec'></span><button onclick='PointAddTec(1)'>+1</button><button onclick='PointAddTec(10)'>+10</button><button onclick='PointAddTec(100)'>+100</button> <button onclick='PointAddTec(nokoripoint)'>All</button> <button onclick='PointSubTec()'>R</button><br/> \t\t\t\t<button onclick='SendUserPoint()'>保存！</button> \t\t\t\t<br><span style='color:#FF0000'>やりなおしの種 <span id='petstatus_yarinaosi'></span>個</span> \t\t\t\t<button onclick='PetStatusReset()'>ステータス再振り</button> \t\t\t</div> \t\t\t<button onclick='MyHouseEntry()' class='exitbtn'>戻る</button> \t </div>";
    $("#scene").html(d);
    document.getElementById("scene").style.display = "block";
  };
  globalThis.SceneOptionKaizyo = (element) => {
    $(".scene").hide();
    $("#scene").html(
      `<img src='picts/scene_koubou.png' class='scenehaikeiimg' /> 	 <div class='onegamen'> 	  	<div class='hanyoudiv' style='background-color:#FFFFFF'>	 		武具に付いているオプションを除去します<br/><div style='font-size:14px'>所持金${now_gold}gold</div><button onclick='ItemWindowOPKaizyo()'>アイテムを選択</button>			<div id='opkaizyo_source'></div>			<button onclick='SceneKoubou()' class='exitbtn'>戻る</button>		</div> 	 </div>`
    );
    document.getElementById("scene").style.display = "block";
  };
  globalThis.SceneUtinaosi = (element) => {
    $(".scene").hide();
    $("#scene").html(
      `<img src='picts/scene_koubou.png' class='scenehaikeiimg' /> 	 <div class='onegamen'> 		<div class='hanyoudiv' style='background-color:#FFFFFF'> 			<div>武具の強化をやり直します(費用 10万Gold)</div><div style='font-size:14px'>所持金${now_gold}gold</div><button onclick='ItemWindowUtinaosi()'>アイテムを選択</button>	 		<div id='utinaosi_name'>選択してください</div>	 		<span id='utinaosi_itemid' style='display:none'></span>	 		<div id='utinaosi_source' style='line-height:24px'></div>			<button onclick='SceneKoubou()' class='exitbtn'>戻る</button>		</div>	 </div>`
    );
    document.getElementById("scene").style.display = "block";
  };
  globalThis.SceneGousei = (element) => {
    $(".scene").hide();
    $("#scene").html(
      `<img src='picts/scene_koubou.png' class='scenehaikeiimg' /> 		<div class='uegamen'> 		 <div class='hanyoudiv' style='background-color:#FFFFFF'> 			合成できます 			<div style='font-size:14px'>所持金${now_gold}gold</div><div id='gousei1div'><span class='minisys'>ベース</span> 				<span id='gousei1name'></span> 				<span id='gousei1itemid' style='display:none'></span> 			</div> 			<div id='gousei2div'><span class='minisys'>素材</span> 				<span id='gousei2name'></span> 				<span id='gousei2itemid' style='display:none'></span> 			</div> 			<div style='margin-top:40px;font-size:10px;'> 				<p>オプションの最大LVは５(護石は４)です。</p> 				<p>同じオプションが同じスロット位置で重なるとランクアップします。</p> 			</div> 		 </div> 		</div> 		<div class='sitagamen'> 			<button onclick='ItemWindowGousei()'>合成アイテムを選択</button> 			<button onclick='GouseiSuru()'>合成する</button> 			<button onclick='SceneKoubou()' class='exitbtn'>戻る</button> 		</div>`
    );
    document.getElementById("scene").style.display = "block";
  };
  globalThis.WeaponKazi = (element) => {
    $("#itemwindow").remove();
    const e = $(element).closest(".weaponul");
    const itemid = Number(e.find(".data_itemid").text());
    $("#kazi_itemid").text(itemid);
    $("#kazi_name").html(e.find(".weaponul_name:first").clone());
    $("#kazi_source").text("取得中...");
    $.ajax({
      type: "POST",
      url: "item_KaziSelect.php",
      data: {
        marumie: SID,
        seskey: SKEY,
        itemid,
      },
      success: function (d) {
        if (d.error != 0x1) return alert("サーバエラ-7214"), 0x0;
        $("#kazi_source").html(d.source);
        const s = document.getElementsByClassName("kazidiv1")[0];
        const t = s.innerHTML;
        globalThis["kaji_weaponData"] = {
          start: {
            pow: Number(t.split("+")[1].split("　")[0]),
            def: Number(t.split("+")[3].split("　")[0]),
            tec: Number(t.split("+")[5].split("　")[0]),
          },
          default: {
            pow: Number(t.split("+")[0].split("　")[1]),
            def: Number(t.split("+")[2].split("　")[1]),
            tec: Number(t.split("+")[4].split("　")[1]),
          },
          kaji: {
            pow: 0,
            def: 0,
            tec: 0,
            get sum() {
              return this.pow + this.def + this.tec;
            },
          },
          get kaji_amari() {
            return (
              99 -
              (this.start.pow +
                this.start.def +
                this.start.tec +
                this.kaji.pow +
                this.kaji.def +
                this.kaji.tec)
            );
          },
          m: "",
        };
        s.getElementsByTagName(
          "div"
        )[0].innerHTML = `pow ${kaji_weaponData.default.pow}+${kaji_weaponData.start.pow} <button onclick="KaziAdd('r', 'pow')">R</button><button onclick="KaziAdd(-10, 'pow')">-10</button><button onclick="KaziAdd(-1, 'pow')">-1</button> <span class="kazi_addpow">0</span> <button onclick="KaziAdd(1, 'pow')">+1</button><button onclick="KaziAdd(10, 'pow')">+10</button><button onclick="KaziAdd('m', 'pow')">MAX</button>`;
        s.getElementsByTagName(
          "div"
        )[1].innerHTML = `def ${kaji_weaponData.default.def}+${kaji_weaponData.start.def} <button onclick="KaziAdd('r', 'def')">R</button><button onclick="KaziAdd(-10, 'def')">-10</button><button onclick="KaziAdd(-1, 'def')">-1</button> <span class="kazi_adddef">0</span> <button onclick="KaziAdd(1, 'def')">+1</button><button onclick="KaziAdd(10, 'def')">+10</button><button onclick="KaziAdd('m', 'def')">MAX</button>`;
        s.getElementsByTagName(
          "div"
        )[2].innerHTML = `tec ${kaji_weaponData.default.tec}+${kaji_weaponData.start.tec} <button onclick="KaziAdd('r', 'tec')">R</button><button onclick="KaziAdd(-10, 'tec')">-10</button><button onclick="KaziAdd(-1, 'tec')">-1</button> <span class="kazi_addtec">0</span> <button onclick="KaziAdd(1, 'tec')">+1</button><button onclick="KaziAdd(10, 'tec')">+10</button><button onclick="KaziAdd('m', 'tec')">MAX</button>`;
      },
      error: function () {
        alert("なにかしらの不具合7214");
      },
    });
  };
  globalThis.KaziAddZero = () => {
    KaziAdd("r", "pow");
    KaziAdd("r", "def");
    KaziAdd("r", "tec");
  };
  globalThis.KaziAdd = (count, type) => {
    const cn = `.kazi_add${type}:eq(0)`;
    if (count === "m") {
      if (kaji_weaponData.m === type) {
        kaji_weaponData.kaji[type] += kaji_weaponData.kaji_amari;
        $(cn).text(kaji_weaponData.kaji[type]);
        $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
        $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
        $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
      } else {
        kaji_weaponData.m = type;
        $.ajax({
          type: "POST",
          url: "item_GoldsUpdate.php",
          data: {
            marumie: SID,
            seskey: SKEY,
          },
          success: (r) => {
            if (r.error != 1) {
              return alert("サーバエラ-5001");
            }
            now_gold = r.gold;
            now_sizai = r.sizai;
            $("#kazi_gold").text(r.gold);
            $("#kazi_sizai").text(r.sizai);
            const able1 = Math.floor((now_gold - kaji_weaponData.kaji.sum * 50000) / 50000);
            const able2 = Math.floor((now_sizai - kaji_weaponData.kaji.sum * 300) / 300);
            const able3 = able1 > able2 ? able2 : able1;
            const able =
              able3 > kaji_weaponData.kaji_amari
                ? kaji_weaponData.kaji_amari
                : able3;
            if (kaji_weaponData.kaji_amari == 0)
              return alert("これ以上の強化は行えません");
            if (able <= 0) {
              kaji_weaponData.kaji[type] += kaji_weaponData.kaji_amari;
            } else {
              kaji_weaponData.kaji[type] = able;
            }
            $(cn).text(kaji_weaponData.kaji[type]);
            $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
            $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
            $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
          },
          error: (e) => {
            alert("なにかしらの不具合5001");
          },
        });
      }
      return;
    }
    kaji_weaponData.m = "";
    if (count === "r") {
      kaji_weaponData.kaji[type] = 0;
      $(cn).text(kaji_weaponData.kaji[type]);
      $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
      $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
      $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
      return;
    } else if (count === -10) {
      kaji_weaponData.kaji[type] =
        kaji_weaponData.kaji[type] < 10 ? 0 : kaji_weaponData.kaji[type] - 10;
      $(cn).text(kaji_weaponData.kaji[type]);
      $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
      $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
      $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
    } else if (count === -1) {
      kaji_weaponData.kaji[type] = kaji_weaponData.kaji[type]
        ? kaji_weaponData.kaji[type] - 1
        : 0;
      $(cn).text(kaji_weaponData.kaji[type]);
      $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
      $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
      $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
    } else if (count === 1) {
      if (kaji_weaponData.kaji_amari === 0)
        return alert("これ以上の強化は行えません");
      kaji_weaponData.kaji[type] += 1;
      $(cn).text(kaji_weaponData.kaji[type]);
      $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
      $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
      $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
    } else if (count === 10) {
      if (kaji_weaponData.kaji_amari === 0)
        return alert("これ以上の強化は行えません");
      kaji_weaponData.kaji[type] =
        kaji_weaponData.kaji_amari < 10
          ? kaji_weaponData.kaji[type] + kaji_weaponData.kaji_amari
          : kaji_weaponData.kaji[type] + 10;
      $(cn).text(kaji_weaponData.kaji[type]);
      $(".kazi_addsum").text(kaji_weaponData.kaji.sum);
      $(".kazi_paygold").text(kaji_weaponData.kaji.sum * 50000);
      $(".kazi_paysizai").text(kaji_weaponData.kaji.sum * 300);
    }
    return;
  };
}.call());
