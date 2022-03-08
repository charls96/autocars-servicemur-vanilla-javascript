window.addEventListener("load", function () {
// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
  current_lang: "es",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once on the first accept/reject action
  },

  onAccept: function (cookie) {
    // callback triggered on the first accept/reject action, and after each page load
  },

  onChange: function (cookie, changed_categories) {
    // callback triggered when user changes preferences after consent has already been given
  },

  languages: {
    en: {
      consent_modal: {
        title: "¡Usamos cookies!",
        description:
          'Hola! Esta web usa cookies para asegurar un adecuado tratamiento del uso y seguimiento de los datos. Solo serán usadas con tu consentimiento.<button type="button" data-cc="c-settings" class="cc-link">Configurar Cookies</button>',
        primary_btn: {
          text: "Aceptar todas",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Rechazar todas",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Preferencias",
        save_settings_btn: "Guardar cambios",
        accept_all_btn: "Aceptar todas",
        reject_all_btn: "Rechazar todas",
        close_btn_label: "Cerrar",
        cookie_table_headers: [
          { col1: "Nombre" },
          { col2: "Dominio" },
          { col3: "Caducidad" },
          { col4: "Descripción" },
        ],
        blocks: [
          {
            title: "Uso de las cookies 📢",
            description:
              'Usamos las cookies para asegurar las funcionalidades basicas de la web y para mejorar tu experiencia. Para más detalles en relación a las cookies y otra información sensible, por favor lee <a href="http://naturalmoralma.com/index.php/politica-de-cookies/" class="cc-link">política de privacidad</a>.',
          },
          {
            title: "Cookies estríctamente necesarias",
            description:
              "Estas cookies son esenciales para el funcionamiento correcto de la página.",
            toggle: {
              /*  value: "necessary", */
              value: "necesario",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Cookies de rendimiento y análisis",
            description:
              "Estas cookies permiten a la web recordar las opciones que has elegido en el pasado",
            toggle: {
              /* value: "analytics", // your cookie category */
              value: "analíticas",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: "^_ga", // match all cookies starting with "_ga"
                col2: "autocarservicemur.com",
                col3: "2 años",
                col4: "cookies",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "autocarsservimur.com",
                col3: "1 día",
                col4: "cookies",
              },
            ],
          },
          {
            title: "Anuncio y objetivo de las cookies",
            description:
              "Estas cookies recopilan información sobre como usas la página web, las páginas que visitastes y los links en a los que has accedido. Toda la información es de carácter anónimo y no puede usarse para identificarte",
            toggle: {
              /* value: "targeting", */
              value: "objetivo",
              enabled: false,
              readonly: false,
            },
          },
          {
            title: "Más información",
            description:
              'Si tienes alguna consulta no dudes en ponerte en <a class="cc-link" href="https://naturalmoralma.com/index.php/contact/">contacto con nosotros</a>.',
          },
        ],
      },
    },
  },
});
});
