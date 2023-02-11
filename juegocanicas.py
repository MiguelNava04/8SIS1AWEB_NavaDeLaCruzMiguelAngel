import random

print ("bolsa de canicas")
colores=["amarillo","azul","verde","rojo"]
usuarios2=[
    
    {"Nombre":"Dilan"},
    {"Nombre":"Claudio"},
    {'Nombre':'Isabel'},
    {'Nombre':'Sheila'}
    ]

for usuario in usuarios2:
    color = colores[random.randint(0, len(colores) - 1)]
    usuario["color de canica    "] = color
    colores.remove(color)

for i in usuarios2:
    print(i)