(function (e) {
  function a(a) {
    for (
      var r, l, i = a[0], c = a[1], s = a[2], u = 0, p = [];
      u < i.length;
      u++
    )
      (l = i[u]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && p.push(n[l][0]),
        (n[l] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    d && d(a);
    while (p.length) p.shift()();
    return o.push.apply(o, s || []), t();
  }
  function t() {
    for (var e, a = 0; a < o.length; a++) {
      for (var t = o[a], r = !0, i = 1; i < t.length; i++) {
        var c = t[i];
        0 !== n[c] && (r = !1);
      }
      r && (o.splice(a--, 1), (e = l((l.s = t[0]))));
    }
    return e;
  }
  var r = {},
    n = {
      app: 0
    },
    o = [];
  function l(a) {
    if (r[a]) return r[a].exports;
    var t = (r[a] = {
      i: a,
      l: !1,
      exports: {}
    });
    return e[a].call(t.exports, t, t.exports, l), (t.l = !0), t.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function (e, a, t) {
      l.o(e, a) ||
        Object.defineProperty(e, a, {
          enumerable: !0,
          get: t
        });
    }),
    (l.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (l.t = function (e, a) {
      if ((1 & a && (e = l(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (l.r(t),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          value: e
        }),
        2 & a && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            t,
            r,
            function (a) {
              return e[a];
            }.bind(null, r)
          );
      return t;
    }),
    (l.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return l.d(a, "a", a), a;
    }),
    (l.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (l.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = i.push.bind(i);
  (i.push = a), (i = i.slice());
  for (var s = 0; s < i.length; s++) a(i[s]);
  var d = c;
  o.push([0, "chunk-vendors"]), t();
})({
  0: function (e, a, t) {
    e.exports = t("56d7");
  },
  "0d5f": function (e, a, t) {},
  5057: function (e, a, t) {
    "use strict";
    t("0d5f");
  },
  "56d7": function (e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var r = t("7a23"),
      n =
        (t("b0c0"),
        {
          class: "wrapper"
        }),
      o = Object(r["f"])(
        "header",
        {
          class: "wrapper-content"
        },
        [
          Object(r["f"])("h1", null, "Roda Financeira"),
          Object(r["f"])("h2", null, "O que é a roda Financeira?"), 
          Object(r["f"])(
            "p",
            null,
            "A Roda Financeira é uma técnica visual projetada para te oferecer uma visão ampla e precisa do seu estado financeiro. O objetivo principal dessa ferramenta é ajudá-lo a avaliar e compreender claramente diferentes aspectos das suas finanças. O propósito da Roda Financeira é duplo. Primeiro oferecer uma fotografia nítida do seu panorama financeiro, destacando tanto seus pontos fortes quanto as áreas que demanda atenção. Segundo, servir como um bússola para direcionar melhorias e ajustes necessários, permitindo que você estabeleça metas claras e trace estratégias eficazes para alcançar uma saúde financeira sólida e equilibrada."
          )
        ],
        -1
      ),
      l = {
        class: "wrapper-content"
      },
      i = {
        class: "highlight"
      },
      c = Object(r["f"])(
        "svg",
        {
          class: "icon icon-arrow",
          viewBox: "0 0 32 32"
        },
        [
          Object(r["f"])("path", {
            d:
              "M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"
          })
        ],
        -1
      ),
      s = Object(r["f"])("span", null, "As 12 áreas da Roda Financeira", -1),
      d = Object(r["d"])(
        '<div class="hidden"><p>A Roda Financeira é composta por 12 áreas de extrema importância de nossa vida financeira. Que são:</p><ul><li>Fontes de renda</li><li>Sabe economizar</li><li>Investimentos</li><li>Motivação</li><li>Influência social</li><li>Organização e planejamento</li><li>Gestão do dinheiro</li><li>Evitar procrastinar</li><li>Disciplina e determinação</li><li>Evitar dívidas</li></li><li>Lazer</li><li>Equilíbio emocional</li></ul></div>',
        1
      ),
      u = {
        class: "highlight"
      },
      p = Object(r["f"])(
        "svg",
        {
          class: "icon icon-arrow",
          viewBox: "0 0 32 32"
        },
        [
          Object(r["f"])("path", {
            d:
              "M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"
          })
        ],
        -1
      ),
      f = Object(r["f"])("span", null, "Como usar a Roda Financeira", -1),
      m = Object(r["d"])(
        '<div class="hidden"><p>Por onde posso começar a minha Roda Financeira?</p><ul><li><p>Primerio, comece reservando um tempo para refletir sobre as áreas mais críticas da sua vida financeira. Visite acima as 12 áreas da Roda Financeira e leia com atenção refletindo com muita honestidade sobre o que cada um desses pontos representam na sua vida por um todo. Se faça perguntas como nos exemplos abaixo para facilitar seu raciocínio.</p><ul><li>O quanto você está satisfeito com suas fontes de renda?</li><li>Você sabe poupar parte dos seus ganhos?</li><li>Controla bem os seus gastos?</li><li>O quanto você gasta seu dinheiro por influências de seus familiares e amigos?</li><li>Você tem facilidade para fazer renda extra ou você acredita que tem que viver apenas com o que já ganha?</li></ul><p>A intenção é te dar clareza de quais são as suas prioridade em relação a sua vida financeira.</p></li><li><p>Agora você pode editar os campos abaixo adicionando notas de 0 a 10, sendo 0 estou insatisfeito com esta área e 10 estou muito feliz de como está área da minha vida financeira está.</p></li></ul></div>',
        1
      ),
      v = {
        class: "wrapper-tool"
      },
      h = {
        class: "flex"
      },
      b = Object(r["f"])(
        "div",
        {
          id: "chart"
        },
        null,
        -1
      ),
      g = Object(r["f"])("span", null, "Salvar", -1),
      O = Object(r["f"])(
        "svg",
        {
          class: "icon",
          viewBox: "0 0 32 32"
        },
        [
          Object(r["f"])("path", {
            d: "M18 8l-4-4h-14v26h32v-22h-14zM16 27l-7-7h5v-8h4v8h5l-7 7z"
          })
        ],
        -1
      ),
      j = Object(r["f"])(
        "div",
        {
          class: "wrapper-content"
        },
        [
          Object(r["f"])("h3", null, [
            Object(r["e"])("Parabéns, a sua Roda Financeira está pronta!"),
            Object(r["f"])("br"),
            //Object(r["e"])("E agora?")
          ]),
          Object(r["f"])(
            "p",
            null,
            "Com sua Roda Financeira montadinha, está na hora de uma comparação caprichada entre a pontuação que você deu e o que você acha que seria o ideal em cada área financeira. Essa ferramenta maravilhosa vai te ajudar a enxergar as áreas que não estão do seu agrado. Sabe, aquelas que precisam de uma forcinha extra para se alinhar novamente."
          ),
          Object(r["f"])(
            "p",
            null,
            "Você pode salvar a Roda Financeira e, de tempos em tempos, refazer esse exercício e comparar os resultados."
          ),
          Object(r["f"])(
            "div",
            {
              class: "disclaimer"
            },
            [
              Object(r["f"])(
                "p",
                null,
                //"Essa ferramente foi criada inicialmente para meu uso pessoal, mas como não encontrei outras fontes online decici publicá-la e espero que seja útil pra você também."
              ),
              Object(r["f"])("p", null, [
                Object(r["e"])(
                 // "O conceito da roda da vida foi inicialmente criado por Paul J. Meyer. Para entender mais sobre a roda da vida recomendo este post do site "
                ),
                Object(r["f"])(
                  "a",
                  {
                    href:
                      "https://relacaofinanceira.com.br/",
                    target: "_blank"
                  },
                  "Relacão Financeira"
                )
              ])
            ]
          )
        ],
        -1
      );
    function y(e, a, t, y, x, w) {
      return (
        Object(r["g"])(),
        Object(r["c"])("div", n, [
          o,
          Object(r["f"])("div", l, [
            Object(r["f"])("div", i, [
              Object(r["f"])(
                "button",
                {
                  class: "dropdown",
                  onClick:
                    a[1] ||
                    (a[1] = function () {
                      return (
                        w.handleDropdown && w.handleDropdown.apply(w, arguments)
                      );
                    })
                },
                [c, s]
              ),
              d
            ]),
            Object(r["f"])("div", u, [
              Object(r["f"])(
                "button",
                {
                  class: "dropdown",
                  onClick:
                    a[2] ||
                    (a[2] = function () {
                      return (
                        w.handleDropdown && w.handleDropdown.apply(w, arguments)
                      );
                    })
                },
                [p, f]
              ),
              m
            ])
          ]),
          Object(r["f"])("div", v, [
            Object(r["f"])("div", h, [
              Object(r["f"])("form", null, [
                (Object(r["g"])(!0),
                Object(r["c"])(
                  r["a"],
                  null,
                  Object(r["h"])(x.data, function (e, t) {
                    return (
                      Object(r["g"])(),
                      Object(r["c"])(
                        "fieldset",
                        {
                          key: e.color
                        },
                        [
                          Object(r["f"])(
                            "label",
                            {
                              for: "area-" + t
                            },
                            "área da vida " + Object(r["i"])(t),
                            9,
                            ["for"]
                          ),
                          Object(r["k"])(
                            Object(r["f"])(
                              "input",
                              {
                                "onUpdate:modelValue": function (a) {
                                  return (e.name = a);
                                },
                                type: "text",
                                maxlength: "30",
                                minlength: "1",
                                onInput:
                                  a[3] ||
                                  (a[3] = function () {
                                    return (
                                      w.updateChart &&
                                      w.updateChart.apply(w, arguments)
                                    );
                                  }),
                                required: "",
                                autofocus: "",
                                id: "area-" + t
                              },
                              null,
                              40,
                              ["onUpdate:modelValue", "id"]
                            ),
                            [[r["j"], e.name]]
                          ),
                          Object(r["f"])(
                            "label",
                            {
                              for: "nota-" + t
                            },
                            "nota para a área da vida " + Object(r["i"])(t),
                            9,
                            ["for"]
                          ),
                          Object(r["k"])(
                            Object(r["f"])(
                              "input",
                              {
                                "onUpdate:modelValue": function (a) {
                                  return (e.level = a);
                                },
                                type: "number",
                                min: "1",
                                max: "10",
                                onInput:
                                  a[4] ||
                                  (a[4] = function () {
                                    return (
                                      w.updateChart &&
                                      w.updateChart.apply(w, arguments)
                                    );
                                  }),
                                required: "",
                                id: "nota-" + t
                              },
                              null,
                              40,
                              ["onUpdate:modelValue", "id"]
                            ),
                            [[r["j"], e.level]]
                          ),
                          Object(r["f"])(
                            "label",
                            {
                              for: "cor-" + t
                            },
                            "cor para a área da vida " + Object(r["i"])(t),
                            9,
                            ["for"]
                          ),
                          Object(r["k"])(
                            Object(r["f"])(
                              "input",
                              {
                                "onUpdate:modelValue": function (a) {
                                  return (e.color = a);
                                },
                                type: "color",
                                name: "color",
                                onInput:
                                  a[5] ||
                                  (a[5] = function () {
                                    return (
                                      w.updateChart &&
                                      w.updateChart.apply(w, arguments)
                                    );
                                  }),
                                id: "cor-" + t
                              },
                              null,
                              40,
                              ["onUpdate:modelValue", "id"]
                            ),
                            [[r["j"], e.color]]
                          )
                        ]
                      )
                    );
                  }),
                  128
                ))
              ]),
              b
            ]),
            Object(r["f"])(
              "button",
              {
                class: "button",
                onClick:
                  a[6] ||
                  (a[6] = function () {
                    return w.saveChart && w.saveChart.apply(w, arguments);
                  })
              },
              [g, O]
            )
          ]),
          j
        ])
      );
    }
    t("d81d"), t("d3b7"), t("3ca3"), t("ddb0"), t("2b3d");
    var x = t("6e58"),
      w = t("21a6");
    t("fb6a");
    function k() {
      var e = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        a = 100,
        t = !1,
        r = void 0,
        n = !1,
        o = [0, 100],
        l = void 0,
        i = !1,
        c = [],
        s = 1e3,
        d = null,
        u = null,
        p = null,
        f = 0;
      function m(e) {
        (u = x["scale"].linear().domain(o).range([0, a])),
          (p = x["map"](e[0].data).keys()),
          (d = p.length),
          (f = 1.025 * a);
      }
      function v(e) {
        return "rotate(" + +e + ")";
      }
      function h(e, a) {
        return "translate(" + +e + "," + +a + ")";
      }
      function b(t) {
        var r = x["select"](t)
          .append("svg")
          .attr("xmlns", "http://www.w3.org/2000/svg")
          .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
          .attr("xml:space", "preserve")
          .attr("width", 2 * a + e.left + e.right + "px")
          .attr("height", 2 * a + e.top + e.bottom + "px")
          .style("font-family", '"Helvetica Neue", Helvetica, sans-serif')
          .style("font-size", "11px")
          .append("g")
          .classed("radial-barchart", !0)
          .attr("transform", h(e.left + a, e.top + a));
        r.append("g")
          .classed("tick-circles", !0)
          .selectAll("circle")
          .data(c)
          .enter()
          .append("circle")
          .attr("r", function (e) {
            return u(e);
          })
          .style("fill", "none")
          .attr("stroke", "#ddd")
          .attr("stroke-dasharray", "2, 2");
      }
      function g(e, t) {
        if (!t) {
          var c = x["select"](e).select("svg g.radial-barchart");
          c.append("g")
            .classed("spokes", !0)
            .selectAll("line")
            .data(p)
            .enter()
            .append("line")
            .attr("stroke", "#666")
            .attr("stroke-width", "0.2")
            .attr("y2", -a)
            .attr("transform", function (e, a) {
              return v((360 * a) / d);
            });
          var s = x["scale"].linear().domain(o).range([0, -a]),
            u = x["svg"].axis().scale(s).orient("right");
          l && u.tickValues(l),
            c.append("g").classed("axis", !0).call(u),
            c.select("path.domain").style("fill", "none"),
            c
              .append("circle")
              .attr("r", a)
              .attr("stroke", "#aaa")
              .attr("stroke-dasharray", "4, 4")
              .classed("outer", !0)
              .style("fill", "none");
          var m = c.append("g").classed("labels", !0);
          m
            .append("def")
            .append("path")
            .attr("id", "label-path")
            .attr("d", "m0 " + -f + " a" + f + " " + f + " 0 1,1 -0.01 0"),
            m
              .selectAll("text")
              .data(p)
              .enter()
              .append("text")
              .style("text-anchor", "middle")
              .style("fill", "#333")
              .append("textPath")
              .attr("xlink:href", "#label-path")
              .attr("startOffset", function (e, a) {
                return (100 * a) / d + 50 / d + "%";
              })
              .text(function (e) {
                return n ? e.slice(0, 30).toUpperCase() : e.slice(0, 30);
              });
        }
        if (t) {
          var h = x["select"](e).select("svg g.labels");
          h.selectAll("text").remove(),
            h
              .append("def")
              .append("path")
              .attr("id", "label-path")
              .attr("d", "m0 " + -f + " a" + f + " " + f + " 0 1,1 -0.01 0"),
            h
              .selectAll("text")
              .data(p)
              .enter()
              .append("text")
              .style("text-anchor", "middle")
              .style("fill", function (e, a) {
                return i ? r[a % r.length] : null;
              })
              .append("textPath")
              .attr("xlink:href", "#label-path")
              .attr("startOffset", function (e, a) {
                return (100 * a) / d + 50 / d + "%";
              })
              .text(function (e) {
                return n ? e.slice(0, 30).toUpperCase() : e.slice(0, 30);
              });
        }
      }
      function O(e) {
        e.each(function (e) {
          m(e), t && e.reverse();
          var a = x["select"](this).select("svg g.radial-barchart"),
            n = null !== a[0][0];
          n || b(this), (a = x["select"](this).select("svg g.radial-barchart"));
          var o = a.selectAll("g.layer").data(e);
          o
            .enter()
            .append("g")
            .attr("class", function (e, a) {
              return "layer-" + a;
            })
            .classed("layer", !0),
            o.exit().remove();
          var l = o.selectAll("path").data(function (e) {
            var a = x["map"](e.data);
            return a.values();
          });
          l.enter().append("path"),
            l.exit().remove(),
            l
              .transition()
              .duration(s)
              .style("fill", function (e, a) {
                if (r) return r[a % r.length];
              })
              .attr(
                "d",
                x["svg"]
                  .arc()
                  .innerRadius(0)
                  .outerRadius(function (e) {
                    return u(e);
                  })
                  .startAngle(function (e, a) {
                    return (2 * a * Math.PI) / d;
                  })
                  .endAngle(function (e, a) {
                    return (2 * (a + 1) * Math.PI) / d;
                  })
              ),
            g(this, n);
        });
      }
      return (
        (O.margin = function (a) {
          return arguments.length ? ((e = a), O) : e;
        }),
        (O.barHeight = function (e) {
          return arguments.length ? ((a = e), O) : a;
        }),
        (O.reverseLayerOrder = function (e) {
          return arguments.length ? ((t = e), O) : t;
        }),
        (O.barColors = function (e) {
          return arguments.length ? ((r = e), O) : r;
        }),
        (O.capitalizeLabels = function (e) {
          return arguments.length ? ((n = e), O) : n;
        }),
        (O.domain = function (e) {
          return arguments.length ? ((o = e), O) : o;
        }),
        (O.tickValues = function (e) {
          return arguments.length ? ((l = e), O) : l;
        }),
        (O.colorLabels = function (e) {
          return arguments.length ? ((i = e), O) : i;
        }),
        (O.tickCircleValues = function (e) {
          return arguments.length ? ((c = e), O) : c;
        }),
        (O.transitionDuration = function (e) {
          return arguments.length ? ((s = e), O) : s;
        }),
        O
      );
    }
    var C = {
      name: "App",
      data: function () {
        return {
          data: [
            {
              name: "Fontes de renda",
              placeholder: "Fontes de renda",
              level: 0,
              color: "#9ed110"
            },
            {
              name: "Sabe economizar",
              placeholder: "Sabe economizar",
              level: 0,
              color: "#50b517"
            },
            {
              name: "Investimentos",
              placeholder: "Investimentos",
              level: 0,
              color: "#179067"
            },
            {
              name: "Motivação",
              placeholder: "Motivação",
              level: 0,
              color: "#476eaf"
            },
            {
              name: "Influência social",
              placeholder: "Influência social",
              level: 0,
              color: "#9f49ac"
            },
            {
              name: "Organização e planejamento",
              placeholder: "Organização e planejamento",
              level: 0,
              color: "#cc42a2"
            },
            {
              name: "Gestão do dinheiro",
              placeholder: "Gestão do dinheiro",
              level: 0,
              color: "#ff3ba7"
            },
            {
              name: "Evitar procrastinar",
              placeholder: "Evita procrastinar",
              level: 0,
              color: "#ff5800"
            },
            {
              name: "Disciplina e determinação",
              placeholder: "Disciplina e determinação",
              level: 0,
              color: "#ff8100"
            },
            {
              name: "Evitar dívidas",
              placeholder: "Evita dívidas",
              level: 0,
              color: "#feac00"
            },
            {
              name: "Lazer",
              placeholder: "Lazer",
              level: 0,
              color: "#ffcc00"
            },
            {
              name: "Equilíbrio emocional",
              placeholder: "Equiíbrio emocional",
              level: 0,
              color: "#ede604"
            }
          ]
        };
      },
      mounted: function () {
        var e = this,
          a = k()
            .barHeight(350)
            .reverseLayerOrder(!0)
            .capitalizeLabels(!0)
            .barColors(
              this.data.map(function (e) {
                return e.color;
              })
            )
            .domain([0, 10])
            .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .tickCircleValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        x["select"]("#chart")
          .datum(function () {
            var a = [
              {
                data: {}
              }
            ];
            return (
              e.data.map(function (e) {
                return (a[0].data[e.name] = e.level);
              }),
              a
            );
          })
          .call(a);
      },
      methods: {
        updateChart: function (e) {
          var a = this;
          if ((e.target.classList.remove("invalid"), !e.target.value))
            return (
              e.target.classList.add("invalid"),
              void (e.target.value = e.target.placeholder)
            );
          "number" === e.target.type &&
            (parseInt(e.target.value) > 10 || parseInt(e.target.value) < 1) &&
            e.target.classList.add("invalid");
          var t = k()
            .barHeight(350)
            .reverseLayerOrder(!0)
            .capitalizeLabels(!0)
            .barColors(
              this.data.map(function (e) {
                return e.color;
              })
            )
            .domain([0, 10])
            .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .tickCircleValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          x["select"]("#chart")
            .datum(function () {
              var e = [
                {
                  data: {}
                }
              ];
              return (
                a.data.map(function (a) {
                  var t = a.name;
                  t || (t = a.placeholder),
                    (e[0].data[t] =
                      parseInt(a.level) > 10
                        ? 10
                        : parseInt(a.level) < 1
                        ? 1
                        : parseInt(a.level));
                }),
                e
              );
            })
            .call(t);
        },
        chart: function () {
          return k()
            .barHeight(350)
            .reverseLayerOrder(!0)
            .capitalizeLabels(!0)
            .barColors(
              this.data.map(function (e) {
                return e.color;
              })
            )
            .domain([0, 10])
            .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .tickCircleValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        },
        saveChart: function () {
          var e = document.createElement("canvas");
          e.setAttribute("id", "canvas"),
            e.setAttribute("width", "800px"),
            e.setAttribute("height", "800px"),
            e.setAttribute("style", "display: none"),
            document.body.appendChild(e);
          var a = new XMLSerializer().serializeToString(
              document.querySelector("#chart svg")
            ),
            t = document.getElementById("canvas"),
            r = t.getContext("2d"),
            n = self.URL || self.webkitURL || self,
            o = new Image(),
            l = new Blob([a], {
              type: "image/svg+xml;charset=utf-8"
            }),
            i = n.createObjectURL(l);
          (o.onload = function () {
            r.drawImage(o, 0, 0),
              t.toBlob(function (e) {
                return Object(w["saveAs"])(e, "rodadavida.png");
              }),
              document.querySelector("#canvas").remove();
          }),
            (o.src = i);
        },
        handleDropdown: function (e) {
          var a = e.target.classList.contains("dropdown")
            ? e.target
            : e.target.closest(".dropdown");
          a.parentElement.classList.toggle("is-active");
          var t = a.nextSibling;
          t.classList.toggle("hidden");
        }
      }
    };
    t("5057");
    C.render = y;
    var q = C;
    Object(r["b"])(q).mount("#app");
  }
});
//# sourceMappingURL=app.efbd6e80.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-vendors"],
  {
    "00ee": function (t, n, e) {
      var r = e("b622"),
        i = r("toStringTag"),
        o = {};
      (o[i] = "z"), (t.exports = "[object z]" === String(o));
    },
    "0366": function (t, n, e) {
      var r = e("1c0b");
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 0:
            return function () {
              return t.call(n);
            };
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function (e, r, i) {
              return t.call(n, e, r, i);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    "06cf": function (t, n, e) {
      var r = e("83ab"),
        i = e("d1e7"),
        o = e("5c6c"),
        u = e("fc6a"),
        a = e("c04e"),
        c = e("5135"),
        l = e("0cfb"),
        s = Object.getOwnPropertyDescriptor;
      n.f = r
        ? s
        : function (t, n) {
            if (((t = u(t)), (n = a(n, !0)), l))
              try {
                return s(t, n);
              } catch (e) {}
            if (c(t, n)) return o(!i.f.call(t, n), t[n]);
          };
    },
    "0cfb": function (t, n, e) {
      var r = e("83ab"),
        i = e("d039"),
        o = e("cc12");
      t.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
    },
    "0d3b": function (t, n, e) {
      var r = e("d039"),
        i = e("b622"),
        o = e("c430"),
        u = i("iterator");
      t.exports = !r(function () {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
          n = t.searchParams,
          e = "";
        return (
          (t.pathname = "c%20d"),
          n.forEach(function (t, r) {
            n["delete"]("b"), (e += r + t);
          }),
          (o && !t.toJSON) ||
            !n.sort ||
            "http://a/c%20d?a=1&c=3" !== t.href ||
            "3" !== n.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !n[u] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== e ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    "19aa": function (t, n) {
      t.exports = function (t, n, e) {
        if (!(t instanceof n))
          throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
        return t;
      };
    },
    "1be4": function (t, n, e) {
      var r = e("d066");
      t.exports = r("document", "documentElement");
    },
    "1c0b": function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    "1c7e": function (t, n, e) {
      var r = e("b622"),
        i = r("iterator"),
        o = !1;
      try {
        var u = 0,
          a = {
            next: function () {
              return {
                done: !!u++
              };
            },
            return: function () {
              o = !0;
            }
          };
        (a[i] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (c) {}
      t.exports = function (t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
          var r = {};
          (r[i] = function () {
            return {
              next: function () {
                return {
                  done: (e = !0)
                };
              }
            };
          }),
            t(r);
        } catch (c) {}
        return e;
      };
    },
    "1cdc": function (t, n, e) {
      var r = e("342f");
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    "1d80": function (t, n) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    "1dde": function (t, n, e) {
      var r = e("d039"),
        i = e("b622"),
        o = e("2d00"),
        u = i("species");
      t.exports = function (t) {
        return (
          o >= 51 ||
          !r(function () {
            var n = [],
              e = (n.constructor = {});
            return (
              (e[u] = function () {
                return {
                  foo: 1
                };
              }),
              1 !== n[t](Boolean).foo
            );
          })
        );
      };
    },
    "21a6": function (t, n, e) {
      (function (e) {
        var r, i, o;
        (function (e, u) {
          (i = []),
            (r = u),
            (o = "function" === typeof r ? r.apply(n, i) : r),
            void 0 === o || (t.exports = o);
        })(0, function () {
          "use strict";
          function n(t, n) {
            return (
              "undefined" == typeof n
                ? (n = {
                    autoBom: !1
                  })
                : "object" != typeof n &&
                  (console.warn(
                    "Deprecated: Expected third argument to be a object"
                  ),
                  (n = {
                    autoBom: !n
                  })),
              n.autoBom &&
              /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                t.type
              )
                ? new Blob(["\ufeff", t], {
                    type: t.type
                  })
                : t
            );
          }
          function r(t, n, e) {
            var r = new XMLHttpRequest();
            r.open("GET", t),
              (r.responseType = "blob"),
              (r.onload = function () {
                c(r.response, n, e);
              }),
              (r.onerror = function () {
                console.error("could not download file");
              }),
              r.send();
          }
          function i(t) {
            var n = new XMLHttpRequest();
            n.open("HEAD", t, !1);
            try {
              n.send();
            } catch (t) {}
            return 200 <= n.status && 299 >= n.status;
          }
          function o(t) {
            try {
              t.dispatchEvent(new MouseEvent("click"));
            } catch (r) {
              var n = document.createEvent("MouseEvents");
              n.initMouseEvent(
                "click",
                !0,
                !0,
                window,
                0,
                0,
                0,
                80,
                20,
                !1,
                !1,
                !1,
                !1,
                0,
                null
              ),
                t.dispatchEvent(n);
            }
          }
          var u =
              "object" == typeof window && window.window === window
                ? window
                : "object" == typeof self && self.self === self
                ? self
                : "object" == typeof e && e.global === e
                ? e
                : void 0,
            a =
              u.navigator &&
              /Macintosh/.test(navigator.userAgent) &&
              /AppleWebKit/.test(navigator.userAgent) &&
              !/Safari/.test(navigator.userAgent),
            c =
              u.saveAs ||
              ("object" != typeof window || window !== u
                ? function () {}
                : "download" in HTMLAnchorElement.prototype && !a
                ? function (t, n, e) {
                    var a = u.URL || u.webkitURL,
                      c = document.createElement("a");
                    (n = n || t.name || "download"),
                      (c.download = n),
                      (c.rel = "noopener"),
                      "string" == typeof t
                        ? ((c.href = t),
                          c.origin === location.origin
                            ? o(c)
                            : i(c.href)
                            ? r(t, n, e)
                            : o(c, (c.target = "_blank")))
                        : ((c.href = a.createObjectURL(t)),
                          setTimeout(function () {
                            a.revokeObjectURL(c.href);
                          }, 4e4),
                          setTimeout(function () {
                            o(c);
                          }, 0));
                  }
                : "msSaveOrOpenBlob" in navigator
                ? function (t, e, u) {
                    if (((e = e || t.name || "download"), "string" != typeof t))
                      navigator.msSaveOrOpenBlob(n(t, u), e);
                    else if (i(t)) r(t, e, u);
                    else {
                      var a = document.createElement("a");
                      (a.href = t),
                        (a.target = "_blank"),
                        setTimeout(function () {
                          o(a);
                        });
                    }
                  }
                : function (t, n, e, i) {
                    if (
                      ((i = i || open("", "_blank")),
                      i &&
                        (i.document.title = i.document.body.innerText =
                          "downloading..."),
                      "string" == typeof t)
                    )
                      return r(t, n, e);
                    var o = "application/octet-stream" === t.type,
                      c = /constructor/i.test(u.HTMLElement) || u.safari,
                      l = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if (
                      (l || (o && c) || a) &&
                      "undefined" != typeof FileReader
                    ) {
                      var s = new FileReader();
                      (s.onloadend = function () {
                        var t = s.result;
                        (t = l
                          ? t
                          : t.replace(/^data:[^;]*;/, "data:attachment/file;")),
                          i ? (i.location.href = t) : (location = t),
                          (i = null);
                      }),
                        s.readAsDataURL(t);
                    } else {
                      var f = u.URL || u.webkitURL,
                        h = f.createObjectURL(t);
                      i ? (i.location = h) : (location.href = h),
                        (i = null),
                        setTimeout(function () {
                          f.revokeObjectURL(h);
                        }, 4e4);
                    }
                  });
          (u.saveAs = c.saveAs = c), (t.exports = c);
        });
      }.call(this, e("c8ba")));
    },
    2266: function (t, n, e) {
      var r = e("825a"),
        i = e("e95a"),
        o = e("50c4"),
        u = e("0366"),
        a = e("35a1"),
        c = e("2a62"),
        l = function (t, n) {
          (this.stopped = t), (this.result = n);
        };
      t.exports = function (t, n, e) {
        var s,
          f,
          h,
          p,
          d,
          g,
          v,
          y = e && e.that,
          m = !(!e || !e.AS_ENTRIES),
          b = !(!e || !e.IS_ITERATOR),
          x = !(!e || !e.INTERRUPTED),
          w = u(n, y, 1 + m + x),
          M = function (t) {
            return s && c(s), new l(!0, t);
          },
          _ = function (t) {
            return m
              ? (r(t), x ? w(t[0], t[1], M) : w(t[0], t[1]))
              : x
              ? w(t, M)
              : w(t);
          };
        if (b) s = t;
        else {
          if (((f = a(t)), "function" != typeof f))
            throw TypeError("Target is not iterable");
          if (i(f)) {
            for (h = 0, p = o(t.length); p > h; h++)
              if (((d = _(t[h])), d && d instanceof l)) return d;
            return new l(!1);
          }
          s = f.call(t);
        }
        g = s.next;
        while (!(v = g.call(s)).done) {
          try {
            d = _(v.value);
          } catch (S) {
            throw (c(s), S);
          }
          if ("object" == typeof d && d && d instanceof l) return d;
        }
        return new l(!1);
      };
    },
    "23cb": function (t, n, e) {
      var r = e("a691"),
        i = Math.max,
        o = Math.min;
      t.exports = function (t, n) {
        var e = r(t);
        return e < 0 ? i(e + n, 0) : o(e, n);
      };
    },
    "23e7": function (t, n, e) {
      var r = e("da84"),
        i = e("06cf").f,
        o = e("9112"),
        u = e("6eeb"),
        a = e("ce4e"),
        c = e("e893"),
        l = e("94ca");
      t.exports = function (t, n) {
        var e,
          s,
          f,
          h,
          p,
          d,
          g = t.target,
          v = t.global,
          y = t.stat;
        if (((s = v ? r : y ? r[g] || a(g, {}) : (r[g] || {}).prototype), s))
          for (f in n) {
            if (
              ((p = n[f]),
              t.noTargetGet ? ((d = i(s, f)), (h = d && d.value)) : (h = s[f]),
              (e = l(v ? f : g + (y ? "." : "#") + f, t.forced)),
              !e && void 0 !== h)
            ) {
              if (typeof p === typeof h) continue;
              c(p, h);
            }
            (t.sham || (h && h.sham)) && o(p, "sham", !0), u(s, f, p, t);
          }
      };
    },
    "241c": function (t, n, e) {
      var r = e("ca84"),
        i = e("7839"),
        o = i.concat("length", "prototype");
      n.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, o);
        };
    },
    2626: function (t, n, e) {
      "use strict";
      var r = e("d066"),
        i = e("9bf2"),
        o = e("b622"),
        u = e("83ab"),
        a = o("species");
      t.exports = function (t) {
        var n = r(t),
          e = i.f;
        u &&
          n &&
          !n[a] &&
          e(n, a, {
            configurable: !0,
            get: function () {
              return this;
            }
          });
      };
    },
    "2a62": function (t, n, e) {
      var r = e("825a");
      t.exports = function (t) {
        var n = t["return"];
        if (void 0 !== n) return r(n.call(t)).value;
      };
    },
    "2b3d": function (t, n, e) {
      "use strict";
      e("3ca3");
      var r,
        i = e("23e7"),
        o = e("83ab"),
        u = e("0d3b"),
        a = e("da84"),
        c = e("37e8"),
        l = e("6eeb"),
        s = e("19aa"),
        f = e("5135"),
        h = e("60da"),
        p = e("4df4"),
        d = e("6547").codeAt,
        g = e("5fb2"),
        v = e("d44e"),
        y = e("9861"),
        m = e("69f3"),
        b = a.URL,
        x = y.URLSearchParams,
        w = y.getState,
        M = m.set,
        _ = m.getterFor("URL"),
        S = Math.floor,
        j = Math.pow,
        O = "Invalid authority",
        k = "Invalid scheme",
        E = "Invalid host",
        A = "Invalid port",
        C = /[A-Za-z]/,
        L = /[\d+-.A-Za-z]/,
        N = /\d/,
        T = /^(0x|0X)/,
        R = /^[0-7]+$/,
        P = /^\d+$/,
        F = /^[\dA-Fa-f]+$/,
        U = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        q = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        z = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        D = /[\u0009\u000A\u000D]/g,
        I = function (t, n) {
          var e, r, i;
          if ("[" == n.charAt(0)) {
            if ("]" != n.charAt(n.length - 1)) return E;
            if (((e = H(n.slice(1, -1))), !e)) return E;
            t.host = e;
          } else if (K(t)) {
            if (((n = g(n)), U.test(n))) return E;
            if (((e = B(n)), null === e)) return E;
            t.host = e;
          } else {
            if (q.test(n)) return E;
            for (e = "", r = p(n), i = 0; i < r.length; i++) e += X(r[i], Y);
            t.host = e;
          }
        },
        B = function (t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a,
            c = t.split(".");
          if (
            (c.length && "" == c[c.length - 1] && c.pop(),
            (n = c.length),
            n > 4)
          )
            return t;
          for (e = [], r = 0; r < n; r++) {
            if (((i = c[r]), "" == i)) return t;
            if (
              ((o = 10),
              i.length > 1 &&
                "0" == i.charAt(0) &&
                ((o = T.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
              "" === i)
            )
              u = 0;
            else {
              if (!(10 == o ? P : 8 == o ? R : F).test(i)) return t;
              u = parseInt(i, o);
            }
            e.push(u);
          }
          for (r = 0; r < n; r++)
            if (((u = e[r]), r == n - 1)) {
              if (u >= j(256, 5 - n)) return null;
            } else if (u > 255) return null;
          for (a = e.pop(), r = 0; r < e.length; r++) a += e[r] * j(256, 3 - r);
          return a;
        },
        H = function (t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a,
            c = [0, 0, 0, 0, 0, 0, 0, 0],
            l = 0,
            s = null,
            f = 0,
            h = function () {
              return t.charAt(f);
            };
          if (":" == h()) {
            if (":" != t.charAt(1)) return;
            (f += 2), l++, (s = l);
          }
          while (h()) {
            if (8 == l) return;
            if (":" != h()) {
              n = e = 0;
              while (e < 4 && F.test(h()))
                (n = 16 * n + parseInt(h(), 16)), f++, e++;
              if ("." == h()) {
                if (0 == e) return;
                if (((f -= e), l > 6)) return;
                r = 0;
                while (h()) {
                  if (((i = null), r > 0)) {
                    if (!("." == h() && r < 4)) return;
                    f++;
                  }
                  if (!N.test(h())) return;
                  while (N.test(h())) {
                    if (((o = parseInt(h(), 10)), null === i)) i = o;
                    else {
                      if (0 == i) return;
                      i = 10 * i + o;
                    }
                    if (i > 255) return;
                    f++;
                  }
                  (c[l] = 256 * c[l] + i), r++, (2 != r && 4 != r) || l++;
                }
                if (4 != r) return;
                break;
              }
              if (":" == h()) {
                if ((f++, !h())) return;
              } else if (h()) return;
              c[l++] = n;
            } else {
              if (null !== s) return;
              f++, l++, (s = l);
            }
          }
          if (null !== s) {
            (u = l - s), (l = 7);
            while (0 != l && u > 0)
              (a = c[l]), (c[l--] = c[s + u - 1]), (c[s + --u] = a);
          } else if (8 != l) return;
          return c;
        },
        V = function (t) {
          for (var n = null, e = 1, r = null, i = 0, o = 0; o < 8; o++)
            0 !== t[o]
              ? (i > e && ((n = r), (e = i)), (r = null), (i = 0))
              : (null === r && (r = o), ++i);
          return i > e && ((n = r), (e = i)), n;
        },
        $ = function (t) {
          var n, e, r, i;
          if ("number" == typeof t) {
            for (n = [], e = 0; e < 4; e++)
              n.unshift(t % 256), (t = S(t / 256));
            return n.join(".");
          }
          if ("object" == typeof t) {
            for (n = "", r = V(t), e = 0; e < 8; e++)
              (i && 0 === t[e]) ||
                (i && (i = !1),
                r === e
                  ? ((n += e ? ":" : "::"), (i = !0))
                  : ((n += t[e].toString(16)), e < 7 && (n += ":")));
            return "[" + n + "]";
          }
          return t;
        },
        Y = {},
        W = h({}, Y, {
          " ": 1,
          '"': 1,
          "<": 1,
          ">": 1,
          "`": 1
        }),
        Z = h({}, W, {
          "#": 1,
          "?": 1,
          "{": 1,
          "}": 1
        }),
        G = h({}, Z, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1
        }),
        X = function (t, n) {
          var e = d(t, 0);
          return e > 32 && e < 127 && !f(n, t) ? t : encodeURIComponent(t);
        },
        J = {
          ftp: 21,
          file: null,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443
        },
        K = function (t) {
          return f(J, t.scheme);
        },
        Q = function (t) {
          return "" != t.username || "" != t.password;
        },
        tt = function (t) {
          return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
        },
        nt = function (t, n) {
          var e;
          return (
            2 == t.length &&
            C.test(t.charAt(0)) &&
            (":" == (e = t.charAt(1)) || (!n && "|" == e))
          );
        },
        et = function (t) {
          var n;
          return (
            t.length > 1 &&
            nt(t.slice(0, 2)) &&
            (2 == t.length ||
              "/" === (n = t.charAt(2)) ||
              "\\" === n ||
              "?" === n ||
              "#" === n)
          );
        },
        rt = function (t) {
          var n = t.path,
            e = n.length;
          !e || ("file" == t.scheme && 1 == e && nt(n[0], !0)) || n.pop();
        },
        it = function (t) {
          return "." === t || "%2e" === t.toLowerCase();
        },
        ot = function (t) {
          return (
            (t = t.toLowerCase()),
            ".." === t || "%2e." === t || ".%2e" === t || "%2e%2e" === t
          );
        },
        ut = {},
        at = {},
        ct = {},
        lt = {},
        st = {},
        ft = {},
        ht = {},
        pt = {},
        dt = {},
        gt = {},
        vt = {},
        yt = {},
        mt = {},
        bt = {},
        xt = {},
        wt = {},
        Mt = {},
        _t = {},
        St = {},
        jt = {},
        Ot = {},
        kt = function (t, n, e, i) {
          var o,
            u,
            a,
            c,
            l = e || ut,
            s = 0,
            h = "",
            d = !1,
            g = !1,
            v = !1;
          e ||
            ((t.scheme = ""),
            (t.username = ""),
            (t.password = ""),
            (t.host = null),
            (t.port = null),
            (t.path = []),
            (t.query = null),
            (t.fragment = null),
            (t.cannotBeABaseURL = !1),
            (n = n.replace(z, ""))),
            (n = n.replace(D, "")),
            (o = p(n));
          while (s <= o.length) {
            switch (((u = o[s]), l)) {
              case ut:
                if (!u || !C.test(u)) {
                  if (e) return k;
                  l = ct;
                  continue;
                }
                (h += u.toLowerCase()), (l = at);
                break;
              case at:
                if (u && (L.test(u) || "+" == u || "-" == u || "." == u))
                  h += u.toLowerCase();
                else {
                  if (":" != u) {
                    if (e) return k;
                    (h = ""), (l = ct), (s = 0);
                    continue;
                  }
                  if (
                    e &&
                    (K(t) != f(J, h) ||
                      ("file" == h && (Q(t) || null !== t.port)) ||
                      ("file" == t.scheme && !t.host))
                  )
                    return;
                  if (((t.scheme = h), e))
                    return void (
                      K(t) &&
                      J[t.scheme] == t.port &&
                      (t.port = null)
                    );
                  (h = ""),
                    "file" == t.scheme
                      ? (l = bt)
                      : K(t) && i && i.scheme == t.scheme
                      ? (l = lt)
                      : K(t)
                      ? (l = pt)
                      : "/" == o[s + 1]
                      ? ((l = st), s++)
                      : ((t.cannotBeABaseURL = !0), t.path.push(""), (l = St));
                }
                break;
              case ct:
                if (!i || (i.cannotBeABaseURL && "#" != u)) return k;
                if (i.cannotBeABaseURL && "#" == u) {
                  (t.scheme = i.scheme),
                    (t.path = i.path.slice()),
                    (t.query = i.query),
                    (t.fragment = ""),
                    (t.cannotBeABaseURL = !0),
                    (l = Ot);
                  break;
                }
                l = "file" == i.scheme ? bt : ft;
                continue;
              case lt:
                if ("/" != u || "/" != o[s + 1]) {
                  l = ft;
                  continue;
                }
                (l = dt), s++;
                break;
              case st:
                if ("/" == u) {
                  l = gt;
                  break;
                }
                l = _t;
                continue;
              case ft:
                if (((t.scheme = i.scheme), u == r))
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = i.query);
                else if ("/" == u || ("\\" == u && K(t))) l = ht;
                else if ("?" == u)
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = ""),
                    (l = jt);
                else {
                  if ("#" != u) {
                    (t.username = i.username),
                      (t.password = i.password),
                      (t.host = i.host),
                      (t.port = i.port),
                      (t.path = i.path.slice()),
                      t.path.pop(),
                      (l = _t);
                    continue;
                  }
                  (t.username = i.username),
                    (t.password = i.password),
                    (t.host = i.host),
                    (t.port = i.port),
                    (t.path = i.path.slice()),
                    (t.query = i.query),
                    (t.fragment = ""),
                    (l = Ot);
                }
                break;
              case ht:
                if (!K(t) || ("/" != u && "\\" != u)) {
                  if ("/" != u) {
                    (t.username = i.username),
                      (t.password = i.password),
                      (t.host = i.host),
                      (t.port = i.port),
                      (l = _t);
                    continue;
                  }
                  l = gt;
                } else l = dt;
                break;
              case pt:
                if (((l = dt), "/" != u || "/" != h.charAt(s + 1))) continue;
                s++;
                break;
              case dt:
                if ("/" != u && "\\" != u) {
                  l = gt;
                  continue;
                }
                break;
              case gt:
                if ("@" == u) {
                  d && (h = "%40" + h), (d = !0), (a = p(h));
                  for (var y = 0; y < a.length; y++) {
                    var m = a[y];
                    if (":" != m || v) {
                      var b = X(m, G);
                      v ? (t.password += b) : (t.username += b);
                    } else v = !0;
                  }
                  h = "";
                } else if (
                  u == r ||
                  "/" == u ||
                  "?" == u ||
                  "#" == u ||
                  ("\\" == u && K(t))
                ) {
                  if (d && "" == h) return O;
                  (s -= p(h).length + 1), (h = ""), (l = vt);
                } else h += u;
                break;
              case vt:
              case yt:
                if (e && "file" == t.scheme) {
                  l = wt;
                  continue;
                }
                if (":" != u || g) {
                  if (
                    u == r ||
                    "/" == u ||
                    "?" == u ||
                    "#" == u ||
                    ("\\" == u && K(t))
                  ) {
                    if (K(t) && "" == h) return E;
                    if (e && "" == h && (Q(t) || null !== t.port)) return;
                    if (((c = I(t, h)), c)) return c;
                    if (((h = ""), (l = Mt), e)) return;
                    continue;
                  }
                  "[" == u ? (g = !0) : "]" == u && (g = !1), (h += u);
                } else {
                  if ("" == h) return E;
                  if (((c = I(t, h)), c)) return c;
                  if (((h = ""), (l = mt), e == yt)) return;
                }
                break;
              case mt:
                if (!N.test(u)) {
                  if (
                    u == r ||
                    "/" == u ||
                    "?" == u ||
                    "#" == u ||
                    ("\\" == u && K(t)) ||
                    e
                  ) {
                    if ("" != h) {
                      var x = parseInt(h, 10);
                      if (x > 65535) return A;
                      (t.port = K(t) && x === J[t.scheme] ? null : x), (h = "");
                    }
                    if (e) return;
                    l = Mt;
                    continue;
                  }
                  return A;
                }
                h += u;
                break;
              case bt:
                if (((t.scheme = "file"), "/" == u || "\\" == u)) l = xt;
                else {
                  if (!i || "file" != i.scheme) {
                    l = _t;
                    continue;
                  }
                  if (u == r)
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = i.query);
                  else if ("?" == u)
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = ""),
                      (l = jt);
                  else {
                    if ("#" != u) {
                      et(o.slice(s).join("")) ||
                        ((t.host = i.host), (t.path = i.path.slice()), rt(t)),
                        (l = _t);
                      continue;
                    }
                    (t.host = i.host),
                      (t.path = i.path.slice()),
                      (t.query = i.query),
                      (t.fragment = ""),
                      (l = Ot);
                  }
                }
                break;
              case xt:
                if ("/" == u || "\\" == u) {
                  l = wt;
                  break;
                }
                i &&
                  "file" == i.scheme &&
                  !et(o.slice(s).join("")) &&
                  (nt(i.path[0], !0)
                    ? t.path.push(i.path[0])
                    : (t.host = i.host)),
                  (l = _t);
                continue;
              case wt:
                if (u == r || "/" == u || "\\" == u || "?" == u || "#" == u) {
                  if (!e && nt(h)) l = _t;
                  else if ("" == h) {
                    if (((t.host = ""), e)) return;
                    l = Mt;
                  } else {
                    if (((c = I(t, h)), c)) return c;
                    if (("localhost" == t.host && (t.host = ""), e)) return;
                    (h = ""), (l = Mt);
                  }
                  continue;
                }
                h += u;
                break;
              case Mt:
                if (K(t)) {
                  if (((l = _t), "/" != u && "\\" != u)) continue;
                } else if (e || "?" != u)
                  if (e || "#" != u) {
                    if (u != r && ((l = _t), "/" != u)) continue;
                  } else (t.fragment = ""), (l = Ot);
                else (t.query = ""), (l = jt);
                break;
              case _t:
                if (
                  u == r ||
                  "/" == u ||
                  ("\\" == u && K(t)) ||
                  (!e && ("?" == u || "#" == u))
                ) {
                  if (
                    (ot(h)
                      ? (rt(t),
                        "/" == u || ("\\" == u && K(t)) || t.path.push(""))
                      : it(h)
                      ? "/" == u || ("\\" == u && K(t)) || t.path.push("")
                      : ("file" == t.scheme &&
                          !t.path.length &&
                          nt(h) &&
                          (t.host && (t.host = ""), (h = h.charAt(0) + ":")),
                        t.path.push(h)),
                    (h = ""),
                    "file" == t.scheme && (u == r || "?" == u || "#" == u))
                  )
                    while (t.path.length > 1 && "" === t.path[0])
                      t.path.shift();
                  "?" == u
                    ? ((t.query = ""), (l = jt))
                    : "#" == u && ((t.fragment = ""), (l = Ot));
                } else h += X(u, Z);
                break;
              case St:
                "?" == u
                  ? ((t.query = ""), (l = jt))
                  : "#" == u
                  ? ((t.fragment = ""), (l = Ot))
                  : u != r && (t.path[0] += X(u, Y));
                break;
              case jt:
                e || "#" != u
                  ? u != r &&
                    ("'" == u && K(t)
                      ? (t.query += "%27")
                      : (t.query += "#" == u ? "%23" : X(u, Y)))
                  : ((t.fragment = ""), (l = Ot));
                break;
              case Ot:
                u != r && (t.fragment += X(u, W));
                break;
            }
            s++;
          }
        },
        Et = function (t) {
          var n,
            e,
            r = s(this, Et, "URL"),
            i = arguments.length > 1 ? arguments[1] : void 0,
            u = String(t),
            a = M(r, {
              type: "URL"
            });
          if (void 0 !== i)
            if (i instanceof Et) n = _(i);
            else if (((e = kt((n = {}), String(i))), e)) throw TypeError(e);
          if (((e = kt(a, u, null, n)), e)) throw TypeError(e);
          var c = (a.searchParams = new x()),
            l = w(c);
          l.updateSearchParams(a.query),
            (l.updateURL = function () {
              a.query = String(c) || null;
            }),
            o ||
              ((r.href = Ct.call(r)),
              (r.origin = Lt.call(r)),
              (r.protocol = Nt.call(r)),
              (r.username = Tt.call(r)),
              (r.password = Rt.call(r)),
              (r.host = Pt.call(r)),
              (r.hostname = Ft.call(r)),
              (r.port = Ut.call(r)),
              (r.pathname = qt.call(r)),
              (r.search = zt.call(r)),
              (r.searchParams = Dt.call(r)),
              (r.hash = It.call(r)));
        },
        At = Et.prototype,
        Ct = function () {
          var t = _(this),
            n = t.scheme,
            e = t.username,
            r = t.password,
            i = t.host,
            o = t.port,
            u = t.path,
            a = t.query,
            c = t.fragment,
            l = n + ":";
          return (
            null !== i
              ? ((l += "//"),
                Q(t) && (l += e + (r ? ":" + r : "") + "@"),
                (l += $(i)),
                null !== o && (l += ":" + o))
              : "file" == n && (l += "//"),
            (l += t.cannotBeABaseURL
              ? u[0]
              : u.length
              ? "/" + u.join("/")
              : ""),
            null !== a && (l += "?" + a),
            null !== c && (l += "#" + c),
            l
          );
        },
        Lt = function () {
          var t = _(this),
            n = t.scheme,
            e = t.port;
          if ("blob" == n)
            try {
              return new URL(n.path[0]).origin;
            } catch (r) {
              return "null";
            }
          return "file" != n && K(t)
            ? n + "://" + $(t.host) + (null !== e ? ":" + e : "")
            : "null";
        },
        Nt = function () {
          return _(this).scheme + ":";
        },
        Tt = function () {
          return _(this).username;
        },
        Rt = function () {
          return _(this).password;
        },
        Pt = function () {
          var t = _(this),
            n = t.host,
            e = t.port;
          return null === n ? "" : null === e ? $(n) : $(n) + ":" + e;
        },
        Ft = function () {
          var t = _(this).host;
          return null === t ? "" : $(t);
        },
        Ut = function () {
          var t = _(this).port;
          return null === t ? "" : String(t);
        },
        qt = function () {
          var t = _(this),
            n = t.path;
          return t.cannotBeABaseURL ? n[0] : n.length ? "/" + n.join("/") : "";
        },
        zt = function () {
          var t = _(this).query;
          return t ? "?" + t : "";
        },
        Dt = function () {
          return _(this).searchParams;
        },
        It = function () {
          var t = _(this).fragment;
          return t ? "#" + t : "";
        },
        Bt = function (t, n) {
          return {
            get: t,
            set: n,
            configurable: !0,
            enumerable: !0
          };
        };
      if (
        (o &&
          c(At, {
            href: Bt(Ct, function (t) {
              var n = _(this),
                e = String(t),
                r = kt(n, e);
              if (r) throw TypeError(r);
              w(n.searchParams).updateSearchParams(n.query);
            }),
            origin: Bt(Lt),
            protocol: Bt(Nt, function (t) {
              var n = _(this);
              kt(n, String(t) + ":", ut);
            }),
            username: Bt(Tt, function (t) {
              var n = _(this),
                e = p(String(t));
              if (!tt(n)) {
                n.username = "";
                for (var r = 0; r < e.length; r++) n.username += X(e[r], G);
              }
            }),
            password: Bt(Rt, function (t) {
              var n = _(this),
                e = p(String(t));
              if (!tt(n)) {
                n.password = "";
                for (var r = 0; r < e.length; r++) n.password += X(e[r], G);
              }
            }),
            host: Bt(Pt, function (t) {
              var n = _(this);
              n.cannotBeABaseURL || kt(n, String(t), vt);
            }),
            hostname: Bt(Ft, function (t) {
              var n = _(this);
              n.cannotBeABaseURL || kt(n, String(t), yt);
            }),
            port: Bt(Ut, function (t) {
              var n = _(this);
              tt(n) ||
                ((t = String(t)), "" == t ? (n.port = null) : kt(n, t, mt));
            }),
            pathname: Bt(qt, function (t) {
              var n = _(this);
              n.cannotBeABaseURL || ((n.path = []), kt(n, t + "", Mt));
            }),
            search: Bt(zt, function (t) {
              var n = _(this);
              (t = String(t)),
                "" == t
                  ? (n.query = null)
                  : ("?" == t.charAt(0) && (t = t.slice(1)),
                    (n.query = ""),
                    kt(n, t, jt)),
                w(n.searchParams).updateSearchParams(n.query);
            }),
            searchParams: Bt(Dt),
            hash: Bt(It, function (t) {
              var n = _(this);
              (t = String(t)),
                "" != t
                  ? ("#" == t.charAt(0) && (t = t.slice(1)),
                    (n.fragment = ""),
                    kt(n, t, Ot))
                  : (n.fragment = null);
            })
          }),
        l(
          At,
          "toJSON",
          function () {
            return Ct.call(this);
          },
          {
            enumerable: !0
          }
        ),
        l(
          At,
          "toString",
          function () {
            return Ct.call(this);
          },
          {
            enumerable: !0
          }
        ),
        b)
      ) {
        var Ht = b.createObjectURL,
          Vt = b.revokeObjectURL;
        Ht &&
          l(Et, "createObjectURL", function (t) {
            return Ht.apply(b, arguments);
          }),
          Vt &&
            l(Et, "revokeObjectURL", function (t) {
              return Vt.apply(b, arguments);
            });
      }
      v(Et, "URL"),
        i(
          {
            global: !0,
            forced: !u,
            sham: !o
          },
          {
            URL: Et
          }
        );
    },
    "2cf4": function (t, n, e) {
      var r,
        i,
        o,
        u = e("da84"),
        a = e("d039"),
        c = e("0366"),
        l = e("1be4"),
        s = e("cc12"),
        f = e("1cdc"),
        h = e("605d"),
        p = u.location,
        d = u.setImmediate,
        g = u.clearImmediate,
        v = u.process,
        y = u.MessageChannel,
        m = u.Dispatch,
        b = 0,
        x = {},
        w = "onreadystatechange",
        M = function (t) {
          if (x.hasOwnProperty(t)) {
            var n = x[t];
            delete x[t], n();
          }
        },
        _ = function (t) {
          return function () {
            M(t);
          };
        },
        S = function (t) {
          M(t.data);
        },
        j = function (t) {
          u.postMessage(t + "", p.protocol + "//" + p.host);
        };
      (d && g) ||
        ((d = function (t) {
          var n = [],
            e = 1;
          while (arguments.length > e) n.push(arguments[e++]);
          return (
            (x[++b] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, n);
            }),
            r(b),
            b
          );
        }),
        (g = function (t) {
          delete x[t];
        }),
        h
          ? (r = function (t) {
              v.nextTick(_(t));
            })
          : m && m.now
          ? (r = function (t) {
              m.now(_(t));
            })
          : y && !f
          ? ((i = new y()),
            (o = i.port2),
            (i.port1.onmessage = S),
            (r = c(o.postMessage, o, 1)))
          : u.addEventListener &&
            "function" == typeof postMessage &&
            !u.importScripts &&
            p &&
            "file:" !== p.protocol &&
            !a(j)
          ? ((r = j), u.addEventListener("message", S, !1))
          : (r =
              w in s("script")
                ? function (t) {
                    l.appendChild(s("script"))[w] = function () {
                      l.removeChild(this), M(t);
                    };
                  }
                : function (t) {
                    setTimeout(_(t), 0);
                  })),
        (t.exports = {
          set: d,
          clear: g
        });
    },
    "2d00": function (t, n, e) {
      var r,
        i,
        o = e("da84"),
        u = e("342f"),
        a = o.process,
        c = a && a.versions,
        l = c && c.v8;
      l
        ? ((r = l.split(".")), (i = r[0] + r[1]))
        : u &&
          ((r = u.match(/Edge\/(\d+)/)),
          (!r || r[1] >= 74) &&
            ((r = u.match(/Chrome\/(\d+)/)), r && (i = r[1]))),
        (t.exports = i && +i);
    },
    "342f": function (t, n, e) {
      var r = e("d066");
      t.exports = r("navigator", "userAgent") || "";
    },
    "35a1": function (t, n, e) {
      var r = e("f5df"),
        i = e("3f8c"),
        o = e("b622"),
        u = o("iterator");
      t.exports = function (t) {
        if (void 0 != t) return t[u] || t["@@iterator"] || i[r(t)];
      };
    },
    "37e8": function (t, n, e) {
      var r = e("83ab"),
        i = e("9bf2"),
        o = e("825a"),
        u = e("df75");
      t.exports = r
        ? Object.defineProperties
        : function (t, n) {
            o(t);
            var e,
              r = u(n),
              a = r.length,
              c = 0;
            while (a > c) i.f(t, (e = r[c++]), n[e]);
            return t;
          };
    },
    "3bbe": function (t, n, e) {
      var r = e("861d");
      t.exports = function (t) {
        if (!r(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    "3ca3": function (t, n, e) {
      "use strict";
      var r = e("6547").charAt,
        i = e("69f3"),
        o = e("7dd0"),
        u = "String Iterator",
        a = i.set,
        c = i.getterFor(u);
      o(
        String,
        "String",
        function (t) {
          a(this, {
            type: u,
            string: String(t),
            index: 0
          });
        },
        function () {
          var t,
            n = c(this),
            e = n.string,
            i = n.index;
          return i >= e.length
            ? {
                value: void 0,
                done: !0
              }
            : ((t = r(e, i)),
              (n.index += t.length),
              {
                value: t,
                done: !1
              });
        }
      );
    },
    "3f8c": function (t, n) {
      t.exports = {};
    },
    "428f": function (t, n, e) {
      var r = e("da84");
      t.exports = r;
    },
    "44ad": function (t, n, e) {
      var r = e("d039"),
        i = e("c6b6"),
        o = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == i(t) ? o.call(t, "") : Object(t);
          }
        : Object;
    },
    "44d2": function (t, n, e) {
      var r = e("b622"),
        i = e("7c73"),
        o = e("9bf2"),
        u = r("unscopables"),
        a = Array.prototype;
      void 0 == a[u] &&
        o.f(a, u, {
          configurable: !0,
          value: i(null)
        }),
        (t.exports = function (t) {
          a[u][t] = !0;
        });
    },
    "44de": function (t, n, e) {
      var r = e("da84");
      t.exports = function (t, n) {
        var e = r.console;
        e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n));
      };
    },
    4840: function (t, n, e) {
      var r = e("825a"),
        i = e("1c0b"),
        o = e("b622"),
        u = o("species");
      t.exports = function (t, n) {
        var e,
          o = r(t).constructor;
        return void 0 === o || void 0 == (e = r(o)[u]) ? n : i(e);
      };
    },
    4930: function (t, n, e) {
      var r = e("d039");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          return !String(Symbol());
        });
    },
    "4d64": function (t, n, e) {
      var r = e("fc6a"),
        i = e("50c4"),
        o = e("23cb"),
        u = function (t) {
          return function (n, e, u) {
            var a,
              c = r(n),
              l = i(c.length),
              s = o(u, l);
            if (t && e != e) {
              while (l > s) if (((a = c[s++]), a != a)) return !0;
            } else
              for (; l > s; s++)
                if ((t || s in c) && c[s] === e) return t || s || 0;
            return !t && -1;
          };
        };
      t.exports = {
        includes: u(!0),
        indexOf: u(!1)
      };
    },
    "4df4": function (t, n, e) {
      "use strict";
      var r = e("0366"),
        i = e("7b0b"),
        o = e("9bdd"),
        u = e("e95a"),
        a = e("50c4"),
        c = e("8418"),
        l = e("35a1");
      t.exports = function (t) {
        var n,
          e,
          s,
          f,
          h,
          p,
          d = i(t),
          g = "function" == typeof this ? this : Array,
          v = arguments.length,
          y = v > 1 ? arguments[1] : void 0,
          m = void 0 !== y,
          b = l(d),
          x = 0;
        if (
          (m && (y = r(y, v > 2 ? arguments[2] : void 0, 2)),
          void 0 == b || (g == Array && u(b)))
        )
          for (n = a(d.length), e = new g(n); n > x; x++)
            (p = m ? y(d[x], x) : d[x]), c(e, x, p);
        else
          for (
            f = b.call(d), h = f.next, e = new g();
            !(s = h.call(f)).done;
            x++
          )
            (p = m ? o(f, y, [s.value, x], !0) : s.value), c(e, x, p);
        return (e.length = x), e;
      };
    },
    "50c4": function (t, n, e) {
      var r = e("a691"),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    },
    5135: function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    5692: function (t, n, e) {
      var r = e("c430"),
        i = e("c6cd");
      (t.exports = function (t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.8.3",
        mode: r ? "pure" : "global",
        copyright: "© 2024 Relação Financeira"
      });
    },
    "56ef": function (t, n, e) {
      var r = e("d066"),
        i = e("241c"),
        o = e("7418"),
        u = e("825a");
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var n = i.f(u(t)),
            e = o.f;
          return e ? n.concat(e(t)) : n;
        };
    },
    "5c6c": function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      };
    },
    "5fb2": function (t, n, e) {
      "use strict";
      var r = 2147483647,
        i = 36,
        o = 1,
        u = 26,
        a = 38,
        c = 700,
        l = 72,
        s = 128,
        f = "-",
        h = /[^\0-\u007E]/,
        p = /[.\u3002\uFF0E\uFF61]/g,
        d = "Overflow: input needs wider integers to process",
        g = i - o,
        v = Math.floor,
        y = String.fromCharCode,
        m = function (t) {
          var n = [],
            e = 0,
            r = t.length;
          while (e < r) {
            var i = t.charCodeAt(e++);
            if (i >= 55296 && i <= 56319 && e < r) {
              var o = t.charCodeAt(e++);
              56320 == (64512 & o)
                ? n.push(((1023 & i) << 10) + (1023 & o) + 65536)
                : (n.push(i), e--);
            } else n.push(i);
          }
          return n;
        },
        b = function (t) {
          return t + 22 + 75 * (t < 26);
        },
        x = function (t, n, e) {
          var r = 0;
          for (
            t = e ? v(t / c) : t >> 1, t += v(t / n);
            t > (g * u) >> 1;
            r += i
          )
            t = v(t / g);
          return v(r + ((g + 1) * t) / (t + a));
        },
        w = function (t) {
          var n = [];
          t = m(t);
          var e,
            a,
            c = t.length,
            h = s,
            p = 0,
            g = l;
          for (e = 0; e < t.length; e++) (a = t[e]), a < 128 && n.push(y(a));
          var w = n.length,
            M = w;
          w && n.push(f);
          while (M < c) {
            var _ = r;
            for (e = 0; e < t.length; e++)
              (a = t[e]), a >= h && a < _ && (_ = a);
            var S = M + 1;
            if (_ - h > v((r - p) / S)) throw RangeError(d);
            for (p += (_ - h) * S, h = _, e = 0; e < t.length; e++) {
              if (((a = t[e]), a < h && ++p > r)) throw RangeError(d);
              if (a == h) {
                for (var j = p, O = i; ; O += i) {
                  var k = O <= g ? o : O >= g + u ? u : O - g;
                  if (j < k) break;
                  var E = j - k,
                    A = i - k;
                  n.push(y(b(k + (E % A)))), (j = v(E / A));
                }
                n.push(y(b(j))), (g = x(p, S, M == w)), (p = 0), ++M;
              }
            }
            ++p, ++h;
          }
          return n.join("");
        };
      t.exports = function (t) {
        var n,
          e,
          r = [],
          i = t.toLowerCase().replace(p, ".").split(".");
        for (n = 0; n < i.length; n++)
          (e = i[n]), r.push(h.test(e) ? "xn--" + w(e) : e);
        return r.join(".");
      };
    },
    "605d": function (t, n, e) {
      var r = e("c6b6"),
        i = e("da84");
      t.exports = "process" == r(i.process);
    },
    "60da": function (t, n, e) {
      "use strict";
      var r = e("83ab"),
        i = e("d039"),
        o = e("df75"),
        u = e("7418"),
        a = e("d1e7"),
        c = e("7b0b"),
        l = e("44ad"),
        s = Object.assign,
        f = Object.defineProperty;
      t.exports =
        !s ||
        i(function () {
          if (
            r &&
            1 !==
              s(
                {
                  b: 1
                },
                s(
                  f({}, "a", {
                    enumerable: !0,
                    get: function () {
                      f(this, "b", {
                        value: 3,
                        enumerable: !1
                      });
                    }
                  }),
                  {
                    b: 2
                  }
                )
              ).b
          )
            return !0;
          var t = {},
            n = {},
            e = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (t[e] = 7),
            i.split("").forEach(function (t) {
              n[t] = t;
            }),
            7 != s({}, t)[e] || o(s({}, n)).join("") != i
          );
        })
          ? function (t, n) {
              var e = c(t),
                i = arguments.length,
                s = 1,
                f = u.f,
                h = a.f;
              while (i > s) {
                var p,
                  d = l(arguments[s++]),
                  g = f ? o(d).concat(f(d)) : o(d),
                  v = g.length,
                  y = 0;
                while (v > y)
                  (p = g[y++]), (r && !h.call(d, p)) || (e[p] = d[p]);
              }
              return e;
            }
          : s;
    },
    6547: function (t, n, e) {
      var r = e("a691"),
        i = e("1d80"),
        o = function (t) {
          return function (n, e) {
            var o,
              u,
              a = String(i(n)),
              c = r(e),
              l = a.length;
            return c < 0 || c >= l
              ? t
                ? ""
                : void 0
              : ((o = a.charCodeAt(c)),
                o < 55296 ||
                o > 56319 ||
                c + 1 === l ||
                (u = a.charCodeAt(c + 1)) < 56320 ||
                u > 57343
                  ? t
                    ? a.charAt(c)
                    : o
                  : t
                  ? a.slice(c, c + 2)
                  : u - 56320 + ((o - 55296) << 10) + 65536);
          };
        };
      t.exports = {
        codeAt: o(!1),
        charAt: o(!0)
      };
    },
    "65f0": function (t, n, e) {
      var r = e("861d"),
        i = e("e8b5"),
        o = e("b622"),
        u = o("species");
      t.exports = function (t, n) {
        var e;
        return (
          i(t) &&
            ((e = t.constructor),
            "function" != typeof e || (e !== Array && !i(e.prototype))
              ? r(e) && ((e = e[u]), null === e && (e = void 0))
              : (e = void 0)),
          new (void 0 === e ? Array : e)(0 === n ? 0 : n)
        );
      };
    },
    "69f3": function (t, n, e) {
      var r,
        i,
        o,
        u = e("7f9a"),
        a = e("da84"),
        c = e("861d"),
        l = e("9112"),
        s = e("5135"),
        f = e("c6cd"),
        h = e("f772"),
        p = e("d012"),
        d = a.WeakMap,
        g = function (t) {
          return o(t) ? i(t) : r(t, {});
        },
        v = function (t) {
          return function (n) {
            var e;
            if (!c(n) || (e = i(n)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return e;
          };
        };
      if (u) {
        var y = f.state || (f.state = new d()),
          m = y.get,
          b = y.has,
          x = y.set;
        (r = function (t, n) {
          return (n.facade = t), x.call(y, t, n), n;
        }),
          (i = function (t) {
            return m.call(y, t) || {};
          }),
          (o = function (t) {
            return b.call(y, t);
          });
      } else {
        var w = h("state");
        (p[w] = !0),
          (r = function (t, n) {
            return (n.facade = t), l(t, w, n), n;
          }),
          (i = function (t) {
            return s(t, w) ? t[w] : {};
          }),
          (o = function (t) {
            return s(t, w);
          });
      }
      t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: g,
        getterFor: v
      };
    },
    "6e58": function (t, n, e) {
      var r, i;
      !(function () {
        var o = {
            version: "3.5.17"
          },
          u = [].slice,
          a = function (t) {
            return u.call(t);
          },
          c = this.document;
        function l(t) {
          return t && (t.ownerDocument || t.document || t).documentElement;
        }
        function s(t) {
          return (
            t &&
            ((t.ownerDocument && t.ownerDocument.defaultView) ||
              (t.document && t) ||
              t.defaultView)
          );
        }
        if (c)
          try {
            a(c.documentElement.childNodes)[0].nodeType;
          } catch (al) {
            a = function (t) {
              var n = t.length,
                e = new Array(n);
              while (n--) e[n] = t[n];
              return e;
            };
          }
        if (
          (Date.now ||
            (Date.now = function () {
              return +new Date();
            }),
          c)
        )
          try {
            c.createElement("DIV").style.setProperty("opacity", 0, "");
          } catch (cl) {
            var f = this.Element.prototype,
              h = f.setAttribute,
              p = f.setAttributeNS,
              d = this.CSSStyleDeclaration.prototype,
              g = d.setProperty;
            (f.setAttribute = function (t, n) {
              h.call(this, t, n + "");
            }),
              (f.setAttributeNS = function (t, n, e) {
                p.call(this, t, n, e + "");
              }),
              (d.setProperty = function (t, n, e) {
                g.call(this, t, n + "", e);
              });
          }
        function v(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        }
        function y(t) {
          return null === t ? NaN : +t;
        }
        function m(t) {
          return !isNaN(t);
        }
        function b(t) {
          return {
            left: function (n, e, r, i) {
              arguments.length < 3 && (r = 0),
                arguments.length < 4 && (i = n.length);
              while (r < i) {
                var o = (r + i) >>> 1;
                t(n[o], e) < 0 ? (r = o + 1) : (i = o);
              }
              return r;
            },
            right: function (n, e, r, i) {
              arguments.length < 3 && (r = 0),
                arguments.length < 4 && (i = n.length);
              while (r < i) {
                var o = (r + i) >>> 1;
                t(n[o], e) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            }
          };
        }
        (o.ascending = v),
          (o.descending = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
          }),
          (o.min = function (t, n) {
            var e,
              r,
              i = -1,
              o = t.length;
            if (1 === arguments.length) {
              while (++i < o)
                if (null != (r = t[i]) && r >= r) {
                  e = r;
                  break;
                }
              while (++i < o) null != (r = t[i]) && e > r && (e = r);
            } else {
              while (++i < o)
                if (null != (r = n.call(t, t[i], i)) && r >= r) {
                  e = r;
                  break;
                }
              while (++i < o)
                null != (r = n.call(t, t[i], i)) && e > r && (e = r);
            }
            return e;
          }),
          (o.max = function (t, n) {
            var e,
              r,
              i = -1,
              o = t.length;
            if (1 === arguments.length) {
              while (++i < o)
                if (null != (r = t[i]) && r >= r) {
                  e = r;
                  break;
                }
              while (++i < o) null != (r = t[i]) && r > e && (e = r);
            } else {
              while (++i < o)
                if (null != (r = n.call(t, t[i], i)) && r >= r) {
                  e = r;
                  break;
                }
              while (++i < o)
                null != (r = n.call(t, t[i], i)) && r > e && (e = r);
            }
            return e;
          }),
          (o.extent = function (t, n) {
            var e,
              r,
              i,
              o = -1,
              u = t.length;
            if (1 === arguments.length) {
              while (++o < u)
                if (null != (r = t[o]) && r >= r) {
                  e = i = r;
                  break;
                }
              while (++o < u)
                null != (r = t[o]) && (e > r && (e = r), i < r && (i = r));
            } else {
              while (++o < u)
                if (null != (r = n.call(t, t[o], o)) && r >= r) {
                  e = i = r;
                  break;
                }
              while (++o < u)
                null != (r = n.call(t, t[o], o)) &&
                  (e > r && (e = r), i < r && (i = r));
            }
            return [e, i];
          }),
          (o.sum = function (t, n) {
            var e,
              r = 0,
              i = t.length,
              o = -1;
            if (1 === arguments.length)
              while (++o < i) m((e = +t[o])) && (r += e);
            else while (++o < i) m((e = +n.call(t, t[o], o))) && (r += e);
            return r;
          }),
          (o.mean = function (t, n) {
            var e,
              r = 0,
              i = t.length,
              o = -1,
              u = i;
            if (1 === arguments.length)
              while (++o < i) m((e = y(t[o]))) ? (r += e) : --u;
            else
              while (++o < i) m((e = y(n.call(t, t[o], o)))) ? (r += e) : --u;
            if (u) return r / u;
          }),
          (o.quantile = function (t, n) {
            var e = (t.length - 1) * n + 1,
              r = Math.floor(e),
              i = +t[r - 1],
              o = e - r;
            return o ? i + o * (t[r] - i) : i;
          }),
          (o.median = function (t, n) {
            var e,
              r = [],
              i = t.length,
              u = -1;
            if (1 === arguments.length)
              while (++u < i) m((e = y(t[u]))) && r.push(e);
            else while (++u < i) m((e = y(n.call(t, t[u], u)))) && r.push(e);
            if (r.length) return o.quantile(r.sort(v), 0.5);
          }),
          (o.variance = function (t, n) {
            var e,
              r,
              i = t.length,
              o = 0,
              u = 0,
              a = -1,
              c = 0;
            if (1 === arguments.length)
              while (++a < i)
                m((e = y(t[a]))) &&
                  ((r = e - o), (o += r / ++c), (u += r * (e - o)));
            else
              while (++a < i)
                m((e = y(n.call(t, t[a], a)))) &&
                  ((r = e - o), (o += r / ++c), (u += r * (e - o)));
            if (c > 1) return u / (c - 1);
          }),
          (o.deviation = function () {
            var t = o.variance.apply(this, arguments);
            return t ? Math.sqrt(t) : t;
          });
        var x = b(v);
        function w(t) {
          return t.length;
        }
        (o.bisectLeft = x.left),
          (o.bisect = o.bisectRight = x.right),
          (o.bisector = function (t) {
            return b(
              1 === t.length
                ? function (n, e) {
                    return v(t(n), e);
                  }
                : t
            );
          }),
          (o.shuffle = function (t, n, e) {
            (o = arguments.length) < 3 && ((e = t.length), o < 2 && (n = 0));
            var r,
              i,
              o = e - n;
            while (o)
              (i = (Math.random() * o--) | 0),
                (r = t[o + n]),
                (t[o + n] = t[i + n]),
                (t[i + n] = r);
            return t;
          }),
          (o.permute = function (t, n) {
            var e = n.length,
              r = new Array(e);
            while (e--) r[e] = t[n[e]];
            return r;
          }),
          (o.pairs = function (t) {
            var n = 0,
              e = t.length - 1,
              r = t[0],
              i = new Array(e < 0 ? 0 : e);
            while (n < e) i[n] = [r, (r = t[++n])];
            return i;
          }),
          (o.transpose = function (t) {
            if (!(i = t.length)) return [];
            for (var n = -1, e = o.min(t, w), r = new Array(e); ++n < e; )
              for (var i, u = -1, a = (r[n] = new Array(i)); ++u < i; )
                a[u] = t[u][n];
            return r;
          }),
          (o.zip = function () {
            return o.transpose(arguments);
          }),
          (o.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return n;
          }),
          (o.values = function (t) {
            var n = [];
            for (var e in t) n.push(t[e]);
            return n;
          }),
          (o.entries = function (t) {
            var n = [];
            for (var e in t)
              n.push({
                key: e,
                value: t[e]
              });
            return n;
          }),
          (o.merge = function (t) {
            var n,
              e,
              r,
              i = t.length,
              o = -1,
              u = 0;
            while (++o < i) u += t[o].length;
            e = new Array(u);
            while (--i >= 0) {
              (r = t[i]), (n = r.length);
              while (--n >= 0) e[--u] = r[n];
            }
            return e;
          });
        var M = Math.abs;
        function _(t) {
          var n = 1;
          while ((t * n) % 1) n *= 10;
          return n;
        }
        function S(t, n) {
          for (var e in n)
            Object.defineProperty(t.prototype, e, {
              value: n[e],
              enumerable: !1
            });
        }
        function j() {
          this._ = Object.create(null);
        }
        (o.range = function (t, n, e) {
          if (
            (arguments.length < 3 &&
              ((e = 1), arguments.length < 2 && ((n = t), (t = 0))),
            (n - t) / e === 1 / 0)
          )
            throw new Error("infinite range");
          var r,
            i = [],
            o = _(M(e)),
            u = -1;
          if (((t *= o), (n *= o), (e *= o), e < 0))
            while ((r = t + e * ++u) > n) i.push(r / o);
          else while ((r = t + e * ++u) < n) i.push(r / o);
          return i;
        }),
          (o.map = function (t, n) {
            var e = new j();
            if (t instanceof j)
              t.forEach(function (t, n) {
                e.set(t, n);
              });
            else if (Array.isArray(t)) {
              var r,
                i = -1,
                o = t.length;
              if (1 === arguments.length) while (++i < o) e.set(i, t[i]);
              else while (++i < o) e.set(n.call(t, (r = t[i]), i), r);
            } else for (var u in t) e.set(u, t[u]);
            return e;
          });
        var O = "__proto__",
          k = "\0";
        function E(t) {
          return (t += "") === O || t[0] === k ? k + t : t;
        }
        function A(t) {
          return (t += "")[0] === k ? t.slice(1) : t;
        }
        function C(t) {
          return E(t) in this._;
        }
        function L(t) {
          return (t = E(t)) in this._ && delete this._[t];
        }
        function N() {
          var t = [];
          for (var n in this._) t.push(A(n));
          return t;
        }
        function T() {
          var t = 0;
          for (var n in this._) ++t;
          return t;
        }
        function R() {
          for (var t in this._) return !1;
          return !0;
        }
        function P() {
          this._ = Object.create(null);
        }
        function F(t) {
          return t;
        }
        function U(t, n, e) {
          return function () {
            var r = e.apply(n, arguments);
            return r === n ? t : r;
          };
        }
        function q(t, n) {
          if (n in t) return n;
          n = n.charAt(0).toUpperCase() + n.slice(1);
          for (var e = 0, r = z.length; e < r; ++e) {
            var i = z[e] + n;
            if (i in t) return i;
          }
        }
        S(j, {
          has: C,
          get: function (t) {
            return this._[E(t)];
          },
          set: function (t, n) {
            return (this._[E(t)] = n);
          },
          remove: L,
          keys: N,
          values: function () {
            var t = [];
            for (var n in this._) t.push(this._[n]);
            return t;
          },
          entries: function () {
            var t = [];
            for (var n in this._)
              t.push({
                key: A(n),
                value: this._[n]
              });
            return t;
          },
          size: T,
          empty: R,
          forEach: function (t) {
            for (var n in this._) t.call(this, A(n), this._[n]);
          }
        }),
          (o.nest = function () {
            var t,
              n,
              e = {},
              r = [],
              i = [];
            function u(i, o, a) {
              if (a >= r.length) return n ? n.call(e, o) : t ? o.sort(t) : o;
              var c,
                l,
                s,
                f,
                h = -1,
                p = o.length,
                d = r[a++],
                g = new j();
              while (++h < p)
                (f = g.get((c = d((l = o[h]))))) ? f.push(l) : g.set(c, [l]);
              return (
                i
                  ? ((l = i()),
                    (s = function (t, n) {
                      l.set(t, u(i, n, a));
                    }))
                  : ((l = {}),
                    (s = function (t, n) {
                      l[t] = u(i, n, a);
                    })),
                g.forEach(s),
                l
              );
            }
            function a(t, n) {
              if (n >= r.length) return t;
              var e = [],
                o = i[n++];
              return (
                t.forEach(function (t, r) {
                  e.push({
                    key: t,
                    values: a(r, n)
                  });
                }),
                o
                  ? e.sort(function (t, n) {
                      return o(t.key, n.key);
                    })
                  : e
              );
            }
            return (
              (e.map = function (t, n) {
                return u(n, t, 0);
              }),
              (e.entries = function (t) {
                return a(u(o.map, t, 0), 0);
              }),
              (e.key = function (t) {
                return r.push(t), e;
              }),
              (e.sortKeys = function (t) {
                return (i[r.length - 1] = t), e;
              }),
              (e.sortValues = function (n) {
                return (t = n), e;
              }),
              (e.rollup = function (t) {
                return (n = t), e;
              }),
              e
            );
          }),
          (o.set = function (t) {
            var n = new P();
            if (t) for (var e = 0, r = t.length; e < r; ++e) n.add(t[e]);
            return n;
          }),
          S(P, {
            has: C,
            add: function (t) {
              return (this._[E((t += ""))] = !0), t;
            },
            remove: L,
            values: N,
            size: T,
            empty: R,
            forEach: function (t) {
              for (var n in this._) t.call(this, A(n));
            }
          }),
          (o.behavior = {}),
          (o.rebind = function (t, n) {
            var e,
              r = 1,
              i = arguments.length;
            while (++r < i) t[(e = arguments[r])] = U(t, n, n[e]);
            return t;
          });
        var z = ["webkit", "ms", "moz", "Moz", "o", "O"];
        function D() {}
        function I() {}
        function B(t) {
          var n = [],
            e = new j();
          function r() {
            var e,
              r = n,
              i = -1,
              o = r.length;
            while (++i < o) (e = r[i].on) && e.apply(this, arguments);
            return t;
          }
          return (
            (r.on = function (r, i) {
              var o,
                u = e.get(r);
              return arguments.length < 2
                ? u && u.on
                : (u &&
                    ((u.on = null),
                    (n = n.slice(0, (o = n.indexOf(u))).concat(n.slice(o + 1))),
                    e.remove(r)),
                  i &&
                    n.push(
                      e.set(r, {
                        on: i
                      })
                    ),
                  t);
            }),
            r
          );
        }
        function H() {
          o.event.preventDefault();
        }
        function V() {
          var t,
            n = o.event;
          while ((t = n.sourceEvent)) n = t;
          return n;
        }
        function $(t) {
          var n = new I(),
            e = 0,
            r = arguments.length;
          while (++e < r) n[arguments[e]] = B(n);
          return (
            (n.of = function (e, r) {
              return function (i) {
                try {
                  var u = (i.sourceEvent = o.event);
                  (i.target = t), (o.event = i), n[i.type].apply(e, r);
                } finally {
                  o.event = u;
                }
              };
            }),
            n
          );
        }
        (o.dispatch = function () {
          var t = new I(),
            n = -1,
            e = arguments.length;
          while (++n < e) t[arguments[n]] = B(t);
          return t;
        }),
          (I.prototype.on = function (t, n) {
            var e = t.indexOf("."),
              r = "";
            if ((e >= 0 && ((r = t.slice(e + 1)), (t = t.slice(0, e))), t))
              return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n);
            if (2 === arguments.length) {
              if (null == n)
                for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
              return this;
            }
          }),
          (o.event = null),
          (o.requote = function (t) {
            return t.replace(Y, "\\$&");
          });
        var Y = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
          W = {}.__proto__
            ? function (t, n) {
                t.__proto__ = n;
              }
            : function (t, n) {
                for (var e in n) t[e] = n[e];
              };
        function Z(t) {
          return W(t, K), t;
        }
        var G = function (t, n) {
            return n.querySelector(t);
          },
          X = function (t, n) {
            return n.querySelectorAll(t);
          },
          J = function (t, n) {
            var e = t.matches || t[q(t, "matchesSelector")];
            return (
              (J = function (t, n) {
                return e.call(t, n);
              }),
              J(t, n)
            );
          };
        "function" === typeof Sizzle &&
          ((G = function (t, n) {
            return Sizzle(t, n)[0] || null;
          }),
          (X = Sizzle),
          (J = Sizzle.matchesSelector)),
          (o.selection = function () {
            return o.select(c.documentElement);
          });
        var K = (o.selection.prototype = []);
        function Q(t) {
          return "function" === typeof t
            ? t
            : function () {
                return G(t, this);
              };
        }
        function tt(t) {
          return "function" === typeof t
            ? t
            : function () {
                return X(t, this);
              };
        }
        (K.select = function (t) {
          var n,
            e,
            r,
            i,
            o = [];
          t = Q(t);
          for (var u = -1, a = this.length; ++u < a; ) {
            o.push((n = [])), (n.parentNode = (r = this[u]).parentNode);
            for (var c = -1, l = r.length; ++c < l; )
              (i = r[c])
                ? (n.push((e = t.call(i, i.__data__, c, u))),
                  e && "__data__" in i && (e.__data__ = i.__data__))
                : n.push(null);
          }
          return Z(o);
        }),
          (K.selectAll = function (t) {
            var n,
              e,
              r = [];
            t = tt(t);
            for (var i = -1, o = this.length; ++i < o; )
              for (var u = this[i], c = -1, l = u.length; ++c < l; )
                (e = u[c]) &&
                  (r.push((n = a(t.call(e, e.__data__, c, i)))),
                  (n.parentNode = e));
            return Z(r);
          });
        var nt = "http://www.w3.org/1999/xhtml",
          et = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: nt,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
          };
        function rt(t, n) {
          function e() {
            this.removeAttribute(t);
          }
          function r() {
            this.removeAttributeNS(t.space, t.local);
          }
          function i() {
            this.setAttribute(t, n);
          }
          function u() {
            this.setAttributeNS(t.space, t.local, n);
          }
          function a() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
          }
          function c() {
            var e = n.apply(this, arguments);
            null == e
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, e);
          }
          return (
            (t = o.ns.qualify(t)),
            null == n
              ? t.local
                ? r
                : e
              : "function" === typeof n
              ? t.local
                ? c
                : a
              : t.local
              ? u
              : i
          );
        }
        function it(t) {
          return t.trim().replace(/\s+/g, " ");
        }
        function ot(t) {
          return new RegExp("(?:^|\\s+)" + o.requote(t) + "(?:\\s+|$)", "g");
        }
        function ut(t) {
          return (t + "").trim().split(/^|\s+/);
        }
        function at(t, n) {
          t = ut(t).map(ct);
          var e = t.length;
          function r() {
            var r = -1;
            while (++r < e) t[r](this, n);
          }
          function i() {
            var r = -1,
              i = n.apply(this, arguments);
            while (++r < e) t[r](this, i);
          }
          return "function" === typeof n ? i : r;
        }
        function ct(t) {
          var n = ot(t);
          return function (e, r) {
            if ((i = e.classList)) return r ? i.add(t) : i.remove(t);
            var i = e.getAttribute("class") || "";
            r
              ? ((n.lastIndex = 0),
                n.test(i) || e.setAttribute("class", it(i + " " + t)))
              : e.setAttribute("class", it(i.replace(n, " ")));
          };
        }
        function lt(t, n, e) {
          function r() {
            this.style.removeProperty(t);
          }
          function i() {
            this.style.setProperty(t, n, e);
          }
          function o() {
            var r = n.apply(this, arguments);
            null == r
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, r, e);
          }
          return null == n ? r : "function" === typeof n ? o : i;
        }
        function st(t, n) {
          function e() {
            delete this[t];
          }
          function r() {
            this[t] = n;
          }
          function i() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : (this[t] = e);
          }
          return null == n ? e : "function" === typeof n ? i : r;
        }
        function ft(t) {
          function n() {
            var n = this.ownerDocument,
              e = this.namespaceURI;
            return e === nt && n.documentElement.namespaceURI === nt
              ? n.createElement(t)
              : n.createElementNS(e, t);
          }
          function e() {
            return this.ownerDocument.createElementNS(t.space, t.local);
          }
          return "function" === typeof t
            ? t
            : (t = o.ns.qualify(t)).local
            ? e
            : n;
        }
        function ht() {
          var t = this.parentNode;
          t && t.removeChild(this);
        }
        function pt(t) {
          return {
            __data__: t
          };
        }
        function dt(t) {
          return function () {
            return J(this, t);
          };
        }
        function gt(t) {
          return (
            arguments.length || (t = v),
            function (n, e) {
              return n && e ? t(n.__data__, e.__data__) : !n - !e;
            }
          );
        }
        function vt(t, n) {
          for (var e = 0, r = t.length; e < r; e++)
            for (var i, o = t[e], u = 0, a = o.length; u < a; u++)
              (i = o[u]) && n(i, u, e);
          return t;
        }
        function yt(t) {
          return W(t, mt), t;
        }
        (o.ns = {
          prefix: et,
          qualify: function (t) {
            var n = t.indexOf(":"),
              e = t;
            return (
              n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
              et.hasOwnProperty(e)
                ? {
                    space: et[e],
                    local: t
                  }
                : t
            );
          }
        }),
          (K.attr = function (t, n) {
            if (arguments.length < 2) {
              if ("string" === typeof t) {
                var e = this.node();
                return (
                  (t = o.ns.qualify(t)),
                  t.local
                    ? e.getAttributeNS(t.space, t.local)
                    : e.getAttribute(t)
                );
              }
              for (n in t) this.each(rt(n, t[n]));
              return this;
            }
            return this.each(rt(t, n));
          }),
          (K.classed = function (t, n) {
            if (arguments.length < 2) {
              if ("string" === typeof t) {
                var e = this.node(),
                  r = (t = ut(t)).length,
                  i = -1;
                if ((n = e.classList)) {
                  while (++i < r) if (!n.contains(t[i])) return !1;
                } else {
                  n = e.getAttribute("class");
                  while (++i < r) if (!ot(t[i]).test(n)) return !1;
                }
                return !0;
              }
              for (n in t) this.each(at(n, t[n]));
              return this;
            }
            return this.each(at(t, n));
          }),
          (K.style = function (t, n, e) {
            var r = arguments.length;
            if (r < 3) {
              if ("string" !== typeof t) {
                for (e in (r < 2 && (n = ""), t)) this.each(lt(e, t[e], n));
                return this;
              }
              if (r < 2) {
                var i = this.node();
                return s(i).getComputedStyle(i, null).getPropertyValue(t);
              }
              e = "";
            }
            return this.each(lt(t, n, e));
          }),
          (K.property = function (t, n) {
            if (arguments.length < 2) {
              if ("string" === typeof t) return this.node()[t];
              for (n in t) this.each(st(n, t[n]));
              return this;
            }
            return this.each(st(t, n));
          }),
          (K.text = function (t) {
            return arguments.length
              ? this.each(
                  "function" === typeof t
                    ? function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n;
                      }
                    : null == t
                    ? function () {
                        this.textContent = "";
                      }
                    : function () {
                        this.textContent = t;
                      }
                )
              : this.node().textContent;
          }),
          (K.html = function (t) {
            return arguments.length
              ? this.each(
                  "function" === typeof t
                    ? function () {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n;
                      }
                    : null == t
                    ? function () {
                        this.innerHTML = "";
                      }
                    : function () {
                        this.innerHTML = t;
                      }
                )
              : this.node().innerHTML;
          }),
          (K.append = function (t) {
            return (
              (t = ft(t)),
              this.select(function () {
                return this.appendChild(t.apply(this, arguments));
              })
            );
          }),
          (K.insert = function (t, n) {
            return (
              (t = ft(t)),
              (n = Q(n)),
              this.select(function () {
                return this.insertBefore(
                  t.apply(this, arguments),
                  n.apply(this, arguments) || null
                );
              })
            );
          }),
          (K.remove = function () {
            return this.each(ht);
          }),
          (K.data = function (t, n) {
            var e,
              r,
              i = -1,
              o = this.length;
            if (!arguments.length) {
              t = new Array((o = (e = this[0]).length));
              while (++i < o) (r = e[i]) && (t[i] = r.__data__);
              return t;
            }
            function u(t, e) {
              var r,
                i,
                o,
                u = t.length,
                s = e.length,
                f = Math.min(u, s),
                h = new Array(s),
                p = new Array(s),
                d = new Array(u);
              if (n) {
                var g,
                  v = new j(),
                  y = new Array(u);
                for (r = -1; ++r < u; )
                  (i = t[r]) &&
                    (v.has((g = n.call(i, i.__data__, r)))
                      ? (d[r] = i)
                      : v.set(g, i),
                    (y[r] = g));
                for (r = -1; ++r < s; )
                  (i = v.get((g = n.call(e, (o = e[r]), r))))
                    ? !0 !== i && ((h[r] = i), (i.__data__ = o))
                    : (p[r] = pt(o)),
                    v.set(g, !0);
                for (r = -1; ++r < u; )
                  r in y && !0 !== v.get(y[r]) && (d[r] = t[r]);
              } else {
                for (r = -1; ++r < f; )
                  (i = t[r]),
                    (o = e[r]),
                    i ? ((i.__data__ = o), (h[r] = i)) : (p[r] = pt(o));
                for (; r < s; ++r) p[r] = pt(e[r]);
                for (; r < u; ++r) d[r] = t[r];
              }
              (p.update = h),
                (p.parentNode = h.parentNode = d.parentNode = t.parentNode),
                a.push(p),
                c.push(h),
                l.push(d);
            }
            var a = yt([]),
              c = Z([]),
              l = Z([]);
            if ("function" === typeof t)
              while (++i < o)
                u((e = this[i]), t.call(e, e.parentNode.__data__, i));
            else while (++i < o) u((e = this[i]), t);
            return (
              (c.enter = function () {
                return a;
              }),
              (c.exit = function () {
                return l;
              }),
              c
            );
          }),
          (K.datum = function (t) {
            return arguments.length
              ? this.property("__data__", t)
              : this.property("__data__");
          }),
          (K.filter = function (t) {
            var n,
              e,
              r,
              i = [];
            "function" !== typeof t && (t = dt(t));
            for (var o = 0, u = this.length; o < u; o++) {
              i.push((n = [])), (n.parentNode = (e = this[o]).parentNode);
              for (var a = 0, c = e.length; a < c; a++)
                (r = e[a]) && t.call(r, r.__data__, a, o) && n.push(r);
            }
            return Z(i);
          }),
          (K.order = function () {
            for (var t = -1, n = this.length; ++t < n; )
              for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0; )
                (e = r[i]) &&
                  (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o),
                  (o = e));
            return this;
          }),
          (K.sort = function (t) {
            t = gt.apply(this, arguments);
            for (var n = -1, e = this.length; ++n < e; ) this[n].sort(t);
            return this.order();
          }),
          (K.each = function (t) {
            return vt(this, function (n, e, r) {
              t.call(n, n.__data__, e, r);
            });
          }),
          (K.call = function (t) {
            var n = a(arguments);
            return t.apply((n[0] = this), n), this;
          }),
          (K.empty = function () {
            return !this.node();
          }),
          (K.node = function () {
            for (var t = 0, n = this.length; t < n; t++)
              for (var e = this[t], r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                if (o) return o;
              }
            return null;
          }),
          (K.size = function () {
            var t = 0;
            return (
              vt(this, function () {
                ++t;
              }),
              t
            );
          });
        var mt = [];
        function bt(t) {
          var n, e;
          return function (r, i, o) {
            var u,
              a = t[o].update,
              c = a.length;
            o != e && ((e = o), (n = 0)), i >= n && (n = i + 1);
            while (!(u = a[n]) && ++n < c);
            return u;
          };
        }
        function xt(t, n, e) {
          var r = "__on" + t,
            i = t.indexOf("."),
            u = Mt;
          i > 0 && (t = t.slice(0, i));
          var c = wt.get(t);
          function l() {
            var n = this[r];
            n && (this.removeEventListener(t, n, n.$), delete this[r]);
          }
          function s() {
            var i = u(n, a(arguments));
            l.call(this),
              this.addEventListener(t, (this[r] = i), (i.$ = e)),
              (i._ = n);
          }
          function f() {
            var n,
              e = new RegExp("^__on([^.]+)" + o.requote(t) + "$");
            for (var r in this)
              if ((n = r.match(e))) {
                var i = this[r];
                this.removeEventListener(n[1], i, i.$), delete this[r];
              }
          }
          return c && ((t = c), (u = _t)), i ? (n ? s : l) : n ? D : f;
        }
        (o.selection.enter = yt),
          (o.selection.enter.prototype = mt),
          (mt.append = K.append),
          (mt.empty = K.empty),
          (mt.node = K.node),
          (mt.call = K.call),
          (mt.size = K.size),
          (mt.select = function (t) {
            for (
              var n, e, r, i, o, u = [], a = -1, c = this.length;
              ++a < c;

            ) {
              (r = (i = this[a]).update),
                u.push((n = [])),
                (n.parentNode = i.parentNode);
              for (var l = -1, s = i.length; ++l < s; )
                (o = i[l])
                  ? (n.push(
                      (r[l] = e = t.call(i.parentNode, o.__data__, l, a))
                    ),
                    (e.__data__ = o.__data__))
                  : n.push(null);
            }
            return Z(u);
          }),
          (mt.insert = function (t, n) {
            return (
              arguments.length < 2 && (n = bt(this)), K.insert.call(this, t, n)
            );
          }),
          (o.select = function (t) {
            var n;
            return (
              "string" === typeof t
                ? ((n = [G(t, c)]), (n.parentNode = c.documentElement))
                : ((n = [t]), (n.parentNode = l(t))),
              Z([n])
            );
          }),
          (o.selectAll = function (t) {
            var n;
            return (
              "string" === typeof t
                ? ((n = a(X(t, c))), (n.parentNode = c.documentElement))
                : ((n = a(t)), (n.parentNode = null)),
              Z([n])
            );
          }),
          (K.on = function (t, n, e) {
            var r = arguments.length;
            if (r < 3) {
              if ("string" !== typeof t) {
                for (e in (r < 2 && (n = !1), t)) this.each(xt(e, t[e], n));
                return this;
              }
              if (r < 2) return (r = this.node()["__on" + t]) && r._;
              e = !1;
            }
            return this.each(xt(t, n, e));
          });
        var wt = o.map({
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        });
        function Mt(t, n) {
          return function (e) {
            var r = o.event;
            (o.event = e), (n[0] = this.__data__);
            try {
              t.apply(this, n);
            } finally {
              o.event = r;
            }
          };
        }
        function _t(t, n) {
          var e = Mt(t, n);
          return function (t) {
            var n = this,
              r = t.relatedTarget;
            (r && (r === n || 8 & r.compareDocumentPosition(n))) ||
              e.call(n, t);
          };
        }
        c &&
          wt.forEach(function (t) {
            "on" + t in c && wt.remove(t);
          });
        var St,
          jt = 0;
        function Ot(t) {
          var n = ".dragsuppress-" + ++jt,
            e = "click" + n,
            r = o
              .select(s(t))
              .on("touchmove" + n, H)
              .on("dragstart" + n, H)
              .on("selectstart" + n, H);
          if (
            (null == St &&
              (St = !("onselectstart" in t) && q(t.style, "userSelect")),
            St)
          ) {
            var i = l(t).style,
              u = i[St];
            i[St] = "none";
          }
          return function (t) {
            if ((r.on(n, null), St && (i[St] = u), t)) {
              var o = function () {
                r.on(e, null);
              };
              r.on(
                e,
                function () {
                  H(), o();
                },
                !0
              ),
                setTimeout(o, 0);
            }
          };
        }
        o.mouse = function (t) {
          return Et(t, V());
        };
        var kt =
          this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        function Et(t, n) {
          n.changedTouches && (n = n.changedTouches[0]);
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (kt < 0) {
              var i = s(t);
              if (i.scrollX || i.scrollY) {
                e = o.select("body").append("svg").style(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                  },
                  "important"
                );
                var u = e[0][0].getScreenCTM();
                (kt = !(u.f || u.e)), e.remove();
              }
            }
            return (
              kt
                ? ((r.x = n.pageX), (r.y = n.pageY))
                : ((r.x = n.clientX), (r.y = n.clientY)),
              (r = r.matrixTransform(t.getScreenCTM().inverse())),
              [r.x, r.y]
            );
          }
          var a = t.getBoundingClientRect();
          return [
            n.clientX - a.left - t.clientLeft,
            n.clientY - a.top - t.clientTop
          ];
        }
        function At() {
          return o.event.changedTouches[0].identifier;
        }
        (o.touch = function (t, n, e) {
          if ((arguments.length < 3 && ((e = n), (n = V().changedTouches)), n))
            for (var r, i = 0, o = n.length; i < o; ++i)
              if ((r = n[i]).identifier === e) return Et(t, r);
        }),
          (o.behavior.drag = function () {
            var t = $(i, "drag", "dragstart", "dragend"),
              n = null,
              e = u(D, o.mouse, s, "mousemove", "mouseup"),
              r = u(At, o.touch, F, "touchmove", "touchend");
            function i() {
              this.on("mousedown.drag", e).on("touchstart.drag", r);
            }
            function u(e, r, i, u, a) {
              return function () {
                var c,
                  l = this,
                  s = o.event.target.correspondingElement || o.event.target,
                  f = l.parentNode,
                  h = t.of(l, arguments),
                  p = 0,
                  d = e(),
                  g = ".drag" + (null == d ? "" : "-" + d),
                  v = o
                    .select(i(s))
                    .on(u + g, b)
                    .on(a + g, x),
                  y = Ot(s),
                  m = r(f, d);
                function b() {
                  var t,
                    n,
                    e = r(f, d);
                  e &&
                    ((t = e[0] - m[0]),
                    (n = e[1] - m[1]),
                    (p |= t | n),
                    (m = e),
                    h({
                      type: "drag",
                      x: e[0] + c[0],
                      y: e[1] + c[1],
                      dx: t,
                      dy: n
                    }));
                }
                function x() {
                  r(f, d) &&
                    (v.on(u + g, null).on(a + g, null),
                    y(p),
                    h({
                      type: "dragend"
                    }));
                }
                n
                  ? ((c = n.apply(l, arguments)),
                    (c = [c.x - m[0], c.y - m[1]]))
                  : (c = [0, 0]),
                  h({
                    type: "dragstart"
                  });
              };
            }
            return (
              (i.origin = function (t) {
                return arguments.length ? ((n = t), i) : n;
              }),
              o.rebind(i, t, "on")
            );
          }),
          (o.touches = function (t, n) {
            return (
              arguments.length < 2 && (n = V().touches),
              n
                ? a(n).map(function (n) {
                    var e = Et(t, n);
                    return (e.identifier = n.identifier), e;
                  })
                : []
            );
          });
        var Ct = 1e-6,
          Lt = Ct * Ct,
          Nt = Math.PI,
          Tt = 2 * Nt,
          Rt = Tt - Ct,
          Pt = Nt / 2,
          Ft = Nt / 180,
          Ut = 180 / Nt;
        function qt(t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function zt(t, n, e) {
          return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
        }
        function Dt(t) {
          return t > 1 ? 0 : t < -1 ? Nt : Math.acos(t);
        }
        function It(t) {
          return t > 1 ? Pt : t < -1 ? -Pt : Math.asin(t);
        }
        function Bt(t) {
          return ((t = Math.exp(t)) - 1 / t) / 2;
        }
        function Ht(t) {
          return ((t = Math.exp(t)) + 1 / t) / 2;
        }
        function Vt(t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1);
        }
        function $t(t) {
          return (t = Math.sin(t / 2)) * t;
        }
        var Yt = Math.SQRT2,
          Wt = 2,
          Zt = 4;
        (o.interpolateZoom = function (t, n) {
          var e,
            r,
            i = t[0],
            o = t[1],
            u = t[2],
            a = n[0],
            c = n[1],
            l = n[2],
            s = a - i,
            f = c - o,
            h = s * s + f * f;
          if (h < Lt)
            (r = Math.log(l / u) / Yt),
              (e = function (t) {
                return [i + t * s, o + t * f, u * Math.exp(Yt * t * r)];
              });
          else {
            var p = Math.sqrt(h),
              d = (l * l - u * u + Zt * h) / (2 * u * Wt * p),
              g = (l * l - u * u - Zt * h) / (2 * l * Wt * p),
              v = Math.log(Math.sqrt(d * d + 1) - d),
              y = Math.log(Math.sqrt(g * g + 1) - g);
            (r = (y - v) / Yt),
              (e = function (t) {
                var n = t * r,
                  e = Ht(v),
                  a = (u / (Wt * p)) * (e * Vt(Yt * n + v) - Bt(v));
                return [i + a * s, o + a * f, (u * e) / Ht(Yt * n + v)];
              });
          }
          return (e.duration = 1e3 * r), e;
        }),
          (o.behavior.zoom = function () {
            var t,
              n,
              e,
              r,
              i,
              u,
              a,
              l,
              f,
              h = {
                x: 0,
                y: 0,
                k: 1
              },
              p = [960, 500],
              d = Jt,
              g = 250,
              v = 0,
              y = "mousedown.zoom",
              m = "mousemove.zoom",
              b = "mouseup.zoom",
              x = "touchstart.zoom",
              w = $(M, "zoomstart", "zoom", "zoomend");
            function M(t) {
              t.on(y, N)
                .on(Xt + ".zoom", R)
                .on("dblclick.zoom", P)
                .on(x, T);
            }
            function _(t) {
              return [(t[0] - h.x) / h.k, (t[1] - h.y) / h.k];
            }
            function S(t) {
              return [t[0] * h.k + h.x, t[1] * h.k + h.y];
            }
            function j(t) {
              h.k = Math.max(d[0], Math.min(d[1], t));
            }
            function O(t, n) {
              (n = S(n)), (h.x += t[0] - n[0]), (h.y += t[1] - n[1]);
            }
            function k(t, e, r, i) {
              (t.__chart__ = {
                x: h.x,
                y: h.y,
                k: h.k
              }),
                j(Math.pow(2, i)),
                O((n = e), r),
                (t = o.select(t)),
                g > 0 && (t = t.transition().duration(g)),
                t.call(M.event);
            }
            function E() {
              a &&
                a.domain(
                  u
                    .range()
                    .map(function (t) {
                      return (t - h.x) / h.k;
                    })
                    .map(u.invert)
                ),
                f &&
                  f.domain(
                    l
                      .range()
                      .map(function (t) {
                        return (t - h.y) / h.k;
                      })
                      .map(l.invert)
                  );
            }
            function A(t) {
              v++ ||
                t({
                  type: "zoomstart"
                });
            }
            function C(t) {
              E(),
                t({
                  type: "zoom",
                  scale: h.k,
                  translate: [h.x, h.y]
                });
            }
            function L(t) {
              --v ||
                (t({
                  type: "zoomend"
                }),
                (n = null));
            }
            function N() {
              var t = this,
                n = w.of(t, arguments),
                e = 0,
                r = o.select(s(t)).on(m, a).on(b, c),
                i = _(o.mouse(t)),
                u = Ot(t);
              function a() {
                (e = 1), O(o.mouse(t), i), C(n);
              }
              function c() {
                r.on(m, null).on(b, null), u(e), L(n);
              }
              Cc.call(t), A(n);
            }
            function T() {
              var t,
                n = this,
                e = w.of(n, arguments),
                r = {},
                u = 0,
                a = ".zoom-" + o.event.changedTouches[0].identifier,
                c = "touchmove" + a,
                l = "touchend" + a,
                s = [],
                f = o.select(n),
                p = Ot(n);
              function d() {
                var e = o.touches(n);
                return (
                  (t = h.k),
                  e.forEach(function (t) {
                    t.identifier in r && (r[t.identifier] = _(t));
                  }),
                  e
                );
              }
              function g() {
                var t = o.event.target;
                o.select(t).on(c, v).on(l, m), s.push(t);
                for (
                  var e = o.event.changedTouches, a = 0, f = e.length;
                  a < f;
                  ++a
                )
                  r[e[a].identifier] = null;
                var p = d(),
                  g = Date.now();
                if (1 === p.length) {
                  if (g - i < 500) {
                    var y = p[0];
                    k(
                      n,
                      y,
                      r[y.identifier],
                      Math.floor(Math.log(h.k) / Math.LN2) + 1
                    ),
                      H();
                  }
                  i = g;
                } else if (p.length > 1) {
                  y = p[0];
                  var b = p[1],
                    x = y[0] - b[0],
                    w = y[1] - b[1];
                  u = x * x + w * w;
                }
              }
              function v() {
                var a,
                  c,
                  l,
                  s,
                  f = o.touches(n);
                Cc.call(n);
                for (var h = 0, p = f.length; h < p; ++h, s = null)
                  if (((l = f[h]), (s = r[l.identifier]))) {
                    if (c) break;
                    (a = l), (c = s);
                  }
                if (s) {
                  var d = (d = l[0] - a[0]) * d + (d = l[1] - a[1]) * d,
                    g = u && Math.sqrt(d / u);
                  (a = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2]),
                    (c = [(c[0] + s[0]) / 2, (c[1] + s[1]) / 2]),
                    j(g * t);
                }
                (i = null), O(a, c), C(e);
              }
              function m() {
                if (o.event.touches.length) {
                  for (
                    var t = o.event.changedTouches, n = 0, i = t.length;
                    n < i;
                    ++n
                  )
                    delete r[t[n].identifier];
                  for (var u in r) return void d();
                }
                o.selectAll(s).on(a, null), f.on(y, N).on(x, T), p(), L(e);
              }
              g(), A(e), f.on(y, null).on(x, g);
            }
            function R() {
              var i = w.of(this, arguments);
              r
                ? clearTimeout(r)
                : (Cc.call(this), (t = _((n = e || o.mouse(this)))), A(i)),
                (r = setTimeout(function () {
                  (r = null), L(i);
                }, 50)),
                H(),
                j(Math.pow(2, 0.002 * Gt()) * h.k),
                O(n, t),
                C(i);
            }
            function P() {
              var t = o.mouse(this),
                n = Math.log(h.k) / Math.LN2;
              k(
                this,
                t,
                _(t),
                o.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1
              );
            }
            return (
              Xt ||
                (Xt =
                  "onwheel" in c
                    ? ((Gt = function () {
                        return -o.event.deltaY * (o.event.deltaMode ? 120 : 1);
                      }),
                      "wheel")
                    : "onmousewheel" in c
                    ? ((Gt = function () {
                        return o.event.wheelDelta;
                      }),
                      "mousewheel")
                    : ((Gt = function () {
                        return -o.event.detail;
                      }),
                      "MozMousePixelScroll")),
              (M.event = function (t) {
                t.each(function () {
                  var t = w.of(this, arguments),
                    e = h;
                  Tc
                    ? o
                        .select(this)
                        .transition()
                        .each("start.zoom", function () {
                          (h = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                          }),
                            A(t);
                        })
                        .tween("zoom:zoom", function () {
                          var r = p[0],
                            i = p[1],
                            u = n ? n[0] : r / 2,
                            a = n ? n[1] : i / 2,
                            c = o.interpolateZoom(
                              [(u - h.x) / h.k, (a - h.y) / h.k, r / h.k],
                              [(u - e.x) / e.k, (a - e.y) / e.k, r / e.k]
                            );
                          return function (n) {
                            var e = c(n),
                              i = r / e[2];
                            (this.__chart__ = h = {
                              x: u - e[0] * i,
                              y: a - e[1] * i,
                              k: i
                            }),
                              C(t);
                          };
                        })
                        .each("interrupt.zoom", function () {
                          L(t);
                        })
                        .each("end.zoom", function () {
                          L(t);
                        })
                    : ((this.__chart__ = h), A(t), C(t), L(t));
                });
              }),
              (M.translate = function (t) {
                return arguments.length
                  ? ((h = {
                      x: +t[0],
                      y: +t[1],
                      k: h.k
                    }),
                    E(),
                    M)
                  : [h.x, h.y];
              }),
              (M.scale = function (t) {
                return arguments.length
                  ? ((h = {
                      x: h.x,
                      y: h.y,
                      k: null
                    }),
                    j(+t),
                    E(),
                    M)
                  : h.k;
              }),
              (M.scaleExtent = function (t) {
                return arguments.length
                  ? ((d = null == t ? Jt : [+t[0], +t[1]]), M)
                  : d;
              }),
              (M.center = function (t) {
                return arguments.length ? ((e = t && [+t[0], +t[1]]), M) : e;
              }),
              (M.size = function (t) {
                return arguments.length ? ((p = t && [+t[0], +t[1]]), M) : p;
              }),
              (M.duration = function (t) {
                return arguments.length ? ((g = +t), M) : g;
              }),
              (M.x = function (t) {
                return arguments.length
                  ? ((a = t),
                    (u = t.copy()),
                    (h = {
                      x: 0,
                      y: 0,
                      k: 1
                    }),
                    M)
                  : a;
              }),
              (M.y = function (t) {
                return arguments.length
                  ? ((f = t),
                    (l = t.copy()),
                    (h = {
                      x: 0,
                      y: 0,
                      k: 1
                    }),
                    M)
                  : f;
              }),
              o.rebind(M, w, "on")
            );
          });
        var Gt,
          Xt,
          Jt = [0, 1 / 0];
        function Kt() {}
        function Qt(t, n, e) {
          return this instanceof Qt
            ? ((this.h = +t), (this.s = +n), void (this.l = +e))
            : arguments.length < 2
            ? t instanceof Qt
              ? new Qt(t.h, t.s, t.l)
              : Mn("" + t, _n, Qt)
            : new Qt(t, n, e);
        }
        (o.color = Kt),
          (Kt.prototype.toString = function () {
            return this.rgb() + "";
          }),
          (o.hsl = Qt);
        var tn = (Qt.prototype = new Kt());
        function nn(t, n, e) {
          var r, i;
          function o(t) {
            return (
              t > 360 ? (t -= 360) : t < 0 && (t += 360),
              t < 60
                ? r + ((i - r) * t) / 60
                : t < 180
                ? i
                : t < 240
                ? r + ((i - r) * (240 - t)) / 60
                : r
            );
          }
          function u(t) {
            return Math.round(255 * o(t));
          }
          return (
            (t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t),
            (n = isNaN(n) || n < 0 ? 0 : n > 1 ? 1 : n),
            (e = e < 0 ? 0 : e > 1 ? 1 : e),
            (i = e <= 0.5 ? e * (1 + n) : e + n - e * n),
            (r = 2 * e - i),
            new yn(u(t + 120), u(t), u(t - 120))
          );
        }
        function en(t, n, e) {
          return this instanceof en
            ? ((this.h = +t), (this.c = +n), void (this.l = +e))
            : arguments.length < 2
            ? t instanceof en
              ? new en(t.h, t.c, t.l)
              : pn(
                  t instanceof un
                    ? t.l
                    : (t = Sn((t = o.rgb(t)).r, t.g, t.b)).l,
                  t.a,
                  t.b
                )
            : new en(t, n, e);
        }
        (tn.brighter = function (t) {
          return (
            (t = Math.pow(0.7, arguments.length ? t : 1)),
            new Qt(this.h, this.s, this.l / t)
          );
        }),
          (tn.darker = function (t) {
            return (
              (t = Math.pow(0.7, arguments.length ? t : 1)),
              new Qt(this.h, this.s, t * this.l)
            );
          }),
          (tn.rgb = function () {
            return nn(this.h, this.s, this.l);
          }),
          (o.hcl = en);
        var rn = (en.prototype = new Kt());
        function on(t, n, e) {
          return (
            isNaN(t) && (t = 0),
            isNaN(n) && (n = 0),
            new un(e, Math.cos((t *= Ft)) * n, Math.sin(t) * n)
          );
        }
        function un(t, n, e) {
          return this instanceof un
            ? ((this.l = +t), (this.a = +n), void (this.b = +e))
            : arguments.length < 2
            ? t instanceof un
              ? new un(t.l, t.a, t.b)
              : t instanceof en
              ? on(t.h, t.c, t.l)
              : Sn((t = yn(t)).r, t.g, t.b)
            : new un(t, n, e);
        }
        (rn.brighter = function (t) {
          return new en(
            this.h,
            this.c,
            Math.min(100, this.l + an * (arguments.length ? t : 1))
          );
        }),
          (rn.darker = function (t) {
            return new en(
              this.h,
              this.c,
              Math.max(0, this.l - an * (arguments.length ? t : 1))
            );
          }),
          (rn.rgb = function () {
            return on(this.h, this.c, this.l).rgb();
          }),
          (o.lab = un);
        var an = 18,
          cn = 0.95047,
          ln = 1,
          sn = 1.08883,
          fn = (un.prototype = new Kt());
        function hn(t, n, e) {
          var r = (t + 16) / 116,
            i = r + n / 500,
            o = r - e / 200;
          return (
            (i = dn(i) * cn),
            (r = dn(r) * ln),
            (o = dn(o) * sn),
            new yn(
              vn(3.2404542 * i - 1.5371385 * r - 0.4985314 * o),
              vn(-0.969266 * i + 1.8760108 * r + 0.041556 * o),
              vn(0.0556434 * i - 0.2040259 * r + 1.0572252 * o)
            )
          );
        }
        function pn(t, n, e) {
          return t > 0
            ? new en(Math.atan2(e, n) * Ut, Math.sqrt(n * n + e * e), t)
            : new en(NaN, NaN, t);
        }
        function dn(t) {
          return t > 0.206893034 ? t * t * t : (t - 4 / 29) / 7.787037;
        }
        function gn(t) {
          return t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29;
        }
        function vn(t) {
          return Math.round(
            255 *
              (t <= 0.00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
          );
        }
        function yn(t, n, e) {
          return this instanceof yn
            ? ((this.r = ~~t), (this.g = ~~n), void (this.b = ~~e))
            : arguments.length < 2
            ? t instanceof yn
              ? new yn(t.r, t.g, t.b)
              : Mn("" + t, yn, nn)
            : new yn(t, n, e);
        }
        function mn(t) {
          return new yn(t >> 16, (t >> 8) & 255, 255 & t);
        }
        function bn(t) {
          return mn(t) + "";
        }
        (fn.brighter = function (t) {
          return new un(
            Math.min(100, this.l + an * (arguments.length ? t : 1)),
            this.a,
            this.b
          );
        }),
          (fn.darker = function (t) {
            return new un(
              Math.max(0, this.l - an * (arguments.length ? t : 1)),
              this.a,
              this.b
            );
          }),
          (fn.rgb = function () {
            return hn(this.l, this.a, this.b);
          }),
          (o.rgb = yn);
        var xn = (yn.prototype = new Kt());
        function wn(t) {
          return t < 16
            ? "0" + Math.max(0, t).toString(16)
            : Math.min(255, t).toString(16);
        }
        function Mn(t, n, e) {
          var r,
            i,
            o,
            u = 0,
            a = 0,
            c = 0;
          if (((r = /([a-z]+)\((.*)\)/.exec((t = t.toLowerCase()))), r))
            switch (((i = r[2].split(",")), r[1])) {
              case "hsl":
                return e(
                  parseFloat(i[0]),
                  parseFloat(i[1]) / 100,
                  parseFloat(i[2]) / 100
                );
              case "rgb":
                return n(On(i[0]), On(i[1]), On(i[2]));
            }
          return (o = kn.get(t))
            ? n(o.r, o.g, o.b)
            : (null == t ||
                "#" !== t.charAt(0) ||
                isNaN((o = parseInt(t.slice(1), 16))) ||
                (4 === t.length
                  ? ((u = (3840 & o) >> 4),
                    (u |= u >> 4),
                    (a = 240 & o),
                    (a |= a >> 4),
                    (c = 15 & o),
                    (c |= c << 4))
                  : 7 === t.length &&
                    ((u = (16711680 & o) >> 16),
                    (a = (65280 & o) >> 8),
                    (c = 255 & o))),
              n(u, a, c));
        }
        function _n(t, n, e) {
          var r,
            i,
            o = Math.min((t /= 255), (n /= 255), (e /= 255)),
            u = Math.max(t, n, e),
            a = u - o,
            c = (u + o) / 2;
          return (
            a
              ? ((i = c < 0.5 ? a / (u + o) : a / (2 - u - o)),
                (r =
                  t == u
                    ? (n - e) / a + (n < e ? 6 : 0)
                    : n == u
                    ? (e - t) / a + 2
                    : (t - n) / a + 4),
                (r *= 60))
              : ((r = NaN), (i = c > 0 && c < 1 ? 0 : r)),
            new Qt(r, i, c)
          );
        }
        function Sn(t, n, e) {
          (t = jn(t)), (n = jn(n)), (e = jn(e));
          var r = gn((0.4124564 * t + 0.3575761 * n + 0.1804375 * e) / cn),
            i = gn((0.2126729 * t + 0.7151522 * n + 0.072175 * e) / ln),
            o = gn((0.0193339 * t + 0.119192 * n + 0.9503041 * e) / sn);
          return un(116 * i - 16, 500 * (r - i), 200 * (i - o));
        }
        function jn(t) {
          return (t /= 255) <= 0.04045
            ? t / 12.92
            : Math.pow((t + 0.055) / 1.055, 2.4);
        }
        function On(t) {
          var n = parseFloat(t);
          return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n;
        }
        (xn.brighter = function (t) {
          t = Math.pow(0.7, arguments.length ? t : 1);
          var n = this.r,
            e = this.g,
            r = this.b,
            i = 30;
          return n || e || r
            ? (n && n < i && (n = i),
              e && e < i && (e = i),
              r && r < i && (r = i),
              new yn(
                Math.min(255, n / t),
                Math.min(255, e / t),
                Math.min(255, r / t)
              ))
            : new yn(i, i, i);
        }),
          (xn.darker = function (t) {
            return (
              (t = Math.pow(0.7, arguments.length ? t : 1)),
              new yn(t * this.r, t * this.g, t * this.b)
            );
          }),
          (xn.hsl = function () {
            return _n(this.r, this.g, this.b);
          }),
          (xn.toString = function () {
            return "#" + wn(this.r) + wn(this.g) + wn(this.b);
          });
        var kn = o.map({
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
        });
        function En(t) {
          return "function" === typeof t
            ? t
            : function () {
                return t;
              };
        }
        function An(t) {
          return function (n, e, r) {
            return (
              2 === arguments.length &&
                "function" === typeof e &&
                ((r = e), (e = null)),
              Cn(n, e, t, r)
            );
          };
        }
        function Cn(t, n, e, r) {
          var i = {},
            u = o.dispatch("beforesend", "progress", "load", "error"),
            c = {},
            l = new XMLHttpRequest(),
            s = null;
          function f() {
            var t,
              n = l.status;
            if ((!n && Nn(l)) || (n >= 200 && n < 300) || 304 === n) {
              try {
                t = e.call(i, l);
              } catch (al) {
                return void u.error.call(i, al);
              }
              u.load.call(i, t);
            } else u.error.call(i, l);
          }
          return (
            this.XDomainRequest &&
              !("withCredentials" in l) &&
              /^(http(s)?:)?\/\//.test(t) &&
              (l = new XDomainRequest()),
            "onload" in l
              ? (l.onload = l.onerror = f)
              : (l.onreadystatechange = function () {
                  l.readyState > 3 && f();
                }),
            (l.onprogress = function (t) {
              var n = o.event;
              o.event = t;
              try {
                u.progress.call(i, l);
              } finally {
                o.event = n;
              }
            }),
            (i.header = function (t, n) {
              return (
                (t = (t + "").toLowerCase()),
                arguments.length < 2
                  ? c[t]
                  : (null == n ? delete c[t] : (c[t] = n + ""), i)
              );
            }),
            (i.mimeType = function (t) {
              return arguments.length
                ? ((n = null == t ? null : t + ""), i)
                : n;
            }),
            (i.responseType = function (t) {
              return arguments.length ? ((s = t), i) : s;
            }),
            (i.response = function (t) {
              return (e = t), i;
            }),
            ["get", "post"].forEach(function (t) {
              i[t] = function () {
                return i.send.apply(i, [t].concat(a(arguments)));
              };
            }),
            (i.send = function (e, r, o) {
              if (
                (2 === arguments.length &&
                  "function" === typeof r &&
                  ((o = r), (r = null)),
                l.open(e, t, !0),
                null == n || "accept" in c || (c["accept"] = n + ",*/*"),
                l.setRequestHeader)
              )
                for (var a in c) l.setRequestHeader(a, c[a]);
              return (
                null != n && l.overrideMimeType && l.overrideMimeType(n),
                null != s && (l.responseType = s),
                null != o &&
                  i.on("error", o).on("load", function (t) {
                    o(null, t);
                  }),
                u.beforesend.call(i, l),
                l.send(null == r ? null : r),
                i
              );
            }),
            (i.abort = function () {
              return l.abort(), i;
            }),
            o.rebind(i, u, "on"),
            null == r ? i : i.get(Ln(r))
          );
        }
        function Ln(t) {
          return 1 === t.length
            ? function (n, e) {
                t(null == n ? e : null);
              }
            : t;
        }
        function Nn(t) {
          var n = t.responseType;
          return n && "text" !== n ? t.response : t.responseText;
        }
        kn.forEach(function (t, n) {
          kn.set(t, mn(n));
        }),
          (o.functor = En),
          (o.xhr = An(F)),
          (o.dsv = function (t, n) {
            var e = new RegExp('["' + t + "\n]"),
              r = t.charCodeAt(0);
            function i(t, e, r) {
              arguments.length < 3 && ((r = e), (e = null));
              var i = Cn(t, n, null == e ? o : u(e), r);
              return (
                (i.row = function (t) {
                  return arguments.length
                    ? i.response(null == (e = t) ? o : u(t))
                    : e;
                }),
                i
              );
            }
            function o(t) {
              return i.parse(t.responseText);
            }
            function u(t) {
              return function (n) {
                return i.parse(n.responseText, t);
              };
            }
            function a(n) {
              return n.map(c).join(t);
            }
            function c(t) {
              return e.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t;
            }
            return (
              (i.parse = function (t, n) {
                var e;
                return i.parseRows(t, function (t, r) {
                  if (e) return e(t, r - 1);
                  var i = new Function(
                    "d",
                    "return {" +
                      t
                        .map(function (t, n) {
                          return JSON.stringify(t) + ": d[" + n + "]";
                        })
                        .join(",") +
                      "}"
                  );
                  e = n
                    ? function (t, e) {
                        return n(i(t), e);
                      }
                    : i;
                });
              }),
              (i.parseRows = function (t, n) {
                var e,
                  i,
                  o = {},
                  u = {},
                  a = [],
                  c = t.length,
                  l = 0,
                  s = 0;
                function f() {
                  if (l >= c) return u;
                  if (i) return (i = !1), o;
                  var n = l;
                  if (34 === t.charCodeAt(n)) {
                    var e = n;
                    while (e++ < c)
                      if (34 === t.charCodeAt(e)) {
                        if (34 !== t.charCodeAt(e + 1)) break;
                        ++e;
                      }
                    l = e + 2;
                    var a = t.charCodeAt(e + 1);
                    return (
                      13 === a
                        ? ((i = !0), 10 === t.charCodeAt(e + 2) && ++l)
                        : 10 === a && (i = !0),
                      t.slice(n + 1, e).replace(/""/g, '"')
                    );
                  }
                  while (l < c) {
                    a = t.charCodeAt(l++);
                    var s = 1;
                    if (10 === a) i = !0;
                    else if (13 === a)
                      (i = !0), 10 === t.charCodeAt(l) && (++l, ++s);
                    else if (a !== r) continue;
                    return t.slice(n, l - s);
                  }
                  return t.slice(n);
                }
                while ((e = f()) !== u) {
                  var h = [];
                  while (e !== o && e !== u) h.push(e), (e = f());
                  (n && null == (h = n(h, s++))) || a.push(h);
                }
                return a;
              }),
              (i.format = function (n) {
                if (Array.isArray(n[0])) return i.formatRows(n);
                var e = new P(),
                  r = [];
                return (
                  n.forEach(function (t) {
                    for (var n in t) e.has(n) || r.push(e.add(n));
                  }),
                  [r.map(c).join(t)]
                    .concat(
                      n.map(function (n) {
                        return r
                          .map(function (t) {
                            return c(n[t]);
                          })
                          .join(t);
                      })
                    )
                    .join("\n")
                );
              }),
              (i.formatRows = function (t) {
                return t.map(a).join("\n");
              }),
              i
            );
          }),
          (o.csv = o.dsv(",", "text/csv")),
          (o.tsv = o.dsv("\t", "text/tab-separated-values"));
        var Tn,
          Rn,
          Pn,
          Fn,
          Un =
            this[q(this, "requestAnimationFrame")] ||
            function (t) {
              setTimeout(t, 17);
            };
        function qn(t, n, e) {
          var r = arguments.length;
          r < 2 && (n = 0), r < 3 && (e = Date.now());
          var i = e + n,
            o = {
              c: t,
              t: i,
              n: null
            };
          return (
            Rn ? (Rn.n = o) : (Tn = o),
            (Rn = o),
            Pn || ((Fn = clearTimeout(Fn)), (Pn = 1), Un(zn)),
            o
          );
        }
        function zn() {
          var t = Dn(),
            n = In() - t;
          n > 24
            ? (isFinite(n) && (clearTimeout(Fn), (Fn = setTimeout(zn, n))),
              (Pn = 0))
            : ((Pn = 1), Un(zn));
        }
        function Dn() {
          var t = Date.now(),
            n = Tn;
          while (n) t >= n.t && n.c(t - n.t) && (n.c = null), (n = n.n);
          return t;
        }
        function In() {
          var t,
            n = Tn,
            e = 1 / 0;
          while (n)
            n.c
              ? (n.t < e && (e = n.t), (n = (t = n).n))
              : (n = t ? (t.n = n.n) : (Tn = n.n));
          return (Rn = t), e;
        }
        function Bn(t, n) {
          return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1);
        }
        (o.timer = function () {
          qn.apply(this, arguments);
        }),
          (o.timer.flush = function () {
            Dn(), In();
          }),
          (o.round = function (t, n) {
            return n
              ? Math.round(t * (n = Math.pow(10, n))) / n
              : Math.round(t);
          });
        var Hn = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y"
        ].map(Vn);
        function Vn(t, n) {
          var e = Math.pow(10, 3 * M(8 - n));
          return {
            scale:
              n > 8
                ? function (t) {
                    return t / e;
                  }
                : function (t) {
                    return t * e;
                  },
            symbol: t
          };
        }
        function $n(t) {
          var n = t.decimal,
            e = t.thousands,
            r = t.grouping,
            i = t.currency,
            u =
              r && e
                ? function (t, n) {
                    var i = t.length,
                      o = [],
                      u = 0,
                      a = r[0],
                      c = 0;
                    while (i > 0 && a > 0) {
                      if (
                        (c + a + 1 > n && (a = Math.max(1, n - c)),
                        o.push(t.substring((i -= a), i + a)),
                        (c += a + 1) > n)
                      )
                        break;
                      a = r[(u = (u + 1) % r.length)];
                    }
                    return o.reverse().join(e);
                  }
                : F;
          return function (t) {
            var e = Yn.exec(t),
              r = e[1] || " ",
              a = e[2] || ">",
              c = e[3] || "-",
              l = e[4] || "",
              s = e[5],
              f = +e[6],
              h = e[7],
              p = e[8],
              d = e[9],
              g = 1,
              v = "",
              y = "",
              m = !1,
              b = !0;
            switch (
              (p && (p = +p.substring(1)),
              (s || ("0" === r && "=" === a)) && ((s = r = "0"), (a = "=")),
              d)
            ) {
              case "n":
                (h = !0), (d = "g");
                break;
              case "%":
                (g = 100), (y = "%"), (d = "f");
                break;
              case "p":
                (g = 100), (y = "%"), (d = "r");
                break;
              case "b":
              case "o":
              case "x":
              case "X":
                "#" === l && (v = "0" + d.toLowerCase());
              case "c":
                b = !1;
              case "d":
                (m = !0), (p = 0);
                break;
              case "s":
                (g = -1), (d = "r");
                break;
            }
            "$" === l && ((v = i[0]), (y = i[1])),
              "r" != d || p || (d = "g"),
              null != p &&
                ("g" == d
                  ? (p = Math.max(1, Math.min(21, p)))
                  : ("e" != d && "f" != d) ||
                    (p = Math.max(0, Math.min(20, p)))),
              (d = Wn.get(d) || Zn);
            var x = s && h;
            return function (t) {
              var e = y;
              if (m && t % 1) return "";
              var i =
                t < 0 || (0 === t && 1 / t < 0)
                  ? ((t = -t), "-")
                  : "-" === c
                  ? ""
                  : c;
              if (g < 0) {
                var l = o.formatPrefix(t, p);
                (t = l.scale(t)), (e = l.symbol + y);
              } else t *= g;
              t = d(t, p);
              var w,
                M,
                _ = t.lastIndexOf(".");
              if (_ < 0) {
                var S = b ? t.lastIndexOf("e") : -1;
                S < 0
                  ? ((w = t), (M = ""))
                  : ((w = t.substring(0, S)), (M = t.substring(S)));
              } else (w = t.substring(0, _)), (M = n + t.substring(_ + 1));
              !s && h && (w = u(w, 1 / 0));
              var j = v.length + w.length + M.length + (x ? 0 : i.length),
                O = j < f ? new Array((j = f - j + 1)).join(r) : "";
              return (
                x && (w = u(O + w, O.length ? f - M.length : 1 / 0)),
                (i += v),
                (t = w + M),
                ("<" === a
                  ? i + t + O
                  : ">" === a
                  ? O + i + t
                  : "^" === a
                  ? O.substring(0, (j >>= 1)) + i + t + O.substring(j)
                  : i + (x ? t : O + t)) + e
              );
            };
          };
        }
        o.formatPrefix = function (t, n) {
          var e = 0;
          return (
            (t = +t) &&
              (t < 0 && (t *= -1),
              n && (t = o.round(t, Bn(t, n))),
              (e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10)),
              (e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3))))),
            Hn[8 + e / 3]
          );
        };
        var Yn = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
          Wn = o.map({
            b: function (t) {
              return t.toString(2);
            },
            c: function (t) {
              return String.fromCharCode(t);
            },
            o: function (t) {
              return t.toString(8);
            },
            x: function (t) {
              return t.toString(16);
            },
            X: function (t) {
              return t.toString(16).toUpperCase();
            },
            g: function (t, n) {
              return t.toPrecision(n);
            },
            e: function (t, n) {
              return t.toExponential(n);
            },
            f: function (t, n) {
              return t.toFixed(n);
            },
            r: function (t, n) {
              return (t = o.round(t, Bn(t, n))).toFixed(
                Math.max(0, Math.min(20, Bn(t * (1 + 1e-15), n)))
              );
            }
          });
        function Zn(t) {
          return t + "";
        }
        var Gn = (o.time = {}),
          Xn = Date;
        function Jn() {
          this._ = new Date(
            arguments.length > 1
              ? Date.UTC.apply(this, arguments)
              : arguments[0]
          );
        }
        Jn.prototype = {
          getDate: function () {
            return this._.getUTCDate();
          },
          getDay: function () {
            return this._.getUTCDay();
          },
          getFullYear: function () {
            return this._.getUTCFullYear();
          },
          getHours: function () {
            return this._.getUTCHours();
          },
          getMilliseconds: function () {
            return this._.getUTCMilliseconds();
          },
          getMinutes: function () {
            return this._.getUTCMinutes();
          },
          getMonth: function () {
            return this._.getUTCMonth();
          },
          getSeconds: function () {
            return this._.getUTCSeconds();
          },
          getTime: function () {
            return this._.getTime();
          },
          getTimezoneOffset: function () {
            return 0;
          },
          valueOf: function () {
            return this._.valueOf();
          },
          setDate: function () {
            Kn.setUTCDate.apply(this._, arguments);
          },
          setDay: function () {
            Kn.setUTCDay.apply(this._, arguments);
          },
          setFullYear: function () {
            Kn.setUTCFullYear.apply(this._, arguments);
          },
          setHours: function () {
            Kn.setUTCHours.apply(this._, arguments);
          },
          setMilliseconds: function () {
            Kn.setUTCMilliseconds.apply(this._, arguments);
          },
          setMinutes: function () {
            Kn.setUTCMinutes.apply(this._, arguments);
          },
          setMonth: function () {
            Kn.setUTCMonth.apply(this._, arguments);
          },
          setSeconds: function () {
            Kn.setUTCSeconds.apply(this._, arguments);
          },
          setTime: function () {
            Kn.setTime.apply(this._, arguments);
          }
        };
        var Kn = Date.prototype;
        function Qn(t, n, e) {
          function r(n) {
            var e = t(n),
              r = o(e, 1);
            return n - e < r - n ? e : r;
          }
          function i(e) {
            return n((e = t(new Xn(e - 1))), 1), e;
          }
          function o(t, e) {
            return n((t = new Xn(+t)), e), t;
          }
          function u(t, r, o) {
            var u = i(t),
              a = [];
            if (o > 1) while (u < r) e(u) % o || a.push(new Date(+u)), n(u, 1);
            else while (u < r) a.push(new Date(+u)), n(u, 1);
            return a;
          }
          function a(t, n, e) {
            try {
              Xn = Jn;
              var r = new Jn();
              return (r._ = t), u(r, n, e);
            } finally {
              Xn = Date;
            }
          }
          (t.floor = t),
            (t.round = r),
            (t.ceil = i),
            (t.offset = o),
            (t.range = u);
          var c = (t.utc = te(t));
          return (
            (c.floor = c),
            (c.round = te(r)),
            (c.ceil = te(i)),
            (c.offset = te(o)),
            (c.range = a),
            t
          );
        }
        function te(t) {
          return function (n, e) {
            try {
              Xn = Jn;
              var r = new Jn();
              return (r._ = n), t(r, e)._;
            } finally {
              Xn = Date;
            }
          };
        }
        function ne(t) {
          var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            u = t.days,
            a = t.shortDays,
            c = t.months,
            l = t.shortMonths;
          function s(t) {
            var n = t.length;
            function e(e) {
              var r,
                i,
                o,
                u = [],
                a = -1,
                c = 0;
              while (++a < n)
                37 === t.charCodeAt(a) &&
                  (u.push(t.slice(c, a)),
                  null != (i = ee[(r = t.charAt(++a))]) && (r = t.charAt(++a)),
                  (o = w[r]) &&
                    (r = o(e, null == i ? ("e" === r ? " " : "0") : i)),
                  u.push(r),
                  (c = a + 1));
              return u.push(t.slice(c, a)), u.join("");
            }
            return (
              (e.parse = function (n) {
                var e = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                  },
                  r = f(e, t, n, 0);
                if (r != n.length) return null;
                "p" in e && (e.H = (e.H % 12) + 12 * e.p);
                var i = null != e.Z && Xn !== Jn,
                  o = new (i ? Jn : Xn)();
                return (
                  "j" in e
                    ? o.setFullYear(e.y, 0, e.j)
                    : "W" in e || "U" in e
                    ? ("w" in e || (e.w = "W" in e ? 1 : 0),
                      o.setFullYear(e.y, 0, 1),
                      o.setFullYear(
                        e.y,
                        0,
                        "W" in e
                          ? ((e.w + 6) % 7) + 7 * e.W - ((o.getDay() + 5) % 7)
                          : e.w + 7 * e.U - ((o.getDay() + 6) % 7)
                      ))
                    : o.setFullYear(e.y, e.m, e.d),
                  o.setHours(
                    e.H + ((e.Z / 100) | 0),
                    e.M + (e.Z % 100),
                    e.S,
                    e.L
                  ),
                  i ? o._ : o
                );
              }),
              (e.toString = function () {
                return t;
              }),
              e
            );
          }
          function f(t, n, e, r) {
            var i,
              o,
              u,
              a = 0,
              c = n.length,
              l = e.length;
            while (a < c) {
              if (r >= l) return -1;
              if (((i = n.charCodeAt(a++)), 37 === i)) {
                if (
                  ((u = n.charAt(a++)),
                  (o = M[u in ee ? n.charAt(a++) : u]),
                  !o || (r = o(t, e, r)) < 0)
                )
                  return -1;
              } else if (i != e.charCodeAt(r++)) return -1;
            }
            return r;
          }
          (s.utc = function (t) {
            var n = s(t);
            function e(t) {
              try {
                Xn = Jn;
                var e = new Xn();
                return (e._ = t), n(e);
              } finally {
                Xn = Date;
              }
            }
            return (
              (e.parse = function (t) {
                try {
                  Xn = Jn;
                  var e = n.parse(t);
                  return e && e._;
                } finally {
                  Xn = Date;
                }
              }),
              (e.toString = n.toString),
              e
            );
          }),
            (s.multi = s.utc.multi = Se);
          var h = o.map(),
            p = ue(u),
            d = ae(u),
            g = ue(a),
            v = ae(a),
            y = ue(c),
            m = ae(c),
            b = ue(l),
            x = ae(l);
          i.forEach(function (t, n) {
            h.set(t.toLowerCase(), n);
          });
          var w = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return u[t.getDay()];
              },
              b: function (t) {
                return l[t.getMonth()];
              },
              B: function (t) {
                return c[t.getMonth()];
              },
              c: s(n),
              d: function (t, n) {
                return oe(t.getDate(), n, 2);
              },
              e: function (t, n) {
                return oe(t.getDate(), n, 2);
              },
              H: function (t, n) {
                return oe(t.getHours(), n, 2);
              },
              I: function (t, n) {
                return oe(t.getHours() % 12 || 12, n, 2);
              },
              j: function (t, n) {
                return oe(1 + Gn.dayOfYear(t), n, 3);
              },
              L: function (t, n) {
                return oe(t.getMilliseconds(), n, 3);
              },
              m: function (t, n) {
                return oe(t.getMonth() + 1, n, 2);
              },
              M: function (t, n) {
                return oe(t.getMinutes(), n, 2);
              },
              p: function (t) {
                return i[+(t.getHours() >= 12)];
              },
              S: function (t, n) {
                return oe(t.getSeconds(), n, 2);
              },
              U: function (t, n) {
                return oe(Gn.sundayOfYear(t), n, 2);
              },
              w: function (t) {
                return t.getDay();
              },
              W: function (t, n) {
                return oe(Gn.mondayOfYear(t), n, 2);
              },
              x: s(e),
              X: s(r),
              y: function (t, n) {
                return oe(t.getFullYear() % 100, n, 2);
              },
              Y: function (t, n) {
                return oe(t.getFullYear() % 1e4, n, 4);
              },
              Z: Me,
              "%": function () {
                return "%";
              }
            },
            M = {
              a: _,
              A: S,
              b: j,
              B: O,
              c: k,
              d: ve,
              e: ve,
              H: me,
              I: me,
              j: ye,
              L: we,
              m: ge,
              M: be,
              p: C,
              S: xe,
              U: le,
              w: ce,
              W: se,
              x: E,
              X: A,
              y: he,
              Y: fe,
              Z: pe,
              "%": _e
            };
          function _(t, n, e) {
            g.lastIndex = 0;
            var r = g.exec(n.slice(e));
            return r
              ? ((t.w = v.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          }
          function S(t, n, e) {
            p.lastIndex = 0;
            var r = p.exec(n.slice(e));
            return r
              ? ((t.w = d.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          }
          function j(t, n, e) {
            b.lastIndex = 0;
            var r = b.exec(n.slice(e));
            return r
              ? ((t.m = x.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          }
          function O(t, n, e) {
            y.lastIndex = 0;
            var r = y.exec(n.slice(e));
            return r
              ? ((t.m = m.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          }
          function k(t, n, e) {
            return f(t, w.c.toString(), n, e);
          }
          function E(t, n, e) {
            return f(t, w.x.toString(), n, e);
          }
          function A(t, n, e) {
            return f(t, w.X.toString(), n, e);
          }
          function C(t, n, e) {
            var r = h.get(n.slice(e, (e += 2)).toLowerCase());
            return null == r ? -1 : ((t.p = r), e);
          }
          return s;
        }
        (Gn.year = Qn(
          function (t) {
            return (t = Gn.day(t)), t.setMonth(0, 1), t;
          },
          function (t, n) {
            t.setFullYear(t.getFullYear() + n);
          },
          function (t) {
            return t.getFullYear();
          }
        )),
          (Gn.years = Gn.year.range),
          (Gn.years.utc = Gn.year.utc.range),
          (Gn.day = Qn(
            function (t) {
              var n = new Xn(2e3, 0);
              return (
                n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
              );
            },
            function (t, n) {
              t.setDate(t.getDate() + n);
            },
            function (t) {
              return t.getDate() - 1;
            }
          )),
          (Gn.days = Gn.day.range),
          (Gn.days.utc = Gn.day.utc.range),
          (Gn.dayOfYear = function (t) {
            var n = Gn.year(t);
            return Math.floor(
              (t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) /
                864e5
            );
          }),
          [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday"
          ].forEach(function (t, n) {
            n = 7 - n;
            var e = (Gn[t] = Qn(
              function (t) {
                return (
                  (t = Gn.day(t)).setDate(t.getDate() - ((t.getDay() + n) % 7)),
                  t
                );
              },
              function (t, n) {
                t.setDate(t.getDate() + 7 * Math.floor(n));
              },
              function (t) {
                var e = Gn.year(t).getDay();
                return (
                  Math.floor((Gn.dayOfYear(t) + ((e + n) % 7)) / 7) - (e !== n)
                );
              }
            ));
            (Gn[t + "s"] = e.range),
              (Gn[t + "s"].utc = e.utc.range),
              (Gn[t + "OfYear"] = function (t) {
                var e = Gn.year(t).getDay();
                return Math.floor((Gn.dayOfYear(t) + ((e + n) % 7)) / 7);
              });
          }),
          (Gn.week = Gn.sunday),
          (Gn.weeks = Gn.sunday.range),
          (Gn.weeks.utc = Gn.sunday.utc.range),
          (Gn.weekOfYear = Gn.sundayOfYear);
        var ee = {
            "-": "",
            _: " ",
            0: "0"
          },
          re = /^\s*\d+/,
          ie = /^%/;
        function oe(t, n, e) {
          var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
          return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
        }
        function ue(t) {
          return new RegExp("^(?:" + t.map(o.requote).join("|") + ")", "i");
        }
        function ae(t) {
          var n = new j(),
            e = -1,
            r = t.length;
          while (++e < r) n.set(t[e].toLowerCase(), e);
          return n;
        }
        function ce(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 1));
          return r ? ((t.w = +r[0]), e + r[0].length) : -1;
        }
        function le(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e));
          return r ? ((t.U = +r[0]), e + r[0].length) : -1;
        }
        function se(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e));
          return r ? ((t.W = +r[0]), e + r[0].length) : -1;
        }
        function fe(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 4));
          return r ? ((t.y = +r[0]), e + r[0].length) : -1;
        }
        function he(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.y = de(+r[0])), e + r[0].length) : -1;
        }
        function pe(t, n, e) {
          return /^[+-]\d{4}$/.test((n = n.slice(e, e + 5)))
            ? ((t.Z = -n), e + 5)
            : -1;
        }
        function de(t) {
          return t + (t > 68 ? 1900 : 2e3);
        }
        function ge(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
        }
        function ve(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.d = +r[0]), e + r[0].length) : -1;
        }
        function ye(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 3));
          return r ? ((t.j = +r[0]), e + r[0].length) : -1;
        }
        function me(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.H = +r[0]), e + r[0].length) : -1;
        }
        function be(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.M = +r[0]), e + r[0].length) : -1;
        }
        function xe(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 2));
          return r ? ((t.S = +r[0]), e + r[0].length) : -1;
        }
        function we(t, n, e) {
          re.lastIndex = 0;
          var r = re.exec(n.slice(e, e + 3));
          return r ? ((t.L = +r[0]), e + r[0].length) : -1;
        }
        function Me(t) {
          var n = t.getTimezoneOffset(),
            e = n > 0 ? "-" : "+",
            r = (M(n) / 60) | 0,
            i = M(n) % 60;
          return e + oe(r, "0", 2) + oe(i, "0", 2);
        }
        function _e(t, n, e) {
          ie.lastIndex = 0;
          var r = ie.exec(n.slice(e, e + 1));
          return r ? e + r[0].length : -1;
        }
        function Se(t) {
          var n = t.length,
            e = -1;
          while (++e < n) t[e][0] = this(t[e][0]);
          return function (n) {
            var e = 0,
              r = t[e];
            while (!r[1](n)) r = t[++e];
            return r[0](n);
          };
        }
        o.locale = function (t) {
          return {
            numberFormat: $n(t),
            timeFormat: ne(t)
          };
        };
        var je = o.locale({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""],
          dateTime: "%a %b %e %X %Y",
          date: "%m/%d/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        });
        function Oe() {}
        (o.format = je.numberFormat),
          (o.geo = {}),
          (Oe.prototype = {
            s: 0,
            t: 0,
            add: function (t) {
              Ee(t, this.t, ke),
                Ee(ke.s, this.s, this),
                this.s ? (this.t += ke.t) : (this.s = ke.t);
            },
            reset: function () {
              this.s = this.t = 0;
            },
            valueOf: function () {
              return this.s;
            }
          });
        var ke = new Oe();
        function Ee(t, n, e) {
          var r = (e.s = t + n),
            i = r - t,
            o = r - i;
          e.t = t - o + (n - i);
        }
        function Ae(t, n) {
          t && Le.hasOwnProperty(t.type) && Le[t.type](t, n);
        }
        o.geo.stream = function (t, n) {
          t && Ce.hasOwnProperty(t.type) ? Ce[t.type](t, n) : Ae(t, n);
        };
        var Ce = {
            Feature: function (t, n) {
              Ae(t.geometry, n);
            },
            FeatureCollection: function (t, n) {
              var e = t.features,
                r = -1,
                i = e.length;
              while (++r < i) Ae(e[r].geometry, n);
            }
          },
          Le = {
            Sphere: function (t, n) {
              n.sphere();
            },
            Point: function (t, n) {
              (t = t.coordinates), n.point(t[0], t[1], t[2]);
            },
            MultiPoint: function (t, n) {
              var e = t.coordinates,
                r = -1,
                i = e.length;
              while (++r < i) (t = e[r]), n.point(t[0], t[1], t[2]);
            },
            LineString: function (t, n) {
              Ne(t.coordinates, n, 0);
            },
            MultiLineString: function (t, n) {
              var e = t.coordinates,
                r = -1,
                i = e.length;
              while (++r < i) Ne(e[r], n, 0);
            },
            Polygon: function (t, n) {
              Te(t.coordinates, n);
            },
            MultiPolygon: function (t, n) {
              var e = t.coordinates,
                r = -1,
                i = e.length;
              while (++r < i) Te(e[r], n);
            },
            GeometryCollection: function (t, n) {
              var e = t.geometries,
                r = -1,
                i = e.length;
              while (++r < i) Ae(e[r], n);
            }
          };
        function Ne(t, n, e) {
          var r,
            i = -1,
            o = t.length - e;
          n.lineStart();
          while (++i < o) (r = t[i]), n.point(r[0], r[1], r[2]);
          n.lineEnd();
        }
        function Te(t, n) {
          var e = -1,
            r = t.length;
          n.polygonStart();
          while (++e < r) Ne(t[e], n, 1);
          n.polygonEnd();
        }
        o.geo.area = function (t) {
          return (Re = 0), o.geo.stream(t, We), Re;
        };
        var Re,
          Pe,
          Fe,
          Ue,
          qe,
          ze,
          De,
          Ie,
          Be,
          He,
          Ve,
          $e,
          Ye = new Oe(),
          We = {
            sphere: function () {
              Re += 4 * Nt;
            },
            point: D,
            lineStart: D,
            lineEnd: D,
            polygonStart: function () {
              Ye.reset(), (We.lineStart = Ze);
            },
            polygonEnd: function () {
              var t = 2 * Ye;
              (Re += t < 0 ? 4 * Nt + t : t),
                (We.lineStart = We.lineEnd = We.point = D);
            }
          };
        function Ze() {
          var t, n, e, r, i;
          function o(t, n) {
            (t *= Ft), (n = (n * Ft) / 2 + Nt / 4);
            var o = t - e,
              u = o >= 0 ? 1 : -1,
              a = u * o,
              c = Math.cos(n),
              l = Math.sin(n),
              s = i * l,
              f = r * c + s * Math.cos(a),
              h = s * u * Math.sin(a);
            Ye.add(Math.atan2(h, f)), (e = t), (r = c), (i = l);
          }
          (We.point = function (u, a) {
            (We.point = o),
              (e = (t = u) * Ft),
              (r = Math.cos((a = ((n = a) * Ft) / 2 + Nt / 4))),
              (i = Math.sin(a));
          }),
            (We.lineEnd = function () {
              o(t, n);
            });
        }
        function Ge(t) {
          var n = t[0],
            e = t[1],
            r = Math.cos(e);
          return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)];
        }
        function Xe(t, n) {
          return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
        }
        function Je(t, n) {
          return [
            t[1] * n[2] - t[2] * n[1],
            t[2] * n[0] - t[0] * n[2],
            t[0] * n[1] - t[1] * n[0]
          ];
        }
        function Ke(t, n) {
          (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
        }
        function Qe(t, n) {
          return [t[0] * n, t[1] * n, t[2] * n];
        }
        function tr(t) {
          var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
          (t[0] /= n), (t[1] /= n), (t[2] /= n);
        }
        function nr(t) {
          return [Math.atan2(t[1], t[0]), It(t[2])];
        }
        function er(t, n) {
          return M(t[0] - n[0]) < Ct && M(t[1] - n[1]) < Ct;
        }
        (o.geo.bounds = (function () {
          var t,
            n,
            e,
            r,
            i,
            u,
            a,
            c,
            l,
            s,
            f,
            h = {
              point: p,
              lineStart: g,
              lineEnd: v,
              polygonStart: function () {
                (h.point = y),
                  (h.lineStart = m),
                  (h.lineEnd = b),
                  (l = 0),
                  We.polygonStart();
              },
              polygonEnd: function () {
                We.polygonEnd(),
                  (h.point = p),
                  (h.lineStart = g),
                  (h.lineEnd = v),
                  Ye < 0
                    ? ((t = -(e = 180)), (n = -(r = 90)))
                    : l > Ct
                    ? (r = 90)
                    : l < -Ct && (n = -90),
                  (f[0] = t),
                  (f[1] = e);
              }
            };
          function p(i, o) {
            s.push((f = [(t = i), (e = i)])),
              o < n && (n = o),
              o > r && (r = o);
          }
          function d(o, u) {
            var a = Ge([o * Ft, u * Ft]);
            if (c) {
              var l = Je(c, a),
                s = [l[1], -l[0], 0],
                f = Je(s, l);
              tr(f), (f = nr(f));
              var h = o - i,
                d = h > 0 ? 1 : -1,
                g = f[0] * Ut * d,
                v = M(h) > 180;
              if (v ^ (d * i < g && g < d * o)) {
                var y = f[1] * Ut;
                y > r && (r = y);
              } else if (
                ((g = ((g + 360) % 360) - 180), v ^ (d * i < g && g < d * o))
              ) {
                y = -f[1] * Ut;
                y < n && (n = y);
              } else u < n && (n = u), u > r && (r = u);
              v
                ? o < i
                  ? x(t, o) > x(t, e) && (e = o)
                  : x(o, e) > x(t, e) && (t = o)
                : e >= t
                ? (o < t && (t = o), o > e && (e = o))
                : o > i
                ? x(t, o) > x(t, e) && (e = o)
                : x(o, e) > x(t, e) && (t = o);
            } else p(o, u);
            (c = a), (i = o);
          }
          function g() {
            h.point = d;
          }
          function v() {
            (f[0] = t), (f[1] = e), (h.point = p), (c = null);
          }
          function y(t, n) {
            if (c) {
              var e = t - i;
              l += M(e) > 180 ? e + (e > 0 ? 360 : -360) : e;
            } else (u = t), (a = n);
            We.point(t, n), d(t, n);
          }
          function m() {
            We.lineStart();
          }
          function b() {
            y(u, a),
              We.lineEnd(),
              M(l) > Ct && (t = -(e = 180)),
              (f[0] = t),
              (f[1] = e),
              (c = null);
          }
          function x(t, n) {
            return (n -= t) < 0 ? n + 360 : n;
          }
          function w(t, n) {
            return t[0] - n[0];
          }
          function _(t, n) {
            return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t;
          }
          return function (i) {
            (r = e = -(t = n = 1 / 0)), (s = []), o.geo.stream(i, h);
            var u = s.length;
            if (u) {
              s.sort(w);
              for (var a = 1, c = s[0], l = [c]; a < u; ++a)
                (d = s[a]),
                  _(d[0], c) || _(d[1], c)
                    ? (x(c[0], d[1]) > x(c[0], c[1]) && (c[1] = d[1]),
                      x(d[0], c[1]) > x(c[0], c[1]) && (c[0] = d[0]))
                    : l.push((c = d));
              var p,
                d,
                g = -1 / 0;
              for (u = l.length - 1, a = 0, c = l[u]; a <= u; c = d, ++a)
                (d = l[a]),
                  (p = x(c[1], d[0])) > g && ((g = p), (t = d[0]), (e = c[1]));
            }
            return (
              (s = f = null),
              t === 1 / 0 || n === 1 / 0
                ? [
                    [NaN, NaN],
                    [NaN, NaN]
                  ]
                : [
                    [t, n],
                    [e, r]
                  ]
            );
          };
        })()),
          (o.geo.centroid = function (t) {
            (Pe = Fe = Ue = qe = ze = De = Ie = Be = He = Ve = $e = 0),
              o.geo.stream(t, rr);
            var n = He,
              e = Ve,
              r = $e,
              i = n * n + e * e + r * r;
            return i < Lt &&
              ((n = De),
              (e = Ie),
              (r = Be),
              Fe < Ct && ((n = Ue), (e = qe), (r = ze)),
              (i = n * n + e * e + r * r),
              i < Lt)
              ? [NaN, NaN]
              : [Math.atan2(e, n) * Ut, It(r / Math.sqrt(i)) * Ut];
          });
        var rr = {
          sphere: D,
          point: ir,
          lineStart: ur,
          lineEnd: ar,
          polygonStart: function () {
            rr.lineStart = cr;
          },
          polygonEnd: function () {
            rr.lineStart = ur;
          }
        };
        function ir(t, n) {
          t *= Ft;
          var e = Math.cos((n *= Ft));
          or(e * Math.cos(t), e * Math.sin(t), Math.sin(n));
        }
        function or(t, n, e) {
          ++Pe,
            (Ue += (t - Ue) / Pe),
            (qe += (n - qe) / Pe),
            (ze += (e - ze) / Pe);
        }
        function ur() {
          var t, n, e;
          function r(r, i) {
            r *= Ft;
            var o = Math.cos((i *= Ft)),
              u = o * Math.cos(r),
              a = o * Math.sin(r),
              c = Math.sin(i),
              l = Math.atan2(
                Math.sqrt(
                  (l = n * c - e * a) * l +
                    (l = e * u - t * c) * l +
                    (l = t * a - n * u) * l
                ),
                t * u + n * a + e * c
              );
            (Fe += l),
              (De += l * (t + (t = u))),
              (Ie += l * (n + (n = a))),
              (Be += l * (e + (e = c))),
              or(t, n, e);
          }
          rr.point = function (i, o) {
            i *= Ft;
            var u = Math.cos((o *= Ft));
            (t = u * Math.cos(i)),
              (n = u * Math.sin(i)),
              (e = Math.sin(o)),
              (rr.point = r),
              or(t, n, e);
          };
        }
        function ar() {
          rr.point = ir;
        }
        function cr() {
          var t, n, e, r, i;
          function o(t, n) {
            t *= Ft;
            var o = Math.cos((n *= Ft)),
              u = o * Math.cos(t),
              a = o * Math.sin(t),
              c = Math.sin(n),
              l = r * c - i * a,
              s = i * u - e * c,
              f = e * a - r * u,
              h = Math.sqrt(l * l + s * s + f * f),
              p = e * u + r * a + i * c,
              d = h && -Dt(p) / h,
              g = Math.atan2(h, p);
            (He += d * l),
              (Ve += d * s),
              ($e += d * f),
              (Fe += g),
              (De += g * (e + (e = u))),
              (Ie += g * (r + (r = a))),
              (Be += g * (i + (i = c))),
              or(e, r, i);
          }
          (rr.point = function (u, a) {
            (t = u), (n = a), (rr.point = o), (u *= Ft);
            var c = Math.cos((a *= Ft));
            (e = c * Math.cos(u)),
              (r = c * Math.sin(u)),
              (i = Math.sin(a)),
              or(e, r, i);
          }),
            (rr.lineEnd = function () {
              o(t, n), (rr.lineEnd = ar), (rr.point = ir);
            });
        }
        function lr(t, n) {
          function e(e, r) {
            return (e = t(e, r)), n(e[0], e[1]);
          }
          return (
            t.invert &&
              n.invert &&
              (e.invert = function (e, r) {
                return (e = n.invert(e, r)), e && t.invert(e[0], e[1]);
              }),
            e
          );
        }
        function sr() {
          return !0;
        }
        function fr(t, n, e, r, i) {
          var o = [],
            u = [];
          if (
            (t.forEach(function (t) {
              if (!((n = t.length - 1) <= 0)) {
                var n,
                  e = t[0],
                  r = t[n];
                if (er(e, r)) {
                  i.lineStart();
                  for (var a = 0; a < n; ++a) i.point((e = t[a])[0], e[1]);
                  i.lineEnd();
                } else {
                  var c = new pr(e, t, null, !0),
                    l = new pr(e, null, c, !1);
                  (c.o = l),
                    o.push(c),
                    u.push(l),
                    (c = new pr(r, t, null, !1)),
                    (l = new pr(r, null, c, !0)),
                    (c.o = l),
                    o.push(c),
                    u.push(l);
                }
              }
            }),
            u.sort(n),
            hr(o),
            hr(u),
            o.length)
          ) {
            for (var a = 0, c = e, l = u.length; a < l; ++a) u[a].e = c = !c;
            var s,
              f,
              h = o[0];
            while (1) {
              var p = h,
                d = !0;
              while (p.v) if ((p = p.n) === h) return;
              (s = p.z), i.lineStart();
              do {
                if (((p.v = p.o.v = !0), p.e)) {
                  if (d)
                    for (a = 0, l = s.length; a < l; ++a)
                      i.point((f = s[a])[0], f[1]);
                  else r(p.x, p.n.x, 1, i);
                  p = p.n;
                } else {
                  if (d) {
                    s = p.p.z;
                    for (a = s.length - 1; a >= 0; --a)
                      i.point((f = s[a])[0], f[1]);
                  } else r(p.x, p.p.x, -1, i);
                  p = p.p;
                }
                (p = p.o), (s = p.z), (d = !d);
              } while (!p.v);
              i.lineEnd();
            }
          }
        }
        function hr(t) {
          if ((n = t.length)) {
            var n,
              e,
              r = 0,
              i = t[0];
            while (++r < n) (i.n = e = t[r]), (e.p = i), (i = e);
            (i.n = e = t[0]), (e.p = i);
          }
        }
        function pr(t, n, e, r) {
          (this.x = t),
            (this.z = n),
            (this.o = e),
            (this.e = r),
            (this.v = !1),
            (this.n = this.p = null);
        }
        function dr(t, n, e, r) {
          return function (i, u) {
            var a,
              c = n(u),
              l = i.invert(r[0], r[1]),
              s = {
                point: f,
                lineStart: p,
                lineEnd: d,
                polygonStart: function () {
                  (s.point = x),
                    (s.lineStart = w),
                    (s.lineEnd = M),
                    (a = []),
                    (g = []);
                },
                polygonEnd: function () {
                  (s.point = f),
                    (s.lineStart = p),
                    (s.lineEnd = d),
                    (a = o.merge(a));
                  var t = Mr(l, g);
                  a.length
                    ? (b || (u.polygonStart(), (b = !0)), fr(a, yr, t, e, u))
                    : t &&
                      (b || (u.polygonStart(), (b = !0)),
                      u.lineStart(),
                      e(null, null, 1, u),
                      u.lineEnd()),
                    b && (u.polygonEnd(), (b = !1)),
                    (a = g = null);
                },
                sphere: function () {
                  u.polygonStart(),
                    u.lineStart(),
                    e(null, null, 1, u),
                    u.lineEnd(),
                    u.polygonEnd();
                }
              };
            function f(n, e) {
              var r = i(n, e);
              t((n = r[0]), (e = r[1])) && u.point(n, e);
            }
            function h(t, n) {
              var e = i(t, n);
              c.point(e[0], e[1]);
            }
            function p() {
              (s.point = h), c.lineStart();
            }
            function d() {
              (s.point = f), c.lineEnd();
            }
            var g,
              v,
              y = vr(),
              m = n(y),
              b = !1;
            function x(t, n) {
              v.push([t, n]);
              var e = i(t, n);
              m.point(e[0], e[1]);
            }
            function w() {
              m.lineStart(), (v = []);
            }
            function M() {
              x(v[0][0], v[0][1]), m.lineEnd();
              var t,
                n = m.clean(),
                e = y.buffer(),
                r = e.length;
              if ((v.pop(), g.push(v), (v = null), r))
                if (1 & n) {
                  t = e[0];
                  r = t.length - 1;
                  var i,
                    o = -1;
                  if (r > 0) {
                    b || (u.polygonStart(), (b = !0)), u.lineStart();
                    while (++o < r) u.point((i = t[o])[0], i[1]);
                    u.lineEnd();
                  }
                } else
                  r > 1 && 2 & n && e.push(e.pop().concat(e.shift())),
                    a.push(e.filter(gr));
            }
            return s;
          };
        }
        function gr(t) {
          return t.length > 1;
        }
        function vr() {
          var t,
            n = [];
          return {
            lineStart: function () {
              n.push((t = []));
            },
            point: function (n, e) {
              t.push([n, e]);
            },
            lineEnd: D,
            buffer: function () {
              var e = n;
              return (n = []), (t = null), e;
            },
            rejoin: function () {
              n.length > 1 && n.push(n.pop().concat(n.shift()));
            }
          };
        }
        function yr(t, n) {
          return (
            ((t = t.x)[0] < 0 ? t[1] - Pt - Ct : Pt - t[1]) -
            ((n = n.x)[0] < 0 ? n[1] - Pt - Ct : Pt - n[1])
          );
        }
        var mr = dr(sr, br, wr, [-Nt, -Nt / 2]);
        function br(t) {
          var n,
            e = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (n = 1);
            },
            point: function (o, u) {
              var a = o > 0 ? Nt : -Nt,
                c = M(o - e);
              M(c - Nt) < Ct
                ? (t.point(e, (r = (r + u) / 2 > 0 ? Pt : -Pt)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  t.point(o, r),
                  (n = 0))
                : i !== a &&
                  c >= Nt &&
                  (M(e - i) < Ct && (e -= i * Ct),
                  M(o - a) < Ct && (o -= a * Ct),
                  (r = xr(e, r, o, u)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(a, r),
                  (n = 0)),
                t.point((e = o), (r = u)),
                (i = a);
            },
            lineEnd: function () {
              t.lineEnd(), (e = r = NaN);
            },
            clean: function () {
              return 2 - n;
            }
          };
        }
        function xr(t, n, e, r) {
          var i,
            o,
            u = Math.sin(t - e);
          return M(u) > Ct
            ? Math.atan(
                (Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) -
                  Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) /
                  (i * o * u)
              )
            : (n + r) / 2;
        }
        function wr(t, n, e, r) {
          var i;
          if (null == t)
            (i = e * Pt),
              r.point(-Nt, i),
              r.point(0, i),
              r.point(Nt, i),
              r.point(Nt, 0),
              r.point(Nt, -i),
              r.point(0, -i),
              r.point(-Nt, -i),
              r.point(-Nt, 0),
              r.point(-Nt, i);
          else if (M(t[0] - n[0]) > Ct) {
            var o = t[0] < n[0] ? Nt : -Nt;
            (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(n[0], n[1]);
        }
        function Mr(t, n) {
          var e = t[0],
            r = t[1],
            i = [Math.sin(e), -Math.cos(e), 0],
            o = 0,
            u = 0;
          Ye.reset();
          for (var a = 0, c = n.length; a < c; ++a) {
            var l = n[a],
              s = l.length;
            if (s) {
              var f = l[0],
                h = f[0],
                p = f[1] / 2 + Nt / 4,
                d = Math.sin(p),
                g = Math.cos(p),
                v = 1;
              while (1) {
                v === s && (v = 0), (t = l[v]);
                var y = t[0],
                  m = t[1] / 2 + Nt / 4,
                  b = Math.sin(m),
                  x = Math.cos(m),
                  w = y - h,
                  M = w >= 0 ? 1 : -1,
                  _ = M * w,
                  S = _ > Nt,
                  j = d * b;
                if (
                  (Ye.add(
                    Math.atan2(j * M * Math.sin(_), g * x + j * Math.cos(_))
                  ),
                  (o += S ? w + M * Tt : w),
                  S ^ (h >= e) ^ (y >= e))
                ) {
                  var O = Je(Ge(f), Ge(t));
                  tr(O);
                  var k = Je(i, O);
                  tr(k);
                  var E = (S ^ (w >= 0) ? -1 : 1) * It(k[2]);
                  (r > E || (r === E && (O[0] || O[1]))) &&
                    (u += S ^ (w >= 0) ? 1 : -1);
                }
                if (!v++) break;
                (h = y), (d = b), (g = x), (f = t);
              }
            }
          }
          return (o < -Ct || (o < Ct && Ye < -Ct)) ^ (1 & u);
        }
        function _r(t) {
          var n = Math.cos(t),
            e = n > 0,
            r = M(n) > Ct,
            i = ai(t, 6 * Ft);
          return dr(o, u, i, e ? [0, -t] : [-Nt, t - Nt]);
          function o(t, e) {
            return Math.cos(t) * Math.cos(e) > n;
          }
          function u(t) {
            var n, i, u, l, s;
            return {
              lineStart: function () {
                (l = u = !1), (s = 1);
              },
              point: function (f, h) {
                var p,
                  d = [f, h],
                  g = o(f, h),
                  v = e
                    ? g
                      ? 0
                      : c(f, h)
                    : g
                    ? c(f + (f < 0 ? Nt : -Nt), h)
                    : 0;
                if (
                  (!n && (l = u = g) && t.lineStart(),
                  g !== u &&
                    ((p = a(n, d)),
                    (er(n, p) || er(d, p)) &&
                      ((d[0] += Ct), (d[1] += Ct), (g = o(d[0], d[1])))),
                  g !== u)
                )
                  (s = 0),
                    g
                      ? (t.lineStart(), (p = a(d, n)), t.point(p[0], p[1]))
                      : ((p = a(n, d)), t.point(p[0], p[1]), t.lineEnd()),
                    (n = p);
                else if (r && n && e ^ g) {
                  var y;
                  v & i ||
                    !(y = a(d, n, !0)) ||
                    ((s = 0),
                    e
                      ? (t.lineStart(),
                        t.point(y[0][0], y[0][1]),
                        t.point(y[1][0], y[1][1]),
                        t.lineEnd())
                      : (t.point(y[1][0], y[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(y[0][0], y[0][1])));
                }
                !g || (n && er(n, d)) || t.point(d[0], d[1]),
                  (n = d),
                  (u = g),
                  (i = v);
              },
              lineEnd: function () {
                u && t.lineEnd(), (n = null);
              },
              clean: function () {
                return s | ((l && u) << 1);
              }
            };
          }
          function a(t, e, r) {
            var i = Ge(t),
              o = Ge(e),
              u = [1, 0, 0],
              a = Je(i, o),
              c = Xe(a, a),
              l = a[0],
              s = c - l * l;
            if (!s) return !r && t;
            var f = (n * c) / s,
              h = (-n * l) / s,
              p = Je(u, a),
              d = Qe(u, f),
              g = Qe(a, h);
            Ke(d, g);
            var v = p,
              y = Xe(d, v),
              m = Xe(v, v),
              b = y * y - m * (Xe(d, d) - 1);
            if (!(b < 0)) {
              var x = Math.sqrt(b),
                w = Qe(v, (-y - x) / m);
              if ((Ke(w, d), (w = nr(w)), !r)) return w;
              var _,
                S = t[0],
                j = e[0],
                O = t[1],
                k = e[1];
              j < S && ((_ = S), (S = j), (j = _));
              var E = j - S,
                A = M(E - Nt) < Ct,
                C = A || E < Ct;
              if (
                (!A && k < O && ((_ = O), (O = k), (k = _)),
                C
                  ? A
                    ? (O + k > 0) ^ (w[1] < (M(w[0] - S) < Ct ? O : k))
                    : O <= w[1] && w[1] <= k
                  : (E > Nt) ^ (S <= w[0] && w[0] <= j))
              ) {
                var L = Qe(v, (-y + x) / m);
                return Ke(L, d), [w, nr(L)];
              }
            }
          }
          function c(n, r) {
            var i = e ? t : Nt - t,
              o = 0;
            return (
              n < -i ? (o |= 1) : n > i && (o |= 2),
              r < -i ? (o |= 4) : r > i && (o |= 8),
              o
            );
          }
        }
        function Sr(t, n, e, r) {
          return function (i) {
            var o,
              u = i.a,
              a = i.b,
              c = u.x,
              l = u.y,
              s = a.x,
              f = a.y,
              h = 0,
              p = 1,
              d = s - c,
              g = f - l;
            if (((o = t - c), d || !(o > 0))) {
              if (((o /= d), d < 0)) {
                if (o < h) return;
                o < p && (p = o);
              } else if (d > 0) {
                if (o > p) return;
                o > h && (h = o);
              }
              if (((o = e - c), d || !(o < 0))) {
                if (((o /= d), d < 0)) {
                  if (o > p) return;
                  o > h && (h = o);
                } else if (d > 0) {
                  if (o < h) return;
                  o < p && (p = o);
                }
                if (((o = n - l), g || !(o > 0))) {
                  if (((o /= g), g < 0)) {
                    if (o < h) return;
                    o < p && (p = o);
                  } else if (g > 0) {
                    if (o > p) return;
                    o > h && (h = o);
                  }
                  if (((o = r - l), g || !(o < 0))) {
                    if (((o /= g), g < 0)) {
                      if (o > p) return;
                      o > h && (h = o);
                    } else if (g > 0) {
                      if (o < h) return;
                      o < p && (p = o);
                    }
                    return (
                      h > 0 &&
                        (i.a = {
                          x: c + h * d,
                          y: l + h * g
                        }),
                      p < 1 &&
                        (i.b = {
                          x: c + p * d,
                          y: l + p * g
                        }),
                      i
                    );
                  }
                }
              }
            }
          };
        }
        var jr = 1e9;
        function Or(t, n, e, r) {
          return function (c) {
            var l,
              s,
              f,
              h,
              p,
              d,
              g,
              v,
              y,
              m,
              b,
              x = c,
              w = vr(),
              M = Sr(t, n, e, r),
              _ = {
                point: k,
                lineStart: E,
                lineEnd: A,
                polygonStart: function () {
                  (c = w), (l = []), (s = []), (b = !0);
                },
                polygonEnd: function () {
                  (c = x), (l = o.merge(l));
                  var n = S([t, r]),
                    e = b && n,
                    i = l.length;
                  (e || i) &&
                    (c.polygonStart(),
                    e && (c.lineStart(), j(null, null, 1, c), c.lineEnd()),
                    i && fr(l, u, n, j, c),
                    c.polygonEnd()),
                    (l = s = f = null);
                }
              };
            function S(t) {
              for (var n = 0, e = s.length, r = t[1], i = 0; i < e; ++i)
                for (var o, u = 1, a = s[i], c = a.length, l = a[0]; u < c; ++u)
                  (o = a[u]),
                    l[1] <= r
                      ? o[1] > r && zt(l, o, t) > 0 && ++n
                      : o[1] <= r && zt(l, o, t) < 0 && --n,
                    (l = o);
              return 0 !== n;
            }
            function j(o, u, c, l) {
              var s = 0,
                f = 0;
              if (
                null == o ||
                (s = i(o, c)) !== (f = i(u, c)) ||
                (a(o, u) < 0) ^ (c > 0)
              )
                do {
                  l.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
                } while ((s = (s + c + 4) % 4) !== f);
              else l.point(u[0], u[1]);
            }
            function O(i, o) {
              return t <= i && i <= e && n <= o && o <= r;
            }
            function k(t, n) {
              O(t, n) && c.point(t, n);
            }
            function E() {
              (_.point = C),
                s && s.push((f = [])),
                (m = !0),
                (y = !1),
                (g = v = NaN);
            }
            function A() {
              l && (C(h, p), d && y && w.rejoin(), l.push(w.buffer())),
                (_.point = k),
                y && c.lineEnd();
            }
            function C(t, n) {
              (t = Math.max(-jr, Math.min(jr, t))),
                (n = Math.max(-jr, Math.min(jr, n)));
              var e = O(t, n);
              if ((s && f.push([t, n]), m))
                (h = t),
                  (p = n),
                  (d = e),
                  (m = !1),
                  e && (c.lineStart(), c.point(t, n));
              else if (e && y) c.point(t, n);
              else {
                var r = {
                  a: {
                    x: g,
                    y: v
                  },
                  b: {
                    x: t,
                    y: n
                  }
                };
                M(r)
                  ? (y || (c.lineStart(), c.point(r.a.x, r.a.y)),
                    c.point(r.b.x, r.b.y),
                    e || c.lineEnd(),
                    (b = !1))
                  : e && (c.lineStart(), c.point(t, n), (b = !1));
              }
              (g = t), (v = n), (y = e);
            }
            return _;
          };
          function i(r, i) {
            return M(r[0] - t) < Ct
              ? i > 0
                ? 0
                : 3
              : M(r[0] - e) < Ct
              ? i > 0
                ? 2
                : 1
              : M(r[1] - n) < Ct
              ? i > 0
                ? 1
                : 0
              : i > 0
              ? 3
              : 2;
          }
          function u(t, n) {
            return a(t.x, n.x);
          }
          function a(t, n) {
            var e = i(t, 1),
              r = i(n, 1);
            return e !== r
              ? e - r
              : 0 === e
              ? n[1] - t[1]
              : 1 === e
              ? t[0] - n[0]
              : 2 === e
              ? t[1] - n[1]
              : n[0] - t[0];
          }
        }
        function kr(t) {
          var n = 0,
            e = Nt / 3,
            r = Qr(t),
            i = r(n, e);
          return (
            (i.parallels = function (t) {
              return arguments.length
                ? r((n = (t[0] * Nt) / 180), (e = (t[1] * Nt) / 180))
                : [(n / Nt) * 180, (e / Nt) * 180];
            }),
            i
          );
        }
        function Er(t, n) {
          var e = Math.sin(t),
            r = (e + Math.sin(n)) / 2,
            i = 1 + e * (2 * r - e),
            o = Math.sqrt(i) / r;
          function u(t, n) {
            var e = Math.sqrt(i - 2 * r * Math.sin(n)) / r;
            return [e * Math.sin((t *= r)), o - e * Math.cos(t)];
          }
          return (
            (u.invert = function (t, n) {
              var e = o - n;
              return [
                Math.atan2(t, e) / r,
                It((i - (t * t + e * e) * r * r) / (2 * r))
              ];
            }),
            u
          );
        }
        (o.geo.clipExtent = function () {
          var t,
            n,
            e,
            r,
            i,
            o,
            u = {
              stream: function (t) {
                return i && (i.valid = !1), (i = o(t)), (i.valid = !0), i;
              },
              extent: function (a) {
                return arguments.length
                  ? ((o = Or(
                      (t = +a[0][0]),
                      (n = +a[0][1]),
                      (e = +a[1][0]),
                      (r = +a[1][1])
                    )),
                    i && ((i.valid = !1), (i = null)),
                    u)
                  : [
                      [t, n],
                      [e, r]
                    ];
              }
            };
          return u.extent([
            [0, 0],
            [960, 500]
          ]);
        }),
          ((o.geo.conicEqualArea = function () {
            return kr(Er);
          }).raw = Er),
          (o.geo.albers = function () {
            return o.geo
              .conicEqualArea()
              .rotate([96, 0])
              .center([-0.6, 38.7])
              .parallels([29.5, 45.5])
              .scale(1070);
          }),
          (o.geo.albersUsa = function () {
            var t,
              n,
              e,
              r,
              i = o.geo.albers(),
              u = o.geo
                .conicEqualArea()
                .rotate([154, 0])
                .center([-2, 58.5])
                .parallels([55, 65]),
              a = o.geo
                .conicEqualArea()
                .rotate([157, 0])
                .center([-3, 19.9])
                .parallels([8, 18]),
              c = {
                point: function (n, e) {
                  t = [n, e];
                }
              };
            function l(i) {
              var o = i[0],
                u = i[1];
              return (t = null), n(o, u), t || (e(o, u), t) || r(o, u), t;
            }
            return (
              (l.invert = function (t) {
                var n = i.scale(),
                  e = i.translate(),
                  r = (t[0] - e[0]) / n,
                  o = (t[1] - e[1]) / n;
                return (o >= 0.12 && o < 0.234 && r >= -0.425 && r < -0.214
                  ? u
                  : o >= 0.166 && o < 0.234 && r >= -0.214 && r < -0.115
                  ? a
                  : i
                ).invert(t);
              }),
              (l.stream = function (t) {
                var n = i.stream(t),
                  e = u.stream(t),
                  r = a.stream(t);
                return {
                  point: function (t, i) {
                    n.point(t, i), e.point(t, i), r.point(t, i);
                  },
                  sphere: function () {
                    n.sphere(), e.sphere(), r.sphere();
                  },
                  lineStart: function () {
                    n.lineStart(), e.lineStart(), r.lineStart();
                  },
                  lineEnd: function () {
                    n.lineEnd(), e.lineEnd(), r.lineEnd();
                  },
                  polygonStart: function () {
                    n.polygonStart(), e.polygonStart(), r.polygonStart();
                  },
                  polygonEnd: function () {
                    n.polygonEnd(), e.polygonEnd(), r.polygonEnd();
                  }
                };
              }),
              (l.precision = function (t) {
                return arguments.length
                  ? (i.precision(t), u.precision(t), a.precision(t), l)
                  : i.precision();
              }),
              (l.scale = function (t) {
                return arguments.length
                  ? (i.scale(t),
                    u.scale(0.35 * t),
                    a.scale(t),
                    l.translate(i.translate()))
                  : i.scale();
              }),
              (l.translate = function (t) {
                if (!arguments.length) return i.translate();
                var o = i.scale(),
                  s = +t[0],
                  f = +t[1];
                return (
                  (n = i
                    .translate(t)
                    .clipExtent([
                      [s - 0.455 * o, f - 0.238 * o],
                      [s + 0.455 * o, f + 0.238 * o]
                    ])
                    .stream(c).point),
                  (e = u
                    .translate([s - 0.307 * o, f + 0.201 * o])
                    .clipExtent([
                      [s - 0.425 * o + Ct, f + 0.12 * o + Ct],
                      [s - 0.214 * o - Ct, f + 0.234 * o - Ct]
                    ])
                    .stream(c).point),
                  (r = a
                    .translate([s - 0.205 * o, f + 0.212 * o])
                    .clipExtent([
                      [s - 0.214 * o + Ct, f + 0.166 * o + Ct],
                      [s - 0.115 * o - Ct, f + 0.234 * o - Ct]
                    ])
                    .stream(c).point),
                  l
                );
              }),
              l.scale(1070)
            );
          });
        var Ar,
          Cr,
          Lr,
          Nr,
          Tr,
          Rr,
          Pr = {
            point: D,
            lineStart: D,
            lineEnd: D,
            polygonStart: function () {
              (Cr = 0), (Pr.lineStart = Fr);
            },
            polygonEnd: function () {
              (Pr.lineStart = Pr.lineEnd = Pr.point = D), (Ar += M(Cr / 2));
            }
          };
        function Fr() {
          var t, n, e, r;
          function i(t, n) {
            (Cr += r * t - e * n), (e = t), (r = n);
          }
          (Pr.point = function (o, u) {
            (Pr.point = i), (t = e = o), (n = r = u);
          }),
            (Pr.lineEnd = function () {
              i(t, n);
            });
        }
        var Ur = {
          point: qr,
          lineStart: D,
          lineEnd: D,
          polygonStart: D,
          polygonEnd: D
        };
        function qr(t, n) {
          t < Lr && (Lr = t),
            t > Tr && (Tr = t),
            n < Nr && (Nr = n),
            n > Rr && (Rr = n);
        }
        function zr() {
          var t = Dr(4.5),
            n = [],
            e = {
              point: r,
              lineStart: function () {
                e.point = i;
              },
              lineEnd: u,
              polygonStart: function () {
                e.lineEnd = a;
              },
              polygonEnd: function () {
                (e.lineEnd = u), (e.point = r);
              },
              pointRadius: function (n) {
                return (t = Dr(n)), e;
              },
              result: function () {
                if (n.length) {
                  var t = n.join("");
                  return (n = []), t;
                }
              }
            };
          function r(e, r) {
            n.push("M", e, ",", r, t);
          }
          function i(t, r) {
            n.push("M", t, ",", r), (e.point = o);
          }
          function o(t, e) {
            n.push("L", t, ",", e);
          }
          function u() {
            e.point = r;
          }
          function a() {
            n.push("Z");
          }
          return e;
        }
        function Dr(t) {
          return (
            "m0," +
            t +
            "a" +
            t +
            "," +
            t +
            " 0 1,1 0," +
            -2 * t +
            "a" +
            t +
            "," +
            t +
            " 0 1,1 0," +
            2 * t +
            "z"
          );
        }
        var Ir,
          Br = {
            point: Hr,
            lineStart: Vr,
            lineEnd: $r,
            polygonStart: function () {
              Br.lineStart = Yr;
            },
            polygonEnd: function () {
              (Br.point = Hr), (Br.lineStart = Vr), (Br.lineEnd = $r);
            }
          };
        function Hr(t, n) {
          (Ue += t), (qe += n), ++ze;
        }
        function Vr() {
          var t, n;
          function e(e, r) {
            var i = e - t,
              o = r - n,
              u = Math.sqrt(i * i + o * o);
            (De += (u * (t + e)) / 2),
              (Ie += (u * (n + r)) / 2),
              (Be += u),
              Hr((t = e), (n = r));
          }
          Br.point = function (r, i) {
            (Br.point = e), Hr((t = r), (n = i));
          };
        }
        function $r() {
          Br.point = Hr;
        }
        function Yr() {
          var t, n, e, r;
          function i(t, n) {
            var i = t - e,
              o = n - r,
              u = Math.sqrt(i * i + o * o);
            (De += (u * (e + t)) / 2),
              (Ie += (u * (r + n)) / 2),
              (Be += u),
              (u = r * t - e * n),
              (He += u * (e + t)),
              (Ve += u * (r + n)),
              ($e += 3 * u),
              Hr((e = t), (r = n));
          }
          (Br.point = function (o, u) {
            (Br.point = i), Hr((t = e = o), (n = r = u));
          }),
            (Br.lineEnd = function () {
              i(t, n);
            });
        }
        function Wr(t) {
          var n = 4.5,
            e = {
              point: r,
              lineStart: function () {
                e.point = i;
              },
              lineEnd: u,
              polygonStart: function () {
                e.lineEnd = a;
              },
              polygonEnd: function () {
                (e.lineEnd = u), (e.point = r);
              },
              pointRadius: function (t) {
                return (n = t), e;
              },
              result: D
            };
          function r(e, r) {
            t.moveTo(e + n, r), t.arc(e, r, n, 0, Tt);
          }
          function i(n, r) {
            t.moveTo(n, r), (e.point = o);
          }
          function o(n, e) {
            t.lineTo(n, e);
          }
          function u() {
            e.point = r;
          }
          function a() {
            t.closePath();
          }
          return e;
        }
        function Zr(t) {
          var n = 0.5,
            e = Math.cos(30 * Ft),
            r = 16;
          function i(t) {
            return (r ? u : o)(t);
          }
          function o(n) {
            return Jr(n, function (e, r) {
              (e = t(e, r)), n.point(e[0], e[1]);
            });
          }
          function u(n) {
            var e,
              i,
              o,
              u,
              c,
              l,
              s,
              f,
              h,
              p,
              d,
              g,
              v = {
                point: y,
                lineStart: m,
                lineEnd: x,
                polygonStart: function () {
                  n.polygonStart(), (v.lineStart = w);
                },
                polygonEnd: function () {
                  n.polygonEnd(), (v.lineStart = m);
                }
              };
            function y(e, r) {
              (e = t(e, r)), n.point(e[0], e[1]);
            }
            function m() {
              (f = NaN), (v.point = b), n.lineStart();
            }
            function b(e, i) {
              var o = Ge([e, i]),
                u = t(e, i);
              a(
                f,
                h,
                s,
                p,
                d,
                g,
                (f = u[0]),
                (h = u[1]),
                (s = e),
                (p = o[0]),
                (d = o[1]),
                (g = o[2]),
                r,
                n
              ),
                n.point(f, h);
            }
            function x() {
              (v.point = y), n.lineEnd();
            }
            function w() {
              m(), (v.point = M), (v.lineEnd = _);
            }
            function M(t, n) {
              b((e = t), n),
                (i = f),
                (o = h),
                (u = p),
                (c = d),
                (l = g),
                (v.point = b);
            }
            function _() {
              a(f, h, s, p, d, g, i, o, e, u, c, l, r, n), (v.lineEnd = x), x();
            }
            return v;
          }
          function a(r, i, o, u, c, l, s, f, h, p, d, g, v, y) {
            var m = s - r,
              b = f - i,
              x = m * m + b * b;
            if (x > 4 * n && v--) {
              var w = u + p,
                _ = c + d,
                S = l + g,
                j = Math.sqrt(w * w + _ * _ + S * S),
                O = Math.asin((S /= j)),
                k =
                  M(M(S) - 1) < Ct || M(o - h) < Ct
                    ? (o + h) / 2
                    : Math.atan2(_, w),
                E = t(k, O),
                A = E[0],
                C = E[1],
                L = A - r,
                N = C - i,
                T = b * L - m * N;
              ((T * T) / x > n ||
                M((m * L + b * N) / x - 0.5) > 0.3 ||
                u * p + c * d + l * g < e) &&
                (a(r, i, o, u, c, l, A, C, k, (w /= j), (_ /= j), S, v, y),
                y.point(A, C),
                a(A, C, k, w, _, S, s, f, h, p, d, g, v, y));
            }
          }
          return (
            (i.precision = function (t) {
              return arguments.length
                ? ((r = (n = t * t) > 0 && 16), i)
                : Math.sqrt(n);
            }),
            i
          );
        }
        function Gr(t) {
          var n = Zr(function (n, e) {
            return t([n * Ut, e * Ut]);
          });
          return function (t) {
            return ti(n(t));
          };
        }
        function Xr(t) {
          this.stream = t;
        }
        function Jr(t, n) {
          return {
            point: n,
            sphere: function () {
              t.sphere();
            },
            lineStart: function () {
              t.lineStart();
            },
            lineEnd: function () {
              t.lineEnd();
            },
            polygonStart: function () {
              t.polygonStart();
            },
            polygonEnd: function () {
              t.polygonEnd();
            }
          };
        }
        function Kr(t) {
          return Qr(function () {
            return t;
          })();
        }
        function Qr(t) {
          var n,
            e,
            r,
            i,
            u,
            a,
            c = Zr(function (t, e) {
              return (t = n(t, e)), [t[0] * l + i, u - t[1] * l];
            }),
            l = 150,
            s = 480,
            f = 250,
            h = 0,
            p = 0,
            d = 0,
            g = 0,
            v = 0,
            y = mr,
            m = F,
            b = null,
            x = null;
          function w(t) {
            return (t = r(t[0] * Ft, t[1] * Ft)), [t[0] * l + i, u - t[1] * l];
          }
          function M(t) {
            return (
              (t = r.invert((t[0] - i) / l, (u - t[1]) / l)),
              t && [t[0] * Ut, t[1] * Ut]
            );
          }
          function _() {
            r = lr((e = ri(d, g, v)), n);
            var t = n(h, p);
            return (i = s - t[0] * l), (u = f + t[1] * l), S();
          }
          function S() {
            return a && ((a.valid = !1), (a = null)), w;
          }
          return (
            (w.stream = function (t) {
              return (
                a && (a.valid = !1), (a = ti(y(e, c(m(t))))), (a.valid = !0), a
              );
            }),
            (w.clipAngle = function (t) {
              return arguments.length
                ? ((y = null == t ? ((b = t), mr) : _r((b = +t) * Ft)), S())
                : b;
            }),
            (w.clipExtent = function (t) {
              return arguments.length
                ? ((x = t),
                  (m = t ? Or(t[0][0], t[0][1], t[1][0], t[1][1]) : F),
                  S())
                : x;
            }),
            (w.scale = function (t) {
              return arguments.length ? ((l = +t), _()) : l;
            }),
            (w.translate = function (t) {
              return arguments.length
                ? ((s = +t[0]), (f = +t[1]), _())
                : [s, f];
            }),
            (w.center = function (t) {
              return arguments.length
                ? ((h = (t[0] % 360) * Ft), (p = (t[1] % 360) * Ft), _())
                : [h * Ut, p * Ut];
            }),
            (w.rotate = function (t) {
              return arguments.length
                ? ((d = (t[0] % 360) * Ft),
                  (g = (t[1] % 360) * Ft),
                  (v = t.length > 2 ? (t[2] % 360) * Ft : 0),
                  _())
                : [d * Ut, g * Ut, v * Ut];
            }),
            o.rebind(w, c, "precision"),
            function () {
              return (
                (n = t.apply(this, arguments)), (w.invert = n.invert && M), _()
              );
            }
          );
        }
        function ti(t) {
          return Jr(t, function (n, e) {
            t.point(n * Ft, e * Ft);
          });
        }
        function ni(t, n) {
          return [t, n];
        }
        function ei(t, n) {
          return [t > Nt ? t - Tt : t < -Nt ? t + Tt : t, n];
        }
        function ri(t, n, e) {
          return t
            ? n || e
              ? lr(oi(t), ui(n, e))
              : oi(t)
            : n || e
            ? ui(n, e)
            : ei;
        }
        function ii(t) {
          return function (n, e) {
            return (n += t), [n > Nt ? n - Tt : n < -Nt ? n + Tt : n, e];
          };
        }
        function oi(t) {
          var n = ii(t);
          return (n.invert = ii(-t)), n;
        }
        function ui(t, n) {
          var e = Math.cos(t),
            r = Math.sin(t),
            i = Math.cos(n),
            o = Math.sin(n);
          function u(t, n) {
            var u = Math.cos(n),
              a = Math.cos(t) * u,
              c = Math.sin(t) * u,
              l = Math.sin(n),
              s = l * e + a * r;
            return [
              Math.atan2(c * i - s * o, a * e - l * r),
              It(s * i + c * o)
            ];
          }
          return (
            (u.invert = function (t, n) {
              var u = Math.cos(n),
                a = Math.cos(t) * u,
                c = Math.sin(t) * u,
                l = Math.sin(n),
                s = l * i - c * o;
              return [
                Math.atan2(c * i + l * o, a * e + s * r),
                It(s * e - a * r)
              ];
            }),
            u
          );
        }
        function ai(t, n) {
          var e = Math.cos(t),
            r = Math.sin(t);
          return function (i, o, u, a) {
            var c = u * n;
            null != i
              ? ((i = ci(e, i)),
                (o = ci(e, o)),
                (u > 0 ? i < o : i > o) && (i += u * Tt))
              : ((i = t + u * Tt), (o = t - 0.5 * c));
            for (var l, s = i; u > 0 ? s > o : s < o; s -= c)
              a.point(
                (l = nr([e, -r * Math.cos(s), -r * Math.sin(s)]))[0],
                l[1]
              );
          };
        }
        function ci(t, n) {
          var e = Ge(n);
          (e[0] -= t), tr(e);
          var r = Dt(-e[1]);
          return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ct) % (2 * Math.PI);
        }
        function li(t, n, e) {
          var r = o.range(t, n - Ct, e).concat(n);
          return function (t) {
            return r.map(function (n) {
              return [t, n];
            });
          };
        }
        function si(t, n, e) {
          var r = o.range(t, n - Ct, e).concat(n);
          return function (t) {
            return r.map(function (n) {
              return [n, t];
            });
          };
        }
        function fi(t) {
          return t.source;
        }
        function hi(t) {
          return t.target;
        }
        function pi(t, n, e, r) {
          var i = Math.cos(n),
            o = Math.sin(n),
            u = Math.cos(r),
            a = Math.sin(r),
            c = i * Math.cos(t),
            l = i * Math.sin(t),
            s = u * Math.cos(e),
            f = u * Math.sin(e),
            h = 2 * Math.asin(Math.sqrt($t(r - n) + i * u * $t(e - t))),
            p = 1 / Math.sin(h),
            d = h
              ? function (t) {
                  var n = Math.sin((t *= h)) * p,
                    e = Math.sin(h - t) * p,
                    r = e * c + n * s,
                    i = e * l + n * f,
                    u = e * o + n * a;
                  return [
                    Math.atan2(i, r) * Ut,
                    Math.atan2(u, Math.sqrt(r * r + i * i)) * Ut
                  ];
                }
              : function () {
                  return [t * Ut, n * Ut];
                };
          return (d.distance = h), d;
        }
        (o.geo.path = function () {
          var t,
            n,
            e,
            r,
            i,
            u = 4.5;
          function a(t) {
            return (
              t &&
                ("function" === typeof u &&
                  r.pointRadius(+u.apply(this, arguments)),
                (i && i.valid) || (i = e(r)),
                o.geo.stream(t, i)),
              r.result()
            );
          }
          function c() {
            return (i = null), a;
          }
          return (
            (a.area = function (t) {
              return (Ar = 0), o.geo.stream(t, e(Pr)), Ar;
            }),
            (a.centroid = function (t) {
              return (
                (Ue = qe = ze = De = Ie = Be = He = Ve = $e = 0),
                o.geo.stream(t, e(Br)),
                $e
                  ? [He / $e, Ve / $e]
                  : Be
                  ? [De / Be, Ie / Be]
                  : ze
                  ? [Ue / ze, qe / ze]
                  : [NaN, NaN]
              );
            }),
            (a.bounds = function (t) {
              return (
                (Tr = Rr = -(Lr = Nr = 1 / 0)),
                o.geo.stream(t, e(Ur)),
                [
                  [Lr, Nr],
                  [Tr, Rr]
                ]
              );
            }),
            (a.projection = function (n) {
              return arguments.length
                ? ((e = (t = n) ? n.stream || Gr(n) : F), c())
                : t;
            }),
            (a.context = function (t) {
              return arguments.length
                ? ((r = null == (n = t) ? new zr() : new Wr(t)),
                  "function" !== typeof u && r.pointRadius(u),
                  c())
                : n;
            }),
            (a.pointRadius = function (t) {
              return arguments.length
                ? ((u = "function" === typeof t ? t : (r.pointRadius(+t), +t)),
                  a)
                : u;
            }),
            a.projection(o.geo.albersUsa()).context(null)
          );
        }),
          (o.geo.transform = function (t) {
            return {
              stream: function (n) {
                var e = new Xr(n);
                for (var r in t) e[r] = t[r];
                return e;
              }
            };
          }),
          (Xr.prototype = {
            point: function (t, n) {
              this.stream.point(t, n);
            },
            sphere: function () {
              this.stream.sphere();
            },
            lineStart: function () {
              this.stream.lineStart();
            },
            lineEnd: function () {
              this.stream.lineEnd();
            },
            polygonStart: function () {
              this.stream.polygonStart();
            },
            polygonEnd: function () {
              this.stream.polygonEnd();
            }
          }),
          (o.geo.projection = Kr),
          (o.geo.projectionMutator = Qr),
          ((o.geo.equirectangular = function () {
            return Kr(ni);
          }).raw = ni.invert = ni),
          (o.geo.rotation = function (t) {
            function n(n) {
              return (
                (n = t(n[0] * Ft, n[1] * Ft)), (n[0] *= Ut), (n[1] *= Ut), n
              );
            }
            return (
              (t = ri(
                (t[0] % 360) * Ft,
                t[1] * Ft,
                t.length > 2 ? t[2] * Ft : 0
              )),
              (n.invert = function (n) {
                return (
                  (n = t.invert(n[0] * Ft, n[1] * Ft)),
                  (n[0] *= Ut),
                  (n[1] *= Ut),
                  n
                );
              }),
              n
            );
          }),
          (ei.invert = ni),
          (o.geo.circle = function () {
            var t,
              n,
              e = [0, 0],
              r = 6;
            function i() {
              var t = "function" === typeof e ? e.apply(this, arguments) : e,
                r = ri(-t[0] * Ft, -t[1] * Ft, 0).invert,
                i = [];
              return (
                n(null, null, 1, {
                  point: function (t, n) {
                    i.push((t = r(t, n))), (t[0] *= Ut), (t[1] *= Ut);
                  }
                }),
                {
                  type: "Polygon",
                  coordinates: [i]
                }
              );
            }
            return (
              (i.origin = function (t) {
                return arguments.length ? ((e = t), i) : e;
              }),
              (i.angle = function (e) {
                return arguments.length
                  ? ((n = ai((t = +e) * Ft, r * Ft)), i)
                  : t;
              }),
              (i.precision = function (e) {
                return arguments.length
                  ? ((n = ai(t * Ft, (r = +e) * Ft)), i)
                  : r;
              }),
              i.angle(90)
            );
          }),
          (o.geo.distance = function (t, n) {
            var e,
              r = (n[0] - t[0]) * Ft,
              i = t[1] * Ft,
              o = n[1] * Ft,
              u = Math.sin(r),
              a = Math.cos(r),
              c = Math.sin(i),
              l = Math.cos(i),
              s = Math.sin(o),
              f = Math.cos(o);
            return Math.atan2(
              Math.sqrt((e = f * u) * e + (e = l * s - c * f * a) * e),
              c * s + l * f * a
            );
          }),
          (o.geo.graticule = function () {
            var t,
              n,
              e,
              r,
              i,
              u,
              a,
              c,
              l,
              s,
              f,
              h,
              p = 10,
              d = p,
              g = 90,
              v = 360,
              y = 2.5;
            function m() {
              return {
                type: "MultiLineString",
                coordinates: b()
              };
            }
            function b() {
              return o
                .range(Math.ceil(r / g) * g, e, g)
                .map(f)
                .concat(o.range(Math.ceil(c / v) * v, a, v).map(h))
                .concat(
                  o
                    .range(Math.ceil(n / p) * p, t, p)
                    .filter(function (t) {
                      return M(t % g) > Ct;
                    })
                    .map(l)
                )
                .concat(
                  o
                    .range(Math.ceil(u / d) * d, i, d)
                    .filter(function (t) {
                      return M(t % v) > Ct;
                    })
                    .map(s)
                );
            }
            return (
              (m.lines = function () {
                return b().map(function (t) {
                  return {
                    type: "LineString",
                    coordinates: t
                  };
                });
              }),
              (m.outline = function () {
                return {
                  type: "Polygon",
                  coordinates: [
                    f(r).concat(
                      h(a).slice(1),
                      f(e).reverse().slice(1),
                      h(c).reverse().slice(1)
                    )
                  ]
                };
              }),
              (m.extent = function (t) {
                return arguments.length
                  ? m.majorExtent(t).minorExtent(t)
                  : m.minorExtent();
              }),
              (m.majorExtent = function (t) {
                return arguments.length
                  ? ((r = +t[0][0]),
                    (e = +t[1][0]),
                    (c = +t[0][1]),
                    (a = +t[1][1]),
                    r > e && ((t = r), (r = e), (e = t)),
                    c > a && ((t = c), (c = a), (a = t)),
                    m.precision(y))
                  : [
                      [r, c],
                      [e, a]
                    ];
              }),
              (m.minorExtent = function (e) {
                return arguments.length
                  ? ((n = +e[0][0]),
                    (t = +e[1][0]),
                    (u = +e[0][1]),
                    (i = +e[1][1]),
                    n > t && ((e = n), (n = t), (t = e)),
                    u > i && ((e = u), (u = i), (i = e)),
                    m.precision(y))
                  : [
                      [n, u],
                      [t, i]
                    ];
              }),
              (m.step = function (t) {
                return arguments.length
                  ? m.majorStep(t).minorStep(t)
                  : m.minorStep();
              }),
              (m.majorStep = function (t) {
                return arguments.length
                  ? ((g = +t[0]), (v = +t[1]), m)
                  : [g, v];
              }),
              (m.minorStep = function (t) {
                return arguments.length
                  ? ((p = +t[0]), (d = +t[1]), m)
                  : [p, d];
              }),
              (m.precision = function (o) {
                return arguments.length
                  ? ((y = +o),
                    (l = li(u, i, 90)),
                    (s = si(n, t, y)),
                    (f = li(c, a, 90)),
                    (h = si(r, e, y)),
                    m)
                  : y;
              }),
              m
                .majorExtent([
                  [-180, -90 + Ct],
                  [180, 90 - Ct]
                ])
                .minorExtent([
                  [-180, -80 - Ct],
                  [180, 80 + Ct]
                ])
            );
          }),
          (o.geo.greatArc = function () {
            var t,
              n,
              e = fi,
              r = hi;
            function i() {
              return {
                type: "LineString",
                coordinates: [
                  t || e.apply(this, arguments),
                  n || r.apply(this, arguments)
                ]
              };
            }
            return (
              (i.distance = function () {
                return o.geo.distance(
                  t || e.apply(this, arguments),
                  n || r.apply(this, arguments)
                );
              }),
              (i.source = function (n) {
                return arguments.length
                  ? ((e = n), (t = "function" === typeof n ? null : n), i)
                  : e;
              }),
              (i.target = function (t) {
                return arguments.length
                  ? ((r = t), (n = "function" === typeof t ? null : t), i)
                  : r;
              }),
              (i.precision = function () {
                return arguments.length ? i : 0;
              }),
              i
            );
          }),
          (o.geo.interpolate = function (t, n) {
            return pi(t[0] * Ft, t[1] * Ft, n[0] * Ft, n[1] * Ft);
          }),
          (o.geo.length = function (t) {
            return (Ir = 0), o.geo.stream(t, di), Ir;
          });
        var di = {
          sphere: D,
          point: D,
          lineStart: gi,
          lineEnd: D,
          polygonStart: D,
          polygonEnd: D
        };
        function gi() {
          var t, n, e;
          function r(r, i) {
            var o = Math.sin((i *= Ft)),
              u = Math.cos(i),
              a = M((r *= Ft) - t),
              c = Math.cos(a);
            (Ir += Math.atan2(
              Math.sqrt(
                (a = u * Math.sin(a)) * a + (a = e * o - n * u * c) * a
              ),
              n * o + e * u * c
            )),
              (t = r),
              (n = o),
              (e = u);
          }
          (di.point = function (i, o) {
            (t = i * Ft),
              (n = Math.sin((o *= Ft))),
              (e = Math.cos(o)),
              (di.point = r);
          }),
            (di.lineEnd = function () {
              di.point = di.lineEnd = D;
            });
        }
        function vi(t, n) {
          function e(n, e) {
            var r = Math.cos(n),
              i = Math.cos(e),
              o = t(r * i);
            return [o * i * Math.sin(n), o * Math.sin(e)];
          }
          return (
            (e.invert = function (t, e) {
              var r = Math.sqrt(t * t + e * e),
                i = n(r),
                o = Math.sin(i),
                u = Math.cos(i);
              return [Math.atan2(t * o, r * u), Math.asin(r && (e * o) / r)];
            }),
            e
          );
        }
        var yi = vi(
          function (t) {
            return Math.sqrt(2 / (1 + t));
          },
          function (t) {
            return 2 * Math.asin(t / 2);
          }
        );
        (o.geo.azimuthalEqualArea = function () {
          return Kr(yi);
        }).raw = yi;
        var mi = vi(function (t) {
          var n = Math.acos(t);
          return n && n / Math.sin(n);
        }, F);
        function bi(t, n) {
          var e = Math.cos(t),
            r = function (t) {
              return Math.tan(Nt / 4 + t / 2);
            },
            i =
              t === n
                ? Math.sin(t)
                : Math.log(e / Math.cos(n)) / Math.log(r(n) / r(t)),
            o = (e * Math.pow(r(t), i)) / i;
          if (!i) return Mi;
          function u(t, n) {
            o > 0
              ? n < -Pt + Ct && (n = -Pt + Ct)
              : n > Pt - Ct && (n = Pt - Ct);
            var e = o / Math.pow(r(n), i);
            return [e * Math.sin(i * t), o - e * Math.cos(i * t)];
          }
          return (
            (u.invert = function (t, n) {
              var e = o - n,
                r = qt(i) * Math.sqrt(t * t + e * e);
              return [
                Math.atan2(t, e) / i,
                2 * Math.atan(Math.pow(o / r, 1 / i)) - Pt
              ];
            }),
            u
          );
        }
        function xi(t, n) {
          var e = Math.cos(t),
            r = t === n ? Math.sin(t) : (e - Math.cos(n)) / (n - t),
            i = e / r + t;
          if (M(r) < Ct) return ni;
          function o(t, n) {
            var e = i - n;
            return [e * Math.sin(r * t), i - e * Math.cos(r * t)];
          }
          return (
            (o.invert = function (t, n) {
              var e = i - n;
              return [
                Math.atan2(t, e) / r,
                i - qt(r) * Math.sqrt(t * t + e * e)
              ];
            }),
            o
          );
        }
        ((o.geo.azimuthalEquidistant = function () {
          return Kr(mi);
        }).raw = mi),
          ((o.geo.conicConformal = function () {
            return kr(bi);
          }).raw = bi),
          ((o.geo.conicEquidistant = function () {
            return kr(xi);
          }).raw = xi);
        var wi = vi(function (t) {
          return 1 / t;
        }, Math.atan);
        function Mi(t, n) {
          return [t, Math.log(Math.tan(Nt / 4 + n / 2))];
        }
        function _i(t) {
          var n,
            e = Kr(t),
            r = e.scale,
            i = e.translate,
            o = e.clipExtent;
          return (
            (e.scale = function () {
              var t = r.apply(e, arguments);
              return t === e ? (n ? e.clipExtent(null) : e) : t;
            }),
            (e.translate = function () {
              var t = i.apply(e, arguments);
              return t === e ? (n ? e.clipExtent(null) : e) : t;
            }),
            (e.clipExtent = function (t) {
              var u = o.apply(e, arguments);
              if (u === e) {
                if ((n = null == t)) {
                  var a = Nt * r(),
                    c = i();
                  o([
                    [c[0] - a, c[1] - a],
                    [c[0] + a, c[1] + a]
                  ]);
                }
              } else n && (u = null);
              return u;
            }),
            e.clipExtent(null)
          );
        }
        ((o.geo.gnomonic = function () {
          return Kr(wi);
        }).raw = wi),
          (Mi.invert = function (t, n) {
            return [t, 2 * Math.atan(Math.exp(n)) - Pt];
          }),
          ((o.geo.mercator = function () {
            return _i(Mi);
          }).raw = Mi);
        var Si = vi(function () {
          return 1;
        }, Math.asin);
        (o.geo.orthographic = function () {
          return Kr(Si);
        }).raw = Si;
        var ji = vi(
          function (t) {
            return 1 / (1 + t);
          },
          function (t) {
            return 2 * Math.atan(t);
          }
        );
        function Oi(t, n) {
          return [Math.log(Math.tan(Nt / 4 + n / 2)), -t];
        }
        function ki(t) {
          return t[0];
        }
        function Ei(t) {
          return t[1];
        }
        function Ai(t) {
          for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; i++) {
            while (r > 1 && zt(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0) --r;
            e[r++] = i;
          }
          return e.slice(0, r);
        }
        function Ci(t, n) {
          return t[0] - n[0] || t[1] - n[1];
        }
        ((o.geo.stereographic = function () {
          return Kr(ji);
        }).raw = ji),
          (Oi.invert = function (t, n) {
            return [-n, 2 * Math.atan(Math.exp(t)) - Pt];
          }),
          ((o.geo.transverseMercator = function () {
            var t = _i(Oi),
              n = t.center,
              e = t.rotate;
            return (
              (t.center = function (t) {
                return t ? n([-t[1], t[0]]) : ((t = n()), [t[1], -t[0]]);
              }),
              (t.rotate = function (t) {
                return t
                  ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
                  : ((t = e()), [t[0], t[1], t[2] - 90]);
              }),
              e([0, 0, 90])
            );
          }).raw = Oi),
          (o.geom = {}),
          (o.geom.hull = function (t) {
            var n = ki,
              e = Ei;
            if (arguments.length) return r(t);
            function r(t) {
              if (t.length < 3) return [];
              var r,
                i = En(n),
                o = En(e),
                u = t.length,
                a = [],
                c = [];
              for (r = 0; r < u; r++)
                a.push([+i.call(this, t[r], r), +o.call(this, t[r], r), r]);
              for (a.sort(Ci), r = 0; r < u; r++) c.push([a[r][0], -a[r][1]]);
              var l = Ai(a),
                s = Ai(c),
                f = s[0] === l[0],
                h = s[s.length - 1] === l[l.length - 1],
                p = [];
              for (r = l.length - 1; r >= 0; --r) p.push(t[a[l[r]][2]]);
              for (r = +f; r < s.length - h; ++r) p.push(t[a[s[r]][2]]);
              return p;
            }
            return (
              (r.x = function (t) {
                return arguments.length ? ((n = t), r) : n;
              }),
              (r.y = function (t) {
                return arguments.length ? ((e = t), r) : e;
              }),
              r
            );
          }),
          (o.geom.polygon = function (t) {
            return W(t, Li), t;
          });
        var Li = (o.geom.polygon.prototype = []);
        function Ni(t, n, e) {
          return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0]);
        }
        function Ti(t, n, e, r) {
          var i = t[0],
            o = e[0],
            u = n[0] - i,
            a = r[0] - o,
            c = t[1],
            l = e[1],
            s = n[1] - c,
            f = r[1] - l,
            h = (a * (c - l) - f * (i - o)) / (f * u - a * s);
          return [i + h * u, c + h * s];
        }
        function Ri(t) {
          var n = t[0],
            e = t[t.length - 1];
          return !(n[0] - e[0] || n[1] - e[1]);
        }
        (Li.area = function () {
          var t,
            n = -1,
            e = this.length,
            r = this[e - 1],
            i = 0;
          while (++n < e)
            (t = r), (r = this[n]), (i += t[1] * r[0] - t[0] * r[1]);
          return 0.5 * i;
        }),
          (Li.centroid = function (t) {
            var n,
              e,
              r = -1,
              i = this.length,
              o = 0,
              u = 0,
              a = this[i - 1];
            arguments.length || (t = -1 / (6 * this.area()));
            while (++r < i)
              (n = a),
                (a = this[r]),
                (e = n[0] * a[1] - a[0] * n[1]),
                (o += (n[0] + a[0]) * e),
                (u += (n[1] + a[1]) * e);
            return [o * t, u * t];
          }),
          (Li.clip = function (t) {
            var n,
              e,
              r,
              i,
              o,
              u,
              a = Ri(t),
              c = -1,
              l = this.length - Ri(this),
              s = this[l - 1];
            while (++c < l) {
              (n = t.slice()),
                (t.length = 0),
                (i = this[c]),
                (o = n[(r = n.length - a) - 1]),
                (e = -1);
              while (++e < r)
                (u = n[e]),
                  Ni(u, s, i)
                    ? (Ni(o, s, i) || t.push(Ti(o, u, s, i)), t.push(u))
                    : Ni(o, s, i) && t.push(Ti(o, u, s, i)),
                  (o = u);
              a && t.push(t[0]), (s = i);
            }
            return t;
          });
        var Pi,
          Fi,
          Ui,
          qi,
          zi,
          Di = [],
          Ii = [];
        function Bi() {
          lo(this), (this.edge = this.site = this.circle = null);
        }
        function Hi(t) {
          var n = Di.pop() || new Bi();
          return (n.site = t), n;
        }
        function Vi(t) {
          to(t), Ui.remove(t), Di.push(t), lo(t);
        }
        function $i(t) {
          var n = t.circle,
            e = n.x,
            r = n.cy,
            i = {
              x: e,
              y: r
            },
            o = t.P,
            u = t.N,
            a = [t];
          Vi(t);
          var c = o;
          while (c.circle && M(e - c.circle.x) < Ct && M(r - c.circle.cy) < Ct)
            (o = c.P), a.unshift(c), Vi(c), (c = o);
          a.unshift(c), to(c);
          var l = u;
          while (l.circle && M(e - l.circle.x) < Ct && M(r - l.circle.cy) < Ct)
            (u = l.N), a.push(l), Vi(l), (l = u);
          a.push(l), to(l);
          var s,
            f = a.length;
          for (s = 1; s < f; ++s)
            (l = a[s]), (c = a[s - 1]), uo(l.edge, c.site, l.site, i);
          (c = a[0]),
            (l = a[f - 1]),
            (l.edge = io(c.site, l.site, null, i)),
            Qi(c),
            Qi(l);
        }
        function Yi(t) {
          var n,
            e,
            r,
            i,
            o = t.x,
            u = t.y,
            a = Ui._;
          while (a)
            if (((r = Wi(a, u) - o), r > Ct)) a = a.L;
            else {
              if (((i = o - Zi(a, u)), !(i > Ct))) {
                r > -Ct
                  ? ((n = a.P), (e = a))
                  : i > -Ct
                  ? ((n = a), (e = a.N))
                  : (n = e = a);
                break;
              }
              if (!a.R) {
                n = a;
                break;
              }
              a = a.R;
            }
          var c = Hi(t);
          if ((Ui.insert(n, c), n || e)) {
            if (n === e)
              return (
                to(n),
                (e = Hi(n.site)),
                Ui.insert(c, e),
                (c.edge = e.edge = io(n.site, c.site)),
                Qi(n),
                void Qi(e)
              );
            if (e) {
              to(n), to(e);
              var l = n.site,
                s = l.x,
                f = l.y,
                h = t.x - s,
                p = t.y - f,
                d = e.site,
                g = d.x - s,
                v = d.y - f,
                y = 2 * (h * v - p * g),
                m = h * h + p * p,
                b = g * g + v * v,
                x = {
                  x: (v * m - p * b) / y + s,
                  y: (h * b - g * m) / y + f
                };
              uo(e.edge, l, d, x),
                (c.edge = io(l, t, null, x)),
                (e.edge = io(t, d, null, x)),
                Qi(n),
                Qi(e);
            } else c.edge = io(n.site, c.site);
          }
        }
        function Wi(t, n) {
          var e = t.site,
            r = e.x,
            i = e.y,
            o = i - n;
          if (!o) return r;
          var u = t.P;
          if (!u) return -1 / 0;
          e = u.site;
          var a = e.x,
            c = e.y,
            l = c - n;
          if (!l) return a;
          var s = a - r,
            f = 1 / o - 1 / l,
            h = s / l;
          return f
            ? (-h +
                Math.sqrt(
                  h * h - 2 * f * ((s * s) / (-2 * l) - c + l / 2 + i - o / 2)
                )) /
                f +
                r
            : (r + a) / 2;
        }
        function Zi(t, n) {
          var e = t.N;
          if (e) return Wi(e, n);
          var r = t.site;
          return r.y === n ? r.x : 1 / 0;
        }
        function Gi(t) {
          (this.site = t), (this.edges = []);
        }
        function Xi(t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a,
            c,
            l,
            s,
            f = t[0][0],
            h = t[1][0],
            p = t[0][1],
            d = t[1][1],
            g = Fi,
            v = g.length;
          while (v--)
            if (((o = g[v]), o && o.prepare())) {
              (a = o.edges), (c = a.length), (u = 0);
              while (u < c)
                (s = a[u].end()),
                  (r = s.x),
                  (i = s.y),
                  (l = a[++u % c].start()),
                  (n = l.x),
                  (e = l.y),
                  (M(r - n) > Ct || M(i - e) > Ct) &&
                    (a.splice(
                      u,
                      0,
                      new ao(
                        oo(
                          o.site,
                          s,
                          M(r - f) < Ct && d - i > Ct
                            ? {
                                x: f,
                                y: M(n - f) < Ct ? e : d
                              }
                            : M(i - d) < Ct && h - r > Ct
                            ? {
                                x: M(e - d) < Ct ? n : h,
                                y: d
                              }
                            : M(r - h) < Ct && i - p > Ct
                            ? {
                                x: h,
                                y: M(n - h) < Ct ? e : p
                              }
                            : M(i - p) < Ct && r - f > Ct
                            ? {
                                x: M(e - p) < Ct ? n : f,
                                y: p
                              }
                            : null
                        ),
                        o.site,
                        null
                      )
                    ),
                    ++c);
            }
        }
        function Ji(t, n) {
          return n.angle - t.angle;
        }
        function Ki() {
          lo(this), (this.x = this.y = this.arc = this.site = this.cy = null);
        }
        function Qi(t) {
          var n = t.P,
            e = t.N;
          if (n && e) {
            var r = n.site,
              i = t.site,
              o = e.site;
            if (r !== o) {
              var u = i.x,
                a = i.y,
                c = r.x - u,
                l = r.y - a,
                s = o.x - u,
                f = o.y - a,
                h = 2 * (c * f - l * s);
              if (!(h >= -Lt)) {
                var p = c * c + l * l,
                  d = s * s + f * f,
                  g = (f * p - l * d) / h,
                  v = (c * d - s * p) / h,
                  y = ((f = v + a), Ii.pop() || new Ki());
                (y.arc = t),
                  (y.site = i),
                  (y.x = g + u),
                  (y.y = f + Math.sqrt(g * g + v * v)),
                  (y.cy = f),
                  (t.circle = y);
                var m = null,
                  b = zi._;
                while (b)
                  if (y.y < b.y || (y.y === b.y && y.x <= b.x)) {
                    if (!b.L) {
                      m = b.P;
                      break;
                    }
                    b = b.L;
                  } else {
                    if (!b.R) {
                      m = b;
                      break;
                    }
                    b = b.R;
                  }
                zi.insert(m, y), m || (qi = y);
              }
            }
          }
        }
        function to(t) {
          var n = t.circle;
          n &&
            (n.P || (qi = n.N),
            zi.remove(n),
            Ii.push(n),
            lo(n),
            (t.circle = null));
        }
        function no(t) {
          var n,
            e = Pi,
            r = Sr(t[0][0], t[0][1], t[1][0], t[1][1]),
            i = e.length;
          while (i--)
            (n = e[i]),
              (!eo(n, t) ||
                !r(n) ||
                (M(n.a.x - n.b.x) < Ct && M(n.a.y - n.b.y) < Ct)) &&
                ((n.a = n.b = null), e.splice(i, 1));
        }
        function eo(t, n) {
          var e = t.b;
          if (e) return !0;
          var r,
            i,
            o = t.a,
            u = n[0][0],
            a = n[1][0],
            c = n[0][1],
            l = n[1][1],
            s = t.l,
            f = t.r,
            h = s.x,
            p = s.y,
            d = f.x,
            g = f.y,
            v = (h + d) / 2,
            y = (p + g) / 2;
          if (g === p) {
            if (v < u || v >= a) return;
            if (h > d) {
              if (o) {
                if (o.y >= l) return;
              } else
                o = {
                  x: v,
                  y: c
                };
              e = {
                x: v,
                y: l
              };
            } else {
              if (o) {
                if (o.y < c) return;
              } else
                o = {
                  x: v,
                  y: l
                };
              e = {
                x: v,
                y: c
              };
            }
          } else if (
            ((r = (h - d) / (g - p)), (i = y - r * v), r < -1 || r > 1)
          )
            if (h > d) {
              if (o) {
                if (o.y >= l) return;
              } else
                o = {
                  x: (c - i) / r,
                  y: c
                };
              e = {
                x: (l - i) / r,
                y: l
              };
            } else {
              if (o) {
                if (o.y < c) return;
              } else
                o = {
                  x: (l - i) / r,
                  y: l
                };
              e = {
                x: (c - i) / r,
                y: c
              };
            }
          else if (p < g) {
            if (o) {
              if (o.x >= a) return;
            } else
              o = {
                x: u,
                y: r * u + i
              };
            e = {
              x: a,
              y: r * a + i
            };
          } else {
            if (o) {
              if (o.x < u) return;
            } else
              o = {
                x: a,
                y: r * a + i
              };
            e = {
              x: u,
              y: r * u + i
            };
          }
          return (t.a = o), (t.b = e), !0;
        }
        function ro(t, n) {
          (this.l = t), (this.r = n), (this.a = this.b = null);
        }
        function io(t, n, e, r) {
          var i = new ro(t, n);
          return (
            Pi.push(i),
            e && uo(i, t, n, e),
            r && uo(i, n, t, r),
            Fi[t.i].edges.push(new ao(i, t, n)),
            Fi[n.i].edges.push(new ao(i, n, t)),
            i
          );
        }
        function oo(t, n, e) {
          var r = new ro(t, null);
          return (r.a = n), (r.b = e), Pi.push(r), r;
        }
        function uo(t, n, e, r) {
          t.a || t.b
            ? t.l === e
              ? (t.b = r)
              : (t.a = r)
            : ((t.a = r), (t.l = n), (t.r = e));
        }
        function ao(t, n, e) {
          var r = t.a,
            i = t.b;
          (this.edge = t),
            (this.site = n),
            (this.angle = e
              ? Math.atan2(e.y - n.y, e.x - n.x)
              : t.l === n
              ? Math.atan2(i.x - r.x, r.y - i.y)
              : Math.atan2(r.x - i.x, i.y - r.y));
        }
        function co() {
          this._ = null;
        }
        function lo(t) {
          t.U = t.C = t.L = t.R = t.P = t.N = null;
        }
        function so(t, n) {
          var e = n,
            r = n.R,
            i = e.U;
          i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
            (r.U = i),
            (e.U = r),
            (e.R = r.L),
            e.R && (e.R.U = e),
            (r.L = e);
        }
        function fo(t, n) {
          var e = n,
            r = n.L,
            i = e.U;
          i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
            (r.U = i),
            (e.U = r),
            (e.L = r.R),
            e.L && (e.L.U = e),
            (r.R = e);
        }
        function ho(t) {
          while (t.L) t = t.L;
          return t;
        }
        function po(t, n) {
          var e,
            r,
            i,
            o = t.sort(go).pop();
          (Pi = []),
            (Fi = new Array(t.length)),
            (Ui = new co()),
            (zi = new co());
          while (1)
            if (
              ((i = qi), o && (!i || o.y < i.y || (o.y === i.y && o.x < i.x)))
            )
              (o.x === e && o.y === r) ||
                ((Fi[o.i] = new Gi(o)), Yi(o), (e = o.x), (r = o.y)),
                (o = t.pop());
            else {
              if (!i) break;
              $i(i.arc);
            }
          n && (no(n), Xi(n));
          var u = {
            cells: Fi,
            edges: Pi
          };
          return (Ui = zi = Pi = Fi = null), u;
        }
        function go(t, n) {
          return n.y - t.y || n.x - t.x;
        }
        (Gi.prototype.prepare = function () {
          var t,
            n = this.edges,
            e = n.length;
          while (e--) (t = n[e].edge), (t.b && t.a) || n.splice(e, 1);
          return n.sort(Ji), n.length;
        }),
          (ao.prototype = {
            start: function () {
              return this.edge.l === this.site ? this.edge.a : this.edge.b;
            },
            end: function () {
              return this.edge.l === this.site ? this.edge.b : this.edge.a;
            }
          }),
          (co.prototype = {
            insert: function (t, n) {
              var e, r, i;
              if (t) {
                if (
                  ((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)
                ) {
                  t = t.R;
                  while (t.L) t = t.L;
                  t.L = n;
                } else t.R = n;
                e = t;
              } else
                this._
                  ? ((t = ho(this._)),
                    (n.P = null),
                    (n.N = t),
                    (t.P = t.L = n),
                    (e = t))
                  : ((n.P = n.N = null), (this._ = n), (e = null));
              (n.L = n.R = null), (n.U = e), (n.C = !0), (t = n);
              while (e && e.C)
                (r = e.U),
                  e === r.L
                    ? ((i = r.R),
                      i && i.C
                        ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                        : (t === e.R && (so(this, e), (t = e), (e = t.U)),
                          (e.C = !1),
                          (r.C = !0),
                          fo(this, r)))
                    : ((i = r.L),
                      i && i.C
                        ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                        : (t === e.L && (fo(this, e), (t = e), (e = t.U)),
                          (e.C = !1),
                          (r.C = !0),
                          so(this, r))),
                  (e = t.U);
              this._.C = !1;
            },
            remove: function (t) {
              t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
              var n,
                e,
                r,
                i = t.U,
                o = t.L,
                u = t.R;
              if (
                ((e = o ? (u ? ho(u) : o) : u),
                i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
                o && u
                  ? ((r = e.C),
                    (e.C = t.C),
                    (e.L = o),
                    (o.U = e),
                    e !== u
                      ? ((i = e.U),
                        (e.U = t.U),
                        (t = e.R),
                        (i.L = t),
                        (e.R = u),
                        (u.U = e))
                      : ((e.U = i), (i = e), (t = e.R)))
                  : ((r = t.C), (t = e)),
                t && (t.U = i),
                !r)
              )
                if (t && t.C) t.C = !1;
                else {
                  do {
                    if (t === this._) break;
                    if (t === i.L) {
                      if (
                        ((n = i.R),
                        n.C && ((n.C = !1), (i.C = !0), so(this, i), (n = i.R)),
                        (n.L && n.L.C) || (n.R && n.R.C))
                      ) {
                        (n.R && n.R.C) ||
                          ((n.L.C = !1), (n.C = !0), fo(this, n), (n = i.R)),
                          (n.C = i.C),
                          (i.C = n.R.C = !1),
                          so(this, i),
                          (t = this._);
                        break;
                      }
                    } else if (
                      ((n = i.L),
                      n.C && ((n.C = !1), (i.C = !0), fo(this, i), (n = i.L)),
                      (n.L && n.L.C) || (n.R && n.R.C))
                    ) {
                      (n.L && n.L.C) ||
                        ((n.R.C = !1), (n.C = !0), so(this, n), (n = i.L)),
                        (n.C = i.C),
                        (i.C = n.L.C = !1),
                        fo(this, i),
                        (t = this._);
                      break;
                    }
                    (n.C = !0), (t = i), (i = i.U);
                  } while (!t.C);
                  t && (t.C = !1);
                }
            }
          }),
          (o.geom.voronoi = function (t) {
            var n = ki,
              e = Ei,
              r = n,
              i = e,
              o = vo;
            if (t) return u(t);
            function u(t) {
              var n = new Array(t.length),
                e = o[0][0],
                r = o[0][1],
                i = o[1][0],
                u = o[1][1];
              return (
                po(a(t), o).cells.forEach(function (o, a) {
                  var c = o.edges,
                    l = o.site,
                    s = (n[a] = c.length
                      ? c.map(function (t) {
                          var n = t.start();
                          return [n.x, n.y];
                        })
                      : l.x >= e && l.x <= i && l.y >= r && l.y <= u
                      ? [
                          [e, u],
                          [i, u],
                          [i, r],
                          [e, r]
                        ]
                      : []);
                  s.point = t[a];
                }),
                n
              );
            }
            function a(t) {
              return t.map(function (t, n) {
                return {
                  x: Math.round(r(t, n) / Ct) * Ct,
                  y: Math.round(i(t, n) / Ct) * Ct,
                  i: n
                };
              });
            }
            return (
              (u.links = function (t) {
                return po(a(t))
                  .edges.filter(function (t) {
                    return t.l && t.r;
                  })
                  .map(function (n) {
                    return {
                      source: t[n.l.i],
                      target: t[n.r.i]
                    };
                  });
              }),
              (u.triangles = function (t) {
                var n = [];
                return (
                  po(a(t)).cells.forEach(function (e, r) {
                    var i,
                      o = e.site,
                      u = e.edges.sort(Ji),
                      a = -1,
                      c = u.length,
                      l = u[c - 1].edge,
                      s = l.l === o ? l.r : l.l;
                    while (++a < c)
                      l,
                        (i = s),
                        (l = u[a].edge),
                        (s = l.l === o ? l.r : l.l),
                        r < i.i &&
                          r < s.i &&
                          yo(o, i, s) < 0 &&
                          n.push([t[r], t[i.i], t[s.i]]);
                  }),
                  n
                );
              }),
              (u.x = function (t) {
                return arguments.length ? ((r = En((n = t))), u) : n;
              }),
              (u.y = function (t) {
                return arguments.length ? ((i = En((e = t))), u) : e;
              }),
              (u.clipExtent = function (t) {
                return arguments.length
                  ? ((o = null == t ? vo : t), u)
                  : o === vo
                  ? null
                  : o;
              }),
              (u.size = function (t) {
                return arguments.length
                  ? u.clipExtent(t && [[0, 0], t])
                  : o === vo
                  ? null
                  : o && o[1];
              }),
              u
            );
          });
        var vo = [
          [-1e6, -1e6],
          [1e6, 1e6]
        ];
        function yo(t, n, e) {
          return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y);
        }
        function mo(t) {
          return t.x;
        }
        function bo(t) {
          return t.y;
        }
        function xo() {
          return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
          };
        }
        function wo(t, n, e, r, i, o) {
          if (!t(n, e, r, i, o)) {
            var u = 0.5 * (e + i),
              a = 0.5 * (r + o),
              c = n.nodes;
            c[0] && wo(t, c[0], e, r, u, a),
              c[1] && wo(t, c[1], u, r, i, a),
              c[2] && wo(t, c[2], e, a, u, o),
              c[3] && wo(t, c[3], u, a, i, o);
          }
        }
        function Mo(t, n, e, r, i, o, u) {
          var a,
            c = 1 / 0;
          return (
            (function t(l, s, f, h, p) {
              if (!(s > o || f > u || h < r || p < i)) {
                if ((d = l.point)) {
                  var d,
                    g = n - l.x,
                    v = e - l.y,
                    y = g * g + v * v;
                  if (y < c) {
                    var m = Math.sqrt((c = y));
                    (r = n - m), (i = e - m), (o = n + m), (u = e + m), (a = d);
                  }
                }
                for (
                  var b = l.nodes,
                    x = 0.5 * (s + h),
                    w = 0.5 * (f + p),
                    M = n >= x,
                    _ = e >= w,
                    S = (_ << 1) | M,
                    j = S + 4;
                  S < j;
                  ++S
                )
                  if ((l = b[3 & S]))
                    switch (3 & S) {
                      case 0:
                        t(l, s, f, x, w);
                        break;
                      case 1:
                        t(l, x, f, h, w);
                        break;
                      case 2:
                        t(l, s, w, x, p);
                        break;
                      case 3:
                        t(l, x, w, h, p);
                        break;
                    }
              }
            })(t, r, i, o, u),
            a
          );
        }
        function _o(t, n) {
          (t = o.rgb(t)), (n = o.rgb(n));
          var e = t.r,
            r = t.g,
            i = t.b,
            u = n.r - e,
            a = n.g - r,
            c = n.b - i;
          return function (t) {
            return (
              "#" +
              wn(Math.round(e + u * t)) +
              wn(Math.round(r + a * t)) +
              wn(Math.round(i + c * t))
            );
          };
        }
        function So(t, n) {
          var e,
            r = {},
            i = {};
          for (e in t) e in n ? (r[e] = Ao(t[e], n[e])) : (i[e] = t[e]);
          for (e in n) e in t || (i[e] = n[e]);
          return function (t) {
            for (e in r) i[e] = r[e](t);
            return i;
          };
        }
        function jo(t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return t * (1 - e) + n * e;
            }
          );
        }
        function Oo(t, n) {
          var e,
            r,
            i,
            o = (ko.lastIndex = Eo.lastIndex = 0),
            u = -1,
            a = [],
            c = [];
          (t += ""), (n += "");
          while ((e = ko.exec(t)) && (r = Eo.exec(n)))
            (i = r.index) > o &&
              ((i = n.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
              (e = e[0]) === (r = r[0])
                ? a[u]
                  ? (a[u] += r)
                  : (a[++u] = r)
                : ((a[++u] = null),
                  c.push({
                    i: u,
                    x: jo(e, r)
                  })),
              (o = Eo.lastIndex);
          return (
            o < n.length &&
              ((i = n.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
            a.length < 2
              ? c[0]
                ? ((n = c[0].x),
                  function (t) {
                    return n(t) + "";
                  })
                : function () {
                    return n;
                  }
              : ((n = c.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                  return a.join("");
                })
          );
        }
        (o.geom.delaunay = function (t) {
          return o.geom.voronoi().triangles(t);
        }),
          (o.geom.quadtree = function (t, n, e, r, i) {
            var o,
              u = ki,
              a = Ei;
            if ((o = arguments.length))
              return (
                (u = mo),
                (a = bo),
                3 === o && ((i = e), (r = n), (e = n = 0)),
                c(t)
              );
            function c(t) {
              var c,
                l,
                s,
                f,
                h,
                p,
                d,
                g,
                v,
                y = En(u),
                m = En(a);
              if (null != n) (p = n), (d = e), (g = r), (v = i);
              else if (
                ((g = v = -(p = d = 1 / 0)),
                (l = []),
                (s = []),
                (h = t.length),
                o)
              )
                for (f = 0; f < h; ++f)
                  (c = t[f]),
                    c.x < p && (p = c.x),
                    c.y < d && (d = c.y),
                    c.x > g && (g = c.x),
                    c.y > v && (v = c.y),
                    l.push(c.x),
                    s.push(c.y);
              else
                for (f = 0; f < h; ++f) {
                  var b = +y((c = t[f]), f),
                    x = +m(c, f);
                  b < p && (p = b),
                    x < d && (d = x),
                    b > g && (g = b),
                    x > v && (v = x),
                    l.push(b),
                    s.push(x);
                }
              var w = g - p,
                _ = v - d;
              function S(t, n, e, r, i, o, u, a) {
                if (!isNaN(e) && !isNaN(r))
                  if (t.leaf) {
                    var c = t.x,
                      l = t.y;
                    if (null != c)
                      if (M(c - e) + M(l - r) < 0.01) j(t, n, e, r, i, o, u, a);
                      else {
                        var s = t.point;
                        (t.x = t.y = t.point = null),
                          j(t, s, c, l, i, o, u, a),
                          j(t, n, e, r, i, o, u, a);
                      }
                    else (t.x = e), (t.y = r), (t.point = n);
                  } else j(t, n, e, r, i, o, u, a);
              }
              function j(t, n, e, r, i, o, u, a) {
                var c = 0.5 * (i + u),
                  l = 0.5 * (o + a),
                  s = e >= c,
                  f = r >= l,
                  h = (f << 1) | s;
                (t.leaf = !1),
                  (t = t.nodes[h] || (t.nodes[h] = xo())),
                  s ? (i = c) : (u = c),
                  f ? (o = l) : (a = l),
                  S(t, n, e, r, i, o, u, a);
              }
              w > _ ? (v = d + w) : (g = p + _);
              var O = xo();
              if (
                ((O.add = function (t) {
                  S(O, t, +y(t, ++f), +m(t, f), p, d, g, v);
                }),
                (O.visit = function (t) {
                  wo(t, O, p, d, g, v);
                }),
                (O.find = function (t) {
                  return Mo(O, t[0], t[1], p, d, g, v);
                }),
                (f = -1),
                null == n)
              ) {
                while (++f < h) S(O, t[f], l[f], s[f], p, d, g, v);
                --f;
              } else t.forEach(O.add);
              return (l = s = t = c = null), O;
            }
            return (
              (c.x = function (t) {
                return arguments.length ? ((u = t), c) : u;
              }),
              (c.y = function (t) {
                return arguments.length ? ((a = t), c) : a;
              }),
              (c.extent = function (t) {
                return arguments.length
                  ? (null == t
                      ? (n = e = r = i = null)
                      : ((n = +t[0][0]),
                        (e = +t[0][1]),
                        (r = +t[1][0]),
                        (i = +t[1][1])),
                    c)
                  : null == n
                  ? null
                  : [
                      [n, e],
                      [r, i]
                    ];
              }),
              (c.size = function (t) {
                return arguments.length
                  ? (null == t
                      ? (n = e = r = i = null)
                      : ((n = e = 0), (r = +t[0]), (i = +t[1])),
                    c)
                  : null == n
                  ? null
                  : [r - n, i - e];
              }),
              c
            );
          }),
          (o.interpolateRgb = _o),
          (o.interpolateObject = So),
          (o.interpolateNumber = jo),
          (o.interpolateString = Oo);
        var ko = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          Eo = new RegExp(ko.source, "g");
        function Ao(t, n) {
          var e,
            r = o.interpolators.length;
          while (--r >= 0 && !(e = o.interpolators[r](t, n)));
          return e;
        }
        function Co(t, n) {
          var e,
            r = [],
            i = [],
            o = t.length,
            u = n.length,
            a = Math.min(t.length, n.length);
          for (e = 0; e < a; ++e) r.push(Ao(t[e], n[e]));
          for (; e < o; ++e) i[e] = t[e];
          for (; e < u; ++e) i[e] = n[e];
          return function (t) {
            for (e = 0; e < a; ++e) i[e] = r[e](t);
            return i;
          };
        }
        (o.interpolate = Ao),
          (o.interpolators = [
            function (t, n) {
              var e = typeof n;
              return ("string" === e
                ? kn.has(n.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(n)
                  ? _o
                  : Oo
                : n instanceof Kt
                ? _o
                : Array.isArray(n)
                ? Co
                : "object" === e && isNaN(n)
                ? So
                : jo)(t, n);
            }
          ]),
          (o.interpolateArray = Co);
        var Lo = function () {
            return F;
          },
          No = o.map({
            linear: Lo,
            poly: Do,
            quad: function () {
              return Uo;
            },
            cubic: function () {
              return qo;
            },
            sin: function () {
              return Io;
            },
            exp: function () {
              return Bo;
            },
            circle: function () {
              return Ho;
            },
            elastic: Vo,
            back: $o,
            bounce: function () {
              return Yo;
            }
          }),
          To = o.map({
            in: F,
            out: Po,
            "in-out": Fo,
            "out-in": function (t) {
              return Fo(Po(t));
            }
          });
        function Ro(t) {
          return function (n) {
            return n <= 0 ? 0 : n >= 1 ? 1 : t(n);
          };
        }
        function Po(t) {
          return function (n) {
            return 1 - t(1 - n);
          };
        }
        function Fo(t) {
          return function (n) {
            return 0.5 * (n < 0.5 ? t(2 * n) : 2 - t(2 - 2 * n));
          };
        }
        function Uo(t) {
          return t * t;
        }
        function qo(t) {
          return t * t * t;
        }
        function zo(t) {
          if (t <= 0) return 0;
          if (t >= 1) return 1;
          var n = t * t,
            e = n * t;
          return 4 * (t < 0.5 ? e : 3 * (t - n) + e - 0.75);
        }
        function Do(t) {
          return function (n) {
            return Math.pow(n, t);
          };
        }
        function Io(t) {
          return 1 - Math.cos(t * Pt);
        }
        function Bo(t) {
          return Math.pow(2, 10 * (t - 1));
        }
        function Ho(t) {
          return 1 - Math.sqrt(1 - t * t);
        }
        function Vo(t, n) {
          var e;
          return (
            arguments.length < 2 && (n = 0.45),
            arguments.length
              ? (e = (n / Tt) * Math.asin(1 / t))
              : ((t = 1), (e = n / 4)),
            function (r) {
              return (
                1 + t * Math.pow(2, -10 * r) * Math.sin(((r - e) * Tt) / n)
              );
            }
          );
        }
        function $o(t) {
          return (
            t || (t = 1.70158),
            function (n) {
              return n * n * ((t + 1) * n - t);
            }
          );
        }
        function Yo(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
        function Wo(t, n) {
          (t = o.hcl(t)), (n = o.hcl(n));
          var e = t.h,
            r = t.c,
            i = t.l,
            u = n.h - e,
            a = n.c - r,
            c = n.l - i;
          return (
            isNaN(a) && ((a = 0), (r = isNaN(r) ? n.c : r)),
            isNaN(u)
              ? ((u = 0), (e = isNaN(e) ? n.h : e))
              : u > 180
              ? (u -= 360)
              : u < -180 && (u += 360),
            function (t) {
              return on(e + u * t, r + a * t, i + c * t) + "";
            }
          );
        }
        function Zo(t, n) {
          (t = o.hsl(t)), (n = o.hsl(n));
          var e = t.h,
            r = t.s,
            i = t.l,
            u = n.h - e,
            a = n.s - r,
            c = n.l - i;
          return (
            isNaN(a) && ((a = 0), (r = isNaN(r) ? n.s : r)),
            isNaN(u)
              ? ((u = 0), (e = isNaN(e) ? n.h : e))
              : u > 180
              ? (u -= 360)
              : u < -180 && (u += 360),
            function (t) {
              return nn(e + u * t, r + a * t, i + c * t) + "";
            }
          );
        }
        function Go(t, n) {
          (t = o.lab(t)), (n = o.lab(n));
          var e = t.l,
            r = t.a,
            i = t.b,
            u = n.l - e,
            a = n.a - r,
            c = n.b - i;
          return function (t) {
            return hn(e + u * t, r + a * t, i + c * t) + "";
          };
        }
        function Xo(t, n) {
          return (
            (n -= t),
            function (e) {
              return Math.round(t + n * e);
            }
          );
        }
        function Jo(t) {
          var n = [t.a, t.b],
            e = [t.c, t.d],
            r = Qo(n),
            i = Ko(n, e),
            o = Qo(tu(e, n, -i)) || 0;
          n[0] * e[1] < e[0] * n[1] &&
            ((n[0] *= -1), (n[1] *= -1), (r *= -1), (i *= -1)),
            (this.rotate =
              (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Ut),
            (this.translate = [t.e, t.f]),
            (this.scale = [r, o]),
            (this.skew = o ? Math.atan2(i, o) * Ut : 0);
        }
        function Ko(t, n) {
          return t[0] * n[0] + t[1] * n[1];
        }
        function Qo(t) {
          var n = Math.sqrt(Ko(t, t));
          return n && ((t[0] /= n), (t[1] /= n)), n;
        }
        function tu(t, n, e) {
          return (t[0] += e * n[0]), (t[1] += e * n[1]), t;
        }
        (o.ease = function (t) {
          var n = t.indexOf("-"),
            e = n >= 0 ? t.slice(0, n) : t,
            r = n >= 0 ? t.slice(n + 1) : "in";
          return (
            (e = No.get(e) || Lo),
            (r = To.get(r) || F),
            Ro(r(e.apply(null, u.call(arguments, 1))))
          );
        }),
          (o.interpolateHcl = Wo),
          (o.interpolateHsl = Zo),
          (o.interpolateLab = Go),
          (o.interpolateRound = Xo),
          (o.transform = function (t) {
            var n = c.createElementNS(o.ns.prefix.svg, "g");
            return (o.transform = function (t) {
              if (null != t) {
                n.setAttribute("transform", t);
                var e = n.transform.baseVal.consolidate();
              }
              return new Jo(e ? e.matrix : nu);
            })(t);
          }),
          (Jo.prototype.toString = function () {
            return (
              "translate(" +
              this.translate +
              ")rotate(" +
              this.rotate +
              ")skewX(" +
              this.skew +
              ")scale(" +
              this.scale +
              ")"
            );
          });
        var nu = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: 0,
          f: 0
        };
        function eu(t) {
          return t.length ? t.pop() + "," : "";
        }
        function ru(t, n, e, r) {
          if (t[0] !== n[0] || t[1] !== n[1]) {
            var i = e.push("translate(", null, ",", null, ")");
            r.push(
              {
                i: i - 4,
                x: jo(t[0], n[0])
              },
              {
                i: i - 2,
                x: jo(t[1], n[1])
              }
            );
          } else (n[0] || n[1]) && e.push("translate(" + n + ")");
        }
        function iu(t, n, e, r) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              r.push({
                i: e.push(eu(e) + "rotate(", null, ")") - 2,
                x: jo(t, n)
              }))
            : n && e.push(eu(e) + "rotate(" + n + ")");
        }
        function ou(t, n, e, r) {
          t !== n
            ? r.push({
                i: e.push(eu(e) + "skewX(", null, ")") - 2,
                x: jo(t, n)
              })
            : n && e.push(eu(e) + "skewX(" + n + ")");
        }
        function uu(t, n, e, r) {
          if (t[0] !== n[0] || t[1] !== n[1]) {
            var i = e.push(eu(e) + "scale(", null, ",", null, ")");
            r.push(
              {
                i: i - 4,
                x: jo(t[0], n[0])
              },
              {
                i: i - 2,
                x: jo(t[1], n[1])
              }
            );
          } else
            (1 === n[0] && 1 === n[1]) || e.push(eu(e) + "scale(" + n + ")");
        }
        function au(t, n) {
          var e = [],
            r = [];
          return (
            (t = o.transform(t)),
            (n = o.transform(n)),
            ru(t.translate, n.translate, e, r),
            iu(t.rotate, n.rotate, e, r),
            ou(t.skew, n.skew, e, r),
            uu(t.scale, n.scale, e, r),
            (t = n = null),
            function (t) {
              var n,
                i = -1,
                o = r.length;
              while (++i < o) e[(n = r[i]).i] = n.x(t);
              return e.join("");
            }
          );
        }
        function cu(t, n) {
          return (
            (n = (n -= t = +t) || 1 / n),
            function (e) {
              return (e - t) / n;
            }
          );
        }
        function lu(t, n) {
          return (
            (n = (n -= t = +t) || 1 / n),
            function (e) {
              return Math.max(0, Math.min(1, (e - t) / n));
            }
          );
        }
        function su(t) {
          var n = t.source,
            e = t.target,
            r = hu(n, e),
            i = [n];
          while (n !== r) (n = n.parent), i.push(n);
          var o = i.length;
          while (e !== r) i.splice(o, 0, e), (e = e.parent);
          return i;
        }
        function fu(t) {
          var n = [],
            e = t.parent;
          while (null != e) n.push(t), (t = e), (e = e.parent);
          return n.push(t), n;
        }
        function hu(t, n) {
          if (t === n) return t;
          var e = fu(t),
            r = fu(n),
            i = e.pop(),
            o = r.pop(),
            u = null;
          while (i === o) (u = i), (i = e.pop()), (o = r.pop());
          return u;
        }
        function pu(t) {
          t.fixed |= 2;
        }
        function du(t) {
          t.fixed &= -7;
        }
        function gu(t) {
          (t.fixed |= 4), (t.px = t.x), (t.py = t.y);
        }
        function vu(t) {
          t.fixed &= -5;
        }
        function yu(t, n, e) {
          var r = 0,
            i = 0;
          if (((t.charge = 0), !t.leaf)) {
            var o,
              u = t.nodes,
              a = u.length,
              c = -1;
            while (++c < a)
              (o = u[c]),
                null != o &&
                  (yu(o, n, e),
                  (t.charge += o.charge),
                  (r += o.charge * o.cx),
                  (i += o.charge * o.cy));
          }
          if (t.point) {
            t.leaf ||
              ((t.point.x += Math.random() - 0.5),
              (t.point.y += Math.random() - 0.5));
            var l = n * e[t.point.index];
            (t.charge += t.pointCharge = l),
              (r += l * t.point.x),
              (i += l * t.point.y);
          }
          (t.cx = r / t.charge), (t.cy = i / t.charge);
        }
        (o.interpolateTransform = au),
          (o.layout = {}),
          (o.layout.bundle = function () {
            return function (t) {
              var n = [],
                e = -1,
                r = t.length;
              while (++e < r) n.push(su(t[e]));
              return n;
            };
          }),
          (o.layout.chord = function () {
            var t,
              n,
              e,
              r,
              i,
              u,
              a,
              c = {},
              l = 0;
            function s() {
              var c,
                s,
                h,
                p,
                d,
                g = {},
                v = [],
                y = o.range(r),
                m = [];
              (t = []), (n = []), (c = 0), (p = -1);
              while (++p < r) {
                (s = 0), (d = -1);
                while (++d < r) s += e[p][d];
                v.push(s), m.push(o.range(r)), (c += s);
              }
              i &&
                y.sort(function (t, n) {
                  return i(v[t], v[n]);
                }),
                u &&
                  m.forEach(function (t, n) {
                    t.sort(function (t, r) {
                      return u(e[n][t], e[n][r]);
                    });
                  }),
                (c = (Tt - l * r) / c),
                (s = 0),
                (p = -1);
              while (++p < r) {
                (h = s), (d = -1);
                while (++d < r) {
                  var b = y[p],
                    x = m[b][d],
                    w = e[b][x],
                    M = s,
                    _ = (s += w * c);
                  g[b + "-" + x] = {
                    index: b,
                    subindex: x,
                    startAngle: M,
                    endAngle: _,
                    value: w
                  };
                }
                (n[b] = {
                  index: b,
                  startAngle: h,
                  endAngle: s,
                  value: v[b]
                }),
                  (s += l);
              }
              p = -1;
              while (++p < r) {
                d = p - 1;
                while (++d < r) {
                  var S = g[p + "-" + d],
                    j = g[d + "-" + p];
                  (S.value || j.value) &&
                    t.push(
                      S.value < j.value
                        ? {
                            source: j,
                            target: S
                          }
                        : {
                            source: S,
                            target: j
                          }
                    );
                }
              }
              a && f();
            }
            function f() {
              t.sort(function (t, n) {
                return a(
                  (t.source.value + t.target.value) / 2,
                  (n.source.value + n.target.value) / 2
                );
              });
            }
            return (
              (c.matrix = function (i) {
                return arguments.length
                  ? ((r = (e = i) && e.length), (t = n = null), c)
                  : e;
              }),
              (c.padding = function (e) {
                return arguments.length ? ((l = e), (t = n = null), c) : l;
              }),
              (c.sortGroups = function (e) {
                return arguments.length ? ((i = e), (t = n = null), c) : i;
              }),
              (c.sortSubgroups = function (n) {
                return arguments.length ? ((u = n), (t = null), c) : u;
              }),
              (c.sortChords = function (n) {
                return arguments.length ? ((a = n), t && f(), c) : a;
              }),
              (c.chords = function () {
                return t || s(), t;
              }),
              (c.groups = function () {
                return n || s(), n;
              }),
              c
            );
          }),
          (o.layout.force = function () {
            var t,
              n,
              e,
              r,
              i,
              u,
              a = {},
              c = o.dispatch("start", "tick", "end"),
              l = [1, 1],
              s = 0.9,
              f = mu,
              h = bu,
              p = -30,
              d = xu,
              g = 0.1,
              v = 0.64,
              y = [],
              m = [];
            function b(t) {
              return function (n, e, r, i) {
                if (n.point !== t) {
                  var o = n.cx - t.x,
                    u = n.cy - t.y,
                    a = i - e,
                    c = o * o + u * u;
                  if ((a * a) / v < c) {
                    if (c < d) {
                      var l = n.charge / c;
                      (t.px -= o * l), (t.py -= u * l);
                    }
                    return !0;
                  }
                  if (n.point && c && c < d) {
                    l = n.pointCharge / c;
                    (t.px -= o * l), (t.py -= u * l);
                  }
                }
                return !n.charge;
              };
            }
            function x(t) {
              (t.px = o.event.x), (t.py = o.event.y), a.resume();
            }
            return (
              (a.tick = function () {
                if ((e *= 0.99) < 0.005)
                  return (
                    (t = null),
                    c.end({
                      type: "end",
                      alpha: (e = 0)
                    }),
                    !0
                  );
                var n,
                  a,
                  f,
                  h,
                  d,
                  v,
                  x,
                  w,
                  M,
                  _ = y.length,
                  S = m.length;
                for (a = 0; a < S; ++a)
                  (f = m[a]),
                    (h = f.source),
                    (d = f.target),
                    (w = d.x - h.x),
                    (M = d.y - h.y),
                    (v = w * w + M * M) &&
                      ((v = (e * i[a] * ((v = Math.sqrt(v)) - r[a])) / v),
                      (w *= v),
                      (M *= v),
                      (d.x -=
                        w *
                        (x =
                          h.weight + d.weight
                            ? h.weight / (h.weight + d.weight)
                            : 0.5)),
                      (d.y -= M * x),
                      (h.x += w * (x = 1 - x)),
                      (h.y += M * x));
                if (
                  (x = e * g) &&
                  ((w = l[0] / 2), (M = l[1] / 2), (a = -1), x)
                )
                  while (++a < _)
                    (f = y[a]), (f.x += (w - f.x) * x), (f.y += (M - f.y) * x);
                if (p) {
                  yu((n = o.geom.quadtree(y)), e, u), (a = -1);
                  while (++a < _) (f = y[a]).fixed || n.visit(b(f));
                }
                a = -1;
                while (++a < _)
                  (f = y[a]),
                    f.fixed
                      ? ((f.x = f.px), (f.y = f.py))
                      : ((f.x -= (f.px - (f.px = f.x)) * s),
                        (f.y -= (f.py - (f.py = f.y)) * s));
                c.tick({
                  type: "tick",
                  alpha: e
                });
              }),
              (a.nodes = function (t) {
                return arguments.length ? ((y = t), a) : y;
              }),
              (a.links = function (t) {
                return arguments.length ? ((m = t), a) : m;
              }),
              (a.size = function (t) {
                return arguments.length ? ((l = t), a) : l;
              }),
              (a.linkDistance = function (t) {
                return arguments.length
                  ? ((f = "function" === typeof t ? t : +t), a)
                  : f;
              }),
              (a.distance = a.linkDistance),
              (a.linkStrength = function (t) {
                return arguments.length
                  ? ((h = "function" === typeof t ? t : +t), a)
                  : h;
              }),
              (a.friction = function (t) {
                return arguments.length ? ((s = +t), a) : s;
              }),
              (a.charge = function (t) {
                return arguments.length
                  ? ((p = "function" === typeof t ? t : +t), a)
                  : p;
              }),
              (a.chargeDistance = function (t) {
                return arguments.length ? ((d = t * t), a) : Math.sqrt(d);
              }),
              (a.gravity = function (t) {
                return arguments.length ? ((g = +t), a) : g;
              }),
              (a.theta = function (t) {
                return arguments.length ? ((v = t * t), a) : Math.sqrt(v);
              }),
              (a.alpha = function (n) {
                return arguments.length
                  ? ((n = +n),
                    e
                      ? n > 0
                        ? (e = n)
                        : ((t.c = null),
                          (t.t = NaN),
                          (t = null),
                          c.end({
                            type: "end",
                            alpha: (e = 0)
                          }))
                      : n > 0 &&
                        (c.start({
                          type: "start",
                          alpha: (e = n)
                        }),
                        (t = qn(a.tick))),
                    a)
                  : e;
              }),
              (a.start = function () {
                var t,
                  n,
                  e,
                  o = y.length,
                  c = m.length,
                  s = l[0],
                  d = l[1];
                for (t = 0; t < o; ++t) ((e = y[t]).index = t), (e.weight = 0);
                for (t = 0; t < c; ++t)
                  (e = m[t]),
                    "number" == typeof e.source && (e.source = y[e.source]),
                    "number" == typeof e.target && (e.target = y[e.target]),
                    ++e.source.weight,
                    ++e.target.weight;
                for (t = 0; t < o; ++t)
                  (e = y[t]),
                    isNaN(e.x) && (e.x = g("x", s)),
                    isNaN(e.y) && (e.y = g("y", d)),
                    isNaN(e.px) && (e.px = e.x),
                    isNaN(e.py) && (e.py = e.y);
                if (((r = []), "function" === typeof f))
                  for (t = 0; t < c; ++t) r[t] = +f.call(this, m[t], t);
                else for (t = 0; t < c; ++t) r[t] = f;
                if (((i = []), "function" === typeof h))
                  for (t = 0; t < c; ++t) i[t] = +h.call(this, m[t], t);
                else for (t = 0; t < c; ++t) i[t] = h;
                if (((u = []), "function" === typeof p))
                  for (t = 0; t < o; ++t) u[t] = +p.call(this, y[t], t);
                else for (t = 0; t < o; ++t) u[t] = p;
                function g(e, r) {
                  if (!n) {
                    for (n = new Array(o), l = 0; l < o; ++l) n[l] = [];
                    for (l = 0; l < c; ++l) {
                      var i = m[l];
                      n[i.source.index].push(i.target),
                        n[i.target.index].push(i.source);
                    }
                  }
                  var u,
                    a = n[t],
                    l = -1,
                    s = a.length;
                  while (++l < s) if (!isNaN((u = a[l][e]))) return u;
                  return Math.random() * r;
                }
                return a.resume();
              }),
              (a.resume = function () {
                return a.alpha(0.1);
              }),
              (a.stop = function () {
                return a.alpha(0);
              }),
              (a.drag = function () {
                if (
                  (n ||
                    (n = o.behavior
                      .drag()
                      .origin(F)
                      .on("dragstart.force", pu)
                      .on("drag.force", x)
                      .on("dragend.force", du)),
                  !arguments.length)
                )
                  return n;
                this.on("mouseover.force", gu).on("mouseout.force", vu).call(n);
              }),
              o.rebind(a, c, "on")
            );
          });
        var mu = 20,
          bu = 1,
          xu = 1 / 0;
        function wu(t, n) {
          return (
            o.rebind(t, n, "sort", "children", "value"),
            (t.nodes = t),
            (t.links = ku),
            t
          );
        }
        function Mu(t, n) {
          var e = [t];
          while (null != (t = e.pop())) {
            var r, i;
            if ((n(t), (i = t.children) && (r = i.length)))
              while (--r >= 0) e.push(i[r]);
          }
        }
        function _u(t, n) {
          var e = [t],
            r = [];
          while (null != (t = e.pop()))
            if ((r.push(t), (o = t.children) && (i = o.length))) {
              var i,
                o,
                u = -1;
              while (++u < i) e.push(o[u]);
            }
          while (null != (t = r.pop())) n(t);
        }
        function Su(t) {
          return t.children;
        }
        function ju(t) {
          return t.value;
        }
        function Ou(t, n) {
          return n.value - t.value;
        }
        function ku(t) {
          return o.merge(
            t.map(function (t) {
              return (t.children || []).map(function (n) {
                return {
                  source: t,
                  target: n
                };
              });
            })
          );
        }
        (o.layout.hierarchy = function () {
          var t = Ou,
            n = Su,
            e = ju;
          function r(i) {
            var o,
              u = [i],
              a = [];
            i.depth = 0;
            while (null != (o = u.pop()))
              if ((a.push(o), (l = n.call(r, o, o.depth)) && (c = l.length))) {
                var c, l, s;
                while (--c >= 0)
                  u.push((s = l[c])), (s.parent = o), (s.depth = o.depth + 1);
                e && (o.value = 0), (o.children = l);
              } else
                e && (o.value = +e.call(r, o, o.depth) || 0), delete o.children;
            return (
              _u(i, function (n) {
                var r, i;
                t && (r = n.children) && r.sort(t),
                  e && (i = n.parent) && (i.value += n.value);
              }),
              a
            );
          }
          return (
            (r.sort = function (n) {
              return arguments.length ? ((t = n), r) : t;
            }),
            (r.children = function (t) {
              return arguments.length ? ((n = t), r) : n;
            }),
            (r.value = function (t) {
              return arguments.length ? ((e = t), r) : e;
            }),
            (r.revalue = function (t) {
              return (
                e &&
                  (Mu(t, function (t) {
                    t.children && (t.value = 0);
                  }),
                  _u(t, function (t) {
                    var n;
                    t.children || (t.value = +e.call(r, t, t.depth) || 0),
                      (n = t.parent) && (n.value += t.value);
                  })),
                t
              );
            }),
            r
          );
        }),
          (o.layout.partition = function () {
            var t = o.layout.hierarchy(),
              n = [1, 1];
            function e(t, n, r, i) {
              var o = t.children;
              if (
                ((t.x = n),
                (t.y = t.depth * i),
                (t.dx = r),
                (t.dy = i),
                o && (u = o.length))
              ) {
                var u,
                  a,
                  c,
                  l = -1;
                r = t.value ? r / t.value : 0;
                while (++l < u)
                  e((a = o[l]), n, (c = a.value * r), i), (n += c);
              }
            }
            function r(t) {
              var n = t.children,
                e = 0;
              if (n && (i = n.length)) {
                var i,
                  o = -1;
                while (++o < i) e = Math.max(e, r(n[o]));
              }
              return 1 + e;
            }
            function i(i, o) {
              var u = t.call(this, i, o);
              return e(u[0], 0, n[0], n[1] / r(u[0])), u;
            }
            return (
              (i.size = function (t) {
                return arguments.length ? ((n = t), i) : n;
              }),
              wu(i, t)
            );
          }),
          (o.layout.pie = function () {
            var t = Number,
              n = Eu,
              e = 0,
              r = Tt,
              i = 0;
            function u(a) {
              var c,
                l = a.length,
                s = a.map(function (n, e) {
                  return +t.call(u, n, e);
                }),
                f = +("function" === typeof e ? e.apply(this, arguments) : e),
                h =
                  ("function" === typeof r ? r.apply(this, arguments) : r) - f,
                p = Math.min(
                  Math.abs(h) / l,
                  +("function" === typeof i ? i.apply(this, arguments) : i)
                ),
                d = p * (h < 0 ? -1 : 1),
                g = o.sum(s),
                v = g ? (h - l * d) / g : 0,
                y = o.range(l),
                m = [];
              return (
                null != n &&
                  y.sort(
                    n === Eu
                      ? function (t, n) {
                          return s[n] - s[t];
                        }
                      : function (t, e) {
                          return n(a[t], a[e]);
                        }
                  ),
                y.forEach(function (t) {
                  m[t] = {
                    data: a[t],
                    value: (c = s[t]),
                    startAngle: f,
                    endAngle: (f += c * v + d),
                    padAngle: p
                  };
                }),
                m
              );
            }
            return (
              (u.value = function (n) {
                return arguments.length ? ((t = n), u) : t;
              }),
              (u.sort = function (t) {
                return arguments.length ? ((n = t), u) : n;
              }),
              (u.startAngle = function (t) {
                return arguments.length ? ((e = t), u) : e;
              }),
              (u.endAngle = function (t) {
                return arguments.length ? ((r = t), u) : r;
              }),
              (u.padAngle = function (t) {
                return arguments.length ? ((i = t), u) : i;
              }),
              u
            );
          });
        var Eu = {};
        function Au(t) {
          return t.x;
        }
        function Cu(t) {
          return t.y;
        }
        function Lu(t, n, e) {
          (t.y0 = n), (t.y = e);
        }
        o.layout.stack = function () {
          var t = F,
            n = Ru,
            e = Pu,
            r = Lu,
            i = Au,
            u = Cu;
          function a(c, l) {
            if (!(p = c.length)) return c;
            var s = c.map(function (n, e) {
                return t.call(a, n, e);
              }),
              f = s.map(function (t) {
                return t.map(function (t, n) {
                  return [i.call(a, t, n), u.call(a, t, n)];
                });
              }),
              h = n.call(a, f, l);
            (s = o.permute(s, h)), (f = o.permute(f, h));
            var p,
              d,
              g,
              v,
              y = e.call(a, f, l),
              m = s[0].length;
            for (g = 0; g < m; ++g)
              for (
                r.call(a, s[0][g], (v = y[g]), f[0][g][1]), d = 1;
                d < p;
                ++d
              )
                r.call(a, s[d][g], (v += f[d - 1][g][1]), f[d][g][1]);
            return c;
          }
          return (
            (a.values = function (n) {
              return arguments.length ? ((t = n), a) : t;
            }),
            (a.order = function (t) {
              return arguments.length
                ? ((n = "function" === typeof t ? t : Nu.get(t) || Ru), a)
                : n;
            }),
            (a.offset = function (t) {
              return arguments.length
                ? ((e = "function" === typeof t ? t : Tu.get(t) || Pu), a)
                : e;
            }),
            (a.x = function (t) {
              return arguments.length ? ((i = t), a) : i;
            }),
            (a.y = function (t) {
              return arguments.length ? ((u = t), a) : u;
            }),
            (a.out = function (t) {
              return arguments.length ? ((r = t), a) : r;
            }),
            a
          );
        };
        var Nu = o.map({
            "inside-out": function (t) {
              var n,
                e,
                r = t.length,
                i = t.map(Fu),
                u = t.map(Uu),
                a = o.range(r).sort(function (t, n) {
                  return i[t] - i[n];
                }),
                c = 0,
                l = 0,
                s = [],
                f = [];
              for (n = 0; n < r; ++n)
                (e = a[n]),
                  c < l ? ((c += u[e]), s.push(e)) : ((l += u[e]), f.push(e));
              return f.reverse().concat(s);
            },
            reverse: function (t) {
              return o.range(t.length).reverse();
            },
            default: Ru
          }),
          Tu = o.map({
            silhouette: function (t) {
              var n,
                e,
                r,
                i = t.length,
                o = t[0].length,
                u = [],
                a = 0,
                c = [];
              for (e = 0; e < o; ++e) {
                for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                r > a && (a = r), u.push(r);
              }
              for (e = 0; e < o; ++e) c[e] = (a - u[e]) / 2;
              return c;
            },
            wiggle: function (t) {
              var n,
                e,
                r,
                i,
                o,
                u,
                a,
                c,
                l,
                s = t.length,
                f = t[0],
                h = f.length,
                p = [];
              for (p[0] = c = l = 0, e = 1; e < h; ++e) {
                for (n = 0, i = 0; n < s; ++n) i += t[n][e][1];
                for (n = 0, o = 0, a = f[e][0] - f[e - 1][0]; n < s; ++n) {
                  for (
                    r = 0, u = (t[n][e][1] - t[n][e - 1][1]) / (2 * a);
                    r < n;
                    ++r
                  )
                    u += (t[r][e][1] - t[r][e - 1][1]) / a;
                  o += u * t[n][e][1];
                }
                (p[e] = c -= i ? (o / i) * a : 0), c < l && (l = c);
              }
              for (e = 0; e < h; ++e) p[e] -= l;
              return p;
            },
            expand: function (t) {
              var n,
                e,
                r,
                i = t.length,
                o = t[0].length,
                u = 1 / i,
                a = [];
              for (e = 0; e < o; ++e) {
                for (n = 0, r = 0; n < i; n++) r += t[n][e][1];
                if (r) for (n = 0; n < i; n++) t[n][e][1] /= r;
                else for (n = 0; n < i; n++) t[n][e][1] = u;
              }
              for (e = 0; e < o; ++e) a[e] = 0;
              return a;
            },
            zero: Pu
          });
        function Ru(t) {
          return o.range(t.length);
        }
        function Pu(t) {
          var n = -1,
            e = t[0].length,
            r = [];
          while (++n < e) r[n] = 0;
          return r;
        }
        function Fu(t) {
          for (var n, e = 1, r = 0, i = t[0][1], o = t.length; e < o; ++e)
            (n = t[e][1]) > i && ((r = e), (i = n));
          return r;
        }
        function Uu(t) {
          return t.reduce(qu, 0);
        }
        function qu(t, n) {
          return t + n[1];
        }
        function zu(t, n) {
          return Du(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1));
        }
        function Du(t, n) {
          var e = -1,
            r = +t[0],
            i = (t[1] - r) / n,
            o = [];
          while (++e <= n) o[e] = i * e + r;
          return o;
        }
        function Iu(t) {
          return [o.min(t), o.max(t)];
        }
        function Bu(t, n) {
          return t.value - n.value;
        }
        function Hu(t, n) {
          var e = t._pack_next;
          (t._pack_next = n),
            (n._pack_prev = t),
            (n._pack_next = e),
            (e._pack_prev = n);
        }
        function Vu(t, n) {
          (t._pack_next = n), (n._pack_prev = t);
        }
        function $u(t, n) {
          var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r + n.r;
          return 0.999 * i * i > e * e + r * r;
        }
        function Yu(t) {
          if ((n = t.children) && (c = n.length)) {
            var n,
              e,
              r,
              i,
              o,
              u,
              a,
              c,
              l = 1 / 0,
              s = -1 / 0,
              f = 1 / 0,
              h = -1 / 0;
            if (
              (n.forEach(Wu),
              (e = n[0]),
              (e.x = -e.r),
              (e.y = 0),
              b(e),
              c > 1 && ((r = n[1]), (r.x = r.r), (r.y = 0), b(r), c > 2))
            )
              for (
                i = n[2],
                  Xu(e, r, i),
                  b(i),
                  Hu(e, i),
                  e._pack_prev = i,
                  Hu(i, r),
                  r = e._pack_next,
                  o = 3;
                o < c;
                o++
              ) {
                Xu(e, r, (i = n[o]));
                var p = 0,
                  d = 1,
                  g = 1;
                for (u = r._pack_next; u !== r; u = u._pack_next, d++)
                  if ($u(u, i)) {
                    p = 1;
                    break;
                  }
                if (1 == p)
                  for (
                    a = e._pack_prev;
                    a !== u._pack_prev;
                    a = a._pack_prev, g++
                  )
                    if ($u(a, i)) break;
                p
                  ? (d < g || (d == g && r.r < e.r)
                      ? Vu(e, (r = u))
                      : Vu((e = a), r),
                    o--)
                  : (Hu(e, i), (r = i), b(i));
              }
            var v = (l + s) / 2,
              y = (f + h) / 2,
              m = 0;
            for (o = 0; o < c; o++)
              (i = n[o]),
                (i.x -= v),
                (i.y -= y),
                (m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y)));
            (t.r = m), n.forEach(Zu);
          }
          function b(t) {
            (l = Math.min(t.x - t.r, l)),
              (s = Math.max(t.x + t.r, s)),
              (f = Math.min(t.y - t.r, f)),
              (h = Math.max(t.y + t.r, h));
          }
        }
        function Wu(t) {
          t._pack_next = t._pack_prev = t;
        }
        function Zu(t) {
          delete t._pack_next, delete t._pack_prev;
        }
        function Gu(t, n, e, r) {
          var i = t.children;
          if (((t.x = n += r * t.x), (t.y = e += r * t.y), (t.r *= r), i)) {
            var o = -1,
              u = i.length;
            while (++o < u) Gu(i[o], n, e, r);
          }
        }
        function Xu(t, n, e) {
          var r = t.r + e.r,
            i = n.x - t.x,
            o = n.y - t.y;
          if (r && (i || o)) {
            var u = n.r + e.r,
              a = i * i + o * o;
            (u *= u), (r *= r);
            var c = 0.5 + (r - u) / (2 * a),
              l =
                Math.sqrt(Math.max(0, 2 * u * (r + a) - (r -= a) * r - u * u)) /
                (2 * a);
            (e.x = t.x + c * i + l * o), (e.y = t.y + c * o - l * i);
          } else (e.x = t.x + r), (e.y = t.y);
        }
        function Ju(t, n) {
          return t.parent == n.parent ? 1 : 2;
        }
        function Ku(t) {
          var n = t.children;
          return n.length ? n[0] : t.t;
        }
        function Qu(t) {
          var n,
            e = t.children;
          return (n = e.length) ? e[n - 1] : t.t;
        }
        function ta(t, n, e) {
          var r = e / (n.i - t.i);
          (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
        }
        function na(t) {
          var n,
            e = 0,
            r = 0,
            i = t.children,
            o = i.length;
          while (--o >= 0)
            (n = i[o]), (n.z += e), (n.m += e), (e += n.s + (r += n.c));
        }
        function ea(t, n, e) {
          return t.a.parent === n.parent ? t.a : e;
        }
        function ra(t) {
          return (
            1 +
            o.max(t, function (t) {
              return t.y;
            })
          );
        }
        function ia(t) {
          return (
            t.reduce(function (t, n) {
              return t + n.x;
            }, 0) / t.length
          );
        }
        function oa(t) {
          var n = t.children;
          return n && n.length ? oa(n[0]) : t;
        }
        function ua(t) {
          var n,
            e = t.children;
          return e && (n = e.length) ? ua(e[n - 1]) : t;
        }
        function aa(t) {
          return {
            x: t.x,
            y: t.y,
            dx: t.dx,
            dy: t.dy
          };
        }
        function ca(t, n) {
          var e = t.x + n[3],
            r = t.y + n[0],
            i = t.dx - n[1] - n[3],
            o = t.dy - n[0] - n[2];
          return (
            i < 0 && ((e += i / 2), (i = 0)),
            o < 0 && ((r += o / 2), (o = 0)),
            {
              x: e,
              y: r,
              dx: i,
              dy: o
            }
          );
        }
        function la(t) {
          var n = t[0],
            e = t[t.length - 1];
          return n < e ? [n, e] : [e, n];
        }
        function sa(t) {
          return t.rangeExtent ? t.rangeExtent() : la(t.range());
        }
        function fa(t, n, e, r) {
          var i = e(t[0], t[1]),
            o = r(n[0], n[1]);
          return function (t) {
            return o(i(t));
          };
        }
        function ha(t, n) {
          var e,
            r = 0,
            i = t.length - 1,
            o = t[r],
            u = t[i];
          return (
            u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
            (t[r] = n.floor(o)),
            (t[i] = n.ceil(u)),
            t
          );
        }
        function pa(t) {
          return t
            ? {
                floor: function (n) {
                  return Math.floor(n / t) * t;
                },
                ceil: function (n) {
                  return Math.ceil(n / t) * t;
                }
              }
            : da;
        }
        (o.layout.histogram = function () {
          var t = !0,
            n = Number,
            e = Iu,
            r = zu;
          function i(i, u) {
            var a,
              c,
              l = [],
              s = i.map(n, this),
              f = e.call(this, s, u),
              h = r.call(this, f, s, u),
              p = ((u = -1), s.length),
              d = h.length - 1,
              g = t ? 1 : 1 / p;
            while (++u < d)
              (a = l[u] = []), (a.dx = h[u + 1] - (a.x = h[u])), (a.y = 0);
            if (d > 0) {
              u = -1;
              while (++u < p)
                (c = s[u]),
                  c >= f[0] &&
                    c <= f[1] &&
                    ((a = l[o.bisect(h, c, 1, d) - 1]),
                    (a.y += g),
                    a.push(i[u]));
            }
            return l;
          }
          return (
            (i.value = function (t) {
              return arguments.length ? ((n = t), i) : n;
            }),
            (i.range = function (t) {
              return arguments.length ? ((e = En(t)), i) : e;
            }),
            (i.bins = function (t) {
              return arguments.length
                ? ((r =
                    "number" === typeof t
                      ? function (n) {
                          return Du(n, t);
                        }
                      : En(t)),
                  i)
                : r;
            }),
            (i.frequency = function (n) {
              return arguments.length ? ((t = !!n), i) : t;
            }),
            i
          );
        }),
          (o.layout.pack = function () {
            var t,
              n = o.layout.hierarchy().sort(Bu),
              e = 0,
              r = [1, 1];
            function i(i, o) {
              var u = n.call(this, i, o),
                a = u[0],
                c = r[0],
                l = r[1],
                s =
                  null == t
                    ? Math.sqrt
                    : "function" === typeof t
                    ? t
                    : function () {
                        return t;
                      };
              if (
                ((a.x = a.y = 0),
                _u(a, function (t) {
                  t.r = +s(t.value);
                }),
                _u(a, Yu),
                e)
              ) {
                var f =
                  (e * (t ? 1 : Math.max((2 * a.r) / c, (2 * a.r) / l))) / 2;
                _u(a, function (t) {
                  t.r += f;
                }),
                  _u(a, Yu),
                  _u(a, function (t) {
                    t.r -= f;
                  });
              }
              return (
                Gu(
                  a,
                  c / 2,
                  l / 2,
                  t ? 1 : 1 / Math.max((2 * a.r) / c, (2 * a.r) / l)
                ),
                u
              );
            }
            return (
              (i.size = function (t) {
                return arguments.length ? ((r = t), i) : r;
              }),
              (i.radius = function (n) {
                return arguments.length
                  ? ((t = null == n || "function" === typeof n ? n : +n), i)
                  : t;
              }),
              (i.padding = function (t) {
                return arguments.length ? ((e = +t), i) : e;
              }),
              wu(i, n)
            );
          }),
          (o.layout.tree = function () {
            var t = o.layout.hierarchy().sort(null).value(null),
              n = Ju,
              e = [1, 1],
              r = null;
            function i(i, o) {
              var l = t.call(this, i, o),
                f = l[0],
                h = u(f);
              if ((_u(h, a), (h.parent.m = -h.z), Mu(h, c), r)) Mu(f, s);
              else {
                var p = f,
                  d = f,
                  g = f;
                Mu(f, function (t) {
                  t.x < p.x && (p = t),
                    t.x > d.x && (d = t),
                    t.depth > g.depth && (g = t);
                });
                var v = n(p, d) / 2 - p.x,
                  y = e[0] / (d.x + n(d, p) / 2 + v),
                  m = e[1] / (g.depth || 1);
                Mu(f, function (t) {
                  (t.x = (t.x + v) * y), (t.y = t.depth * m);
                });
              }
              return l;
            }
            function u(t) {
              var n,
                e = {
                  A: null,
                  children: [t]
                },
                r = [e];
              while (null != (n = r.pop()))
                for (var i, o = n.children, u = 0, a = o.length; u < a; ++u)
                  r.push(
                    ((o[u] = i = {
                      _: o[u],
                      parent: n,
                      children: ((i = o[u].children) && i.slice()) || [],
                      A: null,
                      a: null,
                      z: 0,
                      m: 0,
                      c: 0,
                      s: 0,
                      t: null,
                      i: u
                    }).a = i)
                  );
              return e.children[0];
            }
            function a(t) {
              var e = t.children,
                r = t.parent.children,
                i = t.i ? r[t.i - 1] : null;
              if (e.length) {
                na(t);
                var o = (e[0].z + e[e.length - 1].z) / 2;
                i ? ((t.z = i.z + n(t._, i._)), (t.m = t.z - o)) : (t.z = o);
              } else i && (t.z = i.z + n(t._, i._));
              t.parent.A = l(t, i, t.parent.A || r[0]);
            }
            function c(t) {
              (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
            }
            function l(t, e, r) {
              if (e) {
                var i,
                  o = t,
                  u = t,
                  a = e,
                  c = o.parent.children[0],
                  l = o.m,
                  s = u.m,
                  f = a.m,
                  h = c.m;
                while (((a = Qu(a)), (o = Ku(o)), a && o))
                  (c = Ku(c)),
                    (u = Qu(u)),
                    (u.a = t),
                    (i = a.z + f - o.z - l + n(a._, o._)),
                    i > 0 && (ta(ea(a, t, r), t, i), (l += i), (s += i)),
                    (f += a.m),
                    (l += o.m),
                    (h += c.m),
                    (s += u.m);
                a && !Qu(u) && ((u.t = a), (u.m += f - s)),
                  o && !Ku(c) && ((c.t = o), (c.m += l - h), (r = t));
              }
              return r;
            }
            function s(t) {
              (t.x *= e[0]), (t.y = t.depth * e[1]);
            }
            return (
              (i.separation = function (t) {
                return arguments.length ? ((n = t), i) : n;
              }),
              (i.size = function (t) {
                return arguments.length
                  ? ((r = null == (e = t) ? s : null), i)
                  : r
                  ? null
                  : e;
              }),
              (i.nodeSize = function (t) {
                return arguments.length
                  ? ((r = null == (e = t) ? null : s), i)
                  : r
                  ? e
                  : null;
              }),
              wu(i, t)
            );
          }),
          (o.layout.cluster = function () {
            var t = o.layout.hierarchy().sort(null).value(null),
              n = Ju,
              e = [1, 1],
              r = !1;
            function i(i, o) {
              var u,
                a = t.call(this, i, o),
                c = a[0],
                l = 0;
              _u(c, function (t) {
                var e = t.children;
                e && e.length
                  ? ((t.x = ia(e)), (t.y = ra(e)))
                  : ((t.x = u ? (l += n(t, u)) : 0), (t.y = 0), (u = t));
              });
              var s = oa(c),
                f = ua(c),
                h = s.x - n(s, f) / 2,
                p = f.x + n(f, s) / 2;
              return (
                _u(
                  c,
                  r
                    ? function (t) {
                        (t.x = (t.x - c.x) * e[0]), (t.y = (c.y - t.y) * e[1]);
                      }
                    : function (t) {
                        (t.x = ((t.x - h) / (p - h)) * e[0]),
                          (t.y = (1 - (c.y ? t.y / c.y : 1)) * e[1]);
                      }
                ),
                a
              );
            }
            return (
              (i.separation = function (t) {
                return arguments.length ? ((n = t), i) : n;
              }),
              (i.size = function (t) {
                return arguments.length
                  ? ((r = null == (e = t)), i)
                  : r
                  ? null
                  : e;
              }),
              (i.nodeSize = function (t) {
                return arguments.length
                  ? ((r = null != (e = t)), i)
                  : r
                  ? e
                  : null;
              }),
              wu(i, t)
            );
          }),
          (o.layout.treemap = function () {
            var t,
              n = o.layout.hierarchy(),
              e = Math.round,
              r = [1, 1],
              i = null,
              u = aa,
              a = !1,
              c = "squarify",
              l = 0.5 * (1 + Math.sqrt(5));
            function s(t, n) {
              var e,
                r,
                i = -1,
                o = t.length;
              while (++i < o)
                (r = (e = t[i]).value * (n < 0 ? 0 : n)),
                  (e.area = isNaN(r) || r <= 0 ? 0 : r);
            }
            function f(t) {
              var n = t.children;
              if (n && n.length) {
                var e,
                  r,
                  i,
                  o = u(t),
                  a = [],
                  l = n.slice(),
                  h = 1 / 0,
                  g =
                    "slice" === c
                      ? o.dx
                      : "dice" === c
                      ? o.dy
                      : "slice-dice" === c
                      ? 1 & t.depth
                        ? o.dy
                        : o.dx
                      : Math.min(o.dx, o.dy);
                s(l, (o.dx * o.dy) / t.value), (a.area = 0);
                while ((i = l.length) > 0)
                  a.push((e = l[i - 1])),
                    (a.area += e.area),
                    "squarify" !== c || (r = p(a, g)) <= h
                      ? (l.pop(), (h = r))
                      : ((a.area -= a.pop().area),
                        d(a, g, o, !1),
                        (g = Math.min(o.dx, o.dy)),
                        (a.length = a.area = 0),
                        (h = 1 / 0));
                a.length && (d(a, g, o, !0), (a.length = a.area = 0)),
                  n.forEach(f);
              }
            }
            function h(t) {
              var n = t.children;
              if (n && n.length) {
                var e,
                  r = u(t),
                  i = n.slice(),
                  o = [];
                s(i, (r.dx * r.dy) / t.value), (o.area = 0);
                while ((e = i.pop()))
                  o.push(e),
                    (o.area += e.area),
                    null != e.z &&
                      (d(o, e.z ? r.dx : r.dy, r, !i.length),
                      (o.length = o.area = 0));
                n.forEach(h);
              }
            }
            function p(t, n) {
              var e,
                r = t.area,
                i = 0,
                o = 1 / 0,
                u = -1,
                a = t.length;
              while (++u < a)
                (e = t[u].area) && (e < o && (o = e), e > i && (i = e));
              return (
                (r *= r),
                (n *= n),
                r ? Math.max((n * i * l) / r, r / (n * o * l)) : 1 / 0
              );
            }
            function d(t, n, r, i) {
              var o,
                u = -1,
                a = t.length,
                c = r.x,
                l = r.y,
                s = n ? e(t.area / n) : 0;
              if (n == r.dx) {
                (i || s > r.dy) && (s = r.dy);
                while (++u < a)
                  (o = t[u]),
                    (o.x = c),
                    (o.y = l),
                    (o.dy = s),
                    (c += o.dx = Math.min(
                      r.x + r.dx - c,
                      s ? e(o.area / s) : 0
                    ));
                (o.z = !0), (o.dx += r.x + r.dx - c), (r.y += s), (r.dy -= s);
              } else {
                (i || s > r.dx) && (s = r.dx);
                while (++u < a)
                  (o = t[u]),
                    (o.x = c),
                    (o.y = l),
                    (o.dx = s),
                    (l += o.dy = Math.min(
                      r.y + r.dy - l,
                      s ? e(o.area / s) : 0
                    ));
                (o.z = !1), (o.dy += r.y + r.dy - l), (r.x += s), (r.dx -= s);
              }
            }
            function g(e) {
              var i = t || n(e),
                o = i[0];
              return (
                (o.x = o.y = 0),
                o.value ? ((o.dx = r[0]), (o.dy = r[1])) : (o.dx = o.dy = 0),
                t && n.revalue(o),
                s([o], (o.dx * o.dy) / o.value),
                (t ? h : f)(o),
                a && (t = i),
                i
              );
            }
            return (
              (g.size = function (t) {
                return arguments.length ? ((r = t), g) : r;
              }),
              (g.padding = function (t) {
                if (!arguments.length) return i;
                function n(n) {
                  var e = t.call(g, n, n.depth);
                  return null == e
                    ? aa(n)
                    : ca(n, "number" === typeof e ? [e, e, e, e] : e);
                }
                function e(n) {
                  return ca(n, t);
                }
                var r;
                return (
                  (u =
                    null == (i = t)
                      ? aa
                      : "function" === (r = typeof t)
                      ? n
                      : "number" === r
                      ? ((t = [t, t, t, t]), e)
                      : e),
                  g
                );
              }),
              (g.round = function (t) {
                return arguments.length
                  ? ((e = t ? Math.round : Number), g)
                  : e != Number;
              }),
              (g.sticky = function (n) {
                return arguments.length ? ((a = n), (t = null), g) : a;
              }),
              (g.ratio = function (t) {
                return arguments.length ? ((l = t), g) : l;
              }),
              (g.mode = function (t) {
                return arguments.length ? ((c = t + ""), g) : c;
              }),
              wu(g, n)
            );
          }),
          (o.random = {
            normal: function (t, n) {
              var e = arguments.length;
              return (
                e < 2 && (n = 1),
                e < 1 && (t = 0),
                function () {
                  var e, r, i;
                  do {
                    (e = 2 * Math.random() - 1),
                      (r = 2 * Math.random() - 1),
                      (i = e * e + r * r);
                  } while (!i || i > 1);
                  return t + n * e * Math.sqrt((-2 * Math.log(i)) / i);
                }
              );
            },
            logNormal: function () {
              var t = o.random.normal.apply(o, arguments);
              return function () {
                return Math.exp(t());
              };
            },
            bates: function (t) {
              var n = o.random.irwinHall(t);
              return function () {
                return n() / t;
              };
            },
            irwinHall: function (t) {
              return function () {
                for (var n = 0, e = 0; e < t; e++) n += Math.random();
                return n;
              };
            }
          }),
          (o.scale = {});
        var da = {
          floor: F,
          ceil: F
        };
        function ga(t, n, e, r) {
          var i = [],
            u = [],
            a = 0,
            c = Math.min(t.length, n.length) - 1;
          t[c] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
          while (++a <= c) i.push(e(t[a - 1], t[a])), u.push(r(n[a - 1], n[a]));
          return function (n) {
            var e = o.bisect(t, n, 1, c) - 1;
            return u[e](i[e](n));
          };
        }
        function va(t, n, e, r) {
          var i, o;
          function u() {
            var u = Math.min(t.length, n.length) > 2 ? ga : fa,
              c = r ? lu : cu;
            return (i = u(t, n, c, e)), (o = u(n, t, c, Ao)), a;
          }
          function a(t) {
            return i(t);
          }
          return (
            (a.invert = function (t) {
              return o(t);
            }),
            (a.domain = function (n) {
              return arguments.length ? ((t = n.map(Number)), u()) : t;
            }),
            (a.range = function (t) {
              return arguments.length ? ((n = t), u()) : n;
            }),
            (a.rangeRound = function (t) {
              return a.range(t).interpolate(Xo);
            }),
            (a.clamp = function (t) {
              return arguments.length ? ((r = t), u()) : r;
            }),
            (a.interpolate = function (t) {
              return arguments.length ? ((e = t), u()) : e;
            }),
            (a.ticks = function (n) {
              return xa(t, n);
            }),
            (a.tickFormat = function (n, e) {
              return wa(t, n, e);
            }),
            (a.nice = function (n) {
              return ma(t, n), u();
            }),
            (a.copy = function () {
              return va(t, n, e, r);
            }),
            u()
          );
        }
        function ya(t, n) {
          return o.rebind(t, n, "range", "rangeRound", "interpolate", "clamp");
        }
        function ma(t, n) {
          return ha(t, pa(ba(t, n)[2])), ha(t, pa(ba(t, n)[2])), t;
        }
        function ba(t, n) {
          null == n && (n = 10);
          var e = la(t),
            r = e[1] - e[0],
            i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
            o = (n / r) * i;
          return (
            o <= 0.15
              ? (i *= 10)
              : o <= 0.35
              ? (i *= 5)
              : o <= 0.75 && (i *= 2),
            (e[0] = Math.ceil(e[0] / i) * i),
            (e[1] = Math.floor(e[1] / i) * i + 0.5 * i),
            (e[2] = i),
            e
          );
        }
        function xa(t, n) {
          return o.range.apply(o, ba(t, n));
        }
        function wa(t, n, e) {
          var r = ba(t, n);
          if (e) {
            var i = Yn.exec(e);
            if ((i.shift(), "s" === i[8])) {
              var u = o.formatPrefix(Math.max(M(r[0]), M(r[1])));
              return (
                i[7] || (i[7] = "." + _a(u.scale(r[2]))),
                (i[8] = "f"),
                (e = o.format(i.join(""))),
                function (t) {
                  return e(u.scale(t)) + u.symbol;
                }
              );
            }
            i[7] || (i[7] = "." + Sa(i[8], r)), (e = i.join(""));
          } else e = ",." + _a(r[2]) + "f";
          return o.format(e);
        }
        o.scale.linear = function () {
          return va([0, 1], [0, 1], Ao, !1);
        };
        var Ma = {
          s: 1,
          g: 1,
          p: 1,
          r: 1,
          e: 1
        };
        function _a(t) {
          return -Math.floor(Math.log(t) / Math.LN10 + 0.01);
        }
        function Sa(t, n) {
          var e = _a(n[2]);
          return t in Ma
            ? Math.abs(e - _a(Math.max(M(n[0]), M(n[1])))) + +("e" !== t)
            : e - 2 * ("%" === t);
        }
        function ja(t, n, e, r) {
          function i(t) {
            return (
              (e ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) /
              Math.log(n)
            );
          }
          function u(t) {
            return e ? Math.pow(n, t) : -Math.pow(n, -t);
          }
          function a(n) {
            return t(i(n));
          }
          return (
            (a.invert = function (n) {
              return u(t.invert(n));
            }),
            (a.domain = function (n) {
              return arguments.length
                ? ((e = n[0] >= 0), t.domain((r = n.map(Number)).map(i)), a)
                : r;
            }),
            (a.base = function (e) {
              return arguments.length ? ((n = +e), t.domain(r.map(i)), a) : n;
            }),
            (a.nice = function () {
              var n = ha(r.map(i), e ? Math : ka);
              return t.domain(n), (r = n.map(u)), a;
            }),
            (a.ticks = function () {
              var t = la(r),
                o = [],
                a = t[0],
                c = t[1],
                l = Math.floor(i(a)),
                s = Math.ceil(i(c)),
                f = n % 1 ? 2 : n;
              if (isFinite(s - l)) {
                if (e) {
                  for (; l < s; l++)
                    for (var h = 1; h < f; h++) o.push(u(l) * h);
                  o.push(u(l));
                } else
                  for (o.push(u(l)); l++ < s; )
                    for (h = f - 1; h > 0; h--) o.push(u(l) * h);
                for (l = 0; o[l] < a; l++);
                for (s = o.length; o[s - 1] > c; s--);
                o = o.slice(l, s);
              }
              return o;
            }),
            (a.tickFormat = function (t, e) {
              if (!arguments.length) return Oa;
              arguments.length < 2
                ? (e = Oa)
                : "function" !== typeof e && (e = o.format(e));
              var r = Math.max(1, (n * t) / a.ticks().length);
              return function (t) {
                var o = t / u(Math.round(i(t)));
                return o * n < n - 0.5 && (o *= n), o <= r ? e(t) : "";
              };
            }),
            (a.copy = function () {
              return ja(t.copy(), n, e, r);
            }),
            ya(a, t)
          );
        }
        o.scale.log = function () {
          return ja(o.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
        };
        var Oa = o.format(".0e"),
          ka = {
            floor: function (t) {
              return -Math.ceil(-t);
            },
            ceil: function (t) {
              return -Math.floor(-t);
            }
          };
        function Ea(t, n, e) {
          var r = Aa(n),
            i = Aa(1 / n);
          function o(n) {
            return t(r(n));
          }
          return (
            (o.invert = function (n) {
              return i(t.invert(n));
            }),
            (o.domain = function (n) {
              return arguments.length
                ? (t.domain((e = n.map(Number)).map(r)), o)
                : e;
            }),
            (o.ticks = function (t) {
              return xa(e, t);
            }),
            (o.tickFormat = function (t, n) {
              return wa(e, t, n);
            }),
            (o.nice = function (t) {
              return o.domain(ma(e, t));
            }),
            (o.exponent = function (u) {
              return arguments.length
                ? ((r = Aa((n = u))), (i = Aa(1 / n)), t.domain(e.map(r)), o)
                : n;
            }),
            (o.copy = function () {
              return Ea(t.copy(), n, e);
            }),
            ya(o, t)
          );
        }
        function Aa(t) {
          return function (n) {
            return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
          };
        }
        function Ca(t, n) {
          var e, r, i;
          function u(i) {
            return r[
              ((e.get(i) || ("range" === n.t ? e.set(i, t.push(i)) : NaN)) -
                1) %
                r.length
            ];
          }
          function a(n, e) {
            return o.range(t.length).map(function (t) {
              return n + e * t;
            });
          }
          return (
            (u.domain = function (r) {
              if (!arguments.length) return t;
              (t = []), (e = new j());
              var i,
                o = -1,
                a = r.length;
              while (++o < a) e.has((i = r[o])) || e.set(i, t.push(i));
              return u[n.t].apply(u, n.a);
            }),
            (u.range = function (t) {
              return arguments.length
                ? ((r = t),
                  (i = 0),
                  (n = {
                    t: "range",
                    a: arguments
                  }),
                  u)
                : r;
            }),
            (u.rangePoints = function (e, o) {
              arguments.length < 2 && (o = 0);
              var c = e[0],
                l = e[1],
                s =
                  t.length < 2
                    ? ((c = (c + l) / 2), 0)
                    : (l - c) / (t.length - 1 + o);
              return (
                (r = a(c + (s * o) / 2, s)),
                (i = 0),
                (n = {
                  t: "rangePoints",
                  a: arguments
                }),
                u
              );
            }),
            (u.rangeRoundPoints = function (e, o) {
              arguments.length < 2 && (o = 0);
              var c = e[0],
                l = e[1],
                s =
                  t.length < 2
                    ? ((c = l = Math.round((c + l) / 2)), 0)
                    : ((l - c) / (t.length - 1 + o)) | 0;
              return (
                (r = a(
                  c +
                    Math.round(
                      (s * o) / 2 + (l - c - (t.length - 1 + o) * s) / 2
                    ),
                  s
                )),
                (i = 0),
                (n = {
                  t: "rangeRoundPoints",
                  a: arguments
                }),
                u
              );
            }),
            (u.rangeBands = function (e, o, c) {
              arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
              var l = e[1] < e[0],
                s = e[l - 0],
                f = e[1 - l],
                h = (f - s) / (t.length - o + 2 * c);
              return (
                (r = a(s + h * c, h)),
                l && r.reverse(),
                (i = h * (1 - o)),
                (n = {
                  t: "rangeBands",
                  a: arguments
                }),
                u
              );
            }),
            (u.rangeRoundBands = function (e, o, c) {
              arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
              var l = e[1] < e[0],
                s = e[l - 0],
                f = e[1 - l],
                h = Math.floor((f - s) / (t.length - o + 2 * c));
              return (
                (r = a(s + Math.round((f - s - (t.length - o) * h) / 2), h)),
                l && r.reverse(),
                (i = Math.round(h * (1 - o))),
                (n = {
                  t: "rangeRoundBands",
                  a: arguments
                }),
                u
              );
            }),
            (u.rangeBand = function () {
              return i;
            }),
            (u.rangeExtent = function () {
              return la(n.a[0]);
            }),
            (u.copy = function () {
              return Ca(t, n);
            }),
            u.domain(t)
          );
        }
        (o.scale.pow = function () {
          return Ea(o.scale.linear(), 1, [0, 1]);
        }),
          (o.scale.sqrt = function () {
            return o.scale.pow().exponent(0.5);
          }),
          (o.scale.ordinal = function () {
            return Ca([], {
              t: "range",
              a: [[]]
            });
          }),
          (o.scale.category10 = function () {
            return o.scale.ordinal().range(La);
          }),
          (o.scale.category20 = function () {
            return o.scale.ordinal().range(Na);
          }),
          (o.scale.category20b = function () {
            return o.scale.ordinal().range(Ta);
          }),
          (o.scale.category20c = function () {
            return o.scale.ordinal().range(Ra);
          });
        var La = [
            2062260,
            16744206,
            2924588,
            14034728,
            9725885,
            9197131,
            14907330,
            8355711,
            12369186,
            1556175
          ].map(bn),
          Na = [
            2062260,
            11454440,
            16744206,
            16759672,
            2924588,
            10018698,
            14034728,
            16750742,
            9725885,
            12955861,
            9197131,
            12885140,
            14907330,
            16234194,
            8355711,
            13092807,
            12369186,
            14408589,
            1556175,
            10410725
          ].map(bn),
          Ta = [
            3750777,
            5395619,
            7040719,
            10264286,
            6519097,
            9216594,
            11915115,
            13556636,
            9202993,
            12426809,
            15186514,
            15190932,
            8666169,
            11356490,
            14049643,
            15177372,
            8077683,
            10834324,
            13528509,
            14589654
          ].map(bn),
          Ra = [
            3244733,
            7057110,
            10406625,
            13032431,
            15095053,
            16616764,
            16625259,
            16634018,
            3253076,
            7652470,
            10607003,
            13101504,
            7695281,
            10394312,
            12369372,
            14342891,
            6513507,
            9868950,
            12434877,
            14277081
          ].map(bn);
        function Pa(t, n) {
          var e;
          function r() {
            var r = 0,
              u = n.length;
            e = [];
            while (++r < u) e[r - 1] = o.quantile(t, r / u);
            return i;
          }
          function i(t) {
            if (!isNaN((t = +t))) return n[o.bisect(e, t)];
          }
          return (
            (i.domain = function (n) {
              return arguments.length
                ? ((t = n.map(y).filter(m).sort(v)), r())
                : t;
            }),
            (i.range = function (t) {
              return arguments.length ? ((n = t), r()) : n;
            }),
            (i.quantiles = function () {
              return e;
            }),
            (i.invertExtent = function (r) {
              return (
                (r = n.indexOf(r)),
                r < 0
                  ? [NaN, NaN]
                  : [
                      r > 0 ? e[r - 1] : t[0],
                      r < e.length ? e[r] : t[t.length - 1]
                    ]
              );
            }),
            (i.copy = function () {
              return Pa(t, n);
            }),
            r()
          );
        }
        function Fa(t, n, e) {
          var r, i;
          function o(n) {
            return e[Math.max(0, Math.min(i, Math.floor(r * (n - t))))];
          }
          function u() {
            return (r = e.length / (n - t)), (i = e.length - 1), o;
          }
          return (
            (o.domain = function (e) {
              return arguments.length
                ? ((t = +e[0]), (n = +e[e.length - 1]), u())
                : [t, n];
            }),
            (o.range = function (t) {
              return arguments.length ? ((e = t), u()) : e;
            }),
            (o.invertExtent = function (n) {
              return (
                (n = e.indexOf(n)),
                (n = n < 0 ? NaN : n / r + t),
                [n, n + 1 / r]
              );
            }),
            (o.copy = function () {
              return Fa(t, n, e);
            }),
            u()
          );
        }
        function Ua(t, n) {
          function e(e) {
            if (e <= e) return n[o.bisect(t, e)];
          }
          return (
            (e.domain = function (n) {
              return arguments.length ? ((t = n), e) : t;
            }),
            (e.range = function (t) {
              return arguments.length ? ((n = t), e) : n;
            }),
            (e.invertExtent = function (e) {
              return (e = n.indexOf(e)), [t[e - 1], t[e]];
            }),
            (e.copy = function () {
              return Ua(t, n);
            }),
            e
          );
        }
        function qa(t) {
          function n(t) {
            return +t;
          }
          return (
            (n.invert = n),
            (n.domain = n.range = function (e) {
              return arguments.length ? ((t = e.map(n)), n) : t;
            }),
            (n.ticks = function (n) {
              return xa(t, n);
            }),
            (n.tickFormat = function (n, e) {
              return wa(t, n, e);
            }),
            (n.copy = function () {
              return qa(t);
            }),
            n
          );
        }
        function za() {
          return 0;
        }
        (o.scale.quantile = function () {
          return Pa([], []);
        }),
          (o.scale.quantize = function () {
            return Fa(0, 1, [0, 1]);
          }),
          (o.scale.threshold = function () {
            return Ua([0.5], [0, 1]);
          }),
          (o.scale.identity = function () {
            return qa([0, 1]);
          }),
          (o.svg = {}),
          (o.svg.arc = function () {
            var t = Ia,
              n = Ba,
              e = za,
              r = Da,
              i = Ha,
              o = Va,
              u = $a;
            function a() {
              var a = Math.max(0, +t.apply(this, arguments)),
                l = Math.max(0, +n.apply(this, arguments)),
                s = i.apply(this, arguments) - Pt,
                f = o.apply(this, arguments) - Pt,
                h = Math.abs(f - s),
                p = s > f ? 0 : 1;
              if ((l < a && ((d = l), (l = a), (a = d)), h >= Rt))
                return c(l, p) + (a ? c(a, 1 - p) : "") + "Z";
              var d,
                g,
                v,
                y,
                m,
                b,
                x,
                w,
                M,
                _,
                S,
                j,
                O = 0,
                k = 0,
                E = [];
              if (
                ((y = (+u.apply(this, arguments) || 0) / 2) &&
                  ((v =
                    r === Da
                      ? Math.sqrt(a * a + l * l)
                      : +r.apply(this, arguments)),
                  p || (k *= -1),
                  l && (k = It((v / l) * Math.sin(y))),
                  a && (O = It((v / a) * Math.sin(y)))),
                l)
              ) {
                (m = l * Math.cos(s + k)),
                  (b = l * Math.sin(s + k)),
                  (x = l * Math.cos(f - k)),
                  (w = l * Math.sin(f - k));
                var A = Math.abs(f - s - 2 * k) <= Nt ? 0 : 1;
                if (k && (Ya(m, b, x, w) === p) ^ A) {
                  var C = (s + f) / 2;
                  (m = l * Math.cos(C)), (b = l * Math.sin(C)), (x = w = null);
                }
              } else m = b = 0;
              if (a) {
                (M = a * Math.cos(f - O)),
                  (_ = a * Math.sin(f - O)),
                  (S = a * Math.cos(s + O)),
                  (j = a * Math.sin(s + O));
                var L = Math.abs(s - f + 2 * O) <= Nt ? 0 : 1;
                if (O && (Ya(M, _, S, j) === 1 - p) ^ L) {
                  var N = (s + f) / 2;
                  (M = a * Math.cos(N)), (_ = a * Math.sin(N)), (S = j = null);
                }
              } else M = _ = 0;
              if (
                h > Ct &&
                (d = Math.min(Math.abs(l - a) / 2, +e.apply(this, arguments))) >
                  0.001
              ) {
                g = (a < l) ^ p ? 0 : 1;
                var T = d,
                  R = d;
                if (h < Nt) {
                  var P =
                      null == S
                        ? [M, _]
                        : null == x
                        ? [m, b]
                        : Ti([m, b], [S, j], [x, w], [M, _]),
                    F = m - P[0],
                    U = b - P[1],
                    q = x - P[0],
                    z = w - P[1],
                    D =
                      1 /
                      Math.sin(
                        Math.acos(
                          (F * q + U * z) /
                            (Math.sqrt(F * F + U * U) *
                              Math.sqrt(q * q + z * z))
                        ) / 2
                      ),
                    I = Math.sqrt(P[0] * P[0] + P[1] * P[1]);
                  (R = Math.min(d, (a - I) / (D - 1))),
                    (T = Math.min(d, (l - I) / (D + 1)));
                }
                if (null != x) {
                  var B = Wa(null == S ? [M, _] : [S, j], [m, b], l, T, p),
                    H = Wa([x, w], [M, _], l, T, p);
                  d === T
                    ? E.push(
                        "M",
                        B[0],
                        "A",
                        T,
                        ",",
                        T,
                        " 0 0,",
                        g,
                        " ",
                        B[1],
                        "A",
                        l,
                        ",",
                        l,
                        " 0 ",
                        (1 - p) ^ Ya(B[1][0], B[1][1], H[1][0], H[1][1]),
                        ",",
                        p,
                        " ",
                        H[1],
                        "A",
                        T,
                        ",",
                        T,
                        " 0 0,",
                        g,
                        " ",
                        H[0]
                      )
                    : E.push("M", B[0], "A", T, ",", T, " 0 1,", g, " ", H[0]);
                } else E.push("M", m, ",", b);
                if (null != S) {
                  var V = Wa([m, b], [S, j], a, -R, p),
                    $ = Wa([M, _], null == x ? [m, b] : [x, w], a, -R, p);
                  d === R
                    ? E.push(
                        "L",
                        $[0],
                        "A",
                        R,
                        ",",
                        R,
                        " 0 0,",
                        g,
                        " ",
                        $[1],
                        "A",
                        a,
                        ",",
                        a,
                        " 0 ",
                        p ^ Ya($[1][0], $[1][1], V[1][0], V[1][1]),
                        ",",
                        1 - p,
                        " ",
                        V[1],
                        "A",
                        R,
                        ",",
                        R,
                        " 0 0,",
                        g,
                        " ",
                        V[0]
                      )
                    : E.push("L", $[0], "A", R, ",", R, " 0 0,", g, " ", V[0]);
                } else E.push("L", M, ",", _);
              } else
                E.push("M", m, ",", b),
                  null != x &&
                    E.push("A", l, ",", l, " 0 ", A, ",", p, " ", x, ",", w),
                  E.push("L", M, ",", _),
                  null != S &&
                    E.push(
                      "A",
                      a,
                      ",",
                      a,
                      " 0 ",
                      L,
                      ",",
                      1 - p,
                      " ",
                      S,
                      ",",
                      j
                    );
              return E.push("Z"), E.join("");
            }
            function c(t, n) {
              return (
                "M0," +
                t +
                "A" +
                t +
                "," +
                t +
                " 0 1," +
                n +
                " 0," +
                -t +
                "A" +
                t +
                "," +
                t +
                " 0 1," +
                n +
                " 0," +
                t
              );
            }
            return (
              (a.innerRadius = function (n) {
                return arguments.length ? ((t = En(n)), a) : t;
              }),
              (a.outerRadius = function (t) {
                return arguments.length ? ((n = En(t)), a) : n;
              }),
              (a.cornerRadius = function (t) {
                return arguments.length ? ((e = En(t)), a) : e;
              }),
              (a.padRadius = function (t) {
                return arguments.length ? ((r = t == Da ? Da : En(t)), a) : r;
              }),
              (a.startAngle = function (t) {
                return arguments.length ? ((i = En(t)), a) : i;
              }),
              (a.endAngle = function (t) {
                return arguments.length ? ((o = En(t)), a) : o;
              }),
              (a.padAngle = function (t) {
                return arguments.length ? ((u = En(t)), a) : u;
              }),
              (a.centroid = function () {
                var e =
                    (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                  r =
                    (+i.apply(this, arguments) + +o.apply(this, arguments)) /
                      2 -
                    Pt;
                return [Math.cos(r) * e, Math.sin(r) * e];
              }),
              a
            );
          });
        var Da = "auto";
        function Ia(t) {
          return t.innerRadius;
        }
        function Ba(t) {
          return t.outerRadius;
        }
        function Ha(t) {
          return t.startAngle;
        }
        function Va(t) {
          return t.endAngle;
        }
        function $a(t) {
          return t && t.padAngle;
        }
        function Ya(t, n, e, r) {
          return (t - e) * n - (n - r) * t > 0 ? 0 : 1;
        }
        function Wa(t, n, e, r, i) {
          var o = t[0] - n[0],
            u = t[1] - n[1],
            a = (i ? r : -r) / Math.sqrt(o * o + u * u),
            c = a * u,
            l = -a * o,
            s = t[0] + c,
            f = t[1] + l,
            h = n[0] + c,
            p = n[1] + l,
            d = (s + h) / 2,
            g = (f + p) / 2,
            v = h - s,
            y = p - f,
            m = v * v + y * y,
            b = e - r,
            x = s * p - h * f,
            w = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * m - x * x)),
            M = (x * y - v * w) / m,
            _ = (-x * v - y * w) / m,
            S = (x * y + v * w) / m,
            j = (-x * v + y * w) / m,
            O = M - d,
            k = _ - g,
            E = S - d,
            A = j - g;
          return (
            O * O + k * k > E * E + A * A && ((M = S), (_ = j)),
            [
              [M - c, _ - l],
              [(M * e) / b, (_ * e) / b]
            ]
          );
        }
        function Za(t) {
          var n = ki,
            e = Ei,
            r = sr,
            i = Xa,
            o = i.key,
            u = 0.7;
          function a(o) {
            var a,
              c = [],
              l = [],
              s = -1,
              f = o.length,
              h = En(n),
              p = En(e);
            function d() {
              c.push("M", i(t(l), u));
            }
            while (++s < f)
              r.call(this, (a = o[s]), s)
                ? l.push([+h.call(this, a, s), +p.call(this, a, s)])
                : l.length && (d(), (l = []));
            return l.length && d(), c.length ? c.join("") : null;
          }
          return (
            (a.x = function (t) {
              return arguments.length ? ((n = t), a) : n;
            }),
            (a.y = function (t) {
              return arguments.length ? ((e = t), a) : e;
            }),
            (a.defined = function (t) {
              return arguments.length ? ((r = t), a) : r;
            }),
            (a.interpolate = function (t) {
              return arguments.length
                ? ((o =
                    "function" === typeof t
                      ? (i = t)
                      : (i = Ga.get(t) || Xa).key),
                  a)
                : o;
            }),
            (a.tension = function (t) {
              return arguments.length ? ((u = t), a) : u;
            }),
            a
          );
        }
        o.svg.line = function () {
          return Za(F);
        };
        var Ga = o.map({
          linear: Xa,
          "linear-closed": Ja,
          step: Ka,
          "step-before": Qa,
          "step-after": tc,
          basis: uc,
          "basis-open": ac,
          "basis-closed": cc,
          bundle: lc,
          cardinal: rc,
          "cardinal-open": nc,
          "cardinal-closed": ec,
          monotone: mc
        });
        function Xa(t) {
          return t.length > 1 ? t.join("L") : t + "Z";
        }
        function Ja(t) {
          return t.join("L") + "Z";
        }
        function Ka(t) {
          var n = 0,
            e = t.length,
            r = t[0],
            i = [r[0], ",", r[1]];
          while (++n < e) i.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]);
          return e > 1 && i.push("H", r[0]), i.join("");
        }
        function Qa(t) {
          var n = 0,
            e = t.length,
            r = t[0],
            i = [r[0], ",", r[1]];
          while (++n < e) i.push("V", (r = t[n])[1], "H", r[0]);
          return i.join("");
        }
        function tc(t) {
          var n = 0,
            e = t.length,
            r = t[0],
            i = [r[0], ",", r[1]];
          while (++n < e) i.push("H", (r = t[n])[0], "V", r[1]);
          return i.join("");
        }
        function nc(t, n) {
          return t.length < 4 ? Xa(t) : t[1] + ic(t.slice(1, -1), oc(t, n));
        }
        function ec(t, n) {
          return t.length < 3
            ? Ja(t)
            : t[0] +
                ic(
                  (t.push(t[0]), t),
                  oc([t[t.length - 2]].concat(t, [t[1]]), n)
                );
        }
        function rc(t, n) {
          return t.length < 3 ? Xa(t) : t[0] + ic(t, oc(t, n));
        }
        function ic(t, n) {
          if (
            n.length < 1 ||
            (t.length != n.length && t.length != n.length + 2)
          )
            return Xa(t);
          var e = t.length != n.length,
            r = "",
            i = t[0],
            o = t[1],
            u = n[0],
            a = u,
            c = 1;
          if (
            (e &&
              ((r +=
                "Q" +
                (o[0] - (2 * u[0]) / 3) +
                "," +
                (o[1] - (2 * u[1]) / 3) +
                "," +
                o[0] +
                "," +
                o[1]),
              (i = t[1]),
              (c = 2)),
            n.length > 1)
          ) {
            (a = n[1]),
              (o = t[c]),
              c++,
              (r +=
                "C" +
                (i[0] + u[0]) +
                "," +
                (i[1] + u[1]) +
                "," +
                (o[0] - a[0]) +
                "," +
                (o[1] - a[1]) +
                "," +
                o[0] +
                "," +
                o[1]);
            for (var l = 2; l < n.length; l++, c++)
              (o = t[c]),
                (a = n[l]),
                (r +=
                  "S" +
                  (o[0] - a[0]) +
                  "," +
                  (o[1] - a[1]) +
                  "," +
                  o[0] +
                  "," +
                  o[1]);
          }
          if (e) {
            var s = t[c];
            r +=
              "Q" +
              (o[0] + (2 * a[0]) / 3) +
              "," +
              (o[1] + (2 * a[1]) / 3) +
              "," +
              s[0] +
              "," +
              s[1];
          }
          return r;
        }
        function oc(t, n) {
          var e,
            r = [],
            i = (1 - n) / 2,
            o = t[0],
            u = t[1],
            a = 1,
            c = t.length;
          while (++a < c)
            (e = o),
              (o = u),
              (u = t[a]),
              r.push([i * (u[0] - e[0]), i * (u[1] - e[1])]);
          return r;
        }
        function uc(t) {
          if (t.length < 3) return Xa(t);
          var n = 1,
            e = t.length,
            r = t[0],
            i = r[0],
            o = r[1],
            u = [i, i, i, (r = t[1])[0]],
            a = [o, o, o, r[1]],
            c = [i, ",", o, "L", sc(pc, u), ",", sc(pc, a)];
          t.push(t[e - 1]);
          while (++n <= e)
            (r = t[n]),
              u.shift(),
              u.push(r[0]),
              a.shift(),
              a.push(r[1]),
              dc(c, u, a);
          return t.pop(), c.push("L", r), c.join("");
        }
        function ac(t) {
          if (t.length < 4) return Xa(t);
          var n,
            e = [],
            r = -1,
            i = t.length,
            o = [0],
            u = [0];
          while (++r < 3) (n = t[r]), o.push(n[0]), u.push(n[1]);
          e.push(sc(pc, o) + "," + sc(pc, u)), --r;
          while (++r < i)
            (n = t[r]),
              o.shift(),
              o.push(n[0]),
              u.shift(),
              u.push(n[1]),
              dc(e, o, u);
          return e.join("");
        }
        function cc(t) {
          var n,
            e,
            r = -1,
            i = t.length,
            o = i + 4,
            u = [],
            a = [];
          while (++r < 4) (e = t[r % i]), u.push(e[0]), a.push(e[1]);
          (n = [sc(pc, u), ",", sc(pc, a)]), --r;
          while (++r < o)
            (e = t[r % i]),
              u.shift(),
              u.push(e[0]),
              a.shift(),
              a.push(e[1]),
              dc(n, u, a);
          return n.join("");
        }
        function lc(t, n) {
          var e = t.length - 1;
          if (e) {
            var r,
              i,
              o = t[0][0],
              u = t[0][1],
              a = t[e][0] - o,
              c = t[e][1] - u,
              l = -1;
            while (++l <= e)
              (r = t[l]),
                (i = l / e),
                (r[0] = n * r[0] + (1 - n) * (o + i * a)),
                (r[1] = n * r[1] + (1 - n) * (u + i * c));
          }
          return uc(t);
        }
        function sc(t, n) {
          return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
        }
        Ga.forEach(function (t, n) {
          (n.key = t), (n.closed = /-closed$/.test(t));
        });
        var fc = [0, 2 / 3, 1 / 3, 0],
          hc = [0, 1 / 3, 2 / 3, 0],
          pc = [0, 1 / 6, 2 / 3, 1 / 6];
        function dc(t, n, e) {
          t.push(
            "C",
            sc(fc, n),
            ",",
            sc(fc, e),
            ",",
            sc(hc, n),
            ",",
            sc(hc, e),
            ",",
            sc(pc, n),
            ",",
            sc(pc, e)
          );
        }
        function gc(t, n) {
          return (n[1] - t[1]) / (n[0] - t[0]);
        }
        function vc(t) {
          var n = 0,
            e = t.length - 1,
            r = [],
            i = t[0],
            o = t[1],
            u = (r[0] = gc(i, o));
          while (++n < e) r[n] = (u + (u = gc((i = o), (o = t[n + 1])))) / 2;
          return (r[n] = u), r;
        }
        function yc(t) {
          var n,
            e,
            r,
            i,
            o = [],
            u = vc(t),
            a = -1,
            c = t.length - 1;
          while (++a < c)
            (n = gc(t[a], t[a + 1])),
              M(n) < Ct
                ? (u[a] = u[a + 1] = 0)
                : ((e = u[a] / n),
                  (r = u[a + 1] / n),
                  (i = e * e + r * r),
                  i > 9 &&
                    ((i = (3 * n) / Math.sqrt(i)),
                    (u[a] = i * e),
                    (u[a + 1] = i * r)));
          a = -1;
          while (++a <= c)
            (i =
              (t[Math.min(c, a + 1)][0] - t[Math.max(0, a - 1)][0]) /
              (6 * (1 + u[a] * u[a]))),
              o.push([i || 0, u[a] * i || 0]);
          return o;
        }
        function mc(t) {
          return t.length < 3 ? Xa(t) : t[0] + ic(t, yc(t));
        }
        function bc(t) {
          var n,
            e,
            r,
            i = -1,
            o = t.length;
          while (++i < o)
            (n = t[i]),
              (e = n[0]),
              (r = n[1] - Pt),
              (n[0] = e * Math.cos(r)),
              (n[1] = e * Math.sin(r));
          return t;
        }
        function xc(t) {
          var n = ki,
            e = ki,
            r = 0,
            i = Ei,
            o = sr,
            u = Xa,
            a = u.key,
            c = u,
            l = "L",
            s = 0.7;
          function f(a) {
            var f,
              h,
              p,
              d = [],
              g = [],
              v = [],
              y = -1,
              m = a.length,
              b = En(n),
              x = En(r),
              w =
                n === e
                  ? function () {
                      return h;
                    }
                  : En(e),
              M =
                r === i
                  ? function () {
                      return p;
                    }
                  : En(i);
            function _() {
              d.push("M", u(t(v), s), l, c(t(g.reverse()), s), "Z");
            }
            while (++y < m)
              o.call(this, (f = a[y]), y)
                ? (g.push([
                    (h = +b.call(this, f, y)),
                    (p = +x.call(this, f, y))
                  ]),
                  v.push([+w.call(this, f, y), +M.call(this, f, y)]))
                : g.length && (_(), (g = []), (v = []));
            return g.length && _(), d.length ? d.join("") : null;
          }
          return (
            (f.x = function (t) {
              return arguments.length ? ((n = e = t), f) : e;
            }),
            (f.x0 = function (t) {
              return arguments.length ? ((n = t), f) : n;
            }),
            (f.x1 = function (t) {
              return arguments.length ? ((e = t), f) : e;
            }),
            (f.y = function (t) {
              return arguments.length ? ((r = i = t), f) : i;
            }),
            (f.y0 = function (t) {
              return arguments.length ? ((r = t), f) : r;
            }),
            (f.y1 = function (t) {
              return arguments.length ? ((i = t), f) : i;
            }),
            (f.defined = function (t) {
              return arguments.length ? ((o = t), f) : o;
            }),
            (f.interpolate = function (t) {
              return arguments.length
                ? ((a =
                    "function" === typeof t
                      ? (u = t)
                      : (u = Ga.get(t) || Xa).key),
                  (c = u.reverse || u),
                  (l = u.closed ? "M" : "L"),
                  f)
                : a;
            }),
            (f.tension = function (t) {
              return arguments.length ? ((s = t), f) : s;
            }),
            f
          );
        }
        function wc(t) {
          return t.radius;
        }
        function Mc(t) {
          return [t.x, t.y];
        }
        function _c(t) {
          return function () {
            var n = t.apply(this, arguments),
              e = n[0],
              r = n[1] - Pt;
            return [e * Math.cos(r), e * Math.sin(r)];
          };
        }
        function Sc() {
          return 64;
        }
        function jc() {
          return "circle";
        }
        function Oc(t) {
          var n = Math.sqrt(t / Nt);
          return (
            "M0," +
            n +
            "A" +
            n +
            "," +
            n +
            " 0 1,1 0," +
            -n +
            "A" +
            n +
            "," +
            n +
            " 0 1,1 0," +
            n +
            "Z"
          );
        }
        (o.svg.line.radial = function () {
          var t = Za(bc);
          return (t.radius = t.x), delete t.x, (t.angle = t.y), delete t.y, t;
        }),
          (Qa.reverse = tc),
          (tc.reverse = Qa),
          (o.svg.area = function () {
            return xc(F);
          }),
          (o.svg.area.radial = function () {
            var t = xc(bc);
            return (
              (t.radius = t.x),
              delete t.x,
              (t.innerRadius = t.x0),
              delete t.x0,
              (t.outerRadius = t.x1),
              delete t.x1,
              (t.angle = t.y),
              delete t.y,
              (t.startAngle = t.y0),
              delete t.y0,
              (t.endAngle = t.y1),
              delete t.y1,
              t
            );
          }),
          (o.svg.chord = function () {
            var t = fi,
              n = hi,
              e = wc,
              r = Ha,
              i = Va;
            function o(e, r) {
              var i = u(this, t, e, r),
                o = u(this, n, e, r);
              return (
                "M" +
                i.p0 +
                c(i.r, i.p1, i.a1 - i.a0) +
                (a(i, o)
                  ? l(i.r, i.p1, i.r, i.p0)
                  : l(i.r, i.p1, o.r, o.p0) +
                    c(o.r, o.p1, o.a1 - o.a0) +
                    l(o.r, o.p1, i.r, i.p0)) +
                "Z"
              );
            }
            function u(t, n, o, u) {
              var a = n.call(t, o, u),
                c = e.call(t, a, u),
                l = r.call(t, a, u) - Pt,
                s = i.call(t, a, u) - Pt;
              return {
                r: c,
                a0: l,
                a1: s,
                p0: [c * Math.cos(l), c * Math.sin(l)],
                p1: [c * Math.cos(s), c * Math.sin(s)]
              };
            }
            function a(t, n) {
              return t.a0 == n.a0 && t.a1 == n.a1;
            }
            function c(t, n, e) {
              return "A" + t + "," + t + " 0 " + +(e > Nt) + ",1 " + n;
            }
            function l(t, n, e, r) {
              return "Q 0,0 " + r;
            }
            return (
              (o.radius = function (t) {
                return arguments.length ? ((e = En(t)), o) : e;
              }),
              (o.source = function (n) {
                return arguments.length ? ((t = En(n)), o) : t;
              }),
              (o.target = function (t) {
                return arguments.length ? ((n = En(t)), o) : n;
              }),
              (o.startAngle = function (t) {
                return arguments.length ? ((r = En(t)), o) : r;
              }),
              (o.endAngle = function (t) {
                return arguments.length ? ((i = En(t)), o) : i;
              }),
              o
            );
          }),
          (o.svg.diagonal = function () {
            var t = fi,
              n = hi,
              e = Mc;
            function r(r, i) {
              var o = t.call(this, r, i),
                u = n.call(this, r, i),
                a = (o.y + u.y) / 2,
                c = [
                  o,
                  {
                    x: o.x,
                    y: a
                  },
                  {
                    x: u.x,
                    y: a
                  },
                  u
                ];
              return (
                (c = c.map(e)),
                "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
              );
            }
            return (
              (r.source = function (n) {
                return arguments.length ? ((t = En(n)), r) : t;
              }),
              (r.target = function (t) {
                return arguments.length ? ((n = En(t)), r) : n;
              }),
              (r.projection = function (t) {
                return arguments.length ? ((e = t), r) : e;
              }),
              r
            );
          }),
          (o.svg.diagonal.radial = function () {
            var t = o.svg.diagonal(),
              n = Mc,
              e = t.projection;
            return (
              (t.projection = function (t) {
                return arguments.length ? e(_c((n = t))) : n;
              }),
              t
            );
          }),
          (o.svg.symbol = function () {
            var t = jc,
              n = Sc;
            function e(e, r) {
              return (kc.get(t.call(this, e, r)) || Oc)(n.call(this, e, r));
            }
            return (
              (e.type = function (n) {
                return arguments.length ? ((t = En(n)), e) : t;
              }),
              (e.size = function (t) {
                return arguments.length ? ((n = En(t)), e) : n;
              }),
              e
            );
          });
        var kc = o.map({
          circle: Oc,
          cross: function (t) {
            var n = Math.sqrt(t / 5) / 2;
            return (
              "M" +
              -3 * n +
              "," +
              -n +
              "H" +
              -n +
              "V" +
              -3 * n +
              "H" +
              n +
              "V" +
              -n +
              "H" +
              3 * n +
              "V" +
              n +
              "H" +
              n +
              "V" +
              3 * n +
              "H" +
              -n +
              "V" +
              n +
              "H" +
              -3 * n +
              "Z"
            );
          },
          diamond: function (t) {
            var n = Math.sqrt(t / (2 * Ac)),
              e = n * Ac;
            return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z";
          },
          square: function (t) {
            var n = Math.sqrt(t) / 2;
            return (
              "M" +
              -n +
              "," +
              -n +
              "L" +
              n +
              "," +
              -n +
              " " +
              n +
              "," +
              n +
              " " +
              -n +
              "," +
              n +
              "Z"
            );
          },
          "triangle-down": function (t) {
            var n = Math.sqrt(t / Ec),
              e = (n * Ec) / 2;
            return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z";
          },
          "triangle-up": function (t) {
            var n = Math.sqrt(t / Ec),
              e = (n * Ec) / 2;
            return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z";
          }
        });
        o.svg.symbolTypes = kc.keys();
        var Ec = Math.sqrt(3),
          Ac = Math.tan(30 * Ft);
        (K.transition = function (t) {
          for (
            var n,
              e,
              r = Tc || ++Fc,
              i = zc(t),
              o = [],
              u = Rc || {
                time: Date.now(),
                ease: zo,
                delay: 0,
                duration: 250
              },
              a = -1,
              c = this.length;
            ++a < c;

          ) {
            o.push((n = []));
            for (var l = this[a], s = -1, f = l.length; ++s < f; )
              (e = l[s]) && Dc(e, s, i, r, u), n.push(e);
          }
          return Nc(o, i, r);
        }),
          (K.interrupt = function (t) {
            return this.each(null == t ? Cc : Lc(zc(t)));
          });
        var Cc = Lc(zc());
        function Lc(t) {
          return function () {
            var n, e, r;
            (n = this[t]) &&
              (r = n[(e = n.active)]) &&
              ((r.timer.c = null),
              (r.timer.t = NaN),
              --n.count ? delete n[e] : delete this[t],
              (n.active += 0.5),
              r.event && r.event.interrupt.call(this, this.__data__, r.index));
          };
        }
        function Nc(t, n, e) {
          return W(t, Pc), (t.namespace = n), (t.id = e), t;
        }
        var Tc,
          Rc,
          Pc = [],
          Fc = 0;
        function Uc(t, n, e, r) {
          var i = t.id,
            o = t.namespace;
          return vt(
            t,
            "function" === typeof e
              ? function (t, u, a) {
                  t[o][i].tween.set(n, r(e.call(t, t.__data__, u, a)));
                }
              : ((e = r(e)),
                function (t) {
                  t[o][i].tween.set(n, e);
                })
          );
        }
        function qc(t) {
          return (
            null == t && (t = ""),
            function () {
              this.textContent = t;
            }
          );
        }
        function zc(t) {
          return null == t ? "__transition__" : "__transition_" + t + "__";
        }
        function Dc(t, n, e, r, i) {
          var o,
            u,
            a,
            c,
            l,
            s =
              t[e] ||
              (t[e] = {
                active: 0,
                count: 0
              }),
            f = s[r];
          function h(t) {
            var n = f.delay;
            if (((u.t = n + o), n <= t)) return p(t - n);
            u.c = p;
          }
          function p(e) {
            var i = s.active,
              h = s[i];
            for (var p in (h &&
              ((h.timer.c = null),
              (h.timer.t = NaN),
              --s.count,
              delete s[i],
              h.event && h.event.interrupt.call(t, t.__data__, h.index)),
            s))
              if (+p < r) {
                var g = s[p];
                (g.timer.c = null), (g.timer.t = NaN), --s.count, delete s[p];
              }
            (u.c = d),
              qn(
                function () {
                  return u.c && d(e || 1) && ((u.c = null), (u.t = NaN)), 1;
                },
                0,
                o
              ),
              (s.active = r),
              f.event && f.event.start.call(t, t.__data__, n),
              (l = []),
              f.tween.forEach(function (e, r) {
                (r = r.call(t, t.__data__, n)) && l.push(r);
              }),
              (c = f.ease),
              (a = f.duration);
          }
          function d(i) {
            var o = i / a,
              u = c(o),
              h = l.length;
            while (h > 0) l[--h].call(t, u);
            if (o >= 1)
              return (
                f.event && f.event.end.call(t, t.__data__, n),
                --s.count ? delete s[r] : delete t[e],
                1
              );
          }
          f ||
            ((o = i.time),
            (u = qn(h, 0, o)),
            (f = s[r] = {
              tween: new j(),
              time: o,
              timer: u,
              delay: i.delay,
              duration: i.duration,
              ease: i.ease,
              index: n
            }),
            (i = null),
            ++s.count);
        }
        (Pc.call = K.call),
          (Pc.empty = K.empty),
          (Pc.node = K.node),
          (Pc.size = K.size),
          (o.transition = function (t, n) {
            return t && t.transition
              ? Tc
                ? t.transition(n)
                : t
              : o.selection().transition(t);
          }),
          (o.transition.prototype = Pc),
          (Pc.select = function (t) {
            var n,
              e,
              r,
              i = this.id,
              o = this.namespace,
              u = [];
            t = Q(t);
            for (var a = -1, c = this.length; ++a < c; ) {
              u.push((n = []));
              for (var l = this[a], s = -1, f = l.length; ++s < f; )
                (r = l[s]) && (e = t.call(r, r.__data__, s, a))
                  ? ("__data__" in r && (e.__data__ = r.__data__),
                    Dc(e, s, o, i, r[o][i]),
                    n.push(e))
                  : n.push(null);
            }
            return Nc(u, o, i);
          }),
          (Pc.selectAll = function (t) {
            var n,
              e,
              r,
              i,
              o,
              u = this.id,
              a = this.namespace,
              c = [];
            t = tt(t);
            for (var l = -1, s = this.length; ++l < s; )
              for (var f = this[l], h = -1, p = f.length; ++h < p; )
                if ((r = f[h])) {
                  (o = r[a][u]),
                    (e = t.call(r, r.__data__, h, l)),
                    c.push((n = []));
                  for (var d = -1, g = e.length; ++d < g; )
                    (i = e[d]) && Dc(i, d, a, u, o), n.push(i);
                }
            return Nc(c, a, u);
          }),
          (Pc.filter = function (t) {
            var n,
              e,
              r = [];
            "function" !== typeof t && (t = dt(t));
            for (var i = 0, o = this.length; i < o; i++) {
              r.push((n = []));
              for (var u = this[i], a = 0, c = u.length; a < c; a++)
                (e = u[a]) && t.call(e, e.__data__, a, i) && n.push(e);
            }
            return Nc(r, this.namespace, this.id);
          }),
          (Pc.tween = function (t, n) {
            var e = this.id,
              r = this.namespace;
            return arguments.length < 2
              ? this.node()[r][e].tween.get(t)
              : vt(
                  this,
                  null == n
                    ? function (n) {
                        n[r][e].tween.remove(t);
                      }
                    : function (i) {
                        i[r][e].tween.set(t, n);
                      }
                );
          }),
          (Pc.attr = function (t, n) {
            if (arguments.length < 2) {
              for (n in t) this.attr(n, t[n]);
              return this;
            }
            var e = "transform" == t ? au : Ao,
              r = o.ns.qualify(t);
            function i() {
              this.removeAttribute(r);
            }
            function u() {
              this.removeAttributeNS(r.space, r.local);
            }
            function a(t) {
              return null == t
                ? i
                : ((t += ""),
                  function () {
                    var n,
                      i = this.getAttribute(r);
                    return (
                      i !== t &&
                      ((n = e(i, t)),
                      function (t) {
                        this.setAttribute(r, n(t));
                      })
                    );
                  });
            }
            function c(t) {
              return null == t
                ? u
                : ((t += ""),
                  function () {
                    var n,
                      i = this.getAttributeNS(r.space, r.local);
                    return (
                      i !== t &&
                      ((n = e(i, t)),
                      function (t) {
                        this.setAttributeNS(r.space, r.local, n(t));
                      })
                    );
                  });
            }
            return Uc(this, "attr." + t, n, r.local ? c : a);
          }),
          (Pc.attrTween = function (t, n) {
            var e = o.ns.qualify(t);
            function r(t, r) {
              var i = n.call(this, t, r, this.getAttribute(e));
              return (
                i &&
                function (t) {
                  this.setAttribute(e, i(t));
                }
              );
            }
            function i(t, r) {
              var i = n.call(this, t, r, this.getAttributeNS(e.space, e.local));
              return (
                i &&
                function (t) {
                  this.setAttributeNS(e.space, e.local, i(t));
                }
              );
            }
            return this.tween("attr." + t, e.local ? i : r);
          }),
          (Pc.style = function (t, n, e) {
            var r = arguments.length;
            if (r < 3) {
              if ("string" !== typeof t) {
                for (e in (r < 2 && (n = ""), t)) this.style(e, t[e], n);
                return this;
              }
              e = "";
            }
            function i() {
              this.style.removeProperty(t);
            }
            function o(n) {
              return null == n
                ? i
                : ((n += ""),
                  function () {
                    var r,
                      i = s(this)
                        .getComputedStyle(this, null)
                        .getPropertyValue(t);
                    return (
                      i !== n &&
                      ((r = Ao(i, n)),
                      function (n) {
                        this.style.setProperty(t, r(n), e);
                      })
                    );
                  });
            }
            return Uc(this, "style." + t, n, o);
          }),
          (Pc.styleTween = function (t, n, e) {
            function r(r, i) {
              var o = n.call(
                this,
                r,
                i,
                s(this).getComputedStyle(this, null).getPropertyValue(t)
              );
              return (
                o &&
                function (n) {
                  this.style.setProperty(t, o(n), e);
                }
              );
            }
            return (
              arguments.length < 3 && (e = ""), this.tween("style." + t, r)
            );
          }),
          (Pc.text = function (t) {
            return Uc(this, "text", t, qc);
          }),
          (Pc.remove = function () {
            var t = this.namespace;
            return this.each("end.transition", function () {
              var n;
              this[t].count < 2 && (n = this.parentNode) && n.removeChild(this);
            });
          }),
          (Pc.ease = function (t) {
            var n = this.id,
              e = this.namespace;
            return arguments.length < 1
              ? this.node()[e][n].ease
              : ("function" !== typeof t && (t = o.ease.apply(o, arguments)),
                vt(this, function (r) {
                  r[e][n].ease = t;
                }));
          }),
          (Pc.delay = function (t) {
            var n = this.id,
              e = this.namespace;
            return arguments.length < 1
              ? this.node()[e][n].delay
              : vt(
                  this,
                  "function" === typeof t
                    ? function (r, i, o) {
                        r[e][n].delay = +t.call(r, r.__data__, i, o);
                      }
                    : ((t = +t),
                      function (r) {
                        r[e][n].delay = t;
                      })
                );
          }),
          (Pc.duration = function (t) {
            var n = this.id,
              e = this.namespace;
            return arguments.length < 1
              ? this.node()[e][n].duration
              : vt(
                  this,
                  "function" === typeof t
                    ? function (r, i, o) {
                        r[e][n].duration = Math.max(
                          1,
                          t.call(r, r.__data__, i, o)
                        );
                      }
                    : ((t = Math.max(1, t)),
                      function (r) {
                        r[e][n].duration = t;
                      })
                );
          }),
          (Pc.each = function (t, n) {
            var e = this.id,
              r = this.namespace;
            if (arguments.length < 2) {
              var i = Rc,
                u = Tc;
              try {
                (Tc = e),
                  vt(this, function (n, i, o) {
                    (Rc = n[r][e]), t.call(n, n.__data__, i, o);
                  });
              } finally {
                (Rc = i), (Tc = u);
              }
            } else
              vt(this, function (i) {
                var u = i[r][e];
                (
                  u.event || (u.event = o.dispatch("start", "end", "interrupt"))
                ).on(t, n);
              });
            return this;
          }),
          (Pc.transition = function () {
            for (
              var t,
                n,
                e,
                r = this.id,
                i = ++Fc,
                o = this.namespace,
                u = [],
                a = 0,
                c = this.length;
              a < c;
              a++
            ) {
              u.push((t = []));
              for (var l = this[a], s = 0, f = l.length; s < f; s++)
                (n = l[s]) &&
                  ((e = n[o][r]),
                  Dc(n, s, o, i, {
                    time: e.time,
                    ease: e.ease,
                    delay: e.delay + e.duration,
                    duration: e.duration
                  })),
                  t.push(n);
            }
            return Nc(u, o, i);
          }),
          (o.svg.axis = function () {
            var t,
              n = o.scale.linear(),
              e = Ic,
              r = 6,
              i = 6,
              u = 3,
              c = [10],
              l = null;
            function s(a) {
              a.each(function () {
                var a,
                  s = o.select(this),
                  f = this.__chart__ || n,
                  h = (this.__chart__ = n.copy()),
                  p =
                    null == l
                      ? h.ticks
                        ? h.ticks.apply(h, c)
                        : h.domain()
                      : l,
                  d =
                    null == t
                      ? h.tickFormat
                        ? h.tickFormat.apply(h, c)
                        : F
                      : t,
                  g = s.selectAll(".tick").data(p, h),
                  v = g
                    .enter()
                    .insert("g", ".domain")
                    .attr("class", "tick")
                    .style("opacity", Ct),
                  y = o.transition(g.exit()).style("opacity", Ct).remove(),
                  m = o.transition(g.order()).style("opacity", 1),
                  b = Math.max(r, 0) + u,
                  x = sa(h),
                  w = s.selectAll(".domain").data([0]),
                  M =
                    (w.enter().append("path").attr("class", "domain"),
                    o.transition(w));
                v.append("line"), v.append("text");
                var _,
                  S,
                  j,
                  O,
                  k = v.select("line"),
                  E = m.select("line"),
                  A = g.select("text").text(d),
                  C = v.select("text"),
                  L = m.select("text"),
                  N = "top" === e || "left" === e ? -1 : 1;
                if (
                  ("bottom" === e || "top" === e
                    ? ((a = Hc),
                      (_ = "x"),
                      (j = "y"),
                      (S = "x2"),
                      (O = "y2"),
                      A.attr("dy", N < 0 ? "0em" : ".71em").style(
                        "text-anchor",
                        "middle"
                      ),
                      M.attr(
                        "d",
                        "M" + x[0] + "," + N * i + "V0H" + x[1] + "V" + N * i
                      ))
                    : ((a = Vc),
                      (_ = "y"),
                      (j = "x"),
                      (S = "y2"),
                      (O = "x2"),
                      A.attr("dy", ".32em").style(
                        "text-anchor",
                        N < 0 ? "end" : "start"
                      ),
                      M.attr(
                        "d",
                        "M" + N * i + "," + x[0] + "H0V" + x[1] + "H" + N * i
                      )),
                  k.attr(O, N * r),
                  C.attr(j, N * b),
                  E.attr(S, 0).attr(O, N * r),
                  L.attr(_, 0).attr(j, N * b),
                  h.rangeBand)
                ) {
                  var T = h,
                    R = T.rangeBand() / 2;
                  f = h = function (t) {
                    return T(t) + R;
                  };
                } else f.rangeBand ? (f = h) : y.call(a, h, f);
                v.call(a, f, h), m.call(a, h, h);
              });
            }
            return (
              (s.scale = function (t) {
                return arguments.length ? ((n = t), s) : n;
              }),
              (s.orient = function (t) {
                return arguments.length ? ((e = t in Bc ? t + "" : Ic), s) : e;
              }),
              (s.ticks = function () {
                return arguments.length ? ((c = a(arguments)), s) : c;
              }),
              (s.tickValues = function (t) {
                return arguments.length ? ((l = t), s) : l;
              }),
              (s.tickFormat = function (n) {
                return arguments.length ? ((t = n), s) : t;
              }),
              (s.tickSize = function (t) {
                var n = arguments.length;
                return n ? ((r = +t), (i = +arguments[n - 1]), s) : r;
              }),
              (s.innerTickSize = function (t) {
                return arguments.length ? ((r = +t), s) : r;
              }),
              (s.outerTickSize = function (t) {
                return arguments.length ? ((i = +t), s) : i;
              }),
              (s.tickPadding = function (t) {
                return arguments.length ? ((u = +t), s) : u;
              }),
              (s.tickSubdivide = function () {
                return arguments.length && s;
              }),
              s
            );
          });
        var Ic = "bottom",
          Bc = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          };
        function Hc(t, n, e) {
          t.attr("transform", function (t) {
            var r = n(t);
            return "translate(" + (isFinite(r) ? r : e(t)) + ",0)";
          });
        }
        function Vc(t, n, e) {
          t.attr("transform", function (t) {
            var r = n(t);
            return "translate(0," + (isFinite(r) ? r : e(t)) + ")";
          });
        }
        o.svg.brush = function () {
          var t,
            n,
            e = $(h, "brushstart", "brush", "brushend"),
            r = null,
            i = null,
            u = [0, 0],
            a = [0, 0],
            c = !0,
            l = !0,
            f = Yc[0];
          function h(t) {
            t.each(function () {
              var t = o
                  .select(this)
                  .style("pointer-events", "all")
                  .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                  .on("mousedown.brush", v)
                  .on("touchstart.brush", v),
                n = t.selectAll(".background").data([0]);
              n
                .enter()
                .append("rect")
                .attr("class", "background")
                .style("visibility", "hidden")
                .style("cursor", "crosshair"),
                t
                  .selectAll(".extent")
                  .data([0])
                  .enter()
                  .append("rect")
                  .attr("class", "extent")
                  .style("cursor", "move");
              var e = t.selectAll(".resize").data(f, F);
              e.exit().remove(),
                e
                  .enter()
                  .append("g")
                  .attr("class", function (t) {
                    return "resize " + t;
                  })
                  .style("cursor", function (t) {
                    return $c[t];
                  })
                  .append("rect")
                  .attr("x", function (t) {
                    return /[ew]$/.test(t) ? -3 : null;
                  })
                  .attr("y", function (t) {
                    return /^[ns]/.test(t) ? -3 : null;
                  })
                  .attr("width", 6)
                  .attr("height", 6)
                  .style("visibility", "hidden"),
                e.style("display", h.empty() ? "none" : null);
              var u,
                a = o.transition(t),
                c = o.transition(n);
              r &&
                ((u = sa(r)),
                c.attr("x", u[0]).attr("width", u[1] - u[0]),
                d(a)),
                i &&
                  ((u = sa(i)),
                  c.attr("y", u[0]).attr("height", u[1] - u[0]),
                  g(a)),
                p(a);
            });
          }
          function p(t) {
            t.selectAll(".resize").attr("transform", function (t) {
              return (
                "translate(" + u[+/e$/.test(t)] + "," + a[+/^s/.test(t)] + ")"
              );
            });
          }
          function d(t) {
            t.select(".extent").attr("x", u[0]),
              t.selectAll(".extent,.n>rect,.s>rect").attr("width", u[1] - u[0]);
          }
          function g(t) {
            t.select(".extent").attr("y", a[0]),
              t
                .selectAll(".extent,.e>rect,.w>rect")
                .attr("height", a[1] - a[0]);
          }
          function v() {
            var f,
              v,
              y = this,
              m = o.select(o.event.target),
              b = e.of(y, arguments),
              x = o.select(y),
              w = m.datum(),
              M = !/^(n|s)$/.test(w) && r,
              _ = !/^(e|w)$/.test(w) && i,
              S = m.classed("extent"),
              j = Ot(y),
              O = o.mouse(y),
              k = o.select(s(y)).on("keydown.brush", C).on("keyup.brush", L);
            if (
              (o.event.changedTouches
                ? k.on("touchmove.brush", N).on("touchend.brush", R)
                : k.on("mousemove.brush", N).on("mouseup.brush", R),
              x.interrupt().selectAll("*").interrupt(),
              S)
            )
              (O[0] = u[0] - O[0]), (O[1] = a[0] - O[1]);
            else if (w) {
              var E = +/w$/.test(w),
                A = +/^n/.test(w);
              (v = [u[1 - E] - O[0], a[1 - A] - O[1]]),
                (O[0] = u[E]),
                (O[1] = a[A]);
            } else o.event.altKey && (f = O.slice());
            function C() {
              32 == o.event.keyCode &&
                (S || ((f = null), (O[0] -= u[1]), (O[1] -= a[1]), (S = 2)),
                H());
            }
            function L() {
              32 == o.event.keyCode &&
                2 == S &&
                ((O[0] += u[1]), (O[1] += a[1]), (S = 0), H());
            }
            function N() {
              var t = o.mouse(y),
                n = !1;
              v && ((t[0] += v[0]), (t[1] += v[1])),
                S ||
                  (o.event.altKey
                    ? (f || (f = [(u[0] + u[1]) / 2, (a[0] + a[1]) / 2]),
                      (O[0] = u[+(t[0] < f[0])]),
                      (O[1] = a[+(t[1] < f[1])]))
                    : (f = null)),
                M && T(t, r, 0) && (d(x), (n = !0)),
                _ && T(t, i, 1) && (g(x), (n = !0)),
                n &&
                  (p(x),
                  b({
                    type: "brush",
                    mode: S ? "move" : "resize"
                  }));
            }
            function T(e, r, i) {
              var o,
                s,
                h = sa(r),
                p = h[0],
                d = h[1],
                g = O[i],
                v = i ? a : u,
                y = v[1] - v[0];
              if (
                (S && ((p -= g), (d -= y + g)),
                (o = (i ? l : c) ? Math.max(p, Math.min(d, e[i])) : e[i]),
                S
                  ? (s = (o += g) + y)
                  : (f && (g = Math.max(p, Math.min(d, 2 * f[i] - o))),
                    g < o ? ((s = o), (o = g)) : (s = g)),
                v[0] != o || v[1] != s)
              )
                return i ? (n = null) : (t = null), (v[0] = o), (v[1] = s), !0;
            }
            function R() {
              N(),
                x
                  .style("pointer-events", "all")
                  .selectAll(".resize")
                  .style("display", h.empty() ? "none" : null),
                o.select("body").style("cursor", null),
                k
                  .on("mousemove.brush", null)
                  .on("mouseup.brush", null)
                  .on("touchmove.brush", null)
                  .on("touchend.brush", null)
                  .on("keydown.brush", null)
                  .on("keyup.brush", null),
                j(),
                b({
                  type: "brushend"
                });
            }
            x
              .style("pointer-events", "none")
              .selectAll(".resize")
              .style("display", null),
              o.select("body").style("cursor", m.style("cursor")),
              b({
                type: "brushstart"
              }),
              N();
          }
          return (
            (h.event = function (r) {
              r.each(function () {
                var r = e.of(this, arguments),
                  i = {
                    x: u,
                    y: a,
                    i: t,
                    j: n
                  },
                  c = this.__chart__ || i;
                (this.__chart__ = i),
                  Tc
                    ? o
                        .select(this)
                        .transition()
                        .each("start.brush", function () {
                          (t = c.i),
                            (n = c.j),
                            (u = c.x),
                            (a = c.y),
                            r({
                              type: "brushstart"
                            });
                        })
                        .tween("brush:brush", function () {
                          var e = Co(u, i.x),
                            o = Co(a, i.y);
                          return (
                            (t = n = null),
                            function (t) {
                              (u = i.x = e(t)),
                                (a = i.y = o(t)),
                                r({
                                  type: "brush",
                                  mode: "resize"
                                });
                            }
                          );
                        })
                        .each("end.brush", function () {
                          (t = i.i),
                            (n = i.j),
                            r({
                              type: "brush",
                              mode: "resize"
                            }),
                            r({
                              type: "brushend"
                            });
                        })
                    : (r({
                        type: "brushstart"
                      }),
                      r({
                        type: "brush",
                        mode: "resize"
                      }),
                      r({
                        type: "brushend"
                      }));
              });
            }),
            (h.x = function (t) {
              return arguments.length
                ? ((r = t), (f = Yc[(!r << 1) | !i]), h)
                : r;
            }),
            (h.y = function (t) {
              return arguments.length
                ? ((i = t), (f = Yc[(!r << 1) | !i]), h)
                : i;
            }),
            (h.clamp = function (t) {
              return arguments.length
                ? (r && i
                    ? ((c = !!t[0]), (l = !!t[1]))
                    : r
                    ? (c = !!t)
                    : i && (l = !!t),
                  h)
                : r && i
                ? [c, l]
                : r
                ? c
                : i
                ? l
                : null;
            }),
            (h.extent = function (e) {
              var o, c, l, s, f;
              return arguments.length
                ? (r &&
                    ((o = e[0]),
                    (c = e[1]),
                    i && ((o = o[0]), (c = c[0])),
                    (t = [o, c]),
                    r.invert && ((o = r(o)), (c = r(c))),
                    c < o && ((f = o), (o = c), (c = f)),
                    (o == u[0] && c == u[1]) || (u = [o, c])),
                  i &&
                    ((l = e[0]),
                    (s = e[1]),
                    r && ((l = l[1]), (s = s[1])),
                    (n = [l, s]),
                    i.invert && ((l = i(l)), (s = i(s))),
                    s < l && ((f = l), (l = s), (s = f)),
                    (l == a[0] && s == a[1]) || (a = [l, s])),
                  h)
                : (r &&
                    (t
                      ? ((o = t[0]), (c = t[1]))
                      : ((o = u[0]),
                        (c = u[1]),
                        r.invert && ((o = r.invert(o)), (c = r.invert(c))),
                        c < o && ((f = o), (o = c), (c = f)))),
                  i &&
                    (n
                      ? ((l = n[0]), (s = n[1]))
                      : ((l = a[0]),
                        (s = a[1]),
                        i.invert && ((l = i.invert(l)), (s = i.invert(s))),
                        s < l && ((f = l), (l = s), (s = f)))),
                  r && i
                    ? [
                        [o, l],
                        [c, s]
                      ]
                    : r
                    ? [o, c]
                    : i && [l, s]);
            }),
            (h.clear = function () {
              return (
                h.empty() || ((u = [0, 0]), (a = [0, 0]), (t = n = null)), h
              );
            }),
            (h.empty = function () {
              return (!!r && u[0] == u[1]) || (!!i && a[0] == a[1]);
            }),
            o.rebind(h, e, "on")
          );
        };
        var $c = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
          },
          Yc = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
          ],
          Wc = (Gn.format = je.timeFormat),
          Zc = Wc.utc,
          Gc = Zc("%Y-%m-%dT%H:%M:%S.%LZ");
        function Xc(t) {
          return t.toISOString();
        }
        function Jc(t, n, e) {
          function r(n) {
            return t(n);
          }
          function i(t, e) {
            var r = t[1] - t[0],
              i = r / e,
              u = o.bisect(Qc, i);
            return u == Qc.length
              ? [
                  n.year,
                  ba(
                    t.map(function (t) {
                      return t / 31536e6;
                    }),
                    e
                  )[2]
                ]
              : u
              ? n[i / Qc[u - 1] < Qc[u] / i ? u - 1 : u]
              : [el, ba(t, e)[2]];
          }
          return (
            (r.invert = function (n) {
              return Kc(t.invert(n));
            }),
            (r.domain = function (n) {
              return arguments.length ? (t.domain(n), r) : t.domain().map(Kc);
            }),
            (r.nice = function (t, n) {
              var e = r.domain(),
                o = la(e),
                u = null == t ? i(o, 10) : "number" === typeof t && i(o, t);
              function a(e) {
                return !isNaN(e) && !t.range(e, Kc(+e + 1), n).length;
              }
              return (
                u && ((t = u[0]), (n = u[1])),
                r.domain(
                  ha(
                    e,
                    n > 1
                      ? {
                          floor: function (n) {
                            while (a((n = t.floor(n)))) n = Kc(n - 1);
                            return n;
                          },
                          ceil: function (n) {
                            while (a((n = t.ceil(n)))) n = Kc(+n + 1);
                            return n;
                          }
                        }
                      : t
                  )
                )
              );
            }),
            (r.ticks = function (t, n) {
              var e = la(r.domain()),
                o =
                  null == t
                    ? i(e, 10)
                    : "number" === typeof t
                    ? i(e, t)
                    : !t.range && [
                        {
                          range: t
                        },
                        n
                      ];
              return (
                o && ((t = o[0]), (n = o[1])),
                t.range(e[0], Kc(+e[1] + 1), n < 1 ? 1 : n)
              );
            }),
            (r.tickFormat = function () {
              return e;
            }),
            (r.copy = function () {
              return Jc(t.copy(), n, e);
            }),
            ya(r, t)
          );
        }
        function Kc(t) {
          return new Date(t);
        }
        (Wc.iso =
          Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
            ? Xc
            : Gc),
          (Xc.parse = function (t) {
            var n = new Date(t);
            return isNaN(n) ? null : n;
          }),
          (Xc.toString = Gc.toString),
          (Gn.second = Qn(
            function (t) {
              return new Xn(1e3 * Math.floor(t / 1e3));
            },
            function (t, n) {
              t.setTime(t.getTime() + 1e3 * Math.floor(n));
            },
            function (t) {
              return t.getSeconds();
            }
          )),
          (Gn.seconds = Gn.second.range),
          (Gn.seconds.utc = Gn.second.utc.range),
          (Gn.minute = Qn(
            function (t) {
              return new Xn(6e4 * Math.floor(t / 6e4));
            },
            function (t, n) {
              t.setTime(t.getTime() + 6e4 * Math.floor(n));
            },
            function (t) {
              return t.getMinutes();
            }
          )),
          (Gn.minutes = Gn.minute.range),
          (Gn.minutes.utc = Gn.minute.utc.range),
          (Gn.hour = Qn(
            function (t) {
              var n = t.getTimezoneOffset() / 60;
              return new Xn(36e5 * (Math.floor(t / 36e5 - n) + n));
            },
            function (t, n) {
              t.setTime(t.getTime() + 36e5 * Math.floor(n));
            },
            function (t) {
              return t.getHours();
            }
          )),
          (Gn.hours = Gn.hour.range),
          (Gn.hours.utc = Gn.hour.utc.range),
          (Gn.month = Qn(
            function (t) {
              return (t = Gn.day(t)), t.setDate(1), t;
            },
            function (t, n) {
              t.setMonth(t.getMonth() + n);
            },
            function (t) {
              return t.getMonth();
            }
          )),
          (Gn.months = Gn.month.range),
          (Gn.months.utc = Gn.month.utc.range);
        var Qc = [
            1e3,
            5e3,
            15e3,
            3e4,
            6e4,
            3e5,
            9e5,
            18e5,
            36e5,
            108e5,
            216e5,
            432e5,
            864e5,
            1728e5,
            6048e5,
            2592e6,
            7776e6,
            31536e6
          ],
          tl = [
            [Gn.second, 1],
            [Gn.second, 5],
            [Gn.second, 15],
            [Gn.second, 30],
            [Gn.minute, 1],
            [Gn.minute, 5],
            [Gn.minute, 15],
            [Gn.minute, 30],
            [Gn.hour, 1],
            [Gn.hour, 3],
            [Gn.hour, 6],
            [Gn.hour, 12],
            [Gn.day, 1],
            [Gn.day, 2],
            [Gn.week, 1],
            [Gn.month, 1],
            [Gn.month, 3],
            [Gn.year, 1]
          ],
          nl = Wc.multi([
            [
              ".%L",
              function (t) {
                return t.getMilliseconds();
              }
            ],
            [
              ":%S",
              function (t) {
                return t.getSeconds();
              }
            ],
            [
              "%I:%M",
              function (t) {
                return t.getMinutes();
              }
            ],
            [
              "%I %p",
              function (t) {
                return t.getHours();
              }
            ],
            [
              "%a %d",
              function (t) {
                return t.getDay() && 1 != t.getDate();
              }
            ],
            [
              "%b %d",
              function (t) {
                return 1 != t.getDate();
              }
            ],
            [
              "%B",
              function (t) {
                return t.getMonth();
              }
            ],
            ["%Y", sr]
          ]),
          el = {
            range: function (t, n, e) {
              return o.range(Math.ceil(t / e) * e, +n, e).map(Kc);
            },
            floor: F,
            ceil: F
          };
        (tl.year = Gn.year),
          (Gn.scale = function () {
            return Jc(o.scale.linear(), tl, nl);
          });
        var rl = tl.map(function (t) {
            return [t[0].utc, t[1]];
          }),
          il = Zc.multi([
            [
              ".%L",
              function (t) {
                return t.getUTCMilliseconds();
              }
            ],
            [
              ":%S",
              function (t) {
                return t.getUTCSeconds();
              }
            ],
            [
              "%I:%M",
              function (t) {
                return t.getUTCMinutes();
              }
            ],
            [
              "%I %p",
              function (t) {
                return t.getUTCHours();
              }
            ],
            [
              "%a %d",
              function (t) {
                return t.getUTCDay() && 1 != t.getUTCDate();
              }
            ],
            [
              "%b %d",
              function (t) {
                return 1 != t.getUTCDate();
              }
            ],
            [
              "%B",
              function (t) {
                return t.getUTCMonth();
              }
            ],
            ["%Y", sr]
          ]);
        function ol(t) {
          return JSON.parse(t.responseText);
        }
        function ul(t) {
          var n = c.createRange();
          return (
            n.selectNode(c.body), n.createContextualFragment(t.responseText)
          );
        }
        (rl.year = Gn.year.utc),
          (Gn.scale.utc = function () {
            return Jc(o.scale.linear(), rl, il);
          }),
          (o.text = An(function (t) {
            return t.responseText;
          })),
          (o.json = function (t, n) {
            return Cn(t, "application/json", ol, n);
          }),
          (o.html = function (t, n) {
            return Cn(t, "text/html", ul, n);
          }),
          (o.xml = An(function (t) {
            return t.responseXML;
          })),
          (this.d3 = o),
          (r = o),
          (i = "function" === typeof r ? r.call(n, e, n, t) : r),
          void 0 === i || (t.exports = i);
      })();
    },
    "6eeb": function (t, n, e) {
      var r = e("da84"),
        i = e("9112"),
        o = e("5135"),
        u = e("ce4e"),
        a = e("8925"),
        c = e("69f3"),
        l = c.get,
        s = c.enforce,
        f = String(String).split("String");
      (t.exports = function (t, n, e, a) {
        var c,
          l = !!a && !!a.unsafe,
          h = !!a && !!a.enumerable,
          p = !!a && !!a.noTargetGet;
        "function" == typeof e &&
          ("string" != typeof n || o(e, "name") || i(e, "name", n),
          (c = s(e)),
          c.source || (c.source = f.join("string" == typeof n ? n : ""))),
          t !== r
            ? (l ? !p && t[n] && (h = !0) : delete t[n],
              h ? (t[n] = e) : i(t, n, e))
            : h
            ? (t[n] = e)
            : u(n, e);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && l(this).source) || a(this);
      });
    },
    7418: function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    7839: function (t, n) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    },
    "7a23": function (t, n, e) {
      "use strict";
      e.d(n, "i", function () {
        return r["J"];
      }),
        e.d(n, "a", function () {
          return Pe;
        }),
        e.d(n, "c", function () {
          return Ve;
        }),
        e.d(n, "d", function () {
          return tr;
        }),
        e.d(n, "e", function () {
          return Qe;
        }),
        e.d(n, "f", function () {
          return Xe;
        }),
        e.d(n, "g", function () {
          return Ie;
        }),
        e.d(n, "h", function () {
          return Dr;
        }),
        e.d(n, "k", function () {
          return ye;
        }),
        e.d(n, "b", function () {
          return Hi;
        }),
        e.d(n, "j", function () {
          return zi;
        });
      var r = e("9ff4");
      const i = new WeakMap(),
        o = [];
      let u;
      const a = Symbol(""),
        c = Symbol("");
      function l(t) {
        return t && !0 === t._isEffect;
      }
      function s(t, n = r["b"]) {
        l(t) && (t = t.raw);
        const e = p(t, n);
        return n.lazy || e(), e;
      }
      function f(t) {
        t.active &&
          (d(t), t.options.onStop && t.options.onStop(), (t.active = !1));
      }
      let h = 0;
      function p(t, n) {
        const e = function () {
          if (!e.active) return n.scheduler ? void 0 : t();
          if (!o.includes(e)) {
            d(e);
            try {
              return m(), o.push(e), (u = e), t();
            } finally {
              o.pop(), b(), (u = o[o.length - 1]);
            }
          }
        };
        return (
          (e.id = h++),
          (e.allowRecurse = !!n.allowRecurse),
          (e._isEffect = !0),
          (e.active = !0),
          (e.raw = t),
          (e.deps = []),
          (e.options = n),
          e
        );
      }
      function d(t) {
        const { deps: n } = t;
        if (n.length) {
          for (let e = 0; e < n.length; e++) n[e].delete(t);
          n.length = 0;
        }
      }
      let g = !0;
      const v = [];
      function y() {
        v.push(g), (g = !1);
      }
      function m() {
        v.push(g), (g = !0);
      }
      function b() {
        const t = v.pop();
        g = void 0 === t || t;
      }
      function x(t, n, e) {
        if (!g || void 0 === u) return;
        let r = i.get(t);
        r || i.set(t, (r = new Map()));
        let o = r.get(e);
        o || r.set(e, (o = new Set())), o.has(u) || (o.add(u), u.deps.push(o));
      }
      function w(t, n, e, o, l, s) {
        const f = i.get(t);
        if (!f) return;
        const h = new Set(),
          p = (t) => {
            t &&
              t.forEach((t) => {
                (t !== u || t.allowRecurse) && h.add(t);
              });
          };
        if ("clear" === n) f.forEach(p);
        else if ("length" === e && Object(r["n"])(t))
          f.forEach((t, n) => {
            ("length" === n || n >= o) && p(t);
          });
        else
          switch ((void 0 !== e && p(f.get(e)), n)) {
            case "add":
              Object(r["n"])(t)
                ? Object(r["r"])(e) && p(f.get("length"))
                : (p(f.get(a)), Object(r["s"])(t) && p(f.get(c)));
              break;
            case "delete":
              Object(r["n"])(t) ||
                (p(f.get(a)), Object(r["s"])(t) && p(f.get(c)));
              break;
            case "set":
              Object(r["s"])(t) && p(f.get(a));
              break;
          }
        const d = (t) => {
          t.options.scheduler ? t.options.scheduler(t) : t();
        };
        h.forEach(d);
      }
      const M = new Set(
          Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(r["C"])
        ),
        _ = E(),
        S = E(!1, !0),
        j = E(!0),
        O = E(!0, !0),
        k = {};
      function E(t = !1, n = !1) {
        return function (e, i, o) {
          if ("__v_isReactive" === i) return !t;
          if ("__v_isReadonly" === i) return t;
          if ("__v_raw" === i && o === (t ? at : ut).get(e)) return e;
          const u = Object(r["n"])(e);
          if (!t && u && Object(r["k"])(k, i)) return Reflect.get(k, i, o);
          const a = Reflect.get(e, i, o);
          if (
            Object(r["C"])(i)
              ? M.has(i)
              : "__proto__" === i || "__v_isRef" === i
          )
            return a;
          if ((t || x(e, "get", i), n)) return a;
          if (mt(a)) {
            const t = !u || !Object(r["r"])(i);
            return t ? a.value : a;
          }
          return Object(r["u"])(a) ? (t ? ht(a) : st(a)) : a;
        };
      }
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        const n = Array.prototype[t];
        k[t] = function (...t) {
          const e = yt(this);
          for (let n = 0, i = this.length; n < i; n++) x(e, "get", n + "");
          const r = n.apply(e, t);
          return -1 === r || !1 === r ? n.apply(e, t.map(yt)) : r;
        };
      }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
          const n = Array.prototype[t];
          k[t] = function (...t) {
            y();
            const e = n.apply(this, t);
            return b(), e;
          };
        });
      const A = L(),
        C = L(!0);
      function L(t = !1) {
        return function (n, e, i, o) {
          const u = n[e];
          if (!t && ((i = yt(i)), !Object(r["n"])(n) && mt(u) && !mt(i)))
            return (u.value = i), !0;
          const a =
              Object(r["n"])(n) && Object(r["r"])(e)
                ? Number(e) < n.length
                : Object(r["k"])(n, e),
            c = Reflect.set(n, e, i, o);
          return (
            n === yt(o) &&
              (a
                ? Object(r["j"])(i, u) && w(n, "set", e, i, u)
                : w(n, "add", e, i)),
            c
          );
        };
      }
      function N(t, n) {
        const e = Object(r["k"])(t, n),
          i = t[n],
          o = Reflect.deleteProperty(t, n);
        return o && e && w(t, "delete", n, void 0, i), o;
      }
      function T(t, n) {
        const e = Reflect.has(t, n);
        return (Object(r["C"])(n) && M.has(n)) || x(t, "has", n), e;
      }
      function R(t) {
        return (
          x(t, "iterate", Object(r["n"])(t) ? "length" : a), Reflect.ownKeys(t)
        );
      }
      const P = {
          get: _,
          set: A,
          deleteProperty: N,
          has: T,
          ownKeys: R
        },
        F = {
          get: j,
          set(t, n) {
            return !0;
          },
          deleteProperty(t, n) {
            return !0;
          }
        },
        U = Object(r["h"])({}, P, {
          get: S,
          set: C
        }),
        q =
          (Object(r["h"])({}, F, {
            get: O
          }),
          (t) => (Object(r["u"])(t) ? st(t) : t)),
        z = (t) => (Object(r["u"])(t) ? ht(t) : t),
        D = (t) => t,
        I = (t) => Reflect.getPrototypeOf(t);
      function B(t, n, e = !1, r = !1) {
        t = t["__v_raw"];
        const i = yt(t),
          o = yt(n);
        n !== o && !e && x(i, "get", n), !e && x(i, "get", o);
        const { has: u } = I(i),
          a = e ? z : r ? D : q;
        return u.call(i, n) ? a(t.get(n)) : u.call(i, o) ? a(t.get(o)) : void 0;
      }
      function H(t, n = !1) {
        const e = this["__v_raw"],
          r = yt(e),
          i = yt(t);
        return (
          t !== i && !n && x(r, "has", t),
          !n && x(r, "has", i),
          t === i ? e.has(t) : e.has(t) || e.has(i)
        );
      }
      function V(t, n = !1) {
        return (
          (t = t["__v_raw"]),
          !n && x(yt(t), "iterate", a),
          Reflect.get(t, "size", t)
        );
      }
      function $(t) {
        t = yt(t);
        const n = yt(this),
          e = I(n),
          r = e.has.call(n, t);
        return n.add(t), r || w(n, "add", t, t), this;
      }
      function Y(t, n) {
        n = yt(n);
        const e = yt(this),
          { has: i, get: o } = I(e);
        let u = i.call(e, t);
        u || ((t = yt(t)), (u = i.call(e, t)));
        const a = o.call(e, t);
        return (
          e.set(t, n),
          u ? Object(r["j"])(n, a) && w(e, "set", t, n, a) : w(e, "add", t, n),
          this
        );
      }
      function W(t) {
        const n = yt(this),
          { has: e, get: r } = I(n);
        let i = e.call(n, t);
        i || ((t = yt(t)), (i = e.call(n, t)));
        const o = r ? r.call(n, t) : void 0,
          u = n.delete(t);
        return i && w(n, "delete", t, void 0, o), u;
      }
      function Z() {
        const t = yt(this),
          n = 0 !== t.size,
          e = void 0,
          r = t.clear();
        return n && w(t, "clear", void 0, void 0, e), r;
      }
      function G(t, n) {
        return function (e, r) {
          const i = this,
            o = i["__v_raw"],
            u = yt(o),
            c = t ? z : n ? D : q;
          return (
            !t && x(u, "iterate", a),
            o.forEach((t, n) => e.call(r, c(t), c(n), i))
          );
        };
      }
      function X(t, n, e) {
        return function (...i) {
          const o = this["__v_raw"],
            u = yt(o),
            l = Object(r["s"])(u),
            s = "entries" === t || (t === Symbol.iterator && l),
            f = "keys" === t && l,
            h = o[t](...i),
            p = n ? z : e ? D : q;
          return (
            !n && x(u, "iterate", f ? c : a),
            {
              next() {
                const { value: t, done: n } = h.next();
                return n
                  ? {
                      value: t,
                      done: n
                    }
                  : {
                      value: s ? [p(t[0]), p(t[1])] : p(t),
                      done: n
                    };
              },
              [Symbol.iterator]() {
                return this;
              }
            }
          );
        };
      }
      function J(t) {
        return function (...n) {
          return "delete" !== t && this;
        };
      }
      const K = {
          get(t) {
            return B(this, t);
          },
          get size() {
            return V(this);
          },
          has: H,
          add: $,
          set: Y,
          delete: W,
          clear: Z,
          forEach: G(!1, !1)
        },
        Q = {
          get(t) {
            return B(this, t, !1, !0);
          },
          get size() {
            return V(this);
          },
          has: H,
          add: $,
          set: Y,
          delete: W,
          clear: Z,
          forEach: G(!1, !0)
        },
        tt = {
          get(t) {
            return B(this, t, !0);
          },
          get size() {
            return V(this, !0);
          },
          has(t) {
            return H.call(this, t, !0);
          },
          add: J("add"),
          set: J("set"),
          delete: J("delete"),
          clear: J("clear"),
          forEach: G(!0, !1)
        },
        nt = ["keys", "values", "entries", Symbol.iterator];
      function et(t, n) {
        const e = n ? Q : t ? tt : K;
        return (n, i, o) =>
          "__v_isReactive" === i
            ? !t
            : "__v_isReadonly" === i
            ? t
            : "__v_raw" === i
            ? n
            : Reflect.get(Object(r["k"])(e, i) && i in n ? e : n, i, o);
      }
      nt.forEach((t) => {
        (K[t] = X(t, !1, !1)), (tt[t] = X(t, !0, !1)), (Q[t] = X(t, !1, !0));
      });
      const rt = {
          get: et(!1, !1)
        },
        it = {
          get: et(!1, !0)
        },
        ot = {
          get: et(!0, !1)
        };
      const ut = new WeakMap(),
        at = new WeakMap();
      function ct(t) {
        switch (t) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function lt(t) {
        return t["__v_skip"] || !Object.isExtensible(t)
          ? 0
          : ct(Object(r["M"])(t));
      }
      function st(t) {
        return t && t["__v_isReadonly"] ? t : pt(t, !1, P, rt);
      }
      function ft(t) {
        return pt(t, !1, U, it);
      }
      function ht(t) {
        return pt(t, !0, F, ot);
      }
      function pt(t, n, e, i) {
        if (!Object(r["u"])(t)) return t;
        if (t["__v_raw"] && (!n || !t["__v_isReactive"])) return t;
        const o = n ? at : ut,
          u = o.get(t);
        if (u) return u;
        const a = lt(t);
        if (0 === a) return t;
        const c = new Proxy(t, 2 === a ? i : e);
        return o.set(t, c), c;
      }
      function dt(t) {
        return gt(t) ? dt(t["__v_raw"]) : !(!t || !t["__v_isReactive"]);
      }
      function gt(t) {
        return !(!t || !t["__v_isReadonly"]);
      }
      function vt(t) {
        return dt(t) || gt(t);
      }
      function yt(t) {
        return (t && yt(t["__v_raw"])) || t;
      }
      function mt(t) {
        return Boolean(t && !0 === t.__v_isRef);
      }
      function bt(t) {
        return mt(t) ? t.value : t;
      }
      const xt = {
        get: (t, n, e) => bt(Reflect.get(t, n, e)),
        set: (t, n, e, r) => {
          const i = t[n];
          return mt(i) && !mt(e)
            ? ((i.value = e), !0)
            : Reflect.set(t, n, e, r);
        }
      };
      function wt(t) {
        return dt(t) ? t : new Proxy(t, xt);
      }
      class Mt {
        constructor(t, n) {
          (this._object = t), (this._key = n), (this.__v_isRef = !0);
        }
        get value() {
          return this._object[this._key];
        }
        set value(t) {
          this._object[this._key] = t;
        }
      }
      function _t(t, n) {
        return mt(t[n]) ? t[n] : new Mt(t, n);
      }
      class St {
        constructor(t, n, e) {
          (this._setter = n),
            (this._dirty = !0),
            (this.__v_isRef = !0),
            (this.effect = s(t, {
              lazy: !0,
              scheduler: () => {
                this._dirty ||
                  ((this._dirty = !0), w(yt(this), "set", "value"));
              }
            })),
            (this["__v_isReadonly"] = e);
        }
        get value() {
          return (
            this._dirty && ((this._value = this.effect()), (this._dirty = !1)),
            x(yt(this), "get", "value"),
            this._value
          );
        }
        set value(t) {
          this._setter(t);
        }
      }
      function jt(t) {
        let n, e;
        return (
          Object(r["o"])(t)
            ? ((n = t), (e = r["d"]))
            : ((n = t.get), (e = t.set)),
          new St(n, e, Object(r["o"])(t) || !t.set)
        );
      }
      function Ot(t, n, e, r) {
        let i;
        try {
          i = r ? t(...r) : t();
        } catch (o) {
          Et(o, n, e);
        }
        return i;
      }
      function kt(t, n, e, i) {
        if (Object(r["o"])(t)) {
          const o = Ot(t, n, e, i);
          return (
            o &&
              Object(r["w"])(o) &&
              o.catch((t) => {
                Et(t, n, e);
              }),
            o
          );
        }
        const o = [];
        for (let r = 0; r < t.length; r++) o.push(kt(t[r], n, e, i));
        return o;
      }
      function Et(t, n, e, r = !0) {
        const i = n ? n.vnode : null;
        if (n) {
          let r = n.parent;
          const i = n.proxy,
            o = e;
          while (r) {
            const n = r.ec;
            if (n)
              for (let e = 0; e < n.length; e++)
                if (!1 === n[e](t, i, o)) return;
            r = r.parent;
          }
          const u = n.appContext.config.errorHandler;
          if (u) return void Ot(u, null, 10, [t, i, o]);
        }
        At(t, e, i, r);
      }
      function At(t, n, e, r = !0) {
        console.error(t);
      }
      let Ct = !1,
        Lt = !1;
      const Nt = [];
      let Tt = 0;
      const Rt = [];
      let Pt = null,
        Ft = 0;
      const Ut = [];
      let qt = null,
        zt = 0;
      const Dt = Promise.resolve();
      let It = null,
        Bt = null;
      function Ht(t) {
        const n = It || Dt;
        return t ? n.then(this ? t.bind(this) : t) : n;
      }
      function Vt(t) {
        (Nt.length && Nt.includes(t, Ct && t.allowRecurse ? Tt + 1 : Tt)) ||
          t === Bt ||
          (Nt.push(t), $t());
      }
      function $t() {
        Ct || Lt || ((Lt = !0), (It = Dt.then(Qt)));
      }
      function Yt(t) {
        const n = Nt.indexOf(t);
        n > -1 && Nt.splice(n, 1);
      }
      function Wt(t, n, e, i) {
        Object(r["n"])(t)
          ? e.push(...t)
          : (n && n.includes(t, t.allowRecurse ? i + 1 : i)) || e.push(t),
          $t();
      }
      function Zt(t) {
        Wt(t, Pt, Rt, Ft);
      }
      function Gt(t) {
        Wt(t, qt, Ut, zt);
      }
      function Xt(t, n = null) {
        if (Rt.length) {
          for (
            Bt = n, Pt = [...new Set(Rt)], Rt.length = 0, Ft = 0;
            Ft < Pt.length;
            Ft++
          )
            Pt[Ft]();
          (Pt = null), (Ft = 0), (Bt = null), Xt(t, n);
        }
      }
      function Jt(t) {
        if (Ut.length) {
          const t = [...new Set(Ut)];
          if (((Ut.length = 0), qt)) return void qt.push(...t);
          for (
            qt = t, qt.sort((t, n) => Kt(t) - Kt(n)), zt = 0;
            zt < qt.length;
            zt++
          )
            qt[zt]();
          (qt = null), (zt = 0);
        }
      }
      const Kt = (t) => (null == t.id ? 1 / 0 : t.id);
      function Qt(t) {
        (Lt = !1), (Ct = !0), Xt(t), Nt.sort((t, n) => Kt(t) - Kt(n));
        try {
          for (Tt = 0; Tt < Nt.length; Tt++) {
            const t = Nt[Tt];
            t && Ot(t, null, 14);
          }
        } finally {
          (Tt = 0),
            (Nt.length = 0),
            Jt(t),
            (Ct = !1),
            (It = null),
            (Nt.length || Ut.length) && Qt(t);
        }
      }
      new Set();
      new Map();
      function tn(t, n, ...e) {
        const i = t.vnode.props || r["b"];
        let o = e;
        const u = n.startsWith("update:"),
          a = u && n.slice(7);
        if (a && a in i) {
          const t = ("modelValue" === a ? "model" : a) + "Modifiers",
            { number: n, trim: u } = i[t] || r["b"];
          u ? (o = e.map((t) => t.trim())) : n && (o = e.map(r["L"]));
        }
        let c = Object(r["K"])(Object(r["e"])(n)),
          l = i[c];
        !l && u && ((c = Object(r["K"])(Object(r["l"])(n))), (l = i[c])),
          l && kt(l, t, 6, o);
        const s = i[c + "Once"];
        if (s) {
          if (t.emitted) {
            if (t.emitted[c]) return;
          } else (t.emitted = {})[c] = !0;
          kt(s, t, 6, o);
        }
      }
      function nn(t, n, e = !1) {
        if (!n.deopt && void 0 !== t.__emits) return t.__emits;
        const i = t.emits;
        let o = {},
          u = !1;
        if (!Object(r["o"])(t)) {
          const i = (t) => {
            (u = !0), Object(r["h"])(o, nn(t, n, !0));
          };
          !e && n.mixins.length && n.mixins.forEach(i),
            t.extends && i(t.extends),
            t.mixins && t.mixins.forEach(i);
        }
        return i || u
          ? (Object(r["n"])(i)
              ? i.forEach((t) => (o[t] = null))
              : Object(r["h"])(o, i),
            (t.__emits = o))
          : (t.__emits = null);
      }
      function en(t, n) {
        return (
          !(!t || !Object(r["v"])(n)) &&
          ((n = n.slice(2).replace(/Once$/, "")),
          Object(r["k"])(t, n[0].toLowerCase() + n.slice(1)) ||
            Object(r["k"])(t, Object(r["l"])(n)) ||
            Object(r["k"])(t, n))
        );
      }
      let rn = null;
      function on(t) {
        rn = t;
      }
      function un(t) {
        const {
          type: n,
          vnode: e,
          proxy: i,
          withProxy: o,
          props: u,
          propsOptions: [a],
          slots: c,
          attrs: l,
          emit: s,
          render: f,
          renderCache: h,
          data: p,
          setupState: d,
          ctx: g
        } = t;
        let v;
        rn = t;
        try {
          let t;
          if (4 & e.shapeFlag) {
            const n = o || i;
            (v = nr(f.call(n, n, h, u, d, p, g))), (t = l);
          } else {
            const e = n;
            0,
              (v = nr(
                e.length > 1
                  ? e(u, {
                      attrs: l,
                      slots: c,
                      emit: s
                    })
                  : e(u, null)
              )),
              (t = n.props ? l : cn(l));
          }
          let y = v;
          if (!1 !== n.inheritAttrs && t) {
            const n = Object.keys(t),
              { shapeFlag: e } = y;
            n.length &&
              (1 & e || 6 & e) &&
              (a && n.some(r["t"]) && (t = ln(t, a)), (y = Ke(y, t)));
          }
          e.dirs && (y.dirs = y.dirs ? y.dirs.concat(e.dirs) : e.dirs),
            e.transition && (y.transition = e.transition),
            (v = y);
        } catch (y) {
          Et(y, t, 1), (v = Xe(Ue));
        }
        return (rn = null), v;
      }
      function an(t) {
        let n;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!$e(r)) return;
          if (r.type !== Ue || "v-if" === r.children) {
            if (n) return;
            n = r;
          }
        }
        return n;
      }
      const cn = (t) => {
          let n;
          for (const e in t)
            ("class" === e || "style" === e || Object(r["v"])(e)) &&
              ((n || (n = {}))[e] = t[e]);
          return n;
        },
        ln = (t, n) => {
          const e = {};
          for (const i in t)
            (Object(r["t"])(i) && i.slice(9) in n) || (e[i] = t[i]);
          return e;
        };
      function sn(t, n, e) {
        const { props: r, children: i, component: o } = t,
          { props: u, children: a, patchFlag: c } = n,
          l = o.emitsOptions;
        if (n.dirs || n.transition) return !0;
        if (!(e && c >= 0))
          return (
            !((!i && !a) || (a && a.$stable)) ||
            (r !== u && (r ? !u || fn(r, u, l) : !!u))
          );
        if (1024 & c) return !0;
        if (16 & c) return r ? fn(r, u, l) : !!u;
        if (8 & c) {
          const t = n.dynamicProps;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (u[e] !== r[e] && !en(l, e)) return !0;
          }
        }
        return !1;
      }
      function fn(t, n, e) {
        const r = Object.keys(n);
        if (r.length !== Object.keys(t).length) return !0;
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          if (n[o] !== t[o] && !en(e, o)) return !0;
        }
        return !1;
      }
      function hn({ vnode: t, parent: n }, e) {
        while (n && n.subTree === t) ((t = n.vnode).el = e), (n = n.parent);
      }
      const pn = (t) => t.__isSuspense;
      function dn(t) {
        const { shapeFlag: n, children: e } = t;
        let r, i;
        return (
          32 & n
            ? ((r = gn(e.default)), (i = gn(e.fallback)))
            : ((r = gn(e)), (i = nr(null))),
          {
            content: r,
            fallback: i
          }
        );
      }
      function gn(t) {
        if ((Object(r["o"])(t) && (t = t()), Object(r["n"])(t))) {
          const n = an(t);
          0, (t = n);
        }
        return nr(t);
      }
      function vn(t, n) {
        n && n.pendingBranch
          ? Object(r["n"])(t)
            ? n.effects.push(...t)
            : n.effects.push(t)
          : Gt(t);
      }
      let yn = 0;
      const mn = (t) => (yn += t);
      function bn(t, n = rn) {
        if (!n) return t;
        const e = (...e) => {
          yn || Ie(!0);
          const r = rn;
          on(n);
          const i = t(...e);
          return on(r), yn || Be(), i;
        };
        return (e._c = !0), e;
      }
      let xn = null;
      function wn(t, n, e, i = !1) {
        const o = {},
          u = {};
        Object(r["g"])(u, We, 1),
          _n(t, n, o, u),
          e
            ? (t.props = i ? o : ft(o))
            : t.type.props
            ? (t.props = o)
            : (t.props = u),
          (t.attrs = u);
      }
      function Mn(t, n, e, i) {
        const {
            props: o,
            attrs: u,
            vnode: { patchFlag: a }
          } = t,
          c = yt(o),
          [l] = t.propsOptions;
        if (!(i || a > 0) || 16 & a) {
          let i;
          _n(t, n, o, u);
          for (const u in c)
            (n &&
              (Object(r["k"])(n, u) ||
                ((i = Object(r["l"])(u)) !== u && Object(r["k"])(n, i)))) ||
              (l
                ? !e ||
                  (void 0 === e[u] && void 0 === e[i]) ||
                  (o[u] = Sn(l, n || r["b"], u, void 0, t))
                : delete o[u]);
          if (u !== c)
            for (const t in u) (n && Object(r["k"])(n, t)) || delete u[t];
        } else if (8 & a) {
          const e = t.vnode.dynamicProps;
          for (let i = 0; i < e.length; i++) {
            const a = e[i],
              s = n[a];
            if (l)
              if (Object(r["k"])(u, a)) u[a] = s;
              else {
                const n = Object(r["e"])(a);
                o[n] = Sn(l, c, n, s, t);
              }
            else u[a] = s;
          }
        }
        w(t, "set", "$attrs");
      }
      function _n(t, n, e, i) {
        const [o, u] = t.propsOptions;
        if (n)
          for (const a in n) {
            const u = n[a];
            if (Object(r["x"])(a)) continue;
            let c;
            o && Object(r["k"])(o, (c = Object(r["e"])(a)))
              ? (e[c] = u)
              : en(t.emitsOptions, a) || (i[a] = u);
          }
        if (u) {
          const n = yt(e);
          for (let r = 0; r < u.length; r++) {
            const i = u[r];
            e[i] = Sn(o, n, i, n[i], t);
          }
        }
      }
      function Sn(t, n, e, i, o) {
        const u = t[e];
        if (null != u) {
          const t = Object(r["k"])(u, "default");
          if (t && void 0 === i) {
            const t = u.default;
            u.type !== Function && Object(r["o"])(t)
              ? (kr(o), (i = t(n)), kr(null))
              : (i = t);
          }
          u[0] &&
            (Object(r["k"])(n, e) || t
              ? !u[1] || ("" !== i && i !== Object(r["l"])(e)) || (i = !0)
              : (i = !1));
        }
        return i;
      }
      function jn(t, n, e = !1) {
        if (!n.deopt && t.__props) return t.__props;
        const i = t.props,
          o = {},
          u = [];
        let a = !1;
        if (!Object(r["o"])(t)) {
          const i = (t) => {
            a = !0;
            const [e, i] = jn(t, n, !0);
            Object(r["h"])(o, e), i && u.push(...i);
          };
          !e && n.mixins.length && n.mixins.forEach(i),
            t.extends && i(t.extends),
            t.mixins && t.mixins.forEach(i);
        }
        if (!i && !a) return (t.__props = r["a"]);
        if (Object(r["n"])(i))
          for (let c = 0; c < i.length; c++) {
            0;
            const t = Object(r["e"])(i[c]);
            On(t) && (o[t] = r["b"]);
          }
        else if (i) {
          0;
          for (const t in i) {
            const n = Object(r["e"])(t);
            if (On(n)) {
              const e = i[t],
                a = (o[n] =
                  Object(r["n"])(e) || Object(r["o"])(e)
                    ? {
                        type: e
                      }
                    : e);
              if (a) {
                const t = An(Boolean, a.type),
                  e = An(String, a.type);
                (a[0] = t > -1),
                  (a[1] = e < 0 || t < e),
                  (t > -1 || Object(r["k"])(a, "default")) && u.push(n);
              }
            }
          }
        }
        return (t.__props = [o, u]);
      }
      function On(t) {
        return "$" !== t[0];
      }
      function kn(t) {
        const n = t && t.toString().match(/^\s*function (\w+)/);
        return n ? n[1] : "";
      }
      function En(t, n) {
        return kn(t) === kn(n);
      }
      function An(t, n) {
        if (Object(r["n"])(n)) {
          for (let e = 0, r = n.length; e < r; e++) if (En(n[e], t)) return e;
        } else if (Object(r["o"])(n)) return En(n, t) ? 0 : -1;
        return -1;
      }
      function Cn(t, n, e = jr, r = !1) {
        if (e) {
          const i = e[t] || (e[t] = []),
            o =
              n.__weh ||
              (n.__weh = (...r) => {
                if (e.isUnmounted) return;
                y(), kr(e);
                const i = kt(n, e, t, r);
                return kr(null), b(), i;
              });
          return r ? i.unshift(o) : i.push(o), o;
        }
      }
      const Ln = (t) => (n, e = jr) => !Ar && Cn(t, n, e),
        Nn = Ln("bm"),
        Tn = Ln("m"),
        Rn = Ln("bu"),
        Pn = Ln("u"),
        Fn = Ln("bum"),
        Un = Ln("um"),
        qn = Ln("rtg"),
        zn = Ln("rtc"),
        Dn = (t, n = jr) => {
          Cn("ec", t, n);
        };
      const In = {};
      function Bn(t, n, e) {
        return Hn(t, n, e);
      }
      function Hn(
        t,
        n,
        { immediate: e, deep: i, flush: o, onTrack: u, onTrigger: a } = r["b"],
        c = jr
      ) {
        let l,
          h,
          p = !1;
        if (
          (mt(t)
            ? ((l = () => t.value), (p = !!t._shallow))
            : dt(t)
            ? ((l = () => t), (i = !0))
            : (l = Object(r["n"])(t)
                ? () =>
                    t.map((t) =>
                      mt(t)
                        ? t.value
                        : dt(t)
                        ? $n(t)
                        : Object(r["o"])(t)
                        ? Ot(t, c, 2)
                        : void 0
                    )
                : Object(r["o"])(t)
                ? n
                  ? () => Ot(t, c, 2)
                  : () => {
                      if (!c || !c.isUnmounted)
                        return h && h(), Ot(t, c, 3, [d]);
                    }
                : r["d"]),
          n && i)
        ) {
          const t = l;
          l = () => $n(t());
        }
        const d = (t) => {
          h = m.options.onStop = () => {
            Ot(t, c, 4);
          };
        };
        let g = Object(r["n"])(t) ? [] : In;
        const v = () => {
          if (m.active)
            if (n) {
              const t = m();
              (i || p || Object(r["j"])(t, g)) &&
                (h && h(), kt(n, c, 3, [t, g === In ? void 0 : g, d]), (g = t));
            } else m();
        };
        let y;
        (v.allowRecurse = !!n),
          (y =
            "sync" === o
              ? v
              : "post" === o
              ? () => je(v, c && c.suspense)
              : () => {
                  !c || c.isMounted ? Zt(v) : v();
                });
        const m = s(l, {
          lazy: !0,
          onTrack: u,
          onTrigger: a,
          scheduler: y
        });
        return (
          Pr(m, c),
          n
            ? e
              ? v()
              : (g = m())
            : "post" === o
            ? je(m, c && c.suspense)
            : m(),
          () => {
            f(m), c && Object(r["I"])(c.effects, m);
          }
        );
      }
      function Vn(t, n, e) {
        const i = this.proxy,
          o = Object(r["B"])(t) ? () => i[t] : t.bind(i);
        return Hn(o, n.bind(i), e, this);
      }
      function $n(t, n = new Set()) {
        if (!Object(r["u"])(t) || n.has(t)) return t;
        if ((n.add(t), mt(t))) $n(t.value, n);
        else if (Object(r["n"])(t))
          for (let e = 0; e < t.length; e++) $n(t[e], n);
        else if (Object(r["z"])(t) || Object(r["s"])(t))
          t.forEach((t) => {
            $n(t, n);
          });
        else for (const e in t) $n(t[e], n);
        return t;
      }
      function Yn() {
        const t = {
          isMounted: !1,
          isLeaving: !1,
          isUnmounting: !1,
          leavingVNodes: new Map()
        };
        return (
          Tn(() => {
            t.isMounted = !0;
          }),
          Fn(() => {
            t.isUnmounting = !0;
          }),
          t
        );
      }
      const Wn = [Function, Array],
        Zn = {
          name: "BaseTransition",
          props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Wn,
            onEnter: Wn,
            onAfterEnter: Wn,
            onEnterCancelled: Wn,
            onBeforeLeave: Wn,
            onLeave: Wn,
            onAfterLeave: Wn,
            onLeaveCancelled: Wn,
            onBeforeAppear: Wn,
            onAppear: Wn,
            onAfterAppear: Wn,
            onAppearCancelled: Wn
          },
          setup(t, { slots: n }) {
            const e = Or(),
              r = Yn();
            let i;
            return () => {
              const o = n.default && ne(n.default(), !0);
              if (!o || !o.length) return;
              const u = yt(t),
                { mode: a } = u;
              const c = o[0];
              if (r.isLeaving) return Kn(c);
              const l = Qn(c);
              if (!l) return Kn(c);
              const s = Jn(l, u, r, e);
              te(l, s);
              const f = e.subTree,
                h = f && Qn(f);
              let p = !1;
              const { getTransitionKey: d } = l.type;
              if (d) {
                const t = d();
                void 0 === i ? (i = t) : t !== i && ((i = t), (p = !0));
              }
              if (h && h.type !== Ue && (!Ye(l, h) || p)) {
                const t = Jn(h, u, r, e);
                if ((te(h, t), "out-in" === a))
                  return (
                    (r.isLeaving = !0),
                    (t.afterLeave = () => {
                      (r.isLeaving = !1), e.update();
                    }),
                    Kn(c)
                  );
                "in-out" === a &&
                  (t.delayLeave = (t, n, e) => {
                    const i = Xn(r, h);
                    (i[String(h.key)] = h),
                      (t._leaveCb = () => {
                        n(), (t._leaveCb = void 0), delete s.delayedLeave;
                      }),
                      (s.delayedLeave = e);
                  });
              }
              return c;
            };
          }
        },
        Gn = Zn;
      function Xn(t, n) {
        const { leavingVNodes: e } = t;
        let r = e.get(n.type);
        return r || ((r = Object.create(null)), e.set(n.type, r)), r;
      }
      function Jn(t, n, e, r) {
        const {
            appear: i,
            mode: o,
            persisted: u = !1,
            onBeforeEnter: a,
            onEnter: c,
            onAfterEnter: l,
            onEnterCancelled: s,
            onBeforeLeave: f,
            onLeave: h,
            onAfterLeave: p,
            onLeaveCancelled: d,
            onBeforeAppear: g,
            onAppear: v,
            onAfterAppear: y,
            onAppearCancelled: m
          } = n,
          b = String(t.key),
          x = Xn(e, t),
          w = (t, n) => {
            t && kt(t, r, 9, n);
          },
          M = {
            mode: o,
            persisted: u,
            beforeEnter(n) {
              let r = a;
              if (!e.isMounted) {
                if (!i) return;
                r = g || a;
              }
              n._leaveCb && n._leaveCb(!0);
              const o = x[b];
              o && Ye(t, o) && o.el._leaveCb && o.el._leaveCb(), w(r, [n]);
            },
            enter(t) {
              let n = c,
                r = l,
                o = s;
              if (!e.isMounted) {
                if (!i) return;
                (n = v || c), (r = y || l), (o = m || s);
              }
              let u = !1;
              const a = (t._enterCb = (n) => {
                u ||
                  ((u = !0),
                  w(n ? o : r, [t]),
                  M.delayedLeave && M.delayedLeave(),
                  (t._enterCb = void 0));
              });
              n ? (n(t, a), n.length <= 1 && a()) : a();
            },
            leave(n, r) {
              const i = String(t.key);
              if ((n._enterCb && n._enterCb(!0), e.isUnmounting)) return r();
              w(f, [n]);
              let o = !1;
              const u = (n._leaveCb = (e) => {
                o ||
                  ((o = !0),
                  r(),
                  w(e ? d : p, [n]),
                  (n._leaveCb = void 0),
                  x[i] === t && delete x[i]);
              });
              (x[i] = t), h ? (h(n, u), h.length <= 1 && u()) : u();
            },
            clone(t) {
              return Jn(t, n, e, r);
            }
          };
        return M;
      }
      function Kn(t) {
        if (ee(t)) return (t = Ke(t)), (t.children = null), t;
      }
      function Qn(t) {
        return ee(t) ? (t.children ? t.children[0] : void 0) : t;
      }
      function te(t, n) {
        6 & t.shapeFlag && t.component
          ? te(t.component.subTree, n)
          : 128 & t.shapeFlag
          ? ((t.ssContent.transition = n.clone(t.ssContent)),
            (t.ssFallback.transition = n.clone(t.ssFallback)))
          : (t.transition = n);
      }
      function ne(t, n = !1) {
        let e = [],
          r = 0;
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          o.type === Pe
            ? (128 & o.patchFlag && r++, (e = e.concat(ne(o.children, n))))
            : (n || o.type !== Ue) && e.push(o);
        }
        if (r > 1) for (let i = 0; i < e.length; i++) e[i].patchFlag = -2;
        return e;
      }
      const ee = (t) => t.type.__isKeepAlive;
      RegExp, RegExp;
      function re(t, n) {
        return Object(r["n"])(t)
          ? t.some((t) => re(t, n))
          : Object(r["B"])(t)
          ? t.split(",").indexOf(n) > -1
          : !!t.test && t.test(n);
      }
      function ie(t, n) {
        ue(t, "a", n);
      }
      function oe(t, n) {
        ue(t, "da", n);
      }
      function ue(t, n, e = jr) {
        const r =
          t.__wdc ||
          (t.__wdc = () => {
            let n = e;
            while (n) {
              if (n.isDeactivated) return;
              n = n.parent;
            }
            t();
          });
        if ((Cn(n, r, e), e)) {
          let t = e.parent;
          while (t && t.parent)
            ee(t.parent.vnode) && ae(r, n, e, t), (t = t.parent);
        }
      }
      function ae(t, n, e, i) {
        const o = Cn(n, t, i, !0);
        Un(() => {
          Object(r["I"])(i[n], o);
        }, e);
      }
      function ce(t) {
        let n = t.shapeFlag;
        256 & n && (n -= 256), 512 & n && (n -= 512), (t.shapeFlag = n);
      }
      function le(t) {
        return 128 & t.shapeFlag ? t.ssContent : t;
      }
      const se = (t) => "_" === t[0] || "$stable" === t,
        fe = (t) => (Object(r["n"])(t) ? t.map(nr) : [nr(t)]),
        he = (t, n, e) => bn((t) => fe(n(t)), e),
        pe = (t, n) => {
          const e = t._ctx;
          for (const i in t) {
            if (se(i)) continue;
            const o = t[i];
            if (Object(r["o"])(o)) n[i] = he(i, o, e);
            else if (null != o) {
              0;
              const t = fe(o);
              n[i] = () => t;
            }
          }
        },
        de = (t, n) => {
          const e = fe(n);
          t.slots.default = () => e;
        },
        ge = (t, n) => {
          if (32 & t.vnode.shapeFlag) {
            const e = n._;
            e
              ? ((t.slots = n), Object(r["g"])(n, "_", e))
              : pe(n, (t.slots = {}));
          } else (t.slots = {}), n && de(t, n);
          Object(r["g"])(t.slots, We, 1);
        },
        ve = (t, n) => {
          const { vnode: e, slots: i } = t;
          let o = !0,
            u = r["b"];
          if (32 & e.shapeFlag) {
            const t = n._;
            t
              ? 1 === t
                ? (o = !1)
                : Object(r["h"])(i, n)
              : ((o = !n.$stable), pe(n, i)),
              (u = n);
          } else
            n &&
              (de(t, n),
              (u = {
                default: 1
              }));
          if (o) for (const r in i) se(r) || r in u || delete i[r];
        };
      function ye(t, n) {
        const e = rn;
        if (null === e) return t;
        const i = e.proxy,
          o = t.dirs || (t.dirs = []);
        for (let u = 0; u < n.length; u++) {
          let [t, e, a, c = r["b"]] = n[u];
          Object(r["o"])(t) &&
            (t = {
              mounted: t,
              updated: t
            }),
            o.push({
              dir: t,
              instance: i,
              value: e,
              oldValue: void 0,
              arg: a,
              modifiers: c
            });
        }
        return t;
      }
      function me(t, n, e, r) {
        const i = t.dirs,
          o = n && n.dirs;
        for (let u = 0; u < i.length; u++) {
          const a = i[u];
          o && (a.oldValue = o[u].value);
          const c = a.dir[r];
          c && kt(c, e, 8, [t.el, a, t, n]);
        }
      }
      function be() {
        return {
          app: null,
          config: {
            isNativeTag: r["c"],
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: r["c"],
            errorHandler: void 0,
            warnHandler: void 0
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null)
        };
      }
      let xe = 0;
      function we(t, n) {
        return function (e, i = null) {
          null == i || Object(r["u"])(i) || (i = null);
          const o = be(),
            u = new Set();
          let a = !1;
          const c = (o.app = {
            _uid: xe++,
            _component: e,
            _props: i,
            _container: null,
            _context: o,
            version: Ir,
            get config() {
              return o.config;
            },
            set config(t) {
              0;
            },
            use(t, ...n) {
              return (
                u.has(t) ||
                  (t && Object(r["o"])(t.install)
                    ? (u.add(t), t.install(c, ...n))
                    : Object(r["o"])(t) && (u.add(t), t(c, ...n))),
                c
              );
            },
            mixin(t) {
              return (
                o.mixins.includes(t) ||
                  (o.mixins.push(t), (t.props || t.emits) && (o.deopt = !0)),
                c
              );
            },
            component(t, n) {
              return n ? ((o.components[t] = n), c) : o.components[t];
            },
            directive(t, n) {
              return n ? ((o.directives[t] = n), c) : o.directives[t];
            },
            mount(r, u) {
              if (!a) {
                const l = Xe(e, i);
                return (
                  (l.appContext = o),
                  u && n ? n(l, r) : t(l, r),
                  (a = !0),
                  (c._container = r),
                  (r.__vue_app__ = c),
                  l.component.proxy
                );
              }
            },
            unmount() {
              a && t(null, c._container);
            },
            provide(t, n) {
              return (o.provides[t] = n), c;
            }
          });
          return c;
        };
      }
      function Me() {}
      const _e = (t) => !!t.type.__asyncLoader;
      const Se = {
        scheduler: Vt,
        allowRecurse: !0
      };
      const je = vn,
        Oe = (t, n, e, i) => {
          if (Object(r["n"])(t))
            return void t.forEach((t, o) =>
              Oe(t, n && (Object(r["n"])(n) ? n[o] : n), e, i)
            );
          let o;
          o =
            !i || _e(i)
              ? null
              : 4 & i.shapeFlag
              ? i.component.exposed || i.component.proxy
              : i.el;
          const { i: u, r: a } = t;
          const c = n && n.r,
            l = u.refs === r["b"] ? (u.refs = {}) : u.refs,
            s = u.setupState;
          if (
            (null != c &&
              c !== a &&
              (Object(r["B"])(c)
                ? ((l[c] = null), Object(r["k"])(s, c) && (s[c] = null))
                : mt(c) && (c.value = null)),
            Object(r["B"])(a))
          ) {
            const t = () => {
              (l[a] = o), Object(r["k"])(s, a) && (s[a] = o);
            };
            o ? ((t.id = -1), je(t, e)) : t();
          } else if (mt(a)) {
            const t = () => {
              a.value = o;
            };
            o ? ((t.id = -1), je(t, e)) : t();
          } else Object(r["o"])(a) && Ot(a, u, 12, [o, l]);
        };
      function ke(t) {
        return Ee(t);
      }
      function Ee(t, n) {
        Me();
        const {
            insert: e,
            remove: i,
            patchProp: o,
            forcePatchProp: u,
            createElement: a,
            createText: c,
            createComment: l,
            setText: h,
            setElementText: p,
            parentNode: d,
            nextSibling: g,
            setScopeId: v = r["d"],
            cloneNode: y,
            insertStaticContent: m
          } = t,
          b = (t, n, e, r = null, i = null, o = null, u = !1, a = !1) => {
            t && !Ye(t, n) && ((r = W(t)), B(t, i, o, !0), (t = null)),
              -2 === n.patchFlag && ((a = !1), (n.dynamicChildren = null));
            const { type: c, ref: l, shapeFlag: s } = n;
            switch (c) {
              case Fe:
                x(t, n, e, r);
                break;
              case Ue:
                w(t, n, e, r);
                break;
              case qe:
                null == t && M(n, e, r, u);
                break;
              case Pe:
                N(t, n, e, r, i, o, u, a);
                break;
              default:
                1 & s
                  ? j(t, n, e, r, i, o, u, a)
                  : 6 & s
                  ? T(t, n, e, r, i, o, u, a)
                  : (64 & s || 128 & s) && c.process(t, n, e, r, i, o, u, a, G);
            }
            null != l && i && Oe(l, t && t.ref, o, n);
          },
          x = (t, n, r, i) => {
            if (null == t) e((n.el = c(n.children)), r, i);
            else {
              const e = (n.el = t.el);
              n.children !== t.children && h(e, n.children);
            }
          },
          w = (t, n, r, i) => {
            null == t ? e((n.el = l(n.children || "")), r, i) : (n.el = t.el);
          },
          M = (t, n, e, r) => {
            [t.el, t.anchor] = m(t.children, n, e, r);
          },
          _ = ({ el: t, anchor: n }, r, i) => {
            let o;
            while (t && t !== n) (o = g(t)), e(t, r, i), (t = o);
            e(n, r, i);
          },
          S = ({ el: t, anchor: n }) => {
            let e;
            while (t && t !== n) (e = g(t)), i(t), (t = e);
            i(n);
          },
          j = (t, n, e, r, i, o, u, a) => {
            (u = u || "svg" === n.type),
              null == t ? O(n, e, r, i, o, u, a) : A(t, n, i, o, u, a);
          },
          O = (t, n, i, u, c, l, s) => {
            let f, h;
            const {
              type: d,
              props: g,
              shapeFlag: v,
              transition: m,
              scopeId: b,
              patchFlag: x,
              dirs: w
            } = t;
            if (t.el && void 0 !== y && -1 === x) f = t.el = y(t.el);
            else {
              if (
                ((f = t.el = a(t.type, l, g && g.is)),
                8 & v
                  ? p(f, t.children)
                  : 16 & v &&
                    E(
                      t.children,
                      f,
                      null,
                      u,
                      c,
                      l && "foreignObject" !== d,
                      s || !!t.dynamicChildren
                    ),
                w && me(t, null, u, "created"),
                g)
              ) {
                for (const n in g)
                  Object(r["x"])(n) ||
                    o(f, n, null, g[n], l, t.children, u, c, Y);
                (h = g.onVnodeBeforeMount) && Ae(h, u, t);
              }
              k(f, b, t, u);
            }
            w && me(t, null, u, "beforeMount");
            const M = (!c || (c && !c.pendingBranch)) && m && !m.persisted;
            M && m.beforeEnter(f),
              e(f, n, i),
              ((h = g && g.onVnodeMounted) || M || w) &&
                je(() => {
                  h && Ae(h, u, t),
                    M && m.enter(f),
                    w && me(t, null, u, "mounted");
                }, c);
          },
          k = (t, n, e, r) => {
            if ((n && v(t, n), r)) {
              const i = r.type.__scopeId;
              i && i !== n && v(t, i + "-s");
              let o = r.subTree;
              0, e === o && k(t, r.vnode.scopeId, r.vnode, r.parent);
            }
          },
          E = (t, n, e, r, i, o, u, a = 0) => {
            for (let c = a; c < t.length; c++) {
              const a = (t[c] = u ? er(t[c]) : nr(t[c]));
              b(null, a, n, e, r, i, o, u);
            }
          },
          A = (t, n, e, i, a, c) => {
            const l = (n.el = t.el);
            let { patchFlag: s, dynamicChildren: f, dirs: h } = n;
            s |= 16 & t.patchFlag;
            const d = t.props || r["b"],
              g = n.props || r["b"];
            let v;
            if (
              ((v = g.onVnodeBeforeUpdate) && Ae(v, e, n, t),
              h && me(n, t, e, "beforeUpdate"),
              s > 0)
            ) {
              if (16 & s) L(l, n, d, g, e, i, a);
              else if (
                (2 & s &&
                  d.class !== g.class &&
                  o(l, "class", null, g.class, a),
                4 & s && o(l, "style", d.style, g.style, a),
                8 & s)
              ) {
                const r = n.dynamicProps;
                for (let n = 0; n < r.length; n++) {
                  const c = r[n],
                    s = d[c],
                    f = g[c];
                  (f !== s || (u && u(l, c))) &&
                    o(l, c, s, f, a, t.children, e, i, Y);
                }
              }
              1 & s && t.children !== n.children && p(l, n.children);
            } else c || null != f || L(l, n, d, g, e, i, a);
            const y = a && "foreignObject" !== n.type;
            f
              ? C(t.dynamicChildren, f, l, e, i, y)
              : c || q(t, n, l, null, e, i, y),
              ((v = g.onVnodeUpdated) || h) &&
                je(() => {
                  v && Ae(v, e, n, t), h && me(n, t, e, "updated");
                }, i);
          },
          C = (t, n, e, r, i, o) => {
            for (let u = 0; u < n.length; u++) {
              const a = t[u],
                c = n[u],
                l =
                  a.type === Pe ||
                  !Ye(a, c) ||
                  6 & a.shapeFlag ||
                  64 & a.shapeFlag
                    ? d(a.el)
                    : e;
              b(a, c, l, null, r, i, o, !0);
            }
          },
          L = (t, n, e, i, a, c, l) => {
            if (e !== i) {
              for (const s in i) {
                if (Object(r["x"])(s)) continue;
                const f = i[s],
                  h = e[s];
                (f !== h || (u && u(t, s))) &&
                  o(t, s, h, f, l, n.children, a, c, Y);
              }
              if (e !== r["b"])
                for (const u in e)
                  Object(r["x"])(u) ||
                    u in i ||
                    o(t, u, e[u], null, l, n.children, a, c, Y);
            }
          },
          N = (t, n, r, i, o, u, a, l) => {
            const s = (n.el = t ? t.el : c("")),
              f = (n.anchor = t ? t.anchor : c(""));
            let { patchFlag: h, dynamicChildren: p } = n;
            h > 0 && (l = !0),
              null == t
                ? (e(s, r, i), e(f, r, i), E(n.children, r, f, o, u, a, l))
                : h > 0 && 64 & h && p && t.dynamicChildren
                ? (C(t.dynamicChildren, p, r, o, u, a),
                  (null != n.key || (o && n === o.subTree)) && Ce(t, n, !0))
                : q(t, n, r, f, o, u, a, l);
          },
          T = (t, n, e, r, i, o, u, a) => {
            null == t
              ? 512 & n.shapeFlag
                ? i.ctx.activate(n, e, r, u, a)
                : R(n, e, r, i, o, u, a)
              : P(t, n, a);
          },
          R = (t, n, e, r, i, o, u) => {
            const a = (t.component = Sr(t, r, i));
            if ((ee(t) && (a.ctx.renderer = G), Cr(a), a.asyncDep)) {
              if ((i && i.registerDep(a, F), !t.el)) {
                const t = (a.subTree = Xe(Ue));
                w(null, t, n, e);
              }
            } else F(a, t, n, e, i, o, u);
          },
          P = (t, n, e) => {
            const r = (n.component = t.component);
            if (sn(t, n, e)) {
              if (r.asyncDep && !r.asyncResolved) return void U(r, n, e);
              (r.next = n), Yt(r.update), r.update();
            } else (n.component = t.component), (n.el = t.el), (r.vnode = n);
          },
          F = (t, n, e, i, o, u, a) => {
            t.update = s(function () {
              if (t.isMounted) {
                let n,
                  { next: e, bu: i, u: c, parent: l, vnode: s } = t,
                  f = e;
                0,
                  e ? ((e.el = s.el), U(t, e, a)) : (e = s),
                  i && Object(r["m"])(i),
                  (n = e.props && e.props.onVnodeBeforeUpdate) &&
                    Ae(n, l, e, s);
                const h = un(t);
                0;
                const p = t.subTree;
                (t.subTree = h),
                  b(p, h, d(p.el), W(p), t, o, u),
                  (e.el = h.el),
                  null === f && hn(t, h.el),
                  c && je(c, o),
                  (n = e.props && e.props.onVnodeUpdated) &&
                    je(() => {
                      Ae(n, l, e, s);
                    }, o);
              } else {
                let a;
                const { el: c, props: l } = n,
                  { bm: s, m: f, parent: h } = t;
                s && Object(r["m"])(s),
                  (a = l && l.onVnodeBeforeMount) && Ae(a, h, n);
                const p = (t.subTree = un(t));
                if (
                  (c && J
                    ? J(n.el, p, t, o)
                    : (b(null, p, e, i, t, o, u), (n.el = p.el)),
                  f && je(f, o),
                  (a = l && l.onVnodeMounted))
                ) {
                  const t = n;
                  je(() => {
                    Ae(a, h, t);
                  }, o);
                }
                const { a: d } = t;
                d && 256 & n.shapeFlag && je(d, o),
                  (t.isMounted = !0),
                  (n = e = i = null);
              }
            }, Se);
          },
          U = (t, n, e) => {
            n.component = t;
            const r = t.vnode.props;
            (t.vnode = n),
              (t.next = null),
              Mn(t, n.props, r, e),
              ve(t, n.children),
              Xt(void 0, t.update);
          },
          q = (t, n, e, r, i, o, u, a = !1) => {
            const c = t && t.children,
              l = t ? t.shapeFlag : 0,
              s = n.children,
              { patchFlag: f, shapeFlag: h } = n;
            if (f > 0) {
              if (128 & f) return void D(c, s, e, r, i, o, u, a);
              if (256 & f) return void z(c, s, e, r, i, o, u, a);
            }
            8 & h
              ? (16 & l && Y(c, i, o), s !== c && p(e, s))
              : 16 & l
              ? 16 & h
                ? D(c, s, e, r, i, o, u, a)
                : Y(c, i, o, !0)
              : (8 & l && p(e, ""), 16 & h && E(s, e, r, i, o, u, a));
          },
          z = (t, n, e, i, o, u, a, c) => {
            (t = t || r["a"]), (n = n || r["a"]);
            const l = t.length,
              s = n.length,
              f = Math.min(l, s);
            let h;
            for (h = 0; h < f; h++) {
              const r = (n[h] = c ? er(n[h]) : nr(n[h]));
              b(t[h], r, e, null, o, u, a, c);
            }
            l > s ? Y(t, o, u, !0, !1, f) : E(n, e, i, o, u, a, c, f);
          },
          D = (t, n, e, i, o, u, a, c) => {
            let l = 0;
            const s = n.length;
            let f = t.length - 1,
              h = s - 1;
            while (l <= f && l <= h) {
              const r = t[l],
                i = (n[l] = c ? er(n[l]) : nr(n[l]));
              if (!Ye(r, i)) break;
              b(r, i, e, null, o, u, a, c), l++;
            }
            while (l <= f && l <= h) {
              const r = t[f],
                i = (n[h] = c ? er(n[h]) : nr(n[h]));
              if (!Ye(r, i)) break;
              b(r, i, e, null, o, u, a, c), f--, h--;
            }
            if (l > f) {
              if (l <= h) {
                const t = h + 1,
                  r = t < s ? n[t].el : i;
                while (l <= h)
                  b(null, (n[l] = c ? er(n[l]) : nr(n[l])), e, r, o, u, a), l++;
              }
            } else if (l > h) while (l <= f) B(t[l], o, u, !0), l++;
            else {
              const p = l,
                d = l,
                g = new Map();
              for (l = d; l <= h; l++) {
                const t = (n[l] = c ? er(n[l]) : nr(n[l]));
                null != t.key && g.set(t.key, l);
              }
              let v,
                y = 0;
              const m = h - d + 1;
              let x = !1,
                w = 0;
              const M = new Array(m);
              for (l = 0; l < m; l++) M[l] = 0;
              for (l = p; l <= f; l++) {
                const r = t[l];
                if (y >= m) {
                  B(r, o, u, !0);
                  continue;
                }
                let i;
                if (null != r.key) i = g.get(r.key);
                else
                  for (v = d; v <= h; v++)
                    if (0 === M[v - d] && Ye(r, n[v])) {
                      i = v;
                      break;
                    }
                void 0 === i
                  ? B(r, o, u, !0)
                  : ((M[i - d] = l + 1),
                    i >= w ? (w = i) : (x = !0),
                    b(r, n[i], e, null, o, u, a, c),
                    y++);
              }
              const _ = x ? Le(M) : r["a"];
              for (v = _.length - 1, l = m - 1; l >= 0; l--) {
                const t = d + l,
                  r = n[t],
                  c = t + 1 < s ? n[t + 1].el : i;
                0 === M[l]
                  ? b(null, r, e, c, o, u, a)
                  : x && (v < 0 || l !== _[v] ? I(r, e, c, 2) : v--);
              }
            }
          },
          I = (t, n, r, i, o = null) => {
            const {
              el: u,
              type: a,
              transition: c,
              children: l,
              shapeFlag: s
            } = t;
            if (6 & s) return void I(t.component.subTree, n, r, i);
            if (128 & s) return void t.suspense.move(n, r, i);
            if (64 & s) return void a.move(t, n, r, G);
            if (a === Pe) {
              e(u, n, r);
              for (let t = 0; t < l.length; t++) I(l[t], n, r, i);
              return void e(t.anchor, n, r);
            }
            if (a === qe) return void _(t, n, r);
            const f = 2 !== i && 1 & s && c;
            if (f)
              if (0 === i)
                c.beforeEnter(u), e(u, n, r), je(() => c.enter(u), o);
              else {
                const { leave: t, delayLeave: i, afterLeave: o } = c,
                  a = () => e(u, n, r),
                  l = () => {
                    t(u, () => {
                      a(), o && o();
                    });
                  };
                i ? i(u, a, l) : l();
              }
            else e(u, n, r);
          },
          B = (t, n, e, r = !1, i = !1) => {
            const {
              type: o,
              props: u,
              ref: a,
              children: c,
              dynamicChildren: l,
              shapeFlag: s,
              patchFlag: f,
              dirs: h
            } = t;
            if ((null != a && Oe(a, null, e, null), 256 & s))
              return void n.ctx.deactivate(t);
            const p = 1 & s && h;
            let d;
            if (((d = u && u.onVnodeBeforeUnmount) && Ae(d, n, t), 6 & s))
              $(t.component, e, r);
            else {
              if (128 & s) return void t.suspense.unmount(e, r);
              p && me(t, null, n, "beforeUnmount"),
                l && (o !== Pe || (f > 0 && 64 & f))
                  ? Y(l, n, e, !1, !0)
                  : ((o === Pe && (128 & f || 256 & f)) || (!i && 16 & s)) &&
                    Y(c, n, e),
                64 & s && (r || !Te(t.props)) && t.type.remove(t, G),
                r && H(t);
            }
            ((d = u && u.onVnodeUnmounted) || p) &&
              je(() => {
                d && Ae(d, n, t), p && me(t, null, n, "unmounted");
              }, e);
          },
          H = (t) => {
            const { type: n, el: e, anchor: r, transition: o } = t;
            if (n === Pe) return void V(e, r);
            if (n === qe) return void S(t);
            const u = () => {
              i(e), o && !o.persisted && o.afterLeave && o.afterLeave();
            };
            if (1 & t.shapeFlag && o && !o.persisted) {
              const { leave: n, delayLeave: r } = o,
                i = () => n(e, u);
              r ? r(t.el, u, i) : i();
            } else u();
          },
          V = (t, n) => {
            let e;
            while (t !== n) (e = g(t)), i(t), (t = e);
            i(n);
          },
          $ = (t, n, e) => {
            const { bum: i, effects: o, update: u, subTree: a, um: c } = t;
            if ((i && Object(r["m"])(i), o))
              for (let r = 0; r < o.length; r++) f(o[r]);
            u && (f(u), B(a, t, n, e)),
              c && je(c, n),
              je(() => {
                t.isUnmounted = !0;
              }, n),
              n &&
                n.pendingBranch &&
                !n.isUnmounted &&
                t.asyncDep &&
                !t.asyncResolved &&
                t.suspenseId === n.pendingId &&
                (n.deps--, 0 === n.deps && n.resolve());
          },
          Y = (t, n, e, r = !1, i = !1, o = 0) => {
            for (let u = o; u < t.length; u++) B(t[u], n, e, r, i);
          },
          W = (t) =>
            6 & t.shapeFlag
              ? W(t.component.subTree)
              : 128 & t.shapeFlag
              ? t.suspense.next()
              : g(t.anchor || t.el),
          Z = (t, n) => {
            null == t
              ? n._vnode && B(n._vnode, null, null, !0)
              : b(n._vnode || null, t, n),
              Jt(),
              (n._vnode = t);
          },
          G = {
            p: b,
            um: B,
            m: I,
            r: H,
            mt: R,
            mc: E,
            pc: q,
            pbc: C,
            n: W,
            o: t
          };
        let X, J;
        return (
          n && ([X, J] = n(G)),
          {
            render: Z,
            hydrate: X,
            createApp: we(Z, X)
          }
        );
      }
      function Ae(t, n, e, r = null) {
        kt(t, n, 7, [e, r]);
      }
      function Ce(t, n, e = !1) {
        const i = t.children,
          o = n.children;
        if (Object(r["n"])(i) && Object(r["n"])(o))
          for (let r = 0; r < i.length; r++) {
            const t = i[r];
            let n = o[r];
            1 & n.shapeFlag &&
              !n.dynamicChildren &&
              ((n.patchFlag <= 0 || 32 === n.patchFlag) &&
                ((n = o[r] = er(o[r])), (n.el = t.el)),
              e || Ce(t, n));
          }
      }
      function Le(t) {
        const n = t.slice(),
          e = [0];
        let r, i, o, u, a;
        const c = t.length;
        for (r = 0; r < c; r++) {
          const c = t[r];
          if (0 !== c) {
            if (((i = e[e.length - 1]), t[i] < c)) {
              (n[r] = i), e.push(r);
              continue;
            }
            (o = 0), (u = e.length - 1);
            while (o < u)
              (a = ((o + u) / 2) | 0), t[e[a]] < c ? (o = a + 1) : (u = a);
            c < t[e[o]] && (o > 0 && (n[r] = e[o - 1]), (e[o] = r));
          }
        }
        (o = e.length), (u = e[o - 1]);
        while (o-- > 0) (e[o] = u), (u = n[u]);
        return e;
      }
      const Ne = (t) => t.__isTeleport,
        Te = (t) => t && (t.disabled || "" === t.disabled);
      const Re = Symbol();
      const Pe = Symbol(void 0),
        Fe = Symbol(void 0),
        Ue = Symbol(void 0),
        qe = Symbol(void 0),
        ze = [];
      let De = null;
      function Ie(t = !1) {
        ze.push((De = t ? null : []));
      }
      function Be() {
        ze.pop(), (De = ze[ze.length - 1] || null);
      }
      let He = 1;
      function Ve(t, n, e, i, o) {
        const u = Xe(t, n, e, i, o, !0);
        return (
          (u.dynamicChildren = De || r["a"]),
          Be(),
          He > 0 && De && De.push(u),
          u
        );
      }
      function $e(t) {
        return !!t && !0 === t.__v_isVNode;
      }
      function Ye(t, n) {
        return t.type === n.type && t.key === n.key;
      }
      const We = "__vInternal",
        Ze = ({ key: t }) => (null != t ? t : null),
        Ge = ({ ref: t }) =>
          null != t
            ? Object(r["B"])(t) || mt(t) || Object(r["o"])(t)
              ? {
                  i: rn,
                  r: t
                }
              : t
            : null,
        Xe = Je;
      function Je(t, n = null, e = null, i = 0, o = null, u = !1) {
        if (((t && t !== Re) || (t = Ue), $e(t))) {
          const r = Ke(t, n, !0);
          return e && rr(r, e), r;
        }
        if ((Ur(t) && (t = t.__vccOpts), n)) {
          (vt(n) || We in n) && (n = Object(r["h"])({}, n));
          let { class: t, style: e } = n;
          t && !Object(r["B"])(t) && (n.class = Object(r["G"])(t)),
            Object(r["u"])(e) &&
              (vt(e) && !Object(r["n"])(e) && (e = Object(r["h"])({}, e)),
              (n.style = Object(r["H"])(e)));
        }
        const a = Object(r["B"])(t)
          ? 1
          : pn(t)
          ? 128
          : Ne(t)
          ? 64
          : Object(r["u"])(t)
          ? 4
          : Object(r["o"])(t)
          ? 2
          : 0;
        const c = {
          __v_isVNode: !0,
          ["__v_skip"]: !0,
          type: t,
          props: n,
          key: n && Ze(n),
          ref: n && Ge(n),
          scopeId: xn,
          children: null,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: a,
          patchFlag: i,
          dynamicProps: o,
          dynamicChildren: null,
          appContext: null
        };
        if ((rr(c, e), 128 & a)) {
          const { content: t, fallback: n } = dn(c);
          (c.ssContent = t), (c.ssFallback = n);
        }
        return (
          He > 0 && !u && De && (i > 0 || 6 & a) && 32 !== i && De.push(c), c
        );
      }
      function Ke(t, n, e = !1) {
        const { props: i, ref: o, patchFlag: u } = t,
          a = n ? ir(i || {}, n) : i;
        return {
          __v_isVNode: !0,
          ["__v_skip"]: !0,
          type: t.type,
          props: a,
          key: a && Ze(a),
          ref:
            n && n.ref
              ? e && o
                ? Object(r["n"])(o)
                  ? o.concat(Ge(n))
                  : [o, Ge(n)]
                : Ge(n)
              : o,
          scopeId: t.scopeId,
          children: t.children,
          target: t.target,
          targetAnchor: t.targetAnchor,
          staticCount: t.staticCount,
          shapeFlag: t.shapeFlag,
          patchFlag: n && t.type !== Pe ? (-1 === u ? 16 : 16 | u) : u,
          dynamicProps: t.dynamicProps,
          dynamicChildren: t.dynamicChildren,
          appContext: t.appContext,
          dirs: t.dirs,
          transition: t.transition,
          component: t.component,
          suspense: t.suspense,
          ssContent: t.ssContent && Ke(t.ssContent),
          ssFallback: t.ssFallback && Ke(t.ssFallback),
          el: t.el,
          anchor: t.anchor
        };
      }
      function Qe(t = " ", n = 0) {
        return Xe(Fe, null, t, n);
      }
      function tr(t, n) {
        const e = Xe(qe, null, t);
        return (e.staticCount = n), e;
      }
      function nr(t) {
        return null == t || "boolean" === typeof t
          ? Xe(Ue)
          : Object(r["n"])(t)
          ? Xe(Pe, null, t)
          : "object" === typeof t
          ? null === t.el
            ? t
            : Ke(t)
          : Xe(Fe, null, String(t));
      }
      function er(t) {
        return null === t.el ? t : Ke(t);
      }
      function rr(t, n) {
        let e = 0;
        const { shapeFlag: i } = t;
        if (null == n) n = null;
        else if (Object(r["n"])(n)) e = 16;
        else if ("object" === typeof n) {
          if (1 & i || 64 & i) {
            const e = n.default;
            return void (e && (e._c && mn(1), rr(t, e()), e._c && mn(-1)));
          }
          {
            e = 32;
            const r = n._;
            r || We in n
              ? 3 === r &&
                rn &&
                (1024 & rn.vnode.patchFlag
                  ? ((n._ = 2), (t.patchFlag |= 1024))
                  : (n._ = 1))
              : (n._ctx = rn);
          }
        } else
          Object(r["o"])(n)
            ? ((n = {
                default: n,
                _ctx: rn
              }),
              (e = 32))
            : ((n = String(n)), 64 & i ? ((e = 16), (n = [Qe(n)])) : (e = 8));
        (t.children = n), (t.shapeFlag |= e);
      }
      function ir(...t) {
        const n = Object(r["h"])({}, t[0]);
        for (let e = 1; e < t.length; e++) {
          const i = t[e];
          for (const t in i)
            if ("class" === t)
              n.class !== i.class &&
                (n.class = Object(r["G"])([n.class, i.class]));
            else if ("style" === t)
              n.style = Object(r["H"])([n.style, i.style]);
            else if (Object(r["v"])(t)) {
              const e = n[t],
                r = i[t];
              e !== r && (n[t] = e ? [].concat(e, i[t]) : r);
            } else "" !== t && (n[t] = i[t]);
        }
        return n;
      }
      function or(t, n) {
        if (jr) {
          let e = jr.provides;
          const r = jr.parent && jr.parent.provides;
          r === e && (e = jr.provides = Object.create(r)), (e[t] = n);
        } else 0;
      }
      function ur(t, n, e = !1) {
        const i = jr || rn;
        if (i) {
          const o =
            null == i.parent
              ? i.vnode.appContext && i.vnode.appContext.provides
              : i.parent.provides;
          if (o && t in o) return o[t];
          if (arguments.length > 1) return e && Object(r["o"])(n) ? n() : n;
        } else 0;
      }
      let ar = !1;
      function cr(t, n, e = [], i = [], o = [], u = !1) {
        const {
            mixins: a,
            extends: c,
            data: l,
            computed: s,
            methods: f,
            watch: h,
            provide: p,
            inject: d,
            components: g,
            directives: v,
            beforeMount: y,
            mounted: m,
            beforeUpdate: b,
            updated: x,
            activated: w,
            deactivated: M,
            beforeDestroy: _,
            beforeUnmount: S,
            destroyed: j,
            unmounted: O,
            render: k,
            renderTracked: E,
            renderTriggered: A,
            errorCaptured: C,
            expose: L
          } = n,
          N = t.proxy,
          T = t.ctx,
          R = t.appContext.mixins;
        u && k && t.render === r["d"] && (t.render = k),
          u ||
            ((ar = !0),
            lr("beforeCreate", "bc", n, t, R),
            (ar = !1),
            hr(t, R, e, i, o)),
          c && cr(t, c, e, i, o, !0),
          a && hr(t, a, e, i, o);
        if (d)
          if (Object(r["n"])(d))
            for (let r = 0; r < d.length; r++) {
              const t = d[r];
              T[t] = ur(t);
            }
          else
            for (const P in d) {
              const t = d[P];
              Object(r["u"])(t)
                ? (T[P] = ur(t.from || P, t.default, !0))
                : (T[P] = ur(t));
            }
        if (f)
          for (const P in f) {
            const t = f[P];
            Object(r["o"])(t) && (T[P] = t.bind(N));
          }
        if (
          (u
            ? l && e.push(l)
            : (e.length && e.forEach((n) => pr(t, n, N)), l && pr(t, l, N)),
          s)
        )
          for (const P in s) {
            const t = s[P],
              n = Object(r["o"])(t)
                ? t.bind(N, N)
                : Object(r["o"])(t.get)
                ? t.get.bind(N, N)
                : r["d"];
            0;
            const e =
                !Object(r["o"])(t) && Object(r["o"])(t.set)
                  ? t.set.bind(N)
                  : r["d"],
              i = qr({
                get: n,
                set: e
              });
            Object.defineProperty(T, P, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (t) => (i.value = t)
            });
          }
        if (
          (h && i.push(h),
          !u &&
            i.length &&
            i.forEach((t) => {
              for (const n in t) dr(t[n], T, N, n);
            }),
          p && o.push(p),
          !u &&
            o.length &&
            o.forEach((t) => {
              const n = Object(r["o"])(t) ? t.call(N) : t;
              Reflect.ownKeys(n).forEach((t) => {
                or(t, n[t]);
              });
            }),
          u &&
            (g &&
              Object(r["h"])(
                t.components ||
                  (t.components = Object(r["h"])({}, t.type.components)),
                g
              ),
            v &&
              Object(r["h"])(
                t.directives ||
                  (t.directives = Object(r["h"])({}, t.type.directives)),
                v
              )),
          u || lr("created", "c", n, t, R),
          y && Nn(y.bind(N)),
          m && Tn(m.bind(N)),
          b && Rn(b.bind(N)),
          x && Pn(x.bind(N)),
          w && ie(w.bind(N)),
          M && oe(M.bind(N)),
          C && Dn(C.bind(N)),
          E && zn(E.bind(N)),
          A && qn(A.bind(N)),
          S && Fn(S.bind(N)),
          O && Un(O.bind(N)),
          Object(r["n"])(L))
        )
          if (u) 0;
          else if (L.length) {
            const n = t.exposed || (t.exposed = wt({}));
            L.forEach((t) => {
              n[t] = _t(N, t);
            });
          } else t.exposed || (t.exposed = r["b"]);
      }
      function lr(t, n, e, r, i) {
        fr(t, n, i, r);
        const { extends: o, mixins: u } = e;
        o && sr(t, n, o, r), u && fr(t, n, u, r);
        const a = e[t];
        a && kt(a.bind(r.proxy), r, n);
      }
      function sr(t, n, e, r) {
        e.extends && sr(t, n, e.extends, r);
        const i = e[t];
        i && kt(i.bind(r.proxy), r, n);
      }
      function fr(t, n, e, r) {
        for (let i = 0; i < e.length; i++) {
          const o = e[i].mixins;
          o && fr(t, n, o, r);
          const u = e[i][t];
          u && kt(u.bind(r.proxy), r, n);
        }
      }
      function hr(t, n, e, r, i) {
        for (let o = 0; o < n.length; o++) cr(t, n[o], e, r, i, !0);
      }
      function pr(t, n, e) {
        const i = n.call(e, e);
        Object(r["u"])(i) &&
          (t.data === r["b"] ? (t.data = st(i)) : Object(r["h"])(t.data, i));
      }
      function dr(t, n, e, i) {
        const o = i.includes(".") ? gr(e, i) : () => e[i];
        if (Object(r["B"])(t)) {
          const e = n[t];
          Object(r["o"])(e) && Bn(o, e);
        } else if (Object(r["o"])(t)) Bn(o, t.bind(e));
        else if (Object(r["u"])(t))
          if (Object(r["n"])(t)) t.forEach((t) => dr(t, n, e, i));
          else {
            const i = Object(r["o"])(t.handler)
              ? t.handler.bind(e)
              : n[t.handler];
            Object(r["o"])(i) && Bn(o, i, t);
          }
        else 0;
      }
      function gr(t, n) {
        const e = n.split(".");
        return () => {
          let n = t;
          for (let t = 0; t < e.length && n; t++) n = n[e[t]];
          return n;
        };
      }
      function vr(t) {
        const n = t.type,
          { __merged: e, mixins: r, extends: i } = n;
        if (e) return e;
        const o = t.appContext.mixins;
        if (!o.length && !r && !i) return n;
        const u = {};
        return o.forEach((n) => yr(u, n, t)), yr(u, n, t), (n.__merged = u);
      }
      function yr(t, n, e) {
        const i = e.appContext.config.optionMergeStrategies,
          { mixins: o, extends: u } = n;
        u && yr(t, u, e), o && o.forEach((n) => yr(t, n, e));
        for (const a in n)
          i && Object(r["k"])(i, a)
            ? (t[a] = i[a](t[a], n[a], e.proxy, a))
            : (t[a] = n[a]);
      }
      const mr = (t) => t && (t.proxy ? t.proxy : mr(t.parent)),
        br = Object(r["h"])(Object.create(null), {
          $: (t) => t,
          $el: (t) => t.vnode.el,
          $data: (t) => t.data,
          $props: (t) => t.props,
          $attrs: (t) => t.attrs,
          $slots: (t) => t.slots,
          $refs: (t) => t.refs,
          $parent: (t) => mr(t.parent),
          $root: (t) => t.root && t.root.proxy,
          $emit: (t) => t.emit,
          $options: (t) => vr(t),
          $forceUpdate: (t) => () => Vt(t.update),
          $nextTick: (t) => Ht.bind(t.proxy),
          $watch: (t) => Vn.bind(t)
        }),
        xr = {
          get({ _: t }, n) {
            const {
              ctx: e,
              setupState: i,
              data: o,
              props: u,
              accessCache: a,
              type: c,
              appContext: l
            } = t;
            if ("__v_skip" === n) return !0;
            let s;
            if ("$" !== n[0]) {
              const c = a[n];
              if (void 0 !== c)
                switch (c) {
                  case 0:
                    return i[n];
                  case 1:
                    return o[n];
                  case 3:
                    return e[n];
                  case 2:
                    return u[n];
                }
              else {
                if (i !== r["b"] && Object(r["k"])(i, n))
                  return (a[n] = 0), i[n];
                if (o !== r["b"] && Object(r["k"])(o, n))
                  return (a[n] = 1), o[n];
                if ((s = t.propsOptions[0]) && Object(r["k"])(s, n))
                  return (a[n] = 2), u[n];
                if (e !== r["b"] && Object(r["k"])(e, n))
                  return (a[n] = 3), e[n];
                ar || (a[n] = 4);
              }
            }
            const f = br[n];
            let h, p;
            return f
              ? ("$attrs" === n && x(t, "get", n), f(t))
              : (h = c.__cssModules) && (h = h[n])
              ? h
              : e !== r["b"] && Object(r["k"])(e, n)
              ? ((a[n] = 3), e[n])
              : ((p = l.config.globalProperties),
                Object(r["k"])(p, n) ? p[n] : void 0);
          },
          set({ _: t }, n, e) {
            const { data: i, setupState: o, ctx: u } = t;
            if (o !== r["b"] && Object(r["k"])(o, n)) o[n] = e;
            else if (i !== r["b"] && Object(r["k"])(i, n)) i[n] = e;
            else if (n in t.props) return !1;
            return ("$" !== n[0] || !(n.slice(1) in t)) && ((u[n] = e), !0);
          },
          has(
            {
              _: {
                data: t,
                setupState: n,
                accessCache: e,
                ctx: i,
                appContext: o,
                propsOptions: u
              }
            },
            a
          ) {
            let c;
            return (
              void 0 !== e[a] ||
              (t !== r["b"] && Object(r["k"])(t, a)) ||
              (n !== r["b"] && Object(r["k"])(n, a)) ||
              ((c = u[0]) && Object(r["k"])(c, a)) ||
              Object(r["k"])(i, a) ||
              Object(r["k"])(br, a) ||
              Object(r["k"])(o.config.globalProperties, a)
            );
          }
        };
      const wr = Object(r["h"])({}, xr, {
        get(t, n) {
          if (n !== Symbol.unscopables) return xr.get(t, n, t);
        },
        has(t, n) {
          const e = "_" !== n[0] && !Object(r["p"])(n);
          return e;
        }
      });
      const Mr = be();
      let _r = 0;
      function Sr(t, n, e) {
        const i = t.type,
          o = (n ? n.appContext : t.appContext) || Mr,
          u = {
            uid: _r++,
            vnode: t,
            type: i,
            parent: n,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            update: null,
            render: null,
            proxy: null,
            exposed: null,
            withProxy: null,
            effects: null,
            provides: n ? n.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: jn(i, o),
            emitsOptions: nn(i, o),
            emit: null,
            emitted: null,
            ctx: r["b"],
            data: r["b"],
            props: r["b"],
            attrs: r["b"],
            slots: r["b"],
            refs: r["b"],
            setupState: r["b"],
            setupContext: null,
            suspense: e,
            suspenseId: e ? e.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null
          };
        return (
          (u.ctx = {
            _: u
          }),
          (u.root = n ? n.root : u),
          (u.emit = tn.bind(null, u)),
          u
        );
      }
      let jr = null;
      const Or = () => jr || rn,
        kr = (t) => {
          jr = t;
        };
      let Er,
        Ar = !1;
      function Cr(t, n = !1) {
        Ar = n;
        const { props: e, children: r, shapeFlag: i } = t.vnode,
          o = 4 & i;
        wn(t, e, o, n), ge(t, r);
        const u = o ? Lr(t, n) : void 0;
        return (Ar = !1), u;
      }
      function Lr(t, n) {
        const e = t.type;
        (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, xr));
        const { setup: i } = e;
        if (i) {
          const e = (t.setupContext = i.length > 1 ? Rr(t) : null);
          (jr = t), y();
          const o = Ot(i, t, 0, [t.props, e]);
          if ((b(), (jr = null), Object(r["w"])(o))) {
            if (n)
              return o.then((n) => {
                Nr(t, n);
              });
            t.asyncDep = o;
          } else Nr(t, o);
        } else Tr(t);
      }
      function Nr(t, n, e) {
        Object(r["o"])(n)
          ? (t.render = n)
          : Object(r["u"])(n) && (t.setupState = wt(n)),
          Tr(t);
      }
      function Tr(t, n) {
        const e = t.type;
        t.render ||
          (Er &&
            e.template &&
            !e.render &&
            (e.render = Er(e.template, {
              isCustomElement: t.appContext.config.isCustomElement,
              delimiters: e.delimiters
            })),
          (t.render = e.render || r["d"]),
          t.render._rc && (t.withProxy = new Proxy(t.ctx, wr))),
          (jr = t),
          y(),
          cr(t, e),
          b(),
          (jr = null);
      }
      function Rr(t) {
        const n = (n) => {
          t.exposed = wt(n);
        };
        return {
          attrs: t.attrs,
          slots: t.slots,
          emit: t.emit,
          expose: n
        };
      }
      function Pr(t, n = jr) {
        n && (n.effects || (n.effects = [])).push(t);
      }
      function Fr(t) {
        return (Object(r["o"])(t) && t.displayName) || t.name;
      }
      function Ur(t) {
        return Object(r["o"])(t) && "__vccOpts" in t;
      }
      function qr(t) {
        const n = jt(t);
        return Pr(n.effect), n;
      }
      function zr(t, n, e) {
        const i = arguments.length;
        return 2 === i
          ? Object(r["u"])(n) && !Object(r["n"])(n)
            ? $e(n)
              ? Xe(t, null, [n])
              : Xe(t, n)
            : Xe(t, null, n)
          : (i > 3
              ? (e = Array.prototype.slice.call(arguments, 2))
              : 3 === i && $e(e) && (e = [e]),
            Xe(t, n, e));
      }
      Symbol("");
      function Dr(t, n) {
        let e;
        if (Object(r["n"])(t) || Object(r["B"])(t)) {
          e = new Array(t.length);
          for (let r = 0, i = t.length; r < i; r++) e[r] = n(t[r], r);
        } else if ("number" === typeof t) {
          0, (e = new Array(t));
          for (let r = 0; r < t; r++) e[r] = n(r + 1, r);
        } else if (Object(r["u"])(t))
          if (t[Symbol.iterator]) e = Array.from(t, n);
          else {
            const r = Object.keys(t);
            e = new Array(r.length);
            for (let i = 0, o = r.length; i < o; i++) {
              const o = r[i];
              e[i] = n(t[o], o, i);
            }
          }
        else e = [];
        return e;
      }
      const Ir = "3.0.5",
        Br = "http://www.w3.org/2000/svg",
        Hr = "undefined" !== typeof document ? document : null;
      let Vr, $r;
      const Yr = {
        insert: (t, n, e) => {
          n.insertBefore(t, e || null);
        },
        remove: (t) => {
          const n = t.parentNode;
          n && n.removeChild(t);
        },
        createElement: (t, n, e) =>
          n
            ? Hr.createElementNS(Br, t)
            : Hr.createElement(
                t,
                e
                  ? {
                      is: e
                    }
                  : void 0
              ),
        createText: (t) => Hr.createTextNode(t),
        createComment: (t) => Hr.createComment(t),
        setText: (t, n) => {
          t.nodeValue = n;
        },
        setElementText: (t, n) => {
          t.textContent = n;
        },
        parentNode: (t) => t.parentNode,
        nextSibling: (t) => t.nextSibling,
        querySelector: (t) => Hr.querySelector(t),
        setScopeId(t, n) {
          t.setAttribute(n, "");
        },
        cloneNode(t) {
          return t.cloneNode(!0);
        },
        insertStaticContent(t, n, e, r) {
          const i = r
            ? $r || ($r = Hr.createElementNS(Br, "svg"))
            : Vr || (Vr = Hr.createElement("div"));
          i.innerHTML = t;
          const o = i.firstChild;
          let u = o,
            a = u;
          while (u) (a = u), Yr.insert(u, n, e), (u = i.firstChild);
          return [o, a];
        }
      };
      function Wr(t, n, e) {
        if ((null == n && (n = ""), e)) t.setAttribute("class", n);
        else {
          const e = t._vtc;
          e && (n = (n ? [n, ...e] : [...e]).join(" ")), (t.className = n);
        }
      }
      function Zr(t, n, e) {
        const i = t.style;
        if (e)
          if (Object(r["B"])(e)) n !== e && (i.cssText = e);
          else {
            for (const t in e) Xr(i, t, e[t]);
            if (n && !Object(r["B"])(n))
              for (const t in n) null == e[t] && Xr(i, t, "");
          }
        else t.removeAttribute("style");
      }
      const Gr = /\s*!important$/;
      function Xr(t, n, e) {
        if (Object(r["n"])(e)) e.forEach((e) => Xr(t, n, e));
        else if (n.startsWith("--")) t.setProperty(n, e);
        else {
          const i = Qr(t, n);
          Gr.test(e)
            ? t.setProperty(Object(r["l"])(i), e.replace(Gr, ""), "important")
            : (t[i] = e);
        }
      }
      const Jr = ["Webkit", "Moz", "ms"],
        Kr = {};
      function Qr(t, n) {
        const e = Kr[n];
        if (e) return e;
        let i = Object(r["e"])(n);
        if ("filter" !== i && i in t) return (Kr[n] = i);
        i = Object(r["f"])(i);
        for (let r = 0; r < Jr.length; r++) {
          const e = Jr[r] + i;
          if (e in t) return (Kr[n] = e);
        }
        return n;
      }
      const ti = "http://www.w3.org/1999/xlink";
      function ni(t, n, e, i) {
        if (i && n.startsWith("xlink:"))
          null == e
            ? t.removeAttributeNS(ti, n.slice(6, n.length))
            : t.setAttributeNS(ti, n, e);
        else {
          const i = Object(r["A"])(n);
          null == e || (i && !1 === e)
            ? t.removeAttribute(n)
            : t.setAttribute(n, i ? "" : e);
        }
      }
      function ei(t, n, e, r, i, o, u) {
        if ("innerHTML" === n || "textContent" === n)
          return r && u(r, i, o), void (t[n] = null == e ? "" : e);
        if ("value" !== n || "PROGRESS" === t.tagName) {
          if ("" === e || null == e) {
            const r = typeof t[n];
            if ("" === e && "boolean" === r) return void (t[n] = !0);
            if (null == e && "string" === r)
              return (t[n] = ""), void t.removeAttribute(n);
            if ("number" === r) return (t[n] = 0), void t.removeAttribute(n);
          }
          try {
            t[n] = e;
          } catch (a) {
            0;
          }
        } else {
          t._value = e;
          const n = null == e ? "" : e;
          t.value !== n && (t.value = n);
        }
      }
      let ri = Date.now;
      "undefined" !== typeof document &&
        ri() > document.createEvent("Event").timeStamp &&
        (ri = () => performance.now());
      let ii = 0;
      const oi = Promise.resolve(),
        ui = () => {
          ii = 0;
        },
        ai = () => ii || (oi.then(ui), (ii = ri()));
      function ci(t, n, e, r) {
        t.addEventListener(n, e, r);
      }
      function li(t, n, e, r) {
        t.removeEventListener(n, e, r);
      }
      function si(t, n, e, r, i = null) {
        const o = t._vei || (t._vei = {}),
          u = o[n];
        if (r && u) u.value = r;
        else {
          const [e, a] = hi(n);
          if (r) {
            const u = (o[n] = pi(r, i));
            ci(t, e, u, a);
          } else u && (li(t, e, u, a), (o[n] = void 0));
        }
      }
      const fi = /(?:Once|Passive|Capture)$/;
      function hi(t) {
        let n;
        if (fi.test(t)) {
          let e;
          n = {};
          while ((e = t.match(fi)))
            (t = t.slice(0, t.length - e[0].length)),
              (n[e[0].toLowerCase()] = !0);
        }
        return [t.slice(2).toLowerCase(), n];
      }
      function pi(t, n) {
        const e = (t) => {
          const r = t.timeStamp || ri();
          r >= e.attached - 1 && kt(di(t, e.value), n, 5, [t]);
        };
        return (e.value = t), (e.attached = ai()), e;
      }
      function di(t, n) {
        if (Object(r["n"])(n)) {
          const e = t.stopImmediatePropagation;
          return (
            (t.stopImmediatePropagation = () => {
              e.call(t), (t._stopped = !0);
            }),
            n.map((t) => (n) => !n._stopped && t(n))
          );
        }
        return n;
      }
      const gi = /^on[a-z]/,
        vi = (t, n) => "value" === n,
        yi = (t, n, e, i, o = !1, u, a, c, l) => {
          switch (n) {
            case "class":
              Wr(t, i, o);
              break;
            case "style":
              Zr(t, e, i);
              break;
            default:
              Object(r["v"])(n)
                ? Object(r["t"])(n) || si(t, n, e, i, a)
                : mi(t, n, i, o)
                ? ei(t, n, i, u, a, c, l)
                : ("true-value" === n
                    ? (t._trueValue = i)
                    : "false-value" === n && (t._falseValue = i),
                  ni(t, n, i, o));
              break;
          }
        };
      function mi(t, n, e, i) {
        return i
          ? "innerHTML" === n || !!(n in t && gi.test(n) && Object(r["o"])(e))
          : "spellcheck" !== n &&
              "draggable" !== n &&
              ("form" !== n || "string" !== typeof e) &&
              ("list" !== n || "INPUT" !== t.tagName) &&
              (!gi.test(n) || !Object(r["B"])(e)) &&
              n in t;
      }
      const bi = "transition",
        xi = "animation",
        wi = (t, { slots: n }) => zr(Gn, _i(t), n);
      wi.displayName = "Transition";
      const Mi = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      wi.props = Object(r["h"])({}, Gn.props, Mi);
      function _i(t) {
        let {
          name: n = "v",
          type: e,
          css: i = !0,
          duration: o,
          enterFromClass: u = n + "-enter-from",
          enterActiveClass: a = n + "-enter-active",
          enterToClass: c = n + "-enter-to",
          appearFromClass: l = u,
          appearActiveClass: s = a,
          appearToClass: f = c,
          leaveFromClass: h = n + "-leave-from",
          leaveActiveClass: p = n + "-leave-active",
          leaveToClass: d = n + "-leave-to"
        } = t;
        const g = {};
        for (const r in t) r in Mi || (g[r] = t[r]);
        if (!i) return g;
        const v = Si(o),
          y = v && v[0],
          m = v && v[1],
          {
            onBeforeEnter: b,
            onEnter: x,
            onEnterCancelled: w,
            onLeave: M,
            onLeaveCancelled: _,
            onBeforeAppear: S = b,
            onAppear: j = x,
            onAppearCancelled: O = w
          } = g,
          k = (t, n, e) => {
            ki(t, n ? f : c), ki(t, n ? s : a), e && e();
          },
          E = (t, n) => {
            ki(t, d), ki(t, p), n && n();
          },
          A = (t) => (n, r) => {
            const i = t ? j : x,
              o = () => k(n, t, r);
            i && i(n, o),
              Ei(() => {
                ki(n, t ? l : u),
                  Oi(n, t ? f : c),
                  (i && i.length > 1) || Ci(n, e, y, o);
              });
          };
        return Object(r["h"])(g, {
          onBeforeEnter(t) {
            b && b(t), Oi(t, u), Oi(t, a);
          },
          onBeforeAppear(t) {
            S && S(t), Oi(t, l), Oi(t, s);
          },
          onEnter: A(!1),
          onAppear: A(!0),
          onLeave(t, n) {
            const r = () => E(t, n);
            Oi(t, h),
              Ri(),
              Oi(t, p),
              Ei(() => {
                ki(t, h), Oi(t, d), (M && M.length > 1) || Ci(t, e, m, r);
              }),
              M && M(t, r);
          },
          onEnterCancelled(t) {
            k(t, !1), w && w(t);
          },
          onAppearCancelled(t) {
            k(t, !0), O && O(t);
          },
          onLeaveCancelled(t) {
            E(t), _ && _(t);
          }
        });
      }
      function Si(t) {
        if (null == t) return null;
        if (Object(r["u"])(t)) return [ji(t.enter), ji(t.leave)];
        {
          const n = ji(t);
          return [n, n];
        }
      }
      function ji(t) {
        const n = Object(r["L"])(t);
        return n;
      }
      function Oi(t, n) {
        n.split(/\s+/).forEach((n) => n && t.classList.add(n)),
          (t._vtc || (t._vtc = new Set())).add(n);
      }
      function ki(t, n) {
        n.split(/\s+/).forEach((n) => n && t.classList.remove(n));
        const { _vtc: e } = t;
        e && (e.delete(n), e.size || (t._vtc = void 0));
      }
      function Ei(t) {
        requestAnimationFrame(() => {
          requestAnimationFrame(t);
        });
      }
      let Ai = 0;
      function Ci(t, n, e, r) {
        const i = (t._endId = ++Ai),
          o = () => {
            i === t._endId && r();
          };
        if (e) return setTimeout(o, e);
        const { type: u, timeout: a, propCount: c } = Li(t, n);
        if (!u) return r();
        const l = u + "end";
        let s = 0;
        const f = () => {
            t.removeEventListener(l, h), o();
          },
          h = (n) => {
            n.target === t && ++s >= c && f();
          };
        setTimeout(() => {
          s < c && f();
        }, a + 1),
          t.addEventListener(l, h);
      }
      function Li(t, n) {
        const e = window.getComputedStyle(t),
          r = (t) => (e[t] || "").split(", "),
          i = r(bi + "Delay"),
          o = r(bi + "Duration"),
          u = Ni(i, o),
          a = r(xi + "Delay"),
          c = r(xi + "Duration"),
          l = Ni(a, c);
        let s = null,
          f = 0,
          h = 0;
        n === bi
          ? u > 0 && ((s = bi), (f = u), (h = o.length))
          : n === xi
          ? l > 0 && ((s = xi), (f = l), (h = c.length))
          : ((f = Math.max(u, l)),
            (s = f > 0 ? (u > l ? bi : xi) : null),
            (h = s ? (s === bi ? o.length : c.length) : 0));
        const p = s === bi && /\b(transform|all)(,|$)/.test(e[bi + "Property"]);
        return {
          type: s,
          timeout: f,
          propCount: h,
          hasTransform: p
        };
      }
      function Ni(t, n) {
        while (t.length < n.length) t = t.concat(t);
        return Math.max(...n.map((n, e) => Ti(n) + Ti(t[e])));
      }
      function Ti(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."));
      }
      function Ri() {
        return document.body.offsetHeight;
      }
      new WeakMap(), new WeakMap();
      const Pi = (t) => {
        const n = t.props["onUpdate:modelValue"];
        return Object(r["n"])(n) ? (t) => Object(r["m"])(n, t) : n;
      };
      function Fi(t) {
        t.target.composing = !0;
      }
      function Ui(t) {
        const n = t.target;
        n.composing && ((n.composing = !1), qi(n, "input"));
      }
      function qi(t, n) {
        const e = document.createEvent("HTMLEvents");
        e.initEvent(n, !0, !0), t.dispatchEvent(e);
      }
      const zi = {
        created(t, { modifiers: { lazy: n, trim: e, number: i } }, o) {
          t._assign = Pi(o);
          const u = i || "number" === t.type;
          ci(t, n ? "change" : "input", (n) => {
            if (n.target.composing) return;
            let i = t.value;
            e ? (i = i.trim()) : u && (i = Object(r["L"])(i)), t._assign(i);
          }),
            e &&
              ci(t, "change", () => {
                t.value = t.value.trim();
              }),
            n ||
              (ci(t, "compositionstart", Fi),
              ci(t, "compositionend", Ui),
              ci(t, "change", Ui));
        },
        mounted(t, { value: n }) {
          t.value = null == n ? "" : n;
        },
        beforeUpdate(t, { value: n, modifiers: { trim: e, number: i } }, o) {
          if (((t._assign = Pi(o)), t.composing)) return;
          if (document.activeElement === t) {
            if (e && t.value.trim() === n) return;
            if ((i || "number" === t.type) && Object(r["L"])(t.value) === n)
              return;
          }
          const u = null == n ? "" : n;
          t.value !== u && (t.value = u);
        }
      };
      const Di = Object(r["h"])(
        {
          patchProp: yi,
          forcePatchProp: vi
        },
        Yr
      );
      let Ii;
      function Bi() {
        return Ii || (Ii = ke(Di));
      }
      const Hi = (...t) => {
        const n = Bi().createApp(...t);
        const { mount: e } = n;
        return (
          (n.mount = (t) => {
            const i = Vi(t);
            if (!i) return;
            const o = n._component;
            Object(r["o"])(o) ||
              o.render ||
              o.template ||
              (o.template = i.innerHTML),
              (i.innerHTML = "");
            const u = e(i);
            return (
              i instanceof Element &&
                (i.removeAttribute("v-cloak"),
                i.setAttribute("data-v-app", "")),
              u
            );
          }),
          n
        );
      };
      function Vi(t) {
        if (Object(r["B"])(t)) {
          const n = document.querySelector(t);
          return n;
        }
        return t;
      }
    },
    "7b0b": function (t, n, e) {
      var r = e("1d80");
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    "7c73": function (t, n, e) {
      var r,
        i = e("825a"),
        o = e("37e8"),
        u = e("7839"),
        a = e("d012"),
        c = e("1be4"),
        l = e("cc12"),
        s = e("f772"),
        f = ">",
        h = "<",
        p = "prototype",
        d = "script",
        g = s("IE_PROTO"),
        v = function () {},
        y = function (t) {
          return h + d + f + t + h + "/" + d + f;
        },
        m = function (t) {
          t.write(y("")), t.close();
          var n = t.parentWindow.Object;
          return (t = null), n;
        },
        b = function () {
          var t,
            n = l("iframe"),
            e = "java" + d + ":";
          return (
            (n.style.display = "none"),
            c.appendChild(n),
            (n.src = String(e)),
            (t = n.contentWindow.document),
            t.open(),
            t.write(y("document.F=Object")),
            t.close(),
            t.F
          );
        },
        x = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (n) {}
          x = r ? m(r) : b();
          var t = u.length;
          while (t--) delete x[p][u[t]];
          return x();
        };
      (a[g] = !0),
        (t.exports =
          Object.create ||
          function (t, n) {
            var e;
            return (
              null !== t
                ? ((v[p] = i(t)), (e = new v()), (v[p] = null), (e[g] = t))
                : (e = x()),
              void 0 === n ? e : o(e, n)
            );
          });
    },
    "7dd0": function (t, n, e) {
      "use strict";
      var r = e("23e7"),
        i = e("9ed3"),
        o = e("e163"),
        u = e("d2bb"),
        a = e("d44e"),
        c = e("9112"),
        l = e("6eeb"),
        s = e("b622"),
        f = e("c430"),
        h = e("3f8c"),
        p = e("ae93"),
        d = p.IteratorPrototype,
        g = p.BUGGY_SAFARI_ITERATORS,
        v = s("iterator"),
        y = "keys",
        m = "values",
        b = "entries",
        x = function () {
          return this;
        };
      t.exports = function (t, n, e, s, p, w, M) {
        i(e, n, s);
        var _,
          S,
          j,
          O = function (t) {
            if (t === p && L) return L;
            if (!g && t in A) return A[t];
            switch (t) {
              case y:
                return function () {
                  return new e(this, t);
                };
              case m:
                return function () {
                  return new e(this, t);
                };
              case b:
                return function () {
                  return new e(this, t);
                };
            }
            return function () {
              return new e(this);
            };
          },
          k = n + " Iterator",
          E = !1,
          A = t.prototype,
          C = A[v] || A["@@iterator"] || (p && A[p]),
          L = (!g && C) || O(p),
          N = ("Array" == n && A.entries) || C;
        if (
          (N &&
            ((_ = o(N.call(new t()))),
            d !== Object.prototype &&
              _.next &&
              (f ||
                o(_) === d ||
                (u ? u(_, d) : "function" != typeof _[v] && c(_, v, x)),
              a(_, k, !0, !0),
              f && (h[k] = x))),
          p == m &&
            C &&
            C.name !== m &&
            ((E = !0),
            (L = function () {
              return C.call(this);
            })),
          (f && !M) || A[v] === L || c(A, v, L),
          (h[n] = L),
          p)
        )
          if (
            ((S = {
              values: O(m),
              keys: w ? L : O(y),
              entries: O(b)
            }),
            M)
          )
            for (j in S) (g || E || !(j in A)) && l(A, j, S[j]);
          else
            r(
              {
                target: n,
                proto: !0,
                forced: g || E
              },
              S
            );
        return S;
      };
    },
    "7f9a": function (t, n, e) {
      var r = e("da84"),
        i = e("8925"),
        o = r.WeakMap;
      t.exports = "function" === typeof o && /native code/.test(i(o));
    },
    "825a": function (t, n, e) {
      var r = e("861d");
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    "83ab": function (t, n, e) {
      var r = e("d039");
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1]
        );
      });
    },
    8418: function (t, n, e) {
      "use strict";
      var r = e("c04e"),
        i = e("9bf2"),
        o = e("5c6c");
      t.exports = function (t, n, e) {
        var u = r(n);
        u in t ? i.f(t, u, o(0, e)) : (t[u] = e);
      };
    },
    "861d": function (t, n) {
      t.exports = function (t) {
        return "object" === typeof t ? null !== t : "function" === typeof t;
      };
    },
    8925: function (t, n, e) {
      var r = e("c6cd"),
        i = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (t) {
          return i.call(t);
        }),
        (t.exports = r.inspectSource);
    },
    "90e3": function (t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++e + r).toString(36)
        );
      };
    },
    9112: function (t, n, e) {
      var r = e("83ab"),
        i = e("9bf2"),
        o = e("5c6c");
      t.exports = r
        ? function (t, n, e) {
            return i.f(t, n, o(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    "94ca": function (t, n, e) {
      var r = e("d039"),
        i = /#|\.prototype\./,
        o = function (t, n) {
          var e = a[u(t)];
          return e == l || (e != c && ("function" == typeof n ? r(n) : !!n));
        },
        u = (o.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        a = (o.data = {}),
        c = (o.NATIVE = "N"),
        l = (o.POLYFILL = "P");
      t.exports = o;
    },
    9861: function (t, n, e) {
      "use strict";
      e("e260");
      var r = e("23e7"),
        i = e("d066"),
        o = e("0d3b"),
        u = e("6eeb"),
        a = e("e2cc"),
        c = e("d44e"),
        l = e("9ed3"),
        s = e("69f3"),
        f = e("19aa"),
        h = e("5135"),
        p = e("0366"),
        d = e("f5df"),
        g = e("825a"),
        v = e("861d"),
        y = e("7c73"),
        m = e("5c6c"),
        b = e("9a1f"),
        x = e("35a1"),
        w = e("b622"),
        M = i("fetch"),
        _ = i("Headers"),
        S = w("iterator"),
        j = "URLSearchParams",
        O = j + "Iterator",
        k = s.set,
        E = s.getterFor(j),
        A = s.getterFor(O),
        C = /\+/g,
        L = Array(4),
        N = function (t) {
          return (
            L[t - 1] ||
            (L[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
          );
        },
        T = function (t) {
          try {
            return decodeURIComponent(t);
          } catch (n) {
            return t;
          }
        },
        R = function (t) {
          var n = t.replace(C, " "),
            e = 4;
          try {
            return decodeURIComponent(n);
          } catch (r) {
            while (e) n = n.replace(N(e--), T);
            return n;
          }
        },
        P = /[!'()~]|%20/g,
        F = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+"
        },
        U = function (t) {
          return F[t];
        },
        q = function (t) {
          return encodeURIComponent(t).replace(P, U);
        },
        z = function (t, n) {
          if (n) {
            var e,
              r,
              i = n.split("&"),
              o = 0;
            while (o < i.length)
              (e = i[o++]),
                e.length &&
                  ((r = e.split("=")),
                  t.push({
                    key: R(r.shift()),
                    value: R(r.join("="))
                  }));
          }
        },
        D = function (t) {
          (this.entries.length = 0), z(this.entries, t);
        },
        I = function (t, n) {
          if (t < n) throw TypeError("Not enough arguments");
        },
        B = l(
          function (t, n) {
            k(this, {
              type: O,
              iterator: b(E(t).entries),
              kind: n
            });
          },
          "Iterator",
          function () {
            var t = A(this),
              n = t.kind,
              e = t.iterator.next(),
              r = e.value;
            return (
              e.done ||
                (e.value =
                  "keys" === n
                    ? r.key
                    : "values" === n
                    ? r.value
                    : [r.key, r.value]),
              e
            );
          }
        ),
        H = function () {
          f(this, H, j);
          var t,
            n,
            e,
            r,
            i,
            o,
            u,
            a,
            c,
            l = arguments.length > 0 ? arguments[0] : void 0,
            s = this,
            p = [];
          if (
            (k(s, {
              type: j,
              entries: p,
              updateURL: function () {},
              updateSearchParams: D
            }),
            void 0 !== l)
          )
            if (v(l))
              if (((t = x(l)), "function" === typeof t)) {
                (n = t.call(l)), (e = n.next);
                while (!(r = e.call(n)).done) {
                  if (
                    ((i = b(g(r.value))),
                    (o = i.next),
                    (u = o.call(i)).done ||
                      (a = o.call(i)).done ||
                      !o.call(i).done)
                  )
                    throw TypeError("Expected sequence with length 2");
                  p.push({
                    key: u.value + "",
                    value: a.value + ""
                  });
                }
              } else
                for (c in l)
                  h(l, c) &&
                    p.push({
                      key: c,
                      value: l[c] + ""
                    });
            else
              z(
                p,
                "string" === typeof l
                  ? "?" === l.charAt(0)
                    ? l.slice(1)
                    : l
                  : l + ""
              );
        },
        V = H.prototype;
      a(
        V,
        {
          append: function (t, n) {
            I(arguments.length, 2);
            var e = E(this);
            e.entries.push({
              key: t + "",
              value: n + ""
            }),
              e.updateURL();
          },
          delete: function (t) {
            I(arguments.length, 1);
            var n = E(this),
              e = n.entries,
              r = t + "",
              i = 0;
            while (i < e.length) e[i].key === r ? e.splice(i, 1) : i++;
            n.updateURL();
          },
          get: function (t) {
            I(arguments.length, 1);
            for (var n = E(this).entries, e = t + "", r = 0; r < n.length; r++)
              if (n[r].key === e) return n[r].value;
            return null;
          },
          getAll: function (t) {
            I(arguments.length, 1);
            for (
              var n = E(this).entries, e = t + "", r = [], i = 0;
              i < n.length;
              i++
            )
              n[i].key === e && r.push(n[i].value);
            return r;
          },
          has: function (t) {
            I(arguments.length, 1);
            var n = E(this).entries,
              e = t + "",
              r = 0;
            while (r < n.length) if (n[r++].key === e) return !0;
            return !1;
          },
          set: function (t, n) {
            I(arguments.length, 1);
            for (
              var e,
                r = E(this),
                i = r.entries,
                o = !1,
                u = t + "",
                a = n + "",
                c = 0;
              c < i.length;
              c++
            )
              (e = i[c]),
                e.key === u &&
                  (o ? i.splice(c--, 1) : ((o = !0), (e.value = a)));
            o ||
              i.push({
                key: u,
                value: a
              }),
              r.updateURL();
          },
          sort: function () {
            var t,
              n,
              e,
              r = E(this),
              i = r.entries,
              o = i.slice();
            for (i.length = 0, e = 0; e < o.length; e++) {
              for (t = o[e], n = 0; n < e; n++)
                if (i[n].key > t.key) {
                  i.splice(n, 0, t);
                  break;
                }
              n === e && i.push(t);
            }
            r.updateURL();
          },
          forEach: function (t) {
            var n,
              e = E(this).entries,
              r = p(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            while (i < e.length) (n = e[i++]), r(n.value, n.key, this);
          },
          keys: function () {
            return new B(this, "keys");
          },
          values: function () {
            return new B(this, "values");
          },
          entries: function () {
            return new B(this, "entries");
          }
        },
        {
          enumerable: !0
        }
      ),
        u(V, S, V.entries),
        u(
          V,
          "toString",
          function () {
            var t,
              n = E(this).entries,
              e = [],
              r = 0;
            while (r < n.length)
              (t = n[r++]), e.push(q(t.key) + "=" + q(t.value));
            return e.join("&");
          },
          {
            enumerable: !0
          }
        ),
        c(H, j),
        r(
          {
            global: !0,
            forced: !o
          },
          {
            URLSearchParams: H
          }
        ),
        o ||
          "function" != typeof M ||
          "function" != typeof _ ||
          r(
            {
              global: !0,
              enumerable: !0,
              forced: !0
            },
            {
              fetch: function (t) {
                var n,
                  e,
                  r,
                  i = [t];
                return (
                  arguments.length > 1 &&
                    ((n = arguments[1]),
                    v(n) &&
                      ((e = n.body),
                      d(e) === j &&
                        ((r = n.headers ? new _(n.headers) : new _()),
                        r.has("content-type") ||
                          r.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ),
                        (n = y(n, {
                          body: m(0, String(e)),
                          headers: m(0, r)
                        })))),
                    i.push(n)),
                  M.apply(this, i)
                );
              }
            }
          ),
        (t.exports = {
          URLSearchParams: H,
          getState: E
        });
    },
    "9a1f": function (t, n, e) {
      var r = e("825a"),
        i = e("35a1");
      t.exports = function (t) {
        var n = i(t);
        if ("function" != typeof n)
          throw TypeError(String(t) + " is not iterable");
        return r(n.call(t));
      };
    },
    "9bdd": function (t, n, e) {
      var r = e("825a"),
        i = e("2a62");
      t.exports = function (t, n, e, o) {
        try {
          return o ? n(r(e)[0], e[1]) : n(e);
        } catch (u) {
          throw (i(t), u);
        }
      };
    },
    "9bf2": function (t, n, e) {
      var r = e("83ab"),
        i = e("0cfb"),
        o = e("825a"),
        u = e("c04e"),
        a = Object.defineProperty;
      n.f = r
        ? a
        : function (t, n, e) {
            if ((o(t), (n = u(n, !0)), o(e), i))
              try {
                return a(t, n, e);
              } catch (r) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    "9ed3": function (t, n, e) {
      "use strict";
      var r = e("ae93").IteratorPrototype,
        i = e("7c73"),
        o = e("5c6c"),
        u = e("d44e"),
        a = e("3f8c"),
        c = function () {
          return this;
        };
      t.exports = function (t, n, e) {
        var l = n + " Iterator";
        return (
          (t.prototype = i(r, {
            next: o(1, e)
          })),
          u(t, l, !1, !0),
          (a[l] = c),
          t
        );
      };
    },
    "9ff4": function (t, n, e) {
      "use strict";
      (function (t) {
        function r(t, n) {
          const e = Object.create(null),
            r = t.split(",");
          for (let i = 0; i < r.length; i++) e[r[i]] = !0;
          return n ? (t) => !!e[t.toLowerCase()] : (t) => !!e[t];
        }
        e.d(n, "a", function () {
          return _;
        }),
          e.d(n, "b", function () {
            return M;
          }),
          e.d(n, "c", function () {
            return j;
          }),
          e.d(n, "d", function () {
            return S;
          }),
          e.d(n, "e", function () {
            return X;
          }),
          e.d(n, "f", function () {
            return Q;
          }),
          e.d(n, "g", function () {
            return rt;
          }),
          e.d(n, "h", function () {
            return A;
          }),
          e.d(n, "i", function () {
            return ut;
          }),
          e.d(n, "j", function () {
            return nt;
          }),
          e.d(n, "k", function () {
            return N;
          }),
          e.d(n, "l", function () {
            return K;
          }),
          e.d(n, "m", function () {
            return et;
          }),
          e.d(n, "n", function () {
            return T;
          }),
          e.d(n, "o", function () {
            return U;
          }),
          e.d(n, "p", function () {
            return o;
          }),
          e.d(n, "q", function () {
            return g;
          }),
          e.d(n, "r", function () {
            return Y;
          }),
          e.d(n, "s", function () {
            return R;
          }),
          e.d(n, "t", function () {
            return E;
          }),
          e.d(n, "u", function () {
            return D;
          }),
          e.d(n, "v", function () {
            return k;
          }),
          e.d(n, "w", function () {
            return I;
          }),
          e.d(n, "x", function () {
            return W;
          }),
          e.d(n, "y", function () {
            return v;
          }),
          e.d(n, "z", function () {
            return P;
          }),
          e.d(n, "A", function () {
            return a;
          }),
          e.d(n, "B", function () {
            return q;
          }),
          e.d(n, "C", function () {
            return z;
          }),
          e.d(n, "D", function () {
            return m;
          }),
          e.d(n, "E", function () {
            return b;
          }),
          e.d(n, "F", function () {
            return r;
          }),
          e.d(n, "G", function () {
            return h;
          }),
          e.d(n, "H", function () {
            return c;
          }),
          e.d(n, "I", function () {
            return C;
          }),
          e.d(n, "J", function () {
            return x;
          }),
          e.d(n, "K", function () {
            return tt;
          }),
          e.d(n, "L", function () {
            return it;
          }),
          e.d(n, "M", function () {
            return V;
          });
        const i =
            "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl",
          o = r(i);
        const u =
            "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
          a = r(u);
        function c(t) {
          if (T(t)) {
            const n = {};
            for (let e = 0; e < t.length; e++) {
              const r = t[e],
                i = c(q(r) ? f(r) : r);
              if (i) for (const t in i) n[t] = i[t];
            }
            return n;
          }
          if (D(t)) return t;
        }
        const l = /;(?![^(]*\))/g,
          s = /:(.+)/;
        function f(t) {
          const n = {};
          return (
            t.split(l).forEach((t) => {
              if (t) {
                const e = t.split(s);
                e.length > 1 && (n[e[0].trim()] = e[1].trim());
              }
            }),
            n
          );
        }
        function h(t) {
          let n = "";
          if (q(t)) n = t;
          else if (T(t)) for (let e = 0; e < t.length; e++) n += h(t[e]) + " ";
          else if (D(t)) for (const e in t) t[e] && (n += e + " ");
          return n.trim();
        }
        const p =
            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
          d =
            "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
          g = r(p),
          v = r(d);
        function y(t, n) {
          if (t.length !== n.length) return !1;
          let e = !0;
          for (let r = 0; e && r < t.length; r++) e = m(t[r], n[r]);
          return e;
        }
        function m(t, n) {
          if (t === n) return !0;
          let e = F(t),
            r = F(n);
          if (e || r) return !(!e || !r) && t.getTime() === n.getTime();
          if (((e = T(t)), (r = T(n)), e || r)) return !(!e || !r) && y(t, n);
          if (((e = D(t)), (r = D(n)), e || r)) {
            if (!e || !r) return !1;
            const i = Object.keys(t).length,
              o = Object.keys(n).length;
            if (i !== o) return !1;
            for (const e in t) {
              const r = t.hasOwnProperty(e),
                i = n.hasOwnProperty(e);
              if ((r && !i) || (!r && i) || !m(t[e], n[e])) return !1;
            }
          }
          return String(t) === String(n);
        }
        function b(t, n) {
          return t.findIndex((t) => m(t, n));
        }
        const x = (t) =>
            null == t ? "" : D(t) ? JSON.stringify(t, w, 2) : String(t),
          w = (t, n) =>
            R(n)
              ? {
                  [`Map(${n.size})`]: [...n.entries()].reduce(
                    (t, [n, e]) => ((t[n + " =>"] = e), t),
                    {}
                  )
                }
              : P(n)
              ? {
                  [`Set(${n.size})`]: [...n.values()]
                }
              : !D(n) || T(n) || $(n)
              ? n
              : String(n),
          M = {},
          _ = [],
          S = () => {},
          j = () => !1,
          O = /^on[^a-z]/,
          k = (t) => O.test(t),
          E = (t) => t.startsWith("onUpdate:"),
          A = Object.assign,
          C = (t, n) => {
            const e = t.indexOf(n);
            e > -1 && t.splice(e, 1);
          },
          L = Object.prototype.hasOwnProperty,
          N = (t, n) => L.call(t, n),
          T = Array.isArray,
          R = (t) => "[object Map]" === H(t),
          P = (t) => "[object Set]" === H(t),
          F = (t) => t instanceof Date,
          U = (t) => "function" === typeof t,
          q = (t) => "string" === typeof t,
          z = (t) => "symbol" === typeof t,
          D = (t) => null !== t && "object" === typeof t,
          I = (t) => D(t) && U(t.then) && U(t.catch),
          B = Object.prototype.toString,
          H = (t) => B.call(t),
          V = (t) => H(t).slice(8, -1),
          $ = (t) => "[object Object]" === H(t),
          Y = (t) =>
            q(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
          W = r(
            ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
          ),
          Z = (t) => {
            const n = Object.create(null);
            return (e) => {
              const r = n[e];
              return r || (n[e] = t(e));
            };
          },
          G = /-(\w)/g,
          X = Z((t) => t.replace(G, (t, n) => (n ? n.toUpperCase() : ""))),
          J = /\B([A-Z])/g,
          K = Z((t) => t.replace(J, "-$1").toLowerCase()),
          Q = Z((t) => t.charAt(0).toUpperCase() + t.slice(1)),
          tt = Z((t) => (t ? "on" + Q(t) : "")),
          nt = (t, n) => t !== n && (t === t || n === n),
          et = (t, n) => {
            for (let e = 0; e < t.length; e++) t[e](n);
          },
          rt = (t, n, e) => {
            Object.defineProperty(t, n, {
              configurable: !0,
              enumerable: !1,
              value: e
            });
          },
          it = (t) => {
            const n = parseFloat(t);
            return isNaN(n) ? t : n;
          };
        let ot;
        const ut = () =>
          ot ||
          (ot =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof self
              ? self
              : "undefined" !== typeof window
              ? window
              : "undefined" !== typeof t
              ? t
              : {});
      }.call(this, e("c8ba")));
    },
    a4b4: function (t, n, e) {
      var r = e("342f");
      t.exports = /web0s(?!.*chrome)/i.test(r);
    },
    a691: function (t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    a79d: function (t, n, e) {
      "use strict";
      var r = e("23e7"),
        i = e("c430"),
        o = e("fea9"),
        u = e("d039"),
        a = e("d066"),
        c = e("4840"),
        l = e("cdf9"),
        s = e("6eeb"),
        f =
          !!o &&
          u(function () {
            o.prototype["finally"].call(
              {
                then: function () {}
              },
              function () {}
            );
          });
      r(
        {
          target: "Promise",
          proto: !0,
          real: !0,
          forced: f
        },
        {
          finally: function (t) {
            var n = c(this, a("Promise")),
              e = "function" == typeof t;
            return this.then(
              e
                ? function (e) {
                    return l(n, t()).then(function () {
                      return e;
                    });
                  }
                : t,
              e
                ? function (e) {
                    return l(n, t()).then(function () {
                      throw e;
                    });
                  }
                : t
            );
          }
        }
      ),
        i ||
          "function" != typeof o ||
          o.prototype["finally"] ||
          s(o.prototype, "finally", a("Promise").prototype["finally"]);
    },
    ae40: function (t, n, e) {
      var r = e("83ab"),
        i = e("d039"),
        o = e("5135"),
        u = Object.defineProperty,
        a = {},
        c = function (t) {
          throw t;
        };
      t.exports = function (t, n) {
        if (o(a, t)) return a[t];
        n || (n = {});
        var e = [][t],
          l = !!o(n, "ACCESSORS") && n.ACCESSORS,
          s = o(n, 0) ? n[0] : c,
          f = o(n, 1) ? n[1] : void 0;
        return (a[t] =
          !!e &&
          !i(function () {
            if (l && !r) return !0;
            var t = {
              length: -1
            };
            l
              ? u(t, 1, {
                  enumerable: !0,
                  get: c
                })
              : (t[1] = 1),
              e.call(t, s, f);
          }));
      };
    },
    ae93: function (t, n, e) {
      "use strict";
      var r,
        i,
        o,
        u = e("d039"),
        a = e("e163"),
        c = e("9112"),
        l = e("5135"),
        s = e("b622"),
        f = e("c430"),
        h = s("iterator"),
        p = !1,
        d = function () {
          return this;
        };
      [].keys &&
        ((o = [].keys()),
        "next" in o
          ? ((i = a(a(o))), i !== Object.prototype && (r = i))
          : (p = !0));
      var g =
        void 0 == r ||
        u(function () {
          var t = {};
          return r[h].call(t) !== t;
        });
      g && (r = {}),
        (f && !g) || l(r, h) || c(r, h, d),
        (t.exports = {
          IteratorPrototype: r,
          BUGGY_SAFARI_ITERATORS: p
        });
    },
    b041: function (t, n, e) {
      "use strict";
      var r = e("00ee"),
        i = e("f5df");
      t.exports = r
        ? {}.toString
        : function () {
            return "[object " + i(this) + "]";
          };
    },
    b0c0: function (t, n, e) {
      var r = e("83ab"),
        i = e("9bf2").f,
        o = Function.prototype,
        u = o.toString,
        a = /^\s*function ([^ (]*)/,
        c = "name";
      r &&
        !(c in o) &&
        i(o, c, {
          configurable: !0,
          get: function () {
            try {
              return u.call(this).match(a)[1];
            } catch (t) {
              return "";
            }
          }
        });
    },
    b575: function (t, n, e) {
      var r,
        i,
        o,
        u,
        a,
        c,
        l,
        s,
        f = e("da84"),
        h = e("06cf").f,
        p = e("2cf4").set,
        d = e("1cdc"),
        g = e("a4b4"),
        v = e("605d"),
        y = f.MutationObserver || f.WebKitMutationObserver,
        m = f.document,
        b = f.process,
        x = f.Promise,
        w = h(f, "queueMicrotask"),
        M = w && w.value;
      M ||
        ((r = function () {
          var t, n;
          v && (t = b.domain) && t.exit();
          while (i) {
            (n = i.fn), (i = i.next);
            try {
              n();
            } catch (e) {
              throw (i ? u() : (o = void 0), e);
            }
          }
          (o = void 0), t && t.enter();
        }),
        d || v || g || !y || !m
          ? x && x.resolve
            ? ((l = x.resolve(void 0)),
              (s = l.then),
              (u = function () {
                s.call(l, r);
              }))
            : (u = v
                ? function () {
                    b.nextTick(r);
                  }
                : function () {
                    p.call(f, r);
                  })
          : ((a = !0),
            (c = m.createTextNode("")),
            new y(r).observe(c, {
              characterData: !0
            }),
            (u = function () {
              c.data = a = !a;
            }))),
        (t.exports =
          M ||
          function (t) {
            var n = {
              fn: t,
              next: void 0
            };
            o && (o.next = n), i || ((i = n), u()), (o = n);
          });
    },
    b622: function (t, n, e) {
      var r = e("da84"),
        i = e("5692"),
        o = e("5135"),
        u = e("90e3"),
        a = e("4930"),
        c = e("fdbf"),
        l = i("wks"),
        s = r.Symbol,
        f = c ? s : (s && s.withoutSetter) || u;
      t.exports = function (t) {
        return (
          o(l, t) || (a && o(s, t) ? (l[t] = s[t]) : (l[t] = f("Symbol." + t))),
          l[t]
        );
      };
    },
    b727: function (t, n, e) {
      var r = e("0366"),
        i = e("44ad"),
        o = e("7b0b"),
        u = e("50c4"),
        a = e("65f0"),
        c = [].push,
        l = function (t) {
          var n = 1 == t,
            e = 2 == t,
            l = 3 == t,
            s = 4 == t,
            f = 6 == t,
            h = 7 == t,
            p = 5 == t || f;
          return function (d, g, v, y) {
            for (
              var m,
                b,
                x = o(d),
                w = i(x),
                M = r(g, v, 3),
                _ = u(w.length),
                S = 0,
                j = y || a,
                O = n ? j(d, _) : e || h ? j(d, 0) : void 0;
              _ > S;
              S++
            )
              if ((p || S in w) && ((m = w[S]), (b = M(m, S, x)), t))
                if (n) O[S] = b;
                else if (b)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return m;
                    case 6:
                      return S;
                    case 2:
                      c.call(O, m);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      c.call(O, m);
                  }
            return f ? -1 : l || s ? s : O;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterOut: l(7)
      };
    },
    c04e: function (t, n, e) {
      var r = e("861d");
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, i;
        if (n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i;
        if ("function" == typeof (e = t.valueOf) && !r((i = e.call(t))))
          return i;
        if (!n && "function" == typeof (e = t.toString) && !r((i = e.call(t))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    c430: function (t, n) {
      t.exports = !1;
    },
    c6b6: function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    },
    c6cd: function (t, n, e) {
      var r = e("da84"),
        i = e("ce4e"),
        o = "__core-js_shared__",
        u = r[o] || i(o, {});
      t.exports = u;
    },
    c8ba: function (t, n) {
      var e;
      e = (function () {
        return this;
      })();
      try {
        e = e || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (e = window);
      }
      t.exports = e;
    },
    ca84: function (t, n, e) {
      var r = e("5135"),
        i = e("fc6a"),
        o = e("4d64").indexOf,
        u = e("d012");
      t.exports = function (t, n) {
        var e,
          a = i(t),
          c = 0,
          l = [];
        for (e in a) !r(u, e) && r(a, e) && l.push(e);
        while (n.length > c) r(a, (e = n[c++])) && (~o(l, e) || l.push(e));
        return l;
      };
    },
    cc12: function (t, n, e) {
      var r = e("da84"),
        i = e("861d"),
        o = r.document,
        u = i(o) && i(o.createElement);
      t.exports = function (t) {
        return u ? o.createElement(t) : {};
      };
    },
    cca6: function (t, n, e) {
      var r = e("23e7"),
        i = e("60da");
      r(
        {
          target: "Object",
          stat: !0,
          forced: Object.assign !== i
        },
        {
          assign: i
        }
      );
    },
    cdf9: function (t, n, e) {
      var r = e("825a"),
        i = e("861d"),
        o = e("f069");
      t.exports = function (t, n) {
        if ((r(t), i(n) && n.constructor === t)) return n;
        var e = o.f(t),
          u = e.resolve;
        return u(n), e.promise;
      };
    },
    ce4e: function (t, n, e) {
      var r = e("da84"),
        i = e("9112");
      t.exports = function (t, n) {
        try {
          i(r, t, n);
        } catch (e) {
          r[t] = n;
        }
        return n;
      };
    },
    d012: function (t, n) {
      t.exports = {};
    },
    d039: function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (n) {
          return !0;
        }
      };
    },
    d066: function (t, n, e) {
      var r = e("428f"),
        i = e("da84"),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, n) {
        return arguments.length < 2
          ? o(r[t]) || o(i[t])
          : (r[t] && r[t][n]) || (i[t] && i[t][n]);
      };
    },
    d1e7: function (t, n, e) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o =
          i &&
          !r.call(
            {
              1: 2
            },
            1
          );
      n.f = o
        ? function (t) {
            var n = i(this, t);
            return !!n && n.enumerable;
          }
        : r;
    },
    d2bb: function (t, n, e) {
      var r = e("825a"),
        i = e("3bbe");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                n = !1,
                e = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  t.call(e, []),
                  (n = e instanceof Array);
              } catch (o) {}
              return function (e, o) {
                return r(e), i(o), n ? t.call(e, o) : (e.__proto__ = o), e;
              };
            })()
          : void 0);
    },
    d3b7: function (t, n, e) {
      var r = e("00ee"),
        i = e("6eeb"),
        o = e("b041");
      r ||
        i(Object.prototype, "toString", o, {
          unsafe: !0
        });
    },
    d44e: function (t, n, e) {
      var r = e("9bf2").f,
        i = e("5135"),
        o = e("b622"),
        u = o("toStringTag");
      t.exports = function (t, n, e) {
        t &&
          !i((t = e ? t : t.prototype), u) &&
          r(t, u, {
            configurable: !0,
            value: n
          });
      };
    },
    d81d: function (t, n, e) {
      "use strict";
      var r = e("23e7"),
        i = e("b727").map,
        o = e("1dde"),
        u = e("ae40"),
        a = o("map"),
        c = u("map");
      r(
        {
          target: "Array",
          proto: !0,
          forced: !a || !c
        },
        {
          map: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    },
    da84: function (t, n, e) {
      (function (n) {
        var e = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          e("object" == typeof globalThis && globalThis) ||
          e("object" == typeof window && window) ||
          e("object" == typeof self && self) ||
          e("object" == typeof n && n) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }.call(this, e("c8ba")));
    },
    ddb0: function (t, n, e) {
      var r = e("da84"),
        i = e("fdbc"),
        o = e("e260"),
        u = e("9112"),
        a = e("b622"),
        c = a("iterator"),
        l = a("toStringTag"),
        s = o.values;
      for (var f in i) {
        var h = r[f],
          p = h && h.prototype;
        if (p) {
          if (p[c] !== s)
            try {
              u(p, c, s);
            } catch (g) {
              p[c] = s;
            }
          if ((p[l] || u(p, l, f), i[f]))
            for (var d in o)
              if (p[d] !== o[d])
                try {
                  u(p, d, o[d]);
                } catch (g) {
                  p[d] = o[d];
                }
        }
      }
    },
    df75: function (t, n, e) {
      var r = e("ca84"),
        i = e("7839");
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i);
        };
    },
    e163: function (t, n, e) {
      var r = e("5135"),
        i = e("7b0b"),
        o = e("f772"),
        u = e("e177"),
        a = o("IE_PROTO"),
        c = Object.prototype;
      t.exports = u
        ? Object.getPrototypeOf
        : function (t) {
            return (
              (t = i(t)),
              r(t, a)
                ? t[a]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? c
                : null
            );
          };
    },
    e177: function (t, n, e) {
      var r = e("d039");
      t.exports = !r(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    e260: function (t, n, e) {
      "use strict";
      var r = e("fc6a"),
        i = e("44d2"),
        o = e("3f8c"),
        u = e("69f3"),
        a = e("7dd0"),
        c = "Array Iterator",
        l = u.set,
        s = u.getterFor(c);
      (t.exports = a(
        Array,
        "Array",
        function (t, n) {
          l(this, {
            type: c,
            target: r(t),
            index: 0,
            kind: n
          });
        },
        function () {
          var t = s(this),
            n = t.target,
            e = t.kind,
            r = t.index++;
          return !n || r >= n.length
            ? ((t.target = void 0),
              {
                value: void 0,
                done: !0
              })
            : "keys" == e
            ? {
                value: r,
                done: !1
              }
            : "values" == e
            ? {
                value: n[r],
                done: !1
              }
            : {
                value: [r, n[r]],
                done: !1
              };
        },
        "values"
      )),
        (o.Arguments = o.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    e2cc: function (t, n, e) {
      var r = e("6eeb");
      t.exports = function (t, n, e) {
        for (var i in n) r(t, i, n[i], e);
        return t;
      };
    },
    e667: function (t, n) {
      t.exports = function (t) {
        try {
          return {
            error: !1,
            value: t()
          };
        } catch (n) {
          return {
            error: !0,
            value: n
          };
        }
      };
    },
    e6cf: function (t, n, e) {
      "use strict";
      var r,
        i,
        o,
        u,
        a = e("23e7"),
        c = e("c430"),
        l = e("da84"),
        s = e("d066"),
        f = e("fea9"),
        h = e("6eeb"),
        p = e("e2cc"),
        d = e("d44e"),
        g = e("2626"),
        v = e("861d"),
        y = e("1c0b"),
        m = e("19aa"),
        b = e("8925"),
        x = e("2266"),
        w = e("1c7e"),
        M = e("4840"),
        _ = e("2cf4").set,
        S = e("b575"),
        j = e("cdf9"),
        O = e("44de"),
        k = e("f069"),
        E = e("e667"),
        A = e("69f3"),
        C = e("94ca"),
        L = e("b622"),
        N = e("605d"),
        T = e("2d00"),
        R = L("species"),
        P = "Promise",
        F = A.get,
        U = A.set,
        q = A.getterFor(P),
        z = f,
        D = l.TypeError,
        I = l.document,
        B = l.process,
        H = s("fetch"),
        V = k.f,
        $ = V,
        Y = !!(I && I.createEvent && l.dispatchEvent),
        W = "function" == typeof PromiseRejectionEvent,
        Z = "unhandledrejection",
        G = "rejectionhandled",
        X = 0,
        J = 1,
        K = 2,
        Q = 1,
        tt = 2,
        nt = C(P, function () {
          var t = b(z) !== String(z);
          if (!t) {
            if (66 === T) return !0;
            if (!N && !W) return !0;
          }
          if (c && !z.prototype["finally"]) return !0;
          if (T >= 51 && /native code/.test(z)) return !1;
          var n = z.resolve(1),
            e = function (t) {
              t(
                function () {},
                function () {}
              );
            },
            r = (n.constructor = {});
          return (r[R] = e), !(n.then(function () {}) instanceof e);
        }),
        et =
          nt ||
          !w(function (t) {
            z.all(t)["catch"](function () {});
          }),
        rt = function (t) {
          var n;
          return !(!v(t) || "function" != typeof (n = t.then)) && n;
        },
        it = function (t, n) {
          if (!t.notified) {
            t.notified = !0;
            var e = t.reactions;
            S(function () {
              var r = t.value,
                i = t.state == J,
                o = 0;
              while (e.length > o) {
                var u,
                  a,
                  c,
                  l = e[o++],
                  s = i ? l.ok : l.fail,
                  f = l.resolve,
                  h = l.reject,
                  p = l.domain;
                try {
                  s
                    ? (i || (t.rejection === tt && ct(t), (t.rejection = Q)),
                      !0 === s
                        ? (u = r)
                        : (p && p.enter(),
                          (u = s(r)),
                          p && (p.exit(), (c = !0))),
                      u === l.promise
                        ? h(D("Promise-chain cycle"))
                        : (a = rt(u))
                        ? a.call(u, f, h)
                        : f(u))
                    : h(r);
                } catch (d) {
                  p && !c && p.exit(), h(d);
                }
              }
              (t.reactions = []), (t.notified = !1), n && !t.rejection && ut(t);
            });
          }
        },
        ot = function (t, n, e) {
          var r, i;
          Y
            ? ((r = I.createEvent("Event")),
              (r.promise = n),
              (r.reason = e),
              r.initEvent(t, !1, !0),
              l.dispatchEvent(r))
            : (r = {
                promise: n,
                reason: e
              }),
            !W && (i = l["on" + t])
              ? i(r)
              : t === Z && O("Unhandled promise rejection", e);
        },
        ut = function (t) {
          _.call(l, function () {
            var n,
              e = t.facade,
              r = t.value,
              i = at(t);
            if (
              i &&
              ((n = E(function () {
                N ? B.emit("unhandledRejection", r, e) : ot(Z, e, r);
              })),
              (t.rejection = N || at(t) ? tt : Q),
              n.error)
            )
              throw n.value;
          });
        },
        at = function (t) {
          return t.rejection !== Q && !t.parent;
        },
        ct = function (t) {
          _.call(l, function () {
            var n = t.facade;
            N ? B.emit("rejectionHandled", n) : ot(G, n, t.value);
          });
        },
        lt = function (t, n, e) {
          return function (r) {
            t(n, r, e);
          };
        },
        st = function (t, n, e) {
          t.done ||
            ((t.done = !0),
            e && (t = e),
            (t.value = n),
            (t.state = K),
            it(t, !0));
        },
        ft = function (t, n, e) {
          if (!t.done) {
            (t.done = !0), e && (t = e);
            try {
              if (t.facade === n) throw D("Promise can't be resolved itself");
              var r = rt(n);
              r
                ? S(function () {
                    var e = {
                      done: !1
                    };
                    try {
                      r.call(n, lt(ft, e, t), lt(st, e, t));
                    } catch (i) {
                      st(e, i, t);
                    }
                  })
                : ((t.value = n), (t.state = J), it(t, !1));
            } catch (i) {
              st(
                {
                  done: !1
                },
                i,
                t
              );
            }
          }
        };
      nt &&
        ((z = function (t) {
          m(this, z, P), y(t), r.call(this);
          var n = F(this);
          try {
            t(lt(ft, n), lt(st, n));
          } catch (e) {
            st(n, e);
          }
        }),
        (r = function (t) {
          U(this, {
            type: P,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: X,
            value: void 0
          });
        }),
        (r.prototype = p(z.prototype, {
          then: function (t, n) {
            var e = q(this),
              r = V(M(this, z));
            return (
              (r.ok = "function" != typeof t || t),
              (r.fail = "function" == typeof n && n),
              (r.domain = N ? B.domain : void 0),
              (e.parent = !0),
              e.reactions.push(r),
              e.state != X && it(e, !1),
              r.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          }
        })),
        (i = function () {
          var t = new r(),
            n = F(t);
          (this.promise = t),
            (this.resolve = lt(ft, n)),
            (this.reject = lt(st, n));
        }),
        (k.f = V = function (t) {
          return t === z || t === o ? new i(t) : $(t);
        }),
        c ||
          "function" != typeof f ||
          ((u = f.prototype.then),
          h(
            f.prototype,
            "then",
            function (t, n) {
              var e = this;
              return new z(function (t, n) {
                u.call(e, t, n);
              }).then(t, n);
            },
            {
              unsafe: !0
            }
          ),
          "function" == typeof H &&
            a(
              {
                global: !0,
                enumerable: !0,
                forced: !0
              },
              {
                fetch: function (t) {
                  return j(z, H.apply(l, arguments));
                }
              }
            ))),
        a(
          {
            global: !0,
            wrap: !0,
            forced: nt
          },
          {
            Promise: z
          }
        ),
        d(z, P, !1, !0),
        g(P),
        (o = s(P)),
        a(
          {
            target: P,
            stat: !0,
            forced: nt
          },
          {
            reject: function (t) {
              var n = V(this);
              return n.reject.call(void 0, t), n.promise;
            }
          }
        ),
        a(
          {
            target: P,
            stat: !0,
            forced: c || nt
          },
          {
            resolve: function (t) {
              return j(c && this === o ? z : this, t);
            }
          }
        ),
        a(
          {
            target: P,
            stat: !0,
            forced: et
          },
          {
            all: function (t) {
              var n = this,
                e = V(n),
                r = e.resolve,
                i = e.reject,
                o = E(function () {
                  var e = y(n.resolve),
                    o = [],
                    u = 0,
                    a = 1;
                  x(t, function (t) {
                    var c = u++,
                      l = !1;
                    o.push(void 0),
                      a++,
                      e.call(n, t).then(function (t) {
                        l || ((l = !0), (o[c] = t), --a || r(o));
                      }, i);
                  }),
                    --a || r(o);
                });
              return o.error && i(o.value), e.promise;
            },
            race: function (t) {
              var n = this,
                e = V(n),
                r = e.reject,
                i = E(function () {
                  var i = y(n.resolve);
                  x(t, function (t) {
                    i.call(n, t).then(e.resolve, r);
                  });
                });
              return i.error && r(i.value), e.promise;
            }
          }
        );
    },
    e893: function (t, n, e) {
      var r = e("5135"),
        i = e("56ef"),
        o = e("06cf"),
        u = e("9bf2");
      t.exports = function (t, n) {
        for (var e = i(n), a = u.f, c = o.f, l = 0; l < e.length; l++) {
          var s = e[l];
          r(t, s) || a(t, s, c(n, s));
        }
      };
    },
    e8b5: function (t, n, e) {
      var r = e("c6b6");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    e95a: function (t, n, e) {
      var r = e("b622"),
        i = e("3f8c"),
        o = r("iterator"),
        u = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || u[o] === t);
      };
    },
    f069: function (t, n, e) {
      "use strict";
      var r = e("1c0b"),
        i = function (t) {
          var n, e;
          (this.promise = new t(function (t, r) {
            if (void 0 !== n || void 0 !== e)
              throw TypeError("Bad Promise constructor");
            (n = t), (e = r);
          })),
            (this.resolve = r(n)),
            (this.reject = r(e));
        };
      t.exports.f = function (t) {
        return new i(t);
      };
    },
    f5df: function (t, n, e) {
      var r = e("00ee"),
        i = e("c6b6"),
        o = e("b622"),
        u = o("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          ),
        c = function (t, n) {
          try {
            return t[n];
          } catch (e) {}
        };
      t.exports = r
        ? i
        : function (t) {
            var n, e, r;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (e = c((n = Object(t)), u))
              ? e
              : a
              ? i(n)
              : "Object" == (r = i(n)) && "function" == typeof n.callee
              ? "Arguments"
              : r;
          };
    },
    f772: function (t, n, e) {
      var r = e("5692"),
        i = e("90e3"),
        o = r("keys");
      t.exports = function (t) {
        return o[t] || (o[t] = i(t));
      };
    },
    fb6a: function (t, n, e) {
      "use strict";
      var r = e("23e7"),
        i = e("861d"),
        o = e("e8b5"),
        u = e("23cb"),
        a = e("50c4"),
        c = e("fc6a"),
        l = e("8418"),
        s = e("b622"),
        f = e("1dde"),
        h = e("ae40"),
        p = f("slice"),
        d = h("slice", {
          ACCESSORS: !0,
          0: 0,
          1: 2
        }),
        g = s("species"),
        v = [].slice,
        y = Math.max;
      r(
        {
          target: "Array",
          proto: !0,
          forced: !p || !d
        },
        {
          slice: function (t, n) {
            var e,
              r,
              s,
              f = c(this),
              h = a(f.length),
              p = u(t, h),
              d = u(void 0 === n ? h : n, h);
            if (
              o(f) &&
              ((e = f.constructor),
              "function" != typeof e || (e !== Array && !o(e.prototype))
                ? i(e) && ((e = e[g]), null === e && (e = void 0))
                : (e = void 0),
              e === Array || void 0 === e)
            )
              return v.call(f, p, d);
            for (
              r = new (void 0 === e ? Array : e)(y(d - p, 0)), s = 0;
              p < d;
              p++, s++
            )
              p in f && l(r, s, f[p]);
            return (r.length = s), r;
          }
        }
      );
    },
    fc6a: function (t, n, e) {
      var r = e("44ad"),
        i = e("1d80");
      t.exports = function (t) {
        return r(i(t));
      };
    },
    fdbc: function (t, n) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    },
    fdbf: function (t, n, e) {
      var r = e("4930");
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    fea9: function (t, n, e) {
      var r = e("da84");
      t.exports = r.Promise;
    }
  }
]);
//# sourceMappingURL=chunk-vendors.c6934b7d.js.map