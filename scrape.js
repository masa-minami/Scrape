const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {//関数の定義
    const res = await fetch('https://www.ahb.jpn.com/dogs?kindCode=100039');//テキスト化
    const html = await res.text();//テキスト化されたものをdomにおとす
    const dom = new JSDOM(html);
    const document = dom.window.document;//ここから上は変えない
    const nodes = document.querySelectorAll('div:nth-child(1) div');//nodesの中に9番目のchildがはいってる
    const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());
    console.log(tokyoWeathers);
  };
  scrape();