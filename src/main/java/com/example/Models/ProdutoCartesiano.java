package com.example.Models;
public class ProdutoCartesiano {

    private byte a, b;

    // Construtores
    public ProdutoCartesiano(byte a, byte b){
        this.a = a;
        this.b = b;
    }


    // métodos

    public Byte SomaSimples(){

        byte soma;
        soma = (byte) (a + b);

        return soma; 
    }
    

}