# CODIGO ALEATORIO QUE FIZ NO COMEÇO DA AULA

import random

def rolagemDeDados():
    aleatorio = random.randint(1,6)
    match aleatorio:
        case 1:
            print(aleatorio)
            print("Caiu o n° 1")
        case 2:
            print(aleatorio)
            print("Caiu o n° 2")
        case 3:
            print(aleatorio)
            print("Caiu o n° 3")
        case 4:
            print(aleatorio)
            print("Caiu o n° 4")
        case 5:
            print(aleatorio)
            print("Caiu o n° 5")
        case 6:
            print(aleatorio)
            print("Caiu o n° 6")

rolagemDeDados()



def rolagemDeDado():
    aleatorio = random.randint(1,6)

    if aleatorio in [1]:
        print(aleatorio)
        print("Caiu o n° 1")

    elif aleatorio in [2]:
        print(aleatorio)
        print("Caiu o n° 2")
    
    elif aleatorio in [3]:
        print(aleatorio)
        print("Caiu o n° 3")

    elif aleatorio in [4]:
        print(aleatorio)
        print("Caiu o n° 4")

    elif aleatorio in [5]:
        print(aleatorio)
        print("Caiu o n° 5")

    elif aleatorio in [6]:
        print(aleatorio)
        print("Caiu o n° 6")


rolagemDeDado()


def testeMatematico():
    num1 = random.randint(1,10)
    num2 = random.randint(1,10)

    print(f"\nPergunta: quanto é {num1} vezes {num2}? \n")
    resposta = int(input("insira a resposta: "))

    if resposta == (num1 * num2):
        print("Resposta Correta!")

    else:
        print("Resposta Errada, BURRO!\n1")

    num1 = random.randint(1,100)
    num2 = random.randint(1,100)
    num3 = random.randint(1,100)

    print(f"\nPergunta: quanto é {num1} mais {num2} mais {num3}? \n")
    resposta = int(input("insira a resposta: "))
    
    if resposta == (num1 + num2 + num3):
        print("Resposta Correta!")

    else:
        print("Resposta Errada, BURRO!\n")

testeMatematico()

# powershell -ep bypass 