import {A as k, E as m, g as w, c as y, d as h, P as S, e as d, f as g, h as A, i as v, H as L} from "./const.f8cb1b7d.js";
import {a as C, o as E, b as P, c as q} from "./report.a39aba84.js";
const l = {
    br: ["076"],
    "global-en": ["496", "616", "642", "300", "100", "203", "440", "233", "008", "499", "807", "070", "191", "705", "348", "703", "688", "004", "586", "050", "524", "144", "462", "496", "064", "626", "608"],
    tr: ["792", "031"],
    ru: ["643", "804", "860", "398", "112", "417", "795", "762", "268", "051", "498", "428"],
    ar: ["682", "784", "818", "368", "504", "012", "788", "634", "434", "512", "400", "422", "414", "048", "275", "887"],
    "zh-Hant": ["344", "158", "446"],
    id: ["360"],
    my: ["458"],
    mm: ["104"],
    es: ["660", "028", "032", "533", "044", "052", "084", "068", "070", "850", "136", "152", "170", "188", "531", "212", "214", "218", "222", "238", "254", "308", "312", "320", "328", "332", "340", "388", "474", "484", "500", "558", "591", "600", "604", "630", "652", "659", "662", "663", "666", "670", "534", "740", "780", "796", "850", "858", "862"],
    de: ["276"],
    fr: ["250"]
}
  , j = t => {
    const e = Object.keys(l);
    for (let o = 0; o < e.length; o++)
        if (l[e[o]].includes(t))
            return e[o];
    return null
}
;
(function() {
    const t = new Set;
    return Object.keys(l).forEach(o => {
        l[o].forEach(i => {
            t.add(i)
        }
        )
    }
    ),
    Array.from(t)
}
)();
async function H() {
    var t;
    try {
        const e = await k.queryMyRegion()
          , n = (m !== "prod" ? window.Cmssdk.getQuery("region") : "") || (e == null ? void 0 : e.region)
          , i = j(n);
        if (String(n) === "608" && T(),
        x(i),
        O(),
        w() === "zh" && R(),
        window.Cmssdk.isMobile() && ((t = window.Cmssdk.getSys()) == null ? void 0 : t.name) === "Android") {
            const a = document.querySelector(".hok_head");
            a == null || a.classList.add("reversebtn")
        }
        $(".hok_stbox").css("visibility", "visible")
    } catch (e) {
        p(),
        $(".hok_stbox").css("visibility", "visible")
    }
}
function x(t) {
    if (!/(\/policy\/)|(\/notification)/g.test(location.pathname) && !y())
        return h() === "global-en" && !localStorage.getItem("pre") ? p(t) : p(h())
}
function B() {
    const t = document.querySelector(".notreglster")
      , e = document.querySelector(".hd_btnbox.isreglster")
      , o = document.querySelector(".nv_dn_btns")
      , n = document.querySelector(".nv_dn_btn");
    return {
        shop_el: t,
        prereg_el: e,
        top_shop_el: o,
        top_prereg_el: n
    }
}
function c(t) {
    t && t.setAttribute("style", "display: none !important;")
}
function b(t, e="block") {
    t && t.setAttribute("style", `visibility: visible; display: ${e} !important;`)
}
function O() {
    const {shop_el: t, prereg_el: e, top_prereg_el: o, top_shop_el: n} = B();
    document.querySelectorAll(".isreglster").forEach(a => {
        c(a)
    }
    ),
    c(e),
    b(t, "flex"),
    window.Cmssdk.isMobile() || $(".hok_other_para.notreglster").show(),
    window.Cmssdk.isMobile() ? (c(o),
    b(n)) : (c(n),
    c(o))
}
function R() {
    ((window == null ? void 0 : window.isIos()) !== 1 || !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) && ($(".hok_head .hok_stbox a").each( (e, o) => {
        (e === 0 || e === 1) && $(o).hide()
    }
    ),
    $(".hok_fot .hok_stbox a").each( (e, o) => {
        (e === 0 || e === 1) && $(o).hide()
    }
    ))
}
function T() {
    const t = "https://www.facebook.com/hokofficialph"
      , e = document.querySelector(".nvlk_btn.facebook_lit");
    e == null || e.setAttribute("href", t);
    const o = document.querySelector(".hok_bot_link .facebook_icon");
    o == null || o.setAttribute("href", t);
    const n = document.querySelector(".hok_store_btnbox a");
    n == null || n.setAttribute("href", t)
}
function p(t="") {
    var e, o;
    if (m !== "dev") {
        const n = y();
        n && S[n] || (t ? location.replace(`/${t}${location.search}`) : location.replace(`/${d()}${location.search}`))
    } else
        t ? window.setLang((e = g(t.toLowerCase())) == null ? void 0 : e.toUpperCase()) : window.setLang((o = g(d())) == null ? void 0 : o.toUpperCase())
}
H();
const N = async function() {
    var f;
    const t = {
        column_name: L,
        use_all: !1,
        all_label_name: "ALL",
        manager_type: "page",
        perpage: 10,
        content_class: 1
    }
      , e = await A.getNewsManager(t);
    if (!e)
        return;
    await (e == null ? void 0 : e.setPage(0));
    let o;
    v() ? o = e.news_list : o = (f = e.news_list) == null ? void 0 : f.filter(s => {
        var r, u;
        return !(((u = (r = s == null ? void 0 : s.jump_link_info) == null ? void 0 : r.jump_url) == null ? void 0 : u.indexOf("experience.html")) > -1)
    }
    );
    const n = ".hok_nav .hd_nv_list";
    let i = "";
    o.forEach(s => {
        var r;
        i += `<li><a href="${(r = s == null ? void 0 : s.jump_link_info) == null ? void 0 : r.jump_url}" target="_blank"><span>${s.title}</span></a></li>`
    }
    ),
    $(n).append(i);
    const a = ".hov_m_morebox .hd_nv_list";
    let _ = "";
    o.forEach(s => {
        var r;
        _ += `
      <li><a href="${(r = s == null ? void 0 : s.jump_link_info) == null ? void 0 : r.jump_url}" target="_blank"><span>${s.title}</span></a></li>`
    }
    ),
    $(a).append(_)
};
N();
C();
E();
P();
q();
