(function () {
  "use strict";

  var S = window.SITE, $ = function (id) { return document.getElementById(id); };

  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function externo(url) { return /^https?:\/\//.test(url); }
  function link(rotulo, url, classe) {
    var ext = externo(url) ? ' target="_blank" rel="noopener"' : "";
    return '<a' + (classe ? ' class="' + classe + '"' : "") + ' href="' + esc(url) + '"' + ext + ">" + esc(rotulo) + "</a>";
  }
  function mesAno(iso) {
    var m = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    var p = String(iso).split("-");
    return p.length === 2 ? m[parseInt(p[1], 10) - 1] + " " + p[0] : iso;
  }

  /* ---------- Cabeçalho, hero e contato ---------- */
  $("site-nome").textContent = S.nome;
  $("site-papel").textContent = S.papel;
  $("hero-texto").textContent = S.apresentacao;
  $("ano").textContent = new Date().getFullYear();

  var contatos = [link("LinkedIn", S.linkedin), link("GitHub", S.github)];
  $("contato-lateral").innerHTML = contatos.map(function (c) { return "<li>" + c + "</li>"; }).join("");
  $("colab-email").href = S.linkedin;
  $("colab-email").target = "_blank"; $("colab-email").rel = "noopener";
  $("colab-gh").href = S.github;
  $("colab-gh").target = "_blank"; $("colab-gh").rel = "noopener";

  /* ---------- Projetos ---------- */
  var projetos = window.PROJETOS || [];
  $("lista-projetos").innerHTML = projetos.map(function (p, i) {
    var vazio = !p.resumo || /em prepara/i.test(p.resumo);
    var acoes = [];
    if (p.detalhes && p.detalhes.length) acoes.push('<button class="botao botao-sec" type="button" data-detalhe="' + i + '">Ver detalhes</button>');
    (p.links || []).forEach(function (l) { acoes.push(link(l.rotulo, l.url)); });
    return '<article class="projeto" id="proj-' + esc(p.id) + '">' +
      '<div class="projeto-topo"><h3>' + esc(p.titulo) + '</h3>' +
      '<span class="estado" data-estado="' + esc(p.estado) + '">' + esc(p.estado) + "</span></div>" +
      '<p class="projeto-resumo' + (vazio ? " vazio" : "") + '">' + esc(p.resumo) + "</p>" +
      (p.tags && p.tags.length ? '<p class="tags">' + p.tags.map(esc).join(", ") + "</p>" : "") +
      (acoes.length ? '<div class="acoes">' + acoes.join("") + "</div>" : "") +
      "</article>";
  }).join("");

  /* ---------- Laboratório ---------- */
  var lab = window.LAB || [];
  $("lista-lab").innerHTML = lab.length ? lab.map(function (e) {
    return "<li><time datetime='" + esc(e.data) + "'>" + esc(mesAno(e.data)) + "</time><div>" +
      "<h3>" + (e.url ? link(e.titulo, e.url) : esc(e.titulo)) + "</h3>" +
      "<p>" + esc(e.resumo) + "</p>" +
      (e.tags && e.tags.length ? '<p class="tags">' + e.tags.map(esc).join(", ") + "</p>" : "") +
      "</div></li>";
  }).join("") : "<li style=\"grid-template-columns:1fr\"><div><h3>Nada por aqui ainda</h3><p>O primeiro experimento entra editando assets/data.js.</p></div></li>";

  /* ---------- Publicações ---------- */
  $("lista-pub").innerHTML = (window.PUBLICACOES || []).map(function (b) {
    var acao = b.arquivo
      ? link("Baixar PDF", b.arquivo, "botao botao-sec")
      : '<span class="em-breve">Em preparação</span>';
    return '<article class="livro"><div class="capa" style="--cor:' + esc(b.cor || "#17686B") + '" aria-hidden="true">' +
      '<span class="capa-titulo">' + esc(b.titulo) + '</span><span class="capa-sub">' + esc(b.subtitulo || "") + "</span></div>" +
      "<h3>" + esc(b.titulo) + "</h3>" +
      '<p class="formato">' + esc(b.formato || "") + "</p>" +
      '<p class="resumo">' + esc(b.resumo) + "</p>" +
      "<div>" + acao + "</div></article>";
  }).join("");

  /* ---------- Ideias ---------- */
  $("colab-texto").textContent = window.COLABORACAO || "";
  $("lista-ideias").innerHTML = (window.IDEIAS || []).map(function (i) {
    return "<li><h3>" + esc(i.titulo) + "</h3><p>" + esc(i.texto) + "</p>" +
      '<span class="estado" data-estado="' + esc(i.estado) + '">' + esc(i.estado) + "</span></li>";
  }).join("");

  /* ---------- Currículo ---------- */
  var cv = window.CURRICULO || {};
  $("cv-resumo").textContent = cv.resumo || "";
  $("cv-experiencia").innerHTML = (cv.experiencia || []).map(function (x) {
    return "<li><time>" + esc(x.periodo) + '</time><div class="corpo"><h3>' + esc(x.cargo) + "</h3>" +
      (x.onde ? '<p class="onde">' + esc(x.onde) + "</p>" : "") + "<p>" + esc(x.texto) + "</p></div></li>";
  }).join("");
  $("cv-competencias").innerHTML = (cv.competencias || []).map(function (g) {
    return "<div><dt>" + esc(g.grupo) + "</dt><dd>" + g.itens.map(esc).join(", ") + "</dd></div>";
  }).join("");
  $("cv-formacao").innerHTML = (cv.formacao || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");

  /* ---------- Diálogo de detalhes ---------- */
  var dlg = $("detalhe");
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-detalhe]");
    if (b) {
      var p = projetos[parseInt(b.getAttribute("data-detalhe"), 10)];
      $("detalhe-titulo").textContent = p.titulo;
      $("detalhe-corpo").innerHTML = p.detalhes.map(function (d) {
        return "<h4>" + esc(d.titulo) + "</h4><p>" + esc(d.texto) + "</p>";
      }).join("");
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      return;
    }
    if (ev.target === dlg) dlg.close(); // clique fora fecha
  });

  /* ---------- Item ativo do menu ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".menu a"));
  var alvos = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.removeAttribute("aria-current");
          if (a.getAttribute("href") === "#" + e.target.id) a.setAttribute("aria-current", "true");
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    alvos.forEach(function (s) { if (s) io.observe(s); });
  }
})();
