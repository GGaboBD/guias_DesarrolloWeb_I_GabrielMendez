A, B, C = "#e0432b", "#4a6fd0", "#7fae5a"   # A bermellón (朱), B índigo (藍), C matcha (抹茶)
NUM = ["一", "二", "三", "四", "五", "六", "七", "八"]

BASE = """
/* ===== LAYOUT BASE (Flexbox, responsive) ===== */
*,*::before,*::after{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;flex-direction:column;background:var(--bg);color:var(--text);font-family:var(--font);line-height:1.7}
.encabezado{position:relative;overflow:hidden;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:48px var(--pad)}
.encabezado>*{position:relative;z-index:1}
.encabezado-texto{display:flex;flex-direction:column;gap:6px}
.kanji{position:absolute!important;z-index:0!important;right:var(--pad);top:50%;transform:translateY(-50%);font-family:var(--font-head);font-size:clamp(120px,24vw,260px);line-height:1;opacity:.14;pointer-events:none;user-select:none}
.etiqueta{font-family:var(--font-jp);font-size:14px;letter-spacing:.25em;color:var(--muted)}
h1{margin:0;font-family:var(--font-head);font-weight:var(--w-head);font-size:clamp(36px,7vw,72px);line-height:1.15}
h2{margin:0;display:flex;align-items:center;gap:12px;font-family:var(--font-head);font-weight:var(--w-head);font-size:clamp(18px,3vw,22px)}
h2 .jp{font-family:var(--font-jp);font-size:1.5em;line-height:1;color:var(--accent)}
.volver{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;color:var(--text);text-decoration:none;border:1px solid var(--line);border-radius:var(--r-btn);font-size:14px;transition:.25s}
.volver:hover{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.contenedor{display:flex;flex-wrap:wrap;gap:var(--gap);width:100%;max-width:1100px;margin:0 auto;padding:0 var(--pad) 72px;flex:1}
.seccion{display:flex;flex-direction:column;gap:22px;flex:1 1 100%;padding:var(--card-pad);background:var(--surface);border:1px solid var(--line);border-radius:var(--r-card)}
.caja-enlaces{display:flex;flex-wrap:wrap;gap:12px}
.enlace{display:inline-flex;align-items:center;gap:10px;padding:12px 22px;color:var(--text);text-decoration:none;border:1px solid var(--line);border-radius:var(--r-btn);font-size:15px;transition:.25s}
.enlace:hover{background:var(--accent);border-color:var(--accent);color:var(--accent-text);transform:translateY(-2px)}
.reto .enlace{flex:1 1 180px;flex-direction:column;align-items:flex-start;gap:2px}
.reto .enlace small{font-family:var(--font-jp);font-size:11px;letter-spacing:.15em;opacity:.65}
.pie{padding:28px var(--pad);text-align:center;font-family:var(--font-jp);font-size:13px;letter-spacing:.2em;color:var(--muted)}
@media(min-width:901px){.ejercicio{flex:1 1 30%}.reto{flex:1 1 60%}}
@media(max-width:900px){:root{--pad:24px}.encabezado{padding-top:32px;padding-bottom:32px}}
@media(max-width:600px){:root{--pad:16px;--card-pad:20px}.encabezado{flex-direction:column;align-items:flex-start}.caja-enlaces{flex-direction:column}.enlace{width:100%}.contenedor{gap:16px}}
"""

T = {}
# 1 — 桜 Sakura
T[1] = (A, "桜", "@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Shippori+Mincho:wght@500;700&display=swap');",
"""--bg:#fff6f8;--surface:rgba(255,255,255,.8);--text:#4a2c35;--muted:#a37a87;--line:#f4cdd8;--accent-text:#fff;--font:'Zen Maru Gothic',sans-serif;--font-head:'Shippori Mincho',serif;--font-jp:'Zen Maru Gothic',sans-serif;--w-head:700;--r-card:28px;--r-btn:999px;--pad:48px;--gap:24px;--card-pad:32px""",
"""/* 桜 Sakura: rosa pétalo, formas suaves, círculos como pétalos */
body{background:radial-gradient(circle at 12% 18%,rgba(255,183,203,.6) 0 6px,transparent 7px),radial-gradient(circle at 82% 28%,rgba(255,183,203,.5) 0 10px,transparent 11px),radial-gradient(circle at 30% 78%,rgba(255,183,203,.5) 0 8px,transparent 9px),radial-gradient(circle at 90% 84%,rgba(255,183,203,.55) 0 5px,transparent 6px),linear-gradient(180deg,#fff6f8,#ffe3ec);background-attachment:fixed}
.kanji{color:#f48fb1;opacity:.35}
h1{color:#b23a5e}
.seccion{box-shadow:0 14px 30px -20px rgba(194,24,91,.45)}
h2 .jp{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:var(--accent);color:#fff;font-size:20px}
.enlace{background:#fff}
.enlace::before{content:"✿";color:#f48fb1}
.enlace:hover::before{color:#fff}""")
# 2 — 浮世絵 Ukiyo-e
T[2] = (B, "波", "@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Kaisei+Tokumin:wght@700&display=swap');",
"""--bg:#f1e6cf;--surface:#f8f0dd;--text:#1d2b4f;--muted:#6b6a78;--line:#1d2b4f;--accent-text:#fff;--font:'Shippori Mincho',serif;--font-head:'Kaisei Tokumin',serif;--font-jp:'Shippori Mincho',serif;--w-head:700;--r-card:4px;--r-btn:2px;--pad:48px;--gap:24px;--card-pad:30px""",
"""/* 浮世絵 Ukiyo-e: papel washi, olas seigaiha en índigo, sello rojo */
.encabezado{background-color:#1d2b4f;color:#f1e6cf;background-image:radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(241,230,207,.28) 29% 31%,transparent 32% 44%,rgba(241,230,207,.28) 45% 47%,transparent 48% 60%,rgba(241,230,207,.28) 61% 63%,transparent 64%),radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(241,230,207,.28) 29% 31%,transparent 32% 44%,rgba(241,230,207,.28) 45% 47%,transparent 48% 60%,rgba(241,230,207,.28) 61% 63%,transparent 64%);background-size:64px 32px;background-position:0 0,32px 16px;border-bottom:6px double #c9a24a;margin-bottom:40px}
.encabezado h1,.etiqueta{color:#f1e6cf}
.kanji{color:#f1e6cf;opacity:.22}
.volver{color:#f1e6cf;border-color:#f1e6cf}
.seccion{border:2px solid var(--line);outline:1px solid var(--line);outline-offset:4px}
h2 .jp{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;background:#c0392b;color:#f8f0dd;font-size:22px;border-radius:3px;transform:rotate(-4deg)}
.enlace{background:#f1e6cf}
.enlace::before{content:"◆";color:var(--accent);font-size:10px}
.enlace:hover::before{color:#fff}""")
# 3 — 禅 Zen
T[3] = (C, "禅", "@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap');",
"""--bg:#f4f1ea;--surface:transparent;--text:#2b2b2b;--muted:#8a867c;--line:#d8d3c6;--accent-text:#1d2b14;--font:'Zen Kaku Gothic New',sans-serif;--font-head:'Zen Old Mincho',serif;--font-jp:'Zen Old Mincho',serif;--w-head:400;--r-card:0;--r-btn:999px;--pad:56px;--gap:8px;--card-pad:36px 0""",
"""/* 禅 Zen: mucho espacio en blanco, círculo enso, líneas finas */
.encabezado{padding-top:72px;padding-bottom:56px}
.encabezado::after{content:"";position:absolute;right:calc(var(--pad) + 10px);top:50%;width:150px;height:150px;margin-top:-75px;border-radius:50%;border:12px solid #2b2b2b;border-right-color:transparent;transform:rotate(-30deg);opacity:.85;z-index:0}
.kanji{display:none}
h1{font-weight:400;letter-spacing:.2em}
.seccion{border:0;border-top:1px solid var(--line)}
h2{letter-spacing:.12em}
h2 .jp{color:var(--accent);font-size:1.7em;text-shadow:0 0 0 #000}
.enlace{background:transparent;border-color:var(--text);padding:10px 24px}
.enlace::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent)}
.enlace:hover::before{background:#1d2b14}
@media(max-width:600px){.encabezado::after{width:90px;height:90px;margin-top:-45px;border-width:8px;opacity:.5}}""")
# 4 — 鳥居 Torii
T[4] = (A, "鳥", "@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Yuji+Syuku&display=swap');",
"""--bg:#130808;--surface:rgba(255,255,255,.03);--text:#f6e9dc;--muted:#b49a8a;--line:rgba(201,162,74,.4);--accent-text:#fff;--font:'Shippori Mincho',serif;--font-head:'Yuji Syuku',serif;--font-jp:'Shippori Mincho',serif;--w-head:400;--r-card:2px;--r-btn:2px;--pad:48px;--gap:22px;--card-pad:30px""",
"""/* 鳥居 Torii: noche, pórtico bermellón, filo dorado */
body{background:radial-gradient(ellipse at 50% 0,#3a1010,#130808 60%)}
.encabezado{padding-top:96px}
.encabezado::before{content:"";position:absolute;top:22px;left:0;right:0;height:18px;background:var(--accent);clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);z-index:0}
.encabezado::after{content:"";position:absolute;top:54px;left:6%;right:6%;height:10px;background:var(--accent);opacity:.9;z-index:0}
.kanji{color:var(--accent);opacity:.2}
h1{color:#f6e9dc;letter-spacing:.08em}
.seccion{border-left:4px solid var(--accent)}
h2 .jp{border:1px solid var(--accent);padding:2px 8px;font-size:1.2em}
.enlace{background:rgba(224,67,43,.08);border-color:rgba(201,162,74,.4)}
.enlace::before{content:"⛩";font-size:14px}""")
# 5 — 富士 Fuji
T[5] = (B, "富", "@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Kiwi+Maru:wght@500&display=swap');",
"""--bg:#eef3fb;--surface:rgba(255,255,255,.85);--text:#1f2d55;--muted:#6b7aa0;--line:#cfdaf0;--accent-text:#fff;--font:'Zen Maru Gothic',sans-serif;--font-head:'Kiwi Maru',serif;--font-jp:'Zen Maru Gothic',sans-serif;--w-head:500;--r-card:22px;--r-btn:12px;--pad:48px;--gap:22px;--card-pad:28px""",
"""/* 富士 Fuji: cielo del amanecer, monte Fuji y sol rojo con CSS puro */
body{background:linear-gradient(180deg,#d9e6f7 0,#eef3fb 320px,#fde9e6 100%) fixed}
.encabezado{min-height:240px;padding-bottom:96px;align-content:center;justify-content:flex-start;gap:24px}
.encabezado::before{content:"";position:absolute;width:90px;height:90px;border-radius:50%;background:var(--accent-sol,#e0432b);right:34%;top:28px;opacity:.9;z-index:0}
.encabezado::after{content:"";position:absolute;right:8%;bottom:0;width:380px;height:160px;background:linear-gradient(180deg,#fff 0 30%,var(--accent) 30% 100%);clip-path:polygon(0 100%,36% 0,64% 0,100% 100%);z-index:0}
.kanji{display:none}
h1{color:#1f2d55}
.seccion{box-shadow:0 14px 30px -22px #1f2d55}
h2 .jp{background:var(--accent);color:#fff;border-radius:10px;padding:4px 10px;font-size:1.1em}
.enlace{background:#fff}
.enlace::before{content:"▲";font-size:10px;color:var(--accent)}
.enlace:hover::before{color:#fff}
@media(max-width:600px){.encabezado::after{width:240px;height:110px;right:0}.encabezado::before{width:60px;height:60px;right:50%}}""")
# 6 — 竹 Take (bambú)
T[6] = (C, "竹", "@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Hina+Mincho&display=swap');",
"""--bg:#eef2e3;--surface:rgba(255,255,255,.65);--text:#23331f;--muted:#6f8266;--line:#c4d3b4;--accent-text:#1d2b14;--font:'Zen Maru Gothic',sans-serif;--font-head:'Hina Mincho',serif;--font-jp:'Hina Mincho',serif;--w-head:400;--r-card:14px;--r-btn:999px;--pad:56px;--gap:22px;--card-pad:28px""",
"""/* 竹 Take: bambú a los lados, nudos verdes, tonos matcha */
body{background:linear-gradient(90deg,rgba(127,174,90,.45) 0 14px,transparent 14px calc(100% - 14px),rgba(127,174,90,.45) calc(100% - 14px)),repeating-linear-gradient(180deg,transparent 0 118px,rgba(60,90,40,.35) 118px 122px),#eef2e3;background-size:100% 100%,100% 100%,auto}
.kanji{color:#4f7a35;opacity:.18}
h1{color:#2f5223}
.seccion{border-left:10px solid var(--accent);border-radius:6px 14px 14px 6px}
h2 .jp{background:var(--accent);color:#1d2b14;border-radius:50%;width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;font-size:20px}
.enlace{background:#fff}
.enlace::before{content:"❙";color:var(--accent);font-weight:700}
@media(max-width:900px){:root{--pad:32px}}""")
# 7 — 墨 Sumi-e
T[7] = (A, "墨", "@import url('https://fonts.googleapis.com/css2?family=Yuji+Syuku&family=Shippori+Mincho:wght@500;700&display=swap');",
"""--bg:#f6f3ec;--surface:#fffdf8;--text:#1a1a1a;--muted:#6d6a63;--line:#1a1a1a;--accent-text:#fff;--font:'Shippori Mincho',serif;--font-head:'Yuji Syuku',serif;--font-jp:'Yuji Syuku',serif;--w-head:400;--r-card:255px 18px 225px 18px/18px 225px 18px 255px;--r-btn:8px;--pad:48px;--gap:28px;--card-pad:36px""",
"""/* 墨 Sumi-e: tinta negra sobre papel, bordes de pincel, sello hanko rojo */
body{background:radial-gradient(ellipse at 90% 0,rgba(0,0,0,.08),transparent 45%),#f6f3ec}
.kanji{color:#000;opacity:.9;right:var(--pad);font-size:clamp(110px,22vw,240px)}
.encabezado{border-bottom:3px solid #1a1a1a;margin-bottom:36px}
h1{letter-spacing:.12em}
.etiqueta{color:var(--accent);font-weight:700}
h2 .jp{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border:3px solid var(--accent);color:var(--accent);font-size:24px;border-radius:6px;transform:rotate(-6deg)}
.seccion{border:2.5px solid #1a1a1a}
.enlace{border:2px solid #1a1a1a;border-radius:6px 14px 6px 14px;background:#fff}
.enlace:hover{background:var(--accent);border-color:#1a1a1a}
.enlace::before{content:"●";color:var(--accent);font-size:10px}
.enlace:hover::before{color:#fff}
@media(max-width:600px){.seccion{border-radius:40px 10px 40px 10px/10px 40px 10px 40px}}""")
# 8 — 祭 Matsuri
T[8] = (B, "祭", "@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Zen+Maru+Gothic:wght@400;500;700&display=swap');",
"""--bg:#0c1531;--surface:rgba(255,255,255,.05);--text:#f5ecd7;--muted:#a9b3d6;--line:rgba(245,236,215,.45);--accent-text:#fff;--font:'Zen Maru Gothic',sans-serif;--font-head:'Dela Gothic One',sans-serif;--font-jp:'Dela Gothic One',sans-serif;--w-head:400;--r-card:14px;--r-btn:999px;--pad:48px;--gap:22px;--card-pad:28px""",
"""/* 祭 Matsuri: noche de festival, faroles chochin, costura de happi */
body{background-image:radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(245,236,215,.07) 29% 31%,transparent 32% 44%,rgba(245,236,215,.07) 45% 47%,transparent 48% 60%,rgba(245,236,215,.07) 61% 63%,transparent 64%),radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(245,236,215,.07) 29% 31%,transparent 32% 44%,rgba(245,236,215,.07) 45% 47%,transparent 48% 60%,rgba(245,236,215,.07) 61% 63%,transparent 64%);background-size:64px 32px;background-position:0 0,32px 16px}
.encabezado{padding-top:80px}
.encabezado::before{content:"";position:absolute;top:-6px;left:0;right:0;height:62px;background:radial-gradient(ellipse 22px 30px at 10% 50%,#ff6a3d 0 70%,transparent 72%),radial-gradient(ellipse 22px 30px at 30% 50%,#ff6a3d 0 70%,transparent 72%),radial-gradient(ellipse 22px 30px at 50% 50%,#ff6a3d 0 70%,transparent 72%),radial-gradient(ellipse 22px 30px at 70% 50%,#ff6a3d 0 70%,transparent 72%),radial-gradient(ellipse 22px 30px at 90% 50%,#ff6a3d 0 70%,transparent 72%);filter:drop-shadow(0 0 14px rgba(255,140,60,.8));z-index:0}
.kanji{color:#f5ecd7;opacity:.1}
h1{color:#ffd9a0;text-shadow:0 0 24px rgba(255,140,60,.55)}
.seccion{border:2px dashed var(--line)}
h2 .jp{color:#ffd9a0}
.enlace{background:rgba(74,111,208,.15);border-color:rgba(245,236,215,.35)}
.enlace::before{content:"◉";color:#ff9a5c;font-size:12px}
.enlace:hover::before{color:#fff}""")

PAGE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guía {n}</title>
  <link rel="stylesheet" href="estilos{n}.css">
</head>
<body>

  <!-- ENCABEZADO: cambia el título de la guía aquí -->
  <header class="encabezado">
    <span class="kanji" aria-hidden="true">{kanji}</span>
    <div class="encabezado-texto">
      <span class="etiqueta">第{num}課 · Lección {n}</span>
      <h1>Guía {n}</h1>
    </div>
    <a class="volver" href="index.html">← 戻る · Volver al inicio</a>
  </header>

  <main class="contenedor">

    <!-- ===== EJEMPLOS: copia y pega tantas líneas <a> como necesites ===== -->
    <section class="seccion ejemplos">
      <h2><span class="jp">例</span><span class="es">Ejemplos</span></h2>
      <div class="caja-enlaces">
        <a class="enlace" href="#">Ejemplo 1</a>
        <a class="enlace" href="#">Ejemplo 2</a>
        <a class="enlace" href="#">Ejemplo 3</a>
        <!-- <a class="enlace" href="#">Ejemplo 4</a> -->
      </div>
    </section>

    <!-- ===== EJERCICIO COMPLEMENTARIO: un único enlace ===== -->
    <section class="seccion ejercicio">
      <h2><span class="jp">練</span><span class="es">Ejercicio Complementario</span></h2>
      <div class="caja-enlaces">
        <a class="enlace" href="#">Ejercicio complementario</a>
      </div>
    </section>

    <!-- ===== RETO IA: main + 2 complementarios ===== -->
    <section class="seccion reto">
      <h2><span class="jp">挑</span><span class="es">Reto IA</span></h2>
      <div class="caja-enlaces">
        <a class="enlace" href="#"><small>ファイル</small>Main</a>
        <a class="enlace" href="#"><small>ファイル</small>Complementario 1</a>
        <a class="enlace" href="#"><small>ファイル</small>Complementario 2</a>
      </div>
    </section>

    <!-- ===== ENLACES ADICIONALES: YouTube u otros recursos ===== -->
    <section class="seccion adicionales">
      <h2><span class="jp">資</span><span class="es">Enlaces adicionales</span></h2>
      <div class="caja-enlaces">
        <a class="enlace" href="#" target="_blank" rel="noopener">▶ Video de YouTube</a>
        <a class="enlace" href="#" target="_blank" rel="noopener">Recurso externo</a>
      </div>
    </section>

  </main>

  <footer class="pie">頑張って · ¡Ánimo!</footer>
</body>
</html>
"""
NAMES = {1: ("桜", "Sakura", "Flor de cerezo"), 2: ("浮世絵", "Ukiyo-e", "Estampa clásica"), 3: ("禅", "Zen", "Calma y vacío"),
         4: ("鳥居", "Torii", "Pórtico del santuario"), 5: ("富士", "Fuji", "Amanecer en el monte"), 6: ("竹", "Take", "Bosque de bambú"),
         7: ("墨", "Sumi-e", "Tinta y pincel"), 8: ("祭", "Matsuri", "Noche de festival")}
for n, (acc, kanji, imp, vars_, extra) in T.items():
    css = f"/* estilos{n}.css — Guía {n}: {NAMES[n][0]} {NAMES[n][1]} */\n{imp}\n\n:root{{--accent:{acc};{vars_}}}\n{BASE}\n{extra}\n"
    open(f"estilos{n}.css", "w").write(css)
    open(f"guia{n}.html", "w").write(PAGE.replace("{n}", str(n)).replace("{num}", NUM[n - 1]).replace("{kanji}", kanji))

cards = "\n".join(
    f'    <a class="tarjeta" href="guia{n}.html" style="--c:{T[n][0]}"><span class="sello">{NAMES[n][0] if len(NAMES[n][0])<3 else NAMES[n][0][0]}</span>'
    f'<span class="texto"><span class="t1">Guía {n} · 第{NUM[n-1]}課</span><span class="t2">{NAMES[n][0]} {NAMES[n][1]}</span><span class="t3">{NAMES[n][2]}</span></span></a>'
    for n in T)

INDEX = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>学びの道 — Guías</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700;800&family=Zen+Maru+Gothic:wght@400;500;700&display=swap');
    *{box-sizing:border-box}
    body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;color:#2b2420;font-family:'Zen Maru Gothic',sans-serif;
      background:radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(29,43,79,.07) 29% 31%,transparent 32% 44%,rgba(29,43,79,.07) 45% 47%,transparent 48% 60%,rgba(29,43,79,.07) 61% 63%,transparent 64%),radial-gradient(circle at 50% 100%,transparent 0 28%,rgba(29,43,79,.07) 29% 31%,transparent 32% 44%,rgba(29,43,79,.07) 45% 47%,transparent 48% 60%,rgba(29,43,79,.07) 61% 63%,transparent 64%),#f6efe0;
      background-size:64px 32px,64px 32px,auto;background-position:0 0,32px 16px,0 0}
    header{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;width:100%;padding:72px 24px 40px}
    /* Sol rojo (hinomaru) */
    header::before{content:"";position:absolute;top:24px;left:50%;width:150px;height:150px;margin-left:-75px;border-radius:50%;background:#e0432b;opacity:.9;z-index:0}
    header>*{position:relative;z-index:1}
    h1{margin:24px 0 0;font-family:'Shippori Mincho',serif;font-weight:800;font-size:clamp(44px,10vw,96px);letter-spacing:.15em;color:#1d2b4f;text-shadow:0 2px 0 #f6efe0}
    .sub{font-size:15px;letter-spacing:.3em;color:#6b5f55}
    /* Para agregar una guía nueva: copia una <a class="tarjeta"> y cambia --c (color) */
    main{display:flex;flex-wrap:wrap;gap:20px;width:100%;max-width:1040px;padding:16px 24px 72px}
    .tarjeta{display:flex;align-items:center;gap:18px;flex:1 1 280px;padding:22px;color:inherit;text-decoration:none;background:#fffaf0;border:2px solid #1d2b4f;border-radius:6px;box-shadow:6px 6px 0 var(--c);transition:.25s}
    .tarjeta:hover{transform:translate(-3px,-3px);box-shadow:10px 10px 0 var(--c)}
    .sello{flex:none;display:flex;align-items:center;justify-content:center;width:64px;height:64px;background:var(--c);color:#fff;border-radius:6px;font-family:'Shippori Mincho',serif;font-weight:800;font-size:32px;transform:rotate(-5deg)}
    .texto{display:flex;flex-direction:column;gap:2px}
    .t1{font-size:12px;letter-spacing:.2em;color:#7a6c5f}
    .t2{font-family:'Shippori Mincho',serif;font-weight:700;font-size:22px;color:#1d2b4f}
    .t3{font-size:14px;color:#6b5f55}
    footer{padding:0 24px 32px;font-size:13px;letter-spacing:.25em;color:#8a7c6e}
    @media(max-width:600px){header{padding-top:56px}header::before{width:100px;height:100px;margin-left:-50px}.tarjeta{flex-basis:100%}}
  </style>
</head>
<body>
  <header>
    <span class="sub">GUÍAS DE APRENDIZAJE</span>
    <h1>学びの道</h1>
    <span class="sub">El camino del aprendizaje</span>
  </header>
  <main>
__CARDS__
  </main>
  <footer>日本 · 頑張ろう</footer>
</body>
</html>
"""
open("index.html", "w").write(INDEX.replace("__CARDS__", cards))
