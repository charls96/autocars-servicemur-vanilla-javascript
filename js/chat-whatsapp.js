const btnChatBot = document.querySelector(".btn-bot");
btnChatBot.addEventListener("click", showChatBot);

function showChatBot() {
  if (document.querySelector(".div-chat")) {
    cleanHTML(document.querySelector(".div-chat"));
    cleanHTML(document.querySelector(".div-chat-triangle"));
  } else {
    const divChat = document.createElement("div");
    const divChatTriangle = document.createElement("div");
    divChat.classList.add("div-chat");
    divChatTriangle.classList.add("div-chat-triangle");

    divChat.innerHTML = `
            <div class="header-bot z-10">
              <div class="header-logo-bot relative">
			  	<img class="rounded-full w-16 h-16 my-2 mr-4 img-user-whatsapp" src="imgs/whatsapp/logo-whatsapp.jpg" alt="logo">
				<div>
					<p class="header-bot-name text-xl">Autocars Servicemur</p>
					<p class="text-gray-200 text-sm italic">Respondo el mismo día</p>
				</div>
              </div>
              <svg class="bot-cross" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.7em" height="0.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="lightgray" d="M50.592 2.291L32 20.884C25.803 14.689 19.604 8.488 13.406 2.291c-7.17-7.17-18.284 3.948-11.12 11.12c6.199 6.193 12.4 12.395 18.592 18.592A32589.37 32589.37 0 0 1 2.286 50.595c-7.164 7.168 3.951 18.283 11.12 11.12c6.197-6.199 12.396-12.399 18.593-18.594l18.592 18.594c7.17 7.168 18.287-3.951 11.12-11.12c-6.199-6.199-12.396-12.396-18.597-18.594c6.2-6.199 12.397-12.398 18.597-18.596c7.168-7.166-3.949-18.284-11.12-11.11"/></svg>
            </div>
            
            <div class="body-bot flex flex-col justify-between">
                <div class="conversation m-3 z-50">
					<div class="bg-white w-44 rounded shadow-xl p-2 ">
						<p class="text-xs font-bold text-gray-500 mb-2">Autocars Servicemur</p>
						<p class="text-xs text-gray-800 mb-1">Hola 👋</p>
						<p class="text-xs text-gray-800">¿En que puedo ayudarte?</p>
					</div>
                </div>
				<div class="bg-white px-4 pt-4 flex justify-center">
					<a class="px-6 py-1 bg-green-600 text-white text-sm font-bold rounded-full flex items-center gap-1" href="https://wa.me/34717717335" target="_blank"><svg width="1em" height="1em" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd" class="WhatsappButton__Icon-sc-7zv9k4-0 bOSBBe"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg> Empezar Chat</a>
				<div>
            </div>
        `;

    {
      /* <div class="option-buttons">
                <a onclick="textButtons('pedidos')" href="#" id="pedidos">Pedidos</a>
                <a onclick="textButtons('contacto')" href="#" id="contactos">Contacto</a>
                <a onclick="textButtons('nosotros')" href="#" id="nosotros">Nosotros</a>
              </div> */
    }

    document.querySelector("body").appendChild(divChat);
    document.querySelector("body").appendChild(divChatTriangle);

    const svgCross = document.querySelector(".bot-cross");
    svgCross.addEventListener("click", () => {
      divChat.remove();
      divChatTriangle.remove();
    });
  }
}

function cleanHTML(element) {
  element.remove();
}

function textButtons(buttonId) {
  const optionButtons = document.querySelectorAll(".option-buttons > a");
  const welcomeText = document.querySelector(".welcome");
  let textContent = document.querySelector(".conversation > p");

  if (textContent == welcomeText || textContent) {
    textContent.remove();

    generateText(buttonId);
  }
}

function generateText(buttonId) {
  if (buttonId === "pedidos") {
    const pedidosText = document.createElement("p");
    pedidosText.innerHTML =
      '¿Quieres saber más sobre tus pedidos? Pincha <a href="#">aquí</a>';
    document.querySelector(".conversation").appendChild(pedidosText);
  } else if (buttonId === "contacto") {
    const contactoText = document.createElement("p");
    contactoText.innerHTML =
      '¿Quieres ponerte en contacto con nosotros? Pincha <a href="#">aquí</a>';
    document.querySelector(".conversation").appendChild(contactoText);
  } else if (buttonId === "nosotros") {
    const nosotrosText = document.createElement("p");
    nosotrosText.innerHTML =
      '¿Quieres saber más sobre nosotros? Pincha <a href="#">aquí</a>';
    document.querySelector(".conversation").appendChild(nosotrosText);
  }
}
