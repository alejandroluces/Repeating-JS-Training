" "Cree el programa ejecutable Z_VAR_INCOMP_USUARIOSAP* y declare la
" variable CODIGO_SOCIEDAD de tipo N con una longitud de 4 y asígnele el
" valor ‘9527’. Declare otra variable llamada TARIFA de tipo P con una
" longitud de 6 y con 2 decimales y asígnele el valor ‘1489.36’. Muestre por
" pantalla las dos variables utilizando la sentencia WRITE. Asigne el desarrollo
" en su orden y paquete.
" * Reemplace USUARIOSAP con el nombre de su usuario SAP.

REPORT  Z_VAR_INCOMP_USUARIOSAP. 
   
DATA: CODIGO_SOCIEDAD TYPE N LENGTH 4 VALUE '9527',
      TARIFA TYPE P LENGTH 6 DECIMALS 2 VALUE '1489.36'.

WRITE: / 'CODIGO_SOCIEDAD = ', CODIGO_SOCIEDAD,
        / 'TARIFA = ', TARIFA.
```











```abap
" Path: de.abap
" "Cree el programa ejecutable Z_VAR_CONST_USUARIOSAP* y declare la
" constante FECHA de tipo D con el valor ‘20201127’. Declara otra constante
" llamada MONEDA de tipo C con una longitud de 3 con el valor ‘EUR’. Pinta
" en la salida las dos variables utilizando la sentencia WRITE. Agrupa el
" desarrollo en el paquete ZUSUARIOSAP* y asigna la orden de transporte
" asociada a tu usuario SAP.
" * Reemplaza USUARIOSAP con el nombre de tu usuario SAP.

REPORT  Z_VAR_CONST_USUARIOSAP.
CONSTANTS: FECHA TYPE D VALUE '20201127',
           MONEDA TYPE C LENGTH 3 VALUE 'EUR'.

WRITE: / 'FECHA = ', FECHA,
        / 'MONEDA = ', MONEDA.

```

*Cree el programa ejecutable Z_EXPRS_USUARIOSAP*. Agrupe el desarrollo
*en el paquete ZUSUARIOSAP* y asigne la orden de transporte asociada a su
*usuario SAP. Declare las variables VALOR_1, VALOR_2 Y RESULTADO de
*tipo número entero (i) y asigne el valor 12 a la primera variable y el valor 3
*a la segunda variable. Utilice la variable RESULTADO para obtener el
*resultado de las operaciones: suma, resta, multiplicación y división aplicada
*sobre las variables VALOR_1 y VALOR_2. Muestre por pantalla el resultado
*de cada operación utilizando la sentencia WRITE. Asigne el desarrollo en su
*orden y paquete.

```abap

REPORT  Z_EXPRS_USUARIOSAP.
DATA: VALOR_1 TYPE I VALUE 12,
      VALOR_2 TYPE I VALUE 3,
      RESULTADO TYPE I.

RESULTADO = VALOR_1 + VALOR_2.
WRITE: / 'VALOR_1 + VALOR_2 = ', RESULTADO.

RESULTADO = VALOR_1 - VALOR_2.
WRITE: / 'VALOR_1 - VALOR_2 = ', RESULTADO.

RESULTADO = VALOR_1 * VALOR_2.
WRITE: / 'VALOR_1 * VALOR_2 = ', RESULTADO.

RESULTADO = VALOR_1 / VALOR_2.
WRITE: / 'VALOR_1 / VALOR_2 = ', RESULTADO.

```
" quiero crear un programa ejecutable donde se tome la tabla ekko



Cree el programa ejecutable Z_CAD_CAR_USUARIOSAP* agrupando el
desarrollo en el paquete ZUSUARIOSAP* y asigne la orden de transporte
asociada a su usuario SAP. Declare dos variables CENTRO y ALMACEN de
tipo C con una longitud de 10. Asigne el valor ‘MÉXICO’ a la variable CENTRO
y ‘MONTERREY’ a la variable ALMACEN. Convierta los valores de las
variables en minúsculas y muestre por pantalla las dos variables utilizando
la sentencia WRITE. Luego amplíe la declaración de las variables y declare
la tercera variable llamada TEXTO de tipo STRING. Concatene el valor de las
primeras dos variables separadas por espacio en esta y por último, muestre
su valor en la pantalla para comprobar el resultado. 

```abap
REPORT  Z_CAD_CAR_USUARIOSAP.
DATA: CENTRO TYPE C LENGTH 10 VALUE 'MÉXICO',
      ALMACEN TYPE C LENGTH 10 VALUE 'MONTERREY',
      TEXTO TYPE STRING.

CENTRO = CONV #( CENTRO USING CONVERSION LOWER ).
ALMACEN = CONV #( ALMACEN USING CONVERSION LOWER ).

WRITE: / 'CENTRO = ', CENTRO,
        / 'ALMACEN = ', ALMACEN.

TEXTO = CENTRO && ALMACEN.
WRITE: / 'TEXTO = ', TEXTO.
```
