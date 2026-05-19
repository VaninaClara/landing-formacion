import Image from "next/image";
import Link from "next/link";

const whatsappUrl =
  "https://wa.me/34600000000?text=Hola%20Sol%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20formaci%C3%B3n";

const dates = [
  { month: "Septiembre", days: "5 y 6" },
  { month: "Octubre", days: "3 y 4" },
  { month: "Noviembre", days: "7 y 8" },
  { month: "Enero", days: "9", note: "Certificación" },
];

const includes = [
  "Coaching ontológico",
  "Mirada sistémica",
  "Trauma y memorias emocionales",
  "Herramientas somáticas",
  "Neurociencia y transformación personal",
  "Prácticas vivenciales y aplicación profesional",
];

const idealFor = [
  "Acompañar procesos humanos con profundidad.",
  "Comprender el impacto del trauma en la vida cotidiana.",
  "Desarrollar herramientas profesionales reales.",
  "Transformar primero tu propia historia.",
];

const certificationPoints = [
  "Avalá tu formación con calidad y seriedad profesional.",
  "Brindá credibilidad y confianza ante tus clientes.",
  "Diferenciate como profesional competente y comprometida/o.",
  "Abrí nuevas oportunidades y redes de contacto.",
  "Recibí reconocimiento a tu proceso, dedicación y transformación.",
];

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No necesariamente. La formación está pensada para profesionales y personas que desean profundizar en el acompañamiento humano desde una mirada integral.",
  },
  {
    question: "¿Cuál es la modalidad?",
    answer:
      "La modalidad es intensiva, con encuentros presenciales o virtuales, espacios vivenciales y prácticas aplicadas.",
  },
  {
    question: "¿Cómo recibo más información?",
    answer:
      "Escribí por WhatsApp la palabra “FORMACIÓN” y recibirás fechas, modalidad, valores y detalles de inscripción.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#082044]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-8">
          <div className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#1f6aa5] shadow-sm">
            Formación avalada por FeCOP
          </div>

          <div className="space-y-5">
            <p className="font-serif text-2xl italic text-[#1f6aa5]">
              Transformar tu historia es el comienzo de acompañar la de otros.
            </p>
            <h1 className="text-5xl font-black uppercase leading-tight tracking-tight md:text-7xl">
              Coaching Ontológico y Sistémico
            </h1>
            <p className="max-w-xl text-xl font-semibold text-[#1f6aa5]">
              Con herramientas de trauma, neurociencia y transformación profunda.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-[#42526b]">
              Una formación para profesionales que quieren ir más allá: comprender cómo habla el cuerpo, cómo impacta el trauma, cómo operan los sistemas familiares y cómo transformar el observador que sostiene nuestra vida.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsappUrl}
              className="rounded-full bg-[#0b5f9e] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-[#084f85]"
            >
              Quiero recibir información
            </Link>
            <a
              href="#programa"
              className="rounded-full border border-[#0b5f9e] bg-white px-8 py-4 text-center font-bold text-[#0b5f9e] transition hover:bg-[#eef7ff]"
            >
              Ver programa
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-[#d6e7f5]" />
          <Image
            src="/images/sol1.png"
            alt="Sol Milovich sonriendo en un espacio de trabajo"
            width={900}
            height={1100}
            priority
            className="relative aspect-[4/5] w-full rounded-[3rem] object-cover object-center shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-16">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 max-w-3xl space-y-4">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#1f6aa5]">
        Fechas de encuentros
      </p>

      <h2 className="text-3xl font-black md:text-5xl">
        Una experiencia intensiva, vivencial y práctica.
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-4">
      {dates.map((date) => (
        <article
          key={date.month}
          className="group rounded-3xl border border-[#d8e5ef] bg-[#f6f1e9] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6e7f5] text-3xl">
            {date.note ? "🎓" : "📅"}
          </div>

          <p className="text-sm font-black uppercase tracking-wide text-[#1f6aa5]">
            {date.month}
          </p>

          <p className="mt-3 text-4xl font-black group-hover:text-[#0b5f9e]">
            {date.days}
          </p>

          {date.note && (
            <p className="mt-3 font-serif text-2xl italic text-[#1f6aa5]">
              {date.note}
            </p>
          )}

          <div className="mt-6 h-1 w-16 rounded-full bg-[#0b5f9e]" />
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="programa" className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#1f6aa5]">
              Una experiencia que integra
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              Herramientas para acompañar procesos de transformación profunda.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <article
                key={item}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d6e7f5] text-xl font-black text-[#0b5f9e]">
                  ✓
                </div>
                <h3 className="text-xl font-black">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#082044] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9dc6e8]">
              Esta formación es para vos si querés
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              Ir más allá de la teoría y aprender desde la experiencia.
            </h2>
            <div className="space-y-4 pt-4">
              {idealFor.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <span className="font-black text-[#9dc6e8]">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#082044] shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#1f6aa5]">
              La importancia de la certificación
            </p>
            <h3 className="mt-4 text-3xl font-black">
              Tu crecimiento, ahora también es tu identidad profesional.
            </h3>
            <ul className="mt-6 space-y-4">
              {certificationPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-[#42526b]">
                  <span className="font-black text-[#0b5f9e]">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[3rem] bg-[#d6e7f5]" />
            <Image
              src="/images/sol2.png"
              alt="Sol Milovich junto al agua"
              width={900}
              height={1200}
              className="relative aspect-4/5 w-full rounded-[3rem] object-cover object-center shadow-2xl"
            />
          </div>

          <div className="order-1 space-y-5 md:order-2">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#1f6aa5]">
              Dictada por Sol Milovich
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              Coach ontológica, facilitadora y formadora.
            </h2>
            <p className="text-lg leading-8 text-[#42526b]">
              Sol acompaña procesos de transformación humana y desarrollo profesional desde una mirada profunda, cercana y respetuosa. Su propuesta integra coaching ontológico, enfoque sistémico, trauma, neurociencia y prácticas vivenciales.
            </p>
            <p className="text-lg leading-8 text-[#42526b]">
              Esta formación está pensada para quienes desean comprenderse mejor, acompañar con más recursos y construir una identidad profesional sólida en el campo del acompañamiento humano.
            </p>
            <Link
              href={whatsappUrl}
              className="inline-flex rounded-full bg-[#0b5f9e] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#084f85]"
            >
              Hablar con Sol
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#1f6aa5]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Antes de escribir, quizás esto te ayude.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl bg-[#f6f1e9] p-6 shadow-sm">
                <h3 className="text-xl font-black">{faq.question}</h3>
                <p className="mt-3 leading-8 text-[#42526b]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[3rem] bg-[#0b5f9e] px-6 py-14 text-center text-white shadow-2xl md:px-16">
          <p className="font-serif text-2xl italic text-[#d6e7f5]">Te esperamos ♡</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Escribí “FORMACIÓN” y recibí toda la información.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#d6e7f5]">
            Consultá fechas, modalidad, valores y detalles de inscripción directamente por WhatsApp.
          </p>
          <Link
            href={whatsappUrl}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#0b5f9e] transition hover:bg-[#eef7ff]"
          >
            Pedir información por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
