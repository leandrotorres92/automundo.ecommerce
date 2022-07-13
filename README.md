AUTOMUNDO, REACT PROJECT.

Es un e-Commerce desarrollado en REACT JS, el proyecto se trata de una App de autos donde el usuario puede visualizar el catalogo de productos o autos en este caso, filtrar por tipos de autos, mediante el menú de navegación, y también ver con más detalle las características principales de cada producto, representado en una Card con su imagen, nombre, descripción y precio.

El proyecto me sirve a mí como desarrollador Font End para poner en práctica los conocimientos y habilidades aprendidas en la academia CODERHOUSE y ya que se trata de una app súper dinámica, se puede adaptar fácilmente a otros tipos de productos.

Demo
![](animation.gif)

NAVEGACION DE LA APP.

La aplicación esta estructurada de la siguiente forma:

    Sección Home (Ruta: "/")
        Componentes: ItemListContainer/ 
                                        ItemList/ 
                                                    Item.
    
    Sección Type (Ruta: "/type/:typeId")
        Componentes: ItemListContainer/ 
                                        ItemList/ 
                                                    Item.

    Sección Detail (Ruta: "/detail/:productId")
        Componentes: ItemDetailContainer/ 
                                            ItemDetail/ 
                                                        ItemCount.

    Sección Cart (Ruta: "/cart")
        Componentes: Cart/ 
                            CartItemList/ 
                                            CartItem.

    Sección Checkout (Ruta: "/checkout")
        Componente: Checkout

OBJETOS BACKEND, se utilizo Firebase según los siguientes Documentos:

    Productos:
        Descripción,
        Imagen,
        Nombre,
        Origen,
        Precio,
        Stock,
        Tipo.
    
    Ordenes:
        Nombre,
        Mail,
        Teléfono,
        Dirección,
        Ítems,
        Total a pagar.

FORMA DE INSTALAR LA APLICACION:

    Clonar proyecto
        En tu editor de codigo, abrir una terminal y luego escibir:
            $ git clone https://leandrotorres92.github.io/automundo.ecommerce/

    Instalar dependencias
        Acceder al directorio con cd y escribir:
            $ npm install
            Ejectuar el proyecto
            Escribir el comando:
            $ npm start

CONTRIBUCIONES O CRITICAS, siempre falta algo! Asique cualquier cosa para agregar no hay problema, podes proceder de la siguiente manera:

    1- Realiza el Fork del Proyecto

    2- Crea tu Branch en tu terminal (git checkout -b "feature/lo que desees")

    3- Commitea tus cambios (git commit -m 'lo que desees')

    4- Pushea la Branch (git push origin feature/"lo que desees")

    5- Genera un Pull Request

AUTOR

Leandro Torres, estudiante de Tecnologias de Programacion en CODERHOUSE.