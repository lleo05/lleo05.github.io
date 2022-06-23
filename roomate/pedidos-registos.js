/* ---------- Guardar a data e a hora ---------- */
/* console.log("Agora são "  + now.getHours() + ":" + now.getMinutes() + " do dia " + now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() ) */

/* document.getElementById('fazer-pedido').addEventListener("click", function () {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();

    let guardar_pedido_registo = document.getElementById('novo-pedido-registo');
    guardar_pedido_registo.innerHTML = `
    <div class="container center">
            <div class="row" id="pedido-registo">
                <div class="col-12">
                    <div class="container">
                        <div class="row" id="guardar-nome-servico">
                            <p>Tamanho:${Tamanho} • Quantidade:${Quantidade}</p>
                        </div>

                        <div class="row" id="guardar-hora-aqui">
                            <p>${hora}:${minutos} • ${dia},${mes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}) */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  deleteField,
  query,
  where,
  limit,
  orderBy,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

// Configuração Firebase, obtida na consola.
const config = {
  apiKey: "AIzaSyAjJRDjzXmyjHSgeF-gYKE8gr3BgEFomXM",
  authDomain: "roomate-pi.firebaseapp.com",
  projectId: "roomate-pi",
  storageBucket: "roomate-pi.appspot.com",
  messagingSenderId: "868950148808",
  appId: "1:868950148808:web:0910c3943e297d567d87fd",
  measurementId: "G-8BDLBR9BLD"
};

// Ligação da nossa app à app Firebase.
const app = initializeApp(config);

// Ligação à base de dados.
const db = getFirestore(app);

/* function iniciarLista(){
    getDocs(registosRef).then(arrayProducts => {
        // Sendo a função getDocs, o resultado será um array, logo é possível iterar.
        arrayProducts.forEach(product => {
          // Para cada referência, queremos extrair os dados.
          console.log(product.data());
    
          let ul = document.getElementById("register-list");
          let li = document.createElement("li");
    
          li.innerHTML = `
          <div class="container center">
                  <div class="row" id="pedido-registo">
                      <div class="col-12">
                          <div class="container">
                              <div class="row" id="guardar-nome-servico">
                                  <p>Tamanho:${product.data().Tamanho} • Quantidade:${product.data().Quantidade}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              `
    
          ul.appendChild(li);
        });
      });
} */