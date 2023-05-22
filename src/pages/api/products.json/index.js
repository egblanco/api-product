import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    res.status(200).json({ data });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

const data = [
  {
    id: "1",
    name: "Faros LED Universales de Motocicleta - Tier 6%",
    price: 600.0,
    description:
      "1 par 3000lm 12V 24W de Faros LED Universales de Motocicleta/ Foco/Luces Auxiliares/Luz de Niebla",
    image:
      "https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01gyzeyq46z8wevbxdhw5z9d2n/fatooos_1682529236_original_1682535587_original.png?1682535585",
  },
  {
    id: "2",
    name: "Aceite multigrado para motocicleta - Tier 25%",
    price: 670.0,
    description:
      "Aceite para moto LUKOIL MOTO 4T SAE 10W-30 (1 litro) | Aceite multigrado para motocicleta 10W-30 (1 Litro) | Líquido para motocicleta Lukoil SAE 10W-30 (1 Litro)",
    image:
      "https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01gyzeykj4rmgbjn9cpsdyexqx/motorr_1682531413_original_1682535576_original.png?1682535574",
  },
  {
    id: "3",
    name: "Batería de auto - Tier 25%",
    price: 460.0,
    description: "Batería para Auto LTH LTH BCI 42",
    image:
      "https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01gyz76r529d2qkrn99em7cac4/LTH1_1682526837_original_1682527448_original.png?1682527447",
  },
  {
    id: "4",
    name: "Filtro de gasolina - Tier 12%",
    price: 850.0,
    description: "Filtro de gasolina - Tier 14%",
    image:
      "https://s3-us-west-2.amazonaws.com/meru-dev/assets/product/01gyz76pz04rc3r3g0b3ye2mfh/FILTROGA_1682526432_original_1682527448_original.png?1682527447",
  },
];
