(function startAddon() {
	const c = _0x5952cb;
	layercount++;
	if (globalThis["addon_working"]) {
		return $("#layerroot").append(`<div class='layer' id='layer${layercount}'><h2 class='sourcespace'>すでに起動済です。</h2><button class='layerclosebtn' onclick='myremove(this.parentNode)'>×</button> </div>`);
	};
	$("#layerroot").append(`<div class='layer' id='layer${layercount}'><h2 class='sourcespace'>起動しました。</h2><button class='layerclosebtn' onclick='myremove(this.parentNode)'>×</button> </div>`);
	globalThis["addon_working"] = true;
	_0x4a0a()[563] = "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t\t<div class='uegamen'>\t \t \t<div style='position:absolute;top:10%;bottom:3%;left:5%;right:5%;background-color:#FFFFFF;overflow:hidden;'>\t\t \t \t<div class='myroom_supportdiv'>\t\t \t \t\t<div style='font-size:11px'>SUPPORT CHARACTOR</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(1)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(2)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(3)'>×</div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<div id='supportpetdiv1' class='supportpetdiv'>取得中</div>\t\t \t \t\t<div id='supportpetdiv2' class='supportpetdiv'></div>\t\t \t \t\t<div id='supportpetdiv3' class='supportpetdiv'></div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<button onclick='SupportPetChange(1)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(2)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(3)' class='supportchengebtn'>変更</button>\t\t \t \t</div>\t\t \t \t<div style='clear:both'>[<small>友P</small> <b class='astyle' id='tomop' onclick='SupportLogMore()'>?</b>/<small>1000</small>]</div>\t \t \t\t<div id='supportscorespace'>取得中...</div>\t \t \t</div>\t \t \t<div class='scenetitle'>自分の家</div>\t \t</div> \t\t<div class='sitagamen' style='background-color:transparent'> \t\t\t<button onclick='PetStatusEntry()' class='halfbtn'>ステータス (extend)</button> \t\t\t<button onclick='ItemWindow()' class='halfbtn'>アイテムBOX</button> \t\t\t<button onclick='SceneCharactorChange()' class='halfbtn'>キャラクター変更</button> \t\t\t<button onclick='KozinZyouhou();' class='halfbtn'>個人情報</button> \t\t\t<button onclick='SceneTown()' class='exitbtn'>帰る</button> \t\t</div>";
	globalThis.ScenePetStatus = () => {
		$(".scene").hide();
		const d = "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t <div class='uegamen'> \t \t<div class='hanyoudiv' style='background-color:#FAFAFA;'>\t \t \t<div class='petstatus_imgdiv'>\t\t\t\t<div class='objimgbasediv'>\t\t\t\t\t<img src='' id='petstatus_buguimg' class='objectimg' />\t\t\t\t\t<img src='' id='petstatus_objimg' class='objectimg' />\t\t\t\t</div>\t\t\t</div> \t\t\t<div style='text-align:center'> \t\t\t\t<span id='petstatus_name'></span>　 \t\t\t\t<small>lv</small><span id='petstatus_lv'></span> \t\t\t</div> \t\t\t<div style='margin-left:8%'>\t \t\t\tHP　<span id='petstatus_hp'></span><br/> \t\t\t\t<span style='display:none'>SP　<span id='petstatus_sp'></span></span><br/> \t\t\t\tPOW　<span id='petstatus_pow'></span><br/> \t\t\t\tDEF　<span id='petstatus_def'></span><br/> \t\t\t\tTEC　<span id='petstatus_tec'></span><br/> \t\t\t</div> \t\t\t<div style='font-size:10px;color:#AAAAAA;margin:20px 10px 0px 0px;text-align:right;'>※表記がおかしい場合、装備品を変更してください</div> \t\t</div> \t </div> \t <div class='sitagamen'> \t \t\t<div style='text-align:center'> \t \t\t\tステータスを割り振ります<br /> \t \t\t\tボーナスポイント　<span id='petstatus_bonuspoint'></span> \t \t\t</div> \t \t\t<div style='margin-left:15%'>\t \t\t\tPOW　<span id='petstatus_userpow'></span>+<span id='petstatus_bonuspow'></span><button onclick='PointAddPow(1)'>+1</button><button onclick='PointAddPow(10)'>+10</button><button onclick='PointAddPow(100)'>+100</button> <button onclick='PointAddPow(nokoripoint)'>All</button> <button onclick='PointSubPow()'>R</button><br/> \t\t\t\tDEF　<span id='petstatus_userdef'></span>+<span id='petstatus_bonusdef'></span><button onclick='PointAddDef(1)'>+1</button><button onclick='PointAddDef(10)'>+10</button><button onclick='PointAddDef(100)'>+100</button> <button onclick='PointAddDef(nokoripoint)'>All</button> <button onclick='PointSubDef()'>R</button><br/> \t\t\t\tTEC　<span id='petstatus_usertec'></span>+<span id='petstatus_bonustec'></span><button onclick='PointAddTec(1)'>+1</button><button onclick='PointAddTec(10)'>+10</button><button onclick='PointAddTec(100)'>+100</button> <button onclick='PointAddTec(nokoripoint)'>All</button> <button onclick='PointSubTec()'>R</button><br/> \t\t\t\t<button onclick='SendUserPoint()'>保存！</button> \t\t\t\t<br><span style='color:#FF0000'>やりなおしの種 <span id='petstatus_yarinaosi'></span>個</span> \t\t\t\t<button onclick='PetStatusReset()'>ステータス再振り</button> \t\t\t</div> \t\t\t<button onclick='MyHouseEntry()' class='exitbtn'>戻る</button> \t </div>";
		$("#scene").html(d);
		document.getElementById("scene").style.display = "block";
	};
	globalThis.SceneKazi = () => {
		$(".scene").hide();
		$("#scene").html(`${c(2012)}${now_gold}${c(1521)}${now_sizai}</span>個\t \t \t</div> \t\t\t<button onclick='ItemWindowKazi()'>アイテムを選択</button> <button onclick='Kaji_Extend()'>Extend(武具選択後に使用してください)</button>\t \t\t<div id='kazi_name'>選択してください</div>\t \t\t<span id='kazi_itemid' style='display:none'></span>\t \t\t<div id='kazi_source' style='line-height:24px'></div>\t\t\t<button onclick='SceneKoubou()' class='exitbtn'>戻る</button>\t\t</div>\t </div>`);
		document.getElementById("scene").style.display = "block";
	};
	globalThis.WeaponKazi = (element) => {
		$("#itemwindow").remove()
		const e = $(element).closest(".weaponul")
		const itemid = Number(e.find(".data_itemid").text)
		document.getElementById("kazi_itemid").textContent = id
		$("#kazi_name").html(e.find(".weaponul_name:first").clone())
		document.getElementById("kazi_source").textContent = "取得中..."
		$['ajax']({
			"type": "POST",
			"url": "item_KaziSelect.php",
			"data": {
				"marumie": SID,
				"seskey": SKEY,
				itemid
			},
			'success': function(d) {
				if (d.error != 0x1)
					return alert("サーバエラ-7214"),
					0x0;
				$("#kazi_source").html(d.source);
				document.getElementById("kazi_source")
			},
			'error': function() {
				alert("なにかしらの不具合7214");
			}
		});
	};
}).call();
