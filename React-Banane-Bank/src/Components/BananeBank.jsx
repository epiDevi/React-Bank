import { useState } from "react";
import "./BananeBank.css";

const BananeBank = () => {
  const [guthaben, setGuthaben] = useState(0);
  const [betrag, setBetrag] = useState("");

  const einzahlen = () => {
    console.log(Number(betrag));
    if (Number(betrag) != 0) {
      setGuthaben(guthaben + Number(betrag));
      setBetrag("");
    } else {
      window.alert("Bitte geben Sie ein gültige betrag ein!!!");
    }
  };

  const auszahlen = () => {
    if (Number(betrag) != 0) {
      if (guthaben > betrag) {
        setGuthaben(guthaben - betrag);
        setBetrag("");
      } else {
        window.alert("Du hast nicht genug Geld auf deine Konto!!!");
        setBetrag("");
      }
    } else {
      window.alert("Bitte geben Sie ein gültige betrag ein!!!");
    }
  };
  return (
    <>
      <main>
        <section className="konto">
          <p className="giro">Mein Girokonto</p>
          <p className="saldo">{guthaben.toFixed(2)} €</p>

          <input
            className="geldbetrag"
            type="number"
            placeholder="Betrag in €"
            onChange={(event) => setBetrag(event.target.value)}
            value={betrag}
          />
          <div>
            <button className="einzahlen" onClick={einzahlen}>
              Einzahlen
            </button>
            <button className="auszahlen" onClick={auszahlen}>
              Auszahlen
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default BananeBank;
