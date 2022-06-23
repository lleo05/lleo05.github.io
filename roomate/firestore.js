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

/* async function getServicos(db) {
  const servicosCol = collection(db, 'Servicos');
  const servicosSnapshot = await getDocs(servicosCol);
  const servicosList = servicosSnapshot.docs.map(doc => doc.data());
  return servicosList;
} */

/* const servicosRef = collection(db, 'Servicos') */

// Obtenção de todos os documentos existentes na coleção "Servicos".
/* getDocs(servicosRef).then(arrayProducts => {
  arrayProducts.forEach(product => {
    console.log(product.data());
  });
}); */

// Obtenção apenas de um documento, utilizando a referência certa.
/* const toalhasDocRef = doc(db, 'Servicos', 'Toalhas')

getDoc(toalhasDocRef).then(product => {
  if (product.exists()) {
    console.log(product.data());
  } else {
    console.log('Este produto não existe.');
  }
}); */



/* Botão */
function guardarPedido() {
  let selecionar1 = document.getElementById('selecionar1').textContent;
  let selecionar2 = document.getElementById('selecionar2').textContent;

  let registosRef = collection(db, 'Registos')

  const newRegisto = {
    Tamanho: selecionar1,
    Quantidade: selecionar2
  };

  addDoc(registosRef, newRegisto);

  /* getDocs(registosRef).then(arrayProducts => {
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
  }); */
}

document.getElementById('fazer-pedido').addEventListener('click', function () {
  guardarPedido()
})


function iniciarLista(){
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
}

document.getElementById('iniciar').addEventListener('click', function () {
  iniciarLista()
})


