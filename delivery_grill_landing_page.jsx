import { useState } from "react";

export default function LandingPage() {
  const [phone, setPhone] = useState("");

  function handleSubmit() {
    const msg = encodeURIComponent(
      `Quero testar o Delivery Grill no meu negócio. Meu WhatsApp: ${phone}`
    );

    window.open(`https://wa.me/?text=${msg}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-orange-50">
      {/* HERO */}
      <header className="text-center py-20 px-6 border-b border-orange-500">
        <h1 className="text-5xl font-bold">🔥 Delivery Grill</h1>
        <p className="text-orange-300 mt-4 text-lg">
          O sistema de cardápio digital para espetinhos e lanchonetes venderem mais sem depender de apps de comissão
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#demo"
            className="bg-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            Ver Demonstração
          </a>
          <a
            href="#contato"
            className="bg-zinc-800 px-6 py-3 rounded-xl"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* DEMOS */}
      <section id="demo" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Veja funcionando em tempo real
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">🍢 Espetinho</h3>
            <p className="text-orange-300 mt-2">Cardápio simples e direto para vendas rápidas</p>
            <a className="mt-4 inline-block bg-orange-600 px-4 py-2 rounded-xl">
              Abrir Demo
            </a>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">🍔 Hamburgueria</h3>
            <p className="text-orange-300 mt-2">Ideal para combos e pedidos recorrentes</p>
            <a className="mt-4 inline-block bg-orange-600 px-4 py-2 rounded-xl">
              Abrir Demo
            </a>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">🍟 Lanchonete</h3>
            <p className="text-orange-300 mt-2">Organização de pedidos sem erro no WhatsApp</p>
            <a className="mt-4 inline-block bg-orange-600 px-4 py-2 rounded-xl">
              Abrir Demo
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Por que usar o Delivery Grill?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-bold text-xl">🚀 Mais vendas</h3>
            <p className="text-orange-300">Cliente pede mais rápido e sem complicação</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">💸 Sem comissão</h3>
            <p className="text-orange-300">Você não paga taxa por pedido</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">📲 Direto no WhatsApp</h3>
            <p className="text-orange-300">Pedido organizado chega pronto para atender</p>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section id="contato" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Quero testar no meu negócio</h2>

        <div className="max-w-md mx-auto flex flex-col gap-3">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Seu WhatsApp"
            className="p-3 rounded-xl bg-zinc-800"
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 py-3 rounded-xl font-bold"
          >
            Falar com atendimento
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-500 text-sm">
        © Delivery Grill - Sistema de pedidos para restaurantes locais
      </footer>
    </div>
  );
}
