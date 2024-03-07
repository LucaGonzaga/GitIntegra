package com.example;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.*;
import com.example.Models.ProdutoCartesiano;

public class Main {
    public static void main(String[] args) {

        byte num1 = 10;
        byte num2 = 15;
        ProdutoCartesiano num = new ProdutoCartesiano(num1, num2);
        byte result = num.SomaSimples();

        System.out.println(result);
        try {
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/TI2 Database",
                    "postgres", "luca123");

            if (connection != null) {
                System.out.println("Banco de dados conectado com sucesso");
                java.sql.Statement stm = connection.createStatement();

            } else {
                System.out.println("Conexao falhou!");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void consultaDaados(Statement stm){
        String sql = "select id, nome from usuario";


        try{
            ResultSet result = stm.executeQuery(sql);
        } catch(SQLException){
            e.printStackTrace();
        } q
    }
}
