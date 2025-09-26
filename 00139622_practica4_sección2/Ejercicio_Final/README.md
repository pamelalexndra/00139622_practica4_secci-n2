1.Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y 
porqué JS me permite esto? 

let x = 1; Se declara la variable x se le asigna el valor de 1
let y = 2; Se declara a la variable y se le asigna el valor de 2
let z = 3; Se declara a la variable z y se le asigna el valor de 3

x = y; Se le asigna el valor de y a x, x ya no vale 1, ahora vale 2
x += z; A x se le suma 3. Ahora x vale 5
x *= y; A x se le multiplica por 2. Ahora vale 19
x /= y; A x se le divide por 2. Ahora vale 5
x %= x; Modulo de x es 0 porque 5/5 es 1 y no tiene residuo

Javascript permite estas operaciones porque es un lenguaje dinámico y flexible, en 
el cual las variables pueden cambiar de valor y tipo sin restricciones tan estrictas.
 

2.Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y 
ambientes de desarrollo?

En general, los flujos de control se comportan de la misma forma en javascript y
mantienen su escencia, sin embargo, cuentan con matices importances, como
-Asincronía con async/await y Promise que no existen o son tan cómunes en otros lenguajes
-Hoisting, js permite ejecutar variables antes de declararlas y comparar tipos distintos (== / ===)
-Se pueden pasar como argumentos y se pueden retornar funciones dentro de un flujo de control
Cada uno de estos ofrece ventajas únicas, como flexibilidad, asincronía y enfoque funcional que 
lo hacen únido. 