// javascript/values-and-variables
// variables.js
let firstName = "Petr"; // ? Deklarace a incializace proměnné
let lastName; // ? Deklarace proměnné, v tuto chvílí nemá žádnou hodnotu (je undefined)
lastName = "Fifka"; // ? Inicializace proměnné (nastavení hodnoty)
console.log(firstName); // ? Vypíše hodnotu proměnné firstName: Petr
console.log(firstName + " " + lastName); // ? Sloučení více stringů + přidání mezery
firstName = "Alžběta"; // ? Reinicializace proměnné (změna hodnoty proměnné)
console.log(firstName);
console.log(firstName);
firstName = "Marie";
console.log(firstName);

// * Vlastnosti proměnných var, let, const
// * Proměnná let
let city; // ? Můžu jen deklarovat bez inicializace
// let city; // ! Proměnnou let nemůžu redeklarovat (vytvořit znovu), vyhodí chybu: Cannot redeclare block-scoped variable 'city'
city = "Olomouc";
{
  // ? let se deklaruje pro blok, což znamená, že pokud vytvořím proměnnou let uvnitř bloku, tak existuje jen uvnitř tohoto bloku (nelze použít mimo). Blok = {}
  let country = "Česko";
  console.log(country); // V pořádku - vypíše se
  console.log(city); // ? Je v pořádku, proměnná mimo blok se dostává do bloku
}
// console.log(country); // ! CHYBA při spuštění: ReferenceError: country is not defined

// * Proměnná var
// ! Tuto proměnnou nepoužíváme v novém kódu!
var river;
river = "Vltava";
{
  var username = "petrSvetr"; // ! Proměnná var se deklaruje pro modul (většinou modul = soubor)
}
console.log(username); // ! Oproti let bude fungovat, toto je ale proti standardům moderního programování a může vést k přepisování proměnných, které jsou pojmenované stejně
var river = "Morava"; // ! Redeklarace je možné - riziko přepisu proměnné
console.log(river);

// * Proměnná const
const email = "petr@svetr.cz"; // ? Konstantu musíme deklarovat a inicializovat zároveň
// const street; // ! NELZE: 'const' declarations must be initialized.
// street = "Dlouhá";
// const email = "jiny@email.cz"; // ! Nemůžu redeklarovat const
{
  const country = "Česko"; // ? Const je deklarovaná pro blok
}
// console.log(country); // ! Nelze, country neexistuje mimo blok: ReferenceError: country is not defined
// email = "jiny@email.cz"; // ! Chyba při spuštění: TypeError: Assignment to constant variable.

/*
Více
řádková
poznámka
*/

/**
 * Technicky je toto stále víceřádková poznámka
 *
 * Jedná se ale o tzv. JSDoc, strukturu dokumentace pro funkce, metody a další
 *
 * Navíc lze formátovat pomocí Markdown, například **tučně**
 *
 * Nebo kód:
 * ```js
 * console.log("Jsem v dokumentaci");
 * ```
 */
function documented() {}
