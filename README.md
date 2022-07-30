# Calculo de puntos de la circunferencia. 

El usuario introduce una coordenada del centro de una circunferencia y el valor del radio. 


## Construido con 🛠️

* HTML
* CSS
* JS


## Autores ✒️

José Román Pinelo Escobar


### Explicación

El objetivo de esta página es principalmente la práctica de la programación con JavaScript. 

Consiste en tres inputs donde se introducen los datos de la coordenada del centro de una circunferencia y el valor del radio.

![1](https://user-images.githubusercontent.com/71656431/181996492-bc1c99f5-6b8b-4c4d-8528-252462d0d282.jpg)

Cuando damos click en el botón ‘Obtener puntos’, se empieza a hacer un recorrido de valores de x y y, que al hacer cálculos sustituyéndolos en la ecuación de dicha circunferencia, compara los resultados con el valor del radio elevado al cuadrado. También muestra un mensaje en el DOM de ‘Buscando puntos…’ e imprime la ecuación.

![2](https://user-images.githubusercontent.com/71656431/181996491-f870d0bc-0c74-4248-b7d5-84c31df7b018.jpg)

Si introduces un valor del radio negativo, igual a 0 o no introduces algún valor, te muestra una ventana con el mensaje correspondiente.

![8](https://user-images.githubusercontent.com/71656431/181996483-92de8bfd-4c5b-4b78-8159-e9c35cb0ddb3.jpg)

![7](https://user-images.githubusercontent.com/71656431/181996485-bdafabf9-773b-4aed-815f-695f5c257519.jpg)

![6](https://user-images.githubusercontent.com/71656431/181996486-a3de59dc-9d9a-489f-928c-4df228f9a431.jpg)

Si los input de las coordenadas se dejan vacíos, en la ecuación de la circunferencia se toman como 0.

![5](https://user-images.githubusercontent.com/71656431/181996488-a1a6cd48-57fd-47ba-97a2-a157e5c96700.jpg)

En caso de ser iguales, pinta en el DOM a través de una tabla los valores de x y y que satisfacen la ecuación.

![3](https://user-images.githubusercontent.com/71656431/181996490-e142b614-f6e2-43e7-a58d-f2e4e3445813.jpg)

Cuando termina de buscar, aparece el mensaje de ‘No hay mas resultados’. 

![4](https://user-images.githubusercontent.com/71656431/181996489-659743c4-941e-40af-99e0-d8cb4f8a6f25.jpg)

Al presionar el botón ‘Borrar’, simplemente reinicia la página.

Esto como docente de matemáticas, me ayuda a generar ejercicios para un tema de Geometría analítica.




En el siguiente link puedes ver la página funcionando: 

https://romanpinelo.github.io/puntosCircunferencia/