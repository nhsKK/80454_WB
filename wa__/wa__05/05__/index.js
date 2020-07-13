/**
 * リアルタイムに実行する個別のバリデート処理
 * @param {HTMLElement} self 
 */
function validate (self) {
  try {
    // ① self.previousElementSiblingを使って兄要素にアクセスして、labelのテキストを取得する
    var self__prev = $(self).prev('label').text();

    if (!self.value) {
      // ② 未入力エラーを投げる
      // * inputタグの場合、「〇〇を入力してください」。selectタグの場合、「〇〇を選択してください」
      // * self.tagNameでタグ名を取得できます。

	const tag = self.tagName;

	if( tag === 'INPUT' ){
		throw new Error(self__prev + 'を入力してください');
	}else {
		throw new Error('出身地を選択してください');
	}

    }

    // ③ self.nextElementSiblingを使って弟要素にアクセスして、pタグのテキストを空文字で上書きする
    $(self).next("p").text("");
  } catch (err) {
    // ④ self.nextElementSiblingを使って弟要素にアクセスして、pタグのテキストをエラーメッセージで上書きする
    $(self).next("p").text(err.message);
  }
};

/**
 * 確認ボタン押下時に実行するフォーム全体のバリデート処理
 */
function validateAll () {
  // ⑤ document.querySelectorAll('input, select')で全てのinput, selectタグのリストを取得する
  //var all__ = $('input, select');
  // ⑥ 取得したリストの長さ分、for文で繰り返してvalidate()関数を実行する
  // * inputのtypeがbuttonの場合、validate()関数を実行しない様にする

    //var element = document.querySelectorAll('input, select');
    var vals = $('input, select');

    for(var i of vals){
	
	var i__t = $(i).attr('type');

	if(i__t != "button"){

	validate(i);

	}	
    }

};


/**
 * 都道府県のセレクトボックスにoptionを登録する処理
 */
(function () {
  const prefList = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
  ];

  const fragment = document.createDocumentFragment();

  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.innerHTML = "都道府県を選択";

  fragment.appendChild(emptyOption);

  for (const pref of prefList) {
    const option = document.createElement("option");

    option.value = pref;
    option.innerHTML = pref;

    fragment.appendChild(option);
  };

  const selectBox = document.getElementsByName("pref")[0];
  selectBox.appendChild(fragment);
})();