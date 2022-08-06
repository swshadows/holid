const date = new Date();
const today = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;

module.exports = {
  currentTime: today,
  months: [
    {
      id: 1,
      name: "Janeiro",
      days: 31,
      holidays: [{ name: "Ano Novo", duration: 1 }],
    },
    {
      id: 2,
      name: "Fevereiro",
      days: 28,
      holidays: [{ name: "Carnaval", duration: 4 }],
    },
    {
      id: 3,
      name: "Março",
      days: 31,
      holidays: [],
    },
    {
      id: 4,
      name: "Abril",
      days: 30,
      holidays: [{ name: "Tiradentes", duration: 1 }],
    },
    {
      id: 5,
      name: "Maio",
      days: 31,
      holidays: [{ name: "Dia do Trabalhador", duration: 1 }],
    },
    {
      id: 6,
      name: "Junho",
      days: 30,
      holidays: [{ name: "Corpus Christi", duration: 1 }],
    },
    {
      id: 7,
      name: "Julho",
      days: 31,
      holidays: [],
    },
    {
      id: 8,
      name: "Agosto",
      days: 31,
      holidays: [],
    },
    {
      id: 9,
      name: "Setembro",
      days: 30,
      holidays: [{ name: "Independência do Brasil", duration: 1 }],
    },
    {
      id: 10,
      name: "Outubro",
      days: 31,
      holidays: [{ name: "Dia da Nossa Senhora Aparecida", duration: 1 }],
    },
    {
      id: 11,
      name: "Novembro",
      days: 30,
      holidays: [
        { name: "Dia dos Finados", duration: 1 },
        { name: "Proclamação da República", duration: 1 },
      ],
    },
    {
      id: 12,
      name: "Dezembro",
      days: 31,
      holidays: [{ name: "Natal", duration: 1 }],
    },
  ],
};
