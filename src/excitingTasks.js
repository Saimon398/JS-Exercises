/**
 *   Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
 *   Принимает на вход любое количество аргументов и возвращает функцию, которая, в свою очередь, принимает на вход любое количество аргументов и так до бесконечности (привет, рекурсия ;)).
 *   Аргументами могут быть только числа.
 *   Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.
 */


const first = (...args) => {
  const sum = args.reduce((acc, item) => acc += item, 0);
  const second = (...args) => first(sum, ...args); //Возвращает результат функции 
  second.valueOf = () => sum;
  return second;
}
