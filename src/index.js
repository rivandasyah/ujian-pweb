import React from 'react'; // import library react
// mengimpor library ReactDOM dari paket react-dom/clientdigunakan sebagai titik awal 
// untuk merender komponen-komponen React ke dalam DOM
import ReactDOM from 'react-dom/client'; 
import './index.css'; // import file css
import App from './App.js'; // import komponen App dari App.js

// inisialisasi elemen root dengan id root yang ada di pada halaman html
const root = ReactDOM.createRoot(document.getElementById("root"));
// me-render komponen AppF ke dalam root element
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

