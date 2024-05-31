const loremipsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem nostrum doloremque ipsa sint eaque cupiditate corporis nisi magnam maiores, sit debitis dicta fugiat porro tempora. Nobis perspiciatis sequi quam aspernatur, dolores rem et doloribus deleniti ad eius itaque dolorum magnam consequatur neque repellendus vitae aut voluptatem exercitationem suscipit. Aliquam facere, deserunt non distinctio modi praesentium ipsa ut dicta rerum natus fuga nihil, expedita explicabo sequi accusamus laudantium est vitae, incidunt eveniet repudiandae. Provident quia tenetur incidunt perferendis, facere rerum consequuntur nemo quibusdam dicta natus quisquam illum cum laudantium, ducimus quas asperiores? Soluta eius, obcaecati, neque sapiente quisquam eos adipisci, qui dolor vero rem quo natus! Obcaecati quos, alias vero vitae sunt cupiditate error laborum iusto similique voluptatem amet hic voluptates architecto. Sapiente consequuntur vel voluptatem cupiditate quidem, aliquid tempore quaerat laudantium atque nisi totam explicabo saepe facilis quos nobis libero magni ipsa qui fugiat, excepturi iure officia. Aspernatur esse repudiandae perferendis explicabo, ipsum ullam sed accusantium facere inventore aperiam! Odio, fugiat rerum. Ea quia qui quod, facere ex illo exercitationem, aliquam eveniet rerum, ratione aspernatur repellat quidem quos? Quisquam repellat quis quod modi! Incidunt minus ut temporibus quia quos? Quae, perspiciatis. Voluptates aperiam, id ratione voluptate, alias unde ullam quisquam tempora modi, deserunt numquam. Quam ipsum tenetur molestiae similique. Eius tenetur obcaecati laboriosam, perspiciatis hic atque exercitationem iusto ipsam eligendi error quibusdam voluptatibus. Fugit id odio itaque consequatur consequuntur ea, veniam consectetur a reiciendis enim fuga eligendi similique provident repellat explicabo dolore sed velit nulla omnis, incidunt temporibus. Ut velit quam at, eveniet molestias aperiam expedita fugit quia saepe vel alias? Fugit qui alias minus dolores cum quos animi consectetur illo dolor ut. Doloremque nesciunt, enim, atque quidem reprehenderit obcaecati perferendis quaerat accusamus temporibus ab facere veniam maiores modi provident quam possimus incidunt dolor quisquam ducimus eum blanditiis! Dignissimos, dolores voluptas harum consequatur odit perferendis, voluptate cupiditate iste quod beatae eaque corrupti commodi! Asperiores, odit. Illum exercitationem omnis quaerat maxime nulla tempora impedit nobis ducimus explicabo ipsa vitae architecto error ipsum libero porro veniam dolorem magnam quibusdam, distinctio aliquam nemo! Nisi odio iure omnis adipisci sapiente dolore sint excepturi! Magnam at vero voluptate, expedita ab aliquid saepe non omnis iure eius explicabo! Atque incidunt ipsa tempora quo velit dolores laudantium quasi ullam quaerat ex earum, necessitatibus dolorum, ipsam, rerum perferendis? Inventore dolorum illo esse praesentium deserunt, reiciendis sunt quae libero, voluptatum a ratione placeat doloribus tempore, neque provident porro voluptatem nihil deleniti recusandae consequatur iste sint! Eaque vero, esse eius necessitatibus deserunt quae, nam recusandae repellat quisquam neque quis, sint aut consectetur quam aspernatur fugit soluta? Numquam corporis, accusamus in eaque quidem ducimus nostrum quasi assumenda sunt voluptas necessitatibus nihil est tenetur suscipit eos ex excepturi blanditiis incidunt maxime! Debitis ab ullam deserunt aliquam sint vitae suscipit assumenda, qui distinctio facilis quis. Architecto aperiam veniam in quibusdam, laudantium praesentium dolor aliquid distinctio labore, commodi neque unde sed debitis rem reprehenderit. Temporibus at voluptates minima aut qui aspernatur vero saepe itaque, ab earum impedit asperiores fugiat fuga debitis deleniti officiis.";

const address = {
    FR: "2 rue de la paix, 75000 Paris",
    US: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    UK: "10 Downing St, Westminster, London SW1A 2AA",
    DE: "Platz der Republik 1, 11011 Berlin",
    IT: "Piazza del Colosseo, 1, 00184 Roma RM",
    NL: "Dam, 1012 JL Amsterdam",
};

const names = {
    DE: [
        "Emilia",
        "Mia",
        "Sophia",
        "Emma",
        "Hannah",
        "Lina",
        "Mila",
        "Ella",
        "Leni",
        "Clara",
        "Noah",
        "Matteo",
        "Elias",
        "Finn",
        "Leon",
        "Theo",
        "Paul",
        "Emil",
        "Henry",
        "Ben",
    ],
    FR: [
        "Jade",
        "Emma",
        "Louise",
        "Mia",
        "Alice",
        "Lina",
        "Ambre",
        "Rose",
        "Chloé",
        "Anna",
        "Léo",
        "Gabriel",
        "Raphaël",
        "Arthur",
        "Louis",
        "Maël",
        "Lucas",
        "Adam",
        "Tiago",
        "Hugo",
    ],
    IT: [
        "Sofia",
        "Aurora",
        "Giulia",
        "Ginevra",
        "Beatrice",
        "Alice",
        "Vittoria",
        "Emma",
        "Ludovica",
        "Matilde",
        "Leonardo",
        "Alessandro",
        "Tommaso",
        "Francesco",
        "Lorenzo",
        "Edoardo",
        "Mattia",
        "Riccardo",
        "Gabriele",
        "Andrea",
    ],
    NL: [
        "Emma",
        "Julia",
        "Mila",
        "Sophie",
        "Olivia",
        "Yara",
        "Saar",
        "Nora",
        "Tess",
        "Noor",
        "Noah",
        "Liam",
        "Luca",
        "Lucas",
        "Mees",
        "Finn",
        "James",
        "Milan",
        "Levi",
        "Sem",
    ],
    US: [
        "Mary",
        "Patricia",
        "Linda",
        "Barbara",
        "Elizabeth",
        "Jennifer",
        "Maria",
        "Susan",
        "Margaret",
        "Dorothy",
        "James",
        "John",
        "Robert",
        "Michael",
        "William",
        "David",
        "Richard",
        "Charles",
        "Joseph",
        "Thomas",
        "Olivia",
        "Emma",
        "Charlotte",
        "Amelia",
        "Sophia",
        "Isabella",
        "Ava",
        "Mia",
        "Evelyn",
        "Luna",
        "Liam",
        "Noah",
        "Oliver",
        "James",
        "Elijah",
        "William",
        "Henry",
        "Lucas",
        "Benjamin",
        "Theodore",
    ],
};

export { loremipsum as lorem, address, names };
