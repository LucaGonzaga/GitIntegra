package com.example;
import com.example.Models.ProdutoCartesiano;

public class Main {
    public static void main(String[] args) {
        
        byte num1 = 10;
        byte num2 = 15;
        ProdutoCartesiano num = new ProdutoCartesiano(num1, num2);
        byte result = num.SomaSimples();

        System.out.println(result);
    }
}