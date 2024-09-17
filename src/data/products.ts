import { Product } from "../@types/product";

export const products: Product[] = [
    {
        id: "1",
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        image: "/src/assets/coffes/expresso.png",
        tags: ["TRADICIONAL"]
    },
    {
        id: "1",
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        image: "/src/assets/coffes/americano.png",
        tags: ["TRADICIONAL"]
    },
    {
        id: "1",
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        image: "/src/assets/coffes/expresso_cremoso.png",
        tags: ["TRADICIONAL"]
    },
    {
        id: "1",
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        image: "/src/assets/coffes/cafe_gelado.png",
        tags: ["TRADICIONAL", "GELADO"]
    },
    {
        id: "2",
        name: "Café com leite",
        description: "Café com leite quentinho e cremoso",
        price: 12.90,
        image: "/src/assets/coffes/cafe_com_leite.png",
        tags: ["TRADICIONAL", "COM LEITE"]
    },
    {
        id: "2",
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 12.90,
        image: "/src/assets/coffes/latte.png",
        tags: ["TRADICIONAL", "COM LEITE"]
    },
    {
        id: "3",
        name: "Cappuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 14.90,
        image: "/src/assets/coffes/capuccino.png",
        tags: ["TRADICIONAL", "COM LEITE"]
    },
    {
        id: "5",
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 14.90,
        image: "/src/assets/coffes/macchiato.png",
        tags: ["TRADICIONAL", "COM LEITE"]
    },
    {
        id: "4",
        name: "Mochaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 16.90,
        image: "/src/assets/coffes/mochaccino.png",
        tags: ["TRADICIONAL", "COM LEITE"]
    },

    {
        id: "6",
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 15.90,
        image: "/src/assets/coffes/chocolate_quente.png",
        tags: ["ESPECIAL", "COM LEITE"]
    },
]